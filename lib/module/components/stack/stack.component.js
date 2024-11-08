function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from 'react';
import { View as RNView } from 'react-native';
import { getStyle } from './stack.style';
import { useTheme } from '../../theme/theme.hook';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { handleResponsiveProps } from '../../types';
const Stack = incomingProps => {
  const {
    theme,
    windowWidth
  } = useTheme();
  const props = useDefaultProps('Stack', handleResponsiveProps(incomingProps, theme, windowWidth), {
    bg: 'transparent',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    borderRadius: 'none',
    shadow: 'none',
    position: 'relative',
    pointerEvents: 'auto',
    borderStyle: 'solid',
    spacing: 0
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
    spacing,
    ...rest
  } = props;
  const computedStyle = getStyle(theme, props);
  return /*#__PURE__*/React.createElement(RNView, _extends({
    style: computedStyle.stack
  }, rest), children && Array.isArray(children) ? children.map((item, index) => {
    var _item$props;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: `stack-${index}`
    }, !!item && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RNView, {
      style: {
        zIndex: (_item$props = item.props) === null || _item$props === void 0 ? void 0 : _item$props.zIndex
      }
    }, item), index !== children.length - 1 ? /*#__PURE__*/React.createElement(RNView, {
      style: computedStyle.stackSpacing
    }) : null));
  }) : children);
};

// Stack.defaultProps = {
//   bg: 'transparent',
//   flexDirection: 'column',
//   flexWrap: 'nowrap',
//   borderRadius: 'none',
//   shadow: 'none',
//   shadowColor: 'gray900',
//   position: 'relative',
//   pointerEvents: 'auto',
//   borderStyle: 'solid',
//   spacing: 0,
// };

export { Stack };
//# sourceMappingURL=stack.component.js.map