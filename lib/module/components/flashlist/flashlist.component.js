import * as React from 'react';
import { View } from 'react-native';
import { FlashList as ShopifyFlashList } from '@shopify/flash-list';
import { getStyle } from './flashlist.style';
import { useTheme } from '../../theme/theme.hook';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { handleResponsiveProps } from '../../types';
const FlashList = incomingProps => {
  const {
    theme,
    windowWidth
  } = useTheme();
  const props = useDefaultProps('FlashList', handleResponsiveProps(incomingProps, theme, windowWidth), {
    flex: 1
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
    ...rest
  } = props;
  const computedStyle = getStyle(theme, props);
  return /*#__PURE__*/React.createElement(View, {
    style: computedStyle.list
  }, /*#__PURE__*/React.createElement(ShopifyFlashList, rest));
};

// FlashList.defaultProps = {};

export { FlashList };
//# sourceMappingURL=flashlist.component.js.map