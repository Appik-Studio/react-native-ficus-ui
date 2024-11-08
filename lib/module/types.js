import React from 'react';
export const borderProps = ['borderColor', 'borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor', 'borderWidth', 'borderTopWidth', 'borderRightWidth', 'borderLeftWidth', 'borderBottomWidth', 'borderStartWidth', 'borderEndWidth', 'borderStyle'];
export const spacingProps = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'ms', 'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'ps'];
export const stackSpacingProps = ['spacing'];
export const orientationProps = ['orientation'];
export const borderRadiusProps = ['borderRadius', 'borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomLeftRadius', 'borderBottomRightRadius', 'borderTopRadius', 'borderLeftRadius', 'borderRightRadius', 'borderBottomRadius'];
export const shadowProps = ['shadow', 'shadowColor'];
export const dimensionProps = ['minH', 'minW', 'maxH', 'maxW', 'h', 'w'];
export const flexProps = ['flex', 'flexDirection', 'direction', 'flexWrap', 'wrap', 'flexGrow', 'grow', 'flexBasis', 'basis', 'flexShrink', 'shrink', 'justifyContent', 'justify', 'alignSelf', 'alignItems', 'align'];
export const positionProps = ['position', 'top', 'right', 'bottom', 'left'];
export const activityIndicatorProps = ['animating', 'color', 'hidesWhenStopped', 'size'];
export const backgroundProps = ['bg'];
export const backgroundImgProps = ['bgImg', 'bgMode'];
export const textProps = ['color', 'fontSize', 'textDecorLine', 'textDecorationLine', 'textDecorStyle', 'textDecorationStyle', 'fontStyle', 'textDecorColor', 'textDecorationColor', 'fontWeight', 'fontFamily', 'lineHeight', 'textAlign', 'textTransform', 'letterSpacing', 'textAlignVertical'];
export const opacityProps = ['opacity'];
export const overflowProps = ['overflow'];
export const zIndexProps = ['zIndex'];
export const loadingProps = ['isLoading', 'loaderSize', 'loaderColor'];
export const preffixSuffixProps = ['preffix', 'suffix'];
export const inputProps = ['focusBorderColor', 'focusBorderWidth', 'focusBorderStyle'];
export const disabledProps = ['isDisabled'];
export const buttonProps = ['underlayColor', 'full', 'rippleColor', 'ripple', 'colorScheme'];
export const overlayProps = ['overlayColor', 'overlayOpacity'];
export const variantProps = ['variant'];
export const allFicusProps = [...borderProps, ...spacingProps, ...stackSpacingProps, ...orientationProps, ...borderRadiusProps, ...shadowProps, ...dimensionProps, ...flexProps, ...positionProps, ...activityIndicatorProps, ...backgroundProps, ...backgroundImgProps, ...textProps, ...opacityProps, ...overflowProps, ...zIndexProps, ...loadingProps, ...preffixSuffixProps, ...inputProps, ...disabledProps, ...buttonProps, ...overlayProps, ...variantProps];
export function handleResponsiveProps(props, theme, windowWidth) {
  let newProps = {};

  // Extract breakpoints from the theme and sort them by their numeric value (ascending)
  const breakpoints = theme !== null && theme !== void 0 && theme.breakpoints ? Object.entries(theme.breakpoints).sort((a, b) => a[1] - b[1]) : [];
  for (const prop in props) {
    const value = props[prop];
    newProps = {
      ...newProps,
      [prop]: value
    };

    // Skip props that are valid React elements (e.g., JSX) or not ficus props
    if (!allFicusProps.includes(prop) || /*#__PURE__*/React.isValidElement(value)) {
      continue;
    }
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      // Handle as an object with responsive values
      for (const breakpoint in value) {
        if (theme !== null && theme !== void 0 && theme.breakpoints && breakpoint in (theme === null || theme === void 0 ? void 0 : theme.breakpoints)) {
          const themeBreakpointValue = theme.breakpoints[breakpoint];
          if (windowWidth >= themeBreakpointValue) {
            newProps = {
              ...newProps,
              [prop]: value[breakpoint]
            };
          }
        }
      }
    } // Handle as an array of responsive values
    else if (Array.isArray(value)) {
      // Otherwise, treat it as an array of responsive values
      let matchedValue = value[0]; // Default to the first value

      for (let i = 0; i < breakpoints.length; i++) {
        const [, minWidth] = breakpoints[i];
        if (windowWidth >= minWidth) {
          matchedValue = value[i] !== undefined && value[i] !== null ? value[i] : matchedValue;
        }
      }
      newProps = {
        ...newProps,
        [prop]: matchedValue
      };
    }
  }
  return newProps;
}
//# sourceMappingURL=types.js.map