# Solution to shortest way (or least transformations number) task between two 4 letter English words

## Task description

This task can be asked during hiring interview, e.g. in Amazon Web Services (AWS).
The task is following:
There is a known set of all English words consisting of 4 letters.
What is minimal transformations number from word "POOL" to word "SEAL"?
A transformation is a one letter change in the word that produces another word.

In this repository you can find my solution of this task.

## Usage

This is a NodeJS console application.

1. `npm install`
2. `npm start`

See console output.

## How change input parameters

Open `src/index.ts` file. Change values for constants `fromWord` and `toWord`, e.g.

```typescript
const fromWord = "ABBA";
const toWord = "ROCK";
```

## Output/results

Output sample:

```
Search time: 88.845ms
Words number: 5526
Minimal transformation number from "POOL" to "SEAL" is 4: POOL->FOOL->FOAL->FEAL->SEAL
```
