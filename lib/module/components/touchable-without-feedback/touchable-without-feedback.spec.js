import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Text } from '../text/text.component';
import { TouchableWithoutFeedback } from './touchable-without-feedback.component';
import { ThemeProvider } from '../../theme/theme.provider';
jest.mock('react-native-toast-message', () => 'Toast');
describe('TouchableWithoutFeedback component', () => {
  const TestTouchableWithoutFeedback = props => /*#__PURE__*/React.createElement(ThemeProvider, null, /*#__PURE__*/React.createElement(TouchableWithoutFeedback, props));
  it('should render component passed to children', () => {
    render( /*#__PURE__*/React.createElement(TestTouchableWithoutFeedback, null, /*#__PURE__*/React.createElement(Text, null, "I love Ficus UI (forked from Magnus UI)")));
    expect(screen.getByText('I love Ficus UI (forked from Magnus UI)')).toBeTruthy();
  });
});
//# sourceMappingURL=touchable-without-feedback.spec.js.map