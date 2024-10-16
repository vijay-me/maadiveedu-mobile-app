import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";

interface TypographyProps {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline";
  style?: TextStyle;
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  variant = "body1",
  style,
  children,
}) => {
  return <Text style={[styles[variant], style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 32,
    fontWeight: "bold",
  },
  h2: {
    fontSize: 28,
    fontWeight: "bold",
  },
  h3: {
    fontSize: 24,
    fontWeight: "bold",
  },
  h4: {
    fontSize: 20,
    fontWeight: "bold",
  },
  h5: {
    fontSize: 18,
    fontWeight: "bold",
  },
  h6: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle1: {
    fontSize: 16,
    fontWeight: "600",
  },
  subtitle2: {
    fontSize: 14,
    fontWeight: "600",
  },
  body1: {
    fontSize: 16,
  },
  body2: {
    fontSize: 14,
  },
  caption: {
    fontSize: 12,
    color: "#6e6e6e",
  },
  button: {
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  overline: {
    fontSize: 10,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default Typography;
