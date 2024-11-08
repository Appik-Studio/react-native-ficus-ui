"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIconName = exports.getIconColor = void 0;
var _theme = require("../../theme/theme.service");
/**
 * get icon name to be used based on checked state
 *
 * @param checked
 */
const getIconName = (checked = false) => {
  switch (true) {
    case checked:
      return 'radio-button-checked';
    default:
      return 'radio-button-unchecked';
  }
};

/**
 * get icon color based on state
 *
 * @param checked
 * @param disabled
 */
exports.getIconName = getIconName;
const getIconColor = (isChecked, isDisabled, iconColor, theme) => {
  switch (true) {
    case isDisabled:
      return (0, _theme.getThemeColor)(theme.colors, 'transparent');
    case isChecked:
      return (0, _theme.getThemeColor)(theme.colors, iconColor);
    default:
      return (0, _theme.getThemeColor)(theme.colors, 'transparent');
  }
};
exports.getIconColor = getIconColor;
//# sourceMappingURL=radio.service.js.map