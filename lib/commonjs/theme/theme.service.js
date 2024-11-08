"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getThemeProperty = exports.getThemeFontFamily = exports.getThemeColor = exports.getFontWeight = exports.createStackSpacingStyles = exports.createSpacingStyles = exports.createShadowStyles = exports.createPositionStyle = exports.createFlexStyles = exports.createBorderWidthStyles = exports.createBorderRadiusStyles = exports.createBorderColorStyles = exports.createAvatarStyles = void 0;
var _utilities = require("../utilities");
/**
 * Create spacing styles from object of style props passed to ficus component
 *
 * m="10", mt="xl"
 *
 * @param value
 * @param theme
 */
const createSpacingStyles = (props, theme) => {
  const propKeys = {
    p: 'padding',
    pt: 'paddingTop',
    pr: 'paddingRight',
    pb: 'paddingBottom',
    pl: 'paddingLeft',
    px: 'paddingHorizontal',
    py: 'paddingVertical',
    ps: 'paddingStart',
    m: 'margin',
    mt: 'marginTop',
    mr: 'marginRight',
    mb: 'marginBottom',
    ml: 'marginLeft',
    mx: 'marginHorizontal',
    my: 'marginVertical',
    ms: 'marginStart',
    gap: 'gap',
    gapX: 'rowGap',
    gapY: 'columnGap'
  };
  const computedStyle = {};
  for (const propKey of Object.keys(propKeys)) {
    const styleProperty = propKeys[propKey];
    if (propKey in props) {
      computedStyle[styleProperty] = getThemeProperty(theme, props[propKey]);
    }
  }
  return computedStyle;
};

/**
 * Create spacing styles from object of style props passed to ficus component
 *
 * m="10", mt="xl"
 *
 * @param props
 * @param theme
 */
exports.createSpacingStyles = createSpacingStyles;
const createStackSpacingStyles = (props, theme) => {
  const computedStyle = {};
  if ('spacing' in props) {
    computedStyle.height = getThemeProperty(theme, props.spacing);
    computedStyle.width = getThemeProperty(theme, props.spacing);
  }
  return computedStyle;
};

/**
 * Create size styles from object of style props passed to ficus component
 *
 * @param props
 * @param theme
 */
exports.createStackSpacingStyles = createStackSpacingStyles;
const createAvatarStyles = (props, theme) => {
  const computedStyle = {};
  if (props.h || props.w) {
    computedStyle.height = props.h;
    computedStyle.width = props.w;
    return computedStyle;
  }
  if ('size' in props) {
    computedStyle.height = getThemeProperty(theme, props.size);
    computedStyle.width = getThemeProperty(theme, props.size);
  }
  return computedStyle;
};

/**
 * Get font weight for font
 *
 * @param themeFontFamily
 * @param fontFamily
 * @param fontWeight
 */
exports.createAvatarStyles = createAvatarStyles;
const getFontWeight = (themeFontFamily, fontFamily, fontWeight) => {
  if (fontFamily === '' || !fontWeight) {
    return fontWeight;
  }
  if (themeFontFamily) {
    if (typeof themeFontFamily[fontWeight] !== 'undefined') {
      return 'normal';
    }
  }
  if (!fontFamily) {
    return fontWeight;
  }
  return 'normal';
};

/**
 * extract the fontFamily from theme

 * @param themeFontFamily
 * @param fontWeight
 */
exports.getFontWeight = getFontWeight;
const getThemeFontFamily = (themeFontFamily, fontWeight = 'normal') => {
  if (themeFontFamily) {
    if (fontWeight in themeFontFamily) {
      return themeFontFamily[fontWeight];
    }
  }
  return undefined;
};

/**
 * Get real theme color value
 *
 * @param themeColors
 * @param value
 */
exports.getThemeFontFamily = getThemeFontFamily;
const getThemeColor = (themeColors, value) => {
  let colorValueResult = value;
  if (themeColors && value) {
    // Check if color value is a valid theme color
    if (themeColors.hasOwnProperty(value) && (typeof themeColors[value] === 'string' || themeColors[value] instanceof String)) {
      const colorValue = themeColors[value];
      return colorValue;
    }

    // If color value contains dots, check into theme sub objects if it's a valid theme color
    if (value.includes('.')) {
      const keyParts = value.split('.');
      let subPropertyValue = themeColors;
      for (const part of keyParts) {
        if (subPropertyValue && part) {
          subPropertyValue = subPropertyValue[part];
        }
      }
      if (typeof subPropertyValue === 'string' || subPropertyValue instanceof String) {
        colorValueResult = subPropertyValue;
      }
    }
  }
  return (0, _utilities.isValidColor)(colorValueResult) ? colorValueResult : 'transparent';
};

/**
 * extract the theme property from theme
 * if thereis no theme property in the value, return the value
 *
 * @param theme
 * @param value
 */
exports.getThemeColor = getThemeColor;
const getThemeProperty = (theme, value) => {
  if (theme) {
    if (typeof theme[value] !== 'undefined') {
      return theme[value];
    }
  }
  return value;
};

/**
 * borderRadius="xl"
 *
 * @param value
 * @param theme
 */
exports.getThemeProperty = getThemeProperty;
const createBorderRadiusStyles = (props, theme) => {
  const propKeys = {
    borderRadius: 'borderRadius',
    borderTopLeftRadius: 'borderTopLeftRadius',
    borderTopRightRadius: 'borderTopRightRadius',
    borderBottomLeftRadius: 'borderBottomLeftRadius',
    borderBottomRightRadius: 'borderBottomRightRadius',
    borderTopRadius: ['borderTopLeftRadius', 'borderTopRightRadius'],
    borderLeftRadius: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    borderRightRadius: ['borderTopRightRadius', 'borderBottomRightRadius'],
    borderBottomRadius: ['borderBottomLeftRadius', 'borderBottomRightRadius']
  };
  const computedStyle = {};
  for (const propKey of Object.keys(propKeys)) {
    const styleProperty = propKeys[propKey];
    if (propKey in props) {
      if (styleProperty instanceof Array) {
        styleProperty.forEach(property => {
          computedStyle[property] = getThemeProperty(theme, props[propKey]);
        });
      } else {
        computedStyle[styleProperty] = getThemeProperty(theme, props[propKey]);
      }
    }
  }
  return computedStyle;
};

/**
 * adds flex property in styles
 *
 * @param props
 */
exports.createBorderRadiusStyles = createBorderRadiusStyles;
const createFlexStyles = props => {
  const propKeys = {
    flex: 'flex'
  };
  const computedStyle = {};
  for (const propKey of Object.keys(propKeys)) {
    const styleProperty = propKeys[propKey];
    if (propKey in props) {
      computedStyle[styleProperty] = props[propKey];
    }
  }
  return computedStyle;
};

/**
 * create borderWidth styles
 *
 * @param value
 */
exports.createFlexStyles = createFlexStyles;
const createBorderWidthStyles = props => {
  const propKeys = {
    borderWidth: 'borderWidth',
    borderStartWidth: 'borderStartWidth',
    borderEndWidth: 'borderEndWidth',
    borderTopWidth: 'borderTopWidth',
    borderLeftWidth: 'borderLeftWidth',
    borderRightWidth: 'borderRightWidth',
    borderBottomWidth: 'borderBottomWidth'
  };
  const computedStyle = {};
  for (const propKey of Object.keys(propKeys)) {
    const styleProperty = propKeys[propKey];
    if (propKey in props) {
      computedStyle[styleProperty] = props[propKey];
    }
  }
  return computedStyle;
};

/**
 * create borderRadius styles
 *
 * @param value
 */
exports.createBorderWidthStyles = createBorderWidthStyles;
const createBorderColorStyles = (props, theme) => {
  const propKeys = {
    borderColor: 'borderColor',
    borderTopColor: 'borderTopColor',
    borderRightColor: 'borderRightColor',
    borderLeftColor: 'borderLeftColor',
    borderBottomColor: 'borderBottomColor'
  };
  const computedStyle = {};
  for (const propKey of Object.keys(propKeys)) {
    const styleProperty = propKeys[propKey];
    if (propKey in props) {
      if (styleProperty instanceof Array) {
        styleProperty.forEach(property => {
          computedStyle[property] = getThemeColor(theme, props[propKey]);
        });
      } else {
        computedStyle[styleProperty] = getThemeColor(theme, props[propKey]);
      }
    }
  }
  return computedStyle;
};

/**
 * adds shadows property in styles
 *
 * @param props
 */
exports.createBorderColorStyles = createBorderColorStyles;
const createShadowStyles = (props, theme) => {
  let computedStyle = {};
  if (props.boxShadow) {
    computedStyle = {
      boxShadow: props.boxShadow
    };
  } else if (props.shadow) {
    computedStyle = {
      ...(theme.shadow && theme.shadow[props.shadow]),
      shadowColor: props.shadowColor ? getThemeColor(theme.colors, props.shadowColor) : 'black',
      overflow: 'visible'
    };
  }
  if (props.filter) {
    computedStyle = {
      ...computedStyle,
      filter: props.filter
    };
  }
  return computedStyle;
};

/**
 * position="absolute"
 * top={10}
 *
 * @param value
 */
exports.createShadowStyles = createShadowStyles;
const createPositionStyle = props => {
  const propKeys = {
    position: 'position',
    top: 'top',
    left: 'left',
    right: 'right',
    bottom: 'bottom'
  };
  const computedStyle = {};
  for (const propKey of Object.keys(propKeys)) {
    const styleProperty = propKeys[propKey];
    if (propKey in props) {
      computedStyle[styleProperty] = props[propKey];
    }
  }
  return computedStyle;
};
exports.createPositionStyle = createPositionStyle;
//# sourceMappingURL=theme.service.js.map