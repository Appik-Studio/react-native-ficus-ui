import { TextProps } from 'components/text/text.type';
import type { ThemeType } from './type';
/**
 * Create spacing styles from object of style props passed to ficus component
 *
 * m="10", mt="xl"
 *
 * @param value
 * @param theme
 */
export declare const createSpacingStyles: (props: any, theme: ThemeType['spacing']) => any;
/**
 * Create spacing styles from object of style props passed to ficus component
 *
 * m="10", mt="xl"
 *
 * @param props
 * @param theme
 */
export declare const createStackSpacingStyles: (props: any, theme: ThemeType['stackSpacing']) => any;
/**
 * Create size styles from object of style props passed to ficus component
 *
 * @param props
 * @param theme
 */
export declare const createAvatarStyles: (props: any, theme: ThemeType['avatar']) => any;
/**
 * Get font weight for font
 *
 * @param themeFontFamily
 * @param fontFamily
 * @param fontWeight
 */
export declare const getFontWeight: (themeFontFamily: ThemeType['fontFamily'], fontFamily: TextProps['fontFamily'], fontWeight: TextProps['fontWeight']) => import("../types").ResponsiveValue<"bold" | "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900"> | undefined;
/**
 * extract the fontFamily from theme

 * @param themeFontFamily
 * @param fontWeight
 */
export declare const getThemeFontFamily: (themeFontFamily: ThemeType['fontFamily'], fontWeight?: TextProps['fontWeight']) => string | undefined;
/**
 * Get real theme color value
 *
 * @param themeColors
 * @param value
 */
export declare const getThemeColor: (themeColors: ThemeType['colors'], value: string | undefined) => string;
/**
 * extract the theme property from theme
 * if thereis no theme property in the value, return the value
 *
 * @param theme
 * @param value
 */
export declare const getThemeProperty: (theme: ThemeType['borderRadius'] | ThemeType['fontSize'] | ThemeType['shadow'] | ThemeType['spacing'] | ThemeType['spinner'] | ThemeType['checkbox'] | ThemeType['radio'] | ThemeType['avatar'] | ThemeType['button'] | undefined, value: any) => any;
/**
 * borderRadius="xl"
 *
 * @param value
 * @param theme
 */
export declare const createBorderRadiusStyles: (props: any, theme: ThemeType['borderRadius']) => any;
/**
 * adds flex property in styles
 *
 * @param props
 */
export declare const createFlexStyles: (props: any) => any;
/**
 * create borderWidth styles
 *
 * @param value
 */
export declare const createBorderWidthStyles: (props: any) => any;
/**
 * create borderRadius styles
 *
 * @param value
 */
export declare const createBorderColorStyles: (props: any, theme: ThemeType['colors']) => any;
/**
 * adds shadows property in styles
 *
 * @param props
 */
export declare const createShadowStyles: (props: any, theme: ThemeType) => any;
/**
 * position="absolute"
 * top={10}
 *
 * @param value
 */
export declare const createPositionStyle: (props: any) => any;
//# sourceMappingURL=theme.service.d.ts.map