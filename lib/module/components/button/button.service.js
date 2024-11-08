import color from 'color';
import { getThemeColor } from '../../theme/theme.service';
const hexToRgba = (hex, alpha = 1) => {
  // Remove the hash (#) if present
  hex = hex.replace(/^#/, '');

  // Parse the hex string depending on its length (3, 6, or 8 characters)
  let r, g, b;
  if (hex.length === 3) {
    r = parseInt(hex[0] + hex[0], 16);
    g = parseInt(hex[1] + hex[1], 16);
    b = parseInt(hex[2] + hex[2], 16);
  } else if (hex.length === 6) {
    r = parseInt(hex.slice(0, 2), 16);
    g = parseInt(hex.slice(2, 4), 16);
    b = parseInt(hex.slice(4, 6), 16);
  }

  // Return the rgba string
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

/**
 * returns underlay color
 *
 * @param theme
 * @param props
 */
export const getUnderlayColor = (theme, props) => {
  return props.underlayColor ? getThemeColor(theme.colors, props.underlayColor) : props.bg ? color(getThemeColor(theme.colors, props.bg)).darken(0.1).rgb().string() : props.variant === 'solid' ? getThemeColor(theme.colors, `${props.colorScheme}.800`) : props.variant === 'outline' || props.variant === 'ghost' ? hexToRgba(getThemeColor(theme.colors, `${props.colorScheme}.500`), 0.1) : 'transparent';
};

/**
 * return ripple color
 *
 * @param theme
 * @param props
 */
export const getRippleColor = (theme, props) => {
  return color(getThemeColor(theme.colors, props.rippleColor)).alpha(props.disabled ? 0 : 0.2).rgb().string();
};
//# sourceMappingURL=button.service.js.map