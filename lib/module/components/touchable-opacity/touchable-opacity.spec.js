import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Text } from '../text/text.component';
import { TouchableOpacity } from './touchable-opacity.component';
import { ThemeProvider } from '../../theme/theme.provider';
jest.mock('react-native-toast-message', () => 'Toast');
describe('TouchableOpacity component', () => {
  const TestTouchableOpacity = props => /*#__PURE__*/React.createElement(ThemeProvider, null, /*#__PURE__*/React.createElement(TouchableOpacity, props));
  it('should render component passed to children', () => {
    render( /*#__PURE__*/React.createElement(TestTouchableOpacity, null, /*#__PURE__*/React.createElement(Text, null, "I love Ficus UI (forked from Magnus UI)")));
    expect(screen.getByText('I love Ficus UI (forked from Magnus UI)')).toBeTruthy();
  });
});
//# sourceMappingURL=touchable-opacity.spec.js.map