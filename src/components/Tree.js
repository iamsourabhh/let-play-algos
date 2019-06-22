import React, { Component } from "react";
import tree from "../algos/trees/tree";
import node from "../algos/trees/node";
import { generateRandomNumber } from "../common";

class Tree extends Component {
  constructor(props) {
    super(props);

    const rootNode = new node(generateRandomNumber());

    this.tree = new tree(rootNode);
  }

  addValue = () => {
    this.tree.addValue(this.tree.root, generateRandomNumber());
  };

  showTree = () => {
    console.log(this.tree);
  };

  preOrderTraversal = () => {
    this.tree.preOrderTraversal(this.tree.root);
  };

  levelOrderTraversal = () => {
    const traversal = this.tree.levelOrderTraversal(this.tree.root);

    console.log(traversal);
  };

  render() {
    return (
      <div>
        <h1>Tree</h1>
        <br />
        <input type="button" value="Add Value" onClick={this.addValue} />
        <br />
        <input type="button" value="Show Tree" onClick={this.showTree} />
        <br />
        <input
          type="button"
          value="Pre Order Traversal"
          onClick={this.preOrderTraversal}
        />
        <br />
        <input
          type="button"
          value="Level Order Traversal"
          onClick={this.levelOrderTraversal}
        />
      </div>
    );
  }
}
export default Tree;
