// Stack.tsx
import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";

type Direction = "row" | "column" | "row-reverse" | "column-reverse";

interface StackProps {
  direction?: Direction;
  spacing?: number;
  alignItems?: ViewStyle["alignItems"];
  justifyContent?: ViewStyle["justifyContent"];
  alignContent?: ViewStyle["alignContent"];
  alignSelf?: ViewStyle["alignSelf"];
  children: React.ReactNode;
  style?: ViewStyle;
}

const Stack = ({
  direction = "column",
  spacing = 0,
  alignItems = "flex-start",
  justifyContent = "flex-start",
  alignContent = "flex-start",
  alignSelf = "flex-start",
  children,
  style,
}: StackProps) => {
  const stackStyle = {
    flexDirection: direction,
    alignItems,
    justifyContent,
    alignContent,
    alignSelf,
    gap: spacing * 8,
  };

  const childrenWithSpacing = React.Children.map(children, (child: React.ReactNode) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        style: [child.props.style],
      });
    }
    return child;
  });

  return (
    <View style={[styles.stack, stackStyle, style]}>{childrenWithSpacing}</View>
  );
};

const styles = StyleSheet.create({
  stack: {
    display: "flex",
    width: "100%",
  },
});

export default Stack;
