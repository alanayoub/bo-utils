/**
 *
 * HTML POLL ELEMENT
 *
 * Repeatidly check if an element is available in the DOM.
 * Call the callback function when it becomes available
 * and clear the interval
 *
 * @param {String} selector
 * @param {Number} interval
 * @param {Function} callback
 * @return {undefined}
 *
 */
export default function htmlPollElement(selector, interval, callback) {
  const inter = setInterval(function () {
    if (document.querySelectorAll(selector)[0]) {
      clearInterval(inter);
      callback();
    }
  }, interval);
}
