"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDefaultProps = void 0;
var _react = _interopRequireDefault(require("react"));
var _theme = require("../theme/theme.hook");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const useDefaultProps = (componentName, props, defaultProps) => {
  const {
    theme
  } = (0, _theme.useTheme)();
  const finalProps = _react.default.useMemo(() => {
    var _theme$components, _theme$components2;
    if (!componentName) {
      return {
        ...defaultProps,
        ...props
      };
    }
    let propsFromTheme = {
      ...(((_theme$components = theme.components) === null || _theme$components === void 0 ? void 0 : _theme$components[componentName]) ?? {}),
      ...(props.variant && (((_theme$components2 = theme.components) === null || _theme$components2 === void 0 || (_theme$components2 = _theme$components2[componentName]) === null || _theme$components2 === void 0 || (_theme$components2 = _theme$components2.variants) === null || _theme$components2 === void 0 ? void 0 : _theme$components2[props.variant]) ?? {}))
    };
    delete propsFromTheme.variants;
    const mergedProps = {
      ...defaultProps,
      ...propsFromTheme,
      ...props
    };
    return mergedProps;
  }, [componentName, defaultProps, props, theme.components]);
  return finalProps;
};
exports.useDefaultProps = useDefaultProps;
//# sourceMappingURL=useDefaultProps.js.map