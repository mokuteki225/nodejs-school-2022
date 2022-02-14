const checkAnagrams = (str1, str2) => {
  if(str1.length !== str2.length) return false;

  const MAX_UNICODE_CODE = 255; 

  const lettersArray = new Array(MAX_UNICODE_CODE).fill(0);

  for(let i = 0; i < str1.length; i++) {
    lettersArray[str1.charCodeAt(i)]++;
    lettersArray[str2.charCodeAt(i)]--;
  } 

  for(let i = 0; i < MAX_UNICODE_CODE; i++) {
    if(lettersArray[i] !== 0) return false;
  }

  return true;
}

console.log(checkAnagrams('asdasd', 'a'));
console.log(checkAnagrams('asddd', 'ddsda'));
console.log(checkAnagrams('aaa', 'aab'));