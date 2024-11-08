"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slider = void 0;
var React = _interopRequireWildcard(require("react"));
var _slider = _interopRequireDefault(require("@react-native-community/slider"));
var _slider2 = require("./slider.style");
var _theme = require("../../theme/theme.hook");
var _useDefaultProps = require("../../utilities/useDefaultProps");
var _types = require("../../types");
var _theme2 = require("../../theme/theme.service");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Slider = incomingProps => {
  const {
    theme,
    windowWidth
  } = (0, _theme.useTheme)();
  const props = (0, _useDefaultProps.useDefaultProps)('Slider', (0, _types.handleResponsiveProps)(incomingProps, theme, windowWidth), {
    flexDirection: 'column',
    flexWrap: 'nowrap',
    min: 0,
    max: 1,
    filledTrackColor: 'gray.200',
    colorScheme: 'blue'
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
    children,
    bgImg,
    bgMode,
    alignItems,
    align,
    justifyContent,
    justify,
    flexWrap,
    wrap,
    flexGrow,
    grow,
    flexBasis,
    basis,
    flexShrink,
    shrink,
    opacity,
    top,
    left,
    right,
    bottom,
    zIndex,
    min,
    max,
    colorScheme,
    filledTrackColor,
    defaultValue,
    ...rest
  } = props;
  const computedStyle = (0, _slider2.getStyle)(theme, props);
  return /*#__PURE__*/React.createElement(_slider.default, _extends({
    minimumValue: min,
    maximumValue: max,
    value: defaultValue,
    minimumTrackTintColor: (0, _theme2.getThemeColor)(theme.colors, `${colorScheme}.500`),
    maximumTrackTintColor: (0, _theme2.getThemeColor)(theme.colors, filledTrackColor),
    thumbTintColor: "white",
    style: computedStyle.slider
  }, rest));
};
exports.Slider = Slider;
//# sourceMappingURL=slider.component.js.map