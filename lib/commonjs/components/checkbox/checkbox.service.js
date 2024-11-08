"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIconName = exports.getIconColor = exports.getIcon = void 0;
var React = _interopRequireWildcard(require("react"));
var _icon = require("../icon/icon.component");
var _theme = require("../../theme/theme.service");
var _spinner = require("../spinner/spinner.component");
var _box = require("../box/box.component");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/* eslint-disable react-native/no-inline-styles */

/**
 * get icon name based on state
 */
const getIconName = (isChecked = false, isDisabled = false) => {
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

/*
 * get icon
 * shows activity indication if loading state is true
 */
exports.getIconColor = getIconColor;
const getIcon = (theme, props, isChecked) => {
  const {
    size,
    icon,
    iconColor,
    colorScheme,
    isDisabled
  } = props;
  const iconName = getIconName(isChecked, isDisabled ?? false);
  const iconColorValue = getIconColor(isChecked, isDisabled, iconColor, theme);
  const iconSize = (0, _theme.getThemeProperty)(theme.checkbox, size);
  if (props.isLoading) {
    return /*#__PURE__*/React.createElement(_box.Box, {
      w: iconSize,
      h: iconSize,
      alignItems: "center",
      justifyContent: "center"
    }, /*#__PURE__*/React.createElement(_spinner.Spinner, {
      size: size,
      color: `${colorScheme}.600`
    }));
  }
  if (props.icon && typeof icon === 'string') {
    return /*#__PURE__*/React.createElement(_icon.Icon, {
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
  return /*#__PURE__*/React.createElement(_icon.Icon, {
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
exports.getIcon = getIcon;
//# sourceMappingURL=checkbox.service.js.map