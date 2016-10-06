(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actor = function Actor(fullName, yearOfBirthday) {
    _classCallCheck(this, Actor);

    this.fullName = fullName;
    this.yearOfBirthday = yearOfBirthday;
};

exports.default = Actor;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
    function EventEmitter() {
        _classCallCheck(this, EventEmitter);

        this.eventsObject = {};
    }

    _createClass(EventEmitter, [{
        key: 'on',
        value: function on(event, callback) {
            if (event == 'play' || event == 'pause' || event == 'resume') {
                this.eventsObject[event] = callback;
            } else {
                console.log('Unknown event.');
            }
        }
    }, {
        key: 'emit',
        value: function emit(event) {

            if (this.eventsObject[event]) {
                this.eventsObject[event](event);
            } else {
                console.log('This event does not exist');
            }
        }
    }, {
        key: 'off',
        value: function off(event) {

            if (this.eventsObject[event]) {
                delete this.eventsObject[event];
            } else {
                console.log('This event does not exist');
            }
        }
    }]);

    return EventEmitter;
}();

exports.default = EventEmitter;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Movie_export = require('./Movie_export');

var _Movie_export2 = _interopRequireDefault(_Movie_export);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
    function Logger() {
        _classCallCheck(this, Logger);
    }

    _createClass(Logger, [{
        key: 'log',
        value: function log(info) {
            console.log('The ' + info + ' event has been emitted');
        }
    }]);

    return Logger;
}();

exports.default = Logger;

},{"./Movie_export":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _EventEmitter_export = require('./EventEmitter_export');

var _EventEmitter_export2 = _interopRequireDefault(_EventEmitter_export);

var _Social_export = require('./Social_export');

var _Social_export2 = _interopRequireDefault(_Social_export);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Movie = function (_EventEmitter) {
    _inherits(Movie, _EventEmitter);

    function Movie(title, year, duration) {
        _classCallCheck(this, Movie);

        var _this = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this));

        _this.title = title;
        _this.year = year;
        _this.duration = duration;
        Object.assign(_this, _Social_export2.default);
        _this.castArray = new Array();
        return _this;
    }

    _createClass(Movie, [{
        key: 'play',
        value: function play() {
            _get(Movie.prototype.__proto__ || Object.getPrototypeOf(Movie.prototype), 'emit', this).call(this, 'play');
        }
    }, {
        key: 'pause',
        value: function pause() {
            _get(Movie.prototype.__proto__ || Object.getPrototypeOf(Movie.prototype), 'emit', this).call(this, 'pause');
        }
    }, {
        key: 'resume',
        value: function resume() {
            _get(Movie.prototype.__proto__ || Object.getPrototypeOf(Movie.prototype), 'emit', this).call(this, 'resume');
        }
    }, {
        key: 'addCast',
        value: function addCast(cast) {
            if (cast.length > 0) {
                this.castArray.push.apply(this.castArray, cast);
            } else {
                this.castArray.push(cast);
            };
        }
    }]);

    return Movie;
}(_EventEmitter_export2.default);

exports.default = Movie;

},{"./EventEmitter_export":2,"./Social_export":5}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Social = {
    share: function share(name) {
        console.log("Share " + this.title + " with " + name);
    },

    like: function like(name) {
        console.log(name + " likes " + this.title);
    }
};

exports.default = Social;

},{}],6:[function(require,module,exports){
'use strict';

var _Actor_export = require('./Actor_export');

var _Actor_export2 = _interopRequireDefault(_Actor_export);

var _EventEmitter_export = require('./EventEmitter_export');

var _EventEmitter_export2 = _interopRequireDefault(_EventEmitter_export);

var _Logger_export = require('./Logger_export');

var _Logger_export2 = _interopRequireDefault(_Logger_export);

var _Movie_export = require('./Movie_export');

var _Movie_export2 = _interopRequireDefault(_Movie_export);

var _Social_export = require('./Social_export');

var _Social_export2 = _interopRequireDefault(_Social_export);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.addEventListener('load', movies, false);
function movies() {
    var empire = new _Movie_export2.default('Empire of the Sun', '1987', '2h 34m');
    var xmen = new _Movie_export2.default('X-Men', '2006', '1h 44m');
    var logger = new _Logger_export2.default();

    /* EXAMPLES FOR EXERCISE 2
    console.log(xmen);
    console.log(empire.year);
    */
    /* EXAMPLES FOR EXERCISE 5
    empire.on('play', logger.log);
    empire.play();
    empire.on('pause', logger.log);
    empire.pause();
    xmen.off('play');
    xmen.play();
    xmen.on('play', logger.log);
    xmen.play();
    */
    /* EXAMPLES FOR EXERCISE 6
    empire.share('Santiago');
    xmen.like('Aguss Vighetti');
    */
    // EXAMPLES FOR EXERCISE 8
    var show = function show() {
        var cast = '';
        for (var i = 0; i < xmen.castArray.length; i++) {
            cast = cast + xmen.castArray[i].fullName + ', ';
        }
        if (xmen.castArray.length > 1) {
            return 'The cast of ' + xmen.title + ' is ' + cast + 'and there are ' + xmen.castArray.length + ' actors.';
        } else {
            return 'The cast of ' + xmen.title + ' is ' + cast + 'and there is ' + xmen.castArray.length + ' actor.';
        }
    };
    var james = new _Actor_export2.default('James McAvoy', 1979);
    var otherCast = [new _Actor_export2.default('Hugh Jackman', 1968), new _Actor_export2.default('Michael Fassbender', 1977), new _Actor_export2.default('Jennifer Lawrence', 1990)];
    var nicholas = new _Actor_export2.default('Nicholas Hoult', 1989);
    var otherOtherCast = [new _Actor_export2.default('Patrick Stewart', 1940), new _Actor_export2.default('Ian McKellen', 1939)];
    xmen.addCast(james);
    console.log(show());
    xmen.addCast(otherCast);
    console.log(show());
    xmen.addCast(otherOtherCast);
    console.log(show());
    xmen.addCast(nicholas);
    console.log(show());
}

},{"./Actor_export":1,"./EventEmitter_export":2,"./Logger_export":3,"./Movie_export":4,"./Social_export":5}]},{},[6]);
