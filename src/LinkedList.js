import { Node } from "./Node.js";

export class LinkedList {
    length = 0;

    head() {
        return this.firstNode?.value;
    }

    tail() {
        return this.lastNode?.value;
    }

    at(index) {
        let i = 0;
        let currentNode = this.firstNode;
        while(i !== index) {
            i += 1;
            currentNode = currentNode?.nextNode;
        }
        return currentNode?.value;
    }

    append(value) {
        const node = new Node(value);
        if(this.length === 0) {
            this.firstNode = node;
            this.lastNode = node;
            this.length += 1;
            return;
        }
        this.lastNode.nextNode = node;
        this.lastNode = node;
        this.length += 1;
    }

    prepend(value){
        this.nodes
    }
};