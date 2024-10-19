import Colors from "@/constants/Colors";
import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";

type TextVariant =
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
  | "overline"
  |"primary-title";

interface TypographyProps {
  variant?: TextVariant;
  style?: TextStyle;
  children: React.ReactNode;
  color?: string;
  align?: "left" | "center" | "right" | "justify";
}

const Typography: React.FC<TypographyProps> = ({
  variant = "body1",
  style,
  align = "left",
  color = Colors.black,
  children,
}) => {
  return (
    <Text
      style={[
        styles[variant],
        { width: "100%", color, textAlign: align },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 28,
    fontWeight: "bold",
  },
  h2: {
    fontSize: 24,
    fontWeight: "bold",
  },
  h3: {
    fontSize: 20,
    fontWeight: "bold",
  },
  h4: {
    fontSize: 18,
    fontWeight: "bold",
  },
  h5: {
    fontSize: 16,
    fontWeight: "bold",
  },
  h6: {
    fontSize: 14,
    fontWeight: "bold",
  },
  subtitle1: {
    fontSize: 14,
    fontWeight: "600",
  },
  subtitle2: {
    fontSize: 12,
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
    color: Colors["text-70"],
  },
  button: {
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  overline: {
    fontSize: 8,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  "primary-title": {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.primary,
  },
});

export default Typography;
