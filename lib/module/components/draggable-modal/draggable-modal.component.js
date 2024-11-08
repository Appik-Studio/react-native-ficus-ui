function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { SafeAreaView } from 'react-native';
import { useTheme } from '../../theme';
import { Box } from '../box/box.component';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { getStyle } from './draggable-modal.style';
import { handleResponsiveProps } from '../../types';
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import React, { useRef, useEffect } from 'react';
const DraggableModal = incomingProps => {
  const bottomSheetModalRef = useRef(null);
  const {
    theme,
    windowWidth
  } = useTheme();
  const props = useDefaultProps('DraggableModal', handleResponsiveProps(incomingProps, theme, windowWidth), {
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
    onClose,
    ...rest
  } = props;
  const computedStyle = getStyle(theme, props);
  useEffect(() => {
    if (isOpen) {
      var _bottomSheetModalRef$, _bottomSheetModalRef$2;
      (_bottomSheetModalRef$ = bottomSheetModalRef.current) === null || _bottomSheetModalRef$ === void 0 || _bottomSheetModalRef$.present();
      (_bottomSheetModalRef$2 = bottomSheetModalRef.current) === null || _bottomSheetModalRef$2 === void 0 || _bottomSheetModalRef$2.snapToIndex(0);
    } else {
      var _bottomSheetModalRef$3;
      (_bottomSheetModalRef$3 = bottomSheetModalRef.current) === null || _bottomSheetModalRef$3 === void 0 || _bottomSheetModalRef$3.close();
    }
  }, [isOpen]);
  return /*#__PURE__*/React.createElement(BottomSheetModal, _extends({
    ref: bottomSheetModalRef,
    onChange: index => {
      if (index === -1) {
        onClose();
      }
    },
    style: computedStyle.modal
  }, rest), /*#__PURE__*/React.createElement(BottomSheetView, {
    style: computedStyle.container
  }, /*#__PURE__*/React.createElement(Box, {
    h: h ?? '100%'
  }, /*#__PURE__*/React.createElement(SafeAreaView, {
    style: computedStyle.safeView
  }, children))));
};
export { DraggableModal };
//# sourceMappingURL=draggable-modal.component.js.map