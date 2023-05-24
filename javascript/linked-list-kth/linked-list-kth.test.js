'use strict';

const LinkedListKth = require('index');

describe('LinkedListKth', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedListKth();
  });

  test('k > length of list: returns null', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    expect(linkedList.kthFromEnd(4)).toBeNull();
  });

  test('k = length of list: returns null', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    expect(linkedList.kthFromEnd(3)).toBeNull();
  });

  test('k is not a positive integer: returns null', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    expect(linkedList.kthFromEnd(-2)).toBeNull();
  });

  test('list size = 1, k = 0: returns value', () => {
    linkedList.append(1);
    expect(linkedList.kthFromEnd(0)).toBe(1);
  });

  test('k in the middle: returns correct value', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);
    expect(linkedList.kthFromEnd(2)).toBe(3);
  });
});
