import React from 'react';
import { render } from '@testing-library/react-native';
import { Image } from './image.component';
import { ThemeProvider } from '../../theme/theme.provider';
jest.mock('react-native-toast-message', () => 'Toast');
describe('Image component', () => {
  const TestImage = props => /*#__PURE__*/React.createElement(ThemeProvider, null, /*#__PURE__*/React.createElement(Image, props));
  it('should render component passed to children', () => {
    render( /*#__PURE__*/React.createElement(TestImage, {
      source: {
        uri: 'https://reactnative.dev/img/tiny_logo.png'
      }
    }));
  });
});
//# sourceMappingURL=image.spec.js.map