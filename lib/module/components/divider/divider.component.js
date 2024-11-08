function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from 'react';
import { View as RNView } from 'react-native';
import { getStyle } from './divider.style';
import { useTheme } from '../../theme/theme.hook';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { handleResponsiveProps } from '../../types';
const Divider = incomingProps => {
  const {
    theme,
    windowWidth
  } = useTheme();
  const props = useDefaultProps('Divider', handleResponsiveProps(incomingProps, theme, windowWidth), {
    flexDirection: 'column',
    flexWrap: 'nowrap',
    borderRadius: 'none',
    shadow: 'none',
    position: 'relative',
    pointerEvents: 'auto',
    borderStyle: 'solid',
    colorScheme: 'gray',
    orientation: 'horizontal',
    size: 1
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
  return /*#__PURE__*/React.createElement(RNView, _extends({
    style: computedStyle.divider
  }, rest));
};

// Divider.defaultProps = {
// flexDirection: 'column',
// flexWrap: 'nowrap',
// borderRadius: 'none',
// shadow: 'none',
// position: 'relative',
// pointerEvents: 'auto',
// borderStyle: 'solid',
// h: 2,
// colorScheme: 'gray',
// };

export { Divider };
//# sourceMappingURL=divider.component.js.map