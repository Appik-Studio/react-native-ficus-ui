/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { Icon } from '../icon/icon.component';
import { getThemeColor, getThemeProperty } from '../../theme/theme.service';
import { Spinner } from '../spinner/spinner.component';
import { Box } from '../box/box.component';

/**
 * get icon name based on state
 */
export const getIconName = (isChecked = false, isDisabled = false) => {
  switch (true) {
    case isDisabled:
      return 'indeterminate-check-box';
    case isChecked:
      return 'check-box';
    default:
      return 'check-box-outline-blank';
  }
};

/**
 * get icon name
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

/*
 * get icon
 * shows activity indication if loading state is true
 */
export const getIcon = (theme, props, isChecked) => {
  const {
    size,
    icon,
    iconColor,
    colorScheme,
    isDisabled
  } = props;
  const iconName = getIconName(isChecked, isDisabled ?? false);
  const iconColorValue = getIconColor(isChecked, isDisabled, iconColor, theme);
  const iconSize = getThemeProperty(theme.checkbox, size);
  if (props.isLoading) {
    return /*#__PURE__*/React.createElement(Box, {
      w: iconSize,
      h: iconSize,
      alignItems: "center",
      justifyContent: "center"
    }, /*#__PURE__*/React.createElement(Spinner, {
      size: size,
      color: `${colorScheme}.600`
    }));
  }
  if (props.icon && typeof icon === 'string') {
    return /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      color: iconColorValue,
      style: {
        zIndex: 2,
        position: 'relative'
      },
      fontFamily: "AntDesign",
      fontSize: iconSize
    });
  }
  if (props.icon) {
    return icon;
  }
  return /*#__PURE__*/React.createElement(Icon, {
    name: iconName,
    color: `${colorScheme}.600`,
    style: {
      zIndex: 2,
      position: 'relative'
    },
    fontFamily: "MaterialIcons",
    fontSize: iconSize
  });
};
//# sourceMappingURL=checkbox.service.js.map