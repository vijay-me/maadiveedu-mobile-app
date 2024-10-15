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

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  color?: string;
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

const buttonTheme: Record<Variant, ButtonTheme> = {
  contained: {
    button: { backgroundColor: Colors.primary },
    text: { color: "#fff" },
  },
  outlined: {
    button: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: Colors.primary,
    },
    text: { color: Colors.primary },
  },
  text: {
    button: { backgroundColor: "transparent" },
    text: { color: Colors.primary },
  },
};

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  color,
  backgroundColor,
  variant = "contained",
  disabled = false,
  startIcon,
  endIcon,
  fullWidth = false,
}) => {
  const { button: buttonStyle, text: textStyle } = buttonTheme[variant];

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
      <Text style={[styles.text, textStyle, color ? { color } : undefined]}>
        {title}
      </Text>
      {endIcon && <>{endIcon}</>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
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
