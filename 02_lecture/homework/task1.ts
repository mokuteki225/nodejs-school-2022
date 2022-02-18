const runSequentially = async <T>(array: Array<T>, func: Function) => {
  const items = new Array<T>();

  for(let i = 0; i < array.length; i++) {
    const item = await func(array[i], i);

    items.push(item);
  }

  return items;
}
