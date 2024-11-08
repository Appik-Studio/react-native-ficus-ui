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
  computedStyle.button = {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: props.alignSelf,
    opacity: props.opacity,
    flex: props.flex,
    zIndex: props.zIndex,
    width: props.w,
    height: props.h,
    minWidth: props.minW,
    minHeight: props.minH,
    maxWidth: props.maxW,
    maxHeight: props.maxH,
    ...(0, _theme.createPositionStyle)(props),
    ...(0, _theme.createBorderWidthStyles)(props),
    ...(0, _theme.createShadowStyles)(props, theme),
    ...(0, _theme.createSpacingStyles)(props, theme.spacing),
    ...(0, _theme.createBorderColorStyles)(props, theme.colors),
    ...(0, _theme.createBorderRadiusStyles)(props, theme.borderRadius),
    backgroundColor: (0, _theme.getThemeColor)(theme.colors, props.bg)
  };
  computedStyle.text = {
    fontWeight: props.fontWeight,
    color: (0, _theme.getThemeColor)(theme.colors, props.color),
    fontSize: (0, _theme.getThemeProperty)(theme.fontSize, props.fontSize)
  };
  computedStyle.loadingContainer = {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: (0, _theme.getThemeProperty)(theme.fontSize, props.size) * 1.2
  };
  computedStyle.container = {
    flexDirection: props.flexDirection,
    alignItems: props.alignItems,
    justifyContent: props.justifyContent,
    position: 'relative'
  };
  if (props.full) {
    computedStyle.container = {
      ...computedStyle.container,
      width: '100%',
      alignSelf: 'stretch'
    };
    computedStyle.button = {
      ...computedStyle.button,
      alignSelf: 'stretch'
    };
  }
  computedStyle.icon = {
    zIndex: 2
  };
  if (props.disabled) {
    computedStyle.icon = {
      ...computedStyle.icon,
      opacity: 0.5
    };
  }

  // merging style props to computed style
  if (props.style) {
    computedStyle.container = {
      ...computedStyle.container,
      // @ts-ignore
      ...props.style
    };
  }
  return _reactNative.StyleSheet.create(computedStyle);
};
exports.getStyle = getStyle;
//# sourceMappingURL=radio.style.js.map