import Colors from "@/constants/Colors";
import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
  ViewStyle,
  TextStyle,
} from "react-native";

type Variant = "contained" | "outlined" | "text";
type Color = "primary" | "secondary" | "error" | "warning" | "info" | "success";

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  color?: Color;
  backgroundColor?: string;
  variant?: Variant;
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
}

interface ButtonTheme {
  button: ViewStyle;
  text: TextStyle;
}

const buttonTheme: Record<Variant, (color: Color) => ButtonTheme> = {
  contained: (color: Color) => ({
    button: { backgroundColor: Colors[color] },
    text: { color: Colors.white },
  }),
  outlined: (color: Color) => ({
    button: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: Colors[color],
    },
    text: { color: Colors[color] },
  }),
  text: (color: Color) => ({
    button: { backgroundColor: "transparent" },
    text: { color: Colors[color] },
  }),
};

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  color = "primary",
  backgroundColor,
  variant = "contained",
  disabled = false,
  startIcon,
  endIcon,
  fullWidth = false,
}) => {
  const { button: buttonStyle, text: textStyle } = buttonTheme[variant](color);

  return (
    <TouchableOpacity
      style={[
        styles.button,
        buttonStyle,
        fullWidth && { width: "100%" },
        disabled && styles.disabledButton,
        backgroundColor ? { backgroundColor } : undefined,
      ]}
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
    >
      {startIcon && <>{startIcon}</>}
      <Text style={[styles.text, textStyle]}>{title}</Text>
      {endIcon && <>{endIcon}</>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    minHeight: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  disabledButton: {
    backgroundColor: Colors.disabled,
  },
});

export default Button;
