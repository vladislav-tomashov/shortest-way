import {
  fillWordRoutingTable,
  createIndexFromRoutingTable,
  getKey,
} from "./routing-utils";
import { words } from "./words";

const table = fillWordRoutingTable("AAAA", words);
const index = createIndexFromRoutingTable(table);

const key = getKey("AAAA", "ADBC");
const min = index[key];

console.log(table);

console.log(key, min);
