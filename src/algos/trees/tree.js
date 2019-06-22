import addValue from "./tree-helpers/add-value";
import {
  preOrderTraversal,
  postOrderTraversal,
  inOrderTraversal,
  levelOrderTraversal
} from "./tree-helpers/traversals";
import getHeight from "./tree-helpers/get-height";

function Tree(rootNode) {
  this.root = rootNode;
}

Tree.prototype.addValue = addValue;

Tree.prototype.preOrderTraversal = preOrderTraversal;

Tree.prototype.postOrderTraversal = postOrderTraversal;

Tree.prototype.inOrderTraversal = inOrderTraversal;

Tree.prototype.levelOrderTraversal = levelOrderTraversal;

Tree.prototype.getHeight = getHeight;

export default Tree;
