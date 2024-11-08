"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radio = void 0;
var _react = _interopRequireWildcard(require("react"));
var React = _react;
var _reactNative = require("react-native");
var _radio = require("./radio.style");
var _theme = require("../../theme");
var _icon = require("../icon/icon.component");
var _radio2 = require("./radio.service");
var _group = require("./group.component");
var _spinner = require("../spinner/spinner.component");
var _utilities = require("../../utilities");
var _useDefaultProps = require("../../utilities/useDefaultProps");
var _text = require("../text/text.component");
var _box = require("../box/box.component");
var _types = require("../../types");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); } /* eslint-disable react-native/no-inline-styles */
const Radio = incomingProps => {
  const {
    theme,
    windowWidth
  } = (0, _theme.useTheme)();
  const props = (0, _useDefaultProps.useDefaultProps)('Radio', (0, _types.handleResponsiveProps)(incomingProps, theme, windowWidth), {
    defaultChecked: false,
    colorScheme: 'blue',
    bg: 'transparent',
    p: 'none',
    color: 'black',
    borderRadius: 'full',
    isLoading: false,
    isDisabled: false,
    full: false,
    position: 'relative',
    shadowColor: 'gray800',
    shadow: 0,
    fontSize: '5xl',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    onPress: () => {},
    flexDirection: 'row',
    size: 'sm'
  });
  const {
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
    h,
    w,
    bg,
    minW,
    minH,
    suffix,
    style,
    fontSize,
    fontWeight,
    prefix,
    borderRadius,
    borderTopRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderLeftRadius,
    borderRightRadius,
    borderBottomRadius,
    color: colorProp,
    isLoading,
    isDisabled,
    children,
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
    shadow,
    shadowColor,
    boxShadow,
    filter,
    full,
    alignSelf,
    icon,
    iconColor,
    colorScheme,
    onChange,
    defaultChecked,
    value,
    isChecked: checkedProp,
    onPress: onPressProp,
    size,
    ...rest
  } = props;
  const [checked, setChecked] = (0, _react.useState)(props.isChecked ?? defaultChecked);
  const [isFocused, setIsFocused] = (0, _react.useState)(false);
  const computedStyle = (0, _radio.getStyle)(theme, props);
  (0, _react.useEffect)(() => {
    if ('isChecked' in props) {
      setChecked(props.isChecked);
    }
  }, [props]);

  /**
   * on press radio
   */
  const onPress = event => {
    if (isDisabled) {
      return;
    }

    // set the checked to true on press if there is no isChecked prop pass
    if (!('isChecked' in props)) {
      setChecked(true);
    }
    if ((0, _utilities.isFunction)(onPressProp)) {
      onPressProp(event);
    }
    if ((0, _utilities.isFunction)(onChange)) {
      onChange(value);
    }
  };

  /**
   * sets focussed to true
   *
   * @param event
   */
  const onPressIn = () => {
    setIsFocused(true);
  };

  /**
   * sets focussed to true
   *
   * @param event
   */
  const onPressOut = () => {
    setIsFocused(false);
  };
  const iconName = (0, _radio2.getIconName)(checked);
  const iconColorValue = (0, _radio2.getIconColor)(checked, isDisabled, iconColor, theme);
  const iconSize = (0, _theme.getThemeProperty)(theme.radio, size);

  /**
   * get icon
   * shows activity indication if loading state is true
   */
  const getIcon = () => {
    if (isLoading) {
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
      zIndex: 2,
      position: "relative",
      fontFamily: "MaterialIcons",
      fontSize: iconSize
    });
  };
  const iconObj = getIcon();
  const renderChildren = () => {
    if ((0, _utilities.isFunction)(children)) {
      return children({
        isFocused,
        isDisabled: isDisabled ?? false,
        isChecked: checked,
        isLoading
      });
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, prefix, /*#__PURE__*/React.createElement(_reactNative.View, null, /*#__PURE__*/React.createElement(_reactNative.View, {
      style: computedStyle.icon
    }, iconObj)), children && typeof children === 'string' ? /*#__PURE__*/React.createElement(_text.Text, {
      style: computedStyle.text,
      ml: "xs"
    }, children) : children, suffix);
  };
  return /*#__PURE__*/React.createElement(_reactNative.Pressable, _extends({}, rest, {
    disabled: isDisabled ?? isLoading,
    style: computedStyle.button,
    onPress: isDisabled ? undefined : onPress,
    onPressIn: isDisabled ? undefined : onPressIn,
    onPressOut: isDisabled ? undefined : onPressOut
  }), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: computedStyle.container
  }, renderChildren()));
};

// Radio.defaultProps = {
// defaultChecked: false,
// colorScheme: 'blue',
// bg: 'transparent',
// p: 'none',
// color: 'white',
// borderRadius: 'full',
// isChecked: false,
// isLoading: false,
// isDisabled: false,
// full: false,
// position: 'relative',
// shadowColor: 'gray800',
// shadow: 0,
// fontSize: '5xl',
// alignItems: 'center',
// justifyContent: 'center',
// alignSelf: 'flex-start',
// onPress: () => {},
// flexDirection: 'row',
// };

// passing RadioGroup as part of Radio
exports.Radio = Radio;
Radio.Group = _group.RadioGroup;
//# sourceMappingURL=radio.component.js.map