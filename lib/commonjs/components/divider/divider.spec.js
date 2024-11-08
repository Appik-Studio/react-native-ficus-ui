"use strict";

var _reactNative = require("@testing-library/react-native");
var _divider = require("./divider.component");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
describe('Divider component', () => {
  it('should render correctly', () => {
    const dividerId = 'dividerId';
    (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_divider.Divider, {
      testID: dividerId
    }));
    const divider = _reactNative.screen.getByTestId(dividerId);
    expect(divider).toBeDefined();
  });
  it('should apply orientation prop correctly', () => {
    const horizontalDividerId = 'horizonaltDivider';
    const verticalDividerId = 'verticalDivider';
    (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_divider.Divider, {
      testID: horizontalDividerId
    }), /*#__PURE__*/_react.default.createElement(_divider.Divider, {
      testID: verticalDividerId,
      orientation: 'vertical'
    })));
    const horizontalDivider = _reactNative.screen.getByTestId(horizontalDividerId);
    const verticalDivider = _reactNative.screen.getByTestId(verticalDividerId);
    expect(horizontalDivider).toHaveStyle({
      borderLeftWidth: 0,
      borderTopWidth: 1
    });
    expect(verticalDivider).toHaveStyle({
      borderLeftWidth: 1,
      borderTopWidth: 0
    });
  });
  it('should apply size prop correctly', () => {
    const horizontalDividerId = 'horizonaltDivider';
    const verticalDividerId = 'verticalDivider';
    (0, _reactNative.render)( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_divider.Divider, {
      testID: horizontalDividerId,
      size: 5
    }), /*#__PURE__*/_react.default.createElement(_divider.Divider, {
      testID: verticalDividerId,
      orientation: 'vertical',
      size: 5
    })));
    const horizontalDivider = _reactNative.screen.getByTestId(horizontalDividerId);
    const verticalDivider = _reactNative.screen.getByTestId(verticalDividerId);
    expect(horizontalDivider).toHaveStyle({
      borderTopWidth: 5
    });
    expect(verticalDivider).toHaveStyle({
      borderLeftWidth: 5
    });
  });
});
//# sourceMappingURL=divider.spec.js.map