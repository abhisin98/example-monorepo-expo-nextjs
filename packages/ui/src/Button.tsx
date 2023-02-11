import * as React from "react";
import {
  TouchableOpacity,
  Text,
  TextStyle,
  StyleProp,
  TouchableOpacityProps,
} from "react-native";

interface IButtonProps extends TouchableOpacityProps {
  style: StyleProp<TextStyle>;
}

export const Button: React.FunctionComponent<IButtonProps> = ({
  style,
  children,
  ...rest
}) => {
  return (
    <TouchableOpacity {...rest}>
      <Text style={[{ color: "white" }, style]}>{children}</Text>
    </TouchableOpacity>
  );
};
