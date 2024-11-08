function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { ThemeContext } from '../theme/theme.context';
export function withDefaultProps(WrappedComponent, componentName, defaultProps) {
  return class extends React.PureComponent {
    static contextType = ThemeContext;
    // using `declare` requires babel plugin which doesn't seem to work
    // class related components & HOC's should be refactored anyway
    // @ts-ignore

    render() {
      var _theme$components, _theme$components2;
      const theme = this.context.theme;
      if (!componentName) {
        return /*#__PURE__*/React.createElement(WrappedComponent, _extends({}, this.props, defaultProps));
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
      return /*#__PURE__*/React.createElement(WrappedComponent, mergedProps);
    }
  };
}
//# sourceMappingURL=withDefaultProps.js.map