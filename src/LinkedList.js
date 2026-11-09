import { Node } from "./Node.js";

export class LinkedList {
  length = 0;

  _insertFirstNode(node) {
    this.firstNode = node;
    this.lastNode = node;
    this.length += 1;
  }

  _insertFewNodes(previousNode, values, pos) {
    let j = 0;
    while (j < values.length) {
      if(pos === 0 && j === 0) {
        this.prepend(values[j]);
        pos += 1;
        previousNode = this.firstNode;
      } else if(pos === this.length) {
        this.append(values[j]);
        pos += 1;
        previousNode = this.lastNode;
      } else {
        const node = new Node(values[j], previousNode.nextNode);
        previousNode.nextNode = node;
        previousNode = node;
        this.length += 1;
      }
      j += 1;
    }
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
    if (index < 0) return undefined;
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
    if (this.length === 0) return;

    const headValue = this.head();
    this.firstNode = this.firstNode.nextNode;
    this.length -= 1;
    return headValue;
  }

  contains(value) {
    if (this.length === 0) return false;

    let i = 0;
    let currentNode = this.firstNode;

    while (i < this.length) {
      if (currentNode.value === value) return true;

      currentNode = currentNode.nextNode;
      i += 1;
    }
    return false;
  }

  findIndex(value) {
    if (this.length === 0) return -1;

    let i = 0;
    let currentNode = this.firstNode;

    while (i < this.length) {
      if (currentNode.value === value) return i;

      currentNode = currentNode.nextNode;
      i += 1;
    }
    return -1;
  }

  toString() {
    if (this.length === 0) return "";

    let i = 0;
    let currentNode = this.firstNode;
    let resultStr = "";

    while (i < this.length) {
      if (i === this.length - 1) {
        resultStr += `{ ${currentNode.value} } -> null`;
      } else {
        resultStr += `{ ${currentNode.value} } -> `;
        currentNode = currentNode.nextNode;
      }
      i += 1;
    }
    return resultStr;
  }

  insertAt(index, ...values) {

    if(index > this.length || index < 0) {
      throw new RangeError('The index is out of bounds');
    }
    let i = 0;
    let currentNode = this.firstNode;
    let previousNode = currentNode;

    while (i <= this.length) {
      if (i === index) {
        this._insertFewNodes(previousNode, values, i);
        return;
      } else {
        previousNode = currentNode;
        currentNode = currentNode.nextNode;
        i += 1;
      }
    }
  }
}