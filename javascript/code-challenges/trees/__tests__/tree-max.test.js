`use strict`;

const { BinarySearchTree, Tree, Node } = require(`../tree-max/index`);

// Code Challenge 15: Trees Tests
describe(`Binary Tree`, () => {
  let bst;
  let tree;
  beforeEach(() => {
    bst = new BinarySearchTree();
    tree = new Tree();
  });

  // Can successfully instantiate an empty tree
  test(`Can successfully instantiate an empty tree`, () => {
    expect(bst.root).toBeNull();
  });

  // Can successfully instantiate a tree with a single root node
  test(`Can successfully instantiate a tree with a single root node`, () => {
    bst.add(1);
    expect(bst.root.value).toEqual(1);
  });

  // For a Binary Search Tree, can successfully add a left child and right child properly to a noe
  test(`For a Binary Search Tree, can successfully add a left child and right child properly to a node`, () => {
    bst.add(1);
    bst.add(2);
    bst.add(3);
    expect(bst.root.value).toEqual(1);
    expect(bst.root.right.value).toEqual(2);
    expect(bst.root.right.right.value).toEqual(3);
  });

  // Can successfully return a collection from a pre-order traversal
  test(`Can successfully return a collection from a pre-order traversal`, () => {
    bst.add(1);
    bst.add(2);
    bst.add(3);
    expect(bst.preOrder()).toEqual([1, 2, 3]);
  });

  // Can successfully return a collection from an in-order traversal
  test(`Can successfully return a collection from an in-order traversal`, () => {
    bst.add(1);

    expect(bst.inOrder()).toEqual([1]);
  });

  // Can successfully return a collection from a post-order traversal
  test(`Can successfully return a collection from a post-order traversal`, () => {
    bst.add(1);

    expect(bst.postOrder()).toEqual([1]);
  });

  // Returns False for the contains method, given an existing or non-existing node value
  test(`Returns False for the contains method, given an existing or non-existing node value`, () => {
    bst.add(1);
    bst.add(2);
    bst.add(3);
    expect(bst.containsValue(4)).toBeFalsy();
  });

  // Returns True for the contains method, given an existing node value
  test(`Returns True for the contains method, given an existing node value`, () => {
    bst.add(1);
    bst.add(2);
    bst.add(3);
    expect(bst.containsValue(3)).toBeTruthy();
  });

 // Code Challenge 16: Max value test
  test('Return the max value from a binary tree', () => {
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);

    expect(tree.maxValue()).toEqual(15);
  });
});
