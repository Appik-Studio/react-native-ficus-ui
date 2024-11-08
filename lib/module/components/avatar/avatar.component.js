function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { useEffect, useState } from 'react';
import { ImageBackground as RNImageBackground, Text, View } from 'react-native';
import { getStyle } from './avatar.style';
import { useTheme } from '../../theme/theme.hook';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { handleResponsiveProps } from '../../types';
import React from 'react';
import { Icon } from '../icon/icon.component';
const Avatar = incomingProps => {
  const [isImageValid, setIsImageValid] = useState(false);
  const {
    theme,
    windowWidth
  } = useTheme();
  const props = useDefaultProps('Avatar', handleResponsiveProps(incomingProps, theme, windowWidth), {
    size: 'md',
    borderRadius: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
    overflow: 'visible',
    getInitials: name => {
      const nameParts = (`${name}` || '').split(' ');
      return name ? nameParts.map(part => part.charAt(0)).join('') : '';
    }
  });
  const {
    bg,
    h,
    w,
    m,
    mt,
    mr,
    mb,
    ml,
    ms,
    p,
    pr,
    pt,
    pb,
    pl,
    minH,
    minW,
    maxW,
    maxH,
    position,
    style,
    flexDirection,
    direction,
    borderRadius,
    borderTopRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderLeftRadius,
    borderRightRadius,
    borderBottomRadius,
    alignItems,
    align,
    justifyContent,
    justify,
    borderColor,
    borderBottomColor,
    borderLeftColor,
    borderTopColor,
    borderRightColor,
    borderWidth,
    borderLeftWidth,
    borderRightWidth,
    borderBottomWidth,
    borderTopWidth,
    borderEndWidth,
    flexWrap,
    wrap,
    flexGrow,
    grow,
    flexBasis,
    basis,
    flexShrink,
    shrink,
    shadow,
    shadowColor,
    boxShadow,
    filter,
    opacity,
    overflow,
    top,
    left,
    right,
    bottom,
    zIndex,
    elevation,
    colorScheme,
    size,
    name,
    getInitials,
    children,
    icon,
    ...rest
  } = props;
  const computedStyle = getStyle(theme, props);
  useEffect(() => {
    const checkImageUrl = async () => {
      if (props.src) {
        try {
          const response = await fetch(props.src);
          setIsImageValid(response.ok);
        } catch (error) {
          setIsImageValid(false);
        }
      }
    };
    checkImageUrl();
  }, [props.src]);
  if (!isImageValid) {
    return /*#__PURE__*/React.createElement(View, _extends({
      style: {
        ...computedStyle.avatar,
        ...computedStyle.avatarImage
      }
    }, rest), getInitials(name) ? /*#__PURE__*/React.createElement(Text, {
      style: computedStyle.text
    }, getInitials(name)) : icon && typeof icon === 'string' ? /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      fontSize: computedStyle.text.fontSize,
      fontFamily: computedStyle.text.fontFamily,
      color: computedStyle.text.color
    }) : icon ? icon : /*#__PURE__*/React.createElement(Icon, {
      name: "user",
      fontSize: computedStyle.text.fontSize,
      fontFamily: computedStyle.text.fontFamily,
      color: computedStyle.text.color
    }), React.Children.map(children, child => {
      if (child.type.name === 'AvatarBadge') {
        return /*#__PURE__*/React.cloneElement(child, computedStyle.avatarBadge);
      }

      // If the child is not AvatarBadge, return it unmodified
      return child;
    }));
  }
  return /*#__PURE__*/React.createElement(RNImageBackground, _extends({
    style: computedStyle.avatar,
    imageStyle: computedStyle.avatarImage,
    alt: name,
    source: props.src
  }, rest), React.Children.map(children, child => {
    if (child.type.name === 'AvatarBadge') {
      return /*#__PURE__*/React.cloneElement(child, computedStyle.avatarBadge);
    }

    // If the child is not AvatarBadge, return it unmodified
    return child;
  }));
};
export { Avatar };
//# sourceMappingURL=avatar.component.js.map