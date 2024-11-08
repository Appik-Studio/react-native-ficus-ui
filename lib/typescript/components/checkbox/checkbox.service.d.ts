import * as React from 'react';
import { ThemeType } from '../..//theme';
import { CheckboxProps } from './checkbox.type';
/**
 * get icon name based on state
 */
export declare const getIconName: (isChecked?: boolean, isDisabled?: boolean) => "indeterminate-check-box" | "check-box" | "check-box-outline-blank";
/**
 * get icon name
 *
 * @param checked
 * @param disabled
 */
export declare const getIconColor: (isChecked: any, isDisabled: any, iconColor: any, theme: ThemeType) => string;
export declare const getIcon: (theme: ThemeType, props: CheckboxProps, isChecked: boolean) => string | number | boolean | Iterable<React.ReactNode> | React.JSX.Element | null | undefined;
//# sourceMappingURL=checkbox.service.d.ts.map