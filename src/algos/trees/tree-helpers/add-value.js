import TreeNode from "../node";
/**
 *
 * @param {*} node
 * @param {TreeNode} value
 * To add value in a tree
 * assuming its a binary search tree
 */
function addValue(node, value) {
  if (node.value < value) {
    if (node.left === undefined) {
      node.left = new TreeNode(value);
    } else {
      addValue(node.left, value);
    }
  } else if (node.value >= value) {
    if (node.right === undefined) {
      node.right = new TreeNode(value);
    } else {
      addValue(node.right, value);
    }
  }
}

export default addValue;
