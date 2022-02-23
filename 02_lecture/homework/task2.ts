const array = [1, 2, 3, 6, 7, 9];

type Predicate<T> = (item: T) => boolean;

const arrayMutateRemove = <T>(array: Array<T>, func: Predicate<T>) => {
  const removedItems = new Array<T>();

  for(let i = 0; i < array.length; i++) {
    const isRemoved = func(array[i]);

    if (isRemoved) {
      removedItems.push(array[i]);
      array.splice(i, 1);
      i--;
    }
  }

  return removedItems;
}

const removedElements = arrayMutateRemove<number>(array, (item) => item % 2 === 0);

console.log(removedElements);