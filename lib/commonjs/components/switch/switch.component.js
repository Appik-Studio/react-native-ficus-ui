"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Switch = void 0;
var _react = _interopRequireWildcard(require("react"));
var React = _react;
var _reactNative = require("react-native");
var _switch = require("./switch.style");
var _theme = require("../../theme");
var _theme2 = require("../../theme/theme.service");
var _useDefaultProps = require("../../utilities/useDefaultProps");
var _types = require("../../types");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Switch = incomingProps => {
  const {
    theme,
    windowWidth
  } = (0, _theme.useTheme)();
  const props = (0, _useDefaultProps.useDefaultProps)('Switch', (0, _types.handleResponsiveProps)(incomingProps, theme, windowWidth), {
    w: 55,
    h: 30,
    onPress: () => {},
    colorScheme: 'green',
    bg: 'gray.400',
    on: false,
    thumbBg: 'white',
    activeThumbBg: 'white',
    duration: 300,
    borderRadius: 'full',
    isDisabled: false
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
    isDisabled,
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
    borderTopWidth,
    borderEndWidth,
    onPress,
    colorScheme,
    thumbBg,
    activeThumbBg,
    duration,
    on,
    ...rest
  } = props;
  const [animXValue] = (0, _react.useState)(new _reactNative.Animated.Value(on ? 1 : 0));
  const computedStyle = (0, _switch.getStyle)(theme, props);
  const endPos = w - h + 3;
  const circlePosXEnd = endPos;
  const [circlePosXStart] = (0, _react.useState)(3);
  const prevSwitchOnRef = (0, _react.useRef)();
  const prevSwitchOn = !!prevSwitchOnRef.current;

  /**
   *
   */
  (0, _react.useEffect)(() => {
    const runAnimation = () => {
      const animValue = {
        fromValue: on ? 0 : 1,
        toValue: on ? 1 : 0,
        duration,
        useNativeDriver: false
      };
      _reactNative.Animated.timing(animXValue, animValue).start();
    };
    prevSwitchOnRef.current = on;
    if (prevSwitchOn !== on) {
      runAnimation();
    }
  }, [animXValue, prevSwitchOn, on, duration]);
  return /*#__PURE__*/React.createElement(_reactNative.TouchableOpacity, _extends({
    onPress: !isDisabled ? onPress : () => {},
    activeOpacity: 0.5
  }, rest), /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
    style: [computedStyle.container, {
      backgroundColor: animXValue.interpolate({
        inputRange: [0, 1],
        outputRange: [(0, _theme2.getThemeColor)(theme.colors, bg), (0, _theme2.getThemeColor)(theme.colors, `${props.colorScheme}.500`)]
      })
    }]
  }, /*#__PURE__*/React.createElement(_reactNative.Animated.View, {
    style: [computedStyle.circle, {
      backgroundColor: animXValue.interpolate({
        inputRange: [0, 1],
        outputRange: [(0, _theme2.getThemeColor)(theme.colors, thumbBg), (0, _theme2.getThemeColor)(theme.colors, activeThumbBg)]
      })
    }, {
      transform: [{
        translateX: animXValue.interpolate({
          inputRange: [0, 1],
          outputRange: [circlePosXStart, circlePosXEnd]
        })
      }]
    }]
  })));
};

// Switch.defaultProps = {
//   w: 55,
//   h: 30,
//   onPress: (): void => {},
//   activeBg: 'green.600',
//   bg: 'gray.400',
//   on: false,
//   circleBg: 'white',
//   activeCircleBg: 'white',
//   duration: 300,
//   borderRadius: 'full',
//   isDisabled: false,
// };
exports.Switch = Switch;
//# sourceMappingURL=switch.component.js.map