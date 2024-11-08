"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = exports.TabPanels = exports.TabPanel = exports.TabList = exports.Tab = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeTabView = require("react-native-tab-view");
var _theme = require("../../theme");
var _tabs = require("./tabs.style");
var _text = require("../text/text.component");
var _theme2 = require("../../theme/theme.service");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Tab = ({
  name,
  children,
  ...rest
}) => {
  const {
    theme
  } = (0, _theme.useTheme)();
  const styles = (0, _tabs.getStyle)(theme, rest);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.box
  }, children);
};
exports.Tab = Tab;
Tab.displayName = 'Tab';
const TabPanels = ({
  children,
  ...rest
}) => {
  const {
    theme
  } = (0, _theme.useTheme)();
  const styles = (0, _tabs.getStyle)(theme, rest);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.box
  }, children);
};
exports.TabPanels = TabPanels;
TabPanels.displayName = 'TabPanels';
const TabList = ({
  children
}) => {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, children);
};
exports.TabList = TabList;
TabList.displayName = 'TabList';
const TabPanel = ({
  children,
  ...rest
}) => {
  const {
    theme
  } = (0, _theme.useTheme)();
  const styles = (0, _tabs.getStyle)(theme, rest);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      ...styles.box,
      ...styles.tabPanel
    }
  }, children);
};
exports.TabPanel = TabPanel;
TabPanel.displayName = 'TabPanel';
const Tabs = ({
  children,
  selectedTab,
  onChangeTab,
  initialPage,
  colorScheme = 'blue',
  ...rest
}) => {
  const layout = (0, _reactNative.useWindowDimensions)();
  const {
    theme
  } = (0, _theme.useTheme)();
  const [index, setIndex] = (0, _react.useState)(initialPage || 0);
  const tabs = _react.default.Children.toArray(children).find(child => {
    var _child$type;
    return ((_child$type = child.type) === null || _child$type === void 0 ? void 0 : _child$type.displayName) === 'TabList';
  });
  const panels = _react.default.Children.toArray(children).find(child => {
    var _child$type2;
    return ((_child$type2 = child.type) === null || _child$type2 === void 0 ? void 0 : _child$type2.displayName) === 'TabPanels';
  });
  const tabsMainColor = colorScheme ? (0, _theme2.getThemeColor)(theme.colors, `${colorScheme}.600`) : null;

  // Construct the routes from Tab children
  const routes = _react.default.Children.map(tabs === null || tabs === void 0 ? void 0 : tabs.props.children, child => ({
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
    scenes[linkedTo] = () => /*#__PURE__*/_react.default.createElement(TabPanel, panelRest, panelChildren);
    return scenes;
  }, {});

  // Construct the scene map from TabPanel children
  const renderScene = (0, _reactNativeTabView.SceneMap)(tabSceneMap);
  const renderLabel = ({
    route,
    focused,
    color
  }) => {
    if (typeof route.renderLabelChildren === 'string') {
      return /*#__PURE__*/_react.default.createElement(_text.Text, {
        style: {
          color: tabsMainColor || color
        }
      }, route.renderLabelChildren);
    }
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, typeof route.renderLabelChildren === 'function' ? route.renderLabelChildren({
      route,
      focused,
      color
    }) : route.renderLabelChildren);
  };

  // Style processing
  const styles = (0, _tabs.getStyle)(theme, rest);
  const {
    children: tabsChildren,
    ...otherTabsProps
  } = tabs === null || tabs === void 0 ? void 0 : tabs.props;
  const {
    children: panelsChildren,
    ...otherPanelsProps
  } = panels === null || panels === void 0 ? void 0 : panels.props;
  const panelsStyles = (0, _tabs.getStyle)(theme, otherPanelsProps);
  const tabBarStyle = (0, _tabs.getStyle)(theme, otherTabsProps);
  return /*#__PURE__*/_react.default.createElement(_reactNativeTabView.TabView, _extends({}, rest, {
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
      return /*#__PURE__*/_react.default.createElement(_reactNativeTabView.TabBar, _extends({
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
exports.Tabs = Tabs;
//# sourceMappingURL=tabs.component.js.map