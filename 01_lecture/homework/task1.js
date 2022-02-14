const deepClone = (obj) => {
  return Object.assign({}, obj);
}

console.log(deepClone({ name: 'Josh' }));
console.log(deepClone({ user: { name: 'Josh' }, date: Date.now() }));