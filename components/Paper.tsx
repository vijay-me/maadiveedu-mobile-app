import Colors from "@/constants/Colors";
import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";

interface PaperProps {
  elevation?: number;
  style?: ViewStyle;
  children: React.ReactNode;
}

const Paper: React.FC<PaperProps> = ({ elevation = 1, style, children }) => {
  const elevationStyle = getElevationStyle(elevation);

  return <View style={[styles.paper, elevationStyle, style]}>{children}</View>;
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
    padding: 10,
  },
});

export default Paper;
