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
  computedStyle.container = {
    flexDirection: 'row',
    height: props.h,
    width: props.w,
    alignItems: 'center',
    ...(0, _theme.createSpacingStyles)(props, theme.spacing),
    ...(0, _theme.createBorderRadiusStyles)(props, theme.borderRadius)
  };
  computedStyle.circle = {
    // @ts-ignore
    height: props.h - 6,
    // @ts-ignore
    width: props.h - 6,
    // @ts-ignore
    borderRadius: props.h - 6
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
//# sourceMappingURL=switch.style.js.map