"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AvatarGroup = void 0;
var React = _interopRequireWildcard(require("react"));
var _useDefaultProps = require("../../utilities/useDefaultProps");
var _types = require("../../types");
var _theme = require("../../theme");
var _stack = require("../stack/stack.component");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const AvatarGroup = incomingProps => {
  const {
    theme,
    windowWidth
  } = (0, _theme.useTheme)();
  const props = (0, _useDefaultProps.useDefaultProps)('AvatarGroup', (0, _types.handleResponsiveProps)(incomingProps, theme, windowWidth), {
    spacing: 0,
    flexDirection: 'row',
    size: 'md'
  });
  const {
    children,
    ...rest
  } = props;
  const renderChildren = () => {
    const totalChildren = React.Children.count(children);
    const otherItemsCount = totalChildren - props.max;
    return React.Children.map(children, (child, index) => {
      const reverseIndex = totalChildren - index;
      if (index > props.max) {
        return /*#__PURE__*/React.createElement(React.Fragment, null);
      }
      if (index === props.max) {
        return /*#__PURE__*/React.cloneElement(child, {
          zIndex: reverseIndex,
          elevation: reverseIndex,
          bg: 'gray.200',
          color: 'gray.800',
          size: child.props.size ? child.props.size : props.size,
          ml: index > 0 ? '-lg' : 0,
          borderWidth: 2,
          borderColor: 'white',
          position: 'relative',
          src: '',
          name: '',
          getInitials: () => `+${otherItemsCount > 99 ? 99 : otherItemsCount}`
        });
      }
      return /*#__PURE__*/React.cloneElement(child, {
        zIndex: reverseIndex,
        elevation: reverseIndex,
        size: child.props.size ? child.props.size : props.size,
        ml: index > 0 ? '-lg' : 0,
        borderWidth: 2,
        borderColor: 'white',
        position: 'relative'
      });
    });
  };
  return /*#__PURE__*/React.createElement(_stack.Stack, rest, renderChildren());
};
exports.AvatarGroup = AvatarGroup;
//# sourceMappingURL=group.component.js.map