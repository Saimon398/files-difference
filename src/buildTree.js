/**
 * @description Return difference
 * @param {Object {}} data1 First data
 * @param {Object {}} data2 Second data
 * @returns {Object []} Difference
 */
const buildTree = (data1, data2) => Object
  .keys({ ...data1, ...data2 })
  .sort()
  .map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];

    if (typeof value1 === 'object' && typeof value2 === 'object') {
      return { type: 'nested', key, children: buildTree(value1, value2) };
    }
    if (!Object.hasOwn(data1, key)) {
      return { type: 'added', key, value: value2 };
    }
    if (!Object.hasOwn(data2, key)) {
      return { type: 'deleted', key, value: value1 };
    }
    if (value1 === value2) {
      return { type: 'unchanged', key, value: value1 };
    }
    return {
      type: 'changed', key, value1, value2,
    };
  });
export default buildTree;
