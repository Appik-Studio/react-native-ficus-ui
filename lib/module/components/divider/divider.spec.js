import { render, screen } from '@testing-library/react-native';
import { Divider } from './divider.component';
import React from 'react';
describe('Divider component', () => {
  it('should render correctly', () => {
    const dividerId = 'dividerId';
    render( /*#__PURE__*/React.createElement(Divider, {
      testID: dividerId
    }));
    const divider = screen.getByTestId(dividerId);
    expect(divider).toBeDefined();
  });
  it('should apply orientation prop correctly', () => {
    const horizontalDividerId = 'horizonaltDivider';
    const verticalDividerId = 'verticalDivider';
    render( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Divider, {
      testID: horizontalDividerId
    }), /*#__PURE__*/React.createElement(Divider, {
      testID: verticalDividerId,
      orientation: 'vertical'
    })));
    const horizontalDivider = screen.getByTestId(horizontalDividerId);
    const verticalDivider = screen.getByTestId(verticalDividerId);
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
    render( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Divider, {
      testID: horizontalDividerId,
      size: 5
    }), /*#__PURE__*/React.createElement(Divider, {
      testID: verticalDividerId,
      orientation: 'vertical',
      size: 5
    })));
    const horizontalDivider = screen.getByTestId(horizontalDividerId);
    const verticalDivider = screen.getByTestId(verticalDividerId);
    expect(horizontalDivider).toHaveStyle({
      borderTopWidth: 5
    });
    expect(verticalDivider).toHaveStyle({
      borderLeftWidth: 5
    });
  });
});
//# sourceMappingURL=divider.spec.js.map