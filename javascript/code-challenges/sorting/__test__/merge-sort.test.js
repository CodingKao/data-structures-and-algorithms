'use strict';

const mergeSort = require('../merge/mergeSort.js');

describe('Merge Sort', () => {
  describe('mergeSort', () => {
    it('should sort an array of numbers in ascending order', () => {
      let arr = [5, 3, 8, 2, 1, 9];
      mergeSort(arr);
      expect(arr).toEqual([1, 2, 3, 5, 8, 9]);
    });

    it('should sort an array with duplicate elements', () => {
      let arr = [4, 2, 5, 2, 1, 4];
      mergeSort(arr);
      expect(arr).toEqual([1, 2, 2, 4, 4, 5]);
    });

    it('should sort an array in descending order', () => {
      let arr = [9, 7, 5, 3, 1];
      mergeSort(arr);
      expect(arr).toEqual([1, 3, 5, 7, 9]);
    });

    it('should sort an array with negative numbers', () => {
      let arr = [-4, 1, -8, 0, 3];
      mergeSort(arr);
      expect(arr).toEqual([-8, -4, 0, 1, 3]);
    });

  });
  
});
