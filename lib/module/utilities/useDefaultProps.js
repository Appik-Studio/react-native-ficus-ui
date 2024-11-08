import React from 'react';
import { useTheme } from '../theme/theme.hook';
export const useDefaultProps = (componentName, props, defaultProps) => {
  const {
    theme
  } = useTheme();
  const finalProps = React.useMemo(() => {
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
//# sourceMappingURL=useDefaultProps.js.map