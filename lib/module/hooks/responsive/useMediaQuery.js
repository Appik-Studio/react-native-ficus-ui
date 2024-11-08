import { useWindowDimensions } from 'react-native';
const useMediaQuery = (...widths) => {
  const {
    width
  } = useWindowDimensions();
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
export { useMediaQuery };
//# sourceMappingURL=useMediaQuery.js.map