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
  computedStyle.text = {
    height: props.h,
    width: props.w,
    minHeight: props.minH,
    minWidth: props.minW,
    maxHeight: props.maxH,
    maxWidth: props.maxW,
    flex: props.flex,
    backgroundColor: (0, _theme.getThemeColor)(theme.colors, props.bg),
    overflow: props.overflow || 'hidden',
    opacity: props.opacity,
    textDecorationLine: props.textDecorLine || props.textDecorationLine,
    textDecorationStyle: props.textDecorStyle || props.textDecorationStyle,
    letterSpacing: props.letterSpacing,
    fontStyle: props.fontStyle,
    textAlignVertical: props.textAlignVertical,
    lineHeight: props.lineHeight,
    color: (0, _theme.getThemeColor)(theme.colors, props.color),
    fontSize: (0, _theme.getThemeProperty)(theme.fontSize, props.fontSize),
    textAlign: props.textAlign,
    textTransform: props.textTransform,
    textDecorationColor: (0, _theme.getThemeColor)(theme.colors, props.textDecorColor || props.textDecorationColor),
    textShadowColor: (0, _theme.getThemeColor)(theme.colors, props.textShadowColor),
    textShadowOffset: {
      width: (0, _theme.getThemeProperty)(theme.shadow, props.textShadowOffset),
      height: (0, _theme.getThemeProperty)(theme.shadow, props.textShadowOffset)
    },
    textShadowRadius: (0, _theme.getThemeProperty)(theme.borderRadius, props.textShadowRadius),
    fontWeight: (0, _theme.getFontWeight)(theme.fontFamily, props.fontFamily, props.fontWeight),
    fontFamily: props.fontFamily ?? (0, _theme.getThemeFontFamily)(theme.fontFamily, props.fontWeight),
    ...(0, _theme.createBorderWidthStyles)(props),
    ...(0, _theme.createSpacingStyles)(props, theme.spacing),
    ...(0, _theme.createBorderColorStyles)(props, theme.colors),
    ...(0, _theme.createBorderRadiusStyles)(props, theme.borderRadius)
  };

  // merging style props to computed style
  if (props.style) {
    computedStyle.text = {
      ...computedStyle.text,
      // @ts-ignore
      ...props.style
    };
  }
  return _reactNative.StyleSheet.create(computedStyle);
};
exports.getStyle = getStyle;
//# sourceMappingURL=text.style.js.map