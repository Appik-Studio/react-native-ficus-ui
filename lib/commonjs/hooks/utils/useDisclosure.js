"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDisclosure = void 0;
var _react = require("react");
const useDisclosure = () => {
  const [isOpen, setIsOpen] = (0, _react.useState)(false);
  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  return {
    isOpen,
    onOpen,
    onClose
  };
};
exports.useDisclosure = useDisclosure;
//# sourceMappingURL=useDisclosure.js.map