/**
 * 微信小程序websocket实现
 */
const Transport = require("../transport");
const parser = require("engine.io-parser");
const parseqs = require("parseqs");
const yeast = require("yeast");
const debug = require("debug")("engine.io-client:websocket");

class WS extends Transport {
  /**
   * WebSocket transport constructor.
   *
   * @api {Object} connection options
   * @api public
   */
  constructor(opts) {
    super(opts);

    this.supportsBinary = !opts.forceBase64;
  }

  /**
   * Transport name.
   *
   * @api public
   */
  get name() {
    return "websocket";
  }

  /**
   * Opens socket.
   *
   * @api private
   */
  doOpen() {
    if (!this.check()) {
      // let probe timeout
      return;
    }

    const uri = this.uri();
    const opts = {
      url: uri
    };

    if (this.opts.auth) {
      opts.data = this.opts.auth;
    }
    if (this.opts.protocols) {
      opts.protocols = this.opts.protocols;
    }
    if (this.opts.extraHeaders) {
      opts.headers = this.opts.extraHeaders;
    }

    try {
      this.ws = wx.connectSocket(opts)
    } catch (err) {
      return this.emit("error", err);
    }

    if (this.ws.binaryType === undefined) {
      this.supportsBinary = false;
    }

    if (this.ws.supports && this.ws.supports.binary) {
      this.supportsBinary = true;
      this.ws.binaryType = 'nodebuffer';
    } else {
      this.ws.binaryType = 'arraybuffer';
    }
    // this.ws.binaryType = this.socket.binaryType || defaultBinaryType;

    this.addEventListeners();
  }

  /**
   * Adds event listeners to the socket
   *
   * @api private
   */
  addEventListeners() {
    const self = this;

    this.ws.onOpen(function () {
      debug('websocket opened!');
      self.onOpen();
    });
    this.ws.onError(function (e) {
      debug('websocket error!', e);
      self.onError('websocket error', e);
    });
    this.ws.onClose(function () {
      debug('websocket closed!');
      self.onClose();
    });
    this.ws.onMessage(function (ev) {
      debug(`websocket received data: ${ev.data}, type: ${typeof (ev.data)}`);
      self.onData(ev.data);
    });
  }

  /**
   * Writes data to socket.
   *
   * @param {Array} array of packets.
   * @api private
   */
  write(packets) {
    const self = this;
    this.writable = false;

    // encodePacket efficient as it uses WS framing
    // no need for encodePayload
    let total = packets.length;
    let i = 0;
    const l = total;
    for (; i < l; i++) {
      (function(packet) {
        parser.encodePacket(packet, self.supportsBinary, function(data) {
          // Sometimes the websocket has already been closed but the browser didn't
          // have a chance of informing us about it yet, in that case send will
          // throw an error
          try {
            self.ws.send({data});
          } catch (e) {
            debug("websocket closed before onclose event");
          }
          --total || done();
        });
      })(packets[i]);
    }

    function done() {
      self.emit("flush");

      // fake drain
      // defer to next tick to allow Socket to clear writeBuffer
      setTimeout(function() {
        self.writable = true;
        self.emit("drain");
      }, 0);
    }
  }

  /**
   * Called upon close
   *
   * @api private
   */
  onClose() {
    // Transport.prototype.onClose.call(this);
    super.onClose();
  }

  /**
   * Closes socket.
   *
   * @api private
   */
  doClose() {
    if (typeof this.ws !== "undefined") {
      this.ws.close();
    }
  }

  /**
   * Generates uri for connection.
   *
   * @api private
   */
  uri() {
    let query = this.query || {};
    const schema = this.opts.secure ? "wss" : "ws";
    let port = "";

    // avoid port if default for schema
    if (
      this.opts.port &&
      (("wss" === schema && Number(this.opts.port) !== 443) ||
        ("ws" === schema && Number(this.opts.port) !== 80))
    ) {
      port = ":" + this.opts.port;
    }

    // append timestamp to URI
    if (this.opts.timestampRequests) {
      query[this.opts.timestampParam] = yeast();
    }

    // communicate binary support capabilities
    if (!this.supportsBinary) {
      query.b64 = 1;
    }

    query = parseqs.encode(query);

    // prepend ? to query
    if (query.length) {
      query = "?" + query;
    }

    const ipv6 = this.opts.hostname.indexOf(":") !== -1;
    return (
      schema +
      "://" +
      (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) +
      port +
      this.opts.path +
      query
    );
  }

  /**
   * Feature detection for WebSocket.
   *
   * @return {Boolean} whether this transport is available.
   * @api public
   */
  check() {
    return ('function' === typeof wx.connectSocket);
  }
}

module.exports = WS;
