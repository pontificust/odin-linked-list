import { Node } from "./Node.js";

export class LinkedList {
  length = 0;

  _insertFirstNode(node) {
    this.firstNode = node;
    this.lastNode = node;
    this.length += 1;
  }
  
  size() {
    return this.length;
  }

  head() {
    return this.firstNode?.value;
  }

  tail() {
    return this.lastNode?.value;
  }

  at(index) {
    if(index < 0) return undefined;
    let i = 0;
    let currentNode = this.firstNode;
    while (i < index) {
      i += 1;
      currentNode = currentNode?.nextNode;
    }
    return currentNode?.value;
  }

  append(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this._insertFirstNode(node);
      return;
    }
    this.lastNode.nextNode = node;
    this.lastNode = node;
    this.length += 1;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this._insertFirstNode(node);
      return;
    }
    node.nextNode = this.firstNode;
    this.firstNode = node;
    this.length += 1;
  }

  pop() {
    if(this.length === 0) return;

    const headValue = this.head();
    this.firstNode = this.firstNode.nextNode;
    return headValue;
  }
}
