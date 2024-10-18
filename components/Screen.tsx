import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  LayoutChangeEvent,
  Platform,
  ScrollView,
  ScrollViewProps,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";
import { StatusBar, StatusBarProps } from "expo-status-bar";
import {
  Edge,
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";
import { useScrollToTop } from "@react-navigation/native";
import Colors from "@/constants/Colors";

export interface BaseScreenProps {
  /**
   * Children components.
   */
  children?: React.ReactNode;
  /**
   * Style for the outer content container useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Style for the inner content container useful for padding & margin.
   */
  contentContainerStyle?: StyleProp<ViewStyle>;
  /**
   * Override the default edges for the safe area.
   */
  safeAreaEdges?: Edge[];
  /**
   * Background color
   */
  backgroundColor?: string;
  /**
   * Status bar setting. Defaults to dark.
   */
  statusBarStyle?: "light" | "dark";
  /**
   * By how much should we offset the keyboard? Defaults to 0.
   */
  keyboardOffset?: number;
  /**
   * Pass any additional props directly to the SafeAreaView component.
   */
  SafeAreaViewProps?: SafeAreaViewProps;
  /**
   * Pass any additional props directly to the StatusBar component.
   */
  StatusBarProps?: StatusBarProps;
  /**
   * Pass any additional props directly to the KeyboardAvoidingView component.
   */
  KeyboardAvoidingViewProps?: KeyboardAvoidingViewProps;
}

export interface FixedScreenProps extends BaseScreenProps {
  preset?: "fixed";
}
export interface ScrollScreenProps extends BaseScreenProps {
  preset?: "scroll";
  /**
   * Should keyboard persist on screen tap. Defaults to handled.
   * Only applies to scroll preset.
   */
  keyboardShouldPersistTaps?: "handled" | "always" | "never";
  /**
   * Pass any additional props directly to the ScrollView component.
   */
  ScrollViewProps?: ScrollViewProps;
}

export interface AutoScreenProps extends Omit<ScrollScreenProps, "preset"> {
  preset?: "auto";
  /**
   * Threshold to trigger the automatic disabling/enabling of scroll ability.
   * Defaults to `{ percent: 0.92 }`.
   */
  scrollEnabledToggleThreshold?: { percent?: number; point?: number };
}

export type ScreenProps =
  | ScrollScreenProps
  | FixedScreenProps
  | AutoScreenProps;

const isIos = Platform.OS === "ios";

function isNonScrolling(preset?: ScreenProps["preset"]) {
  return !preset || preset === "fixed";
}

const DEFAULT_PERCENT = 0.92;
const DEFAULT_POINT = 0;

function useAutoPreset(props: AutoScreenProps) {
  const { preset, scrollEnabledToggleThreshold } = props;
  const { percent = DEFAULT_PERCENT, point = DEFAULT_POINT } =
    scrollEnabledToggleThreshold || {};

  const scrollViewHeight = useRef<number | null>(null);
  const scrollViewContentHeight = useRef<number | null>(null);
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const updateScrollState = useCallback(() => {
    if (
      scrollViewHeight.current === null ||
      scrollViewContentHeight.current === null
    )
      return;

    const contentFitsScreen = point
      ? scrollViewContentHeight.current < scrollViewHeight.current - point
      : scrollViewContentHeight.current < scrollViewHeight.current * percent;

    if (scrollEnabled && contentFitsScreen) setScrollEnabled(false);
    if (!scrollEnabled && !contentFitsScreen) setScrollEnabled(true);
  }, [scrollEnabled, percent, point]);

  const onContentSizeChange = useCallback(
    (w: number, h: number) => {
      scrollViewContentHeight.current = h;
      updateScrollState();
    },
    [updateScrollState]
  );

  const onLayout = useCallback(
    (e: LayoutChangeEvent) => {
      const { height } = e.nativeEvent.layout;
      scrollViewHeight.current = height;
      updateScrollState();
    },
    [updateScrollState]
  );

  useEffect(() => {
    if (preset === "auto") updateScrollState();
  }, [preset, updateScrollState]);

  return {
    scrollEnabled: preset === "auto" ? scrollEnabled : true,
    onContentSizeChange,
    onLayout,
  };
}

import { StyleSheet } from "react-native";

interface LocalScreenProps {
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  children: React.ReactNode;
}

function ScreenWithoutScrolling(props: LocalScreenProps) {
  const { style = {}, contentContainerStyle = {}, children } = props;

  return (
    <View
      style={[styles.outer, style]}
      accessible
      accessibilityLabel="Screen without scrolling"
    >
      <View style={[styles.inner, contentContainerStyle]}>{children}</View>
    </View>
  );
}

function ScreenWithScrolling(props: ScreenProps) {
  const {
    children,
    keyboardShouldPersistTaps = "handled",
    contentContainerStyle,
    ScrollViewProps,
    style,
  } = props as ScrollScreenProps;

  const ref = useRef<ScrollView>(null);

  const { scrollEnabled, onContentSizeChange, onLayout } = useAutoPreset(
    props as AutoScreenProps
  );

  // Add native behavior of pressing the active tab to scroll to the top of the content
  useScrollToTop(ref);

  const handleLayout = (e: LayoutChangeEvent) => {
    onLayout(e);
    ScrollViewProps?.onLayout?.(e);
  };

  const handleContentSizeChange = (w: number, h: number) => {
    onContentSizeChange(w, h);
    ScrollViewProps?.onContentSizeChange?.(w, h);
  };

  return (
    <ScrollView
      {...{ keyboardShouldPersistTaps, scrollEnabled, ref }}
      {...ScrollViewProps}
      onLayout={handleLayout}
      onContentSizeChange={handleContentSizeChange}
      style={[$outerStyle, ScrollViewProps?.style, style]}
      contentContainerStyle={[
        $innerStyle,
        ScrollViewProps?.contentContainerStyle,
        contentContainerStyle,
      ]}
      accessible
      accessibilityLabel="Screen with scrolling"
    >
      {children}
    </ScrollView>
  );
}


interface MainScreenProps extends BaseScreenProps {
  preset?: "fixed" | "scroll" | "auto";
}

export function Screen(props: MainScreenProps) {
  const {
    backgroundColor = Colors.white,
    KeyboardAvoidingViewProps = {},
    keyboardOffset = 0,
    safeAreaEdges,
    SafeAreaViewProps = {},
    StatusBarProps,
    statusBarStyle = "light",
  } = props;

  const Wrapper = safeAreaEdges?.length ? SafeAreaView : View;

  const renderContent = () => {
    if (isNonScrolling(props?.preset)) {
      return (
        <ScreenWithoutScrolling
          {...props}
          style={props.style as ViewStyle}
          contentContainerStyle={props.contentContainerStyle as ViewStyle}
        >
          {props.children}
        </ScreenWithoutScrolling>
      );
    }
    return <ScreenWithScrolling {...props} />;
  };

  return (
    <Wrapper
      edges={safeAreaEdges}
      {...SafeAreaViewProps}
      style={[styles.safeArea, SafeAreaViewProps?.style, props.style,{ backgroundColor }]}
      accessible
      accessibilityLabel="Screen wrapper"
    >
      <StatusBar style={statusBarStyle} {...StatusBarProps} />

      <KeyboardAvoidingView
        behavior={isIos ? "padding" : undefined}
        keyboardVerticalOffset={keyboardOffset}
        {...KeyboardAvoidingViewProps}
        style={[styles.keyboardAvoidingView, KeyboardAvoidingViewProps?.style,props.style]}
      >
        {renderContent()}
      </KeyboardAvoidingView>
    </Wrapper>
  );
}

const $outerStyle: ViewStyle = {
  flex: 1,
  height: "100%",
  width: "100%",
};

const $innerStyle: ViewStyle = {
  justifyContent: "flex-start",
  alignItems: "stretch",
  flex: 1,
};

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  inner: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  safeArea: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  keyboardAvoidingView: {
    flex: 1,
  },
});
