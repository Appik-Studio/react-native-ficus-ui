"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Avatar = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _avatar = require("./avatar.style");
var _theme = require("../../theme/theme.hook");
var _useDefaultProps = require("../../utilities/useDefaultProps");
var _types = require("../../types");
var _icon = require("../icon/icon.component");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Avatar = incomingProps => {
  const [isImageValid, setIsImageValid] = (0, _react.useState)(false);
  const {
    theme,
    windowWidth
  } = (0, _theme.useTheme)();
  const props = (0, _useDefaultProps.useDefaultProps)('Avatar', (0, _types.handleResponsiveProps)(incomingProps, theme, windowWidth), {
    size: 'md',
    borderRadius: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
    overflow: 'visible',
    getInitials: name => {
      const nameParts = (`${name}` || '').split(' ');
      return name ? nameParts.map(part => part.charAt(0)).join('') : '';
    }
  });
  const {
    bg,
    h,
    w,
    m,
    mt,
    mr,
    mb,
    ml,
    ms,
    p,
    pr,
    pt,
    pb,
    pl,
    minH,
    minW,
    maxW,
    maxH,
    position,
    style,
    flexDirection,
    direction,
    borderRadius,
    borderTopRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderLeftRadius,
    borderRightRadius,
    borderBottomRadius,
    alignItems,
    align,
    justifyContent,
    justify,
    borderColor,
    borderBottomColor,
    borderLeftColor,
    borderTopColor,
    borderRightColor,
    borderWidth,
    borderLeftWidth,
    borderRightWidth,
    borderBottomWidth,
    borderTopWidth,
    borderEndWidth,
    flexWrap,
    wrap,
    flexGrow,
    grow,
    flexBasis,
    basis,
    flexShrink,
    shrink,
    shadow,
    shadowColor,
    boxShadow,
    filter,
    opacity,
    overflow,
    top,
    left,
    right,
    bottom,
    zIndex,
    elevation,
    colorScheme,
    size,
    name,
    getInitials,
    children,
    icon,
    ...rest
  } = props;
  const computedStyle = (0, _avatar.getStyle)(theme, props);
  (0, _react.useEffect)(() => {
    const checkImageUrl = async () => {
      if (props.src) {
        try {
          const response = await fetch(props.src);
          setIsImageValid(response.ok);
        } catch (error) {
          setIsImageValid(false);
        }
      }
    };
    checkImageUrl();
  }, [props.src]);
  if (!isImageValid) {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({
      style: {
        ...computedStyle.avatar,
        ...computedStyle.avatarImage
      }
    }, rest), getInitials(name) ? /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: computedStyle.text
    }, getInitials(name)) : icon && typeof icon === 'string' ? /*#__PURE__*/_react.default.createElement(_icon.Icon, {
      name: icon,
      fontSize: computedStyle.text.fontSize,
      fontFamily: computedStyle.text.fontFamily,
      color: computedStyle.text.color
    }) : icon ? icon : /*#__PURE__*/_react.default.createElement(_icon.Icon, {
      name: "user",
      fontSize: computedStyle.text.fontSize,
      fontFamily: computedStyle.text.fontFamily,
      color: computedStyle.text.color
    }), _react.default.Children.map(children, child => {
      if (child.type.name === 'AvatarBadge') {
        return /*#__PURE__*/_react.default.cloneElement(child, computedStyle.avatarBadge);
      }

      // If the child is not AvatarBadge, return it unmodified
      return child;
    }));
  }
  return /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, _extends({
    style: computedStyle.avatar,
    imageStyle: computedStyle.avatarImage,
    alt: name,
    source: props.src
  }, rest), _react.default.Children.map(children, child => {
    if (child.type.name === 'AvatarBadge') {
      return /*#__PURE__*/_react.default.cloneElement(child, computedStyle.avatarBadge);
    }

    // If the child is not AvatarBadge, return it unmodified
    return child;
  }));
};
exports.Avatar = Avatar;
//# sourceMappingURL=avatar.component.js.map