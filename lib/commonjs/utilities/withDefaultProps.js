"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withDefaultProps = withDefaultProps;
var _react = _interopRequireDefault(require("react"));
var _theme = require("../theme/theme.context");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function withDefaultProps(WrappedComponent, componentName, defaultProps) {
  return class extends _react.default.PureComponent {
    static contextType = _theme.ThemeContext;
    // using `declare` requires babel plugin which doesn't seem to work
    // class related components & HOC's should be refactored anyway
    // @ts-ignore

    render() {
      var _theme$components, _theme$components2;
      const theme = this.context.theme;
      if (!componentName) {
        return /*#__PURE__*/_react.default.createElement(WrappedComponent, _extends({}, this.props, defaultProps));
      }
      let propsFromTheme = {
        ...(((_theme$components = theme.components) === null || _theme$components === void 0 ? void 0 : _theme$components[componentName]) ?? {}),
        ...(this.props.variant && (
        //@ts-ignore
        ((_theme$components2 = theme.components) === null || _theme$components2 === void 0 || (_theme$components2 = _theme$components2[componentName]) === null || _theme$components2 === void 0 || (_theme$components2 = _theme$components2.variants) === null || _theme$components2 === void 0 ? void 0 : _theme$components2[this.props.variant]) ?? {}))
      };
      delete propsFromTheme.variants;
      const mergedProps = {
        ...defaultProps,
        ...propsFromTheme,
        ...this.props
      };
      return /*#__PURE__*/_react.default.createElement(WrappedComponent, mergedProps);
    }
  };
}
//# sourceMappingURL=withDefaultProps.js.map