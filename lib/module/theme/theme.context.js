import * as React from 'react';
import { defaultTheme } from './theme.default';
export const ThemeContext = /*#__PURE__*/React.createContext({
  theme: defaultTheme,
  setTheme: _theme => {},
  windowWidth: 0
});
//# sourceMappingURL=theme.context.js.map