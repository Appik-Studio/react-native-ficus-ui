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
    alignSelf: 'flex-start',
    position: props.position,
    backgroundColor: (0, _theme.getThemeColor)(theme.colors, props.bg),
    ...(0, _theme.createSpacingStyles)(props, theme.spacing)
  };
  computedStyle.text = {
    color: (0, _theme.getThemeColor)(theme.colors, props.color),
    textAlign: 'right',
    fontSize: (0, _theme.getThemeProperty)(theme.fontSize, props.fontSize)
  };
  computedStyle.container = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  };
  if (props.shadow) {
    computedStyle.button = {
      ...computedStyle.button,
      ...(theme.shadow && theme.shadow[props.shadow]),
      shadowColor: props.shadowColor ? (0, _theme.getThemeColor)(theme.colors, props.shadowColor) : 'black'
    };
  }
  if (props.full) {
    computedStyle.container = {
      ...computedStyle.container,
      width: '100%'
    };
  }
  if (props.w) {
    computedStyle.button = {
      ...computedStyle.button,
      width: props.w
    };
  }
  if (props.h) {
    computedStyle.button = {
      ...computedStyle.button,
      height: props.h
    };
  }
  if (props.top) {
    computedStyle.button = {
      ...computedStyle.button,
      top: props.top
    };
  }
  if (props.right) {
    computedStyle.button = {
      ...computedStyle.button,
      right: props.right
    };
  }
  if (props.bottom) {
    computedStyle.button = {
      ...computedStyle.button,
      bottom: props.bottom
    };
  }
  if (props.left) {
    computedStyle.button = {
      ...computedStyle.button,
      left: props.left
    };
  }
  if (props.borderColor) {
    computedStyle.button = {
      ...computedStyle.button,
      borderColor: (0, _theme.getThemeColor)(theme.colors, props.borderColor)
    };
  }
  if (props.borderWidth) {
    computedStyle.button = {
      ...computedStyle.button,
      borderWidth: props.borderWidth
    };
  }
  if (props.borderRadius) {
    computedStyle.button = {
      ...computedStyle.button,
      ...(0, _theme.createBorderRadiusStyles)(props.borderRadius, theme.borderRadius)
    };
  }
  if (props.disabled) {
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
//# sourceMappingURL=select.option.style.js.map