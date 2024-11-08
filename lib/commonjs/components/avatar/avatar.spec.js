"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactNative = require("@testing-library/react-native");
var _avatar = require("./avatar.component");
var _theme = require("../../theme/theme.provider");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
jest.mock('react-native-toast-message', () => 'Toast');
describe('Avatar component', () => {
  const TestAvatar = props => /*#__PURE__*/_react.default.createElement(_theme.ThemeProvider, null, /*#__PURE__*/_react.default.createElement(_avatar.Avatar, props));
  it('should render component passed to children', () => {
    (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(TestAvatar, {
      source: {
        uri: 'https://reactnative.dev/img/tiny_logo.png'
      }
    }));
  });
});
//# sourceMappingURL=avatar.spec.js.map