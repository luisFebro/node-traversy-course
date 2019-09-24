const EventEmitter = require('events');

//Create class
class MyEmitter extends EventEmitter { }

// Init Obj
const myEmitter = new MyEmitter();

//Event Listener
myEmitter.on('event', () => console.log('Event fired!'));

// Init Event (run whatever is in the event listener)
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
/*
Event fired!
Event fired!
Event fired!
 */