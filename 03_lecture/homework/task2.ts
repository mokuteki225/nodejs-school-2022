class MyEventEmitter {
    handlers: Map<string, Array<Function>> = new Map();

    registerHandler(key: string, func: Function) {
      const eventHandlers = this.handlers.get(key) ?? [];

      eventHandlers.push(func);

      this.handlers.set(key, eventHandlers);
    }

    emitEvent(key: string) {
      const eventsList = this.handlers.get(key);

      if (!eventsList) {
        return ;
      }

      for (const event of eventsList) {
        event();
      }
    }
}

const emitter = new MyEventEmitter();

emitter.registerHandler('userUpdated', () => console.log('User was updated'));
emitter.registerHandler('userUpdated', () => console.log('Second handler of the same event!'));

emitter.emitEvent('userUpdated');
emitter.emitEvent('unregisteredEvent');