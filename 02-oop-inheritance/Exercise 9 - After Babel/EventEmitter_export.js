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
