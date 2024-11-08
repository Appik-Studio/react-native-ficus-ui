import { StyleSheet } from 'react-native';
import { createShadowStyles, createPositionStyle, createSpacingStyles, createBorderWidthStyles, createBorderColorStyles, createBorderRadiusStyles, getThemeColor } from '../../theme/theme.service';
// Tab view component from react-native-tab-view has a bug with style prop i have to use this workaround to fix it
const removeUndefinedProps = obj => {
  Object.keys(obj).forEach(key => {
    if (obj[key] === undefined) {
      delete obj[key];
    }
  });
};

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme, props) => {
  const computedStyle = {};
  computedStyle.box = {
    flexDirection: props.direction ? props.direction : props.flexDirection,
    flexWrap: props.wrap ? props.wrap : props.flexWrap,
    alignItems: props.align ? props.align : props.alignItems,
    justifyContent: props.justify ? props.justify : props.justifyContent,
    flexBasis: props.basis ? props.basis : props.flexBasis,
    flexGrow: props.grow ? props.grow : props.flexGrow,
    flexShrink: props.shrink ? props.shrink : props.flexShrink,
    height: props.h,
    width: props.w,
    minWidth: props.minW,
    minHeight: props.minH,
    alignSelf: props.alignSelf,
    maxWidth: props.maxW,
    maxHeight: props.maxH,
    opacity: props.opacity,
    overflow: props.overflow,
    zIndex: props.zIndex,
    borderStyle: props.borderStyle,
    backgroundColor: getThemeColor(theme.colors, props.bg),
    flex: props.flex,
    ...createPositionStyle(props),
    ...createShadowStyles(props, theme),
    ...createBorderWidthStyles(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius)
  };
  computedStyle.tabPanel = {
    flex: 1
  };
  removeUndefinedProps(computedStyle.box);

  // merging custom style props to computed style
  if (props.style) {
    computedStyle.box = {
      ...computedStyle.box,
      ...props.style
    };
  }
  return StyleSheet.create(computedStyle);
};
//# sourceMappingURL=tabs.style.js.map