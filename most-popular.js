/**Finds most popular letter in a string, if tie is found returns first determinate value */

function mostPopularLetter(stringToSearch) {
  let objectStoringLetterCount = {};
  let countOfMostPopularLetter = 0;
  let mostPopularLetter;
  
  for (let letter of stringToSearch) {
    
    const count = objectStoringLetterCount[letter] || 0;
    const updatedLetterCount = count + 1;
    objectStoringLetterCount[letter] = updatedLetterCount;
    
    if (updatedLetterCount > countOfMostPopularLetter) {
      countOfMostPopularLetter = updatedLetterCount;
      mostPopularLetter = letter;
    }
  }
  
  return mostPopularLetter;
}
