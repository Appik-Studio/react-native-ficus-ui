"use strict";

var _reactNative = require("@testing-library/react-native");
var _react = _interopRequireDefault(require("react"));
var _button = require("./button.component");
var _reactNative2 = require("react-native");
var _theme = require("../../theme/theme.default");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
afterEach(_reactNative.cleanup);
describe('Button component', () => {
  it('should render without errors', () => {
    (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_button.Button, null, "I love Ficus UI (forked from Magnus UI)"));
    expect(_reactNative.screen.getByText('I love Ficus UI (forked from Magnus UI)')).toBeTruthy();
  });
  it('should pressing trigger event', () => {
    const onPressMock = jest.fn();
    (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_button.Button, {
      onPress: onPressMock
    }, "Click Me"));
    const button = _reactNative.screen.getByText('Click Me');
    _reactNative.fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
  it('should be disabled when isDisabled is true', () => {
    const onPressMock = jest.fn();
    (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_button.Button, {
      onPress: onPressMock,
      isDisabled: true
    }, "Click Me"));
    expect(onPressMock).not.toHaveBeenCalled();
    const button = _reactNative.screen.getByText('Click Me');
    _reactNative.fireEvent.press(button);
    expect(onPressMock).not.toHaveBeenCalled();
  });
  it('should render ActivityIndicator component if loading', () => {
    (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_button.Button, {
      isLoading: true
    }));
    const activityIndicator = _reactNative.screen.UNSAFE_getByType(_reactNative2.ActivityIndicator);
    expect(activityIndicator).toBeTruthy();
  });
  it('should have background color of bg prop value', () => {
    var _defaultTheme$colors;
    const colorNameButtonId = 'colorNameButton';
    const hexCodeButtonId = 'hexCodeButton';
    const specificHueButtonId = 'specificHueButton';
    const red = 'red';
    const hexCode = '#FED7D7';
    const red600 = 'red.600';
    (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_reactNative2.View, null, /*#__PURE__*/_react.default.createElement(_button.Button, {
      testID: colorNameButtonId,
      bg: red
    }), /*#__PURE__*/_react.default.createElement(_button.Button, {
      testID: hexCodeButtonId,
      bg: hexCode
    }), /*#__PURE__*/_react.default.createElement(_button.Button, {
      testID: specificHueButtonId,
      bg: red600
    })));
    const colorNameButton = _reactNative.screen.getByTestId(colorNameButtonId);
    const hexCodeButton = _reactNative.screen.getByTestId(hexCodeButtonId);
    const specificHueButton = _reactNative.screen.getByTestId(specificHueButtonId);
    expect(colorNameButton).toBeVisible();
    expect(colorNameButton).toHaveProp('style');
    expect(colorNameButton.props.style[0]).toHaveProperty('backgroundColor');
    expect(colorNameButton.props.style[0].backgroundColor).toEqual(red);
    expect(hexCodeButton).toBeVisible();
    expect(hexCodeButton).toHaveProp('style');
    expect(hexCodeButton.props.style[0]).toHaveProperty('backgroundColor');
    expect(hexCodeButton.props.style[0].backgroundColor).toEqual(hexCode);
    expect(specificHueButton).toBeVisible();
    expect(specificHueButton).toHaveProp('style');
    expect(specificHueButton.props.style[0]).toHaveProperty('backgroundColor');
    expect(specificHueButton.props.style[0].backgroundColor).toEqual(_theme.defaultTheme === null || _theme.defaultTheme === void 0 || (_defaultTheme$colors = _theme.defaultTheme.colors) === null || _defaultTheme$colors === void 0 ? void 0 : _defaultTheme$colors.red[600]);
  });
  it('should render text with color', () => {
    const buttonId = 'button';
    (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_button.Button, {
      testID: buttonId,
      color: "black"
    }, "This is the button"));
    const text = _reactNative.screen.getByText('This is the button');
    expect(text).toBeVisible();
    expect(text).toHaveProp('style');
    expect(text.props.style).toHaveProperty('color');
    expect(text.props.style.color).toEqual('#000000');
  });
});
//# sourceMappingURL=button.spec.js.map