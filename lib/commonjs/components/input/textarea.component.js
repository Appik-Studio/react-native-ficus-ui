"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Textarea = void 0;
var _react = _interopRequireWildcard(require("react"));
var React = _react;
var _reactNative = require("react-native");
var _input = require("./input.style");
var _theme = require("../../theme");
var _useDefaultProps = require("../../utilities/useDefaultProps");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Textarea = exports.Textarea = /*#__PURE__*/React.forwardRef((incomingProps, ref) => {
  const [isFocused, setIsFocused] = (0, _react.useState)(false);
  const innerRef = React.useRef(null);
  React.useImperativeHandle(ref, () => innerRef.current);
  const props = (0, _useDefaultProps.useDefaultProps)('Textarea', incomingProps, {
    minH: 100,
    p: 'lg',
    bg: 'white',
    borderColor: 'gray.400',
    borderWidth: 1,
    focusBorderWidth: 2,
    focusBorderStyle: 'solid',
    borderRadius: 'md',
    multiline: true,
    textAlignVertical: 'top',
    color: 'gray.800'
  });
  const {
    h,
    w,
    m,
    minH,
    minW,
    suffix,
    prefix,
    style,
    onBlur,
    onFocus,
    children,
    focusBorderColor,
    focusBorderWidth,
    borderWidth,
    borderRadius,
    ...rest
  } = props;
  const {
    theme
  } = (0, _theme.useTheme)();
  const computedStyle = (0, _input.getStyle)(theme, props, {
    isFocused,
    isTextarea: true
  });

  /**
   * on focus input
   */
  const onFocusInput = e => {
    setIsFocused(true);
    if (onFocus) {
      onFocus(e);
    }
  };

  /**
   * on blur input
   * @param e
   */
  const onBlurInput = e => {
    setIsFocused(false);
    if (onBlur) {
      onBlur(e);
    }
  };
  const onPressComponent = () => {
    if (innerRef !== null && innerRef !== void 0 && innerRef.current) {
      var _innerRef$current;
      innerRef === null || innerRef === void 0 || (_innerRef$current = innerRef.current) === null || _innerRef$current === void 0 || _innerRef$current.focus();
    }
  };
  return /*#__PURE__*/React.createElement(_reactNative.TouchableWithoutFeedback, {
    onPress: onPressComponent
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: computedStyle.container
  }, /*#__PURE__*/React.createElement(_reactNative.TextInput, _extends({
    ref: innerRef,
    onFocus: e => onFocusInput(e),
    onBlur: e => onBlurInput(e),
    style: computedStyle.input
  }, rest))));
});

// Textarea.defaultProps = {
//   minH: 100,
//   p: 'lg',
//   borderColor: 'gray.500',
//   borderWidth: 1,
// };
//# sourceMappingURL=textarea.component.js.map