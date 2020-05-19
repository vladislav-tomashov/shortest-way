const canBeTransformed = (word1: string, word2: string) => {
  let counter = 0;

  for (let i = 0; i < 4; i++) {
    if (word1[i] !== word2[i]) {
      counter++;

      if (counter > 1) {
        return false;
      }
    }
  }

  return counter === 1;
};

const getToWords = (
  fromWord: string,
  words: Set<string>,
  exculdedWords: Set<string>
): Array<string> => {
  const result: Array<string> = [];

  words.forEach((word) => {
    if (exculdedWords.has(word)) {
      return;
    }

    if (canBeTransformed(word, fromWord)) {
      result.push(word);
    }
  });

  return result;
};

interface IRoutingTableEntry {
  fromWord: string;
  toWord: string;
  distance: number;
}

export const fillWordRoutingTable = (
  word: string,
  words: Set<string>,
  excludedWords = new Set<string>(),
  wordsHistory: Array<string> = []
): Array<IRoutingTableEntry> => {
  const table: Array<IRoutingTableEntry> = [];

  if (excludedWords.has(word)) {
    return table;
  }

  excludedWords.add(word);

  const toWords = getToWords(word, words, excludedWords);

  toWords.forEach((toWord) => {
    table.push({
      fromWord: word,
      toWord,
      distance: 1,
    });
  });

  wordsHistory.forEach((historyWord, index) => {
    toWords.forEach((toWord) => {
      table.push({
        fromWord: historyWord,
        toWord,
        distance: 2 + index,
      });
    });
  });

  toWords.forEach((toWord) => {
    const toWordTable = fillWordRoutingTable(toWord, words, excludedWords, [
      word,
      ...wordsHistory,
    ]);
    table.push(...toWordTable);
  });

  return table;
};

export const getKey = (fromWord: string, toWord: string): string => {
  return `${fromWord}->${toWord}`;
};

export const createIndexFromRoutingTable = (
  routingTable: Array<IRoutingTableEntry>
): { [key: string]: number } => {
  const result: { [key: string]: number } = {};

  routingTable.forEach(({ fromWord, toWord, distance }) => {
    result[getKey(fromWord, toWord)] = distance;
    result[getKey(toWord, fromWord)] = distance;
  });

  return result;
};
