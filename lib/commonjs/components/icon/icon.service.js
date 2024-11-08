"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIconSet = void 0;
var _Entypo = _interopRequireDefault(require("react-native-vector-icons/Entypo"));
var _Zocial = _interopRequireDefault(require("react-native-vector-icons/Zocial"));
var _Feather = _interopRequireDefault(require("react-native-vector-icons/Feather"));
var _Ionicons = _interopRequireDefault(require("react-native-vector-icons/Ionicons"));
var _Octicons = _interopRequireDefault(require("react-native-vector-icons/Octicons"));
var _AntDesign = _interopRequireDefault(require("react-native-vector-icons/AntDesign"));
var _EvilIcons = _interopRequireDefault(require("react-native-vector-icons/EvilIcons"));
var _Foundation = _interopRequireDefault(require("react-native-vector-icons/Foundation"));
var _FontAwesome = _interopRequireDefault(require("react-native-vector-icons/FontAwesome"));
var _FontAwesome2 = _interopRequireDefault(require("react-native-vector-icons/FontAwesome5"));
var _MaterialIcons = _interopRequireDefault(require("react-native-vector-icons/MaterialIcons"));
var _SimpleLineIcons = _interopRequireDefault(require("react-native-vector-icons/SimpleLineIcons"));
var _MaterialCommunityIcons = _interopRequireDefault(require("react-native-vector-icons/MaterialCommunityIcons"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * get icon set
 */
const getIconSet = (fontFamily = 'FontAwesome') => {
  switch (fontFamily) {
    case 'AntDesign':
      return _AntDesign.default;
    case 'Entypo':
      return _Entypo.default;
    case 'EvilIcons':
      return _EvilIcons.default;
    case 'Feather':
      return _Feather.default;
    case 'FontAwesome':
      return _FontAwesome.default;
    case 'FontAwesome5':
      return _FontAwesome2.default;
    case 'Foundation':
      return _Foundation.default;
    case 'Ionicons':
      return _Ionicons.default;
    case 'MaterialIcons':
      return _MaterialIcons.default;
    case 'MaterialCommunityIcons':
      return _MaterialCommunityIcons.default;
    case 'Zocial':
      return _Zocial.default;
    case 'SimpleLineIcons':
      return _SimpleLineIcons.default;
    case 'Octicons':
      return _Octicons.default;
    case 'Ionicons':
      return _Ionicons.default;
    default:
      return _AntDesign.default;
  }
};
exports.getIconSet = getIconSet;
//# sourceMappingURL=icon.service.js.map