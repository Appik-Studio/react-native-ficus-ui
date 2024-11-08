function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from 'react';
import { View as RNView } from 'react-native';
import { getStyle } from './icon.style';
import { getIconSet } from './icon.service';
import { useTheme } from '../../theme';
import { getThemeProperty, getThemeColor } from '../../theme/theme.service';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { handleResponsiveProps } from '../../types';
const Icon = incomingProps => {
  const {
    theme,
    windowWidth
  } = useTheme();
  const props = useDefaultProps('Icon', handleResponsiveProps(incomingProps, theme, windowWidth), {
    color: 'gray.500',
    fontSize: 'md',
    fontFamily: 'AntDesign'
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
    position,
    left,
    top,
    bottom,
    right,
    name,
    color,
    maxH,
    maxW,
    minW,
    minH,
    borderRadius,
    borderTopRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderLeftRadius,
    borderRightRadius,
    borderBottomRadius,
    shadow,
    shadowColor,
    boxShadow,
    filter,
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
    fontFamily,
    fontSize,
    opacity,
    zIndex,
    style,
    ...rest
  } = props;
  const computedStyle = getStyle(theme, props);
  const IconComponent = getIconSet(fontFamily);
  return /*#__PURE__*/React.createElement(RNView, _extends({
    style: computedStyle.container
  }, rest), /*#__PURE__*/React.createElement(IconComponent, {
    color: getThemeColor(theme.colors, color),
    size: getThemeProperty(theme.fontSize, fontSize),
    name: name,
    style: computedStyle.icon
  }));
};

// Icon.defaultProps = {
//   color: 'gray.500',
//   fontSize: 'md',
//   fontFamily: 'AntDesign',
// };

export { Icon };
//# sourceMappingURL=icon.component.js.map