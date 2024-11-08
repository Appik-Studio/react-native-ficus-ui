"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMediaQuery = void 0;
var _reactNative = require("react-native");
const useMediaQuery = (...widths) => {
  const {
    width
  } = (0, _reactNative.useWindowDimensions)();
  return widths.map(givenWidth => {
    if (givenWidth !== null && givenWidth !== void 0 && givenWidth.minWidth && givenWidth !== null && givenWidth !== void 0 && givenWidth.maxWidth) {
      return width >= (givenWidth === null || givenWidth === void 0 ? void 0 : givenWidth.minWidth) && width < (givenWidth === null || givenWidth === void 0 ? void 0 : givenWidth.maxWidth);
    }
    if (givenWidth !== null && givenWidth !== void 0 && givenWidth.minWidth && !(givenWidth !== null && givenWidth !== void 0 && givenWidth.maxWidth)) {
      return width >= (givenWidth === null || givenWidth === void 0 ? void 0 : givenWidth.minWidth);
    }
    if (!(givenWidth !== null && givenWidth !== void 0 && givenWidth.minWidth) && givenWidth !== null && givenWidth !== void 0 && givenWidth.maxWidth) {
      return width < (givenWidth === null || givenWidth === void 0 ? void 0 : givenWidth.maxWidth);
    }
    return false;
  });
};
exports.useMediaQuery = useMediaQuery;
//# sourceMappingURL=useMediaQuery.js.map