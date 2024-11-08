"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconButton = void 0;
var React = _interopRequireWildcard(require("react"));
var _button = require("../button/button.component");
var _theme = require("../../theme");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const IconButton = ({
  icon,
  size = 'md',
  ...incomingProps
}) => {
  var _getThemeProperty, _getThemeProperty2;
  const {
    theme
  } = (0, _theme.useTheme)();
  return /*#__PURE__*/React.createElement(_button.Button, _extends({
    px: undefined,
    py: undefined,
    w: ((_getThemeProperty = (0, _theme.getThemeProperty)(theme.button, size)) === null || _getThemeProperty === void 0 ? void 0 : _getThemeProperty.height) - (incomingProps.variant === 'outline' ? 1 : 0),
    h: ((_getThemeProperty2 = (0, _theme.getThemeProperty)(theme.button, size)) === null || _getThemeProperty2 === void 0 ? void 0 : _getThemeProperty2.height) - (incomingProps.variant === 'outline' ? 1 : 0),
    size: size
  }, incomingProps), icon);
};
exports.IconButton = IconButton;
//# sourceMappingURL=icon-button.component.js.map