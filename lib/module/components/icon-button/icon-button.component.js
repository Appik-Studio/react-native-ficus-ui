function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from 'react';
import { Button } from '../button/button.component';
import { getThemeProperty, useTheme } from '../../theme';
const IconButton = ({
  icon,
  size = 'md',
  ...incomingProps
}) => {
  var _getThemeProperty, _getThemeProperty2;
  const {
    theme
  } = useTheme();
  return /*#__PURE__*/React.createElement(Button, _extends({
    px: undefined,
    py: undefined,
    w: ((_getThemeProperty = getThemeProperty(theme.button, size)) === null || _getThemeProperty === void 0 ? void 0 : _getThemeProperty.height) - (incomingProps.variant === 'outline' ? 1 : 0),
    h: ((_getThemeProperty2 = getThemeProperty(theme.button, size)) === null || _getThemeProperty2 === void 0 ? void 0 : _getThemeProperty2.height) - (incomingProps.variant === 'outline' ? 1 : 0),
    size: size
  }, incomingProps), icon);
};
export { IconButton };
//# sourceMappingURL=icon-button.component.js.map