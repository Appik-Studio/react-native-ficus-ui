"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeProvider = void 0;
var React = _interopRequireWildcard(require("react"));
var _theme = require("./theme.context");
var _deepmerge = _interopRequireDefault(require("deepmerge"));
var _theme2 = require("./theme.default");
var _reactNativeToastMessage = _interopRequireDefault(require("react-native-toast-message"));
var _reactNative = require("react-native");
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _bottomSheet = require("@gorhom/bottom-sheet");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ThemeProvider = props => {
  const {
    theme: themeProp = {},
    children
  } = props;
  const {
    width
  } = (0, _reactNative.useWindowDimensions)();
  const [themeState, setThemeState] = React.useState((0, _deepmerge.default)(_theme2.defaultTheme, themeProp));
  const setTheme = newTheme => {
    const mergedTheme = (0, _deepmerge.default)(_theme2.defaultTheme, newTheme);
    setThemeState(mergedTheme);
  };
  return (
    /*#__PURE__*/
    // eslint-disable-next-line react-native/no-inline-styles
    React.createElement(_reactNativeGestureHandler.GestureHandlerRootView, {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(_theme.ThemeContext.Provider, {
      value: {
        theme: themeState,
        setTheme,
        windowWidth: width
      }
    }, /*#__PURE__*/React.createElement(_bottomSheet.BottomSheetModalProvider, null, children, /*#__PURE__*/React.createElement(_reactNativeToastMessage.default, themeState.toastProps))))
  );
};
exports.ThemeProvider = ThemeProvider;
//# sourceMappingURL=theme.provider.js.map