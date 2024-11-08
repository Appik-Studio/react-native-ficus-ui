function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from 'react';
import RNModal from 'react-native-modal';
import { SafeAreaView, FlatList } from 'react-native';
import { useState, useImperativeHandle, useEffect } from 'react';
import { getStyle } from './select.style';
import { Box } from '../box/box.component';
import { useTheme } from '../../theme';
import { Text } from '../text/text.component';
import { Button } from '../button/button.component';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { handleResponsiveProps } from '../../types';
const Select = /*#__PURE__*/React.forwardRef((incomingProps, ref) => {
  const {
    theme,
    windowWidth
  } = useTheme();
  const props = useDefaultProps('Select', handleResponsiveProps(incomingProps, theme, windowWidth), {
    bg: 'white',
    borderRadius: 'none',
    flexDirection: 'column',
    showScrollIndicator: false,
    keyExtractor: (_, index) => `${index}`,
    submit: false,
    isMultiple: false
  });
  const {
    value,
    title,
    message,
    data,
    isMultiple,
    keyExtractor,
    renderItem,
    renderSubmitButton,
    onSelect: onSelectProp,
    submit,
    submitText,
    showScrollIndicator,
    style,
    ...rest
  } = props;
  const [visible, setVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || []);
  const computedStyle = getStyle(theme, props);
  useEffect(() => {
    if (!visible) {
      setSelectedValue(value);
    }
  }, [visible]);

  /**
   * exposing functions to parent
   */
  useImperativeHandle(ref, () => ({
    close() {
      setVisible(false);
    },
    open() {
      setVisible(true);
    }
  }));

  /**
   * set values of select based if its multiple select
   * or single valued select
   *
   * @param value
   */
  const onSelect = value => {
    let finalValue;
    if (isMultiple) {
      const copy = selectedValue.slice();
      const index = selectedValue.indexOf(value);
      if (index !== -1) {
        copy.splice(index, 1);
      } else {
        copy.push(value);
      }
      setSelectedValue(copy);
      finalValue = copy;
    } else {
      setSelectedValue(value);
      finalValue = value;
    }
    if (!submit && !isMultiple) {
      onSelectProp(finalValue);
      setVisible(false);
    }
  };
  const onSubmit = () => {
    onSelectProp(selectedValue);
    setVisible(false);
  };

  /**
   * render title at top select modal
   */
  const renderTitle = () => {
    if (title) {
      return typeof title === 'string' ? /*#__PURE__*/React.createElement(Text, {
        px: "xl",
        fontSize: "lg",
        fontWeight: "bold",
        textTransform: "uppercase"
      }, title) : title;
    }
    return false;
  };

  /**
   * render message at top select modal
   */
  const renderMessage = () => {
    if (message) {
      return typeof message === 'string' ? /*#__PURE__*/React.createElement(Text, {
        px: "xl",
        fontSize: "lg"
      }, message) : message;
    }
    return false;
  };
  const renderFooter = () => {
    if (!submit && !isMultiple) {
      return;
    }
    const submitButtonElement = renderSubmitButton && renderSubmitButton();
    const mandatoryProps = {
      onPress: () => onSubmit()
    };
    if (submitButtonElement) {
      return /*#__PURE__*/React.cloneElement(submitButtonElement, mandatoryProps);
    }
    return /*#__PURE__*/React.createElement(Button, _extends({
      full: true,
      borderRadius: "none",
      colorScheme: "green"
    }, mandatoryProps), /*#__PURE__*/React.createElement(Text, {
      fontSize: "xl",
      py: "xs",
      color: "white"
    }, submitText || 'Submit'));
  };
  return /*#__PURE__*/React.createElement(RNModal, _extends({
    backdropTransitionOutTiming: 0,
    animationIn: "slideInUp",
    isVisible: visible,
    backdropColor: "black",
    onBackdropPress: () => setVisible(false),
    onBackButtonPress: () => setVisible(false),
    hideModalContentWhileAnimating: true,
    style: {
      margin: 0,
      justifyContent: 'flex-end'
    }
  }, rest), /*#__PURE__*/React.createElement(Box, {
    style: computedStyle.wrapper
  }, /*#__PURE__*/React.createElement(SafeAreaView, {
    style: computedStyle.container
  }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    py: "xl"
  }, renderTitle(), renderMessage()), /*#__PURE__*/React.createElement(Box, {
    flex: 1
  }, /*#__PURE__*/React.createElement(FlatList, {
    data: data,
    keyExtractor: keyExtractor,
    showsVerticalScrollIndicator: showScrollIndicator,
    renderItem: ({
      item,
      index
    }) => /*#__PURE__*/React.cloneElement(renderItem(item, index), {
      onSelect,
      selectedValue
    })
  })), renderFooter()))));
});

// Select.defaultProps = {
//   bg: 'white',
//   borderRadius: 'none',
//   flexDir: 'column',
//   // mb: 'xl',
//   // @ts-ignore
//   renderNoResultsView: (searchTerm) => (
//     <Div flex={1} px="2xl" py="xl">
//       <Text fontSize="lg">No results found for "{searchTerm}"</Text>
//     </Div>
//   ),
//   keyExtractor: (_, index) => `${index}`,
// };

export { Select };
//# sourceMappingURL=select.component.js.map