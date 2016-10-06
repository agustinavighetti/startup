import EventEmitter from './EventEmitter_export'
import Social from './Social_export'

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
        if (cast.length > 0) {
            this.castArray.push.apply(this.castArray, cast);
        } else {
            this.castArray.push(cast);
        };
    }
}

export default Movie;