// src/index.tsx
import { jsx } from "react/jsx-runtime";
var Button = ({
  children,
  onClick,
  variant = "primary",
  size = "medium"
}) => {
  const baseClasses = "font-bold rounded focus:outline-none focus:ring-2 transition-colors";
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500"
  };
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg"
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`,
      onClick,
      children
    }
  );
};
var src_default = Button;
export {
  Button,
  src_default as default
};
//# sourceMappingURL=index.js.map