import React from 'react';
import { render } from '@testing-library/react-native';
import { Spinner } from './spinner.component';
import { ThemeProvider } from '../../theme/theme.provider';
jest.mock('react-native-toast-message', () => 'Toast');
describe('Spinner component', () => {
  const TestSpinner = props => /*#__PURE__*/React.createElement(ThemeProvider, null, /*#__PURE__*/React.createElement(Spinner, props));
  it('should render component passed to children', () => {
    render( /*#__PURE__*/React.createElement(TestSpinner, {
      size: "lg"
    }));
  });
});
//# sourceMappingURL=spinner.spec.js.map