function movies() {

    class  EventEmitter {
        constructor () {
            this.eventsObject = {};
        }

        on (event, callback) {
            if (event == 'play' || event == 'pause' || event == 'resume') {
                this.eventsObject[event] = callback;
            } else {
                console.log('Unknown event.');
            }
        }

        emit (event) {

            if (this.eventsObject[event]) {
                this.eventsObject[event](event);
            } else {
                console.log('This event does not exist');
            }
        }

        off (event) {

            if (this.eventsObject[event]) {
                delete this.eventsObject[event];
            } else {
                console.log('This event does not exist');
            }
        }
    }

    class Movie extends EventEmitter {
        constructor(title, year, duration) {
            super();
            this.title = title;
            this.year = year;
            this.duration = duration;
            Object.assign(this, Social);
            this.castArray = new Array;
        }

        play() {
            super.emit('play');
        }

        pause() {
            super.emit('pause');
        }

        resume() {
            super.emit('resume');
        }

        addCast(cast) {
            console.log('addCast');
            console.log(this.castArray);
            console.log(this.castArray.length);
            this.castArray.push.apply(this.castArray, cast);
            console.log(this.castArray);
            console.log(this.castArray.length);
        }
    }

    class Logger {
        constructor() {

        }

        log(info) {
            console.log('The ' + info + ' event has been emitted');
        }
    }

    let Social = {
        share: function(name) {console.log(`Share ${this.title} with ${name}`);},

        like: function(name) {console.log(`${name} likes ${this.title}`)}
    };

    class Actor {
        constructor(fullName, yearOfBirthday) {
            this.fullName = fullName;
            this.yearOfBirthday = yearOfBirthday;
        }
    }

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
    let james = [new Actor('James McAvoy', 1979)];
    let otherCast = [
    new Actor('Hugh Jackman', 1968),
    new Actor('Michael Fassbender', 1977),
    new Actor('Jennifer Lawrence', 1990)
    ];
    let nicholas = [new Actor('Nicholas Hoult', 1989)];
    let otherOtherCast = [
    new Actor('Patrick Stewart', 1940),
    new Actor('Ian McKellen', 1939)
    ];
    xmen.addCast(james);
    xmen.addCast(otherCast);
    xmen.addCast(otherOtherCast);
    xmen.addCast(nicholas);
}