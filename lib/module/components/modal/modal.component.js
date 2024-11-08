function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from 'react';
import RNModal from 'react-native-modal';
import { SafeAreaView } from 'react-native';
import { useTheme } from '../../theme';
import { Box } from '../box/box.component';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { getStyle } from './modal.style';
import { handleResponsiveProps } from '../../types';
const Modal = incomingProps => {
  const {
    theme,
    windowWidth
  } = useTheme();
  const props = useDefaultProps('Modal', handleResponsiveProps(incomingProps, theme, windowWidth), {
    bg: 'white',
    h: '100%',
    isOpen: false,
    justifyContent: 'flex-end'
  });
  const {
    bg,
    h,
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
    borderRadius,
    borderTopRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderLeftRadius,
    borderRightRadius,
    borderBottomRadius,
    borderColor,
    borderBottomColor,
    borderLeftColor,
    borderTopColor,
    borderRightColor,
    borderWidth,
    borderLeftWidth,
    borderRightWidth,
    borderBottomWidth,
    borderEndWidth,
    borderTopWidth,
    justifyContent,
    children,
    isOpen,
    isVisible,
    ...rest
  } = props;
  const computedStyle = getStyle(theme, props);
  return /*#__PURE__*/React.createElement(RNModal, _extends({}, rest, {
    isVisible: isOpen || isVisible,
    style: computedStyle.modal
  }), /*#__PURE__*/React.createElement(Box, {
    bg: bg,
    h: h ?? '100%',
    style: computedStyle.container
  }, /*#__PURE__*/React.createElement(SafeAreaView, {
    style: computedStyle.safeView
  }, children)));
};

// Modal.defaultProps = {
//   bg: 'white',
//   h: '100%',
//   isOpen: false,
//   justifyContent: 'flex-end',
// };

export { Modal };
//# sourceMappingURL=modal.component.js.map