function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { useState, useEffect } from 'react';
import { View as RNView, Pressable as RNButton } from 'react-native';
import { getStyle } from './radio.style';
import { getThemeProperty, useTheme } from '../../theme';
import { Icon } from '../icon/icon.component';
import { getIconName, getIconColor } from './radio.service';
import { RadioGroup } from './group.component';
import { Spinner } from '../spinner/spinner.component';
import { isFunction } from '../../utilities';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { Text } from '../text/text.component';
import { Box } from '../box/box.component';
import { handleResponsiveProps } from '../../types';
const Radio = incomingProps => {
  const {
    theme,
    windowWidth
  } = useTheme();
  const props = useDefaultProps('Radio', handleResponsiveProps(incomingProps, theme, windowWidth), {
    defaultChecked: false,
    colorScheme: 'blue',
    bg: 'transparent',
    p: 'none',
    color: 'black',
    borderRadius: 'full',
    isLoading: false,
    isDisabled: false,
    full: false,
    position: 'relative',
    shadowColor: 'gray800',
    shadow: 0,
    fontSize: '5xl',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    onPress: () => {},
    flexDirection: 'row',
    size: 'sm'
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
    isLoading,
    isDisabled,
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
    shadowColor,
    boxShadow,
    filter,
    full,
    alignSelf,
    icon,
    iconColor,
    colorScheme,
    onChange,
    defaultChecked,
    value,
    isChecked: checkedProp,
    onPress: onPressProp,
    size,
    ...rest
  } = props;
  const [checked, setChecked] = useState(props.isChecked ?? defaultChecked);
  const [isFocused, setIsFocused] = useState(false);
  const computedStyle = getStyle(theme, props);
  useEffect(() => {
    if ('isChecked' in props) {
      setChecked(props.isChecked);
    }
  }, [props]);

  /**
   * on press radio
   */
  const onPress = event => {
    if (isDisabled) {
      return;
    }

    // set the checked to true on press if there is no isChecked prop pass
    if (!('isChecked' in props)) {
      setChecked(true);
    }
    if (isFunction(onPressProp)) {
      onPressProp(event);
    }
    if (isFunction(onChange)) {
      onChange(value);
    }
  };

  /**
   * sets focussed to true
   *
   * @param event
   */
  const onPressIn = () => {
    setIsFocused(true);
  };

  /**
   * sets focussed to true
   *
   * @param event
   */
  const onPressOut = () => {
    setIsFocused(false);
  };
  const iconName = getIconName(checked);
  const iconColorValue = getIconColor(checked, isDisabled, iconColor, theme);
  const iconSize = getThemeProperty(theme.radio, size);

  /**
   * get icon
   * shows activity indication if loading state is true
   */
  const getIcon = () => {
    if (isLoading) {
      return /*#__PURE__*/React.createElement(Box, {
        w: iconSize,
        h: iconSize,
        alignItems: "center",
        justifyContent: "center"
      }, /*#__PURE__*/React.createElement(Spinner, {
        size: size,
        color: `${colorScheme}.600`
      }));
    }
    if (props.icon && typeof icon === 'string') {
      return /*#__PURE__*/React.createElement(Icon, {
        name: icon,
        color: iconColorValue,
        style: {
          zIndex: 2,
          position: 'relative'
        },
        fontFamily: "AntDesign",
        fontSize: iconSize
      });
    }
    if (props.icon) {
      return icon;
    }
    return /*#__PURE__*/React.createElement(Icon, {
      name: iconName,
      color: `${colorScheme}.600`,
      zIndex: 2,
      position: "relative",
      fontFamily: "MaterialIcons",
      fontSize: iconSize
    });
  };
  const iconObj = getIcon();
  const renderChildren = () => {
    if (isFunction(children)) {
      return children({
        isFocused,
        isDisabled: isDisabled ?? false,
        isChecked: checked,
        isLoading
      });
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, prefix, /*#__PURE__*/React.createElement(RNView, null, /*#__PURE__*/React.createElement(RNView, {
      style: computedStyle.icon
    }, iconObj)), children && typeof children === 'string' ? /*#__PURE__*/React.createElement(Text, {
      style: computedStyle.text,
      ml: "xs"
    }, children) : children, suffix);
  };
  return /*#__PURE__*/React.createElement(RNButton, _extends({}, rest, {
    disabled: isDisabled ?? isLoading,
    style: computedStyle.button,
    onPress: isDisabled ? undefined : onPress,
    onPressIn: isDisabled ? undefined : onPressIn,
    onPressOut: isDisabled ? undefined : onPressOut
  }), /*#__PURE__*/React.createElement(RNView, {
    style: computedStyle.container
  }, renderChildren()));
};

// Radio.defaultProps = {
// defaultChecked: false,
// colorScheme: 'blue',
// bg: 'transparent',
// p: 'none',
// color: 'white',
// borderRadius: 'full',
// isChecked: false,
// isLoading: false,
// isDisabled: false,
// full: false,
// position: 'relative',
// shadowColor: 'gray800',
// shadow: 0,
// fontSize: '5xl',
// alignItems: 'center',
// justifyContent: 'center',
// alignSelf: 'flex-start',
// onPress: () => {},
// flexDirection: 'row',
// };

// passing RadioGroup as part of Radio
Radio.Group = RadioGroup;
export { Radio };
//# sourceMappingURL=radio.component.js.map