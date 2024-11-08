"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DraggableModal = void 0;
var _reactNative = require("react-native");
var _theme = require("../../theme");
var _box = require("../box/box.component");
var _useDefaultProps = require("../../utilities/useDefaultProps");
var _draggableModal = require("./draggable-modal.style");
var _types = require("../../types");
var _bottomSheet = require("@gorhom/bottom-sheet");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DraggableModal = incomingProps => {
  const bottomSheetModalRef = (0, _react.useRef)(null);
  const {
    theme,
    windowWidth
  } = (0, _theme.useTheme)();
  const props = (0, _useDefaultProps.useDefaultProps)('DraggableModal', (0, _types.handleResponsiveProps)(incomingProps, theme, windowWidth), {
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
  const computedStyle = (0, _draggableModal.getStyle)(theme, props);
  (0, _react.useEffect)(() => {
    if (isOpen) {
      var _bottomSheetModalRef$, _bottomSheetModalRef$2;
      (_bottomSheetModalRef$ = bottomSheetModalRef.current) === null || _bottomSheetModalRef$ === void 0 || _bottomSheetModalRef$.present();
      (_bottomSheetModalRef$2 = bottomSheetModalRef.current) === null || _bottomSheetModalRef$2 === void 0 || _bottomSheetModalRef$2.snapToIndex(0);
    } else {
      var _bottomSheetModalRef$3;
      (_bottomSheetModalRef$3 = bottomSheetModalRef.current) === null || _bottomSheetModalRef$3 === void 0 || _bottomSheetModalRef$3.close();
    }
  }, [isOpen]);
  return /*#__PURE__*/_react.default.createElement(_bottomSheet.BottomSheetModal, _extends({
    ref: bottomSheetModalRef,
    onChange: index => {
      if (index === -1) {
        onClose();
      }
    },
    style: computedStyle.modal
  }, rest), /*#__PURE__*/_react.default.createElement(_bottomSheet.BottomSheetView, {
    style: computedStyle.container
  }, /*#__PURE__*/_react.default.createElement(_box.Box, {
    h: h ?? '100%'
  }, /*#__PURE__*/_react.default.createElement(_reactNative.SafeAreaView, {
    style: computedStyle.safeView
  }, children))));
};
exports.DraggableModal = DraggableModal;
//# sourceMappingURL=draggable-modal.component.js.map