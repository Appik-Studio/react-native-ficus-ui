function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from 'react';
import { Text as RNText } from 'react-native';
import { getStyle } from './text.style';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { useTheme } from '../../theme/theme.hook';
import { handleResponsiveProps } from '../../types';
const Text = incomingProps => {
  const {
    theme,
    windowWidth
  } = useTheme();
  const props = useDefaultProps('Text', handleResponsiveProps(incomingProps, theme, windowWidth), {
    color: 'gray.900',
    textAlign: 'auto',
    textTransform: 'none',
    fontSize: 'md',
    overflow: 'hidden',
    textAlignVertical: 'center'
  });
  const {
    w,
    h,
    bg,
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
    flex,
    minH,
    minW,
    color,
    fontSize,
    children,
    textAlign,
    fontWeight,
    lineHeight,
    letterSpacing,
    textTransform,
    textDecorColor,
    textDecorStyle,
    fontStyle,
    textDecorLine,
    textAlignVertical,
    overflow,
    opacity,
    zIndex,
    style,
    ...rest
  } = props;
  const computedStyle = getStyle(theme, props);
  return /*#__PURE__*/React.createElement(RNText, _extends({
    style: computedStyle.text
  }, rest), children);
};

// Text.defaultProps = {
//   color: 'gray.900',
//   textAlign: 'auto',
//   textTransform: 'none',
//   fontSize: 'md',
//   overflow: 'hidden',
// };

export { Text };
//# sourceMappingURL=text.component.js.map