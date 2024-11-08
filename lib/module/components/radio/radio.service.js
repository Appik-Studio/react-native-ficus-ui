import { getThemeColor } from '../../theme/theme.service';

/**
 * get icon name to be used based on checked state
 *
 * @param checked
 */
export const getIconName = (checked = false) => {
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
export const getIconColor = (isChecked, isDisabled, iconColor, theme) => {
  switch (true) {
    case isDisabled:
      return getThemeColor(theme.colors, 'transparent');
    case isChecked:
      return getThemeColor(theme.colors, iconColor);
    default:
      return getThemeColor(theme.colors, 'transparent');
  }
};
//# sourceMappingURL=radio.service.js.map