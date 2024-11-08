import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Text } from '../text/text.component';
import { Flex } from './flex.component';
import { ThemeProvider } from '../../theme/theme.provider';
jest.mock('react-native-toast-message', () => 'Toast');
describe('Flex component', () => {
  const TestFlex = props => /*#__PURE__*/React.createElement(ThemeProvider, null, /*#__PURE__*/React.createElement(Flex, props));
  it('should render component passed to children', () => {
    render( /*#__PURE__*/React.createElement(TestFlex, null, /*#__PURE__*/React.createElement(Text, null, "I love Ficus UI (forked from Magnus UI)")));
    expect(screen.getByText('I love Ficus UI (forked from Magnus UI)')).toBeTruthy();
  });
});
//# sourceMappingURL=flex.spec.js.map