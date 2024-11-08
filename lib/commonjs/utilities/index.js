"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStateCallback = exports.removeSpecificProps = exports.isValidColor = exports.isString = exports.isPromise = exports.isObject = exports.isNaN = exports.isInteger = exports.isInputEvent = exports.isFunction = exports.isEmptyChildren = exports.isEmptyArray = exports.getSpecificProps = exports.WINDOW_WIDTH = exports.WINDOW_HEIGHT = void 0;
var _react = _interopRequireWildcard(require("react"));
var React = _react;
var _reactNative = require("react-native");
var _validateColor = require("validate-color");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const WINDOW = _reactNative.Dimensions.get('window');
const WINDOW_WIDTH = exports.WINDOW_WIDTH = WINDOW.width;
const WINDOW_HEIGHT = exports.WINDOW_HEIGHT = WINDOW.height;

//is the value an empty array?
const isEmptyArray = value => Array.isArray(value) && value.length === 0;

// is the given object a Function?
exports.isEmptyArray = isEmptyArray;
const isFunction = obj => typeof obj === 'function';

// is the given object an Object?
exports.isFunction = isFunction;
const isObject = obj => obj !== null && typeof obj === 'object';

// is the given object an integer?
exports.isObject = isObject;
const isInteger = obj => String(Math.floor(Number(obj))) === obj;

// is the given object a string?
exports.isInteger = isInteger;
const isString = obj => Object.prototype.toString.call(obj) === '[object String]';

// is the given object a NaN?
// eslint-disable-next-line no-self-compare
exports.isString = isString;
const isNaN = obj => obj !== obj;

// Does a React component have exactly 0 children?
exports.isNaN = isNaN;
const isEmptyChildren = children => React.Children.count(children) === 0;

// is the given object/value a promise?
exports.isEmptyChildren = isEmptyChildren;
const isPromise = value => isObject(value) && isFunction(value.then);

// is the given object/value a type of synthetic event?
exports.isPromise = isPromise;
const isInputEvent = value => value && isObject(value) && isObject(value.target);

/**
 * useState with callback
 *
 * @param initialState
 */
exports.isInputEvent = isInputEvent;
const useStateCallback = initialState => {
  const [state, setState] = (0, _react.useState)(initialState);
  const cbRef = (0, _react.useRef)(null); // mutable ref to store current callback

  const setStateCallback = (newState, cb) => {
    cbRef.current = cb; // store passed callback to ref
    setState(newState);
  };
  (0, _react.useEffect)(() => {
    // cb.current is `null` on initial render, so we only execute cb on state *updates*
    if (cbRef.current) {
      //@ts-ignore
      cbRef.current(state);
      cbRef.current = null; // reset callback after execution
    }
  }, [state]);
  return [state, setStateCallback];
};
exports.useStateCallback = useStateCallback;
const isValidColor = color => {
  return (0, _validateColor.validateHTMLColorRgb)(color) || (0, _validateColor.validateHTMLColorSpecialName)(color) || (0, _validateColor.validateHTMLColorHex)(color) || (0, _validateColor.validateHTMLColorHsl)(color) || (0, _validateColor.validateHTMLColorName)(color);
};
exports.isValidColor = isValidColor;
const getSpecificProps = (obj, ...keys) =>
//@ts-ignore
keys.reduce((a, c) => ({
  ...a,
  [c]: obj[c]
}), {});
exports.getSpecificProps = getSpecificProps;
const removeSpecificProps = (obj, ...keys) => keys.reduce((a, c) => {
  //@ts-ignore
  delete a[c];
  return a;
}, obj);
exports.removeSpecificProps = removeSpecificProps;
//# sourceMappingURL=index.js.map