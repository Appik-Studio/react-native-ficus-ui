"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Option = void 0;
var React = _interopRequireWildcard(require("react"));
var _box = require("../box/box.component");
var _icon = require("../icon/icon.component");
var _text = require("../text/text.component");
var _button = require("../button/button.component");
var _useDefaultProps = require("../../utilities/useDefaultProps");
var _theme = require("../../theme");
var _types = require("../../types");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Option = incomingProps => {
  const {
    theme,
    windowWidth
  } = (0, _theme.useTheme)();
  const props = (0, _useDefaultProps.useDefaultProps)('Option', (0, _types.handleResponsiveProps)(incomingProps, theme, windowWidth), {
    onSelect: () => {},
    borderRadius: 0,
    bg: 'white',
    px: 'xl',
    py: 'xl',
    colorScheme: 'transparent',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    center: false,
    prefix: /*#__PURE__*/React.createElement(_icon.Icon, {
      name: "checkmark-circle-outline",
      fontFamily: "Ionicons",
      fontSize: "2xl",
      color: "green.600",
      mr: "md",
      alignSelf: "center"
    })
  });
  const {
    children,
    value,
    prefix,
    onPress: onPressProp,
    onSelect,
    selectedValue,
    ...rest
  } = props;
  const isSelected = Array.isArray(selectedValue) ? selectedValue.includes(value) : selectedValue === value;

  /**
   * on press select option
   *
   * @param e
   */
  const onPress = event => {
    if (onSelect) {
      onSelect(value);
    }
    if (onPressProp) {
      onPressProp(event);
    }
  };
  const renderChildren = () => {
    if (typeof children === 'string') {
      return /*#__PURE__*/React.createElement(_text.Text, null, children);
    }
    return children;
  };
  return /*#__PURE__*/React.createElement(_button.Button, _extends({
    onPress: onPress
  }, rest), /*#__PURE__*/React.createElement(_box.Box, {
    flexDirection: "row",
    alignItems: "center"
  }, prefix && /*#__PURE__*/React.createElement(_box.Box, {
    minW: "8%",
    opacity: isSelected ? 1 : 0
  }, prefix), /*#__PURE__*/React.createElement(_box.Box, {
    flex: 1,
    bg: "transparent"
  }, renderChildren())));
};

// Option.defaultProps = {
//   onSelect: () => {},
//   borderRadius: 0,
//   bg: 'white',
//   p: 0,
//   color: 'black',
//   alignItems: 'flex-start',
//   justifyContent: 'flex-start',
//   center: false,
// };
exports.Option = Option;
//# sourceMappingURL=select.option.component.js.map