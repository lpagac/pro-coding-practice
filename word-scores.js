/** Takes array of words and returns an array of each word's scrabble score */

function calculateWordScores(wordsArray) {
  let wordScores = [];
  
	for (let word of wordsArray) {
    
    let score = 0;
  
    //if the word is an empty string, continue the loop and push 0 score to wordsArray.
    if(word.length === 0) {
      wordScores.push(0);
      continue; 
    } 
     
		for (let letter of word) {

      //if letter is an invalid character, set score to null, push to wordScores array and break the loop;
      if(!LETTER_SCORES[letter.toUpperCase()]){
        score = null;
        break;
      }
      
      score += LETTER_SCORES[letter.toUpperCase()];
      
		}
		wordScores.push(score);
	}
	return wordScores;
}

const LETTER_SCORES = {
	A: 1,
	B: 3,
	C: 3,
	D: 2,
	E: 1,
	F: 4,
	G: 2,
	H: 4,
	I: 1,
	J: 8,
	K: 5,
	L: 1,
	M: 3,
	N: 1,
	O: 1,
	P: 3,
	Q: 10,
	R: 1,
	S: 1,
	T: 1,
	U: 1,
	V: 4,
	W: 4,
	X: 8,
	Y: 4,
	Z: 10
};
