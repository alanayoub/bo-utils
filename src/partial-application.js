/**
 *
 * partialApplication
 *
 * @param {Function} fn
 * @param {Arguments} cache
 * @return {Function}
 *
 */
export default (fn, ...cache) => (...args) => {
  const all = cache.concat(args);
  return all.length >= fn.length ? fn(...all) : pApply(fn, ...all);
};
