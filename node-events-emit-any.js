const EventEmitter = require('events');
/**
 *
 * Extend node.js events to support listening
 * to any event
 *
 */
module.exports = class Emitter extends EventEmitter {
  emit(type, ...args) {
    super.emit(type, ...args);
  }
}
