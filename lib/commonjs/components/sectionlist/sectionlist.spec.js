"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactNative = require("@testing-library/react-native");
var _text = require("../text/text.component");
var _box = require("../box/box.component");
var _sectionlist = require("./sectionlist.component");
var _theme = require("../../theme/theme.provider");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
jest.mock('react-native-toast-message', () => 'Toast');
describe('SectionList component', () => {
  const TestSectionList = props => /*#__PURE__*/_react.default.createElement(_theme.ThemeProvider, null, /*#__PURE__*/_react.default.createElement(_sectionlist.SectionList, props));
  it('should render component passed to children', () => {
    (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(TestSectionList, {
      sections: [{
        title: 'Test',
        data: ['I love Ficus UI (forked from Magnus UI)']
      }],
      renderItem: ({
        item
      }) => /*#__PURE__*/_react.default.createElement(_box.Box, null, /*#__PURE__*/_react.default.createElement(_text.Text, null, item)),
      renderSectionHeader: ({
        section: {
          title
        }
      }) => /*#__PURE__*/_react.default.createElement(_text.Text, null, title),
      keyExtractor: item => item
    }));
    expect(_reactNative.screen.getByText('I love Ficus UI (forked from Magnus UI)')).toBeTruthy();
  });
});
//# sourceMappingURL=sectionlist.spec.js.map