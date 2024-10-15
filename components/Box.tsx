import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface BoxProps {
  flexDirection?: ViewStyle['flexDirection'];
  alignItems?: ViewStyle['alignItems'];
  justifyContent?: ViewStyle['justifyContent'];
  padding?: number | string;
  margin?: number | string;
  backgroundColor?: string;
  children: React.ReactNode;
  style?: ViewStyle;
}

const Box: React.FC<BoxProps> = ({
  flexDirection,
  alignItems,
  justifyContent,
  padding,
  margin,
  backgroundColor,
  children,
  style,
}) => {
  const boxStyle: ViewStyle = {
    flexDirection,
    alignItems,
    justifyContent,
    padding: typeof padding === 'string' ? parseFloat(padding) : padding,
    margin: typeof margin === 'string' ? parseFloat(margin) : margin,
    backgroundColor,
  };

  return <View style={[styles.box, boxStyle, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  box: {
    display: 'flex',
  },
});

export default Box;