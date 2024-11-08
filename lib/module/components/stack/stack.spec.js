import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Text } from '../text/text.component';
import { Stack } from './stack.component';
import { ThemeProvider } from '../../theme/theme.provider';
jest.mock('react-native-toast-message', () => 'Toast');
describe('Stack component', () => {
  const TestStack = props => /*#__PURE__*/React.createElement(ThemeProvider, null, /*#__PURE__*/React.createElement(Stack, props));
  it('should render component passed to children', () => {
    render( /*#__PURE__*/React.createElement(TestStack, {
      spacing: 20
    }, /*#__PURE__*/React.createElement(Text, null, "I love Ficus UI (forked from Magnus UI)"), /*#__PURE__*/React.createElement(Text, null, "I love Ficus UI (forked from Magnus UI)"), /*#__PURE__*/React.createElement(Text, null, "I love Ficus UI (forked from Magnus UI)"), /*#__PURE__*/React.createElement(Text, null, "I love Ficus UI (forked from Magnus UI)")));
    expect(screen.getAllByText('I love Ficus UI (forked from Magnus UI)')).toBeTruthy();
  });
});
//# sourceMappingURL=stack.spec.js.map