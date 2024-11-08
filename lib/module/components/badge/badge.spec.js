import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Badge } from './badge.component';
import { ThemeProvider } from '../../theme/theme.provider';
jest.mock('react-native-toast-message', () => 'Toast');
describe('Badge component', () => {
  const TestBadge = props => /*#__PURE__*/React.createElement(ThemeProvider, null, /*#__PURE__*/React.createElement(Badge, props));
  it('should render component passed to children', () => {
    render( /*#__PURE__*/React.createElement(TestBadge, null, "I love Ficus UI (forked from Magnus UI)"));
    expect(screen.getByText('I love Ficus UI (forked from Magnus UI)')).toBeTruthy();
  });
});
//# sourceMappingURL=badge.spec.js.map