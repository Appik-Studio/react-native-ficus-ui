"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyle = void 0;
var _react = require("react");
var _reactNative = require("react-native");
var _theme = require("../../theme/theme.service");
/**
 * computed style
 *
 * @param theme
 * @param props
 */
const getStyle = (theme, props, state) => {
  const computedStyle = {};
  computedStyle.container = {
    flexDirection: 'row',
    alignItems: 'flex-start',
    zIndex: props.zIndex,
    minHeight: props.minH,
    minWidth: props.minW,
    maxHeight: props.maxH,
    maxWidth: props.maxW,
    width: props.w,
    height: props.h,
    opacity: props.opacity,
    backgroundColor: (0, _theme.getThemeColor)(theme.colors, props.bg),
    ...(0, _theme.createFlexStyles)(props),
    ...(0, _theme.createBorderWidthStyles)(props),
    ...(0, _theme.createShadowStyles)(props, theme),
    ...(0, _theme.createPositionStyle)(props),
    ...(0, _theme.createSpacingStyles)(props, theme.spacing),
    ...(0, _theme.createBorderColorStyles)(props, theme.colors),
    ...(0, _theme.createBorderRadiusStyles)(props, theme.borderRadius)
  };
  if (state.isFocused) {
    computedStyle.container = {
      ...computedStyle.container,
      borderColor: (0, _theme.getThemeColor)(theme.colors, props.focusBorderColor ? props.focusBorderColor : computedStyle.container.borderColor),
      borderWidth: props.focusBorderWidth,
      borderStyle: props.focusBorderStyle
    };
  }
  computedStyle.marginContainer = {
    padding: state.isFocused ? 0 : props.focusBorderWidth - props.borderWidth
  };
  computedStyle.input = {
    flex: 1,
    padding: 0,
    margin: state.isFocused && state.isTextarea ? -1 : 0,
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
    borderWidth: 0
  };
  computedStyle.suffix = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: props.suffix && /*#__PURE__*/(0, _react.isValidElement)(props.suffix) && props.suffix.props.alignSelf ? props.suffix.props.alignSelf : 'center',
    marginLeft: 5
  };
  computedStyle.prefix = {
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 5,
    alignSelf: props.prefix && /*#__PURE__*/(0, _react.isValidElement)(props.prefix) && props.prefix.props.alignSelf ? props.prefix.props.alignSelf : 'center'
  };

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
//# sourceMappingURL=input.style.js.map