import { StyleSheet } from 'react-native';
import { createSpacingStyles, createBorderWidthStyles, createBorderColorStyles, createBorderRadiusStyles } from '../../theme/theme.service';
/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme, props) => {
  const computedStyle = {};
  computedStyle.modal = {
    margin: 0,
    justifyContent: props.justifyContent
  };
  computedStyle.container = {
    ...createBorderWidthStyles(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius)
  };
  computedStyle.safeView = {
    flex: 1
  };

  // merging style props to computed style
  if (props.style) {
    computedStyle.modal = {
      ...computedStyle.modal,
      // @ts-ignore
      ...props.style
    };
  }
  return StyleSheet.create(computedStyle);
};
//# sourceMappingURL=modal.style.js.map