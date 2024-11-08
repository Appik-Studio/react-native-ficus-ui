"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactNative = require("@testing-library/react-native");
var _text = require("../text/text.component");
var _checkbox = require("./checkbox.component");
var _group = require("./group.component");
var _box = require("../box/box.component");
var _theme = require("../../theme/theme.default");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
describe('Checkbox component', () => {
  it('should render component without error', () => {
    const checkboxId = 'checkboxId';
    (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_checkbox.Checkbox, {
      testID: checkboxId,
      value: 1,
      prefix: /*#__PURE__*/_react.default.createElement(_text.Text, {
        flex: 1
      }, "Option 1")
    }));
    expect(_reactNative.screen.getByTestId(checkboxId)).toBeDefined();
    expect(_reactNative.screen.getByText('Option 1')).toBeTruthy();
  });
  it('should option press trigger onChecked function', () => {
    const checkboxId = 'checkboxId';
    const textId = 'textId';
    const onCheckedMock = jest.fn();
    (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_checkbox.Checkbox, {
      testID: checkboxId,
      onChecked: onCheckedMock,
      value: 1,
      prefix: /*#__PURE__*/_react.default.createElement(_text.Text, {
        testID: textId,
        flex: 1
      }, "Option 1")
    }));
    const text = _reactNative.screen.getByTestId(textId);
    expect(onCheckedMock).toHaveBeenCalledTimes(0);
    _reactNative.fireEvent.press(text);
    expect(onCheckedMock).toHaveBeenCalledTimes(1);
  });
  it('should group component render with children without errors ', () => {
    const checkboxGroupId = 'checkboxGroupId';
    (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_group.CheckboxGroup, {
      testID: checkboxGroupId,
      colorScheme: "green"
    }, /*#__PURE__*/_react.default.createElement(_checkbox.Checkbox, {
      value: 1
    }, "Option 1"), /*#__PURE__*/_react.default.createElement(_checkbox.Checkbox, {
      value: 2
    }, "Option 2")));
    const group = _reactNative.screen.getByTestId(checkboxGroupId);
    const option1 = _reactNative.screen.getByText('Option 1');
    const option2 = _reactNative.screen.getByText('Option 2');
    expect(group).toBeDefined();
    expect(option1).toBeVisible();
    expect(option2).toBeVisible();
  });
  it('should checkbox state affect rendering', () => {
    var _defaultTheme$colors, _defaultTheme$colors2;
    (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_group.CheckboxGroup, {
      flexDirection: "row"
    }, ['Option 1', 'Option 2'].map(item => /*#__PURE__*/_react.default.createElement(_checkbox.Checkbox, {
      value: item
    }, ({
      isChecked
    }) => /*#__PURE__*/_react.default.createElement(_box.Box, {
      bg: isChecked ? 'blue.600' : 'blue.100',
      px: "xl",
      py: "md",
      mr: "md",
      borderRadius: "full"
    }, /*#__PURE__*/_react.default.createElement(_text.Text, {
      color: isChecked ? 'white' : 'red.800'
    }, item))))));
    const option1 = _reactNative.screen.getByText('Option 1');
    const option2 = _reactNative.screen.getByText('Option 2');
    const red800 = (_defaultTheme$colors = _theme.defaultTheme.colors) === null || _defaultTheme$colors === void 0 ? void 0 : _defaultTheme$colors.red[800];
    const white = (_defaultTheme$colors2 = _theme.defaultTheme.colors) === null || _defaultTheme$colors2 === void 0 ? void 0 : _defaultTheme$colors2.white;
    expect(option1).toBeVisible();
    expect(option2).toBeVisible();
    expect(option1).toHaveStyle({
      color: red800
    });
    _reactNative.fireEvent.press(option2);
    expect(option2).toHaveStyle({
      color: white
    });
  });
});
//# sourceMappingURL=checkbox.spec.js.map