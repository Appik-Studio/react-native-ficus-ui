function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useState } from 'react';
import { useWindowDimensions, View } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useTheme } from '../../theme';
import { getStyle } from './tabs.style';
import { Text } from '../text/text.component';
import { getThemeColor } from '../../theme/theme.service';
const Tab = ({
  name,
  children,
  ...rest
}) => {
  const {
    theme
  } = useTheme();
  const styles = getStyle(theme, rest);
  return /*#__PURE__*/React.createElement(View, {
    style: styles.box
  }, children);
};
Tab.displayName = 'Tab';
const TabPanels = ({
  children,
  ...rest
}) => {
  const {
    theme
  } = useTheme();
  const styles = getStyle(theme, rest);
  return /*#__PURE__*/React.createElement(View, {
    style: styles.box
  }, children);
};
TabPanels.displayName = 'TabPanels';
const TabList = ({
  children
}) => {
  return /*#__PURE__*/React.createElement(View, null, children);
};
TabList.displayName = 'TabList';
const TabPanel = ({
  children,
  ...rest
}) => {
  const {
    theme
  } = useTheme();
  const styles = getStyle(theme, rest);
  return /*#__PURE__*/React.createElement(View, {
    style: {
      ...styles.box,
      ...styles.tabPanel
    }
  }, children);
};
TabPanel.displayName = 'TabPanel';
const Tabs = ({
  children,
  selectedTab,
  onChangeTab,
  initialPage,
  colorScheme = 'blue',
  ...rest
}) => {
  const layout = useWindowDimensions();
  const {
    theme
  } = useTheme();
  const [index, setIndex] = useState(initialPage || 0);
  const tabs = React.Children.toArray(children).find(child => {
    var _child$type;
    return ((_child$type = child.type) === null || _child$type === void 0 ? void 0 : _child$type.displayName) === 'TabList';
  });
  const panels = React.Children.toArray(children).find(child => {
    var _child$type2;
    return ((_child$type2 = child.type) === null || _child$type2 === void 0 ? void 0 : _child$type2.displayName) === 'TabPanels';
  });
  const tabsMainColor = colorScheme ? getThemeColor(theme.colors, `${colorScheme}.600`) : null;

  // Construct the routes from Tab children
  const routes = React.Children.map(tabs === null || tabs === void 0 ? void 0 : tabs.props.children, child => ({
    key: child.props.name,
    title: child.props.name,
    renderLabelChildren: child.props.children,
    otherProps: child.props
  }));
  const tabSceneMap = panels === null || panels === void 0 ? void 0 : panels.props.children.reduce((scenes, child) => {
    const {
      linkedTo,
      children: panelChildren,
      ...panelRest
    } = child.props;
    scenes[linkedTo] = () => /*#__PURE__*/React.createElement(TabPanel, panelRest, panelChildren);
    return scenes;
  }, {});

  // Construct the scene map from TabPanel children
  const renderScene = SceneMap(tabSceneMap);
  const renderLabel = ({
    route,
    focused,
    color
  }) => {
    if (typeof route.renderLabelChildren === 'string') {
      return /*#__PURE__*/React.createElement(Text, {
        style: {
          color: tabsMainColor || color
        }
      }, route.renderLabelChildren);
    }
    return /*#__PURE__*/React.createElement(View, null, typeof route.renderLabelChildren === 'function' ? route.renderLabelChildren({
      route,
      focused,
      color
    }) : route.renderLabelChildren);
  };

  // Style processing
  const styles = getStyle(theme, rest);
  const {
    children: tabsChildren,
    ...otherTabsProps
  } = tabs === null || tabs === void 0 ? void 0 : tabs.props;
  const {
    children: panelsChildren,
    ...otherPanelsProps
  } = panels === null || panels === void 0 ? void 0 : panels.props;
  const panelsStyles = getStyle(theme, otherPanelsProps);
  const tabBarStyle = getStyle(theme, otherTabsProps);
  return /*#__PURE__*/React.createElement(TabView, _extends({}, rest, {
    navigationState: {
      index: selectedTab !== undefined ? selectedTab : index,
      routes
    },
    initialLayout: {
      width: layout.width
    },
    sceneContainerStyle: panelsStyles.box,
    renderScene: renderScene,
    onIndexChange: ind => {
      onChangeTab(ind);
      setIndex(ind);
    },
    renderTabBar: props => {
      return /*#__PURE__*/React.createElement(TabBar, _extends({
        renderLabel: renderLabel,
        style: tabBarStyle.box
      }, colorScheme ? {
        indicatorStyle: {
          backgroundColor: tabsMainColor
        }
      } : {}, props, otherTabsProps, rest));
    },
    style: styles.box
  }));
};
export { Tabs, TabList, Tab, TabPanel, TabPanels };
//# sourceMappingURL=tabs.component.js.map