import React from "react";
import { TouchableOpacity, StyleSheet, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // or any other icon library you are using
import Colors from "@/constants/Colors";

interface IconButtonProps {
  onPress: () => void;
  icon: keyof typeof Ionicons.glyphMap;
  color?: string;
  size?: number;
  disabled?: boolean;
  style?: ViewStyle;
}

const IconButton: React.FC<IconButtonProps> = ({
  onPress,
  icon,
  color = Colors["text-70"],
  size = 24,
  disabled = false,
  style,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Ionicons
        name={icon}
        size={size}
        color={disabled ? Colors.disabled : color}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 50,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default IconButton;
