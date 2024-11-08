import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Text } from '../text/text.component';
import { Center } from './center.component';
import { ThemeProvider } from '../../theme/theme.provider';
jest.mock('react-native-toast-message', () => 'Toast');
describe('Center component', () => {
  const TestCenter = props => /*#__PURE__*/React.createElement(ThemeProvider, null, /*#__PURE__*/React.createElement(Center, props));
  it('should render component passed to children', () => {
    render( /*#__PURE__*/React.createElement(TestCenter, null, /*#__PURE__*/React.createElement(Text, null, "I love Ficus UI (forked from Magnus UI)")));
    expect(screen.getByText('I love Ficus UI (forked from Magnus UI)')).toBeTruthy();
  });
});
//# sourceMappingURL=center.spec.js.map