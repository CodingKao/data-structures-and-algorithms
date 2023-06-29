'use strict';

const HashTable = require('../hash-table/hash-table.js');
const leftJoin = require('./left-join.js');

describe('Hash Table Left Join', () => {
  it('joins tables with values properly', () => {
    let table1 = new HashTable(100);
    let table2 = new HashTable(100);

    // add values to table 1 and table 2
    table1.set('fond', 'enamored');
    table1.set('diligent', 'employed');
    table2.set('fond', 'averse');
    table2.set('not-diligent', 'hard-working');

    expect(leftJoin(table1, table2)).toEqual([
      ['diligent', 'employed', null],
      ['fond', 'enamored', 'averse'],
    ]);
  });
});
