import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse';

interface StackProps {
  direction?: Direction;
  spacing?: number;
  alignItems?: ViewStyle['alignItems'];
  justifyContent?: ViewStyle['justifyContent'];
  children: React.ReactNode;
  style?: ViewStyle;
}

const Stack: React.FC<StackProps> = ({
  direction = 'column',
  spacing = 0,
  alignItems = 'flex-start',
  justifyContent = 'flex-start',
  children,
  style,
}) => {
  const stackStyle = {
    flexDirection: direction,
    alignItems,
    justifyContent,
    gap: spacing *8,
  };

  const childrenWithSpacing = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        style: [child.props.style],
      });
    }
    return child;
  });

  return <View style={[styles.stack, stackStyle, style]}>{childrenWithSpacing}</View>;
};

const styles = StyleSheet.create({
  stack: {
    display: 'flex',
  },
});

export default Stack;