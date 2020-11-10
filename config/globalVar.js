const EventEmitter = require("events");
const events = new EventEmitter();

module.exports = {
  $on: events.on,
  $emit: events.emit,
  $off: events.off,
  FPSHeaderType: {
    GLOBAL_CONFIG: '"GLOBAL_CONFIG"',
  },
};
