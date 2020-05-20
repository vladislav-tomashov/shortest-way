import { getPathBetweenWords } from "./routing-utils";
import allWords from "./words";

const fromWord = "POOL";
const toWord = "SEAL";

const path = getPathBetweenWords(fromWord, toWord, allWords);

const message = path.length
  ? `Minimal transformation number from "${fromWord}" to "${toWord}" is ${
      path.length
    }: ${[fromWord, ...path].join("->")}`
  : `There is no way to get from "${fromWord}" to "${toWord}"`;

console.log(message);
