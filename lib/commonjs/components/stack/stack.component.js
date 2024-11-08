"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stack = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _stack = require("./stack.style");
var _theme = require("../../theme/theme.hook");
var _useDefaultProps = require("../../utilities/useDefaultProps");
var _types = require("../../types");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Stack = incomingProps => {
  const {
    theme,
    windowWidth
  } = (0, _theme.useTheme)();
  const props = (0, _useDefaultProps.useDefaultProps)('Stack', (0, _types.handleResponsiveProps)(incomingProps, theme, windowWidth), {
    bg: 'transparent',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    borderRadius: 'none',
    shadow: 'none',
    position: 'relative',
    pointerEvents: 'auto',
    borderStyle: 'solid',
    spacing: 0
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
    boxShadow,
    filter,
    opacity,
    overflow,
    top,
    left,
    right,
    bottom,
    zIndex,
    spacing,
    ...rest
  } = props;
  const computedStyle = (0, _stack.getStyle)(theme, props);
  return /*#__PURE__*/React.createElement(_reactNative.View, _extends({
    style: computedStyle.stack
  }, rest), children && Array.isArray(children) ? children.map((item, index) => {
    var _item$props;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: `stack-${index}`
    }, !!item && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_reactNative.View, {
      style: {
        zIndex: (_item$props = item.props) === null || _item$props === void 0 ? void 0 : _item$props.zIndex
      }
    }, item), index !== children.length - 1 ? /*#__PURE__*/React.createElement(_reactNative.View, {
      style: computedStyle.stackSpacing
    }) : null));
  }) : children);
};

// Stack.defaultProps = {
//   bg: 'transparent',
//   flexDirection: 'column',
//   flexWrap: 'nowrap',
//   borderRadius: 'none',
//   shadow: 'none',
//   shadowColor: 'gray900',
//   position: 'relative',
//   pointerEvents: 'auto',
//   borderStyle: 'solid',
//   spacing: 0,
// };
exports.Stack = Stack;
//# sourceMappingURL=stack.component.js.map