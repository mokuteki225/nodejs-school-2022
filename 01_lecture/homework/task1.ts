const deepClone = (obj: Object): Object => {
  return JSON.parse(JSON.stringify(obj));
}

console.log(deepClone({ name: 'Josh' }));
console.log(deepClone({ user: { name: 'Josh' }, date: Date.now() }));


