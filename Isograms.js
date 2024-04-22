//toLowerCase
//create set with str
//compare set to str with strict equals

function isIsogram(str) {
  const string = str.toLowerCase();
  const uniqueChars = new Set(string);
  uniqueString = [...uniqueChars].join("");
  if (string === uniqueString) {
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
