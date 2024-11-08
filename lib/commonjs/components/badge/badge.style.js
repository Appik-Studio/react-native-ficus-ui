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
  const badgeBgColor = props.variant === 'subtle' ? (0, _theme.getThemeColor)(theme.colors, `${props.colorScheme}.100`) : props.variant === 'solid' ? (0, _theme.getThemeColor)(theme.colors, `${props.colorScheme}.500`) : 'transparent';
  const badgeTextColor = props.variant === 'subtle' ? (0, _theme.getThemeColor)(theme.colors, `${props.colorScheme}.800`) : props.variant === 'solid' ? 'white' : props.variant === 'outline' ? (0, _theme.getThemeColor)(theme.colors, `${props.colorScheme}.500`) : (0, _theme.getThemeColor)(theme.colors, `${props.colorScheme}.800`);
  computedStyle.badge = {
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
    backgroundColor: props.bg ? (0, _theme.getThemeColor)(theme.colors, props.bg) : badgeBgColor,
    flex: props.flex,
    ...(0, _theme.createPositionStyle)(props),
    ...(0, _theme.createShadowStyles)(props, theme),
    ...(0, _theme.createBorderWidthStyles)(props),
    ...(0, _theme.createSpacingStyles)(props, theme.spacing),
    ...(0, _theme.createBorderColorStyles)(props, theme.colors),
    ...(0, _theme.createBorderRadiusStyles)(props, theme.borderRadius)
  };
  if (props.variant === 'outline') {
    var _computedStyle$badge, _computedStyle$badge2, _computedStyle$badge3, _computedStyle$badge4, _computedStyle$badge5, _computedStyle$badge6, _computedStyle$badge7, _computedStyle$badge8, _computedStyle$badge9, _computedStyle$badge10, _computedStyle$badge11, _computedStyle$badge12, _computedStyle$badge13, _computedStyle$badge14;
    computedStyle.badge = {
      ...computedStyle.badge,
      borderColor: badgeTextColor,
      borderWidth: 1,
      padding: (_computedStyle$badge = computedStyle.badge) !== null && _computedStyle$badge !== void 0 && _computedStyle$badge.padding ? ((_computedStyle$badge2 = computedStyle.badge) === null || _computedStyle$badge2 === void 0 ? void 0 : _computedStyle$badge2.padding) - 1 : null,
      paddingVertical: (_computedStyle$badge3 = computedStyle.badge) !== null && _computedStyle$badge3 !== void 0 && _computedStyle$badge3.paddingVertical ? ((_computedStyle$badge4 = computedStyle.badge) === null || _computedStyle$badge4 === void 0 ? void 0 : _computedStyle$badge4.paddingVertical) - 1 : null,
      paddingHorizontal: (_computedStyle$badge5 = computedStyle.badge) !== null && _computedStyle$badge5 !== void 0 && _computedStyle$badge5.paddingHorizontal ? ((_computedStyle$badge6 = computedStyle.badge) === null || _computedStyle$badge6 === void 0 ? void 0 : _computedStyle$badge6.paddingHorizontal) - 1 : null,
      paddingLeft: (_computedStyle$badge7 = computedStyle.badge) !== null && _computedStyle$badge7 !== void 0 && _computedStyle$badge7.paddingLeft ? ((_computedStyle$badge8 = computedStyle.badge) === null || _computedStyle$badge8 === void 0 ? void 0 : _computedStyle$badge8.paddingLeft) - 1 : null,
      paddingRight: (_computedStyle$badge9 = computedStyle.badge) !== null && _computedStyle$badge9 !== void 0 && _computedStyle$badge9.paddingRight ? ((_computedStyle$badge10 = computedStyle.badge) === null || _computedStyle$badge10 === void 0 ? void 0 : _computedStyle$badge10.paddingRight) - 1 : null,
      paddingTop: (_computedStyle$badge11 = computedStyle.badge) !== null && _computedStyle$badge11 !== void 0 && _computedStyle$badge11.paddingTop ? ((_computedStyle$badge12 = computedStyle.badge) === null || _computedStyle$badge12 === void 0 ? void 0 : _computedStyle$badge12.paddingTop) - 1 : null,
      paddingBottom: (_computedStyle$badge13 = computedStyle.badge) !== null && _computedStyle$badge13 !== void 0 && _computedStyle$badge13.paddingBottom ? ((_computedStyle$badge14 = computedStyle.badge) === null || _computedStyle$badge14 === void 0 ? void 0 : _computedStyle$badge14.paddingBottom) - 1 : null
    };
  }
  computedStyle.image = {
    ...(0, _theme.createBorderRadiusStyles)(props, theme.borderRadius)
  };

  // merging custom style props to computed style
  if (props.style) {
    computedStyle.badge = {
      ...computedStyle.badge,
      // @ts-ignore
      ...props.style
    };
  }
  computedStyle.text = {
    textDecorationLine: props.textDecorLine || props.textDecorationLine,
    textDecorationStyle: props.textDecorStyle || props.textDecorationStyle,
    letterSpacing: props.letterSpacing,
    fontStyle: props.fontStyle,
    textAlignVertical: props.textAlignVertical,
    lineHeight: props.lineHeight,
    color: props.color ? (0, _theme.getThemeColor)(theme.colors, props.color) : badgeTextColor,
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
    fontFamily: props.fontFamily ?? (0, _theme.getThemeFontFamily)(theme.fontFamily, props.fontWeight)
  };
  return _reactNative.StyleSheet.create(computedStyle);
};
exports.getStyle = getStyle;
//# sourceMappingURL=badge.style.js.map