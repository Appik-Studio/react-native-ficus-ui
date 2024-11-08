import * as React from 'react';
import { ThemeContext } from './theme.context';
import deepmerge from 'deepmerge';
import { defaultTheme } from './theme.default';
import Toast from 'react-native-toast-message';
import { useWindowDimensions } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
export const ThemeProvider = props => {
  const {
    theme: themeProp = {},
    children
  } = props;
  const {
    width
  } = useWindowDimensions();
  const [themeState, setThemeState] = React.useState(deepmerge(defaultTheme, themeProp));
  const setTheme = newTheme => {
    const mergedTheme = deepmerge(defaultTheme, newTheme);
    setThemeState(mergedTheme);
  };
  return (
    /*#__PURE__*/
    // eslint-disable-next-line react-native/no-inline-styles
    React.createElement(GestureHandlerRootView, {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(ThemeContext.Provider, {
      value: {
        theme: themeState,
        setTheme,
        windowWidth: width
      }
    }, /*#__PURE__*/React.createElement(BottomSheetModalProvider, null, children, /*#__PURE__*/React.createElement(Toast, themeState.toastProps))))
  );
};
//# sourceMappingURL=theme.provider.js.map