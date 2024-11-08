import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Text } from '../text/text.component';
import { ScrollBox } from './scrollbox.component';
import { ThemeProvider } from '../../theme/theme.provider';
jest.mock('react-native-toast-message', () => 'Toast');
describe('ScrollBox component', () => {
  const TestScrollBox = props => /*#__PURE__*/React.createElement(ThemeProvider, null, /*#__PURE__*/React.createElement(ScrollBox, props));
  it('should render component passed to children', () => {
    render( /*#__PURE__*/React.createElement(TestScrollBox, null, /*#__PURE__*/React.createElement(Text, null, "I love Ficus UI (forked from Magnus UI)")));
    expect(screen.getByText('I love Ficus UI (forked from Magnus UI)')).toBeTruthy();
  });
});
//# sourceMappingURL=scrollbox.spec.js.map