"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyle = void 0;
var _reactNative = require("react-native");
var _theme = require("../../theme/theme.service");
/**
 * computed style
 *
 * @param theme
 * @param props
 */
const getStyle = (theme, props) => {
  const computedStyle = {};
  computedStyle.divider = {
    flexDirection: props.direction ? props.direction : props.flexDirection,
    flexWrap: props.wrap ? props.wrap : props.flexWrap,
    alignItems: props.align ? props.align : props.alignItems,
    justifyContent: props.justify ? props.justify : props.justifyContent,
    flexBasis: props.basis ? props.basis : props.flexBasis,
    flexGrow: props.grow ? props.grow : props.flexGrow,
    flexShrink: props.shrink ? props.shrink : props.flexShrink,
    height: props.h,
    width: props.w,
    minWidth: props.minW,
    minHeight: props.minH,
    alignSelf: props.alignSelf,
    maxWidth: props.maxW,
    maxHeight: props.maxH,
    opacity: props.opacity,
    overflow: props.overflow || 'hidden',
    zIndex: props.zIndex,
    borderStyle: props.borderStyle,
    borderColor: (0, _theme.getThemeColor)(theme.colors, `${props.colorScheme}.400`),
    borderTopWidth: props.orientation === 'horizontal' ? props.size : 0,
    borderLeftWidth: props.orientation === 'vertical' ? props.size : 0,
    flex: props.flex,
    ...(0, _theme.createPositionStyle)(props),
    ...(0, _theme.createShadowStyles)(props, theme),
    ...(0, _theme.createBorderWidthStyles)(props),
    ...(0, _theme.createSpacingStyles)(props, theme.spacing),
    ...(0, _theme.createBorderColorStyles)(props, theme.colors),
    ...(0, _theme.createBorderRadiusStyles)(props, theme.borderRadius)
  };

  // merging custom style props to computed style
  if (props.style) {
    computedStyle.divider = {
      ...computedStyle.divider,
      // @ts-ignore
      ...props.style
    };
  }
  return _reactNative.StyleSheet.create(computedStyle);
};
exports.getStyle = getStyle;
//# sourceMappingURL=divider.style.js.map