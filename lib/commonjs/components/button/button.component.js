"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _button = require("./button.style");
var _theme = require("../../theme");
var _theme2 = require("../../theme/theme.service");
var _button2 = require("./button.service");
var _text = require("../text/text.component");
var _types = require("../../types");
var _utilities = require("../../utilities");
var _useDefaultProps = require("../../utilities/useDefaultProps");
var _icon = require("../icon/icon.component");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Button = incomingProps => {
  var _getThemeProperty, _computedStyle$text;
  const {
    theme,
    windowWidth
  } = (0, _theme.useTheme)();
  const props = (0, _useDefaultProps.useDefaultProps)('Button', (0, _types.handleResponsiveProps)(incomingProps, theme, windowWidth), {
    colorScheme: 'gray',
    size: 'md',
    borderRadius: 'lg',
    isLoading: false,
    isDisabled: false,
    full: false,
    position: 'relative',
    shadowColor: 'gray.800',
    shadow: 0,
    rippleColor: 'white',
    ripple: true,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    onPress: () => {},
    flexDirection: 'row',
    fontWeight: 'bold',
    variant: 'solid'
  });
  const {
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
    h,
    w,
    bg,
    minW,
    minH,
    suffix,
    style,
    fontSize,
    fontWeight,
    prefix,
    borderRadius,
    borderTopRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderLeftRadius,
    borderRightRadius,
    borderBottomRadius,
    color: colorProp,
    colorScheme,
    isLoading,
    isDisabled,
    loaderColor,
    loaderSize,
    children,
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
    shadow,
    rippleColor,
    shadowColor,
    onPress,
    full,
    ripple,
    alignSelf,
    size,
    isRound,
    ...rest
  } = props;
  const computedStyle = (0, _button.getStyle)(theme, props);
  const underlayColor = (0, _button2.getUnderlayColor)(theme, props);
  const calculatedRippleColor = (0, _button2.getRippleColor)(theme, props);

  /**
   * renders children based on type
   */
  const renderChildren = () => {
    if (typeof children === 'string') {
      return /*#__PURE__*/React.createElement(_text.Text, _extends({}, (0, _utilities.getSpecificProps)(props, ..._types.textProps), {
        style: computedStyle.text
      }, props.variant === 'link' ? {
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        textDecorationColor: computedStyle.text.color
      } : {}), children);
    }

    // Check if children is an Icon component
    if ( /*#__PURE__*/React.isValidElement(children) && children.type === _icon.Icon) {
      // Clone the Icon element and add the style prop to it
      return /*#__PURE__*/React.cloneElement(children, {
        color: computedStyle.text.color,
        fontSize: computedStyle.text.fontSize
      });
    }
    return children;
  };
  return /*#__PURE__*/React.createElement(_reactNative.Pressable, _extends({}, rest, {
    onPress: isDisabled || isLoading ? undefined : onPress,
    style: ({
      pressed
    }) => [computedStyle.button, pressed && !isDisabled && !isLoading && {
      backgroundColor: underlayColor
    }],
    android_ripple: !ripple ? {
      color: calculatedRippleColor
    } : null
  }), isLoading ? /*#__PURE__*/React.createElement(_reactNative.View, {
    style: computedStyle.container
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: computedStyle.loadingContainer
  }, /*#__PURE__*/React.createElement(_reactNative.ActivityIndicator, {
    size: loaderSize || ((_getThemeProperty = (0, _theme2.getThemeProperty)(theme.button, size)) === null || _getThemeProperty === void 0 ? void 0 : _getThemeProperty.fontSize) + (_reactNative.Platform.OS === 'ios' ? 3 : 5),
    color: loaderColor ? (0, _theme2.getThemeColor)(theme.colors, loaderColor) : computedStyle === null || computedStyle === void 0 || (_computedStyle$text = computedStyle.text) === null || _computedStyle$text === void 0 ? void 0 : _computedStyle$text.color
  }))) : /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
    style: computedStyle.container
  }, /*#__PURE__*/React.createElement(React.Fragment, null, prefix, renderChildren(), suffix)));
};
exports.Button = Button;
//# sourceMappingURL=button.component.js.map