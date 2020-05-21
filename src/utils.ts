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

const getPath = (
  destinationNode: string,
  visitedNodes: Map<string, string | undefined>,
  includeDestinationNode = true
): Array<string> => {
  const path: Array<string> = [];

  for (
    let item: string | undefined = destinationNode;
    item !== undefined;
    item = visitedNodes.get(item)
  ) {
    path.push(item);
  }

  if (includeDestinationNode) {
    return path.reverse();
  }

  const [, ...result] = path;

  return result.reverse();
};

interface INodeQueueItem {
  parent: string | undefined;
  node: string;
}

export const getShortestPathBetweenNodes = (
  startNode: string,
  destinationNode: string,
  searchInNodes: Array<string>
): Array<string> => {
  // key - node, value - parent
  const visitedNodes = new Map<string, string | undefined>();
  const excludedNodes = new Set<string>();
  const nodesQueue: Array<INodeQueueItem> = [
    { parent: undefined, node: startNode },
  ];
  let found = false;

  while (!found && nodesQueue.length) {
    const { parent, node } = nodesQueue.shift() as INodeQueueItem;

    if (visitedNodes.has(node)) {
      continue;
    }

    visitedNodes.set(node, parent);
    excludedNodes.add(node);

    for (let i = 0; i < searchInNodes.length; i++) {
      const tryNode = searchInNodes[i];

      if (excludedNodes.has(tryNode)) {
        continue;
      }

      if (!canBeTransformed(tryNode, node)) {
        continue;
      }

      if (tryNode === destinationNode) {
        visitedNodes.set(tryNode, node);
        found = true;

        break;
      }

      excludedNodes.add(tryNode);

      nodesQueue.push({
        node: tryNode,
        parent: node,
      });
    }
  }

  return found ? getPath(destinationNode, visitedNodes) : [];
};
