// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
   constructor() {
      this.events = {}
   }

   // Register an event handler
   on(eventName, callback) {
      if (!this.events[eventName]) {
         this.events[eventName] = [];
      } 
      this.events[eventName].push(callback);
   }
 
   // Trigger all callbacks associated
   // with a given eventName
   trigger(eventName) {
      if (this.events[eventName]) {
         this.events[eventName].forEach(callback => { callback() });
      }
   }
 
   // Remove all event handlers associated
   // with the given eventName
   off(eventName) {
      if (this.events[eventName]) {
         delete this.events[eventName];
      }
   }
}

//  const myEv = new Events;
//  myEv.on("click", function () { console.log("hello")});
//  myEv.on("click", function () { console.log("miao")});
//  myEv.on("click", function () { console.log("ciao")});
//  myEv.trigger("click");
//  myEv.on("click", function () { console.log("bau")});
//  myEv.off("click");
//  myEv.trigger("click");

module.exports = Events;