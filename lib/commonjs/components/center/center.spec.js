"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactNative = require("@testing-library/react-native");
var _text = require("../text/text.component");
var _center = require("./center.component");
var _theme = require("../../theme/theme.provider");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
jest.mock('react-native-toast-message', () => 'Toast');
describe('Center component', () => {
  const TestCenter = props => /*#__PURE__*/_react.default.createElement(_theme.ThemeProvider, null, /*#__PURE__*/_react.default.createElement(_center.Center, props));
  it('should render component passed to children', () => {
    (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(TestCenter, null, /*#__PURE__*/_react.default.createElement(_text.Text, null, "I love Ficus UI (forked from Magnus UI)")));
    expect(_reactNative.screen.getByText('I love Ficus UI (forked from Magnus UI)')).toBeTruthy();
  });
});
//# sourceMappingURL=center.spec.js.map