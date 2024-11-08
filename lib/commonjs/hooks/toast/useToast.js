"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useToast = void 0;
var _reactNativeToastMessage = _interopRequireDefault(require("react-native-toast-message"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const useToast = () => {
  const {
    show,
    hide
  } = _reactNativeToastMessage.default;
  return {
    show,
    hide,
    Toast: _reactNativeToastMessage.default
  };
};
exports.useToast = useToast;
//# sourceMappingURL=useToast.js.map