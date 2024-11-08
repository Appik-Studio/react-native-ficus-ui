import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from '../text/text.component';
import { FlashList } from './flashlist.component';
import { ThemeProvider } from '../../theme/theme.provider';
jest.mock('react-native-toast-message', () => 'Toast');
describe('FlashList component', () => {
  const TestList = props => /*#__PURE__*/React.createElement(ThemeProvider, null, /*#__PURE__*/React.createElement(FlashList, props));
  it('should render component passed to children', () => {
    render( /*#__PURE__*/React.createElement(TestList, {
      data: [{
        id: 0,
        text: 'I love Ficus UI (forked from Magnus UI)'
      }],
      renderItem: ({
        item
      }) => /*#__PURE__*/React.createElement(Text, null, item.text),
      keyExtractor: item => item.id,
      estimatedItemSize: 200
    }));
  });
});
//# sourceMappingURL=flashlist.spec.js.map