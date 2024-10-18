import Colors from "@/constants/Colors";
import { spacing } from "@/constants/spacing";
import React from "react";
import { View, StyleSheet, ViewStyle, Pressable, TouchableOpacity } from "react-native";

interface PaperProps {
  elevation?: number;
  style?: ViewStyle;
  children: React.ReactNode;
  onPress?: () => void;
}

// const Paper: React.FC<PaperProps> = ({ elevation = 1, style, children }) => {
//   const elevationStyle = getElevationStyle(elevation);
const Paper: React.FC<PaperProps> = ({
  elevation = 1,
  style,
  children,
  onPress,
}) => {
  const elevationStyle = getElevationStyle(elevation);

  const content = (
    <View style={[styles.paper, elevationStyle, style]}>{children}</View>
  );

  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        // style={[styles.paper, elevationStyle, style]}
        style={{width: "100%"}}
      >
        {content}
      </TouchableOpacity>
    );
  }

  return content;
};

const getElevationStyle = (elevation: number): ViewStyle => {
  return {
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: elevation },
    shadowOpacity: 0.1 * elevation,
    shadowRadius: 1.5 * elevation,
    elevation: elevation,
  };
};

const styles = StyleSheet.create({
  paper: {
    backgroundColor: Colors.white,
    borderRadius: 4,
    padding: spacing.medium,
    width: "100%",
  },
});

export default Paper;
