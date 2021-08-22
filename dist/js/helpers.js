/**
 * Shortcut for document.createElement.
 */
export const ce = document.createElement;

/**
 * Shortcut for document.getElementById.
 */
export const gebi = document.getElementById;

/**
 * Shortcut for creating an element with some common attributes.
 * 
 * tagName: The html tag name to be passed to document.createElement
 * className: (optional) The value for the html class attribute
 * innerText: (optional) The value to set the element's innerText to
 * value: (optional) The value to set the element's "value" attribute to
 * children: (optional) An array of elements to pass to appendChild
 */
export const ce2 = (
    tagName = 'div',
    className,
    innerText,
    children) =>
{
    let el = ce(tagName);
    if (className) el.className = className;
    if (innerText) el.innerText = innerText;
    if (children) children.forEach(child => el.appendChild(child));
}

