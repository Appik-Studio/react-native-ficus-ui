import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Text } from '../text/text.component';
import { TouchableHighlight } from './touchable-highlight.component';
import { ThemeProvider } from '../../theme/theme.provider';
jest.mock('react-native-toast-message', () => 'Toast');
describe('TouchableHighlight component', () => {
  const TestTouchableHighlight = props => /*#__PURE__*/React.createElement(ThemeProvider, null, /*#__PURE__*/React.createElement(TouchableHighlight, props));
  it('should render component passed to children', () => {
    render( /*#__PURE__*/React.createElement(TestTouchableHighlight, null, /*#__PURE__*/React.createElement(Text, null, "I love Ficus UI (forked from Magnus UI)")));
    expect(screen.getByText('I love Ficus UI (forked from Magnus UI)')).toBeTruthy();
  });
});
//# sourceMappingURL=touchable-highlight.spec.js.map