"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;
var _react = _interopRequireWildcard(require("react"));
var React = _react;
var _color = _interopRequireDefault(require("color"));
var _reactNative = require("react-native");
var _input = require("./input.style");
var _theme = require("../../theme");
var _theme2 = require("../../theme/theme.service");
var _useDefaultProps = require("../../utilities/useDefaultProps");
var _types = require("../../types");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Input = exports.Input = /*#__PURE__*/React.forwardRef((incomingProps, ref) => {
  const [isFocused, setIsFocused] = (0, _react.useState)(false);
  const innerRef = React.useRef(null);
  React.useImperativeHandle(ref, () => innerRef.current);
  const {
    theme,
    windowWidth
  } = (0, _theme.useTheme)();
  const props = (0, _useDefaultProps.useDefaultProps)('Input', (0, _types.handleResponsiveProps)(incomingProps, theme, windowWidth), {
    px: 'lg',
    py: 'lg',
    fontSize: 'md',
    bg: 'white',
    borderWidth: 1,
    focusBorderWidth: 2,
    focusBorderStyle: 'solid',
    borderColor: 'gray.400',
    borderRadius: 'md',
    isLoading: false,
    color: 'gray.800',
    shadow: 0,
    shadowColor: 'gray.500',
    loaderSize: '3xl',
    loaderColor: 'blue.700'
  });
  const {
    h,
    w,
    m,
    mt,
    mr,
    mb,
    ml,
    ms,
    p,
    pr,
    pt,
    pb,
    pl,
    bg,
    minH,
    minW,
    color: colorProp,
    suffix,
    prefix,
    style,
    onBlur,
    isLoading,
    onFocus,
    borderRadius,
    borderTopRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderLeftRadius,
    borderRightRadius,
    borderBottomRadius,
    children,
    loaderSize,
    fontSize,
    borderColor,
    borderBottomColor,
    borderLeftColor,
    borderTopColor,
    borderRightColor,
    borderWidth,
    borderLeftWidth,
    borderRightWidth,
    borderBottomWidth,
    borderTopWidth,
    borderEndWidth,
    loaderColor,
    focusBorderColor,
    focusBorderWidth,
    shadow,
    flex,
    shadowColor,
    zIndex,
    opacity,
    placeholderTextColor,
    selectionColor,
    ...rest
  } = props;
  const computedStyle = (0, _input.getStyle)(theme, props, {
    isFocused
  });
  const placeholderColor = placeholderTextColor ? typeof placeholderTextColor === 'string' ? (0, _color.default)((0, _theme2.getThemeColor)(theme.colors, placeholderTextColor)).alpha(0.4).rgb().string() : placeholderTextColor : (0, _color.default)((0, _theme2.getThemeColor)(theme.colors, colorProp)).alpha(0.4).rgb().string();

  /**
   * on focus input
   *
   * @param e
   */
  const onFocusInput = e => {
    setIsFocused(true);
    if (onFocus) {
      onFocus(e);
    }
  };

  /**
   * on blur input
   *
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
    style: computedStyle.marginContainer
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: computedStyle.container
  }, prefix && /*#__PURE__*/React.createElement(_reactNative.View, {
    style: computedStyle.prefix
  }, prefix), /*#__PURE__*/React.createElement(_reactNative.TextInput, _extends({
    ref: innerRef,
    onFocus: onFocusInput,
    onBlur: onBlurInput,
    selectionColor: typeof props.selectionColor === 'string' ? (0, _theme2.getThemeColor)(theme.colors, props.selectionColor) : props.selectionColor,
    placeholderTextColor: placeholderColor
  }, rest, {
    style: computedStyle.input
  })), !isLoading && suffix && /*#__PURE__*/React.createElement(_reactNative.View, {
    style: computedStyle.suffix
  }, suffix), isLoading && /*#__PURE__*/React.createElement(_reactNative.View, {
    style: computedStyle.suffix
  }, /*#__PURE__*/React.createElement(_reactNative.ActivityIndicator, {
    size: (0, _theme2.getThemeProperty)(theme.fontSize, loaderSize),
    color: (0, _theme2.getThemeColor)(theme.colors, loaderColor)
  })))));
});

// Input.defaultProps = {
//   px: 'xl',
//   py: 'lg',
//   fontSize: 'lg',
//   borderWidth: 0,
//   bg: 'white',
//   borderColor: 'gray.400',
//   borderRadius: 'md',
//   loading: false,
//   color: 'gray.800',
//   shadow: 0,
//   shadowColor: 'gray.500',
//   loaderSize: '3xl',
//   loaderColor: 'blue.700',
// };
//# sourceMappingURL=input.component.js.map