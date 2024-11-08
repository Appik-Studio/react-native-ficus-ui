function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from 'react';
import { useState } from 'react';
import { View as RNView, TextInput as RNTextInput, TouchableWithoutFeedback } from 'react-native';
import { getStyle } from './input.style';
import { useTheme } from '../../theme';
import { useDefaultProps } from '../../utilities/useDefaultProps';
const Textarea = /*#__PURE__*/React.forwardRef((incomingProps, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const innerRef = React.useRef(null);
  React.useImperativeHandle(ref, () => innerRef.current);
  const props = useDefaultProps('Textarea', incomingProps, {
    minH: 100,
    p: 'lg',
    bg: 'white',
    borderColor: 'gray.400',
    borderWidth: 1,
    focusBorderWidth: 2,
    focusBorderStyle: 'solid',
    borderRadius: 'md',
    multiline: true,
    textAlignVertical: 'top',
    color: 'gray.800'
  });
  const {
    h,
    w,
    m,
    minH,
    minW,
    suffix,
    prefix,
    style,
    onBlur,
    onFocus,
    children,
    focusBorderColor,
    focusBorderWidth,
    borderWidth,
    borderRadius,
    ...rest
  } = props;
  const {
    theme
  } = useTheme();
  const computedStyle = getStyle(theme, props, {
    isFocused,
    isTextarea: true
  });

  /**
   * on focus input
   */
  const onFocusInput = e => {
    setIsFocused(true);
    if (onFocus) {
      onFocus(e);
    }
  };

  /**
   * on blur input
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
    style: computedStyle.container
  }, /*#__PURE__*/React.createElement(RNTextInput, _extends({
    ref: innerRef,
    onFocus: e => onFocusInput(e),
    onBlur: e => onBlurInput(e),
    style: computedStyle.input
  }, rest))));
});

// Textarea.defaultProps = {
//   minH: 100,
//   p: 'lg',
//   borderColor: 'gray.500',
//   borderWidth: 1,
// };

export { Textarea };
//# sourceMappingURL=textarea.component.js.map