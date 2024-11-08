import * as React from 'react';
import type { ThemeType } from './type';
export interface ThemeContextType {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
    windowWidth: number;
}
export declare const ThemeContext: React.Context<ThemeContextType>;
//# sourceMappingURL=theme.context.d.ts.map