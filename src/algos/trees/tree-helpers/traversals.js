export function preOrderTraversal(rootNode) {
  if (rootNode === undefined) {
    return;
  }
  console.log(rootNode.value);
  preOrderTraversal(rootNode.left);
  preOrderTraversal(rootNode.right);
}

export function inOrderTraversal(rootNode) {
  if (rootNode === undefined) {
    return;
  }
  inOrderTraversal(rootNode.left);
  console.log(rootNode.value);
  inOrderTraversal(rootNode.right);
}

export function postOrderTraversal(rootNode) {
  if (rootNode === undefined) {
    return;
  }
  postOrderTraversal(rootNode.left);
  postOrderTraversal(rootNode.right);
  console.log(rootNode.value);
}

export function levelOrderTraversal(rootNode) {
  let levelOrderTraversal = "";
  let queue = [];

  if (rootNode.left !== undefined) {
    queue.push(rootNode.left);
  }
  if (rootNode.right !== undefined) {
    queue.push(rootNode.right);
  }

  levelOrderTraversal = `${rootNode.value} `;

  while (queue.length !== 0) {
    const visitedNode = queue.shift();

    levelOrderTraversal += `${visitedNode.value} `;

    if (visitedNode.left !== undefined) {
      queue.push(visitedNode.left);
    }
    if (visitedNode.right !== undefined) {
      queue.push(visitedNode.right);
    }
  }

  return levelOrderTraversal;
}

export default {
  preOrderTraversal,
  inOrderTraversal,
  postOrderTraversal,
  levelOrderTraversal
};
