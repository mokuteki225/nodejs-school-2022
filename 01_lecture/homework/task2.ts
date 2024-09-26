const add = (a: number, b: number): number => a+b;

const wrapper = (func: Function): Function => {
  const cache = new Map<string, number>();

  return (...args: Array<unknown>) => {
    const key = args.join(' ');

    const cachedValue = cache.get(key);

    if(!cachedValue) {
      const funcResult = func(...args);

      cache.set(key, funcResult);

      return funcResult;
    }

    return cachedValue;
  }
}

const cachedAdd = wrapper(add);

console.log(cachedAdd(2, 2));
console.log(cachedAdd(5, 8));
console.log(cachedAdd(2, 2));

