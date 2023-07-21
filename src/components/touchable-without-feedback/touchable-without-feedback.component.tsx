import * as React from 'react';
import { TouchableWithoutFeedback as RNTouchableWithoutFeedback } from 'react-native';

import { getStyle } from './touchable-without-feedback.style';
import type { TouchableWithoutFeedbackProps } from './touchable-without-feedback.type';
import { useTheme } from '../../theme/theme.hook';
import { useDefaultProps } from '../../utilities/useDefaultProps';

const TouchableWithoutFeedback: React.FunctionComponent<TouchableWithoutFeedbackProps> = (
  incomingProps
) => {
  const props = useDefaultProps('TouchableWithoutFeedback', incomingProps, {});

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
    opacity,
    overflow,
    top,
    left,
    right,
    bottom,
    zIndex,
    ...rest
  } = props;
  const { theme } = useTheme();
  const computedStyle = getStyle(theme, props);

  return (
    <RNTouchableWithoutFeedback style={computedStyle.touchable} {...rest}>
      {children}
    </RNTouchableWithoutFeedback>
  );
};

// TouchableWithoutFeedback.defaultProps = {};

export { TouchableWithoutFeedback };