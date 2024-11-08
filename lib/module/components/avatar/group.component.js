import * as React from 'react';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { handleResponsiveProps } from '../../types';
import { useTheme } from '../../theme';
import { Stack } from '../stack/stack.component';
const AvatarGroup = incomingProps => {
  const {
    theme,
    windowWidth
  } = useTheme();
  const props = useDefaultProps('AvatarGroup', handleResponsiveProps(incomingProps, theme, windowWidth), {
    spacing: 0,
    flexDirection: 'row',
    size: 'md'
  });
  const {
    children,
    ...rest
  } = props;
  const renderChildren = () => {
    const totalChildren = React.Children.count(children);
    const otherItemsCount = totalChildren - props.max;
    return React.Children.map(children, (child, index) => {
      const reverseIndex = totalChildren - index;
      if (index > props.max) {
        return /*#__PURE__*/React.createElement(React.Fragment, null);
      }
      if (index === props.max) {
        return /*#__PURE__*/React.cloneElement(child, {
          zIndex: reverseIndex,
          elevation: reverseIndex,
          bg: 'gray.200',
          color: 'gray.800',
          size: child.props.size ? child.props.size : props.size,
          ml: index > 0 ? '-lg' : 0,
          borderWidth: 2,
          borderColor: 'white',
          position: 'relative',
          src: '',
          name: '',
          getInitials: () => `+${otherItemsCount > 99 ? 99 : otherItemsCount}`
        });
      }
      return /*#__PURE__*/React.cloneElement(child, {
        zIndex: reverseIndex,
        elevation: reverseIndex,
        size: child.props.size ? child.props.size : props.size,
        ml: index > 0 ? '-lg' : 0,
        borderWidth: 2,
        borderColor: 'white',
        position: 'relative'
      });
    });
  };
  return /*#__PURE__*/React.createElement(Stack, rest, renderChildren());
};
export { AvatarGroup };
//# sourceMappingURL=group.component.js.map