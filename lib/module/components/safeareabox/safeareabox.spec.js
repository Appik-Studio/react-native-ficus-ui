import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Text } from '../text/text.component';
import { SafeAreaBox } from './safeareabox.component';
import { ThemeProvider } from '../../theme/theme.provider';
jest.mock('react-native-toast-message', () => 'Toast');
describe('SafeAreaBox component', () => {
  const TestSafeAreaBox = props => /*#__PURE__*/React.createElement(ThemeProvider, null, /*#__PURE__*/React.createElement(SafeAreaBox, props));
  it('should render component passed to children', () => {
    render( /*#__PURE__*/React.createElement(TestSafeAreaBox, null, /*#__PURE__*/React.createElement(Text, null, "I love Ficus UI (forked from Magnus UI)")));
    expect(screen.getByText('I love Ficus UI (forked from Magnus UI)')).toBeTruthy();
  });
});
//# sourceMappingURL=safeareabox.spec.js.map