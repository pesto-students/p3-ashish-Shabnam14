
function addNum(a, b) {
  return a + b;
}

const memoizeAdd = memoize(addNum);
function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const cacheKey = args[0];

    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    const result = fn(...args);
    cache.set(cacheKey, result);
    return result;
  };
};
console.log(memoizeAdd(100, 100));
console.log(memoizeAdd(150, 200));
console.log(memoizeAdd(100, 100));
