/**
*
* HTML TOGGLE CLASS
*
* Toggle a class on a DOM node
*
* @param {HTMLElement} element
* @param {String} cssClass
* @return {undefined}
*
*/
export default function htmlToggleClass(element, cssClass) {
  element.classList.contains(cssClass)
    ? element.classList.remove(cssClass)
    : element.classList.add(cssClass);
}
