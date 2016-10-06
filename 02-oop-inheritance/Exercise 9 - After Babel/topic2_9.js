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
