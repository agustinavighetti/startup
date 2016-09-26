function movies() {

    class Movie {
        constructor(title, year, duration) {
            this.title = title;
            this.year = year;
            this.duration = duration;
        }

        play() {
            return 'play';
        }

        pause() {
            return 'pause';
        }

        resume() {
            return 'resume';
        }
    }

    class EventEmitter {
        on() {
            
        }

        emit() {

        }

        off() {

        }
    }

    let empire = new Movie('Empire of the Sun', '1987', '2h 34m');
    let xmen = new Movie('X-Men', '2006', '1h 44m');

    console.log(xmen);
    console.log(empire.year);

}