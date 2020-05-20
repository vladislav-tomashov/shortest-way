const canBeTransformed = (word1: string, word2: string, delta = 1): boolean => {
  let counter = 0;

  const { length: wordLength } = word1;

  if (word2.length !== wordLength) {
    throw new Error(`Words ${word1} and ${word2} have different length`);
  }

  for (let i = 0; i < wordLength; i++) {
    if (word1[i] !== word2[i]) {
      counter++;

      if (counter > delta) {
        return false;
      }
    }
  }

  return counter === delta;
};

export const pathToWord = (
  fromWord: string,
  destinationWord: string,
  allWords: Array<string>,
  excludedWords = new Set<string>(),
  initialPath: Array<string> = []
): Array<string> => {
  const toWords: Array<string> = [];

  excludedWords.add(fromWord);

  for (let i = 0; i < allWords.length; i++) {
    const word = allWords[i];

    if (excludedWords.has(word)) {
      continue;
    }

    if (!canBeTransformed(word, fromWord)) {
      continue;
    }

    if (word === destinationWord) {
      return [...initialPath, word];
    }

    toWords.push(word);
  }

  let shortestPath: Array<string> | undefined = undefined;

  for (let i = 0; i < toWords.length; i++) {
    const toWord = toWords[i];
    const nextPath = [...initialPath, toWord];
    const path = pathToWord(
      toWord,
      destinationWord,
      allWords,
      excludedWords,
      nextPath
    );

    if (path !== nextPath) {
      if (!shortestPath || path.length < shortestPath.length) {
        shortestPath = path;
      }
    }
  }

  return shortestPath || initialPath;
};

export const getPathBetweenWords = (
  fromWord: string,
  toWord: string,
  allWords: Array<string>
): Array<string> => {
  return pathToWord(fromWord, toWord, allWords);
};
