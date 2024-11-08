import * as React from 'react';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { handleResponsiveProps } from '../../types';
import { useTheme } from '../../theme';
import { Box } from '../box/box.component';
const AvatarBadge = incomingProps => {
  const {
    theme,
    windowWidth
  } = useTheme();
  const props = useDefaultProps('AvatarBadge', handleResponsiveProps(incomingProps, theme, windowWidth), {
    bg: 'green.400',
    w: 25,
    h: 25,
    borderRadius: '100%',
    borderWidth: 3,
    borderColor: 'white',
    borderStyle: 'solid'
  });
  return /*#__PURE__*/React.createElement(Box, props);
};
export { AvatarBadge };
//# sourceMappingURL=badge.component.js.map