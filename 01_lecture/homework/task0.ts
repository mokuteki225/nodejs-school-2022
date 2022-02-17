const sortString = (str: string): string => {
  return str.split('').sort().join();
}

const checkAnagrams = (str1: string, str2: string): boolean => {
  return sortString(str1) === sortString(str2);
}

console.log(checkAnagrams('asdasd', 'a'));
console.log(checkAnagrams('asddd', 'ddsda'));
console.log(checkAnagrams('aaa', 'aab'));
