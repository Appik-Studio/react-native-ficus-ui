function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from 'react';
import { View as RNView, Animated as RNAnimated, Pressable as RNButton, ActivityIndicator as RNActivityIndicator, Platform } from 'react-native';
import { getStyle } from './button.style';
import { useTheme } from '../../theme';
import { getThemeProperty, getThemeColor } from '../../theme/theme.service';
import { getUnderlayColor, getRippleColor } from './button.service';
import { Text } from '../text/text.component';
import { handleResponsiveProps, textProps } from '../../types';
import { getSpecificProps } from '../../utilities';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { Icon } from '../icon/icon.component';
const Button = incomingProps => {
  var _getThemeProperty, _computedStyle$text;
  const {
    theme,
    windowWidth
  } = useTheme();
  const props = useDefaultProps('Button', handleResponsiveProps(incomingProps, theme, windowWidth), {
    colorScheme: 'gray',
    size: 'md',
    borderRadius: 'lg',
    isLoading: false,
    isDisabled: false,
    full: false,
    position: 'relative',
    shadowColor: 'gray.800',
    shadow: 0,
    rippleColor: 'white',
    ripple: true,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    onPress: () => {},
    flexDirection: 'row',
    fontWeight: 'bold',
    variant: 'solid'
  });
  const {
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
    h,
    w,
    bg,
    minW,
    minH,
    suffix,
    style,
    fontSize,
    fontWeight,
    prefix,
    borderRadius,
    borderTopRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderLeftRadius,
    borderRightRadius,
    borderBottomRadius,
    color: colorProp,
    colorScheme,
    isLoading,
    isDisabled,
    loaderColor,
    loaderSize,
    children,
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
    shadow,
    rippleColor,
    shadowColor,
    onPress,
    full,
    ripple,
    alignSelf,
    size,
    isRound,
    ...rest
  } = props;
  const computedStyle = getStyle(theme, props);
  const underlayColor = getUnderlayColor(theme, props);
  const calculatedRippleColor = getRippleColor(theme, props);

  /**
   * renders children based on type
   */
  const renderChildren = () => {
    if (typeof children === 'string') {
      return /*#__PURE__*/React.createElement(Text, _extends({}, getSpecificProps(props, ...textProps), {
        style: computedStyle.text
      }, props.variant === 'link' ? {
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        textDecorationColor: computedStyle.text.color
      } : {}), children);
    }

    // Check if children is an Icon component
    if ( /*#__PURE__*/React.isValidElement(children) && children.type === Icon) {
      // Clone the Icon element and add the style prop to it
      return /*#__PURE__*/React.cloneElement(children, {
        color: computedStyle.text.color,
        fontSize: computedStyle.text.fontSize
      });
    }
    return children;
  };
  return /*#__PURE__*/React.createElement(RNButton, _extends({}, rest, {
    onPress: isDisabled || isLoading ? undefined : onPress,
    style: ({
      pressed
    }) => [computedStyle.button, pressed && !isDisabled && !isLoading && {
      backgroundColor: underlayColor
    }],
    android_ripple: !ripple ? {
      color: calculatedRippleColor
    } : null
  }), isLoading ? /*#__PURE__*/React.createElement(RNView, {
    style: computedStyle.container
  }, /*#__PURE__*/React.createElement(RNView, {
    style: computedStyle.loadingContainer
  }, /*#__PURE__*/React.createElement(RNActivityIndicator, {
    size: loaderSize || ((_getThemeProperty = getThemeProperty(theme.button, size)) === null || _getThemeProperty === void 0 ? void 0 : _getThemeProperty.fontSize) + (Platform.OS === 'ios' ? 3 : 5),
    color: loaderColor ? getThemeColor(theme.colors, loaderColor) : computedStyle === null || computedStyle === void 0 || (_computedStyle$text = computedStyle.text) === null || _computedStyle$text === void 0 ? void 0 : _computedStyle$text.color
  }))) : /*#__PURE__*/React.createElement(RNAnimated.View, {
    style: computedStyle.container
  }, /*#__PURE__*/React.createElement(React.Fragment, null, prefix, renderChildren(), suffix)));
};
export { Button };
//# sourceMappingURL=button.component.js.map