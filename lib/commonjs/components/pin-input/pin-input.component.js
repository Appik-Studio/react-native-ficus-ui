"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PinInput = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _pinInput = require("./pin-input.style");
var _theme = require("../../theme/theme.hook");
var _useDefaultProps = require("../../utilities/useDefaultProps");
var _types = require("../../types");
var _reactNativeConfirmationCodeField = require("react-native-confirmation-code-field");
var _center = require("../center/center.component");
var _text = require("../text/text.component");
var _theme2 = require("../../theme/theme.service");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PinInput = exports.PinInput = /*#__PURE__*/React.forwardRef((incomingProps, ref) => {
  const {
    theme,
    windowWidth
  } = (0, _theme.useTheme)();
  const props = (0, _useDefaultProps.useDefaultProps)('PinInput', (0, _types.handleResponsiveProps)(incomingProps, theme, windowWidth), {
    bg: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadow: 'none',
    position: 'relative',
    bgMode: 'cover',
    pointerEvents: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'gray.300',
    borderRadius: 'md',
    focusBorderColor: 'blue.500',
    focusBorderWidth: 2
  });
  const {
    bg,
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
    minH,
    minW,
    maxW,
    maxH,
    position,
    style,
    flexDirection,
    direction,
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
    bgImg,
    bgMode,
    alignItems,
    align,
    justifyContent,
    justify,
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
    borderStyle,
    flexWrap,
    wrap,
    flexGrow,
    grow,
    flexBasis,
    basis,
    flexShrink,
    shrink,
    shadow,
    shadowColor,
    opacity,
    overflow,
    top,
    left,
    right,
    bottom,
    zIndex,
    colorScheme,
    focusBorderColor,
    focusBorderWidth,
    focusBorderStyle,
    mask,
    placeholder,
    ...rest
  } = props;
  const computedStyle = (0, _pinInput.getStyle)(theme, props);
  const renderCell = ({
    index,
    symbol,
    isFocused
  }) => {
    let textChild = null;
    if (symbol && mask) {
      textChild = /*#__PURE__*/React.createElement(_reactNativeConfirmationCodeField.MaskSymbol, {
        maskSymbol: placeholder || '•',
        isLastFilledCell: (0, _reactNativeConfirmationCodeField.isLastFilledCell)({
          index,
          value: props.value
        })
      }, symbol);
    } else if (symbol && !mask) {
      textChild = symbol;
    } else if (isFocused) {
      textChild = /*#__PURE__*/React.createElement(_reactNativeConfirmationCodeField.Cursor, null);
    } else {
      textChild = '';
    }
    return /*#__PURE__*/React.createElement(_reactNative.View, {
      key: index
    }, /*#__PURE__*/React.createElement(_center.Center, {
      w: 50,
      h: 50,
      borderWidth: isFocused ? focusBorderWidth : borderWidth,
      borderColor: isFocused ? props.colorScheme ? (0, _theme2.getThemeColor)(theme.colors, `${props.colorScheme}.500`) : (0, _theme2.getThemeColor)(theme.colors, focusBorderColor) : borderColor,
      borderStyle: isFocused ? focusBorderStyle : borderStyle,
      style: computedStyle.pininputItem
    }, /*#__PURE__*/React.createElement(_text.Text, {
      color: "black",
      fontWeight: "bold"
    }, textChild)));
  };
  return /*#__PURE__*/React.createElement(_reactNativeConfirmationCodeField.CodeField, _extends({
    ref: ref,
    renderCell: renderCell,
    rootStyle: computedStyle.pininput
  }, rest));
});
//# sourceMappingURL=pin-input.component.js.map