"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNativeModal = _interopRequireDefault(require("react-native-modal"));
var _reactNative = require("react-native");
var _theme = require("../../theme");
var _box = require("../box/box.component");
var _useDefaultProps = require("../../utilities/useDefaultProps");
var _modal = require("./modal.style");
var _types = require("../../types");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Modal = incomingProps => {
  const {
    theme,
    windowWidth
  } = (0, _theme.useTheme)();
  const props = (0, _useDefaultProps.useDefaultProps)('Modal', (0, _types.handleResponsiveProps)(incomingProps, theme, windowWidth), {
    bg: 'white',
    h: '100%',
    isOpen: false,
    justifyContent: 'flex-end'
  });
  const {
    bg,
    h,
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
    borderRadius,
    borderTopRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderLeftRadius,
    borderRightRadius,
    borderBottomRadius,
    borderColor,
    borderBottomColor,
    borderLeftColor,
    borderTopColor,
    borderRightColor,
    borderWidth,
    borderLeftWidth,
    borderRightWidth,
    borderBottomWidth,
    borderEndWidth,
    borderTopWidth,
    justifyContent,
    children,
    isOpen,
    isVisible,
    ...rest
  } = props;
  const computedStyle = (0, _modal.getStyle)(theme, props);
  return /*#__PURE__*/React.createElement(_reactNativeModal.default, _extends({}, rest, {
    isVisible: isOpen || isVisible,
    style: computedStyle.modal
  }), /*#__PURE__*/React.createElement(_box.Box, {
    bg: bg,
    h: h ?? '100%',
    style: computedStyle.container
  }, /*#__PURE__*/React.createElement(_reactNative.SafeAreaView, {
    style: computedStyle.safeView
  }, children)));
};

// Modal.defaultProps = {
//   bg: 'white',
//   h: '100%',
//   isOpen: false,
//   justifyContent: 'flex-end',
// };
exports.Modal = Modal;
//# sourceMappingURL=modal.component.js.map