"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioGroup = void 0;
var _react = _interopRequireWildcard(require("react"));
var React = _react;
var _box = require("../box/box.component");
var _useDefaultProps = require("../../utilities/useDefaultProps");
var _types = require("../../types");
var _theme = require("../../theme");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const RadioGroup = incomingProps => {
  const {
    theme,
    windowWidth
  } = (0, _theme.useTheme)();
  const props = (0, _useDefaultProps.useDefaultProps)('RadioGroup', (0, _types.handleResponsiveProps)(incomingProps, theme, windowWidth), {});
  const [value, setValue] = (0, _react.useState)(props.value ?? props.defaultValue ?? null);
  const {
    children,
    onChange: onChangeProp,
    value: propsValue,
    colorScheme,
    ...rest
  } = props;

  /**
   * checks if checked value is already in the state or not,
   * if it, remove it else add it
   *
   * @param value
   */
  const onChange = optionValue => {
    if (!('value' in props)) {
      setValue(optionValue);
    }
    if (onChangeProp) {
      onChangeProp(optionValue);
    }
  };

  /**
   * clones the children and add isChecked, onChange prop
   */
  const renderChildren = () => {
    return React.Children.map(children, child => {
      return /*#__PURE__*/React.cloneElement(child, {
        onChange,
        isChecked: value === child.props.value,
        ...(colorScheme ? {
          colorScheme
        } : {})
      });
    });
  };
  return /*#__PURE__*/React.createElement(_box.Box, rest, renderChildren());
};
exports.RadioGroup = RadioGroup;
//# sourceMappingURL=group.component.js.map