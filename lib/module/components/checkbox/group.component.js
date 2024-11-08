import * as React from 'react';
import { useState } from 'react';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { Box } from '../box/box.component';
const CheckboxGroup = incomingProps => {
  const props = useDefaultProps('CheckboxGroup', incomingProps, {});
  const [value, setValue] = useState(props.value ?? props.defaultValue ?? []);
  const {
    children,
    onChange: onChangeProp,
    value: propsValue,
    colorScheme,
    ...rest
  } = props;

  /**
   * checks if checked value is already in the state or not,
   * if it, remove it else add it
   *
   * @param value
   */
  const onChange = optionValue => {
    const optionIndex = value.indexOf(optionValue);
    const newValue = [...value];
    if (optionIndex === -1) {
      newValue.push(optionValue);
    } else {
      newValue.splice(optionIndex, 1);
    }
    if (!('value' in props)) {
      setValue(newValue);
    }
    if (onChangeProp) {
      onChangeProp(newValue);
    }
  };

  /**
   * clones the children and add checked, onChange prop
   */
  const renderChildren = () => {
    return React.Children.map(children, child => {
      return /*#__PURE__*/React.cloneElement(child, {
        onChange,
        isChecked: value.indexOf(child.props.value) > -1,
        ...(colorScheme ? {
          colorScheme
        } : {})
      });
    });
  };
  return /*#__PURE__*/React.createElement(Box, rest, renderChildren());
};
export { CheckboxGroup };
//# sourceMappingURL=group.component.js.map