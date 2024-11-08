"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flexProps = exports.disabledProps = exports.dimensionProps = exports.buttonProps = exports.borderRadiusProps = exports.borderProps = exports.backgroundProps = exports.backgroundImgProps = exports.allFicusProps = exports.activityIndicatorProps = void 0;
exports.handleResponsiveProps = handleResponsiveProps;
exports.zIndexProps = exports.variantProps = exports.textProps = exports.stackSpacingProps = exports.spacingProps = exports.shadowProps = exports.preffixSuffixProps = exports.positionProps = exports.overlayProps = exports.overflowProps = exports.orientationProps = exports.opacityProps = exports.loadingProps = exports.inputProps = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const borderProps = exports.borderProps = ['borderColor', 'borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor', 'borderWidth', 'borderTopWidth', 'borderRightWidth', 'borderLeftWidth', 'borderBottomWidth', 'borderStartWidth', 'borderEndWidth', 'borderStyle'];
const spacingProps = exports.spacingProps = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'ms', 'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'ps'];
const stackSpacingProps = exports.stackSpacingProps = ['spacing'];
const orientationProps = exports.orientationProps = ['orientation'];
const borderRadiusProps = exports.borderRadiusProps = ['borderRadius', 'borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomLeftRadius', 'borderBottomRightRadius', 'borderTopRadius', 'borderLeftRadius', 'borderRightRadius', 'borderBottomRadius'];
const shadowProps = exports.shadowProps = ['shadow', 'shadowColor'];
const dimensionProps = exports.dimensionProps = ['minH', 'minW', 'maxH', 'maxW', 'h', 'w'];
const flexProps = exports.flexProps = ['flex', 'flexDirection', 'direction', 'flexWrap', 'wrap', 'flexGrow', 'grow', 'flexBasis', 'basis', 'flexShrink', 'shrink', 'justifyContent', 'justify', 'alignSelf', 'alignItems', 'align'];
const positionProps = exports.positionProps = ['position', 'top', 'right', 'bottom', 'left'];
const activityIndicatorProps = exports.activityIndicatorProps = ['animating', 'color', 'hidesWhenStopped', 'size'];
const backgroundProps = exports.backgroundProps = ['bg'];
const backgroundImgProps = exports.backgroundImgProps = ['bgImg', 'bgMode'];
const textProps = exports.textProps = ['color', 'fontSize', 'textDecorLine', 'textDecorationLine', 'textDecorStyle', 'textDecorationStyle', 'fontStyle', 'textDecorColor', 'textDecorationColor', 'fontWeight', 'fontFamily', 'lineHeight', 'textAlign', 'textTransform', 'letterSpacing', 'textAlignVertical'];
const opacityProps = exports.opacityProps = ['opacity'];
const overflowProps = exports.overflowProps = ['overflow'];
const zIndexProps = exports.zIndexProps = ['zIndex'];
const loadingProps = exports.loadingProps = ['isLoading', 'loaderSize', 'loaderColor'];
const preffixSuffixProps = exports.preffixSuffixProps = ['preffix', 'suffix'];
const inputProps = exports.inputProps = ['focusBorderColor', 'focusBorderWidth', 'focusBorderStyle'];
const disabledProps = exports.disabledProps = ['isDisabled'];
const buttonProps = exports.buttonProps = ['underlayColor', 'full', 'rippleColor', 'ripple', 'colorScheme'];
const overlayProps = exports.overlayProps = ['overlayColor', 'overlayOpacity'];
const variantProps = exports.variantProps = ['variant'];
const allFicusProps = exports.allFicusProps = [...borderProps, ...spacingProps, ...stackSpacingProps, ...orientationProps, ...borderRadiusProps, ...shadowProps, ...dimensionProps, ...flexProps, ...positionProps, ...activityIndicatorProps, ...backgroundProps, ...backgroundImgProps, ...textProps, ...opacityProps, ...overflowProps, ...zIndexProps, ...loadingProps, ...preffixSuffixProps, ...inputProps, ...disabledProps, ...buttonProps, ...overlayProps, ...variantProps];
function handleResponsiveProps(props, theme, windowWidth) {
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
    if (!allFicusProps.includes(prop) || /*#__PURE__*/_react.default.isValidElement(value)) {
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