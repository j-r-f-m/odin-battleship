/**
 * select a parent dom-element create a dom-element and append the created
 * element
 * @param {string} parent select parent using css selector
 * @param {string} typeOfEle type of dom element
 * @param {string} nameClass class name
 * @param {string} txt text contetn
 */
const crtNode = (parent, typeOfEle, nameClass, txt) => {
  // select parent
  const parentEle = document.querySelector(parent);
  // create element
  const crtEle = document.createElement(typeOfEle);
  crtEle.className = nameClass;
  //   crtEle.textContent = txt;
  // append created element
  parentEle.appendChild(crtEle);
  return crtEle;
};

const crtTile = (parent, typeOfEle, nameId, nameClass) => {
  // select parent
  const parentEle = document.querySelector(parent);
  // create element
  const crtEle = document.createElement(typeOfEle);
  crtEle.setAttribute("id", nameId);
  crtEle.className = nameClass;

  // append created element
  parentEle.appendChild(crtEle);
  return crtEle;
};

export { crtNode, crtTile };
