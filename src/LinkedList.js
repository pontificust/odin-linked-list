import { Node } from "./Node.js";

export class LinkedList {
    length = 0;
    nodes = [];

    head() {
        return this.nodes[0]?.value;
    }

    tail() {
        return this.nodes.at(-1)?.value;
    }

    at(index) {
        return this.nodes[index]?.value;
    }

    append(value) {
        this.nodes.push(new Node(value));
    }
};