import addValue from "./tree-helpers/add-value";
import {
  preOrderTraversal,
  postOrderTraversal,
  inOrderTraversal,
  levelOrderTraversal
} from "./tree-helpers/traversals";

function Tree(rootNode) {
  this.root = rootNode;
}

Tree.prototype.addValue = addValue;

Tree.prototype.preOrderTraversal = preOrderTraversal;

Tree.prototype.postOrderTraversal = postOrderTraversal;

Tree.prototype.inOrderTraversal = inOrderTraversal;

Tree.prototype.levelOrderTraversal = levelOrderTraversal;

export default Tree;
