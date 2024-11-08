"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;
var _react = _interopRequireWildcard(require("react"));
var React = _react;
var _reactNativeModal = _interopRequireDefault(require("react-native-modal"));
var _reactNative = require("react-native");
var _select = require("./select.style");
var _box = require("../box/box.component");
var _theme = require("../../theme");
var _text = require("../text/text.component");
var _button = require("../button/button.component");
var _useDefaultProps = require("../../utilities/useDefaultProps");
var _types = require("../../types");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Select = exports.Select = /*#__PURE__*/React.forwardRef((incomingProps, ref) => {
  const {
    theme,
    windowWidth
  } = (0, _theme.useTheme)();
  const props = (0, _useDefaultProps.useDefaultProps)('Select', (0, _types.handleResponsiveProps)(incomingProps, theme, windowWidth), {
    bg: 'white',
    borderRadius: 'none',
    flexDirection: 'column',
    showScrollIndicator: false,
    keyExtractor: (_, index) => `${index}`,
    submit: false,
    isMultiple: false
  });
  const {
    value,
    title,
    message,
    data,
    isMultiple,
    keyExtractor,
    renderItem,
    renderSubmitButton,
    onSelect: onSelectProp,
    submit,
    submitText,
    showScrollIndicator,
    style,
    ...rest
  } = props;
  const [visible, setVisible] = (0, _react.useState)(false);
  const [selectedValue, setSelectedValue] = (0, _react.useState)(value || []);
  const computedStyle = (0, _select.getStyle)(theme, props);
  (0, _react.useEffect)(() => {
    if (!visible) {
      setSelectedValue(value);
    }
  }, [visible]);

  /**
   * exposing functions to parent
   */
  (0, _react.useImperativeHandle)(ref, () => ({
    close() {
      setVisible(false);
    },
    open() {
      setVisible(true);
    }
  }));

  /**
   * set values of select based if its multiple select
   * or single valued select
   *
   * @param value
   */
  const onSelect = value => {
    let finalValue;
    if (isMultiple) {
      const copy = selectedValue.slice();
      const index = selectedValue.indexOf(value);
      if (index !== -1) {
        copy.splice(index, 1);
      } else {
        copy.push(value);
      }
      setSelectedValue(copy);
      finalValue = copy;
    } else {
      setSelectedValue(value);
      finalValue = value;
    }
    if (!submit && !isMultiple) {
      onSelectProp(finalValue);
      setVisible(false);
    }
  };
  const onSubmit = () => {
    onSelectProp(selectedValue);
    setVisible(false);
  };

  /**
   * render title at top select modal
   */
  const renderTitle = () => {
    if (title) {
      return typeof title === 'string' ? /*#__PURE__*/React.createElement(_text.Text, {
        px: "xl",
        fontSize: "lg",
        fontWeight: "bold",
        textTransform: "uppercase"
      }, title) : title;
    }
    return false;
  };

  /**
   * render message at top select modal
   */
  const renderMessage = () => {
    if (message) {
      return typeof message === 'string' ? /*#__PURE__*/React.createElement(_text.Text, {
        px: "xl",
        fontSize: "lg"
      }, message) : message;
    }
    return false;
  };
  const renderFooter = () => {
    if (!submit && !isMultiple) {
      return;
    }
    const submitButtonElement = renderSubmitButton && renderSubmitButton();
    const mandatoryProps = {
      onPress: () => onSubmit()
    };
    if (submitButtonElement) {
      return /*#__PURE__*/React.cloneElement(submitButtonElement, mandatoryProps);
    }
    return /*#__PURE__*/React.createElement(_button.Button, _extends({
      full: true,
      borderRadius: "none",
      colorScheme: "green"
    }, mandatoryProps), /*#__PURE__*/React.createElement(_text.Text, {
      fontSize: "xl",
      py: "xs",
      color: "white"
    }, submitText || 'Submit'));
  };
  return /*#__PURE__*/React.createElement(_reactNativeModal.default, _extends({
    backdropTransitionOutTiming: 0,
    animationIn: "slideInUp",
    isVisible: visible,
    backdropColor: "black",
    onBackdropPress: () => setVisible(false),
    onBackButtonPress: () => setVisible(false),
    hideModalContentWhileAnimating: true,
    style: {
      margin: 0,
      justifyContent: 'flex-end'
    }
  }, rest), /*#__PURE__*/React.createElement(_box.Box, {
    style: computedStyle.wrapper
  }, /*#__PURE__*/React.createElement(_reactNative.SafeAreaView, {
    style: computedStyle.container
  }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_box.Box, {
    py: "xl"
  }, renderTitle(), renderMessage()), /*#__PURE__*/React.createElement(_box.Box, {
    flex: 1
  }, /*#__PURE__*/React.createElement(_reactNative.FlatList, {
    data: data,
    keyExtractor: keyExtractor,
    showsVerticalScrollIndicator: showScrollIndicator,
    renderItem: ({
      item,
      index
    }) => /*#__PURE__*/React.cloneElement(renderItem(item, index), {
      onSelect,
      selectedValue
    })
  })), renderFooter()))));
});

// Select.defaultProps = {
//   bg: 'white',
//   borderRadius: 'none',
//   flexDir: 'column',
//   // mb: 'xl',
//   // @ts-ignore
//   renderNoResultsView: (searchTerm) => (
//     <Div flex={1} px="2xl" py="xl">
//       <Text fontSize="lg">No results found for "{searchTerm}"</Text>
//     </Div>
//   ),
//   keyExtractor: (_, index) => `${index}`,
// };
//# sourceMappingURL=select.component.js.map