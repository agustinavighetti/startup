import Actor from './Actor_export';
import EventEmitter from './EventEmitter_export';
import Logger from './Logger_export';
import Movie from './Movie_export';
import Social from './Social_export';

let empire = new Movie('Empire of the Sun', '1987', '2h 34m');
let xmen = new Movie('X-Men', '2006', '1h 44m');
let logger = new Logger();

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
let show = function() {
    let cast = '';
    for (let i = 0; i < xmen.castArray.length; i++) {
        cast = cast + xmen.castArray[i].fullName + ', ';
    }
    if (xmen.castArray.length > 1) {
        return `The cast of ${xmen.title} is ${cast}and there are ${xmen.castArray.length} actors.`;
    } else {
        return `The cast of ${xmen.title} is ${cast}and there is ${xmen.castArray.length} actor.`
    }
};
let james = new Actor('James McAvoy', 1979);
let otherCast = [
new Actor('Hugh Jackman', 1968),
new Actor('Michael Fassbender', 1977),
new Actor('Jennifer Lawrence', 1990)
];
let nicholas = new Actor('Nicholas Hoult', 1989);
let otherOtherCast = [
new Actor('Patrick Stewart', 1940),
new Actor('Ian McKellen', 1939)
];
xmen.addCast(james);
console.log(show());
xmen.addCast(otherCast);
console.log(show());
xmen.addCast(otherOtherCast);
console.log(show());
xmen.addCast(nicholas);
console.log(show());