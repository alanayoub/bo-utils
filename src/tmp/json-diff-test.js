'use strict';

// Libs
import changesets from 'diff-json';

// Binary Overdose
import jsonDiff   from './json-diff.js';

const data1 = {
  1234: {
    id: 1234,
    name: 'Bitcoin',
    price: 9000,
    links: ['foo', 'bar', 'baz'],
    removeMe: 'deleted?',
    deep: [
      {id: 1, deep1: 1},
      {id: 2, deep2: 2},
      {id: 5, deep5: 5},
    ]
  }
};

const data2 = {
  1234: {
    id: 1234,
    name: 'Bitcoin',
    price: 10100,
    links: ['foo', 'bar', 'baz', 'qux'],
    addMe: 'added?',
    deep: [
      {id: 1, deep1: 1},
      {id: 2, deep2: 4},
      {id: 3, deep3: 3},
    ]
  }
};

const diff = jsonDiff(data1, data2);

// Check data integrety
{

  let newData;
  let oldData;
  newData = JSON.parse(JSON.stringify(data1));
  newData = JSON.stringify(changesets.applyChanges(newData, diff));
  oldData = JSON.stringify(data1);
  if (oldData === newData) {
    console.error(`json-diff.js: diff didn't work`);
  }
  else {
    console.log(`json-diff.js: diff OK!`);
  }

}
