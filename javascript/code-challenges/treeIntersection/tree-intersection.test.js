'use strict';

const { expect } = require('chai');
const HashTable = require('../hash/hash-table');
const treeIntersection = require('../tree-intersection/tree-intersection');

describe('treeIntersection', () => {
  let treeOne, treeTwo;

  beforeEach(() => {
    treeOne = createBinaryTree1();
    treeTwo = createBinaryTree2();
  });

  describe('treeTraversal', () => {
    let firstHashMap, secondHashMap;

    beforeEach(() => {
      firstHashMap = new HashTable();
      secondHashMap = new HashTable();
    });

    it('populates the firstHashMap correctly', () => {
      treeIntersection.treeTraversal(treeOne, firstHashMap);
      expect(firstHashMap.get(5)).to.be.true;
      expect(firstHashMap.get(3)).to.be.true;
      expect(firstHashMap.get(7)).to.be.true;
    });

    it('populates the secondHashMap correctly', () => {
      treeIntersection.treeTraversal(treeTwo, secondHashMap);
      expect(secondHashMap.get(2)).to.be.true;
      expect(secondHashMap.get(5)).to.be.true;
      expect(secondHashMap.get(7)).to.be.true;
    });
  });

  describe('treeIntersection', () => {
    it('returns an array of common values', () => {
      expect(treeIntersection(treeOne, treeTwo)).to.deep.equal([5, 7]);
    });

    it('returns an empty array if no common values exist', () => {
      expect(treeIntersection(treeOne, createBinaryTree3())).to.be.empty;
    });

    it('handles trees with different structures', () => {
      expect(treeIntersection(treeOne, createBinaryTree4())).to.deep.equal([5]);
    });
  });

  // Helper functions omitted for brevity
});
