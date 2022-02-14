const add = (a, b) => a+b;

const wrapper = (func) => {
  const cache = new Map();

  return (...args) => {
    const key = args.join(' ');

    const cachedValue = cache.get(key); 

    if(!cachedValue) {
      const funcResult = func(...args);

      cache.set(key, funcResult);

      return funcResult + ' calculated';
    }

    return cachedValue + ' from cache';
  }
}

const cachedAdd = wrapper(add);

console.log(cachedAdd(2, 2));
console.log(cachedAdd(5, 8));
console.log(cachedAdd(2, 2));

