const serialSearch = (arr, value) => {
  let count = 0, max = count;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) count++;
    else max = count > max ? count : max, count = 0;
  }
  
  return Math.max(count, max);
}

console.log(serialSearch([1, 2, 2, 3, 2, 2, 2], 2));
console.log(serialSearch([2, 2, 2, 2], 2));
console.log(serialSearch([1], 1));