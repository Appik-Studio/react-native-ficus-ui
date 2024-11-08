"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTheme = void 0;
var _react = require("react");
var _theme = require("./theme.context");
const useTheme = () => {
  const themeContext = (0, _react.useContext)(_theme.ThemeContext);
  return themeContext;
};
exports.useTheme = useTheme;
//# sourceMappingURL=theme.hook.js.map