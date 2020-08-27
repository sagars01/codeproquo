/*
Binary Search Tree
*/

// Create a binary search tree for a given array

const tree = [5, 20, 19, 81, 20, 1, 4]

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class Tree {
    constructor() {
        this.root = null;
    }

    add(newValueToAdd) {
        if (this.root === null) {
            this.root = new Node(newValueToAdd);
        } else {
            this._nonRoot(newValueToAdd, this.root);
        }
    }

    _nonRoot(newValueToAdd, root) {
        if (root.value > newValueToAdd) {
            // Left Side Propagation
            if (root.left === null) {
                root.left = new Node(newValueToAdd);
            } else {
                this.nonRoot(newValueToAdd, root.left);
            }
        } else {
            if (root.right === null) {
                root.right = new Node(newValueToAdd);
            } else {
                this.nonRoot(newValueToAdd, root.right);
            }
        }
    }

}

let tree1 = new Tree();
tree1.add(5);
tree1.add(1);
tree1.add(3)
tree1.add(21);
tree1.add(20);

console.log(JSON.stringify(tree1));