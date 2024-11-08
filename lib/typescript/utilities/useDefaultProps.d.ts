import type { DefaultProps, VariantPropsType } from '../types';
import type { ThemeType } from '../theme/type';
export declare const useDefaultProps: <Props extends object>(componentName: keyof NonNullable<ThemeType['components']> | null, props: Props & VariantPropsType, defaultProps: DefaultProps<Props>) => Props & Required<DefaultProps<Props>>;
//# sourceMappingURL=useDefaultProps.d.ts.map