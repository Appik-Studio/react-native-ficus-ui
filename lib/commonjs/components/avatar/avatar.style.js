"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyle = void 0;
var _reactNative = require("react-native");
var _theme = require("../../theme/theme.service");
/* eslint-disable no-bitwise */

const AVATAR_BADGE_RATIO = 2.5;
const stringToColor = str => {
  // Step 1: Create a hash from the string
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Step 2: Convert the hash into a color code (in hex format)
  let color = '#';
  for (let i = 0; i < 3; i++) {
    // Bitwise operation to get the first 3 bytes and map it to a valid hex value
    let value = hash >> i * 8 & 0xff;
    color += ('00' + value.toString(16)).substr(-2);
  }
  return color;
};
const lightenColor = (color, percent) => {
  const num = parseInt(color.slice(1), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00ff) + amt;
  const B = (num & 0x0000ff) + amt;
  return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
};
const darkenColor = (color, percent) => {
  const num = parseInt(color.slice(1), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) - amt;
  const G = (num >> 8 & 0x00ff) - amt;
  const B = (num & 0x0000ff) - amt;
  return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
};

/**
 * computed style
 *
 * @param theme
 * @param props
 */
const getStyle = (theme, props) => {
  const computedStyle = {};
  computedStyle.avatar = {
    flexDirection: props.direction ? props.direction : props.flexDirection,
    flexWrap: props.wrap ? props.wrap : props.flexWrap,
    alignItems: props.align ? props.align : props.alignItems,
    justifyContent: props.justify ? props.justify : props.justifyContent,
    flexBasis: props.basis ? props.basis : props.flexBasis,
    flexGrow: props.grow ? props.grow : props.flexGrow,
    flexShrink: props.shrink ? props.shrink : props.flexShrink,
    minWidth: props.minW,
    minHeight: props.minH,
    alignSelf: props.alignSelf,
    maxWidth: props.maxW,
    maxHeight: props.maxH,
    opacity: props.opacity,
    overflow: props.overflow || 'hidden',
    zIndex: props.zIndex,
    elevation: props.elevation,
    flex: props.flex,
    ...(0, _theme.createAvatarStyles)(props, theme.avatar),
    ...(0, _theme.createPositionStyle)(props),
    ...(0, _theme.createShadowStyles)(props, theme),
    ...(0, _theme.createSpacingStyles)(props, theme.spacing)
  };

  // merging custom style props to computed style
  if (props.style) {
    computedStyle.avatar = {
      ...computedStyle.avatar,
      // @ts-ignore
      ...props.style
    };
  }
  computedStyle.avatarImage = {
    ...(0, _theme.createBorderRadiusStyles)(props, theme.borderRadius),
    ...(0, _theme.createBorderColorStyles)(props, theme.colors),
    ...(0, _theme.createBorderWidthStyles)(props),
    borderStyle: props.borderStyle,
    backgroundColor: props.bg ? (0, _theme.getThemeColor)(theme.colors, props.bg) : props.colorScheme ? (0, _theme.getThemeColor)(theme.colors, `${props.colorScheme}.300`) : props.name ? lightenColor(stringToColor(props.name), 30) : (0, _theme.getThemeColor)(theme.colors, 'gray.300')
  };
  computedStyle.text = {
    textDecorationLine: props.textDecorLine || props.textDecorationLine,
    textDecorationStyle: props.textDecorStyle || props.textDecorationStyle,
    letterSpacing: props.letterSpacing,
    fontStyle: props.fontStyle,
    textAlignVertical: props.textAlignVertical,
    lineHeight: props.lineHeight,
    color: props.color ? (0, _theme.getThemeColor)(theme.colors, props.color) : props.colorScheme ? (0, _theme.getThemeColor)(theme.colors, `${props.colorScheme}.800`) : props.name ? darkenColor(stringToColor(props.name), 40) : (0, _theme.getThemeColor)(theme.colors, 'gray.800'),
    fontSize: props.fontSize ? (0, _theme.getThemeProperty)(theme.fontSize, props.fontSize) : (0, _theme.getThemeProperty)(theme.avatar, props.size) / 2,
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
  computedStyle.avatarBadge = {
    position: 'absolute',
    w: computedStyle.avatar.width / AVATAR_BADGE_RATIO,
    h: computedStyle.avatar.height / AVATAR_BADGE_RATIO,
    left: computedStyle.avatar.width - computedStyle.avatar.width / AVATAR_BADGE_RATIO,
    top: computedStyle.avatar.height - computedStyle.avatar.height / AVATAR_BADGE_RATIO
  };
  return _reactNative.StyleSheet.create(computedStyle);
};
exports.getStyle = getStyle;
//# sourceMappingURL=avatar.style.js.map