"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _icon = require("./icon.style");
var _icon2 = require("./icon.service");
var _theme = require("../../theme");
var _theme2 = require("../../theme/theme.service");
var _useDefaultProps = require("../../utilities/useDefaultProps");
var _types = require("../../types");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Icon = incomingProps => {
  const {
    theme,
    windowWidth
  } = (0, _theme.useTheme)();
  const props = (0, _useDefaultProps.useDefaultProps)('Icon', (0, _types.handleResponsiveProps)(incomingProps, theme, windowWidth), {
    color: 'gray.500',
    fontSize: 'md',
    fontFamily: 'AntDesign'
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
    position,
    left,
    top,
    bottom,
    right,
    name,
    color,
    maxH,
    maxW,
    minW,
    minH,
    borderRadius,
    borderTopRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderLeftRadius,
    borderRightRadius,
    borderBottomRadius,
    shadow,
    shadowColor,
    boxShadow,
    filter,
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
    fontFamily,
    fontSize,
    opacity,
    zIndex,
    style,
    ...rest
  } = props;
  const computedStyle = (0, _icon.getStyle)(theme, props);
  const IconComponent = (0, _icon2.getIconSet)(fontFamily);
  return /*#__PURE__*/React.createElement(_reactNative.View, _extends({
    style: computedStyle.container
  }, rest), /*#__PURE__*/React.createElement(IconComponent, {
    color: (0, _theme2.getThemeColor)(theme.colors, color),
    size: (0, _theme2.getThemeProperty)(theme.fontSize, fontSize),
    name: name,
    style: computedStyle.icon
  }));
};

// Icon.defaultProps = {
//   color: 'gray.500',
//   fontSize: 'md',
//   fontFamily: 'AntDesign',
// };
exports.Icon = Icon;
//# sourceMappingURL=icon.component.js.map