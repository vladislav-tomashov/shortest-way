import { getShortestPathBetweenNodes } from "./utils";
import allWords from "./words";

const fromWord = "POOL";
const toWord = "SEAL";

console.time("Search time");
const path = getShortestPathBetweenNodes(fromWord, toWord, allWords);
console.timeEnd("Search time");

const message = path.length
  ? `Minimal transformation number from "${fromWord}" to "${toWord}" is ${
      path.length - 1
    }: ${path.join("->")}`
  : `There is no way to get from "${fromWord}" to "${toWord}"`;

console.log(`Words number: ${allWords.length}`);
console.log(message);
