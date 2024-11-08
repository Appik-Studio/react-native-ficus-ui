import * as React from 'react';
import { TouchableWithoutFeedback as RNTouchableWithoutFeedback, View } from 'react-native';
import { getStyle } from './touchable-without-feedback.style';
import { useTheme } from '../../theme/theme.hook';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { handleResponsiveProps } from '../../types';
const TouchableWithoutFeedback = incomingProps => {
  const {
    theme,
    windowWidth
  } = useTheme();
  const props = useDefaultProps('TouchableWithoutFeedback', handleResponsiveProps(incomingProps, theme, windowWidth), {});
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
    alignItems,
    align,
    justifyContent,
    justify,
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
    flexWrap,
    wrap,
    flexGrow,
    grow,
    flexBasis,
    basis,
    flexShrink,
    shrink,
    shadow,
    shadowColor,
    boxShadow,
    filter,
    opacity,
    overflow,
    top,
    left,
    right,
    bottom,
    zIndex,
    ...rest
  } = props;
  const computedStyle = getStyle(theme, props);
  return /*#__PURE__*/React.createElement(RNTouchableWithoutFeedback, rest, /*#__PURE__*/React.createElement(View, {
    style: computedStyle.touchable
  }, children));
};

// TouchableWithoutFeedback.defaultProps = {};

export { TouchableWithoutFeedback };
//# sourceMappingURL=touchable-without-feedback.component.js.map