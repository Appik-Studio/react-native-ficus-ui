import { ReactNode } from 'react';
import { ViewStyle, TextStyle } from 'react-native';
import type { TabViewProps as RNTabViewProps, Route, SceneRendererProps } from 'react-native-tab-view';
import type { BorderPropsType, SpacingPropsType, BorderRadiusPropsType, ShadowPropsType, DimensionPropsType, BackgroundPropsType, FlexPropsType, PositionPropsType, ZIndexPropsType, OverflowPropsType, OpacityPropsType, VariantPropsType } from '../../types';
type CommonStyleProps = BorderPropsType & SpacingPropsType & BorderRadiusPropsType & ShadowPropsType & DimensionPropsType & BackgroundPropsType & FlexPropsType & PositionPropsType & ZIndexPropsType & OverflowPropsType & OpacityPropsType & VariantPropsType;
export interface TabsProps<T extends Route = Route> extends CommonStyleProps, RNTabViewProps<T> {
    colorScheme?: string;
    children: ReactNode;
    initialPage?: number;
    selectedTab?: number;
    onChangeTab: (index: number) => void;
}
export interface TabListProps extends CommonStyleProps {
    children: ReactNode;
}
export interface TabPanelProps extends CommonStyleProps {
    children: ReactNode;
}
type TabChildrenFunction = (params: {
    focused: boolean;
    color?: string;
    route?: Route;
}) => ReactNode;
export interface TabProps extends CommonStyleProps {
    name: string;
    children: ReactNode | string | TabChildrenFunction;
}
export interface TabPanelsProps extends CommonStyleProps {
    children: ReactNode;
}
export type RenderLabelProps = SceneRendererProps & {
    route: Route;
};
export type TabViewStyle = ViewStyle & {
    tabPanel?: ViewStyle;
    tabsStyle?: ViewStyle;
    tabLabel?: TextStyle;
    activeTab?: ViewStyle;
    activeTabLabel?: TextStyle;
    tabContentContainer?: ViewStyle;
};
export {};
//# sourceMappingURL=tabs.type.d.ts.map