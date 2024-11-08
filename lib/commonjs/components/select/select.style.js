"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyle = void 0;
var _reactNative = require("react-native");
var _theme = require("../../theme/theme.service");
var _utilities = require("../../utilities");
/**
 * computed style
 *
 * @param theme
 * @param props
 */
const getStyle = (theme, props) => {
  const computedStyle = {};
  computedStyle.wrapper = {
    backgroundColor: (0, _theme.getThemeColor)(theme.colors, props.bg),
    ...(0, _theme.createBorderWidthStyles)(props),
    ...(0, _theme.createBorderColorStyles)(props, theme.colors),
    ...(0, _theme.createBorderRadiusStyles)(props, theme.borderRadius),
    height: _utilities.WINDOW_HEIGHT * 0.7,
    overflow: 'hidden'
  };
  computedStyle.indicator = {
    alignSelf: 'center',
    marginVertical: 10
  };
  computedStyle.container = {
    flex: 1,
    ...(0, _theme.createSpacingStyles)(props, theme.spacing)
  };
  if (props.h) {
    computedStyle.container = {
      ...computedStyle.container,
      height: props.h
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
//# sourceMappingURL=select.style.js.map