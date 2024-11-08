"use strict";

var _reactNative = require("@testing-library/react-native");
var React = _interopRequireWildcard(require("react"));
var _reactNative2 = require("react-native");
var _button = require("../button/button.component");
var _select = require("./select.component");
var _selectOption = require("./select.option.component");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
afterEach(_reactNative.cleanup);
describe('Select component', () => {
  const mockedOptions = [{
    label: 'Mocked option 1',
    value: 'mocked-option-1'
  }, {
    label: 'Mocked option 2',
    value: 'mocked-option-2'
  }, {
    label: 'Mocked option 3',
    value: 'mocked-option-3'
  }];
  it('should render when button is clicked without errors', async () => {
    const selectRef = /*#__PURE__*/React.createRef();
    const selectId = 'select-id';
    const buttonId = 'button-id';
    (0, _reactNative.render)( /*#__PURE__*/React.createElement(_reactNative2.View, null, /*#__PURE__*/React.createElement(_button.Button, {
      testID: buttonId,
      onPress: () => {
        var _selectRef$current;
        return (_selectRef$current = selectRef.current) === null || _selectRef$current === void 0 ? void 0 : _selectRef$current.open();
      }
    }, "Select button"), /*#__PURE__*/React.createElement(_select.Select, {
      testID: selectId,
      ref: selectRef,
      data: mockedOptions,
      value: mockedOptions.at(0),
      renderItem: () => /*#__PURE__*/React.createElement(React.Fragment, null)
    })));
    const select = _reactNative.screen.queryByTestId(selectId);
    const button = _reactNative.screen.getByTestId(buttonId);
    expect(select).not.toBeNull();
    expect(select === null || select === void 0 ? void 0 : select.props).toHaveProperty('visible');
    expect(select === null || select === void 0 ? void 0 : select.props.visible).toBeFalsy();
    _reactNative.fireEvent.press(button);
    expect(select === null || select === void 0 ? void 0 : select.props.visible).toBeTruthy();
  });
  it('should handle single selection', async () => {
    const selectRef = /*#__PURE__*/React.createRef();
    const selectFn = jest.fn();
    const buttonId = 'button-id';
    (0, _reactNative.render)( /*#__PURE__*/React.createElement(_reactNative2.View, null, /*#__PURE__*/React.createElement(_button.Button, {
      testID: buttonId,
      onPress: () => {
        var _selectRef$current2;
        return (_selectRef$current2 = selectRef.current) === null || _selectRef$current2 === void 0 ? void 0 : _selectRef$current2.open();
      }
    }, "Select button"), /*#__PURE__*/React.createElement(_select.Select, {
      onSelect: selectFn,
      title: 'Select an option',
      ref: selectRef,
      data: mockedOptions,
      value: mockedOptions[0],
      renderItem: item => /*#__PURE__*/React.createElement(_selectOption.Option, {
        value: item,
        py: "md",
        px: "xl"
      }, /*#__PURE__*/React.createElement(_reactNative2.Text, null, item.label))
    })));
    const button = _reactNative.screen.getByTestId(buttonId);
    _reactNative.fireEvent.press(button);
    const option = _reactNative.screen.getByText('Mocked option 2');
    _reactNative.fireEvent.press(option);
    expect(selectFn).toHaveBeenLastCalledWith(mockedOptions[1]);
  });
  it('should handle single selection with submit prop', async () => {
    const selectRef = /*#__PURE__*/React.createRef();
    const selectFn = jest.fn();
    const buttonId = 'button-id';
    (0, _reactNative.render)( /*#__PURE__*/React.createElement(_reactNative2.View, null, /*#__PURE__*/React.createElement(_button.Button, {
      testID: buttonId,
      onPress: () => {
        var _selectRef$current3;
        return (_selectRef$current3 = selectRef.current) === null || _selectRef$current3 === void 0 ? void 0 : _selectRef$current3.open();
      }
    }, "Select button"), /*#__PURE__*/React.createElement(_select.Select, {
      submit: true,
      onSelect: selectFn,
      ref: selectRef,
      value: 1,
      title: "This is your title",
      mt: "md",
      pb: "2xl",
      message: "This is the long message used to set some context",
      data: [1, 2, 3, 4, 5, 6],
      renderItem: item => /*#__PURE__*/React.createElement(_selectOption.Option, {
        value: item,
        py: "md",
        px: "xl"
      }, /*#__PURE__*/React.createElement(_reactNative2.Text, null, item))
    })));
    const button = _reactNative.screen.getByTestId(buttonId);
    _reactNative.fireEvent.press(button);
    const option = _reactNative.screen.getByText('2');
    const submit = _reactNative.screen.getByText('Submit');
    _reactNative.fireEvent.press(option);
    expect(selectFn).not.toHaveBeenCalled();
    _reactNative.fireEvent.press(submit);
    expect(selectFn).toHaveBeenCalledWith(2);
  });
  it('should handle multiple selection', async () => {
    const selectRef = /*#__PURE__*/React.createRef();
    const selectFn = jest.fn();
    const buttonId = 'button-id';
    (0, _reactNative.render)( /*#__PURE__*/React.createElement(_reactNative2.View, null, /*#__PURE__*/React.createElement(_button.Button, {
      testID: buttonId,
      onPress: () => {
        var _selectRef$current4;
        return (_selectRef$current4 = selectRef.current) === null || _selectRef$current4 === void 0 ? void 0 : _selectRef$current4.open();
      }
    }, "Select button"), /*#__PURE__*/React.createElement(_select.Select, {
      isMultiple: true,
      onSelect: selectFn,
      ref: selectRef,
      value: [],
      title: "This is your title",
      mt: "md",
      pb: "2xl",
      message: "This is the long message used to set some context",
      data: [1, 2, 3, 4, 5, 6],
      renderItem: item => /*#__PURE__*/React.createElement(_selectOption.Option, {
        value: item,
        py: "md",
        px: "xl"
      }, /*#__PURE__*/React.createElement(_reactNative2.Text, null, item))
    })));
    const button = _reactNative.screen.getByTestId(buttonId);
    _reactNative.fireEvent.press(button);
    const option1 = _reactNative.screen.getByText('1');
    const option3 = _reactNative.screen.getByText('3');
    const submit = _reactNative.screen.getByText('Submit');
    _reactNative.fireEvent.press(option1);
    _reactNative.fireEvent.press(option3);
    _reactNative.fireEvent.press(submit);
    expect(selectFn).toHaveBeenLastCalledWith([1, 3]);
  });
});
//# sourceMappingURL=select.spec.js.map