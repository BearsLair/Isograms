//toLowerCase
//create set with str
//compare set to str with strict equals

function isIsogram(str) {
  console.log(str);
  str.toLowerCase();
  const uniqueChars = new Set(str);
  uniqueString = [...uniqueChars].join("");
  if (str === uniqueString) {
    return true;
  } else {
    return false;
  }
}

console.log(isIsogram("Dermatoglyphics")); //true
console.log(isIsogram("isogram")); //true
console.log(isIsogram("aba")); //false
console.log(isIsogram("moOse")); //false
console.log(isIsogram("isIsogram")); //false
console.log(isIsogram("")); //true
