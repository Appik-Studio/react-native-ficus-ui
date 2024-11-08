import React from 'react';
import { render } from '@testing-library/react-native';
import { Avatar } from './avatar.component';
import { ThemeProvider } from '../../theme/theme.provider';
jest.mock('react-native-toast-message', () => 'Toast');
describe('Avatar component', () => {
  const TestAvatar = props => /*#__PURE__*/React.createElement(ThemeProvider, null, /*#__PURE__*/React.createElement(Avatar, props));
  it('should render component passed to children', () => {
    render( /*#__PURE__*/React.createElement(TestAvatar, {
      source: {
        uri: 'https://reactnative.dev/img/tiny_logo.png'
      }
    }));
  });
});
//# sourceMappingURL=avatar.spec.js.map