import Colors from "@/constants/Colors";
import { spacing } from "@/constants/spacing";
import { ReactNode } from "react";
import { Edge } from "react-native-safe-area-context";
import { Screen } from "./Screen";
import {  StyleSheet, ViewStyle } from "react-native";


interface ScreenDefaultProps {
  children: ReactNode;
  safeAreaEdges?: Edge[];
  isNoPadding?: boolean;
  style?:ViewStyle;
  [key: string]: any; // Consider defining all expected props explicitly
}

export function ScreenDefault(props: ScreenDefaultProps) {
  const { children, safeAreaEdges = [],style, isNoPadding } = props;
  return (
    <Screen
      safeAreaEdges={safeAreaEdges}
      style={[styles.container,style]}
      contentContainerStyle={{
        flex: 1,
        padding: isNoPadding ? 0 : spacing.medium,
        paddingBottom: 0,
        backgroundColor: Colors.white,
        height: "100%",
      }}
      {...props}
    >
      {children}
    </Screen>
  );
}

const $container = {
  flex: 1,
  height:'100%',
  backgroundColor: Colors.white,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: Colors.white,
  },
});