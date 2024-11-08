import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Text } from '../text/text.component';
import { Box } from '../box/box.component';
import { SectionList } from './sectionlist.component';
import { ThemeProvider } from '../../theme/theme.provider';
jest.mock('react-native-toast-message', () => 'Toast');
describe('SectionList component', () => {
  const TestSectionList = props => /*#__PURE__*/React.createElement(ThemeProvider, null, /*#__PURE__*/React.createElement(SectionList, props));
  it('should render component passed to children', () => {
    render( /*#__PURE__*/React.createElement(TestSectionList, {
      sections: [{
        title: 'Test',
        data: ['I love Ficus UI (forked from Magnus UI)']
      }],
      renderItem: ({
        item
      }) => /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Text, null, item)),
      renderSectionHeader: ({
        section: {
          title
        }
      }) => /*#__PURE__*/React.createElement(Text, null, title),
      keyExtractor: item => item
    }));
    expect(screen.getByText('I love Ficus UI (forked from Magnus UI)')).toBeTruthy();
  });
});
//# sourceMappingURL=sectionlist.spec.js.map