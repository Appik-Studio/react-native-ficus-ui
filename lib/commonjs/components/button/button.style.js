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
  var _getThemeProperty, _getThemeProperty2, _getThemeProperty3;
  const computedStyle = {};
  const buttonBgColor = props.bg ? (0, _theme.getThemeColor)(theme.colors, props.bg) : props.variant === 'solid' ? (0, _theme.getThemeColor)(theme.colors, `${props.colorScheme}.500`) : 'transparent';
  const buttonTextColor = props.color ? (0, _theme.getThemeColor)(theme.colors, props.color) : props.variant === 'outline' || props.variant === 'ghost' || props.variant === 'link' ? (0, _theme.getThemeColor)(theme.colors, `${props.colorScheme}.500`) : 'white';
  computedStyle.button = {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: props.alignSelf,
    opacity: props.opacity,
    flex: props.flex,
    zIndex: props.zIndex,
    width: props.w,
    height: props.h || ((_getThemeProperty = (0, _theme.getThemeProperty)(theme.button, props.size)) === null || _getThemeProperty === void 0 ? void 0 : _getThemeProperty.height),
    minWidth: props.minW,
    minHeight: props.minH,
    maxWidth: props.maxW,
    maxHeight: props.maxH,
    borderStyle: props.borderStyle,
    paddingHorizontal: (_getThemeProperty2 = (0, _theme.getThemeProperty)(theme.button, props.size)) === null || _getThemeProperty2 === void 0 ? void 0 : _getThemeProperty2.paddingHorizontal,
    ...(0, _theme.createPositionStyle)(props),
    ...(0, _theme.createBorderWidthStyles)(props),
    ...(0, _theme.createShadowStyles)(props, theme),
    ...(0, _theme.createSpacingStyles)(props, theme.spacing),
    ...(0, _theme.createBorderColorStyles)(props, theme.colors),
    ...(0, _theme.createBorderRadiusStyles)(props, theme.borderRadius),
    ...(props.isRound ? {
      borderRadius: 999999
    } : {}),
    backgroundColor: buttonBgColor
  };
  if (props.variant === 'outline') {
    var _computedStyle$button, _computedStyle$button2, _computedStyle$button3, _computedStyle$button4, _computedStyle$button5, _computedStyle$button6, _computedStyle$button7, _computedStyle$button8, _computedStyle$button9, _computedStyle$button10, _computedStyle$button11, _computedStyle$button12, _computedStyle$button13, _computedStyle$button14;
    computedStyle.button = {
      ...computedStyle.button,
      borderColor: buttonTextColor,
      borderWidth: 1,
      padding: (_computedStyle$button = computedStyle.button) !== null && _computedStyle$button !== void 0 && _computedStyle$button.padding ? ((_computedStyle$button2 = computedStyle.button) === null || _computedStyle$button2 === void 0 ? void 0 : _computedStyle$button2.padding) - 1 : null,
      paddingVertical: (_computedStyle$button3 = computedStyle.button) !== null && _computedStyle$button3 !== void 0 && _computedStyle$button3.paddingVertical ? ((_computedStyle$button4 = computedStyle.button) === null || _computedStyle$button4 === void 0 ? void 0 : _computedStyle$button4.paddingVertical) - 1 : null,
      paddingHorizontal: (_computedStyle$button5 = computedStyle.button) !== null && _computedStyle$button5 !== void 0 && _computedStyle$button5.paddingHorizontal ? ((_computedStyle$button6 = computedStyle.button) === null || _computedStyle$button6 === void 0 ? void 0 : _computedStyle$button6.paddingHorizontal) - 1 : null,
      paddingLeft: (_computedStyle$button7 = computedStyle.button) !== null && _computedStyle$button7 !== void 0 && _computedStyle$button7.paddingLeft ? ((_computedStyle$button8 = computedStyle.button) === null || _computedStyle$button8 === void 0 ? void 0 : _computedStyle$button8.paddingLeft) - 1 : null,
      paddingRight: (_computedStyle$button9 = computedStyle.button) !== null && _computedStyle$button9 !== void 0 && _computedStyle$button9.paddingRight ? ((_computedStyle$button10 = computedStyle.button) === null || _computedStyle$button10 === void 0 ? void 0 : _computedStyle$button10.paddingRight) - 1 : null,
      paddingTop: (_computedStyle$button11 = computedStyle.button) !== null && _computedStyle$button11 !== void 0 && _computedStyle$button11.paddingTop ? ((_computedStyle$button12 = computedStyle.button) === null || _computedStyle$button12 === void 0 ? void 0 : _computedStyle$button12.paddingTop) - 1 : null,
      paddingBottom: (_computedStyle$button13 = computedStyle.button) !== null && _computedStyle$button13 !== void 0 && _computedStyle$button13.paddingBottom ? ((_computedStyle$button14 = computedStyle.button) === null || _computedStyle$button14 === void 0 ? void 0 : _computedStyle$button14.paddingBottom) - 1 : null
    };
  }
  computedStyle.text = {
    color: buttonTextColor,
    fontSize: (_getThemeProperty3 = (0, _theme.getThemeProperty)(theme.button, props.size)) === null || _getThemeProperty3 === void 0 ? void 0 : _getThemeProperty3.fontSize
  };
  computedStyle.loadingContainer = {
    alignItems: 'center',
    justifyContent: 'center'
  };
  computedStyle.container = {
    flexDirection: props.direction || props.flexDirection,
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
  if (props.isDisabled) {
    computedStyle.button = {
      ...computedStyle.button,
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
//# sourceMappingURL=button.style.js.map