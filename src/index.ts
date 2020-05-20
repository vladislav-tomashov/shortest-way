import { getPathBetweenWords } from "./routing-utils";
import allWords from "./words";

const fromWord = "AAAA";
const toWord = "ADBC";

const path = getPathBetweenWords(fromWord, toWord, allWords);

const message = path.length
  ? `Minimal transformation number is ${path.length}: ${[
      fromWord,
      ...path,
    ].join("->")}`
  : `There is no way to get from "${fromWord}" to "${toWord}"`;

console.log(message);
