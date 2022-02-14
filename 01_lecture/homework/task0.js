const sortString = (str) => {
  return str.split('').sort().join();
}

const checkAnagrams = (str1, str2) => {
  return sortString(str1) === sortString(str2);
}

console.log(checkAnagrams('asdasd', 'a'));
console.log(checkAnagrams('asddd', 'ddsda'));
console.log(checkAnagrams('aaa', 'aab'));
