function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from 'react';
import { View } from 'react-native';
import { getStyle } from './pin-input.style';
import { useTheme } from '../../theme/theme.hook';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { handleResponsiveProps } from '../../types';
import { CodeField, Cursor, isLastFilledCell, MaskSymbol } from 'react-native-confirmation-code-field';
import { Center } from '../center/center.component';
import { Text } from '../text/text.component';
import { getThemeColor } from '../../theme/theme.service';
const PinInput = /*#__PURE__*/React.forwardRef((incomingProps, ref) => {
  const {
    theme,
    windowWidth
  } = useTheme();
  const props = useDefaultProps('PinInput', handleResponsiveProps(incomingProps, theme, windowWidth), {
    bg: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadow: 'none',
    position: 'relative',
    bgMode: 'cover',
    pointerEvents: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'gray.300',
    borderRadius: 'md',
    focusBorderColor: 'blue.500',
    focusBorderWidth: 2
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
    bgImg,
    bgMode,
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
    borderStyle,
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
    colorScheme,
    focusBorderColor,
    focusBorderWidth,
    focusBorderStyle,
    mask,
    placeholder,
    ...rest
  } = props;
  const computedStyle = getStyle(theme, props);
  const renderCell = ({
    index,
    symbol,
    isFocused
  }) => {
    let textChild = null;
    if (symbol && mask) {
      textChild = /*#__PURE__*/React.createElement(MaskSymbol, {
        maskSymbol: placeholder || '•',
        isLastFilledCell: isLastFilledCell({
          index,
          value: props.value
        })
      }, symbol);
    } else if (symbol && !mask) {
      textChild = symbol;
    } else if (isFocused) {
      textChild = /*#__PURE__*/React.createElement(Cursor, null);
    } else {
      textChild = '';
    }
    return /*#__PURE__*/React.createElement(View, {
      key: index
    }, /*#__PURE__*/React.createElement(Center, {
      w: 50,
      h: 50,
      borderWidth: isFocused ? focusBorderWidth : borderWidth,
      borderColor: isFocused ? props.colorScheme ? getThemeColor(theme.colors, `${props.colorScheme}.500`) : getThemeColor(theme.colors, focusBorderColor) : borderColor,
      borderStyle: isFocused ? focusBorderStyle : borderStyle,
      style: computedStyle.pininputItem
    }, /*#__PURE__*/React.createElement(Text, {
      color: "black",
      fontWeight: "bold"
    }, textChild)));
  };
  return /*#__PURE__*/React.createElement(CodeField, _extends({
    ref: ref,
    renderCell: renderCell,
    rootStyle: computedStyle.pininput
  }, rest));
});
export { PinInput };
//# sourceMappingURL=pin-input.component.js.map