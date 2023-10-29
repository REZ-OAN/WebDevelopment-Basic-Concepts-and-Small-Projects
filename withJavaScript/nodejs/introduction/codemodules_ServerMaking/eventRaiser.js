const EventEmitter = require('events');
/**
 * const emitter = new EventEmitter();
    function startEv() {
        console.log('startedOperation');
        // raising event
        setTimeout(() => {
            // creating an event or raising an event
            emitter.emit('nameOfEvent', 'parameters_canbe_object');
        }, 2000);
    }
 */
// if we have to do something like this
// then we can extend the EventEmitter class with our class (inheritence)
class UserClass extends EventEmitter {
    startEv() {
        console.log('startedOperation');
        // raising event
        setTimeout(() => {
            // creating an event or raising an event
            this.emit('nameOfEvent', 'comming_from_eventRaiser');
        }, 2000);
    }
}
// module.exports = startEv;
// now we have to export the class
module.exports = UserClass;
