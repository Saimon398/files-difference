import _ from 'lodash';
import { when } from 'pattern-matching-js';

/**
 * @description Returns difference between two data
 * @param {Object {}} data1 First data
 * @param {Object {}} data2 Second data
 * @returns {Object []} Difference
 */
const buildTree = (data1, data2) => _.sortBy(Object
  .keys({ ...data1, ...data2 }))
  .map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];

    const node = when(true)
      .case(_.isPlainObject(value1) && _.isPlainObject(value2), () => ({
        type: 'nested', key, children: buildTree(value1, value2),
      }))
      .case(!_.has(data1, key), () => ({ type: 'added', key, value: value2 }))
      .case(!_.has(data2, key), () => ({ type: 'deleted', key, value: value1 }))
      .case(value1 === value2, () => ({ type: 'unchanged', key, value: value1 }))
      .case(value1 !== value2, () => ({
        type: 'changed', key, value1, value2,
      }))
      .end();

    return node;
  });

export default buildTree;
