function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from 'react';
import RNSlider from '@react-native-community/slider';
import { getStyle } from './slider.style';
import { useTheme } from '../../theme/theme.hook';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { handleResponsiveProps } from '../../types';
import { getThemeColor } from '../../theme/theme.service';
const Slider = incomingProps => {
  const {
    theme,
    windowWidth
  } = useTheme();
  const props = useDefaultProps('Slider', handleResponsiveProps(incomingProps, theme, windowWidth), {
    flexDirection: 'column',
    flexWrap: 'nowrap',
    min: 0,
    max: 1,
    filledTrackColor: 'gray.200',
    colorScheme: 'blue'
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
    minH,
    minW,
    maxW,
    maxH,
    position,
    style,
    flexDirection,
    direction,
    children,
    bgImg,
    bgMode,
    alignItems,
    align,
    justifyContent,
    justify,
    flexWrap,
    wrap,
    flexGrow,
    grow,
    flexBasis,
    basis,
    flexShrink,
    shrink,
    opacity,
    top,
    left,
    right,
    bottom,
    zIndex,
    min,
    max,
    colorScheme,
    filledTrackColor,
    defaultValue,
    ...rest
  } = props;
  const computedStyle = getStyle(theme, props);
  return /*#__PURE__*/React.createElement(RNSlider, _extends({
    minimumValue: min,
    maximumValue: max,
    value: defaultValue,
    minimumTrackTintColor: getThemeColor(theme.colors, `${colorScheme}.500`),
    maximumTrackTintColor: getThemeColor(theme.colors, filledTrackColor),
    thumbTintColor: "white",
    style: computedStyle.slider
  }, rest));
};
export { Slider };
//# sourceMappingURL=slider.component.js.map