function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from 'react';
import color from 'color';
import { useState } from 'react';
import { View as RNView, TextInput as RNTextInput, ActivityIndicator as RNActivityIndicator, TouchableWithoutFeedback } from 'react-native';
import { getStyle } from './input.style';
import { useTheme } from '../../theme';
import { getThemeProperty, getThemeColor } from '../../theme/theme.service';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { handleResponsiveProps } from '../../types';
const Input = /*#__PURE__*/React.forwardRef((incomingProps, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const innerRef = React.useRef(null);
  React.useImperativeHandle(ref, () => innerRef.current);
  const {
    theme,
    windowWidth
  } = useTheme();
  const props = useDefaultProps('Input', handleResponsiveProps(incomingProps, theme, windowWidth), {
    px: 'lg',
    py: 'lg',
    fontSize: 'md',
    bg: 'white',
    borderWidth: 1,
    focusBorderWidth: 2,
    focusBorderStyle: 'solid',
    borderColor: 'gray.400',
    borderRadius: 'md',
    isLoading: false,
    color: 'gray.800',
    shadow: 0,
    shadowColor: 'gray.500',
    loaderSize: '3xl',
    loaderColor: 'blue.700'
  });
  const {
    h,
    w,
    m,
    mt,
    mr,
    mb,
    ml,
    ms,
    p,
    pr,
    pt,
    pb,
    pl,
    bg,
    minH,
    minW,
    color: colorProp,
    suffix,
    prefix,
    style,
    onBlur,
    isLoading,
    onFocus,
    borderRadius,
    borderTopRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderLeftRadius,
    borderRightRadius,
    borderBottomRadius,
    children,
    loaderSize,
    fontSize,
    borderColor,
    borderBottomColor,
    borderLeftColor,
    borderTopColor,
    borderRightColor,
    borderWidth,
    borderLeftWidth,
    borderRightWidth,
    borderBottomWidth,
    borderTopWidth,
    borderEndWidth,
    loaderColor,
    focusBorderColor,
    focusBorderWidth,
    shadow,
    flex,
    shadowColor,
    zIndex,
    opacity,
    placeholderTextColor,
    selectionColor,
    ...rest
  } = props;
  const computedStyle = getStyle(theme, props, {
    isFocused
  });
  const placeholderColor = placeholderTextColor ? typeof placeholderTextColor === 'string' ? color(getThemeColor(theme.colors, placeholderTextColor)).alpha(0.4).rgb().string() : placeholderTextColor : color(getThemeColor(theme.colors, colorProp)).alpha(0.4).rgb().string();

  /**
   * on focus input
   *
   * @param e
   */
  const onFocusInput = e => {
    setIsFocused(true);
    if (onFocus) {
      onFocus(e);
    }
  };

  /**
   * on blur input
   *
   * @param e
   */
  const onBlurInput = e => {
    setIsFocused(false);
    if (onBlur) {
      onBlur(e);
    }
  };
  const onPressComponent = () => {
    if (innerRef !== null && innerRef !== void 0 && innerRef.current) {
      var _innerRef$current;
      innerRef === null || innerRef === void 0 || (_innerRef$current = innerRef.current) === null || _innerRef$current === void 0 || _innerRef$current.focus();
    }
  };
  return /*#__PURE__*/React.createElement(TouchableWithoutFeedback, {
    onPress: onPressComponent
  }, /*#__PURE__*/React.createElement(RNView, {
    style: computedStyle.marginContainer
  }, /*#__PURE__*/React.createElement(RNView, {
    style: computedStyle.container
  }, prefix && /*#__PURE__*/React.createElement(RNView, {
    style: computedStyle.prefix
  }, prefix), /*#__PURE__*/React.createElement(RNTextInput, _extends({
    ref: innerRef,
    onFocus: onFocusInput,
    onBlur: onBlurInput,
    selectionColor: typeof props.selectionColor === 'string' ? getThemeColor(theme.colors, props.selectionColor) : props.selectionColor,
    placeholderTextColor: placeholderColor
  }, rest, {
    style: computedStyle.input
  })), !isLoading && suffix && /*#__PURE__*/React.createElement(RNView, {
    style: computedStyle.suffix
  }, suffix), isLoading && /*#__PURE__*/React.createElement(RNView, {
    style: computedStyle.suffix
  }, /*#__PURE__*/React.createElement(RNActivityIndicator, {
    size: getThemeProperty(theme.fontSize, loaderSize),
    color: getThemeColor(theme.colors, loaderColor)
  })))));
});

// Input.defaultProps = {
//   px: 'xl',
//   py: 'lg',
//   fontSize: 'lg',
//   borderWidth: 0,
//   bg: 'white',
//   borderColor: 'gray.400',
//   borderRadius: 'md',
//   loading: false,
//   color: 'gray.800',
//   shadow: 0,
//   shadowColor: 'gray.500',
//   loaderSize: '3xl',
//   loaderColor: 'blue.700',
// };

export { Input };
//# sourceMappingURL=input.component.js.map