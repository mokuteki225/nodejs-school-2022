const array = [1, 2, 3, 6, 7, 9];

const arrayMutateRemove = <T>(array: Array<T>, func: Function) => {
  const removedItems = new Array<T>();

  for(let i = 0; i < array.length; i++) {
    const isRemoved = func(array[i]);

    if (isRemoved) {
      removedItems.push(array[i]);
    }
  }

  return removedItems;
}

const removedElements = arrayMutateRemove(array, (item) => item % 2 === 0);

console.log(removedElements);