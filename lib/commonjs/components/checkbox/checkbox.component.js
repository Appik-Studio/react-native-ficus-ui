"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = void 0;
var _react = _interopRequireWildcard(require("react"));
var React = _react;
var _reactNative = require("react-native");
var _checkbox = require("./checkbox.style");
var _utilities = require("../../utilities");
var _checkbox2 = require("./checkbox.service");
var _group = require("./group.component");
var _useDefaultProps = require("../../utilities/useDefaultProps");
var _theme = require("../../theme");
var _text = require("../text/text.component");
var _types = require("../../types");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Checkbox = incomingProps => {
  const {
    theme,
    windowWidth
  } = (0, _theme.useTheme)();
  const props = (0, _useDefaultProps.useDefaultProps)('Checkbox', (0, _types.handleResponsiveProps)(incomingProps, theme, windowWidth), {
    defaultChecked: false,
    colorScheme: 'blue',
    bg: 'transparent',
    p: 'none',
    color: 'black',
    borderRadius: 'md',
    isLoading: false,
    isDisabled: false,
    full: false,
    position: 'relative',
    shadowColor: 'gray.800',
    shadow: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    onPress: () => {},
    flexDirection: 'row',
    size: 'sm'
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
    isLoading,
    isDisabled,
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
    shadowColor,
    boxShadow,
    filter,
    full,
    alignSelf,
    icon,
    onChange,
    value,
    colorScheme,
    defaultChecked,
    isChecked: checkedProp,
    onChecked,
    onPress: onPressProp,
    size,
    ...rest
  } = props;
  const [checked, setChecked] = (0, _react.useState)(('checked' in props ? checkedProp : defaultChecked) ?? false);
  const computedStyle = (0, _checkbox.getStyle)(theme, props);
  (0, _react.useEffect)(() => {
    if ('checked' in props) {
      setChecked(props.isChecked ?? false);
    }
  }, [props]);

  /**
   * on press checkbox
   */
  const onPress = event => {
    if (isDisabled) {
      return;
    }
    setChecked(!checked);
    if ((0, _utilities.isFunction)(onChecked)) {
      onChecked(!checked);
    }
    if ((0, _utilities.isFunction)(onPressProp)) {
      onPressProp(event);
    }

    // if onChange prop is a valid function, call it
    if ((0, _utilities.isFunction)(onChange)) {
      onChange(value);
    }
  };
  const iconObj = (0, _checkbox2.getIcon)(theme, props, checked);
  const renderChildren = () => {
    if ((0, _utilities.isFunction)(children)) {
      return children({
        isDisabled: isDisabled ?? false,
        isChecked: checked,
        isLoading
      });
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, prefix, /*#__PURE__*/React.createElement(_reactNative.View, null, /*#__PURE__*/React.createElement(_reactNative.View, {
      style: computedStyle.icon
    }, iconObj)), children && typeof children === 'string' ? /*#__PURE__*/React.createElement(_text.Text, {
      style: computedStyle.text,
      ml: "xs"
    }, children) : children, suffix);
  };
  return /*#__PURE__*/React.createElement(_reactNative.Pressable, _extends({}, rest, {
    style: computedStyle.button,
    onPress: isDisabled || isLoading ? undefined : onPress
  }), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: computedStyle.container
  }, renderChildren()));
};

// Checkbox.defaultProps = {
// defaultChecked: false,
// colorScheme: 'blue',
// bg: 'transparent',
// p: 'none',
// color: 'white',
// borderRadius: 'md',
// isLoading: false,
// isDisabled: false,
// full: false,
// position: 'relative',
// shadowColor: 'gray.800',
// shadow: 0,
// alignItems: 'center',
// justifyContent: 'center',
// alignSelf: 'flex-start',
// onPress: () => {},
// flexDirection: 'row',
// size: 'sm',
// };
exports.Checkbox = Checkbox;
Checkbox.Group = _group.CheckboxGroup;
//# sourceMappingURL=checkbox.component.js.map