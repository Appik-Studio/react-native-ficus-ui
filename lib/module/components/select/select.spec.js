import { cleanup, fireEvent, render, screen } from '@testing-library/react-native';
import * as React from 'react';
import { Text, View } from 'react-native';
import { Button } from '../button/button.component';
import { Select } from './select.component';
import { Option } from './select.option.component';
afterEach(cleanup);
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
    render( /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Button, {
      testID: buttonId,
      onPress: () => {
        var _selectRef$current;
        return (_selectRef$current = selectRef.current) === null || _selectRef$current === void 0 ? void 0 : _selectRef$current.open();
      }
    }, "Select button"), /*#__PURE__*/React.createElement(Select, {
      testID: selectId,
      ref: selectRef,
      data: mockedOptions,
      value: mockedOptions.at(0),
      renderItem: () => /*#__PURE__*/React.createElement(React.Fragment, null)
    })));
    const select = screen.queryByTestId(selectId);
    const button = screen.getByTestId(buttonId);
    expect(select).not.toBeNull();
    expect(select === null || select === void 0 ? void 0 : select.props).toHaveProperty('visible');
    expect(select === null || select === void 0 ? void 0 : select.props.visible).toBeFalsy();
    fireEvent.press(button);
    expect(select === null || select === void 0 ? void 0 : select.props.visible).toBeTruthy();
  });
  it('should handle single selection', async () => {
    const selectRef = /*#__PURE__*/React.createRef();
    const selectFn = jest.fn();
    const buttonId = 'button-id';
    render( /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Button, {
      testID: buttonId,
      onPress: () => {
        var _selectRef$current2;
        return (_selectRef$current2 = selectRef.current) === null || _selectRef$current2 === void 0 ? void 0 : _selectRef$current2.open();
      }
    }, "Select button"), /*#__PURE__*/React.createElement(Select, {
      onSelect: selectFn,
      title: 'Select an option',
      ref: selectRef,
      data: mockedOptions,
      value: mockedOptions[0],
      renderItem: item => /*#__PURE__*/React.createElement(Option, {
        value: item,
        py: "md",
        px: "xl"
      }, /*#__PURE__*/React.createElement(Text, null, item.label))
    })));
    const button = screen.getByTestId(buttonId);
    fireEvent.press(button);
    const option = screen.getByText('Mocked option 2');
    fireEvent.press(option);
    expect(selectFn).toHaveBeenLastCalledWith(mockedOptions[1]);
  });
  it('should handle single selection with submit prop', async () => {
    const selectRef = /*#__PURE__*/React.createRef();
    const selectFn = jest.fn();
    const buttonId = 'button-id';
    render( /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Button, {
      testID: buttonId,
      onPress: () => {
        var _selectRef$current3;
        return (_selectRef$current3 = selectRef.current) === null || _selectRef$current3 === void 0 ? void 0 : _selectRef$current3.open();
      }
    }, "Select button"), /*#__PURE__*/React.createElement(Select, {
      submit: true,
      onSelect: selectFn,
      ref: selectRef,
      value: 1,
      title: "This is your title",
      mt: "md",
      pb: "2xl",
      message: "This is the long message used to set some context",
      data: [1, 2, 3, 4, 5, 6],
      renderItem: item => /*#__PURE__*/React.createElement(Option, {
        value: item,
        py: "md",
        px: "xl"
      }, /*#__PURE__*/React.createElement(Text, null, item))
    })));
    const button = screen.getByTestId(buttonId);
    fireEvent.press(button);
    const option = screen.getByText('2');
    const submit = screen.getByText('Submit');
    fireEvent.press(option);
    expect(selectFn).not.toHaveBeenCalled();
    fireEvent.press(submit);
    expect(selectFn).toHaveBeenCalledWith(2);
  });
  it('should handle multiple selection', async () => {
    const selectRef = /*#__PURE__*/React.createRef();
    const selectFn = jest.fn();
    const buttonId = 'button-id';
    render( /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Button, {
      testID: buttonId,
      onPress: () => {
        var _selectRef$current4;
        return (_selectRef$current4 = selectRef.current) === null || _selectRef$current4 === void 0 ? void 0 : _selectRef$current4.open();
      }
    }, "Select button"), /*#__PURE__*/React.createElement(Select, {
      isMultiple: true,
      onSelect: selectFn,
      ref: selectRef,
      value: [],
      title: "This is your title",
      mt: "md",
      pb: "2xl",
      message: "This is the long message used to set some context",
      data: [1, 2, 3, 4, 5, 6],
      renderItem: item => /*#__PURE__*/React.createElement(Option, {
        value: item,
        py: "md",
        px: "xl"
      }, /*#__PURE__*/React.createElement(Text, null, item))
    })));
    const button = screen.getByTestId(buttonId);
    fireEvent.press(button);
    const option1 = screen.getByText('1');
    const option3 = screen.getByText('3');
    const submit = screen.getByText('Submit');
    fireEvent.press(option1);
    fireEvent.press(option3);
    fireEvent.press(submit);
    expect(selectFn).toHaveBeenLastCalledWith([1, 3]);
  });
});
//# sourceMappingURL=select.spec.js.map