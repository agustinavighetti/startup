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
    }

    class Logger {
        constructor() {

        }

        log(info) {
            console.log('The ' + info + ' event has been emitted');
        }
    }

    let empire = new Movie('Empire of the Sun', '1987', '2h 34m');
    let xmen = new Movie('X-Men', '2006', '1h 44m');
    let logger = new Logger();

    empire.on('play', logger.log);
    empire.play();
    empire.on('pause', logger.log);
    empire.pause();
    xmen.off('play');
    xmen.play();
    xmen.on('play', logger.log);
    xmen.play();
/*
    console.log(xmen);
    console.log(empire.year);
*/
}