import { StyleSheet } from 'react-native';
import { createShadowStyles, createPositionStyle, createSpacingStyles, createBorderWidthStyles, createBorderColorStyles, createBorderRadiusStyles, getThemeColor, getThemeProperty, getFontWeight, getThemeFontFamily } from '../../theme/theme.service';
/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme, props) => {
  const computedStyle = {};
  const badgeBgColor = props.variant === 'subtle' ? getThemeColor(theme.colors, `${props.colorScheme}.100`) : props.variant === 'solid' ? getThemeColor(theme.colors, `${props.colorScheme}.500`) : 'transparent';
  const badgeTextColor = props.variant === 'subtle' ? getThemeColor(theme.colors, `${props.colorScheme}.800`) : props.variant === 'solid' ? 'white' : props.variant === 'outline' ? getThemeColor(theme.colors, `${props.colorScheme}.500`) : getThemeColor(theme.colors, `${props.colorScheme}.800`);
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
    backgroundColor: props.bg ? getThemeColor(theme.colors, props.bg) : badgeBgColor,
    flex: props.flex,
    ...createPositionStyle(props),
    ...createShadowStyles(props, theme),
    ...createBorderWidthStyles(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius)
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
    ...createBorderRadiusStyles(props, theme.borderRadius)
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
    color: props.color ? getThemeColor(theme.colors, props.color) : badgeTextColor,
    fontSize: getThemeProperty(theme.fontSize, props.fontSize),
    textAlign: props.textAlign,
    textTransform: props.textTransform,
    textDecorationColor: getThemeColor(theme.colors, props.textDecorColor || props.textDecorationColor),
    textShadowColor: getThemeColor(theme.colors, props.textShadowColor),
    textShadowOffset: {
      width: getThemeProperty(theme.shadow, props.textShadowOffset),
      height: getThemeProperty(theme.shadow, props.textShadowOffset)
    },
    textShadowRadius: getThemeProperty(theme.borderRadius, props.textShadowRadius),
    fontWeight: getFontWeight(theme.fontFamily, props.fontFamily, props.fontWeight),
    fontFamily: props.fontFamily ?? getThemeFontFamily(theme.fontFamily, props.fontWeight)
  };
  return StyleSheet.create(computedStyle);
};
//# sourceMappingURL=badge.style.js.map