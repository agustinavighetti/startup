import Movie from './Movie_export';

class Logger {
    constructor() {
    }

    log(info) {
        console.log('The ' + info + ' event has been emitted');
    }
}

export default Logger;