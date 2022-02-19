class MyEventEmitter {
    handlers: Map<string, Function> = new Map();

    registerHandler(key: string, func: Function) {
        this.handlers.set(key, func);
    }

    emitEvent(key: string) {
        const event = this.handlers.get(key);

        if (!event) {
           throw new Error('Event under this name does not exist');
        }

        return event();
    }
}

const emitter = new MyEventEmitter();

emitter.registerHandler('userUpdated', () => console.log('User was updated'));

emitter.emitEvent('userUpdated');