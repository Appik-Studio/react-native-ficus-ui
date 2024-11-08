function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { getStyle } from './switch.style';
import { useTheme } from '../../theme';
import { getThemeColor } from '../../theme/theme.service';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { handleResponsiveProps } from '../../types';
const Switch = incomingProps => {
  const {
    theme,
    windowWidth
  } = useTheme();
  const props = useDefaultProps('Switch', handleResponsiveProps(incomingProps, theme, windowWidth), {
    w: 55,
    h: 30,
    onPress: () => {},
    colorScheme: 'green',
    bg: 'gray.400',
    on: false,
    thumbBg: 'white',
    activeThumbBg: 'white',
    duration: 300,
    borderRadius: 'full',
    isDisabled: false
  });
  const {
    bg,
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
    isDisabled,
    borderRadius,
    borderTopRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderLeftRadius,
    borderRightRadius,
    borderBottomRadius,
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
    onPress,
    colorScheme,
    thumbBg,
    activeThumbBg,
    duration,
    on,
    ...rest
  } = props;
  const [animXValue] = useState(new Animated.Value(on ? 1 : 0));
  const computedStyle = getStyle(theme, props);
  const endPos = w - h + 3;
  const circlePosXEnd = endPos;
  const [circlePosXStart] = useState(3);
  const prevSwitchOnRef = useRef();
  const prevSwitchOn = !!prevSwitchOnRef.current;

  /**
   *
   */
  useEffect(() => {
    const runAnimation = () => {
      const animValue = {
        fromValue: on ? 0 : 1,
        toValue: on ? 1 : 0,
        duration,
        useNativeDriver: false
      };
      Animated.timing(animXValue, animValue).start();
    };
    prevSwitchOnRef.current = on;
    if (prevSwitchOn !== on) {
      runAnimation();
    }
  }, [animXValue, prevSwitchOn, on, duration]);
  return /*#__PURE__*/React.createElement(TouchableOpacity, _extends({
    onPress: !isDisabled ? onPress : () => {},
    activeOpacity: 0.5
  }, rest), /*#__PURE__*/React.createElement(Animated.View, {
    style: [computedStyle.container, {
      backgroundColor: animXValue.interpolate({
        inputRange: [0, 1],
        outputRange: [getThemeColor(theme.colors, bg), getThemeColor(theme.colors, `${props.colorScheme}.500`)]
      })
    }]
  }, /*#__PURE__*/React.createElement(Animated.View, {
    style: [computedStyle.circle, {
      backgroundColor: animXValue.interpolate({
        inputRange: [0, 1],
        outputRange: [getThemeColor(theme.colors, thumbBg), getThemeColor(theme.colors, activeThumbBg)]
      })
    }, {
      transform: [{
        translateX: animXValue.interpolate({
          inputRange: [0, 1],
          outputRange: [circlePosXStart, circlePosXEnd]
        })
      }]
    }]
  })));
};

// Switch.defaultProps = {
//   w: 55,
//   h: 30,
//   onPress: (): void => {},
//   activeBg: 'green.600',
//   bg: 'gray.400',
//   on: false,
//   circleBg: 'white',
//   activeCircleBg: 'white',
//   duration: 300,
//   borderRadius: 'full',
//   isDisabled: false,
// };

export { Switch };
//# sourceMappingURL=switch.component.js.map