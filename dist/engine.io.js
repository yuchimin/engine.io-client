/*!
 * Engine.IO-WXMP v4.0.5
 * (c) 2014-2020 Guillermo Rauch
 * Released under the MIT License.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["eio"] = factory();
	else
		root["eio"] = factory();
})((() => {
      if (typeof self !== 'undefined') {
          return self;
      } else if (typeof window !== 'undefined') {
          return window;
      } else if (typeof global !== 'undefined') {
          return global;
      } else {
          return Function('return this')();
      }
    })(), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Socket = __webpack_require__(/*! ./socket */ "./lib/socket.js");

module.exports = function (uri, opts) {
  return new Socket(uri, opts);
};
/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */


module.exports.Socket = Socket;
module.exports.protocol = Socket.protocol; // this is an int

module.exports.Transport = __webpack_require__(/*! ./transport */ "./lib/transport.js");
module.exports.transports = __webpack_require__(/*! ./transports/index */ "./lib/transports/index.js");
module.exports.parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/index.js");

/***/ }),

/***/ "./lib/socket.js":
/*!***********************!*\
  !*** ./lib/socket.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var transports = __webpack_require__(/*! ./transports/index */ "./lib/transports/index.js");

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")("engine.io-client:socket");

var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/index.js");

var parseuri = __webpack_require__(/*! parseuri */ "./node_modules/parseuri/index.js");

var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");

var Socket = /*#__PURE__*/function (_Emitter) {
  _inherits(Socket, _Emitter);

  var _super = _createSuper(Socket);

  /**
   * Socket constructor.
   *
   * @param {String|Object} uri or options
   * @param {Object} options
   * @api public
   */
  function Socket(uri) {
    var _this;

    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Socket);

    _this = _super.call(this);

    if (uri && "object" === _typeof(uri)) {
      opts = uri;
      uri = null;
    }

    if (uri) {
      uri = parseuri(uri);
      opts.hostname = uri.host;
      opts.secure = uri.protocol === "https" || uri.protocol === "wss";
      opts.port = uri.port;
      if (uri.query) opts.query = uri.query;
    } else if (opts.host) {
      opts.hostname = parseuri(opts.host).host;
    }

    _this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;

    if (opts.hostname && !opts.port) {
      // if no port is specified manually, use the protocol default
      opts.port = _this.secure ? "443" : "80";
    }

    _this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
    _this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : _this.secure ? 443 : 80);
    _this.transports = opts.transports || ["polling", "websocket"];
    _this.readyState = "";
    _this.writeBuffer = [];
    _this.prevBufferLen = 0;
    _this.opts = _extends({
      path: "/engine.io",
      agent: false,
      withCredentials: false,
      upgrade: true,
      jsonp: true,
      timestampParam: "t",
      rememberUpgrade: false,
      rejectUnauthorized: true,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {}
    }, opts);
    _this.opts.path = _this.opts.path.replace(/\/$/, "") + "/";

    if (typeof _this.opts.query === "string") {
      _this.opts.query = parseqs.decode(_this.opts.query);
    } // set on handshake


    _this.id = null;
    _this.upgrades = null;
    _this.pingInterval = null;
    _this.pingTimeout = null; // set on heartbeat

    _this.pingTimeoutTimer = null;

    _this.open();

    return _this;
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} transport name
   * @return {Transport}
   * @api private
   */


  _createClass(Socket, [{
    key: "createTransport",
    value: function createTransport(name) {
      debug('creating transport "%s"', name);
      var query = clone(this.opts.query); // append engine.io protocol identifier

      query.EIO = parser.protocol; // transport name

      query.transport = name; // session id if we already have one

      if (this.id) query.sid = this.id;

      var opts = _extends({}, this.opts.transportOptions[name], this.opts, {
        query: query,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port
      });

      debug("options: %j", opts);
      return new transports[name](opts);
    }
    /**
     * Initializes transport to use and starts probe.
     *
     * @api private
     */

  }, {
    key: "open",
    value: function open() {
      var transport;

      if (this.opts.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
        transport = "websocket";
      } else if (0 === this.transports.length) {
        // Emit error on next tick so it can be listened to
        var self = this;
        setTimeout(function () {
          self.emit("error", "No transports available");
        }, 0);
        return;
      } else {
        transport = this.transports[0];
      }

      this.readyState = "opening"; // Retry with the next transport if the transport is disabled (jsonp: false)

      try {
        transport = this.createTransport(transport);
      } catch (e) {
        debug("error while creating transport: %s", e);
        this.transports.shift();
        this.open();
        return;
      }

      transport.open();
      this.setTransport(transport);
    }
    /**
     * Sets the current transport. Disables the existing one (if any).
     *
     * @api private
     */

  }, {
    key: "setTransport",
    value: function setTransport(transport) {
      debug("setting transport %s", transport.name);
      var self = this;

      if (this.transport) {
        debug("clearing existing transport %s", this.transport.name);
        this.transport.removeAllListeners();
      } // set up transport


      this.transport = transport; // set up transport listeners

      transport.on("drain", function () {
        self.onDrain();
      }).on("packet", function (packet) {
        self.onPacket(packet);
      }).on("error", function (e) {
        self.onError(e);
      }).on("close", function () {
        self.onClose("transport close");
      });
    }
    /**
     * Probes a transport.
     *
     * @param {String} transport name
     * @api private
     */

  }, {
    key: "probe",
    value: function probe(name) {
      debug('probing transport "%s"', name);
      var transport = this.createTransport(name, {
        probe: 1
      });
      var failed = false;
      var self = this;
      Socket.priorWebsocketSuccess = false;

      function onTransportOpen() {
        if (self.onlyBinaryUpgrades) {
          var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
          failed = failed || upgradeLosesBinary;
        }

        if (failed) return;
        debug('probe transport "%s" opened', name);
        transport.send([{
          type: "ping",
          data: "probe"
        }]);
        transport.once("packet", function (msg) {
          if (failed) return;

          if ("pong" === msg.type && "probe" === msg.data) {
            debug('probe transport "%s" pong', name);
            self.upgrading = true;
            self.emit("upgrading", transport);
            if (!transport) return;
            Socket.priorWebsocketSuccess = "websocket" === transport.name;
            debug('pausing current transport "%s"', self.transport.name);
            self.transport.pause(function () {
              if (failed) return;
              if ("closed" === self.readyState) return;
              debug("changing transport and sending upgrade packet");
              cleanup();
              self.setTransport(transport);
              transport.send([{
                type: "upgrade"
              }]);
              self.emit("upgrade", transport);
              transport = null;
              self.upgrading = false;
              self.flush();
            });
          } else {
            debug('probe transport "%s" failed', name);
            var err = new Error("probe error");
            err.transport = transport.name;
            self.emit("upgradeError", err);
          }
        });
      }

      function freezeTransport() {
        if (failed) return; // Any callback called by transport should be ignored since now

        failed = true;
        cleanup();
        transport.close();
        transport = null;
      } // Handle any error that happens while probing


      function onerror(err) {
        var error = new Error("probe error: " + err);
        error.transport = transport.name;
        freezeTransport();
        debug('probe transport "%s" failed because of error: %s', name, err);
        self.emit("upgradeError", error);
      }

      function onTransportClose() {
        onerror("transport closed");
      } // When the socket is closed while we're probing


      function onclose() {
        onerror("socket closed");
      } // When the socket is upgraded while we're probing


      function onupgrade(to) {
        if (transport && to.name !== transport.name) {
          debug('"%s" works - aborting "%s"', to.name, transport.name);
          freezeTransport();
        }
      } // Remove all listeners on the transport and on self


      function cleanup() {
        transport.removeListener("open", onTransportOpen);
        transport.removeListener("error", onerror);
        transport.removeListener("close", onTransportClose);
        self.removeListener("close", onclose);
        self.removeListener("upgrading", onupgrade);
      }

      transport.once("open", onTransportOpen);
      transport.once("error", onerror);
      transport.once("close", onTransportClose);
      this.once("close", onclose);
      this.once("upgrading", onupgrade);
      transport.open();
    }
    /**
     * Called when connection is deemed open.
     *
     * @api public
     */

  }, {
    key: "onOpen",
    value: function onOpen() {
      debug("socket open");
      this.readyState = "open";
      Socket.priorWebsocketSuccess = "websocket" === this.transport.name;
      this.emit("open");
      this.flush(); // we check for `readyState` in case an `open`
      // listener already closed the socket

      if ("open" === this.readyState && this.opts.upgrade && this.transport.pause) {
        debug("starting upgrade probes");
        var i = 0;
        var l = this.upgrades.length;

        for (; i < l; i++) {
          this.probe(this.upgrades[i]);
        }
      }
    }
    /**
     * Handles a packet.
     *
     * @api private
     */

  }, {
    key: "onPacket",
    value: function onPacket(packet) {
      if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
        debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
        this.emit("packet", packet); // Socket is live - any packet counts

        this.emit("heartbeat");

        switch (packet.type) {
          case "open":
            this.onHandshake(JSON.parse(packet.data));
            break;

          case "ping":
            this.resetPingTimeout();
            this.sendPacket("pong");
            this.emit("pong");
            break;

          case "error":
            var err = new Error("server error");
            err.code = packet.data;
            this.onError(err);
            break;

          case "message":
            this.emit("data", packet.data);
            this.emit("message", packet.data);
            break;
        }
      } else {
        debug('packet received with socket readyState "%s"', this.readyState);
      }
    }
    /**
     * Called upon handshake completion.
     *
     * @param {Object} handshake obj
     * @api private
     */

  }, {
    key: "onHandshake",
    value: function onHandshake(data) {
      this.emit("handshake", data);
      this.id = data.sid;
      this.transport.query.sid = data.sid;
      this.upgrades = this.filterUpgrades(data.upgrades);
      this.pingInterval = data.pingInterval;
      this.pingTimeout = data.pingTimeout;
      this.onOpen(); // In case open handler closes socket

      if ("closed" === this.readyState) return;
      this.resetPingTimeout();
    }
    /**
     * Sets and resets ping timeout timer based on server pings.
     *
     * @api private
     */

  }, {
    key: "resetPingTimeout",
    value: function resetPingTimeout() {
      var _this2 = this;

      clearTimeout(this.pingTimeoutTimer);
      this.pingTimeoutTimer = setTimeout(function () {
        _this2.onClose("ping timeout");
      }, this.pingInterval + this.pingTimeout);
    }
    /**
     * Called on `drain` event
     *
     * @api private
     */

  }, {
    key: "onDrain",
    value: function onDrain() {
      this.writeBuffer.splice(0, this.prevBufferLen); // setting prevBufferLen = 0 is very important
      // for example, when upgrading, upgrade packet is sent over,
      // and a nonzero prevBufferLen could cause problems on `drain`

      this.prevBufferLen = 0;

      if (0 === this.writeBuffer.length) {
        this.emit("drain");
      } else {
        this.flush();
      }
    }
    /**
     * Flush write buffers.
     *
     * @api private
     */

  }, {
    key: "flush",
    value: function flush() {
      if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
        debug("flushing %d packets in socket", this.writeBuffer.length);
        this.transport.send(this.writeBuffer); // keep track of current length of writeBuffer
        // splice writeBuffer and callbackBuffer on `drain`

        this.prevBufferLen = this.writeBuffer.length;
        this.emit("flush");
      }
    }
    /**
     * Sends a message.
     *
     * @param {String} message.
     * @param {Function} callback function.
     * @param {Object} options.
     * @return {Socket} for chaining.
     * @api public
     */

  }, {
    key: "write",
    value: function write(msg, options, fn) {
      this.sendPacket("message", msg, options, fn);
      return this;
    }
  }, {
    key: "send",
    value: function send(msg, options, fn) {
      this.sendPacket("message", msg, options, fn);
      return this;
    }
    /**
     * Sends a packet.
     *
     * @param {String} packet type.
     * @param {String} data.
     * @param {Object} options.
     * @param {Function} callback function.
     * @api private
     */

  }, {
    key: "sendPacket",
    value: function sendPacket(type, data, options, fn) {
      if ("function" === typeof data) {
        fn = data;
        data = undefined;
      }

      if ("function" === typeof options) {
        fn = options;
        options = null;
      }

      if ("closing" === this.readyState || "closed" === this.readyState) {
        return;
      }

      options = options || {};
      options.compress = false !== options.compress;
      var packet = {
        type: type,
        data: data,
        options: options
      };
      this.emit("packetCreate", packet);
      this.writeBuffer.push(packet);
      if (fn) this.once("flush", fn);
      this.flush();
    }
    /**
     * Closes the connection.
     *
     * @api private
     */

  }, {
    key: "close",
    value: function close() {
      var self = this;

      if ("opening" === this.readyState || "open" === this.readyState) {
        this.readyState = "closing";

        if (this.writeBuffer.length) {
          this.once("drain", function () {
            if (this.upgrading) {
              waitForUpgrade();
            } else {
              close();
            }
          });
        } else if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      }

      function close() {
        self.onClose("forced close");
        debug("socket closing - telling transport to close");
        self.transport.close();
      }

      function cleanupAndClose() {
        self.removeListener("upgrade", cleanupAndClose);
        self.removeListener("upgradeError", cleanupAndClose);
        close();
      }

      function waitForUpgrade() {
        // wait for upgrade to finish since we can't send packets while pausing a transport
        self.once("upgrade", cleanupAndClose);
        self.once("upgradeError", cleanupAndClose);
      }

      return this;
    }
    /**
     * Called upon transport error
     *
     * @api private
     */

  }, {
    key: "onError",
    value: function onError(err) {
      debug("socket error %j", err);
      Socket.priorWebsocketSuccess = false;
      this.emit("error", err);
      this.onClose("transport error", err);
    }
    /**
     * Called upon transport close.
     *
     * @api private
     */

  }, {
    key: "onClose",
    value: function onClose(reason, desc) {
      if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
        debug('socket close with reason: "%s"', reason);
        var self = this; // clear timers

        clearTimeout(this.pingIntervalTimer);
        clearTimeout(this.pingTimeoutTimer); // stop event from firing again for transport

        this.transport.removeAllListeners("close"); // ensure transport won't stay open

        this.transport.close(); // ignore further transport communication

        this.transport.removeAllListeners(); // set ready state

        this.readyState = "closed"; // clear session id

        this.id = null; // emit close event

        this.emit("close", reason, desc); // clean buffers after, so users can still
        // grab the buffers on `close` event

        self.writeBuffer = [];
        self.prevBufferLen = 0;
      }
    }
    /**
     * Filters upgrades, returning only those matching client transports.
     *
     * @param {Array} server upgrades
     * @api private
     *
     */

  }, {
    key: "filterUpgrades",
    value: function filterUpgrades(upgrades) {
      var filteredUpgrades = [];
      var i = 0;
      var j = upgrades.length;

      for (; i < j; i++) {
        if (~this.transports.indexOf(upgrades[i])) filteredUpgrades.push(upgrades[i]);
      }

      return filteredUpgrades;
    }
  }]);

  return Socket;
}(Emitter);

Socket.priorWebsocketSuccess = false;
/**
 * Protocol version.
 *
 * @api public
 */

Socket.protocol = parser.protocol; // this is an int

function clone(obj) {
  var o = {};

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = obj[i];
    }
  }

  return o;
}

module.exports = Socket;

/***/ }),

/***/ "./lib/transport.js":
/*!**************************!*\
  !*** ./lib/transport.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/index.js");

var Emitter = __webpack_require__(/*! component-emitter */ "./node_modules/component-emitter/index.js");

var Transport = /*#__PURE__*/function (_Emitter) {
  _inherits(Transport, _Emitter);

  var _super = _createSuper(Transport);

  /**
   * Transport abstract constructor.
   *
   * @param {Object} options.
   * @api private
   */
  function Transport(opts) {
    var _this;

    _classCallCheck(this, Transport);

    _this = _super.call(this);
    _this.opts = opts;
    _this.query = opts.query;
    _this.readyState = "";
    _this.socket = opts.socket;
    return _this;
  }
  /**
   * Emits an error.
   *
   * @param {String} str
   * @return {Transport} for chaining
   * @api public
   */


  _createClass(Transport, [{
    key: "onError",
    value: function onError(msg, desc) {
      var err = new Error(msg);
      err.type = "TransportError";
      err.description = desc;
      this.emit("error", err);
      return this;
    }
    /**
     * Opens the transport.
     *
     * @api public
     */

  }, {
    key: "open",
    value: function open() {
      if ("closed" === this.readyState || "" === this.readyState) {
        this.readyState = "opening";
        this.doOpen();
      }

      return this;
    }
    /**
     * Closes the transport.
     *
     * @api private
     */

  }, {
    key: "close",
    value: function close() {
      if ("opening" === this.readyState || "open" === this.readyState) {
        this.doClose();
        this.onClose();
      }

      return this;
    }
    /**
     * Sends multiple packets.
     *
     * @param {Array} packets
     * @api private
     */

  }, {
    key: "send",
    value: function send(packets) {
      if ("open" === this.readyState) {
        this.write(packets);
      } else {
        throw new Error("Transport not open");
      }
    }
    /**
     * Called upon open
     *
     * @api private
     */

  }, {
    key: "onOpen",
    value: function onOpen() {
      this.readyState = "open";
      this.writable = true;
      this.emit("open");
    }
    /**
     * Called with data.
     *
     * @param {String} data
     * @api private
     */

  }, {
    key: "onData",
    value: function onData(data) {
      var packet = parser.decodePacket(data, this.socket.binaryType);
      this.onPacket(packet);
    }
    /**
     * Called with a decoded packet.
     */

  }, {
    key: "onPacket",
    value: function onPacket(packet) {
      this.emit("packet", packet);
    }
    /**
     * Called upon close.
     *
     * @api private
     */

  }, {
    key: "onClose",
    value: function onClose() {
      this.readyState = "closed";
      this.emit("close");
    }
  }]);

  return Transport;
}(Emitter);

module.exports = Transport;

/***/ }),

/***/ "./lib/transports/index.js":
/*!*********************************!*\
  !*** ./lib/transports/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var websocket = __webpack_require__(/*! ./wx-websocket */ "./lib/transports/wx-websocket.js");

exports.websocket = websocket;

/***/ }),

/***/ "./lib/transports/wx-websocket.js":
/*!****************************************!*\
  !*** ./lib/transports/wx-websocket.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * 微信小程序websocket实现
 */
var Transport = __webpack_require__(/*! ../transport */ "./lib/transport.js");

var parser = __webpack_require__(/*! engine.io-parser */ "./node_modules/engine.io-parser/lib/index.js");

var parseqs = __webpack_require__(/*! parseqs */ "./node_modules/parseqs/index.js");

var yeast = __webpack_require__(/*! yeast */ "./node_modules/yeast/index.js");

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")("engine.io-client:websocket");

var WS = /*#__PURE__*/function (_Transport) {
  _inherits(WS, _Transport);

  var _super = _createSuper(WS);

  /**
   * WebSocket transport constructor.
   *
   * @api {Object} connection options
   * @api public
   */
  function WS(opts) {
    var _this;

    _classCallCheck(this, WS);

    _this = _super.call(this, opts);
    _this.supportsBinary = !opts.forceBase64;
    return _this;
  }
  /**
   * Transport name.
   *
   * @api public
   */


  _createClass(WS, [{
    key: "doOpen",

    /**
     * Opens socket.
     *
     * @api private
     */
    value: function doOpen() {
      if (!this.check()) {
        // let probe timeout
        return;
      }

      var uri = this.uri();
      var opts = {
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
        this.ws = wx.connectSocket(opts);
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
      } // this.ws.binaryType = this.socket.binaryType || defaultBinaryType;


      this.addEventListeners();
    }
    /**
     * Adds event listeners to the socket
     *
     * @api private
     */

  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var self = this;
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
        debug("websocket received data: ".concat(ev.data, ", type: ").concat(_typeof(ev.data)));
        self.onData(ev.data);
      });
    }
    /**
     * Writes data to socket.
     *
     * @param {Array} array of packets.
     * @api private
     */

  }, {
    key: "write",
    value: function write(packets) {
      var self = this;
      this.writable = false; // encodePacket efficient as it uses WS framing
      // no need for encodePayload

      var total = packets.length;
      var i = 0;
      var l = total;

      for (; i < l; i++) {
        (function (packet) {
          parser.encodePacket(packet, self.supportsBinary, function (data) {
            // Sometimes the websocket has already been closed but the browser didn't
            // have a chance of informing us about it yet, in that case send will
            // throw an error
            try {
              self.ws.send({
                data: data
              });
            } catch (e) {
              debug("websocket closed before onclose event");
            }

            --total || done();
          });
        })(packets[i]);
      }

      function done() {
        self.emit("flush"); // fake drain
        // defer to next tick to allow Socket to clear writeBuffer

        setTimeout(function () {
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

  }, {
    key: "onClose",
    value: function onClose() {
      // Transport.prototype.onClose.call(this);
      _get(_getPrototypeOf(WS.prototype), "onClose", this).call(this);
    }
    /**
     * Closes socket.
     *
     * @api private
     */

  }, {
    key: "doClose",
    value: function doClose() {
      if (typeof this.ws !== "undefined") {
        this.ws.close();
      }
    }
    /**
     * Generates uri for connection.
     *
     * @api private
     */

  }, {
    key: "uri",
    value: function uri() {
      var query = this.query || {};
      var schema = this.opts.secure ? "wss" : "ws";
      var port = ""; // avoid port if default for schema

      if (this.opts.port && ("wss" === schema && Number(this.opts.port) !== 443 || "ws" === schema && Number(this.opts.port) !== 80)) {
        port = ":" + this.opts.port;
      } // append timestamp to URI


      if (this.opts.timestampRequests) {
        query[this.opts.timestampParam] = yeast();
      } // communicate binary support capabilities


      if (!this.supportsBinary) {
        query.b64 = 1;
      }

      query = parseqs.encode(query); // prepend ? to query

      if (query.length) {
        query = "?" + query;
      }

      var ipv6 = this.opts.hostname.indexOf(":") !== -1;
      return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + query;
    }
    /**
     * Feature detection for WebSocket.
     *
     * @return {Boolean} whether this transport is available.
     * @api public
     */

  }, {
    key: "check",
    value: function check() {
      return 'function' === typeof wx.connectSocket;
    }
  }, {
    key: "name",
    get: function get() {
      return "websocket";
    }
  }]);

  return WS;
}(Transport);

module.exports = WS;

/***/ }),

/***/ "./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function (chars) {
  "use strict";

  exports.encode = function (arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
        i,
        len = bytes.length,
        base64 = "";

    for (i = 0; i < len; i += 3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
      base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
      base64 += chars[bytes[i + 2] & 63];
    }

    if (len % 3 === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode = function (base64) {
    var bufferLength = base64.length * 0.75,
        len = base64.length,
        i,
        p = 0,
        encoded1,
        encoded2,
        encoded3,
        encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;

      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
        bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i += 4) {
      encoded1 = chars.indexOf(base64[i]);
      encoded2 = chars.indexOf(base64[i + 1]);
      encoded3 = chars.indexOf(base64[i + 2]);
      encoded4 = chars.indexOf(base64[i + 3]);
      bytes[p++] = encoded1 << 2 | encoded2 >> 4;
      bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
      bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }

    return arraybuffer;
  };
})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");

/***/ }),

/***/ "./node_modules/component-emitter/index.js":
/*!*************************************************!*\
  !*** ./node_modules/component-emitter/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Expose `Emitter`.
 */
if (true) {
  module.exports = Emitter;
}
/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */


function Emitter(obj) {
  if (obj) return mixin(obj);
}

;
/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }

  return obj;
}
/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
  return this;
};
/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.once = function (event, fn) {
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};
/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {}; // all

  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  } // specific event


  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this; // remove all handlers

  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  } // remove specific handler


  var cb;

  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];

    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  } // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.


  if (callbacks.length === 0) {
    delete this._callbacks['$' + event];
  }

  return this;
};
/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */


Emitter.prototype.emit = function (event) {
  this._callbacks = this._callbacks || {};
  var args = new Array(arguments.length - 1),
      callbacks = this._callbacks['$' + event];

  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }

  if (callbacks) {
    callbacks = callbacks.slice(0);

    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};
/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */


Emitter.prototype.listeners = function (event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};
/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */


Emitter.prototype.hasListeners = function (event) {
  return !!this.listeners(event).length;
};

/***/ }),

/***/ "./node_modules/debug/node_modules/ms/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/debug/node_modules/ms/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Helpers.
 */
var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {};

  var type = _typeof(val);

  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options["long"] ? fmtLong(val) : fmtShort(val);
  }

  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */


function parse(str) {
  str = String(str);

  if (str.length > 100) {
    return;
  }

  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);

  if (!match) {
    return;
  }

  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();

  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;

    case 'weeks':
    case 'week':
    case 'w':
      return n * w;

    case 'days':
    case 'day':
    case 'd':
      return n * d;

    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;

    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;

    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;

    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;

    default:
      return undefined;
  }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtShort(ms) {
  var msAbs = Math.abs(ms);

  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }

  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }

  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }

  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }

  return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtLong(ms) {
  var msAbs = Math.abs(ms);

  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }

  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }

  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }

  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }

  return ms + ' ms';
}
/**
 * Pluralization helper.
 */


function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

/***/ }),

/***/ "./node_modules/debug/src/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/debug/src/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */
// eslint-disable-next-line complexity

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
    return true;
  } // Internet Explorer and Edge do not support colors.


  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  } // Is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);

  if (!this.useColors) {
    return;
  }

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if (match === '%%') {
      return;
    }

    index++;

    if (match === '%c') {
      // We only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */


function log() {
  var _console;

  // This hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return (typeof console === "undefined" ? "undefined" : _typeof(console)) === 'object' && console.log && (_console = console).log.apply(_console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (namespaces) {
      exports.storage.setItem('debug', namespaces);
    } else {
      exports.storage.removeItem('debug');
    }
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  var r;

  try {
    r = exports.storage.getItem('debug');
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  } // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */


function localstorage() {
  try {
    // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
    // The Browser also has localStorage in the global context.
    return localStorage;
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}

module.exports = __webpack_require__(/*! ./common */ "./node_modules/debug/src/common.js")(exports);
var formatters = module.exports.formatters;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (error) {
    return '[UnexpectedJSONParseError]: ' + error.message;
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/debug/src/common.js":
/*!******************************************!*\
  !*** ./node_modules/debug/src/common.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */
function setup(env) {
  createDebug.debug = createDebug;
  createDebug["default"] = createDebug;
  createDebug.coerce = coerce;
  createDebug.disable = disable;
  createDebug.enable = enable;
  createDebug.enabled = enabled;
  createDebug.humanize = __webpack_require__(/*! ms */ "./node_modules/debug/node_modules/ms/index.js");
  Object.keys(env).forEach(function (key) {
    createDebug[key] = env[key];
  });
  /**
  * Active `debug` instances.
  */

  createDebug.instances = [];
  /**
  * The currently active debug mode names, and names to skip.
  */

  createDebug.names = [];
  createDebug.skips = [];
  /**
  * Map of special "%n" handling functions, for the debug "format" argument.
  *
  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
  */

  createDebug.formatters = {};
  /**
  * Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the for the debug instance to be colored
  * @return {Number|String} An ANSI color code for the given namespace
  * @api private
  */

  function selectColor(namespace) {
    var hash = 0;

    for (var i = 0; i < namespace.length; i++) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }

    return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
  }

  createDebug.selectColor = selectColor;
  /**
  * Create a debugger with the given `namespace`.
  *
  * @param {String} namespace
  * @return {Function}
  * @api public
  */

  function createDebug(namespace) {
    var prevTime;

    function debug() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      // Disabled?
      if (!debug.enabled) {
        return;
      }

      var self = debug; // Set `diff` timestamp

      var curr = Number(new Date());
      var ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;
      args[0] = createDebug.coerce(args[0]);

      if (typeof args[0] !== 'string') {
        // Anything else let's inspect with %O
        args.unshift('%O');
      } // Apply any `formatters` transformations


      var index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
        // If we encounter an escaped % then don't increase the array index
        if (match === '%%') {
          return match;
        }

        index++;
        var formatter = createDebug.formatters[format];

        if (typeof formatter === 'function') {
          var val = args[index];
          match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`

          args.splice(index, 1);
          index--;
        }

        return match;
      }); // Apply env-specific formatting (colors, etc.)

      createDebug.formatArgs.call(self, args);
      var logFn = self.log || createDebug.log;
      logFn.apply(self, args);
    }

    debug.namespace = namespace;
    debug.enabled = createDebug.enabled(namespace);
    debug.useColors = createDebug.useColors();
    debug.color = selectColor(namespace);
    debug.destroy = destroy;
    debug.extend = extend; // Debug.formatArgs = formatArgs;
    // debug.rawLog = rawLog;
    // env-specific initialization logic for debug instances

    if (typeof createDebug.init === 'function') {
      createDebug.init(debug);
    }

    createDebug.instances.push(debug);
    return debug;
  }

  function destroy() {
    var index = createDebug.instances.indexOf(this);

    if (index !== -1) {
      createDebug.instances.splice(index, 1);
      return true;
    }

    return false;
  }

  function extend(namespace, delimiter) {
    var newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
    newDebug.log = this.log;
    return newDebug;
  }
  /**
  * Enables a debug mode by namespaces. This can include modes
  * separated by a colon and wildcards.
  *
  * @param {String} namespaces
  * @api public
  */


  function enable(namespaces) {
    createDebug.save(namespaces);
    createDebug.names = [];
    createDebug.skips = [];
    var i;
    var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    var len = split.length;

    for (i = 0; i < len; i++) {
      if (!split[i]) {
        // ignore empty strings
        continue;
      }

      namespaces = split[i].replace(/\*/g, '.*?');

      if (namespaces[0] === '-') {
        createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
      } else {
        createDebug.names.push(new RegExp('^' + namespaces + '$'));
      }
    }

    for (i = 0; i < createDebug.instances.length; i++) {
      var instance = createDebug.instances[i];
      instance.enabled = createDebug.enabled(instance.namespace);
    }
  }
  /**
  * Disable debug output.
  *
  * @return {String} namespaces
  * @api public
  */


  function disable() {
    var namespaces = [].concat(_toConsumableArray(createDebug.names.map(toNamespace)), _toConsumableArray(createDebug.skips.map(toNamespace).map(function (namespace) {
      return '-' + namespace;
    }))).join(',');
    createDebug.enable('');
    return namespaces;
  }
  /**
  * Returns true if the given mode name is enabled, false otherwise.
  *
  * @param {String} name
  * @return {Boolean}
  * @api public
  */


  function enabled(name) {
    if (name[name.length - 1] === '*') {
      return true;
    }

    var i;
    var len;

    for (i = 0, len = createDebug.skips.length; i < len; i++) {
      if (createDebug.skips[i].test(name)) {
        return false;
      }
    }

    for (i = 0, len = createDebug.names.length; i < len; i++) {
      if (createDebug.names[i].test(name)) {
        return true;
      }
    }

    return false;
  }
  /**
  * Convert regexp to namespace
  *
  * @param {RegExp} regxep
  * @return {String} namespace
  * @api private
  */


  function toNamespace(regexp) {
    return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, '*');
  }
  /**
  * Coerce `val`.
  *
  * @param {Mixed} val
  * @return {Mixed}
  * @api private
  */


  function coerce(val) {
    if (val instanceof Error) {
      return val.stack || val.message;
    }

    return val;
  }

  createDebug.enable(createDebug.load());
  return createDebug;
}

module.exports = setup;

/***/ }),

/***/ "./node_modules/engine.io-parser/lib/commons.js":
/*!******************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/commons.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var PACKET_TYPES = Object.create(null); // no Map = no polyfill

PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
var PACKET_TYPES_REVERSE = Object.create(null);
Object.keys(PACKET_TYPES).forEach(function (key) {
  PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
var ERROR_PACKET = {
  type: "error",
  data: "parser error"
};
module.exports = {
  PACKET_TYPES: PACKET_TYPES,
  PACKET_TYPES_REVERSE: PACKET_TYPES_REVERSE,
  ERROR_PACKET: ERROR_PACKET
};

/***/ }),

/***/ "./node_modules/engine.io-parser/lib/decodePacket.browser.js":
/*!*******************************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/decodePacket.browser.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! ./commons */ "./node_modules/engine.io-parser/lib/commons.js"),
    PACKET_TYPES_REVERSE = _require.PACKET_TYPES_REVERSE,
    ERROR_PACKET = _require.ERROR_PACKET;

var withNativeArrayBuffer = typeof ArrayBuffer === "function";
var base64decoder;

if (withNativeArrayBuffer) {
  base64decoder = __webpack_require__(/*! base64-arraybuffer */ "./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js");
}

var decodePacket = function decodePacket(encodedPacket, binaryType) {
  if (typeof encodedPacket !== "string") {
    return {
      type: "message",
      data: mapBinary(encodedPacket, binaryType)
    };
  }

  var type = encodedPacket.charAt(0);

  if (type === "b") {
    return {
      type: "message",
      data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
    };
  }

  var packetType = PACKET_TYPES_REVERSE[type];

  if (!packetType) {
    return ERROR_PACKET;
  }

  return encodedPacket.length > 1 ? {
    type: PACKET_TYPES_REVERSE[type],
    data: encodedPacket.substring(1)
  } : {
    type: PACKET_TYPES_REVERSE[type]
  };
};

var decodeBase64Packet = function decodeBase64Packet(data, binaryType) {
  if (base64decoder) {
    var decoded = base64decoder.decode(data);
    return mapBinary(decoded, binaryType);
  } else {
    return {
      base64: true,
      data: data
    }; // fallback for old browsers
  }
};

var mapBinary = function mapBinary(data, binaryType) {
  switch (binaryType) {
    case "blob":
      return data instanceof ArrayBuffer ? new Blob([data]) : data;

    case "arraybuffer":
    default:
      return data;
    // assuming the data is already an ArrayBuffer
  }
};

module.exports = decodePacket;

/***/ }),

/***/ "./node_modules/engine.io-parser/lib/encodePacket.browser.js":
/*!*******************************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/encodePacket.browser.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! ./commons */ "./node_modules/engine.io-parser/lib/commons.js"),
    PACKET_TYPES = _require.PACKET_TYPES;

var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
var withNativeArrayBuffer = typeof ArrayBuffer === "function"; // ArrayBuffer.isView method is not defined in IE10

var isView = function isView(obj) {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
};

var encodePacket = function encodePacket(_ref, supportsBinary, callback) {
  var type = _ref.type,
      data = _ref.data;

  if (withNativeBlob && data instanceof Blob) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(data, callback);
    }
  } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
    if (supportsBinary) {
      return callback(data instanceof ArrayBuffer ? data : data.buffer);
    } else {
      return encodeBlobAsBase64(new Blob([data]), callback);
    }
  } // plain string


  return callback(PACKET_TYPES[type] + (data || ""));
};

var encodeBlobAsBase64 = function encodeBlobAsBase64(data, callback) {
  var fileReader = new FileReader();

  fileReader.onload = function () {
    var content = fileReader.result.split(",")[1];
    callback("b" + content);
  };

  return fileReader.readAsDataURL(data);
};

module.exports = encodePacket;

/***/ }),

/***/ "./node_modules/engine.io-parser/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/engine.io-parser/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var encodePacket = __webpack_require__(/*! ./encodePacket */ "./node_modules/engine.io-parser/lib/encodePacket.browser.js");

var decodePacket = __webpack_require__(/*! ./decodePacket */ "./node_modules/engine.io-parser/lib/decodePacket.browser.js");

var SEPARATOR = String.fromCharCode(30); // see https://en.wikipedia.org/wiki/Delimiter#ASCII_delimited_text

var encodePayload = function encodePayload(packets, callback) {
  // some packets may be added to the array while encoding, so the initial length must be saved
  var length = packets.length;
  var encodedPackets = new Array(length);
  var count = 0;
  packets.forEach(function (packet, i) {
    // force base64 encoding for binary packets
    encodePacket(packet, false, function (encodedPacket) {
      encodedPackets[i] = encodedPacket;

      if (++count === length) {
        callback(encodedPackets.join(SEPARATOR));
      }
    });
  });
};

var decodePayload = function decodePayload(encodedPayload, binaryType) {
  var encodedPackets = encodedPayload.split(SEPARATOR);
  var packets = [];

  for (var i = 0; i < encodedPackets.length; i++) {
    var decodedPacket = decodePacket(encodedPackets[i], binaryType);
    packets.push(decodedPacket);

    if (decodedPacket.type === "error") {
      break;
    }
  }

  return packets;
};

module.exports = {
  protocol: 4,
  encodePacket: encodePacket,
  encodePayload: encodePayload,
  decodePacket: decodePacket,
  decodePayload: decodePayload
};

/***/ }),

/***/ "./node_modules/parseqs/index.js":
/*!***************************************!*\
  !*** ./node_modules/parseqs/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */
exports.encode = function (obj) {
  var str = '';

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
};
/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */


exports.decode = function (qs) {
  var qry = {};
  var pairs = qs.split('&');

  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }

  return qry;
};

/***/ }),

/***/ "./node_modules/parseuri/index.js":
/*!****************************************!*\
  !*** ./node_modules/parseuri/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */
var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];

module.exports = function parseuri(str) {
  var src = str,
      b = str.indexOf('['),
      e = str.indexOf(']');

  if (b != -1 && e != -1) {
    str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
  }

  var m = re.exec(str || ''),
      uri = {},
      i = 14;

  while (i--) {
    uri[parts[i]] = m[i] || '';
  }

  if (b != -1 && e != -1) {
    uri.source = src;
    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
    uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
    uri.ipv6uri = true;
  }

  uri.pathNames = pathNames(uri, uri['path']);
  uri.queryKey = queryKey(uri, uri['query']);
  return uri;
};

function pathNames(obj, path) {
  var regx = /\/{2,9}/g,
      names = path.replace(regx, "/").split("/");

  if (path.substr(0, 1) == '/' || path.length === 0) {
    names.splice(0, 1);
  }

  if (path.substr(path.length - 1, 1) == '/') {
    names.splice(names.length - 1, 1);
  }

  return names;
}

function queryKey(uri, query) {
  var data = {};
  query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
    if ($1) {
      data[$1] = $2;
    }
  });
  return data;
}

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/yeast/index.js":
/*!*************************************!*\
  !*** ./node_modules/yeast/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),
    length = 64,
    map = {},
    seed = 0,
    i = 0,
    prev;
/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */

function encode(num) {
  var encoded = '';

  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);

  return encoded;
}
/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */


function decode(str) {
  var decoded = 0;

  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }

  return decoded;
}
/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */


function yeast() {
  var now = encode(+new Date());
  if (now !== prev) return seed = 0, prev = now;
  return now + '.' + encode(seed++);
} //
// Map each character to its index.
//


for (; i < length; i++) {
  map[alphabet[i]] = i;
} //
// Expose the `yeast`, `encode` and `decode` functions.
//


yeast.encode = encode;
yeast.decode = decode;
module.exports = yeast;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9laW8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2Vpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9laW8vLi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZWlvLy4vbGliL3NvY2tldC5qcyIsIndlYnBhY2s6Ly9laW8vLi9saWIvdHJhbnNwb3J0LmpzIiwid2VicGFjazovL2Vpby8uL2xpYi90cmFuc3BvcnRzL2luZGV4LmpzIiwid2VicGFjazovL2Vpby8uL2xpYi90cmFuc3BvcnRzL3d4LXdlYnNvY2tldC5qcyIsIndlYnBhY2s6Ly9laW8vLi9ub2RlX21vZHVsZXMvYmFzZTY0LWFycmF5YnVmZmVyL2xpYi9iYXNlNjQtYXJyYXlidWZmZXIuanMiLCJ3ZWJwYWNrOi8vZWlvLy4vbm9kZV9tb2R1bGVzL2NvbXBvbmVudC1lbWl0dGVyL2luZGV4LmpzIiwid2VicGFjazovL2Vpby8uL25vZGVfbW9kdWxlcy9kZWJ1Zy9ub2RlX21vZHVsZXMvbXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZWlvLy4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9icm93c2VyLmpzIiwid2VicGFjazovL2Vpby8uL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvY29tbW9uLmpzIiwid2VicGFjazovL2Vpby8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2xpYi9jb21tb25zLmpzIiwid2VicGFjazovL2Vpby8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2xpYi9kZWNvZGVQYWNrZXQuYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9laW8vLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9saWIvZW5jb2RlUGFja2V0LmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vZWlvLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1wYXJzZXIvbGliL2luZGV4LmpzIiwid2VicGFjazovL2Vpby8uL25vZGVfbW9kdWxlcy9wYXJzZXFzL2luZGV4LmpzIiwid2VicGFjazovL2Vpby8uL25vZGVfbW9kdWxlcy9wYXJzZXVyaS9pbmRleC5qcyIsIndlYnBhY2s6Ly9laW8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL2Vpby8uL25vZGVfbW9kdWxlcy95ZWFzdC9pbmRleC5qcyJdLCJuYW1lcyI6WyJTb2NrZXQiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsInVyaSIsIm9wdHMiLCJwcm90b2NvbCIsIlRyYW5zcG9ydCIsInRyYW5zcG9ydHMiLCJwYXJzZXIiLCJFbWl0dGVyIiwiZGVidWciLCJwYXJzZXVyaSIsInBhcnNlcXMiLCJob3N0bmFtZSIsImhvc3QiLCJzZWN1cmUiLCJwb3J0IiwicXVlcnkiLCJsb2NhdGlvbiIsInJlYWR5U3RhdGUiLCJ3cml0ZUJ1ZmZlciIsInByZXZCdWZmZXJMZW4iLCJwYXRoIiwiYWdlbnQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ1cGdyYWRlIiwianNvbnAiLCJ0aW1lc3RhbXBQYXJhbSIsInJlbWVtYmVyVXBncmFkZSIsInJlamVjdFVuYXV0aG9yaXplZCIsInBlck1lc3NhZ2VEZWZsYXRlIiwidGhyZXNob2xkIiwidHJhbnNwb3J0T3B0aW9ucyIsInJlcGxhY2UiLCJkZWNvZGUiLCJpZCIsInVwZ3JhZGVzIiwicGluZ0ludGVydmFsIiwicGluZ1RpbWVvdXQiLCJwaW5nVGltZW91dFRpbWVyIiwib3BlbiIsIm5hbWUiLCJjbG9uZSIsIkVJTyIsInRyYW5zcG9ydCIsInNpZCIsInNvY2tldCIsInByaW9yV2Vic29ja2V0U3VjY2VzcyIsImluZGV4T2YiLCJsZW5ndGgiLCJzZWxmIiwic2V0VGltZW91dCIsImVtaXQiLCJjcmVhdGVUcmFuc3BvcnQiLCJlIiwic2hpZnQiLCJzZXRUcmFuc3BvcnQiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJvbiIsIm9uRHJhaW4iLCJwYWNrZXQiLCJvblBhY2tldCIsIm9uRXJyb3IiLCJvbkNsb3NlIiwicHJvYmUiLCJmYWlsZWQiLCJvblRyYW5zcG9ydE9wZW4iLCJvbmx5QmluYXJ5VXBncmFkZXMiLCJ1cGdyYWRlTG9zZXNCaW5hcnkiLCJzdXBwb3J0c0JpbmFyeSIsInNlbmQiLCJ0eXBlIiwiZGF0YSIsIm9uY2UiLCJtc2ciLCJ1cGdyYWRpbmciLCJwYXVzZSIsImNsZWFudXAiLCJmbHVzaCIsImVyciIsIkVycm9yIiwiZnJlZXplVHJhbnNwb3J0IiwiY2xvc2UiLCJvbmVycm9yIiwiZXJyb3IiLCJvblRyYW5zcG9ydENsb3NlIiwib25jbG9zZSIsIm9udXBncmFkZSIsInRvIiwicmVtb3ZlTGlzdGVuZXIiLCJpIiwibCIsIm9uSGFuZHNoYWtlIiwiSlNPTiIsInBhcnNlIiwicmVzZXRQaW5nVGltZW91dCIsInNlbmRQYWNrZXQiLCJjb2RlIiwiZmlsdGVyVXBncmFkZXMiLCJvbk9wZW4iLCJjbGVhclRpbWVvdXQiLCJzcGxpY2UiLCJ3cml0YWJsZSIsIm9wdGlvbnMiLCJmbiIsInVuZGVmaW5lZCIsImNvbXByZXNzIiwicHVzaCIsIndhaXRGb3JVcGdyYWRlIiwiY2xlYW51cEFuZENsb3NlIiwicmVhc29uIiwiZGVzYyIsInBpbmdJbnRlcnZhbFRpbWVyIiwiZmlsdGVyZWRVcGdyYWRlcyIsImoiLCJvYmoiLCJvIiwiaGFzT3duUHJvcGVydHkiLCJkZXNjcmlwdGlvbiIsImRvT3BlbiIsImRvQ2xvc2UiLCJwYWNrZXRzIiwid3JpdGUiLCJkZWNvZGVQYWNrZXQiLCJiaW5hcnlUeXBlIiwid2Vic29ja2V0IiwieWVhc3QiLCJXUyIsImZvcmNlQmFzZTY0IiwiY2hlY2siLCJ1cmwiLCJhdXRoIiwicHJvdG9jb2xzIiwiZXh0cmFIZWFkZXJzIiwiaGVhZGVycyIsIndzIiwid3giLCJjb25uZWN0U29ja2V0Iiwic3VwcG9ydHMiLCJiaW5hcnkiLCJhZGRFdmVudExpc3RlbmVycyIsIm9uTWVzc2FnZSIsImV2Iiwib25EYXRhIiwidG90YWwiLCJlbmNvZGVQYWNrZXQiLCJkb25lIiwic2NoZW1hIiwiTnVtYmVyIiwidGltZXN0YW1wUmVxdWVzdHMiLCJiNjQiLCJlbmNvZGUiLCJpcHY2IiwiY2hhcnMiLCJhcnJheWJ1ZmZlciIsImJ5dGVzIiwiVWludDhBcnJheSIsImxlbiIsImJhc2U2NCIsInN1YnN0cmluZyIsImJ1ZmZlckxlbmd0aCIsInAiLCJlbmNvZGVkMSIsImVuY29kZWQyIiwiZW5jb2RlZDMiLCJlbmNvZGVkNCIsIkFycmF5QnVmZmVyIiwibWl4aW4iLCJrZXkiLCJwcm90b3R5cGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJfY2FsbGJhY2tzIiwib2ZmIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2FsbGJhY2tzIiwiY2IiLCJhcmdzIiwiQXJyYXkiLCJzbGljZSIsImxpc3RlbmVycyIsImhhc0xpc3RlbmVycyIsInMiLCJtIiwiaCIsImQiLCJ3IiwieSIsInZhbCIsImlzRmluaXRlIiwiZm10TG9uZyIsImZtdFNob3J0Iiwic3RyaW5naWZ5Iiwic3RyIiwiU3RyaW5nIiwibWF0Y2giLCJleGVjIiwibiIsInBhcnNlRmxvYXQiLCJ0b0xvd2VyQ2FzZSIsIm1zIiwibXNBYnMiLCJNYXRoIiwiYWJzIiwicm91bmQiLCJwbHVyYWwiLCJpc1BsdXJhbCIsImxvZyIsImZvcm1hdEFyZ3MiLCJzYXZlIiwibG9hZCIsInVzZUNvbG9ycyIsInN0b3JhZ2UiLCJsb2NhbHN0b3JhZ2UiLCJjb2xvcnMiLCJ3aW5kb3ciLCJwcm9jZXNzIiwiX19ud2pzIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsIldlYmtpdEFwcGVhcmFuY2UiLCJjb25zb2xlIiwiZmlyZWJ1ZyIsImV4Y2VwdGlvbiIsInRhYmxlIiwicGFyc2VJbnQiLCJSZWdFeHAiLCIkMSIsIm5hbWVzcGFjZSIsImh1bWFuaXplIiwiZGlmZiIsImMiLCJjb2xvciIsImluZGV4IiwibGFzdEMiLCJuYW1lc3BhY2VzIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJyIiwiZ2V0SXRlbSIsImVudiIsIkRFQlVHIiwibG9jYWxTdG9yYWdlIiwiZm9ybWF0dGVycyIsInYiLCJtZXNzYWdlIiwic2V0dXAiLCJjcmVhdGVEZWJ1ZyIsImNvZXJjZSIsImRpc2FibGUiLCJlbmFibGUiLCJlbmFibGVkIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJpbnN0YW5jZXMiLCJuYW1lcyIsInNraXBzIiwic2VsZWN0Q29sb3IiLCJoYXNoIiwiY2hhckNvZGVBdCIsInByZXZUaW1lIiwiY3VyciIsIkRhdGUiLCJwcmV2IiwidW5zaGlmdCIsImZvcm1hdCIsImZvcm1hdHRlciIsImNhbGwiLCJsb2dGbiIsImRlc3Ryb3kiLCJleHRlbmQiLCJpbml0IiwiZGVsaW1pdGVyIiwibmV3RGVidWciLCJzcGxpdCIsInN1YnN0ciIsImluc3RhbmNlIiwibWFwIiwidG9OYW1lc3BhY2UiLCJqb2luIiwidGVzdCIsInJlZ2V4cCIsInRvU3RyaW5nIiwic3RhY2siLCJQQUNLRVRfVFlQRVMiLCJjcmVhdGUiLCJQQUNLRVRfVFlQRVNfUkVWRVJTRSIsIkVSUk9SX1BBQ0tFVCIsIndpdGhOYXRpdmVBcnJheUJ1ZmZlciIsImJhc2U2NGRlY29kZXIiLCJlbmNvZGVkUGFja2V0IiwibWFwQmluYXJ5IiwiY2hhckF0IiwiZGVjb2RlQmFzZTY0UGFja2V0IiwicGFja2V0VHlwZSIsImRlY29kZWQiLCJCbG9iIiwid2l0aE5hdGl2ZUJsb2IiLCJpc1ZpZXciLCJidWZmZXIiLCJjYWxsYmFjayIsImVuY29kZUJsb2JBc0Jhc2U2NCIsImZpbGVSZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiY29udGVudCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJTRVBBUkFUT1IiLCJmcm9tQ2hhckNvZGUiLCJlbmNvZGVQYXlsb2FkIiwiZW5jb2RlZFBhY2tldHMiLCJjb3VudCIsImRlY29kZVBheWxvYWQiLCJlbmNvZGVkUGF5bG9hZCIsImRlY29kZWRQYWNrZXQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJxcyIsInFyeSIsInBhaXJzIiwicGFpciIsImRlY29kZVVSSUNvbXBvbmVudCIsInJlIiwicGFydHMiLCJzcmMiLCJiIiwic291cmNlIiwiYXV0aG9yaXR5IiwiaXB2NnVyaSIsInBhdGhOYW1lcyIsInF1ZXJ5S2V5IiwicmVneCIsIiQwIiwiJDIiLCJjYWNoZWRTZXRUaW1lb3V0IiwiY2FjaGVkQ2xlYXJUaW1lb3V0IiwiZGVmYXVsdFNldFRpbW91dCIsImRlZmF1bHRDbGVhclRpbWVvdXQiLCJydW5UaW1lb3V0IiwiZnVuIiwicnVuQ2xlYXJUaW1lb3V0IiwibWFya2VyIiwicXVldWUiLCJkcmFpbmluZyIsImN1cnJlbnRRdWV1ZSIsInF1ZXVlSW5kZXgiLCJjbGVhblVwTmV4dFRpY2siLCJjb25jYXQiLCJkcmFpblF1ZXVlIiwidGltZW91dCIsInJ1biIsIm5leHRUaWNrIiwiSXRlbSIsImFycmF5IiwidGl0bGUiLCJicm93c2VyIiwiYXJndiIsInZlcnNpb24iLCJ2ZXJzaW9ucyIsIm5vb3AiLCJhZGRMaXN0ZW5lciIsInByZXBlbmRMaXN0ZW5lciIsInByZXBlbmRPbmNlTGlzdGVuZXIiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsImFscGhhYmV0Iiwic2VlZCIsIm51bSIsImVuY29kZWQiLCJmbG9vciIsIm5vdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMLE87UUNwQkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSww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UixDQUFELENBQVQsQ0FBSCxHQUFtQkEsQ0FBbkI7QUFBeEIsQyxDQUVBO0FBQ0E7QUFDQTs7O0FBQ0FvQyxLQUFLLENBQUN5QixNQUFOLEdBQWVBLE1BQWY7QUFDQXpCLEtBQUssQ0FBQzVGLE1BQU4sR0FBZUEsTUFBZjtBQUNBakMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCNEgsS0FBakIsQyIsImZpbGUiOiJlbmdpbmUuaW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJlaW9cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZWlvXCJdID0gZmFjdG9yeSgpO1xufSkoKCgpID0+IHtcbiAgICAgIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICByZXR1cm4gc2VsZjtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICByZXR1cm4gd2luZG93O1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHJldHVybiBnbG9iYWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuICAgICAgfVxuICAgIH0pKCksIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgU29ja2V0ID0gcmVxdWlyZShcIi4vc29ja2V0XCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICh1cmksIG9wdHMpID0+IG5ldyBTb2NrZXQodXJpLCBvcHRzKTtcblxuLyoqXG4gKiBFeHBvc2UgZGVwcyBmb3IgbGVnYWN5IGNvbXBhdGliaWxpdHlcbiAqIGFuZCBzdGFuZGFsb25lIGJyb3dzZXIgYWNjZXNzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzLlNvY2tldCA9IFNvY2tldDtcbm1vZHVsZS5leHBvcnRzLnByb3RvY29sID0gU29ja2V0LnByb3RvY29sOyAvLyB0aGlzIGlzIGFuIGludFxubW9kdWxlLmV4cG9ydHMuVHJhbnNwb3J0ID0gcmVxdWlyZShcIi4vdHJhbnNwb3J0XCIpO1xubW9kdWxlLmV4cG9ydHMudHJhbnNwb3J0cyA9IHJlcXVpcmUoXCIuL3RyYW5zcG9ydHMvaW5kZXhcIik7XG5tb2R1bGUuZXhwb3J0cy5wYXJzZXIgPSByZXF1aXJlKFwiZW5naW5lLmlvLXBhcnNlclwiKTtcbiIsImNvbnN0IHRyYW5zcG9ydHMgPSByZXF1aXJlKFwiLi90cmFuc3BvcnRzL2luZGV4XCIpO1xuY29uc3QgRW1pdHRlciA9IHJlcXVpcmUoXCJjb21wb25lbnQtZW1pdHRlclwiKTtcbmNvbnN0IGRlYnVnID0gcmVxdWlyZShcImRlYnVnXCIpKFwiZW5naW5lLmlvLWNsaWVudDpzb2NrZXRcIik7XG5jb25zdCBwYXJzZXIgPSByZXF1aXJlKFwiZW5naW5lLmlvLXBhcnNlclwiKTtcbmNvbnN0IHBhcnNldXJpID0gcmVxdWlyZShcInBhcnNldXJpXCIpO1xuY29uc3QgcGFyc2VxcyA9IHJlcXVpcmUoXCJwYXJzZXFzXCIpO1xuXG5jbGFzcyBTb2NrZXQgZXh0ZW5kcyBFbWl0dGVyIHtcbiAgLyoqXG4gICAqIFNvY2tldCBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSB1cmkgb3Igb3B0aW9uc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgY29uc3RydWN0b3IodXJpLCBvcHRzID0ge30pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgaWYgKHVyaSAmJiBcIm9iamVjdFwiID09PSB0eXBlb2YgdXJpKSB7XG4gICAgICBvcHRzID0gdXJpO1xuICAgICAgdXJpID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodXJpKSB7XG4gICAgICB1cmkgPSBwYXJzZXVyaSh1cmkpO1xuICAgICAgb3B0cy5ob3N0bmFtZSA9IHVyaS5ob3N0O1xuICAgICAgb3B0cy5zZWN1cmUgPSB1cmkucHJvdG9jb2wgPT09IFwiaHR0cHNcIiB8fCB1cmkucHJvdG9jb2wgPT09IFwid3NzXCI7XG4gICAgICBvcHRzLnBvcnQgPSB1cmkucG9ydDtcbiAgICAgIGlmICh1cmkucXVlcnkpIG9wdHMucXVlcnkgPSB1cmkucXVlcnk7XG4gICAgfSBlbHNlIGlmIChvcHRzLmhvc3QpIHtcbiAgICAgIG9wdHMuaG9zdG5hbWUgPSBwYXJzZXVyaShvcHRzLmhvc3QpLmhvc3Q7XG4gICAgfVxuXG4gICAgdGhpcy5zZWN1cmUgPVxuICAgICAgbnVsbCAhPSBvcHRzLnNlY3VyZVxuICAgICAgICA/IG9wdHMuc2VjdXJlXG4gICAgICAgIDogdHlwZW9mIGxvY2F0aW9uICE9PSBcInVuZGVmaW5lZFwiICYmIFwiaHR0cHM6XCIgPT09IGxvY2F0aW9uLnByb3RvY29sO1xuXG4gICAgaWYgKG9wdHMuaG9zdG5hbWUgJiYgIW9wdHMucG9ydCkge1xuICAgICAgLy8gaWYgbm8gcG9ydCBpcyBzcGVjaWZpZWQgbWFudWFsbHksIHVzZSB0aGUgcHJvdG9jb2wgZGVmYXVsdFxuICAgICAgb3B0cy5wb3J0ID0gdGhpcy5zZWN1cmUgPyBcIjQ0M1wiIDogXCI4MFwiO1xuICAgIH1cblxuICAgIHRoaXMuaG9zdG5hbWUgPVxuICAgICAgb3B0cy5ob3N0bmFtZSB8fFxuICAgICAgKHR5cGVvZiBsb2NhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiA/IGxvY2F0aW9uLmhvc3RuYW1lIDogXCJsb2NhbGhvc3RcIik7XG4gICAgdGhpcy5wb3J0ID1cbiAgICAgIG9wdHMucG9ydCB8fFxuICAgICAgKHR5cGVvZiBsb2NhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBsb2NhdGlvbi5wb3J0XG4gICAgICAgID8gbG9jYXRpb24ucG9ydFxuICAgICAgICA6IHRoaXMuc2VjdXJlXG4gICAgICAgID8gNDQzXG4gICAgICAgIDogODApO1xuXG4gICAgdGhpcy50cmFuc3BvcnRzID0gb3B0cy50cmFuc3BvcnRzIHx8IFtcInBvbGxpbmdcIiwgXCJ3ZWJzb2NrZXRcIl07XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gXCJcIjtcbiAgICB0aGlzLndyaXRlQnVmZmVyID0gW107XG4gICAgdGhpcy5wcmV2QnVmZmVyTGVuID0gMDtcblxuICAgIHRoaXMub3B0cyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL2VuZ2luZS5pb1wiLFxuICAgICAgICBhZ2VudDogZmFsc2UsXG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogZmFsc2UsXG4gICAgICAgIHVwZ3JhZGU6IHRydWUsXG4gICAgICAgIGpzb25wOiB0cnVlLFxuICAgICAgICB0aW1lc3RhbXBQYXJhbTogXCJ0XCIsXG4gICAgICAgIHJlbWVtYmVyVXBncmFkZTogZmFsc2UsXG4gICAgICAgIHJlamVjdFVuYXV0aG9yaXplZDogdHJ1ZSxcbiAgICAgICAgcGVyTWVzc2FnZURlZmxhdGU6IHtcbiAgICAgICAgICB0aHJlc2hvbGQ6IDEwMjRcbiAgICAgICAgfSxcbiAgICAgICAgdHJhbnNwb3J0T3B0aW9uczoge31cbiAgICAgIH0sXG4gICAgICBvcHRzXG4gICAgKTtcblxuICAgIHRoaXMub3B0cy5wYXRoID0gdGhpcy5vcHRzLnBhdGgucmVwbGFjZSgvXFwvJC8sIFwiXCIpICsgXCIvXCI7XG5cbiAgICBpZiAodHlwZW9mIHRoaXMub3B0cy5xdWVyeSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgdGhpcy5vcHRzLnF1ZXJ5ID0gcGFyc2Vxcy5kZWNvZGUodGhpcy5vcHRzLnF1ZXJ5KTtcbiAgICB9XG5cbiAgICAvLyBzZXQgb24gaGFuZHNoYWtlXG4gICAgdGhpcy5pZCA9IG51bGw7XG4gICAgdGhpcy51cGdyYWRlcyA9IG51bGw7XG4gICAgdGhpcy5waW5nSW50ZXJ2YWwgPSBudWxsO1xuICAgIHRoaXMucGluZ1RpbWVvdXQgPSBudWxsO1xuXG4gICAgLy8gc2V0IG9uIGhlYXJ0YmVhdFxuICAgIHRoaXMucGluZ1RpbWVvdXRUaW1lciA9IG51bGw7XG5cbiAgICB0aGlzLm9wZW4oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRyYW5zcG9ydCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHRyYW5zcG9ydCBuYW1lXG4gICAqIEByZXR1cm4ge1RyYW5zcG9ydH1cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBjcmVhdGVUcmFuc3BvcnQobmFtZSkge1xuICAgIGRlYnVnKCdjcmVhdGluZyB0cmFuc3BvcnQgXCIlc1wiJywgbmFtZSk7XG4gICAgY29uc3QgcXVlcnkgPSBjbG9uZSh0aGlzLm9wdHMucXVlcnkpO1xuXG4gICAgLy8gYXBwZW5kIGVuZ2luZS5pbyBwcm90b2NvbCBpZGVudGlmaWVyXG4gICAgcXVlcnkuRUlPID0gcGFyc2VyLnByb3RvY29sO1xuXG4gICAgLy8gdHJhbnNwb3J0IG5hbWVcbiAgICBxdWVyeS50cmFuc3BvcnQgPSBuYW1lO1xuXG4gICAgLy8gc2Vzc2lvbiBpZCBpZiB3ZSBhbHJlYWR5IGhhdmUgb25lXG4gICAgaWYgKHRoaXMuaWQpIHF1ZXJ5LnNpZCA9IHRoaXMuaWQ7XG5cbiAgICBjb25zdCBvcHRzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgdGhpcy5vcHRzLnRyYW5zcG9ydE9wdGlvbnNbbmFtZV0sXG4gICAgICB0aGlzLm9wdHMsXG4gICAgICB7XG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBzb2NrZXQ6IHRoaXMsXG4gICAgICAgIGhvc3RuYW1lOiB0aGlzLmhvc3RuYW1lLFxuICAgICAgICBzZWN1cmU6IHRoaXMuc2VjdXJlLFxuICAgICAgICBwb3J0OiB0aGlzLnBvcnRcbiAgICAgIH1cbiAgICApO1xuXG4gICAgZGVidWcoXCJvcHRpb25zOiAlalwiLCBvcHRzKTtcblxuICAgIHJldHVybiBuZXcgdHJhbnNwb3J0c1tuYW1lXShvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0cmFuc3BvcnQgdG8gdXNlIGFuZCBzdGFydHMgcHJvYmUuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb3BlbigpIHtcbiAgICBsZXQgdHJhbnNwb3J0O1xuICAgIGlmIChcbiAgICAgIHRoaXMub3B0cy5yZW1lbWJlclVwZ3JhZGUgJiZcbiAgICAgIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgJiZcbiAgICAgIHRoaXMudHJhbnNwb3J0cy5pbmRleE9mKFwid2Vic29ja2V0XCIpICE9PSAtMVxuICAgICkge1xuICAgICAgdHJhbnNwb3J0ID0gXCJ3ZWJzb2NrZXRcIjtcbiAgICB9IGVsc2UgaWYgKDAgPT09IHRoaXMudHJhbnNwb3J0cy5sZW5ndGgpIHtcbiAgICAgIC8vIEVtaXQgZXJyb3Igb24gbmV4dCB0aWNrIHNvIGl0IGNhbiBiZSBsaXN0ZW5lZCB0b1xuICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBzZWxmLmVtaXQoXCJlcnJvclwiLCBcIk5vIHRyYW5zcG9ydHMgYXZhaWxhYmxlXCIpO1xuICAgICAgfSwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zcG9ydCA9IHRoaXMudHJhbnNwb3J0c1swXTtcbiAgICB9XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gXCJvcGVuaW5nXCI7XG5cbiAgICAvLyBSZXRyeSB3aXRoIHRoZSBuZXh0IHRyYW5zcG9ydCBpZiB0aGUgdHJhbnNwb3J0IGlzIGRpc2FibGVkIChqc29ucDogZmFsc2UpXG4gICAgdHJ5IHtcbiAgICAgIHRyYW5zcG9ydCA9IHRoaXMuY3JlYXRlVHJhbnNwb3J0KHRyYW5zcG9ydCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZGVidWcoXCJlcnJvciB3aGlsZSBjcmVhdGluZyB0cmFuc3BvcnQ6ICVzXCIsIGUpO1xuICAgICAgdGhpcy50cmFuc3BvcnRzLnNoaWZ0KCk7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cmFuc3BvcnQub3BlbigpO1xuICAgIHRoaXMuc2V0VHJhbnNwb3J0KHRyYW5zcG9ydCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgY3VycmVudCB0cmFuc3BvcnQuIERpc2FibGVzIHRoZSBleGlzdGluZyBvbmUgKGlmIGFueSkuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgc2V0VHJhbnNwb3J0KHRyYW5zcG9ydCkge1xuICAgIGRlYnVnKFwic2V0dGluZyB0cmFuc3BvcnQgJXNcIiwgdHJhbnNwb3J0Lm5hbWUpO1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMudHJhbnNwb3J0KSB7XG4gICAgICBkZWJ1ZyhcImNsZWFyaW5nIGV4aXN0aW5nIHRyYW5zcG9ydCAlc1wiLCB0aGlzLnRyYW5zcG9ydC5uYW1lKTtcbiAgICAgIHRoaXMudHJhbnNwb3J0LnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIC8vIHNldCB1cCB0cmFuc3BvcnRcbiAgICB0aGlzLnRyYW5zcG9ydCA9IHRyYW5zcG9ydDtcblxuICAgIC8vIHNldCB1cCB0cmFuc3BvcnQgbGlzdGVuZXJzXG4gICAgdHJhbnNwb3J0XG4gICAgICAub24oXCJkcmFpblwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZi5vbkRyYWluKCk7XG4gICAgICB9KVxuICAgICAgLm9uKFwicGFja2V0XCIsIGZ1bmN0aW9uKHBhY2tldCkge1xuICAgICAgICBzZWxmLm9uUGFja2V0KHBhY2tldCk7XG4gICAgICB9KVxuICAgICAgLm9uKFwiZXJyb3JcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBzZWxmLm9uRXJyb3IoZSk7XG4gICAgICB9KVxuICAgICAgLm9uKFwiY2xvc2VcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHNlbGYub25DbG9zZShcInRyYW5zcG9ydCBjbG9zZVwiKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb2JlcyBhIHRyYW5zcG9ydC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHRyYW5zcG9ydCBuYW1lXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgcHJvYmUobmFtZSkge1xuICAgIGRlYnVnKCdwcm9iaW5nIHRyYW5zcG9ydCBcIiVzXCInLCBuYW1lKTtcbiAgICBsZXQgdHJhbnNwb3J0ID0gdGhpcy5jcmVhdGVUcmFuc3BvcnQobmFtZSwgeyBwcm9iZTogMSB9KTtcbiAgICBsZXQgZmFpbGVkID0gZmFsc2U7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBvblRyYW5zcG9ydE9wZW4oKSB7XG4gICAgICBpZiAoc2VsZi5vbmx5QmluYXJ5VXBncmFkZXMpIHtcbiAgICAgICAgY29uc3QgdXBncmFkZUxvc2VzQmluYXJ5ID1cbiAgICAgICAgICAhdGhpcy5zdXBwb3J0c0JpbmFyeSAmJiBzZWxmLnRyYW5zcG9ydC5zdXBwb3J0c0JpbmFyeTtcbiAgICAgICAgZmFpbGVkID0gZmFpbGVkIHx8IHVwZ3JhZGVMb3Nlc0JpbmFyeTtcbiAgICAgIH1cbiAgICAgIGlmIChmYWlsZWQpIHJldHVybjtcblxuICAgICAgZGVidWcoJ3Byb2JlIHRyYW5zcG9ydCBcIiVzXCIgb3BlbmVkJywgbmFtZSk7XG4gICAgICB0cmFuc3BvcnQuc2VuZChbeyB0eXBlOiBcInBpbmdcIiwgZGF0YTogXCJwcm9iZVwiIH1dKTtcbiAgICAgIHRyYW5zcG9ydC5vbmNlKFwicGFja2V0XCIsIGZ1bmN0aW9uKG1zZykge1xuICAgICAgICBpZiAoZmFpbGVkKSByZXR1cm47XG4gICAgICAgIGlmIChcInBvbmdcIiA9PT0gbXNnLnR5cGUgJiYgXCJwcm9iZVwiID09PSBtc2cuZGF0YSkge1xuICAgICAgICAgIGRlYnVnKCdwcm9iZSB0cmFuc3BvcnQgXCIlc1wiIHBvbmcnLCBuYW1lKTtcbiAgICAgICAgICBzZWxmLnVwZ3JhZGluZyA9IHRydWU7XG4gICAgICAgICAgc2VsZi5lbWl0KFwidXBncmFkaW5nXCIsIHRyYW5zcG9ydCk7XG4gICAgICAgICAgaWYgKCF0cmFuc3BvcnQpIHJldHVybjtcbiAgICAgICAgICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gXCJ3ZWJzb2NrZXRcIiA9PT0gdHJhbnNwb3J0Lm5hbWU7XG5cbiAgICAgICAgICBkZWJ1ZygncGF1c2luZyBjdXJyZW50IHRyYW5zcG9ydCBcIiVzXCInLCBzZWxmLnRyYW5zcG9ydC5uYW1lKTtcbiAgICAgICAgICBzZWxmLnRyYW5zcG9ydC5wYXVzZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChmYWlsZWQpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChcImNsb3NlZFwiID09PSBzZWxmLnJlYWR5U3RhdGUpIHJldHVybjtcbiAgICAgICAgICAgIGRlYnVnKFwiY2hhbmdpbmcgdHJhbnNwb3J0IGFuZCBzZW5kaW5nIHVwZ3JhZGUgcGFja2V0XCIpO1xuXG4gICAgICAgICAgICBjbGVhbnVwKCk7XG5cbiAgICAgICAgICAgIHNlbGYuc2V0VHJhbnNwb3J0KHRyYW5zcG9ydCk7XG4gICAgICAgICAgICB0cmFuc3BvcnQuc2VuZChbeyB0eXBlOiBcInVwZ3JhZGVcIiB9XSk7XG4gICAgICAgICAgICBzZWxmLmVtaXQoXCJ1cGdyYWRlXCIsIHRyYW5zcG9ydCk7XG4gICAgICAgICAgICB0cmFuc3BvcnQgPSBudWxsO1xuICAgICAgICAgICAgc2VsZi51cGdyYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHNlbGYuZmx1c2goKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWJ1ZygncHJvYmUgdHJhbnNwb3J0IFwiJXNcIiBmYWlsZWQnLCBuYW1lKTtcbiAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXCJwcm9iZSBlcnJvclwiKTtcbiAgICAgICAgICBlcnIudHJhbnNwb3J0ID0gdHJhbnNwb3J0Lm5hbWU7XG4gICAgICAgICAgc2VsZi5lbWl0KFwidXBncmFkZUVycm9yXCIsIGVycik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZyZWV6ZVRyYW5zcG9ydCgpIHtcbiAgICAgIGlmIChmYWlsZWQpIHJldHVybjtcblxuICAgICAgLy8gQW55IGNhbGxiYWNrIGNhbGxlZCBieSB0cmFuc3BvcnQgc2hvdWxkIGJlIGlnbm9yZWQgc2luY2Ugbm93XG4gICAgICBmYWlsZWQgPSB0cnVlO1xuXG4gICAgICBjbGVhbnVwKCk7XG5cbiAgICAgIHRyYW5zcG9ydC5jbG9zZSgpO1xuICAgICAgdHJhbnNwb3J0ID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgYW55IGVycm9yIHRoYXQgaGFwcGVucyB3aGlsZSBwcm9iaW5nXG4gICAgZnVuY3Rpb24gb25lcnJvcihlcnIpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKFwicHJvYmUgZXJyb3I6IFwiICsgZXJyKTtcbiAgICAgIGVycm9yLnRyYW5zcG9ydCA9IHRyYW5zcG9ydC5uYW1lO1xuXG4gICAgICBmcmVlemVUcmFuc3BvcnQoKTtcblxuICAgICAgZGVidWcoJ3Byb2JlIHRyYW5zcG9ydCBcIiVzXCIgZmFpbGVkIGJlY2F1c2Ugb2YgZXJyb3I6ICVzJywgbmFtZSwgZXJyKTtcblxuICAgICAgc2VsZi5lbWl0KFwidXBncmFkZUVycm9yXCIsIGVycm9yKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblRyYW5zcG9ydENsb3NlKCkge1xuICAgICAgb25lcnJvcihcInRyYW5zcG9ydCBjbG9zZWRcIik7XG4gICAgfVxuXG4gICAgLy8gV2hlbiB0aGUgc29ja2V0IGlzIGNsb3NlZCB3aGlsZSB3ZSdyZSBwcm9iaW5nXG4gICAgZnVuY3Rpb24gb25jbG9zZSgpIHtcbiAgICAgIG9uZXJyb3IoXCJzb2NrZXQgY2xvc2VkXCIpO1xuICAgIH1cblxuICAgIC8vIFdoZW4gdGhlIHNvY2tldCBpcyB1cGdyYWRlZCB3aGlsZSB3ZSdyZSBwcm9iaW5nXG4gICAgZnVuY3Rpb24gb251cGdyYWRlKHRvKSB7XG4gICAgICBpZiAodHJhbnNwb3J0ICYmIHRvLm5hbWUgIT09IHRyYW5zcG9ydC5uYW1lKSB7XG4gICAgICAgIGRlYnVnKCdcIiVzXCIgd29ya3MgLSBhYm9ydGluZyBcIiVzXCInLCB0by5uYW1lLCB0cmFuc3BvcnQubmFtZSk7XG4gICAgICAgIGZyZWV6ZVRyYW5zcG9ydCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBhbGwgbGlzdGVuZXJzIG9uIHRoZSB0cmFuc3BvcnQgYW5kIG9uIHNlbGZcbiAgICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgdHJhbnNwb3J0LnJlbW92ZUxpc3RlbmVyKFwib3BlblwiLCBvblRyYW5zcG9ydE9wZW4pO1xuICAgICAgdHJhbnNwb3J0LnJlbW92ZUxpc3RlbmVyKFwiZXJyb3JcIiwgb25lcnJvcik7XG4gICAgICB0cmFuc3BvcnQucmVtb3ZlTGlzdGVuZXIoXCJjbG9zZVwiLCBvblRyYW5zcG9ydENsb3NlKTtcbiAgICAgIHNlbGYucmVtb3ZlTGlzdGVuZXIoXCJjbG9zZVwiLCBvbmNsb3NlKTtcbiAgICAgIHNlbGYucmVtb3ZlTGlzdGVuZXIoXCJ1cGdyYWRpbmdcIiwgb251cGdyYWRlKTtcbiAgICB9XG5cbiAgICB0cmFuc3BvcnQub25jZShcIm9wZW5cIiwgb25UcmFuc3BvcnRPcGVuKTtcbiAgICB0cmFuc3BvcnQub25jZShcImVycm9yXCIsIG9uZXJyb3IpO1xuICAgIHRyYW5zcG9ydC5vbmNlKFwiY2xvc2VcIiwgb25UcmFuc3BvcnRDbG9zZSk7XG5cbiAgICB0aGlzLm9uY2UoXCJjbG9zZVwiLCBvbmNsb3NlKTtcbiAgICB0aGlzLm9uY2UoXCJ1cGdyYWRpbmdcIiwgb251cGdyYWRlKTtcblxuICAgIHRyYW5zcG9ydC5vcGVuKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gY29ubmVjdGlvbiBpcyBkZWVtZWQgb3Blbi5cbiAgICpcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIG9uT3BlbigpIHtcbiAgICBkZWJ1ZyhcInNvY2tldCBvcGVuXCIpO1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9IFwib3BlblwiO1xuICAgIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSBcIndlYnNvY2tldFwiID09PSB0aGlzLnRyYW5zcG9ydC5uYW1lO1xuICAgIHRoaXMuZW1pdChcIm9wZW5cIik7XG4gICAgdGhpcy5mbHVzaCgpO1xuXG4gICAgLy8gd2UgY2hlY2sgZm9yIGByZWFkeVN0YXRlYCBpbiBjYXNlIGFuIGBvcGVuYFxuICAgIC8vIGxpc3RlbmVyIGFscmVhZHkgY2xvc2VkIHRoZSBzb2NrZXRcbiAgICBpZiAoXG4gICAgICBcIm9wZW5cIiA9PT0gdGhpcy5yZWFkeVN0YXRlICYmXG4gICAgICB0aGlzLm9wdHMudXBncmFkZSAmJlxuICAgICAgdGhpcy50cmFuc3BvcnQucGF1c2VcbiAgICApIHtcbiAgICAgIGRlYnVnKFwic3RhcnRpbmcgdXBncmFkZSBwcm9iZXNcIik7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICBjb25zdCBsID0gdGhpcy51cGdyYWRlcy5sZW5ndGg7XG4gICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgICB0aGlzLnByb2JlKHRoaXMudXBncmFkZXNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGEgcGFja2V0LlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uUGFja2V0KHBhY2tldCkge1xuICAgIGlmIChcbiAgICAgIFwib3BlbmluZ1wiID09PSB0aGlzLnJlYWR5U3RhdGUgfHxcbiAgICAgIFwib3BlblwiID09PSB0aGlzLnJlYWR5U3RhdGUgfHxcbiAgICAgIFwiY2xvc2luZ1wiID09PSB0aGlzLnJlYWR5U3RhdGVcbiAgICApIHtcbiAgICAgIGRlYnVnKCdzb2NrZXQgcmVjZWl2ZTogdHlwZSBcIiVzXCIsIGRhdGEgXCIlc1wiJywgcGFja2V0LnR5cGUsIHBhY2tldC5kYXRhKTtcblxuICAgICAgdGhpcy5lbWl0KFwicGFja2V0XCIsIHBhY2tldCk7XG5cbiAgICAgIC8vIFNvY2tldCBpcyBsaXZlIC0gYW55IHBhY2tldCBjb3VudHNcbiAgICAgIHRoaXMuZW1pdChcImhlYXJ0YmVhdFwiKTtcblxuICAgICAgc3dpdGNoIChwYWNrZXQudHlwZSkge1xuICAgICAgICBjYXNlIFwib3BlblwiOlxuICAgICAgICAgIHRoaXMub25IYW5kc2hha2UoSlNPTi5wYXJzZShwYWNrZXQuZGF0YSkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJwaW5nXCI6XG4gICAgICAgICAgdGhpcy5yZXNldFBpbmdUaW1lb3V0KCk7XG4gICAgICAgICAgdGhpcy5zZW5kUGFja2V0KFwicG9uZ1wiKTtcbiAgICAgICAgICB0aGlzLmVtaXQoXCJwb25nXCIpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJlcnJvclwiOlxuICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihcInNlcnZlciBlcnJvclwiKTtcbiAgICAgICAgICBlcnIuY29kZSA9IHBhY2tldC5kYXRhO1xuICAgICAgICAgIHRoaXMub25FcnJvcihlcnIpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJtZXNzYWdlXCI6XG4gICAgICAgICAgdGhpcy5lbWl0KFwiZGF0YVwiLCBwYWNrZXQuZGF0YSk7XG4gICAgICAgICAgdGhpcy5lbWl0KFwibWVzc2FnZVwiLCBwYWNrZXQuZGF0YSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnKCdwYWNrZXQgcmVjZWl2ZWQgd2l0aCBzb2NrZXQgcmVhZHlTdGF0ZSBcIiVzXCInLCB0aGlzLnJlYWR5U3RhdGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiBoYW5kc2hha2UgY29tcGxldGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGhhbmRzaGFrZSBvYmpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkhhbmRzaGFrZShkYXRhKSB7XG4gICAgdGhpcy5lbWl0KFwiaGFuZHNoYWtlXCIsIGRhdGEpO1xuICAgIHRoaXMuaWQgPSBkYXRhLnNpZDtcbiAgICB0aGlzLnRyYW5zcG9ydC5xdWVyeS5zaWQgPSBkYXRhLnNpZDtcbiAgICB0aGlzLnVwZ3JhZGVzID0gdGhpcy5maWx0ZXJVcGdyYWRlcyhkYXRhLnVwZ3JhZGVzKTtcbiAgICB0aGlzLnBpbmdJbnRlcnZhbCA9IGRhdGEucGluZ0ludGVydmFsO1xuICAgIHRoaXMucGluZ1RpbWVvdXQgPSBkYXRhLnBpbmdUaW1lb3V0O1xuICAgIHRoaXMub25PcGVuKCk7XG4gICAgLy8gSW4gY2FzZSBvcGVuIGhhbmRsZXIgY2xvc2VzIHNvY2tldFxuICAgIGlmIChcImNsb3NlZFwiID09PSB0aGlzLnJlYWR5U3RhdGUpIHJldHVybjtcbiAgICB0aGlzLnJlc2V0UGluZ1RpbWVvdXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGFuZCByZXNldHMgcGluZyB0aW1lb3V0IHRpbWVyIGJhc2VkIG9uIHNlcnZlciBwaW5ncy5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICByZXNldFBpbmdUaW1lb3V0KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnBpbmdUaW1lb3V0VGltZXIpO1xuICAgIHRoaXMucGluZ1RpbWVvdXRUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5vbkNsb3NlKFwicGluZyB0aW1lb3V0XCIpO1xuICAgIH0sIHRoaXMucGluZ0ludGVydmFsICsgdGhpcy5waW5nVGltZW91dCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIG9uIGBkcmFpbmAgZXZlbnRcbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbkRyYWluKCkge1xuICAgIHRoaXMud3JpdGVCdWZmZXIuc3BsaWNlKDAsIHRoaXMucHJldkJ1ZmZlckxlbik7XG5cbiAgICAvLyBzZXR0aW5nIHByZXZCdWZmZXJMZW4gPSAwIGlzIHZlcnkgaW1wb3J0YW50XG4gICAgLy8gZm9yIGV4YW1wbGUsIHdoZW4gdXBncmFkaW5nLCB1cGdyYWRlIHBhY2tldCBpcyBzZW50IG92ZXIsXG4gICAgLy8gYW5kIGEgbm9uemVybyBwcmV2QnVmZmVyTGVuIGNvdWxkIGNhdXNlIHByb2JsZW1zIG9uIGBkcmFpbmBcbiAgICB0aGlzLnByZXZCdWZmZXJMZW4gPSAwO1xuXG4gICAgaWYgKDAgPT09IHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoKSB7XG4gICAgICB0aGlzLmVtaXQoXCJkcmFpblwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mbHVzaCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGbHVzaCB3cml0ZSBidWZmZXJzLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGZsdXNoKCkge1xuICAgIGlmIChcbiAgICAgIFwiY2xvc2VkXCIgIT09IHRoaXMucmVhZHlTdGF0ZSAmJlxuICAgICAgdGhpcy50cmFuc3BvcnQud3JpdGFibGUgJiZcbiAgICAgICF0aGlzLnVwZ3JhZGluZyAmJlxuICAgICAgdGhpcy53cml0ZUJ1ZmZlci5sZW5ndGhcbiAgICApIHtcbiAgICAgIGRlYnVnKFwiZmx1c2hpbmcgJWQgcGFja2V0cyBpbiBzb2NrZXRcIiwgdGhpcy53cml0ZUJ1ZmZlci5sZW5ndGgpO1xuICAgICAgdGhpcy50cmFuc3BvcnQuc2VuZCh0aGlzLndyaXRlQnVmZmVyKTtcbiAgICAgIC8vIGtlZXAgdHJhY2sgb2YgY3VycmVudCBsZW5ndGggb2Ygd3JpdGVCdWZmZXJcbiAgICAgIC8vIHNwbGljZSB3cml0ZUJ1ZmZlciBhbmQgY2FsbGJhY2tCdWZmZXIgb24gYGRyYWluYFxuICAgICAgdGhpcy5wcmV2QnVmZmVyTGVuID0gdGhpcy53cml0ZUJ1ZmZlci5sZW5ndGg7XG4gICAgICB0aGlzLmVtaXQoXCJmbHVzaFwiKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgYSBtZXNzYWdlLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLlxuICAgKiBAcmV0dXJuIHtTb2NrZXR9IGZvciBjaGFpbmluZy5cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIHdyaXRlKG1zZywgb3B0aW9ucywgZm4pIHtcbiAgICB0aGlzLnNlbmRQYWNrZXQoXCJtZXNzYWdlXCIsIG1zZywgb3B0aW9ucywgZm4pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2VuZChtc2csIG9wdGlvbnMsIGZuKSB7XG4gICAgdGhpcy5zZW5kUGFja2V0KFwibWVzc2FnZVwiLCBtc2csIG9wdGlvbnMsIGZuKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBhIHBhY2tldC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhY2tldCB0eXBlLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHNlbmRQYWNrZXQodHlwZSwgZGF0YSwgb3B0aW9ucywgZm4pIHtcbiAgICBpZiAoXCJmdW5jdGlvblwiID09PSB0eXBlb2YgZGF0YSkge1xuICAgICAgZm4gPSBkYXRhO1xuICAgICAgZGF0YSA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoXCJmdW5jdGlvblwiID09PSB0eXBlb2Ygb3B0aW9ucykge1xuICAgICAgZm4gPSBvcHRpb25zO1xuICAgICAgb3B0aW9ucyA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKFwiY2xvc2luZ1wiID09PSB0aGlzLnJlYWR5U3RhdGUgfHwgXCJjbG9zZWRcIiA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgb3B0aW9ucy5jb21wcmVzcyA9IGZhbHNlICE9PSBvcHRpb25zLmNvbXByZXNzO1xuXG4gICAgY29uc3QgcGFja2V0ID0ge1xuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgfTtcbiAgICB0aGlzLmVtaXQoXCJwYWNrZXRDcmVhdGVcIiwgcGFja2V0KTtcbiAgICB0aGlzLndyaXRlQnVmZmVyLnB1c2gocGFja2V0KTtcbiAgICBpZiAoZm4pIHRoaXMub25jZShcImZsdXNoXCIsIGZuKTtcbiAgICB0aGlzLmZsdXNoKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHRoZSBjb25uZWN0aW9uLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGNsb3NlKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKFwib3BlbmluZ1wiID09PSB0aGlzLnJlYWR5U3RhdGUgfHwgXCJvcGVuXCIgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgdGhpcy5yZWFkeVN0YXRlID0gXCJjbG9zaW5nXCI7XG5cbiAgICAgIGlmICh0aGlzLndyaXRlQnVmZmVyLmxlbmd0aCkge1xuICAgICAgICB0aGlzLm9uY2UoXCJkcmFpblwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAodGhpcy51cGdyYWRpbmcpIHtcbiAgICAgICAgICAgIHdhaXRGb3JVcGdyYWRlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsb3NlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy51cGdyYWRpbmcpIHtcbiAgICAgICAgd2FpdEZvclVwZ3JhZGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgICBzZWxmLm9uQ2xvc2UoXCJmb3JjZWQgY2xvc2VcIik7XG4gICAgICBkZWJ1ZyhcInNvY2tldCBjbG9zaW5nIC0gdGVsbGluZyB0cmFuc3BvcnQgdG8gY2xvc2VcIik7XG4gICAgICBzZWxmLnRyYW5zcG9ydC5jbG9zZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFudXBBbmRDbG9zZSgpIHtcbiAgICAgIHNlbGYucmVtb3ZlTGlzdGVuZXIoXCJ1cGdyYWRlXCIsIGNsZWFudXBBbmRDbG9zZSk7XG4gICAgICBzZWxmLnJlbW92ZUxpc3RlbmVyKFwidXBncmFkZUVycm9yXCIsIGNsZWFudXBBbmRDbG9zZSk7XG4gICAgICBjbG9zZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdhaXRGb3JVcGdyYWRlKCkge1xuICAgICAgLy8gd2FpdCBmb3IgdXBncmFkZSB0byBmaW5pc2ggc2luY2Ugd2UgY2FuJ3Qgc2VuZCBwYWNrZXRzIHdoaWxlIHBhdXNpbmcgYSB0cmFuc3BvcnRcbiAgICAgIHNlbGYub25jZShcInVwZ3JhZGVcIiwgY2xlYW51cEFuZENsb3NlKTtcbiAgICAgIHNlbGYub25jZShcInVwZ3JhZGVFcnJvclwiLCBjbGVhbnVwQW5kQ2xvc2UpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB1cG9uIHRyYW5zcG9ydCBlcnJvclxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uRXJyb3IoZXJyKSB7XG4gICAgZGVidWcoXCJzb2NrZXQgZXJyb3IgJWpcIiwgZXJyKTtcbiAgICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gZmFsc2U7XG4gICAgdGhpcy5lbWl0KFwiZXJyb3JcIiwgZXJyKTtcbiAgICB0aGlzLm9uQ2xvc2UoXCJ0cmFuc3BvcnQgZXJyb3JcIiwgZXJyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdXBvbiB0cmFuc3BvcnQgY2xvc2UuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25DbG9zZShyZWFzb24sIGRlc2MpIHtcbiAgICBpZiAoXG4gICAgICBcIm9wZW5pbmdcIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8XG4gICAgICBcIm9wZW5cIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8XG4gICAgICBcImNsb3NpbmdcIiA9PT0gdGhpcy5yZWFkeVN0YXRlXG4gICAgKSB7XG4gICAgICBkZWJ1Zygnc29ja2V0IGNsb3NlIHdpdGggcmVhc29uOiBcIiVzXCInLCByZWFzb24pO1xuICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgIC8vIGNsZWFyIHRpbWVyc1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucGluZ0ludGVydmFsVGltZXIpO1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucGluZ1RpbWVvdXRUaW1lcik7XG5cbiAgICAgIC8vIHN0b3AgZXZlbnQgZnJvbSBmaXJpbmcgYWdhaW4gZm9yIHRyYW5zcG9ydFxuICAgICAgdGhpcy50cmFuc3BvcnQucmVtb3ZlQWxsTGlzdGVuZXJzKFwiY2xvc2VcIik7XG5cbiAgICAgIC8vIGVuc3VyZSB0cmFuc3BvcnQgd29uJ3Qgc3RheSBvcGVuXG4gICAgICB0aGlzLnRyYW5zcG9ydC5jbG9zZSgpO1xuXG4gICAgICAvLyBpZ25vcmUgZnVydGhlciB0cmFuc3BvcnQgY29tbXVuaWNhdGlvblxuICAgICAgdGhpcy50cmFuc3BvcnQucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG5cbiAgICAgIC8vIHNldCByZWFkeSBzdGF0ZVxuICAgICAgdGhpcy5yZWFkeVN0YXRlID0gXCJjbG9zZWRcIjtcblxuICAgICAgLy8gY2xlYXIgc2Vzc2lvbiBpZFxuICAgICAgdGhpcy5pZCA9IG51bGw7XG5cbiAgICAgIC8vIGVtaXQgY2xvc2UgZXZlbnRcbiAgICAgIHRoaXMuZW1pdChcImNsb3NlXCIsIHJlYXNvbiwgZGVzYyk7XG5cbiAgICAgIC8vIGNsZWFuIGJ1ZmZlcnMgYWZ0ZXIsIHNvIHVzZXJzIGNhbiBzdGlsbFxuICAgICAgLy8gZ3JhYiB0aGUgYnVmZmVycyBvbiBgY2xvc2VgIGV2ZW50XG4gICAgICBzZWxmLndyaXRlQnVmZmVyID0gW107XG4gICAgICBzZWxmLnByZXZCdWZmZXJMZW4gPSAwO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaWx0ZXJzIHVwZ3JhZGVzLCByZXR1cm5pbmcgb25seSB0aG9zZSBtYXRjaGluZyBjbGllbnQgdHJhbnNwb3J0cy5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gc2VydmVyIHVwZ3JhZGVzXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKlxuICAgKi9cbiAgZmlsdGVyVXBncmFkZXModXBncmFkZXMpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFVwZ3JhZGVzID0gW107XG4gICAgbGV0IGkgPSAwO1xuICAgIGNvbnN0IGogPSB1cGdyYWRlcy5sZW5ndGg7XG4gICAgZm9yICg7IGkgPCBqOyBpKyspIHtcbiAgICAgIGlmICh+dGhpcy50cmFuc3BvcnRzLmluZGV4T2YodXBncmFkZXNbaV0pKVxuICAgICAgICBmaWx0ZXJlZFVwZ3JhZGVzLnB1c2godXBncmFkZXNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gZmlsdGVyZWRVcGdyYWRlcztcbiAgfVxufVxuXG5Tb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gZmFsc2U7XG5cbi8qKlxuICogUHJvdG9jb2wgdmVyc2lvbi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblNvY2tldC5wcm90b2NvbCA9IHBhcnNlci5wcm90b2NvbDsgLy8gdGhpcyBpcyBhbiBpbnRcblxuZnVuY3Rpb24gY2xvbmUob2JqKSB7XG4gIGNvbnN0IG8gPSB7fTtcbiAgZm9yIChsZXQgaSBpbiBvYmopIHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICBvW2ldID0gb2JqW2ldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTb2NrZXQ7XG4iLCJjb25zdCBwYXJzZXIgPSByZXF1aXJlKFwiZW5naW5lLmlvLXBhcnNlclwiKTtcbmNvbnN0IEVtaXR0ZXIgPSByZXF1aXJlKFwiY29tcG9uZW50LWVtaXR0ZXJcIik7XG5cbmNsYXNzIFRyYW5zcG9ydCBleHRlbmRzIEVtaXR0ZXIge1xuICAvKipcbiAgICogVHJhbnNwb3J0IGFic3RyYWN0IGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub3B0cyA9IG9wdHM7XG4gICAgdGhpcy5xdWVyeSA9IG9wdHMucXVlcnk7XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gXCJcIjtcbiAgICB0aGlzLnNvY2tldCA9IG9wdHMuc29ja2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIEVtaXRzIGFuIGVycm9yLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gICAqIEByZXR1cm4ge1RyYW5zcG9ydH0gZm9yIGNoYWluaW5nXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBvbkVycm9yKG1zZywgZGVzYykge1xuICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihtc2cpO1xuICAgIGVyci50eXBlID0gXCJUcmFuc3BvcnRFcnJvclwiO1xuICAgIGVyci5kZXNjcmlwdGlvbiA9IGRlc2M7XG4gICAgdGhpcy5lbWl0KFwiZXJyb3JcIiwgZXJyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyB0aGUgdHJhbnNwb3J0LlxuICAgKlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgb3BlbigpIHtcbiAgICBpZiAoXCJjbG9zZWRcIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8IFwiXCIgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgICAgdGhpcy5yZWFkeVN0YXRlID0gXCJvcGVuaW5nXCI7XG4gICAgICB0aGlzLmRvT3BlbigpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgdHJhbnNwb3J0LlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGNsb3NlKCkge1xuICAgIGlmIChcIm9wZW5pbmdcIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8IFwib3BlblwiID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgIHRoaXMuZG9DbG9zZSgpO1xuICAgICAgdGhpcy5vbkNsb3NlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2VuZHMgbXVsdGlwbGUgcGFja2V0cy5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gcGFja2V0c1xuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHNlbmQocGFja2V0cykge1xuICAgIGlmIChcIm9wZW5cIiA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICB0aGlzLndyaXRlKHBhY2tldHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUcmFuc3BvcnQgbm90IG9wZW5cIik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB1cG9uIG9wZW5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBvbk9wZW4oKSB7XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gXCJvcGVuXCI7XG4gICAgdGhpcy53cml0YWJsZSA9IHRydWU7XG4gICAgdGhpcy5lbWl0KFwib3BlblwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2l0aCBkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YVxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uRGF0YShkYXRhKSB7XG4gICAgY29uc3QgcGFja2V0ID0gcGFyc2VyLmRlY29kZVBhY2tldChkYXRhLCB0aGlzLnNvY2tldC5iaW5hcnlUeXBlKTtcbiAgICB0aGlzLm9uUGFja2V0KHBhY2tldCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdpdGggYSBkZWNvZGVkIHBhY2tldC5cbiAgICovXG4gIG9uUGFja2V0KHBhY2tldCkge1xuICAgIHRoaXMuZW1pdChcInBhY2tldFwiLCBwYWNrZXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB1cG9uIGNsb3NlLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIG9uQ2xvc2UoKSB7XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gXCJjbG9zZWRcIjtcbiAgICB0aGlzLmVtaXQoXCJjbG9zZVwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zcG9ydDtcbiIsImNvbnN0IHdlYnNvY2tldCA9IHJlcXVpcmUoXCIuL3d4LXdlYnNvY2tldFwiKTtcbmV4cG9ydHMud2Vic29ja2V0ID0gd2Vic29ja2V0OyIsIi8qKlxuICog5b6u5L+h5bCP56iL5bqPd2Vic29ja2V05a6e546wXG4gKi9cbmNvbnN0IFRyYW5zcG9ydCA9IHJlcXVpcmUoXCIuLi90cmFuc3BvcnRcIik7XG5jb25zdCBwYXJzZXIgPSByZXF1aXJlKFwiZW5naW5lLmlvLXBhcnNlclwiKTtcbmNvbnN0IHBhcnNlcXMgPSByZXF1aXJlKFwicGFyc2Vxc1wiKTtcbmNvbnN0IHllYXN0ID0gcmVxdWlyZShcInllYXN0XCIpO1xuY29uc3QgZGVidWcgPSByZXF1aXJlKFwiZGVidWdcIikoXCJlbmdpbmUuaW8tY2xpZW50OndlYnNvY2tldFwiKTtcblxuY2xhc3MgV1MgZXh0ZW5kcyBUcmFuc3BvcnQge1xuICAvKipcbiAgICogV2ViU29ja2V0IHRyYW5zcG9ydCBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQGFwaSB7T2JqZWN0fSBjb25uZWN0aW9uIG9wdGlvbnNcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIHRoaXMuc3VwcG9ydHNCaW5hcnkgPSAhb3B0cy5mb3JjZUJhc2U2NDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc3BvcnQgbmFtZS5cbiAgICpcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiBcIndlYnNvY2tldFwiO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHNvY2tldC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBkb09wZW4oKSB7XG4gICAgaWYgKCF0aGlzLmNoZWNrKCkpIHtcbiAgICAgIC8vIGxldCBwcm9iZSB0aW1lb3V0XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdXJpID0gdGhpcy51cmkoKTtcbiAgICBjb25zdCBvcHRzID0ge1xuICAgICAgdXJsOiB1cmlcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMub3B0cy5hdXRoKSB7XG4gICAgICBvcHRzLmRhdGEgPSB0aGlzLm9wdHMuYXV0aDtcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0cy5wcm90b2NvbHMpIHtcbiAgICAgIG9wdHMucHJvdG9jb2xzID0gdGhpcy5vcHRzLnByb3RvY29scztcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0cy5leHRyYUhlYWRlcnMpIHtcbiAgICAgIG9wdHMuaGVhZGVycyA9IHRoaXMub3B0cy5leHRyYUhlYWRlcnM7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMud3MgPSB3eC5jb25uZWN0U29ja2V0KG9wdHMpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbWl0KFwiZXJyb3JcIiwgZXJyKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy53cy5iaW5hcnlUeXBlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuc3VwcG9ydHNCaW5hcnkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy53cy5zdXBwb3J0cyAmJiB0aGlzLndzLnN1cHBvcnRzLmJpbmFyeSkge1xuICAgICAgdGhpcy5zdXBwb3J0c0JpbmFyeSA9IHRydWU7XG4gICAgICB0aGlzLndzLmJpbmFyeVR5cGUgPSAnbm9kZWJ1ZmZlcic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud3MuYmluYXJ5VHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gICAgfVxuICAgIC8vIHRoaXMud3MuYmluYXJ5VHlwZSA9IHRoaXMuc29ja2V0LmJpbmFyeVR5cGUgfHwgZGVmYXVsdEJpbmFyeVR5cGU7XG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIHNvY2tldFxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy53cy5vbk9wZW4oZnVuY3Rpb24gKCkge1xuICAgICAgZGVidWcoJ3dlYnNvY2tldCBvcGVuZWQhJyk7XG4gICAgICBzZWxmLm9uT3BlbigpO1xuICAgIH0pO1xuICAgIHRoaXMud3Mub25FcnJvcihmdW5jdGlvbiAoZSkge1xuICAgICAgZGVidWcoJ3dlYnNvY2tldCBlcnJvciEnLCBlKTtcbiAgICAgIHNlbGYub25FcnJvcignd2Vic29ja2V0IGVycm9yJywgZSk7XG4gICAgfSk7XG4gICAgdGhpcy53cy5vbkNsb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGRlYnVnKCd3ZWJzb2NrZXQgY2xvc2VkIScpO1xuICAgICAgc2VsZi5vbkNsb3NlKCk7XG4gICAgfSk7XG4gICAgdGhpcy53cy5vbk1lc3NhZ2UoZnVuY3Rpb24gKGV2KSB7XG4gICAgICBkZWJ1Zyhgd2Vic29ja2V0IHJlY2VpdmVkIGRhdGE6ICR7ZXYuZGF0YX0sIHR5cGU6ICR7dHlwZW9mIChldi5kYXRhKX1gKTtcbiAgICAgIHNlbGYub25EYXRhKGV2LmRhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyaXRlcyBkYXRhIHRvIHNvY2tldC5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkgb2YgcGFja2V0cy5cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICB3cml0ZShwYWNrZXRzKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy53cml0YWJsZSA9IGZhbHNlO1xuXG4gICAgLy8gZW5jb2RlUGFja2V0IGVmZmljaWVudCBhcyBpdCB1c2VzIFdTIGZyYW1pbmdcbiAgICAvLyBubyBuZWVkIGZvciBlbmNvZGVQYXlsb2FkXG4gICAgbGV0IHRvdGFsID0gcGFja2V0cy5sZW5ndGg7XG4gICAgbGV0IGkgPSAwO1xuICAgIGNvbnN0IGwgPSB0b3RhbDtcbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgKGZ1bmN0aW9uKHBhY2tldCkge1xuICAgICAgICBwYXJzZXIuZW5jb2RlUGFja2V0KHBhY2tldCwgc2VsZi5zdXBwb3J0c0JpbmFyeSwgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIC8vIFNvbWV0aW1lcyB0aGUgd2Vic29ja2V0IGhhcyBhbHJlYWR5IGJlZW4gY2xvc2VkIGJ1dCB0aGUgYnJvd3NlciBkaWRuJ3RcbiAgICAgICAgICAvLyBoYXZlIGEgY2hhbmNlIG9mIGluZm9ybWluZyB1cyBhYm91dCBpdCB5ZXQsIGluIHRoYXQgY2FzZSBzZW5kIHdpbGxcbiAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvclxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZWxmLndzLnNlbmQoe2RhdGF9KTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcIndlYnNvY2tldCBjbG9zZWQgYmVmb3JlIG9uY2xvc2UgZXZlbnRcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIC0tdG90YWwgfHwgZG9uZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pKHBhY2tldHNbaV0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgICBzZWxmLmVtaXQoXCJmbHVzaFwiKTtcblxuICAgICAgLy8gZmFrZSBkcmFpblxuICAgICAgLy8gZGVmZXIgdG8gbmV4dCB0aWNrIHRvIGFsbG93IFNvY2tldCB0byBjbGVhciB3cml0ZUJ1ZmZlclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZi53cml0YWJsZSA9IHRydWU7XG4gICAgICAgIHNlbGYuZW1pdChcImRyYWluXCIpO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB1cG9uIGNsb3NlXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgb25DbG9zZSgpIHtcbiAgICAvLyBUcmFuc3BvcnQucHJvdG90eXBlLm9uQ2xvc2UuY2FsbCh0aGlzKTtcbiAgICBzdXBlci5vbkNsb3NlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHNvY2tldC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBkb0Nsb3NlKCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy53cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdGhpcy53cy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgdXJpIGZvciBjb25uZWN0aW9uLlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHVyaSgpIHtcbiAgICBsZXQgcXVlcnkgPSB0aGlzLnF1ZXJ5IHx8IHt9O1xuICAgIGNvbnN0IHNjaGVtYSA9IHRoaXMub3B0cy5zZWN1cmUgPyBcIndzc1wiIDogXCJ3c1wiO1xuICAgIGxldCBwb3J0ID0gXCJcIjtcblxuICAgIC8vIGF2b2lkIHBvcnQgaWYgZGVmYXVsdCBmb3Igc2NoZW1hXG4gICAgaWYgKFxuICAgICAgdGhpcy5vcHRzLnBvcnQgJiZcbiAgICAgICgoXCJ3c3NcIiA9PT0gc2NoZW1hICYmIE51bWJlcih0aGlzLm9wdHMucG9ydCkgIT09IDQ0MykgfHxcbiAgICAgICAgKFwid3NcIiA9PT0gc2NoZW1hICYmIE51bWJlcih0aGlzLm9wdHMucG9ydCkgIT09IDgwKSlcbiAgICApIHtcbiAgICAgIHBvcnQgPSBcIjpcIiArIHRoaXMub3B0cy5wb3J0O1xuICAgIH1cblxuICAgIC8vIGFwcGVuZCB0aW1lc3RhbXAgdG8gVVJJXG4gICAgaWYgKHRoaXMub3B0cy50aW1lc3RhbXBSZXF1ZXN0cykge1xuICAgICAgcXVlcnlbdGhpcy5vcHRzLnRpbWVzdGFtcFBhcmFtXSA9IHllYXN0KCk7XG4gICAgfVxuXG4gICAgLy8gY29tbXVuaWNhdGUgYmluYXJ5IHN1cHBvcnQgY2FwYWJpbGl0aWVzXG4gICAgaWYgKCF0aGlzLnN1cHBvcnRzQmluYXJ5KSB7XG4gICAgICBxdWVyeS5iNjQgPSAxO1xuICAgIH1cblxuICAgIHF1ZXJ5ID0gcGFyc2Vxcy5lbmNvZGUocXVlcnkpO1xuXG4gICAgLy8gcHJlcGVuZCA/IHRvIHF1ZXJ5XG4gICAgaWYgKHF1ZXJ5Lmxlbmd0aCkge1xuICAgICAgcXVlcnkgPSBcIj9cIiArIHF1ZXJ5O1xuICAgIH1cblxuICAgIGNvbnN0IGlwdjYgPSB0aGlzLm9wdHMuaG9zdG5hbWUuaW5kZXhPZihcIjpcIikgIT09IC0xO1xuICAgIHJldHVybiAoXG4gICAgICBzY2hlbWEgK1xuICAgICAgXCI6Ly9cIiArXG4gICAgICAoaXB2NiA/IFwiW1wiICsgdGhpcy5vcHRzLmhvc3RuYW1lICsgXCJdXCIgOiB0aGlzLm9wdHMuaG9zdG5hbWUpICtcbiAgICAgIHBvcnQgK1xuICAgICAgdGhpcy5vcHRzLnBhdGggK1xuICAgICAgcXVlcnlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEZlYXR1cmUgZGV0ZWN0aW9uIGZvciBXZWJTb2NrZXQuXG4gICAqXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IHdoZXRoZXIgdGhpcyB0cmFuc3BvcnQgaXMgYXZhaWxhYmxlLlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgY2hlY2soKSB7XG4gICAgcmV0dXJuICgnZnVuY3Rpb24nID09PSB0eXBlb2Ygd3guY29ubmVjdFNvY2tldCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXUztcbiIsIi8qXG4gKiBiYXNlNjQtYXJyYXlidWZmZXJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWtsYXN2aC9iYXNlNjQtYXJyYXlidWZmZXJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgTmlrbGFzIHZvbiBIZXJ0emVuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cbihmdW5jdGlvbihjaGFycyl7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGV4cG9ydHMuZW5jb2RlID0gZnVuY3Rpb24oYXJyYXlidWZmZXIpIHtcbiAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheShhcnJheWJ1ZmZlciksXG4gICAgaSwgbGVuID0gYnl0ZXMubGVuZ3RoLCBiYXNlNjQgPSBcIlwiO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSs9Mykge1xuICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2ldID4+IDJdO1xuICAgICAgYmFzZTY0ICs9IGNoYXJzWygoYnl0ZXNbaV0gJiAzKSA8PCA0KSB8IChieXRlc1tpICsgMV0gPj4gNCldO1xuICAgICAgYmFzZTY0ICs9IGNoYXJzWygoYnl0ZXNbaSArIDFdICYgMTUpIDw8IDIpIHwgKGJ5dGVzW2kgKyAyXSA+PiA2KV07XG4gICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaSArIDJdICYgNjNdO1xuICAgIH1cblxuICAgIGlmICgobGVuICUgMykgPT09IDIpIHtcbiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgXCI9XCI7XG4gICAgfSBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7XG4gICAgICBiYXNlNjQgPSBiYXNlNjQuc3Vic3RyaW5nKDAsIGJhc2U2NC5sZW5ndGggLSAyKSArIFwiPT1cIjtcbiAgICB9XG5cbiAgICByZXR1cm4gYmFzZTY0O1xuICB9O1xuXG4gIGV4cG9ydHMuZGVjb2RlID0gIGZ1bmN0aW9uKGJhc2U2NCkge1xuICAgIHZhciBidWZmZXJMZW5ndGggPSBiYXNlNjQubGVuZ3RoICogMC43NSxcbiAgICBsZW4gPSBiYXNlNjQubGVuZ3RoLCBpLCBwID0gMCxcbiAgICBlbmNvZGVkMSwgZW5jb2RlZDIsIGVuY29kZWQzLCBlbmNvZGVkNDtcblxuICAgIGlmIChiYXNlNjRbYmFzZTY0Lmxlbmd0aCAtIDFdID09PSBcIj1cIikge1xuICAgICAgYnVmZmVyTGVuZ3RoLS07XG4gICAgICBpZiAoYmFzZTY0W2Jhc2U2NC5sZW5ndGggLSAyXSA9PT0gXCI9XCIpIHtcbiAgICAgICAgYnVmZmVyTGVuZ3RoLS07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGFycmF5YnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGJ1ZmZlckxlbmd0aCksXG4gICAgYnl0ZXMgPSBuZXcgVWludDhBcnJheShhcnJheWJ1ZmZlcik7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKz00KSB7XG4gICAgICBlbmNvZGVkMSA9IGNoYXJzLmluZGV4T2YoYmFzZTY0W2ldKTtcbiAgICAgIGVuY29kZWQyID0gY2hhcnMuaW5kZXhPZihiYXNlNjRbaSsxXSk7XG4gICAgICBlbmNvZGVkMyA9IGNoYXJzLmluZGV4T2YoYmFzZTY0W2krMl0pO1xuICAgICAgZW5jb2RlZDQgPSBjaGFycy5pbmRleE9mKGJhc2U2NFtpKzNdKTtcblxuICAgICAgYnl0ZXNbcCsrXSA9IChlbmNvZGVkMSA8PCAyKSB8IChlbmNvZGVkMiA+PiA0KTtcbiAgICAgIGJ5dGVzW3ArK10gPSAoKGVuY29kZWQyICYgMTUpIDw8IDQpIHwgKGVuY29kZWQzID4+IDIpO1xuICAgICAgYnl0ZXNbcCsrXSA9ICgoZW5jb2RlZDMgJiAzKSA8PCA2KSB8IChlbmNvZGVkNCAmIDYzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXlidWZmZXI7XG4gIH07XG59KShcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky9cIik7XG4iLCJcclxuLyoqXHJcbiAqIEV4cG9zZSBgRW1pdHRlcmAuXHJcbiAqL1xyXG5cclxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBFbWl0dGVyO1xyXG59XHJcblxyXG4vKipcclxuICogSW5pdGlhbGl6ZSBhIG5ldyBgRW1pdHRlcmAuXHJcbiAqXHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gRW1pdHRlcihvYmopIHtcclxuICBpZiAob2JqKSByZXR1cm4gbWl4aW4ob2JqKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBNaXhpbiB0aGUgZW1pdHRlciBwcm9wZXJ0aWVzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXHJcbiAqIEByZXR1cm4ge09iamVjdH1cclxuICogQGFwaSBwcml2YXRlXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gbWl4aW4ob2JqKSB7XHJcbiAgZm9yICh2YXIga2V5IGluIEVtaXR0ZXIucHJvdG90eXBlKSB7XHJcbiAgICBvYmpba2V5XSA9IEVtaXR0ZXIucHJvdG90eXBlW2tleV07XHJcbiAgfVxyXG4gIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMaXN0ZW4gb24gdGhlIGdpdmVuIGBldmVudGAgd2l0aCBgZm5gLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5vbiA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuICAodGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gfHwgW10pXHJcbiAgICAucHVzaChmbik7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogQWRkcyBhbiBgZXZlbnRgIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIGEgc2luZ2xlXHJcbiAqIHRpbWUgdGhlbiBhdXRvbWF0aWNhbGx5IHJlbW92ZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbihldmVudCwgZm4pe1xyXG4gIGZ1bmN0aW9uIG9uKCkge1xyXG4gICAgdGhpcy5vZmYoZXZlbnQsIG9uKTtcclxuICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgfVxyXG5cclxuICBvbi5mbiA9IGZuO1xyXG4gIHRoaXMub24oZXZlbnQsIG9uKTtcclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgdGhlIGdpdmVuIGNhbGxiYWNrIGZvciBgZXZlbnRgIG9yIGFsbFxyXG4gKiByZWdpc3RlcmVkIGNhbGxiYWNrcy5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUub2ZmID1cclxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcblxyXG4gIC8vIGFsbFxyXG4gIGlmICgwID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyBzcGVjaWZpYyBldmVudFxyXG4gIHZhciBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG4gIGlmICghY2FsbGJhY2tzKSByZXR1cm4gdGhpcztcclxuXHJcbiAgLy8gcmVtb3ZlIGFsbCBoYW5kbGVyc1xyXG4gIGlmICgxID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyByZW1vdmUgc3BlY2lmaWMgaGFuZGxlclxyXG4gIHZhciBjYjtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY2IgPSBjYWxsYmFja3NbaV07XHJcbiAgICBpZiAoY2IgPT09IGZuIHx8IGNiLmZuID09PSBmbikge1xyXG4gICAgICBjYWxsYmFja3Muc3BsaWNlKGksIDEpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFJlbW92ZSBldmVudCBzcGVjaWZpYyBhcnJheXMgZm9yIGV2ZW50IHR5cGVzIHRoYXQgbm9cclxuICAvLyBvbmUgaXMgc3Vic2NyaWJlZCBmb3IgdG8gYXZvaWQgbWVtb3J5IGxlYWsuXHJcbiAgaWYgKGNhbGxiYWNrcy5sZW5ndGggPT09IDApIHtcclxuICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogRW1pdCBgZXZlbnRgIHdpdGggdGhlIGdpdmVuIGFyZ3MuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge01peGVkfSAuLi5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24oZXZlbnQpe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuXHJcbiAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpXHJcbiAgICAsIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XHJcblxyXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcclxuICB9XHJcblxyXG4gIGlmIChjYWxsYmFja3MpIHtcclxuICAgIGNhbGxiYWNrcyA9IGNhbGxiYWNrcy5zbGljZSgwKTtcclxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjYWxsYmFja3MubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcclxuICAgICAgY2FsbGJhY2tzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJuIGFycmF5IG9mIGNhbGxiYWNrcyBmb3IgYGV2ZW50YC5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEByZXR1cm4ge0FycmF5fVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcbiAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gfHwgW107XHJcbn07XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgdGhpcyBlbWl0dGVyIGhhcyBgZXZlbnRgIGhhbmRsZXJzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHJldHVybiB7Qm9vbGVhbn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5oYXNMaXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XHJcbiAgcmV0dXJuICEhIHRoaXMubGlzdGVuZXJzKGV2ZW50KS5sZW5ndGg7XHJcbn07XHJcbiIsIi8qKlxuICogSGVscGVycy5cbiAqL1xuXG52YXIgcyA9IDEwMDA7XG52YXIgbSA9IHMgKiA2MDtcbnZhciBoID0gbSAqIDYwO1xudmFyIGQgPSBoICogMjQ7XG52YXIgdyA9IGQgKiA3O1xudmFyIHkgPSBkICogMzY1LjI1O1xuXG4vKipcbiAqIFBhcnNlIG9yIGZvcm1hdCB0aGUgZ2l2ZW4gYHZhbGAuXG4gKlxuICogT3B0aW9uczpcbiAqXG4gKiAgLSBgbG9uZ2AgdmVyYm9zZSBmb3JtYXR0aW5nIFtmYWxzZV1cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IHZhbFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHRocm93cyB7RXJyb3J9IHRocm93IGFuIGVycm9yIGlmIHZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgbnVtYmVyXG4gKiBAcmV0dXJuIHtTdHJpbmd8TnVtYmVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKHR5cGUgPT09ICdzdHJpbmcnICYmIHZhbC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlKHZhbCk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUodmFsKSkge1xuICAgIHJldHVybiBvcHRpb25zLmxvbmcgPyBmbXRMb25nKHZhbCkgOiBmbXRTaG9ydCh2YWwpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAndmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSB2YWxpZCBudW1iZXIuIHZhbD0nICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHZhbClcbiAgKTtcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGBzdHJgIGFuZCByZXR1cm4gbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHN0ci5sZW5ndGggPiAxMDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG1hdGNoID0gL14oLT8oPzpcXGQrKT9cXC4/XFxkKykgKihtaWxsaXNlY29uZHM/fG1zZWNzP3xtc3xzZWNvbmRzP3xzZWNzP3xzfG1pbnV0ZXM/fG1pbnM/fG18aG91cnM/fGhycz98aHxkYXlzP3xkfHdlZWtzP3x3fHllYXJzP3x5cnM/fHkpPyQvaS5leGVjKFxuICAgIHN0clxuICApO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuID0gcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIHZhciB0eXBlID0gKG1hdGNoWzJdIHx8ICdtcycpLnRvTG93ZXJDYXNlKCk7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3llYXJzJzpcbiAgICBjYXNlICd5ZWFyJzpcbiAgICBjYXNlICd5cnMnOlxuICAgIGNhc2UgJ3lyJzpcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiBuICogeTtcbiAgICBjYXNlICd3ZWVrcyc6XG4gICAgY2FzZSAnd2Vlayc6XG4gICAgY2FzZSAndyc6XG4gICAgICByZXR1cm4gbiAqIHc7XG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiBuICogZDtcbiAgICBjYXNlICdob3Vycyc6XG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaHJzJzpcbiAgICBjYXNlICdocic6XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gbiAqIGg7XG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW5zJzpcbiAgICBjYXNlICdtaW4nOlxuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIG4gKiBtO1xuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjcyc6XG4gICAgY2FzZSAnc2VjJzpcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiBuICogcztcbiAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICBjYXNlICdtc2Vjcyc6XG4gICAgY2FzZSAnbXNlYyc6XG4gICAgY2FzZSAnbXMnOlxuICAgICAgcmV0dXJuIG47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydCBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRTaG9ydChtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBkKSArICdkJztcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gaCkgKyAnaCc7XG4gIH1cbiAgaWYgKG1zQWJzID49IG0pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG0pICsgJ20nO1xuICB9XG4gIGlmIChtc0FicyA+PSBzKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBzKSArICdzJztcbiAgfVxuICByZXR1cm4gbXMgKyAnbXMnO1xufVxuXG4vKipcbiAqIExvbmcgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10TG9uZyhtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIGQsICdkYXknKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBoLCAnaG91cicpO1xuICB9XG4gIGlmIChtc0FicyA+PSBtKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIG0sICdtaW51dGUnKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gcykge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBzLCAnc2Vjb25kJyk7XG4gIH1cbiAgcmV0dXJuIG1zICsgJyBtcyc7XG59XG5cbi8qKlxuICogUGx1cmFsaXphdGlvbiBoZWxwZXIuXG4gKi9cblxuZnVuY3Rpb24gcGx1cmFsKG1zLCBtc0FicywgbiwgbmFtZSkge1xuICB2YXIgaXNQbHVyYWwgPSBtc0FicyA+PSBuICogMS41O1xuICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG4pICsgJyAnICsgbmFtZSArIChpc1BsdXJhbCA/ICdzJyA6ICcnKTtcbn1cbiIsIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIHdlYiBicm93c2VyIGltcGxlbWVudGF0aW9uIG9mIGBkZWJ1ZygpYC5cbiAqL1xuXG5leHBvcnRzLmxvZyA9IGxvZztcbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuZXhwb3J0cy5zdG9yYWdlID0gbG9jYWxzdG9yYWdlKCk7XG5cbi8qKlxuICogQ29sb3JzLlxuICovXG5cbmV4cG9ydHMuY29sb3JzID0gW1xuXHQnIzAwMDBDQycsXG5cdCcjMDAwMEZGJyxcblx0JyMwMDMzQ0MnLFxuXHQnIzAwMzNGRicsXG5cdCcjMDA2NkNDJyxcblx0JyMwMDY2RkYnLFxuXHQnIzAwOTlDQycsXG5cdCcjMDA5OUZGJyxcblx0JyMwMENDMDAnLFxuXHQnIzAwQ0MzMycsXG5cdCcjMDBDQzY2Jyxcblx0JyMwMENDOTknLFxuXHQnIzAwQ0NDQycsXG5cdCcjMDBDQ0ZGJyxcblx0JyMzMzAwQ0MnLFxuXHQnIzMzMDBGRicsXG5cdCcjMzMzM0NDJyxcblx0JyMzMzMzRkYnLFxuXHQnIzMzNjZDQycsXG5cdCcjMzM2NkZGJyxcblx0JyMzMzk5Q0MnLFxuXHQnIzMzOTlGRicsXG5cdCcjMzNDQzAwJyxcblx0JyMzM0NDMzMnLFxuXHQnIzMzQ0M2NicsXG5cdCcjMzNDQzk5Jyxcblx0JyMzM0NDQ0MnLFxuXHQnIzMzQ0NGRicsXG5cdCcjNjYwMENDJyxcblx0JyM2NjAwRkYnLFxuXHQnIzY2MzNDQycsXG5cdCcjNjYzM0ZGJyxcblx0JyM2NkNDMDAnLFxuXHQnIzY2Q0MzMycsXG5cdCcjOTkwMENDJyxcblx0JyM5OTAwRkYnLFxuXHQnIzk5MzNDQycsXG5cdCcjOTkzM0ZGJyxcblx0JyM5OUNDMDAnLFxuXHQnIzk5Q0MzMycsXG5cdCcjQ0MwMDAwJyxcblx0JyNDQzAwMzMnLFxuXHQnI0NDMDA2NicsXG5cdCcjQ0MwMDk5Jyxcblx0JyNDQzAwQ0MnLFxuXHQnI0NDMDBGRicsXG5cdCcjQ0MzMzAwJyxcblx0JyNDQzMzMzMnLFxuXHQnI0NDMzM2NicsXG5cdCcjQ0MzMzk5Jyxcblx0JyNDQzMzQ0MnLFxuXHQnI0NDMzNGRicsXG5cdCcjQ0M2NjAwJyxcblx0JyNDQzY2MzMnLFxuXHQnI0NDOTkwMCcsXG5cdCcjQ0M5OTMzJyxcblx0JyNDQ0NDMDAnLFxuXHQnI0NDQ0MzMycsXG5cdCcjRkYwMDAwJyxcblx0JyNGRjAwMzMnLFxuXHQnI0ZGMDA2NicsXG5cdCcjRkYwMDk5Jyxcblx0JyNGRjAwQ0MnLFxuXHQnI0ZGMDBGRicsXG5cdCcjRkYzMzAwJyxcblx0JyNGRjMzMzMnLFxuXHQnI0ZGMzM2NicsXG5cdCcjRkYzMzk5Jyxcblx0JyNGRjMzQ0MnLFxuXHQnI0ZGMzNGRicsXG5cdCcjRkY2NjAwJyxcblx0JyNGRjY2MzMnLFxuXHQnI0ZGOTkwMCcsXG5cdCcjRkY5OTMzJyxcblx0JyNGRkNDMDAnLFxuXHQnI0ZGQ0MzMydcbl07XG5cbi8qKlxuICogQ3VycmVudGx5IG9ubHkgV2ViS2l0LWJhc2VkIFdlYiBJbnNwZWN0b3JzLCBGaXJlZm94ID49IHYzMSxcbiAqIGFuZCB0aGUgRmlyZWJ1ZyBleHRlbnNpb24gKGFueSBGaXJlZm94IHZlcnNpb24pIGFyZSBrbm93blxuICogdG8gc3VwcG9ydCBcIiVjXCIgQ1NTIGN1c3RvbWl6YXRpb25zLlxuICpcbiAqIFRPRE86IGFkZCBhIGBsb2NhbFN0b3JhZ2VgIHZhcmlhYmxlIHRvIGV4cGxpY2l0bHkgZW5hYmxlL2Rpc2FibGUgY29sb3JzXG4gKi9cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbmZ1bmN0aW9uIHVzZUNvbG9ycygpIHtcblx0Ly8gTkI6IEluIGFuIEVsZWN0cm9uIHByZWxvYWQgc2NyaXB0LCBkb2N1bWVudCB3aWxsIGJlIGRlZmluZWQgYnV0IG5vdCBmdWxseVxuXHQvLyBpbml0aWFsaXplZC4gU2luY2Ugd2Uga25vdyB3ZSdyZSBpbiBDaHJvbWUsIHdlJ2xsIGp1c3QgZGV0ZWN0IHRoaXMgY2FzZVxuXHQvLyBleHBsaWNpdGx5XG5cdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucHJvY2VzcyAmJiAod2luZG93LnByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJyB8fCB3aW5kb3cucHJvY2Vzcy5fX253anMpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvLyBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSBkbyBub3Qgc3VwcG9ydCBjb2xvcnMuXG5cdGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvKGVkZ2V8dHJpZGVudClcXC8oXFxkKykvKSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIElzIHdlYmtpdD8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTY0NTk2MDYvMzc2NzczXG5cdC8vIGRvY3VtZW50IGlzIHVuZGVmaW5lZCBpbiByZWFjdC1uYXRpdmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvcHVsbC8xNjMyXG5cdHJldHVybiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5XZWJraXRBcHBlYXJhbmNlKSB8fFxuXHRcdC8vIElzIGZpcmVidWc/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5ODEyMC8zNzY3NzNcblx0XHQodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmNvbnNvbGUgJiYgKHdpbmRvdy5jb25zb2xlLmZpcmVidWcgfHwgKHdpbmRvdy5jb25zb2xlLmV4Y2VwdGlvbiAmJiB3aW5kb3cuY29uc29sZS50YWJsZSkpKSB8fFxuXHRcdC8vIElzIGZpcmVmb3ggPj0gdjMxP1xuXHRcdC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvVG9vbHMvV2ViX0NvbnNvbGUjU3R5bGluZ19tZXNzYWdlc1xuXHRcdCh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvZmlyZWZveFxcLyhcXGQrKS8pICYmIHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApID49IDMxKSB8fFxuXHRcdC8vIERvdWJsZSBjaGVjayB3ZWJraXQgaW4gdXNlckFnZW50IGp1c3QgaW4gY2FzZSB3ZSBhcmUgaW4gYSB3b3JrZXJcblx0XHQodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2FwcGxld2Via2l0XFwvKFxcZCspLykpO1xufVxuXG4vKipcbiAqIENvbG9yaXplIGxvZyBhcmd1bWVudHMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuXHRhcmdzWzBdID0gKHRoaXMudXNlQ29sb3JzID8gJyVjJyA6ICcnKSArXG5cdFx0dGhpcy5uYW1lc3BhY2UgK1xuXHRcdCh0aGlzLnVzZUNvbG9ycyA/ICcgJWMnIDogJyAnKSArXG5cdFx0YXJnc1swXSArXG5cdFx0KHRoaXMudXNlQ29sb3JzID8gJyVjICcgOiAnICcpICtcblx0XHQnKycgKyBtb2R1bGUuZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpO1xuXG5cdGlmICghdGhpcy51c2VDb2xvcnMpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjID0gJ2NvbG9yOiAnICsgdGhpcy5jb2xvcjtcblx0YXJncy5zcGxpY2UoMSwgMCwgYywgJ2NvbG9yOiBpbmhlcml0Jyk7XG5cblx0Ly8gVGhlIGZpbmFsIFwiJWNcIiBpcyBzb21ld2hhdCB0cmlja3ksIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgb3RoZXJcblx0Ly8gYXJndW1lbnRzIHBhc3NlZCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSAlYywgc28gd2UgbmVlZCB0b1xuXHQvLyBmaWd1cmUgb3V0IHRoZSBjb3JyZWN0IGluZGV4IHRvIGluc2VydCB0aGUgQ1NTIGludG9cblx0bGV0IGluZGV4ID0gMDtcblx0bGV0IGxhc3RDID0gMDtcblx0YXJnc1swXS5yZXBsYWNlKC8lW2EtekEtWiVdL2csIG1hdGNoID0+IHtcblx0XHRpZiAobWF0Y2ggPT09ICclJScpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aW5kZXgrKztcblx0XHRpZiAobWF0Y2ggPT09ICclYycpIHtcblx0XHRcdC8vIFdlIG9ubHkgYXJlIGludGVyZXN0ZWQgaW4gdGhlICpsYXN0KiAlY1xuXHRcdFx0Ly8gKHRoZSB1c2VyIG1heSBoYXZlIHByb3ZpZGVkIHRoZWlyIG93bilcblx0XHRcdGxhc3RDID0gaW5kZXg7XG5cdFx0fVxuXHR9KTtcblxuXHRhcmdzLnNwbGljZShsYXN0QywgMCwgYyk7XG59XG5cbi8qKlxuICogSW52b2tlcyBgY29uc29sZS5sb2coKWAgd2hlbiBhdmFpbGFibGUuXG4gKiBOby1vcCB3aGVuIGBjb25zb2xlLmxvZ2AgaXMgbm90IGEgXCJmdW5jdGlvblwiLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIGxvZyguLi5hcmdzKSB7XG5cdC8vIFRoaXMgaGFja2VyeSBpcyByZXF1aXJlZCBmb3IgSUU4LzksIHdoZXJlXG5cdC8vIHRoZSBgY29uc29sZS5sb2dgIGZ1bmN0aW9uIGRvZXNuJ3QgaGF2ZSAnYXBwbHknXG5cdHJldHVybiB0eXBlb2YgY29uc29sZSA9PT0gJ29iamVjdCcgJiZcblx0XHRjb25zb2xlLmxvZyAmJlxuXHRcdGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xufVxuXG4vKipcbiAqIFNhdmUgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG5cdHRyeSB7XG5cdFx0aWYgKG5hbWVzcGFjZXMpIHtcblx0XHRcdGV4cG9ydHMuc3RvcmFnZS5zZXRJdGVtKCdkZWJ1ZycsIG5hbWVzcGFjZXMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRleHBvcnRzLnN0b3JhZ2UucmVtb3ZlSXRlbSgnZGVidWcnKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG59XG5cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGxvYWQoKSB7XG5cdGxldCByO1xuXHR0cnkge1xuXHRcdHIgPSBleHBvcnRzLnN0b3JhZ2UuZ2V0SXRlbSgnZGVidWcnKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cblxuXHQvLyBJZiBkZWJ1ZyBpc24ndCBzZXQgaW4gTFMsIGFuZCB3ZSdyZSBpbiBFbGVjdHJvbiwgdHJ5IHRvIGxvYWQgJERFQlVHXG5cdGlmICghciAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2VudicgaW4gcHJvY2Vzcykge1xuXHRcdHIgPSBwcm9jZXNzLmVudi5ERUJVRztcblx0fVxuXG5cdHJldHVybiByO1xufVxuXG4vKipcbiAqIExvY2Fsc3RvcmFnZSBhdHRlbXB0cyB0byByZXR1cm4gdGhlIGxvY2Fsc3RvcmFnZS5cbiAqXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHNhZmFyaSB0aHJvd3NcbiAqIHdoZW4gYSB1c2VyIGRpc2FibGVzIGNvb2tpZXMvbG9jYWxzdG9yYWdlXG4gKiBhbmQgeW91IGF0dGVtcHQgdG8gYWNjZXNzIGl0LlxuICpcbiAqIEByZXR1cm4ge0xvY2FsU3RvcmFnZX1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvY2Fsc3RvcmFnZSgpIHtcblx0dHJ5IHtcblx0XHQvLyBUVk1MS2l0IChBcHBsZSBUViBKUyBSdW50aW1lKSBkb2VzIG5vdCBoYXZlIGEgd2luZG93IG9iamVjdCwganVzdCBsb2NhbFN0b3JhZ2UgaW4gdGhlIGdsb2JhbCBjb250ZXh0XG5cdFx0Ly8gVGhlIEJyb3dzZXIgYWxzbyBoYXMgbG9jYWxTdG9yYWdlIGluIHRoZSBnbG9iYWwgY29udGV4dC5cblx0XHRyZXR1cm4gbG9jYWxTdG9yYWdlO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY29tbW9uJykoZXhwb3J0cyk7XG5cbmNvbnN0IHtmb3JtYXR0ZXJzfSA9IG1vZHVsZS5leHBvcnRzO1xuXG4vKipcbiAqIE1hcCAlaiB0byBgSlNPTi5zdHJpbmdpZnkoKWAsIHNpbmNlIG5vIFdlYiBJbnNwZWN0b3JzIGRvIHRoYXQgYnkgZGVmYXVsdC5cbiAqL1xuXG5mb3JtYXR0ZXJzLmogPSBmdW5jdGlvbiAodikge1xuXHR0cnkge1xuXHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSh2KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXR1cm4gJ1tVbmV4cGVjdGVkSlNPTlBhcnNlRXJyb3JdOiAnICsgZXJyb3IubWVzc2FnZTtcblx0fVxufTtcbiIsIlxuLyoqXG4gKiBUaGlzIGlzIHRoZSBjb21tb24gbG9naWMgZm9yIGJvdGggdGhlIE5vZGUuanMgYW5kIHdlYiBicm93c2VyXG4gKiBpbXBsZW1lbnRhdGlvbnMgb2YgYGRlYnVnKClgLlxuICovXG5cbmZ1bmN0aW9uIHNldHVwKGVudikge1xuXHRjcmVhdGVEZWJ1Zy5kZWJ1ZyA9IGNyZWF0ZURlYnVnO1xuXHRjcmVhdGVEZWJ1Zy5kZWZhdWx0ID0gY3JlYXRlRGVidWc7XG5cdGNyZWF0ZURlYnVnLmNvZXJjZSA9IGNvZXJjZTtcblx0Y3JlYXRlRGVidWcuZGlzYWJsZSA9IGRpc2FibGU7XG5cdGNyZWF0ZURlYnVnLmVuYWJsZSA9IGVuYWJsZTtcblx0Y3JlYXRlRGVidWcuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdGNyZWF0ZURlYnVnLmh1bWFuaXplID0gcmVxdWlyZSgnbXMnKTtcblxuXHRPYmplY3Qua2V5cyhlbnYpLmZvckVhY2goa2V5ID0+IHtcblx0XHRjcmVhdGVEZWJ1Z1trZXldID0gZW52W2tleV07XG5cdH0pO1xuXG5cdC8qKlxuXHQqIEFjdGl2ZSBgZGVidWdgIGluc3RhbmNlcy5cblx0Ki9cblx0Y3JlYXRlRGVidWcuaW5zdGFuY2VzID0gW107XG5cblx0LyoqXG5cdCogVGhlIGN1cnJlbnRseSBhY3RpdmUgZGVidWcgbW9kZSBuYW1lcywgYW5kIG5hbWVzIHRvIHNraXAuXG5cdCovXG5cblx0Y3JlYXRlRGVidWcubmFtZXMgPSBbXTtcblx0Y3JlYXRlRGVidWcuc2tpcHMgPSBbXTtcblxuXHQvKipcblx0KiBNYXAgb2Ygc3BlY2lhbCBcIiVuXCIgaGFuZGxpbmcgZnVuY3Rpb25zLCBmb3IgdGhlIGRlYnVnIFwiZm9ybWF0XCIgYXJndW1lbnQuXG5cdCpcblx0KiBWYWxpZCBrZXkgbmFtZXMgYXJlIGEgc2luZ2xlLCBsb3dlciBvciB1cHBlci1jYXNlIGxldHRlciwgaS5lLiBcIm5cIiBhbmQgXCJOXCIuXG5cdCovXG5cdGNyZWF0ZURlYnVnLmZvcm1hdHRlcnMgPSB7fTtcblxuXHQvKipcblx0KiBTZWxlY3RzIGEgY29sb3IgZm9yIGEgZGVidWcgbmFtZXNwYWNlXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZSBUaGUgbmFtZXNwYWNlIHN0cmluZyBmb3IgdGhlIGZvciB0aGUgZGVidWcgaW5zdGFuY2UgdG8gYmUgY29sb3JlZFxuXHQqIEByZXR1cm4ge051bWJlcnxTdHJpbmd9IEFuIEFOU0kgY29sb3IgY29kZSBmb3IgdGhlIGdpdmVuIG5hbWVzcGFjZVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiBzZWxlY3RDb2xvcihuYW1lc3BhY2UpIHtcblx0XHRsZXQgaGFzaCA9IDA7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgbmFtZXNwYWNlLmNoYXJDb2RlQXQoaSk7XG5cdFx0XHRoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuXHRcdH1cblxuXHRcdHJldHVybiBjcmVhdGVEZWJ1Zy5jb2xvcnNbTWF0aC5hYnMoaGFzaCkgJSBjcmVhdGVEZWJ1Zy5jb2xvcnMubGVuZ3RoXTtcblx0fVxuXHRjcmVhdGVEZWJ1Zy5zZWxlY3RDb2xvciA9IHNlbGVjdENvbG9yO1xuXG5cdC8qKlxuXHQqIENyZWF0ZSBhIGRlYnVnZ2VyIHdpdGggdGhlIGdpdmVuIGBuYW1lc3BhY2VgLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuXHQqIEByZXR1cm4ge0Z1bmN0aW9ufVxuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGNyZWF0ZURlYnVnKG5hbWVzcGFjZSkge1xuXHRcdGxldCBwcmV2VGltZTtcblxuXHRcdGZ1bmN0aW9uIGRlYnVnKC4uLmFyZ3MpIHtcblx0XHRcdC8vIERpc2FibGVkP1xuXHRcdFx0aWYgKCFkZWJ1Zy5lbmFibGVkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgc2VsZiA9IGRlYnVnO1xuXG5cdFx0XHQvLyBTZXQgYGRpZmZgIHRpbWVzdGFtcFxuXHRcdFx0Y29uc3QgY3VyciA9IE51bWJlcihuZXcgRGF0ZSgpKTtcblx0XHRcdGNvbnN0IG1zID0gY3VyciAtIChwcmV2VGltZSB8fCBjdXJyKTtcblx0XHRcdHNlbGYuZGlmZiA9IG1zO1xuXHRcdFx0c2VsZi5wcmV2ID0gcHJldlRpbWU7XG5cdFx0XHRzZWxmLmN1cnIgPSBjdXJyO1xuXHRcdFx0cHJldlRpbWUgPSBjdXJyO1xuXG5cdFx0XHRhcmdzWzBdID0gY3JlYXRlRGVidWcuY29lcmNlKGFyZ3NbMF0pO1xuXG5cdFx0XHRpZiAodHlwZW9mIGFyZ3NbMF0gIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdC8vIEFueXRoaW5nIGVsc2UgbGV0J3MgaW5zcGVjdCB3aXRoICVPXG5cdFx0XHRcdGFyZ3MudW5zaGlmdCgnJU8nKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQXBwbHkgYW55IGBmb3JtYXR0ZXJzYCB0cmFuc2Zvcm1hdGlvbnNcblx0XHRcdGxldCBpbmRleCA9IDA7XG5cdFx0XHRhcmdzWzBdID0gYXJnc1swXS5yZXBsYWNlKC8lKFthLXpBLVolXSkvZywgKG1hdGNoLCBmb3JtYXQpID0+IHtcblx0XHRcdFx0Ly8gSWYgd2UgZW5jb3VudGVyIGFuIGVzY2FwZWQgJSB0aGVuIGRvbid0IGluY3JlYXNlIHRoZSBhcnJheSBpbmRleFxuXHRcdFx0XHRpZiAobWF0Y2ggPT09ICclJScpIHtcblx0XHRcdFx0XHRyZXR1cm4gbWF0Y2g7XG5cdFx0XHRcdH1cblx0XHRcdFx0aW5kZXgrKztcblx0XHRcdFx0Y29uc3QgZm9ybWF0dGVyID0gY3JlYXRlRGVidWcuZm9ybWF0dGVyc1tmb3JtYXRdO1xuXHRcdFx0XHRpZiAodHlwZW9mIGZvcm1hdHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdGNvbnN0IHZhbCA9IGFyZ3NbaW5kZXhdO1xuXHRcdFx0XHRcdG1hdGNoID0gZm9ybWF0dGVyLmNhbGwoc2VsZiwgdmFsKTtcblxuXHRcdFx0XHRcdC8vIE5vdyB3ZSBuZWVkIHRvIHJlbW92ZSBgYXJnc1tpbmRleF1gIHNpbmNlIGl0J3MgaW5saW5lZCBpbiB0aGUgYGZvcm1hdGBcblx0XHRcdFx0XHRhcmdzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRcdFx0aW5kZXgtLTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbWF0Y2g7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gQXBwbHkgZW52LXNwZWNpZmljIGZvcm1hdHRpbmcgKGNvbG9ycywgZXRjLilcblx0XHRcdGNyZWF0ZURlYnVnLmZvcm1hdEFyZ3MuY2FsbChzZWxmLCBhcmdzKTtcblxuXHRcdFx0Y29uc3QgbG9nRm4gPSBzZWxmLmxvZyB8fCBjcmVhdGVEZWJ1Zy5sb2c7XG5cdFx0XHRsb2dGbi5hcHBseShzZWxmLCBhcmdzKTtcblx0XHR9XG5cblx0XHRkZWJ1Zy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG5cdFx0ZGVidWcuZW5hYmxlZCA9IGNyZWF0ZURlYnVnLmVuYWJsZWQobmFtZXNwYWNlKTtcblx0XHRkZWJ1Zy51c2VDb2xvcnMgPSBjcmVhdGVEZWJ1Zy51c2VDb2xvcnMoKTtcblx0XHRkZWJ1Zy5jb2xvciA9IHNlbGVjdENvbG9yKG5hbWVzcGFjZSk7XG5cdFx0ZGVidWcuZGVzdHJveSA9IGRlc3Ryb3k7XG5cdFx0ZGVidWcuZXh0ZW5kID0gZXh0ZW5kO1xuXHRcdC8vIERlYnVnLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuXHRcdC8vIGRlYnVnLnJhd0xvZyA9IHJhd0xvZztcblxuXHRcdC8vIGVudi1zcGVjaWZpYyBpbml0aWFsaXphdGlvbiBsb2dpYyBmb3IgZGVidWcgaW5zdGFuY2VzXG5cdFx0aWYgKHR5cGVvZiBjcmVhdGVEZWJ1Zy5pbml0ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRjcmVhdGVEZWJ1Zy5pbml0KGRlYnVnKTtcblx0XHR9XG5cblx0XHRjcmVhdGVEZWJ1Zy5pbnN0YW5jZXMucHVzaChkZWJ1Zyk7XG5cblx0XHRyZXR1cm4gZGVidWc7XG5cdH1cblxuXHRmdW5jdGlvbiBkZXN0cm95KCkge1xuXHRcdGNvbnN0IGluZGV4ID0gY3JlYXRlRGVidWcuaW5zdGFuY2VzLmluZGV4T2YodGhpcyk7XG5cdFx0aWYgKGluZGV4ICE9PSAtMSkge1xuXHRcdFx0Y3JlYXRlRGVidWcuaW5zdGFuY2VzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0ZnVuY3Rpb24gZXh0ZW5kKG5hbWVzcGFjZSwgZGVsaW1pdGVyKSB7XG5cdFx0Y29uc3QgbmV3RGVidWcgPSBjcmVhdGVEZWJ1Zyh0aGlzLm5hbWVzcGFjZSArICh0eXBlb2YgZGVsaW1pdGVyID09PSAndW5kZWZpbmVkJyA/ICc6JyA6IGRlbGltaXRlcikgKyBuYW1lc3BhY2UpO1xuXHRcdG5ld0RlYnVnLmxvZyA9IHRoaXMubG9nO1xuXHRcdHJldHVybiBuZXdEZWJ1Zztcblx0fVxuXG5cdC8qKlxuXHQqIEVuYWJsZXMgYSBkZWJ1ZyBtb2RlIGJ5IG5hbWVzcGFjZXMuIFRoaXMgY2FuIGluY2x1ZGUgbW9kZXNcblx0KiBzZXBhcmF0ZWQgYnkgYSBjb2xvbiBhbmQgd2lsZGNhcmRzLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBlbmFibGUobmFtZXNwYWNlcykge1xuXHRcdGNyZWF0ZURlYnVnLnNhdmUobmFtZXNwYWNlcyk7XG5cblx0XHRjcmVhdGVEZWJ1Zy5uYW1lcyA9IFtdO1xuXHRcdGNyZWF0ZURlYnVnLnNraXBzID0gW107XG5cblx0XHRsZXQgaTtcblx0XHRjb25zdCBzcGxpdCA9ICh0eXBlb2YgbmFtZXNwYWNlcyA9PT0gJ3N0cmluZycgPyBuYW1lc3BhY2VzIDogJycpLnNwbGl0KC9bXFxzLF0rLyk7XG5cdFx0Y29uc3QgbGVuID0gc3BsaXQubGVuZ3RoO1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoIXNwbGl0W2ldKSB7XG5cdFx0XHRcdC8vIGlnbm9yZSBlbXB0eSBzdHJpbmdzXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRuYW1lc3BhY2VzID0gc3BsaXRbaV0ucmVwbGFjZSgvXFwqL2csICcuKj8nKTtcblxuXHRcdFx0aWYgKG5hbWVzcGFjZXNbMF0gPT09ICctJykge1xuXHRcdFx0XHRjcmVhdGVEZWJ1Zy5za2lwcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcy5zdWJzdHIoMSkgKyAnJCcpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNyZWF0ZURlYnVnLm5hbWVzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzICsgJyQnKSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMDsgaSA8IGNyZWF0ZURlYnVnLmluc3RhbmNlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgaW5zdGFuY2UgPSBjcmVhdGVEZWJ1Zy5pbnN0YW5jZXNbaV07XG5cdFx0XHRpbnN0YW5jZS5lbmFibGVkID0gY3JlYXRlRGVidWcuZW5hYmxlZChpbnN0YW5jZS5uYW1lc3BhY2UpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQqIERpc2FibGUgZGVidWcgb3V0cHV0LlxuXHQqXG5cdCogQHJldHVybiB7U3RyaW5nfSBuYW1lc3BhY2VzXG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZGlzYWJsZSgpIHtcblx0XHRjb25zdCBuYW1lc3BhY2VzID0gW1xuXHRcdFx0Li4uY3JlYXRlRGVidWcubmFtZXMubWFwKHRvTmFtZXNwYWNlKSxcblx0XHRcdC4uLmNyZWF0ZURlYnVnLnNraXBzLm1hcCh0b05hbWVzcGFjZSkubWFwKG5hbWVzcGFjZSA9PiAnLScgKyBuYW1lc3BhY2UpXG5cdFx0XS5qb2luKCcsJyk7XG5cdFx0Y3JlYXRlRGVidWcuZW5hYmxlKCcnKTtcblx0XHRyZXR1cm4gbmFtZXNwYWNlcztcblx0fVxuXG5cdC8qKlxuXHQqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbW9kZSBuYW1lIGlzIGVuYWJsZWQsIGZhbHNlIG90aGVyd2lzZS5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG5cdCogQHJldHVybiB7Qm9vbGVhbn1cblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBlbmFibGVkKG5hbWUpIHtcblx0XHRpZiAobmFtZVtuYW1lLmxlbmd0aCAtIDFdID09PSAnKicpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGxldCBpO1xuXHRcdGxldCBsZW47XG5cblx0XHRmb3IgKGkgPSAwLCBsZW4gPSBjcmVhdGVEZWJ1Zy5za2lwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKGNyZWF0ZURlYnVnLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDAsIGxlbiA9IGNyZWF0ZURlYnVnLm5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoY3JlYXRlRGVidWcubmFtZXNbaV0udGVzdChuYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKipcblx0KiBDb252ZXJ0IHJlZ2V4cCB0byBuYW1lc3BhY2Vcblx0KlxuXHQqIEBwYXJhbSB7UmVnRXhwfSByZWd4ZXBcblx0KiBAcmV0dXJuIHtTdHJpbmd9IG5hbWVzcGFjZVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiB0b05hbWVzcGFjZShyZWdleHApIHtcblx0XHRyZXR1cm4gcmVnZXhwLnRvU3RyaW5nKClcblx0XHRcdC5zdWJzdHJpbmcoMiwgcmVnZXhwLnRvU3RyaW5nKCkubGVuZ3RoIC0gMilcblx0XHRcdC5yZXBsYWNlKC9cXC5cXCpcXD8kLywgJyonKTtcblx0fVxuXG5cdC8qKlxuXHQqIENvZXJjZSBgdmFsYC5cblx0KlxuXHQqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuXHQqIEByZXR1cm4ge01peGVkfVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiBjb2VyY2UodmFsKSB7XG5cdFx0aWYgKHZhbCBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdFx0XHRyZXR1cm4gdmFsLnN0YWNrIHx8IHZhbC5tZXNzYWdlO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsO1xuXHR9XG5cblx0Y3JlYXRlRGVidWcuZW5hYmxlKGNyZWF0ZURlYnVnLmxvYWQoKSk7XG5cblx0cmV0dXJuIGNyZWF0ZURlYnVnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldHVwO1xuIiwiY29uc3QgUEFDS0VUX1RZUEVTID0gT2JqZWN0LmNyZWF0ZShudWxsKTsgLy8gbm8gTWFwID0gbm8gcG9seWZpbGxcblBBQ0tFVF9UWVBFU1tcIm9wZW5cIl0gPSBcIjBcIjtcblBBQ0tFVF9UWVBFU1tcImNsb3NlXCJdID0gXCIxXCI7XG5QQUNLRVRfVFlQRVNbXCJwaW5nXCJdID0gXCIyXCI7XG5QQUNLRVRfVFlQRVNbXCJwb25nXCJdID0gXCIzXCI7XG5QQUNLRVRfVFlQRVNbXCJtZXNzYWdlXCJdID0gXCI0XCI7XG5QQUNLRVRfVFlQRVNbXCJ1cGdyYWRlXCJdID0gXCI1XCI7XG5QQUNLRVRfVFlQRVNbXCJub29wXCJdID0gXCI2XCI7XG5cbmNvbnN0IFBBQ0tFVF9UWVBFU19SRVZFUlNFID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbk9iamVjdC5rZXlzKFBBQ0tFVF9UWVBFUykuZm9yRWFjaChrZXkgPT4ge1xuICBQQUNLRVRfVFlQRVNfUkVWRVJTRVtQQUNLRVRfVFlQRVNba2V5XV0gPSBrZXk7XG59KTtcblxuY29uc3QgRVJST1JfUEFDS0VUID0geyB0eXBlOiBcImVycm9yXCIsIGRhdGE6IFwicGFyc2VyIGVycm9yXCIgfTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFBBQ0tFVF9UWVBFUyxcbiAgUEFDS0VUX1RZUEVTX1JFVkVSU0UsXG4gIEVSUk9SX1BBQ0tFVFxufTtcbiIsImNvbnN0IHsgUEFDS0VUX1RZUEVTX1JFVkVSU0UsIEVSUk9SX1BBQ0tFVCB9ID0gcmVxdWlyZShcIi4vY29tbW9uc1wiKTtcblxuY29uc3Qgd2l0aE5hdGl2ZUFycmF5QnVmZmVyID0gdHlwZW9mIEFycmF5QnVmZmVyID09PSBcImZ1bmN0aW9uXCI7XG5cbmxldCBiYXNlNjRkZWNvZGVyO1xuaWYgKHdpdGhOYXRpdmVBcnJheUJ1ZmZlcikge1xuICBiYXNlNjRkZWNvZGVyID0gcmVxdWlyZShcImJhc2U2NC1hcnJheWJ1ZmZlclwiKTtcbn1cblxuY29uc3QgZGVjb2RlUGFja2V0ID0gKGVuY29kZWRQYWNrZXQsIGJpbmFyeVR5cGUpID0+IHtcbiAgaWYgKHR5cGVvZiBlbmNvZGVkUGFja2V0ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFwibWVzc2FnZVwiLFxuICAgICAgZGF0YTogbWFwQmluYXJ5KGVuY29kZWRQYWNrZXQsIGJpbmFyeVR5cGUpXG4gICAgfTtcbiAgfVxuICBjb25zdCB0eXBlID0gZW5jb2RlZFBhY2tldC5jaGFyQXQoMCk7XG4gIGlmICh0eXBlID09PSBcImJcIikge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBcIm1lc3NhZ2VcIixcbiAgICAgIGRhdGE6IGRlY29kZUJhc2U2NFBhY2tldChlbmNvZGVkUGFja2V0LnN1YnN0cmluZygxKSwgYmluYXJ5VHlwZSlcbiAgICB9O1xuICB9XG4gIGNvbnN0IHBhY2tldFR5cGUgPSBQQUNLRVRfVFlQRVNfUkVWRVJTRVt0eXBlXTtcbiAgaWYgKCFwYWNrZXRUeXBlKSB7XG4gICAgcmV0dXJuIEVSUk9SX1BBQ0tFVDtcbiAgfVxuICByZXR1cm4gZW5jb2RlZFBhY2tldC5sZW5ndGggPiAxXG4gICAgPyB7XG4gICAgICAgIHR5cGU6IFBBQ0tFVF9UWVBFU19SRVZFUlNFW3R5cGVdLFxuICAgICAgICBkYXRhOiBlbmNvZGVkUGFja2V0LnN1YnN0cmluZygxKVxuICAgICAgfVxuICAgIDoge1xuICAgICAgICB0eXBlOiBQQUNLRVRfVFlQRVNfUkVWRVJTRVt0eXBlXVxuICAgICAgfTtcbn07XG5cbmNvbnN0IGRlY29kZUJhc2U2NFBhY2tldCA9IChkYXRhLCBiaW5hcnlUeXBlKSA9PiB7XG4gIGlmIChiYXNlNjRkZWNvZGVyKSB7XG4gICAgY29uc3QgZGVjb2RlZCA9IGJhc2U2NGRlY29kZXIuZGVjb2RlKGRhdGEpO1xuICAgIHJldHVybiBtYXBCaW5hcnkoZGVjb2RlZCwgYmluYXJ5VHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHsgYmFzZTY0OiB0cnVlLCBkYXRhIH07IC8vIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnNcbiAgfVxufTtcblxuY29uc3QgbWFwQmluYXJ5ID0gKGRhdGEsIGJpbmFyeVR5cGUpID0+IHtcbiAgc3dpdGNoIChiaW5hcnlUeXBlKSB7XG4gICAgY2FzZSBcImJsb2JcIjpcbiAgICAgIHJldHVybiBkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgPyBuZXcgQmxvYihbZGF0YV0pIDogZGF0YTtcbiAgICBjYXNlIFwiYXJyYXlidWZmZXJcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGRhdGE7IC8vIGFzc3VtaW5nIHRoZSBkYXRhIGlzIGFscmVhZHkgYW4gQXJyYXlCdWZmZXJcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWNvZGVQYWNrZXQ7XG4iLCJjb25zdCB7IFBBQ0tFVF9UWVBFUyB9ID0gcmVxdWlyZShcIi4vY29tbW9uc1wiKTtcblxuY29uc3Qgd2l0aE5hdGl2ZUJsb2IgPVxuICB0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiIHx8XG4gICh0eXBlb2YgQmxvYiAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChCbG9iKSA9PT0gXCJbb2JqZWN0IEJsb2JDb25zdHJ1Y3Rvcl1cIik7XG5jb25zdCB3aXRoTmF0aXZlQXJyYXlCdWZmZXIgPSB0eXBlb2YgQXJyYXlCdWZmZXIgPT09IFwiZnVuY3Rpb25cIjtcblxuLy8gQXJyYXlCdWZmZXIuaXNWaWV3IG1ldGhvZCBpcyBub3QgZGVmaW5lZCBpbiBJRTEwXG5jb25zdCBpc1ZpZXcgPSBvYmogPT4ge1xuICByZXR1cm4gdHlwZW9mIEFycmF5QnVmZmVyLmlzVmlldyA9PT0gXCJmdW5jdGlvblwiXG4gICAgPyBBcnJheUJ1ZmZlci5pc1ZpZXcob2JqKVxuICAgIDogb2JqICYmIG9iai5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcjtcbn07XG5cbmNvbnN0IGVuY29kZVBhY2tldCA9ICh7IHR5cGUsIGRhdGEgfSwgc3VwcG9ydHNCaW5hcnksIGNhbGxiYWNrKSA9PiB7XG4gIGlmICh3aXRoTmF0aXZlQmxvYiAmJiBkYXRhIGluc3RhbmNlb2YgQmxvYikge1xuICAgIGlmIChzdXBwb3J0c0JpbmFyeSkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZW5jb2RlQmxvYkFzQmFzZTY0KGRhdGEsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoXG4gICAgd2l0aE5hdGl2ZUFycmF5QnVmZmVyICYmXG4gICAgKGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciB8fCBpc1ZpZXcoZGF0YSkpXG4gICkge1xuICAgIGlmIChzdXBwb3J0c0JpbmFyeSkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciA/IGRhdGEgOiBkYXRhLmJ1ZmZlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbmNvZGVCbG9iQXNCYXNlNjQobmV3IEJsb2IoW2RhdGFdKSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfVxuICAvLyBwbGFpbiBzdHJpbmdcbiAgcmV0dXJuIGNhbGxiYWNrKFBBQ0tFVF9UWVBFU1t0eXBlXSArIChkYXRhIHx8IFwiXCIpKTtcbn07XG5cbmNvbnN0IGVuY29kZUJsb2JBc0Jhc2U2NCA9IChkYXRhLCBjYWxsYmFjaykgPT4ge1xuICBjb25zdCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgZmlsZVJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZmlsZVJlYWRlci5yZXN1bHQuc3BsaXQoXCIsXCIpWzFdO1xuICAgIGNhbGxiYWNrKFwiYlwiICsgY29udGVudCk7XG4gIH07XG4gIHJldHVybiBmaWxlUmVhZGVyLnJlYWRBc0RhdGFVUkwoZGF0YSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVuY29kZVBhY2tldDtcbiIsImNvbnN0IGVuY29kZVBhY2tldCA9IHJlcXVpcmUoXCIuL2VuY29kZVBhY2tldFwiKTtcbmNvbnN0IGRlY29kZVBhY2tldCA9IHJlcXVpcmUoXCIuL2RlY29kZVBhY2tldFwiKTtcblxuY29uc3QgU0VQQVJBVE9SID0gU3RyaW5nLmZyb21DaGFyQ29kZSgzMCk7IC8vIHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9EZWxpbWl0ZXIjQVNDSUlfZGVsaW1pdGVkX3RleHRcblxuY29uc3QgZW5jb2RlUGF5bG9hZCA9IChwYWNrZXRzLCBjYWxsYmFjaykgPT4ge1xuICAvLyBzb21lIHBhY2tldHMgbWF5IGJlIGFkZGVkIHRvIHRoZSBhcnJheSB3aGlsZSBlbmNvZGluZywgc28gdGhlIGluaXRpYWwgbGVuZ3RoIG11c3QgYmUgc2F2ZWRcbiAgY29uc3QgbGVuZ3RoID0gcGFja2V0cy5sZW5ndGg7XG4gIGNvbnN0IGVuY29kZWRQYWNrZXRzID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gIGxldCBjb3VudCA9IDA7XG5cbiAgcGFja2V0cy5mb3JFYWNoKChwYWNrZXQsIGkpID0+IHtcbiAgICAvLyBmb3JjZSBiYXNlNjQgZW5jb2RpbmcgZm9yIGJpbmFyeSBwYWNrZXRzXG4gICAgZW5jb2RlUGFja2V0KHBhY2tldCwgZmFsc2UsIGVuY29kZWRQYWNrZXQgPT4ge1xuICAgICAgZW5jb2RlZFBhY2tldHNbaV0gPSBlbmNvZGVkUGFja2V0O1xuICAgICAgaWYgKCsrY291bnQgPT09IGxlbmd0aCkge1xuICAgICAgICBjYWxsYmFjayhlbmNvZGVkUGFja2V0cy5qb2luKFNFUEFSQVRPUikpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGRlY29kZVBheWxvYWQgPSAoZW5jb2RlZFBheWxvYWQsIGJpbmFyeVR5cGUpID0+IHtcbiAgY29uc3QgZW5jb2RlZFBhY2tldHMgPSBlbmNvZGVkUGF5bG9hZC5zcGxpdChTRVBBUkFUT1IpO1xuICBjb25zdCBwYWNrZXRzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZW5jb2RlZFBhY2tldHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBkZWNvZGVkUGFja2V0ID0gZGVjb2RlUGFja2V0KGVuY29kZWRQYWNrZXRzW2ldLCBiaW5hcnlUeXBlKTtcbiAgICBwYWNrZXRzLnB1c2goZGVjb2RlZFBhY2tldCk7XG4gICAgaWYgKGRlY29kZWRQYWNrZXQudHlwZSA9PT0gXCJlcnJvclwiKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBhY2tldHM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHJvdG9jb2w6IDQsXG4gIGVuY29kZVBhY2tldCxcbiAgZW5jb2RlUGF5bG9hZCxcbiAgZGVjb2RlUGFja2V0LFxuICBkZWNvZGVQYXlsb2FkXG59O1xuIiwiLyoqXG4gKiBDb21waWxlcyBhIHF1ZXJ5c3RyaW5nXG4gKiBSZXR1cm5zIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLmVuY29kZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgdmFyIHN0ciA9ICcnO1xuXG4gIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgaWYgKHN0ci5sZW5ndGgpIHN0ciArPSAnJic7XG4gICAgICBzdHIgKz0gZW5jb2RlVVJJQ29tcG9uZW50KGkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtpXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0cjtcbn07XG5cbi8qKlxuICogUGFyc2VzIGEgc2ltcGxlIHF1ZXJ5c3RyaW5nIGludG8gYW4gb2JqZWN0XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHFzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLmRlY29kZSA9IGZ1bmN0aW9uKHFzKXtcbiAgdmFyIHFyeSA9IHt9O1xuICB2YXIgcGFpcnMgPSBxcy5zcGxpdCgnJicpO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHBhaXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHZhciBwYWlyID0gcGFpcnNbaV0uc3BsaXQoJz0nKTtcbiAgICBxcnlbZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMF0pXSA9IGRlY29kZVVSSUNvbXBvbmVudChwYWlyWzFdKTtcbiAgfVxuICByZXR1cm4gcXJ5O1xufTtcbiIsIi8qKlxuICogUGFyc2VzIGFuIFVSSVxuICpcbiAqIEBhdXRob3IgU3RldmVuIExldml0aGFuIDxzdGV2ZW5sZXZpdGhhbi5jb20+IChNSVQgbGljZW5zZSlcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbnZhciByZSA9IC9eKD86KD8hW146QF0rOlteOkBcXC9dKkApKGh0dHB8aHR0cHN8d3N8d3NzKTpcXC9cXC8pPygoPzooKFteOkBdKikoPzo6KFteOkBdKikpPyk/QCk/KCg/OlthLWYwLTldezAsNH06KXsyLDd9W2EtZjAtOV17MCw0fXxbXjpcXC8/I10qKSg/OjooXFxkKikpPykoKChcXC8oPzpbXj8jXSg/IVtePyNcXC9dKlxcLltePyNcXC8uXSsoPzpbPyNdfCQpKSkqXFwvPyk/KFtePyNcXC9dKikpKD86XFw/KFteI10qKSk/KD86IyguKikpPykvO1xuXG52YXIgcGFydHMgPSBbXG4gICAgJ3NvdXJjZScsICdwcm90b2NvbCcsICdhdXRob3JpdHknLCAndXNlckluZm8nLCAndXNlcicsICdwYXNzd29yZCcsICdob3N0JywgJ3BvcnQnLCAncmVsYXRpdmUnLCAncGF0aCcsICdkaXJlY3RvcnknLCAnZmlsZScsICdxdWVyeScsICdhbmNob3InXG5dO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNldXJpKHN0cikge1xuICAgIHZhciBzcmMgPSBzdHIsXG4gICAgICAgIGIgPSBzdHIuaW5kZXhPZignWycpLFxuICAgICAgICBlID0gc3RyLmluZGV4T2YoJ10nKTtcblxuICAgIGlmIChiICE9IC0xICYmIGUgIT0gLTEpIHtcbiAgICAgICAgc3RyID0gc3RyLnN1YnN0cmluZygwLCBiKSArIHN0ci5zdWJzdHJpbmcoYiwgZSkucmVwbGFjZSgvOi9nLCAnOycpICsgc3RyLnN1YnN0cmluZyhlLCBzdHIubGVuZ3RoKTtcbiAgICB9XG5cbiAgICB2YXIgbSA9IHJlLmV4ZWMoc3RyIHx8ICcnKSxcbiAgICAgICAgdXJpID0ge30sXG4gICAgICAgIGkgPSAxNDtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgdXJpW3BhcnRzW2ldXSA9IG1baV0gfHwgJyc7XG4gICAgfVxuXG4gICAgaWYgKGIgIT0gLTEgJiYgZSAhPSAtMSkge1xuICAgICAgICB1cmkuc291cmNlID0gc3JjO1xuICAgICAgICB1cmkuaG9zdCA9IHVyaS5ob3N0LnN1YnN0cmluZygxLCB1cmkuaG9zdC5sZW5ndGggLSAxKS5yZXBsYWNlKC87L2csICc6Jyk7XG4gICAgICAgIHVyaS5hdXRob3JpdHkgPSB1cmkuYXV0aG9yaXR5LnJlcGxhY2UoJ1snLCAnJykucmVwbGFjZSgnXScsICcnKS5yZXBsYWNlKC87L2csICc6Jyk7XG4gICAgICAgIHVyaS5pcHY2dXJpID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB1cmkucGF0aE5hbWVzID0gcGF0aE5hbWVzKHVyaSwgdXJpWydwYXRoJ10pO1xuICAgIHVyaS5xdWVyeUtleSA9IHF1ZXJ5S2V5KHVyaSwgdXJpWydxdWVyeSddKTtcblxuICAgIHJldHVybiB1cmk7XG59O1xuXG5mdW5jdGlvbiBwYXRoTmFtZXMob2JqLCBwYXRoKSB7XG4gICAgdmFyIHJlZ3ggPSAvXFwvezIsOX0vZyxcbiAgICAgICAgbmFtZXMgPSBwYXRoLnJlcGxhY2UocmVneCwgXCIvXCIpLnNwbGl0KFwiL1wiKTtcblxuICAgIGlmIChwYXRoLnN1YnN0cigwLCAxKSA9PSAnLycgfHwgcGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbmFtZXMuc3BsaWNlKDAsIDEpO1xuICAgIH1cbiAgICBpZiAocGF0aC5zdWJzdHIocGF0aC5sZW5ndGggLSAxLCAxKSA9PSAnLycpIHtcbiAgICAgICAgbmFtZXMuc3BsaWNlKG5hbWVzLmxlbmd0aCAtIDEsIDEpO1xuICAgIH1cblxuICAgIHJldHVybiBuYW1lcztcbn1cblxuZnVuY3Rpb24gcXVlcnlLZXkodXJpLCBxdWVyeSkge1xuICAgIHZhciBkYXRhID0ge307XG5cbiAgICBxdWVyeS5yZXBsYWNlKC8oPzpefCYpKFteJj1dKik9PyhbXiZdKikvZywgZnVuY3Rpb24gKCQwLCAkMSwgJDIpIHtcbiAgICAgICAgaWYgKCQxKSB7XG4gICAgICAgICAgICBkYXRhWyQxXSA9ICQyO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbn1cbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhbHBoYWJldCA9ICcwMTIzNDU2Nzg5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ei1fJy5zcGxpdCgnJylcbiAgLCBsZW5ndGggPSA2NFxuICAsIG1hcCA9IHt9XG4gICwgc2VlZCA9IDBcbiAgLCBpID0gMFxuICAsIHByZXY7XG5cbi8qKlxuICogUmV0dXJuIGEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgc3BlY2lmaWVkIG51bWJlci5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbnVtIFRoZSBudW1iZXIgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG51bWJlci5cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIGVuY29kZShudW0pIHtcbiAgdmFyIGVuY29kZWQgPSAnJztcblxuICBkbyB7XG4gICAgZW5jb2RlZCA9IGFscGhhYmV0W251bSAlIGxlbmd0aF0gKyBlbmNvZGVkO1xuICAgIG51bSA9IE1hdGguZmxvb3IobnVtIC8gbGVuZ3RoKTtcbiAgfSB3aGlsZSAobnVtID4gMCk7XG5cbiAgcmV0dXJuIGVuY29kZWQ7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBpbnRlZ2VyIHZhbHVlIHNwZWNpZmllZCBieSB0aGUgZ2l2ZW4gc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge051bWJlcn0gVGhlIGludGVnZXIgdmFsdWUgcmVwcmVzZW50ZWQgYnkgdGhlIHN0cmluZy5cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIGRlY29kZShzdHIpIHtcbiAgdmFyIGRlY29kZWQgPSAwO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBkZWNvZGVkID0gZGVjb2RlZCAqIGxlbmd0aCArIG1hcFtzdHIuY2hhckF0KGkpXTtcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVkO1xufVxuXG4vKipcbiAqIFllYXN0OiBBIHRpbnkgZ3Jvd2luZyBpZCBnZW5lcmF0b3IuXG4gKlxuICogQHJldHVybnMge1N0cmluZ30gQSB1bmlxdWUgaWQuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiB5ZWFzdCgpIHtcbiAgdmFyIG5vdyA9IGVuY29kZSgrbmV3IERhdGUoKSk7XG5cbiAgaWYgKG5vdyAhPT0gcHJldikgcmV0dXJuIHNlZWQgPSAwLCBwcmV2ID0gbm93O1xuICByZXR1cm4gbm93ICsnLicrIGVuY29kZShzZWVkKyspO1xufVxuXG4vL1xuLy8gTWFwIGVhY2ggY2hhcmFjdGVyIHRvIGl0cyBpbmRleC5cbi8vXG5mb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSBtYXBbYWxwaGFiZXRbaV1dID0gaTtcblxuLy9cbi8vIEV4cG9zZSB0aGUgYHllYXN0YCwgYGVuY29kZWAgYW5kIGBkZWNvZGVgIGZ1bmN0aW9ucy5cbi8vXG55ZWFzdC5lbmNvZGUgPSBlbmNvZGU7XG55ZWFzdC5kZWNvZGUgPSBkZWNvZGU7XG5tb2R1bGUuZXhwb3J0cyA9IHllYXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==