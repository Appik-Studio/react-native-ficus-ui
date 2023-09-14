import { PressableProps as RNButtonProps } from 'react-native';
import {
  BackgroundPropsType,
  ButtonPropsType,
  DimensionPropsType,
  DisabledPropsType,
  FlexPropsType,
  LoadingPropsType,
  OpacityPropsType,
  PositionPropsType,
  PrefixSuffixPropsType,
  TextPropsType,
  ZIndexPropsType,
  BorderPropsType,
  SpacingPropsType,
  BorderRadiusPropsType,
  ShadowPropsType,
  VariantPropsType,
} from '../../types';
import { BoxProps } from '../box/box.type';
import { CheckboxGroup } from './group.component';

export type CompundedCheckbox<P> = React.FunctionComponent<P> & {
  Group: typeof CheckboxGroup;
};

export interface CheckboxProps
  extends Omit<RNButtonProps, 'children'>,
    BorderPropsType,
    SpacingPropsType,
    ShadowPropsType,
    BorderRadiusPropsType,
    DimensionPropsType,
    PositionPropsType,
    FlexPropsType,
    LoadingPropsType,
    PrefixSuffixPropsType,
    OpacityPropsType,
    ZIndexPropsType,
    DisabledPropsType,
    Pick<TextPropsType, 'fontWeight' | 'color' | 'fontSize'>,
    Pick<BackgroundPropsType, 'bg'>,
    ButtonPropsType,
    VariantPropsType {
  colorScheme?: string;
  defaultChecked?: boolean;
  icon?: string | React.ReactNode;
  iconColor?: string;
  isChecked?: boolean;
  onChecked?: (newValue: boolean) => void;
  onChange?: (value: any) => void;
  value?: any;
  children?: ((states: CheckboxStates) => React.ReactNode) | React.ReactNode;
}

export interface CheckboxGroupProps extends BoxProps {
  onChange?: (value: any[]) => void;
  value?: any[];
  defaultValue?: any[];
  children: React.ReactElement[] | React.ReactElement;
}

export interface CheckboxStates {
  isChecked?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
}
