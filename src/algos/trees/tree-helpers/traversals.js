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
  preOrderTraversal(rootNode.left);
  console.log(rootNode.value);
  preOrderTraversal(rootNode.right);
}

export function postOrderTraversal(rootNode) {
  if (rootNode === undefined) {
    return;
  }
  preOrderTraversal(rootNode.left);
  preOrderTraversal(rootNode.right);
  console.log(rootNode.value);
}

export function levelOrderTraversal() {}

export default {
  preOrderTraversal,
  inOrderTraversal,
  postOrderTraversal,
  levelOrderTraversal
};
