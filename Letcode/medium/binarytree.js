/*
**Problem: Implement Insertion in a Binary Search Tree (BST)**

You are required to implement a Binary Search Tree (BST) in JavaScript.

Create a `Node` class that contains:

* `data`
* `left`
* `right`

Then create a `BinarySearchTree` class that:

* Initializes with `root = null`
* Implements an `insert(data)` method to insert a new value into the BST
* Uses a helper method (e.g., `insertNode`) to place the new node in the correct position

The tree must follow BST rules:

* Values smaller than a node go to the left subtree
* Values greater than or equal to a node go to the right subtree




*/
// Node
class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

// BST
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
}