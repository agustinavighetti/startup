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

export default EventEmitter;