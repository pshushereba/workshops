/**
 * Gets the highest scoring word from the sentence
 * @param {String} sentence - a string of words
 * @returns {String} the word with the highest word score
 */
export const getHighestScoringWordFromSentence = (sentence) => {
  const wordsFromSentence = sentence.split(" ");

  return determineHighestScoringWord(wordsFromSentence);
};

/**
 * Determines the word with the highest word score
 * @param {Array<String>} words - a list of words
 * @returns {String} the word with the highest score
 */
export const determineHighestScoringWord = (words) => {
  let highestWordScore = 0;
  let highestWord = "";

  words.forEach((word) => {
    const wordScore = calculateWordScore(word);

    if (wordScore > highestWordScore) {
      highestWord = word;
      highestWordScore = wordScore;
    }
  });

  return highestWord;
};

/**
 * Calculates the word score as the sum of each letter's
 * position
 * @param {String} word - the word used to calculate
 * @returns {Number} the sum of each letter's position in the word
 */
export const calculateWordScore = (word) => {
  return word.split("").reduce((wordScore, letter) => {
    return (wordScore += calculateLetterScore(letter));
  }, 0);
};

/**
 * Calculates the letter score based on the position of
 * the letter in the alphabet
 * @param {String} letter - a single character letter
 * @returns {Number} the position score of the letter
 */
export const calculateLetterScore = (letter) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  return alphabet.indexOf(letter.toLowerCase()) + 1;
};
