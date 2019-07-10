'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let result = collectionA.filter((item) => objectB.value.includes(item.key));
  return result.map((item) => item.key);
}
