function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from 'react';
import { Box } from '../box/box.component';
import { Icon } from '../icon/icon.component';
import { Text } from '../text/text.component';
import { Button } from '../button/button.component';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { useTheme } from '../../theme';
import { handleResponsiveProps } from '../../types';
const Option = incomingProps => {
  const {
    theme,
    windowWidth
  } = useTheme();
  const props = useDefaultProps('Option', handleResponsiveProps(incomingProps, theme, windowWidth), {
    onSelect: () => {},
    borderRadius: 0,
    bg: 'white',
    px: 'xl',
    py: 'xl',
    colorScheme: 'transparent',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    center: false,
    prefix: /*#__PURE__*/React.createElement(Icon, {
      name: "checkmark-circle-outline",
      fontFamily: "Ionicons",
      fontSize: "2xl",
      color: "green.600",
      mr: "md",
      alignSelf: "center"
    })
  });
  const {
    children,
    value,
    prefix,
    onPress: onPressProp,
    onSelect,
    selectedValue,
    ...rest
  } = props;
  const isSelected = Array.isArray(selectedValue) ? selectedValue.includes(value) : selectedValue === value;

  /**
   * on press select option
   *
   * @param e
   */
  const onPress = event => {
    if (onSelect) {
      onSelect(value);
    }
    if (onPressProp) {
      onPressProp(event);
    }
  };
  const renderChildren = () => {
    if (typeof children === 'string') {
      return /*#__PURE__*/React.createElement(Text, null, children);
    }
    return children;
  };
  return /*#__PURE__*/React.createElement(Button, _extends({
    onPress: onPress
  }, rest), /*#__PURE__*/React.createElement(Box, {
    flexDirection: "row",
    alignItems: "center"
  }, prefix && /*#__PURE__*/React.createElement(Box, {
    minW: "8%",
    opacity: isSelected ? 1 : 0
  }, prefix), /*#__PURE__*/React.createElement(Box, {
    flex: 1,
    bg: "transparent"
  }, renderChildren())));
};

// Option.defaultProps = {
//   onSelect: () => {},
//   borderRadius: 0,
//   bg: 'white',
//   p: 0,
//   color: 'black',
//   alignItems: 'flex-start',
//   justifyContent: 'flex-start',
//   center: false,
// };

export { Option };
//# sourceMappingURL=select.option.component.js.map