"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactNative = require("@testing-library/react-native");
var _text = require("../text/text.component");
var _list = require("./list.component");
var _theme = require("../../theme/theme.provider");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
jest.mock('react-native-toast-message', () => 'Toast');
describe('List component', () => {
  const TestList = props => /*#__PURE__*/_react.default.createElement(_theme.ThemeProvider, null, /*#__PURE__*/_react.default.createElement(_list.List, props));
  it('should render component passed to children', () => {
    (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(TestList, {
      data: [{
        id: 0,
        text: 'I love Ficus UI (forked from Magnus UI)'
      }],
      renderItem: ({
        item
      }) => /*#__PURE__*/_react.default.createElement(_text.Text, null, item.text),
      keyExtractor: item => item.id
    }));
  });
});
//# sourceMappingURL=list.spec.js.map