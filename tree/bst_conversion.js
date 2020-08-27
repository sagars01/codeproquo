/**
 * Convert the input into a tree
 */

const input = {
    "nodes": [
        { "id": "100", "left": "5", "right": "502", "value": 100 },
        { "id": "502", "left": "204", "right": "55000", "value": 502 },
        { "id": "55000", "left": "1001", "right": null, "value": 55000 },
        { "id": "1001", "left": null, "right": "4500", "value": 1001 },
        { "id": "4500", "left": null, "right": null, "value": 4500 },
        { "id": "204", "left": "203", "right": "205", "value": 204 },
        { "id": "205", "left": null, "right": "207", "value": 205 },
        { "id": "207", "left": "206", "right": "208", "value": 207 },
        { "id": "208", "left": null, "right": null, "value": 208 },
        { "id": "206", "left": null, "right": null, "value": 206 },
        { "id": "203", "left": null, "right": null, "value": 203 },
        { "id": "5", "left": "2", "right": "15", "value": 5 },
        { "id": "15", "left": "5-2", "right": "22", "value": 15 },
        { "id": "22", "left": null, "right": "57", "value": 22 },
        { "id": "57", "left": null, "right": "60", "value": 57 },
        { "id": "60", "left": null, "right": null, "value": 60 },
        { "id": "5-2", "left": null, "right": null, "value": 5 },
        { "id": "2", "left": "1", "right": "3", "value": 2 },
        { "id": "3", "left": null, "right": null, "value": 3 },
        { "id": "1", "left": "-51", "right": "1-2", "value": 1 },
        { "id": "1-2", "left": null, "right": "1-3", "value": 1 },
        { "id": "1-3", "left": null, "right": "1-4", "value": 1 },
        { "id": "1-4", "left": null, "right": "1-5", "value": 1 },
        { "id": "1-5", "left": null, "right": null, "value": 1 },
        { "id": "-51", "left": "-403", "right": null, "value": -51 },
        { "id": "-403", "left": null, "right": null, "value": -403 }
    ],
    "root": "100"
}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    addNode(value) {
        if (this.root === null) {
            this.root = new Node(value);
        } else {
            this.addHelper(this.root, value);
        }
    }

    addHelper(tree, value) {
        if (value < tree.value) {
            if (tree.left === null) {
                tree.left = new Node(value);
            } else {
                this.addHelper(tree.left, value)
            }
        } else {
            if (tree.right === null) {
                tree.right = new Node(value);
            } else {
                this.addHelper(tree.right, value);
            }
        }

    }

    show() {
        console.log((JSON.stringify(this.root)));
    }

    findNearest(target) {
        let near = this.nearHelper(this.root, target, this.root.value);
        return near;
    }

    // To Do - Implement nearHelper function
}

const t = new BST();
t.addNode(input.root);
input.nodes.forEach(element => {
    t.addNode(element.value);
});
console.log(t.findNearest(100))




