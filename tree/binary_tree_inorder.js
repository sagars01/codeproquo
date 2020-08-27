/**
 * Traverse a given tree in INORDER traversal
 */

const tree = {
    value: 1,
    left: {
        value: 2,
        left: null,
        right: null,
    },
    right: {
        value: 3,
        right: null,
        left: null,
    }
}

function inorderTraversal(tree, traversedArray) {
    if (!traversedArray) {
        traversedArray = [];
    }
    if (tree === null) {
        return traversedArray;
    } else {

        
        inorderTraversal(tree.left, traversedArray);
        traversedArray.push(tree.left.value);
        
        inorderTraversal(tree.right, traversedArray);
        traversedArray.push(tree.right.value);
    }
}

console.log(inorderTraversal(tree));