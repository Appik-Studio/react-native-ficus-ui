"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HStack = void 0;
var React = _interopRequireWildcard(require("react"));
var _useDefaultProps = require("../../utilities/useDefaultProps");
var _stack = require("./stack.component");
var _types = require("../../types");
var _theme = require("../../theme");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const HStack = incomingProps => {
  const {
    theme,
    windowWidth
  } = (0, _theme.useTheme)();
  const props = (0, _useDefaultProps.useDefaultProps)('HStack', (0, _types.handleResponsiveProps)(incomingProps, theme, windowWidth), {
    bg: 'transparent',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    borderRadius: 'none',
    shadow: 'none',
    position: 'relative',
    pointerEvents: 'auto',
    borderStyle: 'solid',
    spacing: 0
  });
  return /*#__PURE__*/React.createElement(_stack.Stack, props);
};

// HStack.defaultProps = {
//   bg: 'transparent',
//   flexDirection: 'row',
//   flexWrap: 'nowrap',
//   borderRadius: 'none',
//   shadow: 'none',
//   shadowColor: 'gray900',
//   position: 'relative',
//   pointerEvents: 'auto',
//   borderStyle: 'solid',
//   spacing: 0,
// };
exports.HStack = HStack;
//# sourceMappingURL=hstack.component.js.map