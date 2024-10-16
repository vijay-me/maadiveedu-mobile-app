import Colors from '@/constants/Colors';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const {primary,white,black,disabled}=Colors;

interface StepperProps {
  steps: string[];
  activeStep: number;
  completedSteps: number[];
  onStepClick?: (step: number) => void;
}

const Stepper: React.FC<StepperProps> = ({ steps, activeStep, completedSteps, onStepClick }) => {
  return (
    <View style={styles.container}>
      {steps.map((label, index) => {
        const isActive = index === activeStep;
        const isCompleted = completedSteps.includes(index);
        return (
          <TouchableOpacity
            key={index}
            style={[
              styles.step,
              isActive && styles.activeStep,
              isCompleted && styles.completedStep,
            ]}
            onPress={() => onStepClick && onStepClick(index)}
          >
            <Text style={[
              styles.stepText,
              isActive && styles.activeStepText,
              isCompleted && styles.completedStepText,
            ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  step: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: disabled,
    marginHorizontal: 5,
  },
  activeStep: {
    backgroundColor: primary,
  },
  completedStep: {
    backgroundColor: primary,
  },
  stepText: {
    color: black,
  },
  activeStepText: {
    color: white,
  },
  completedStepText: {
    color: white,
  },
});

export default Stepper;

// import React from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   ViewStyle,
//   TextStyle,
// } from "react-native";

// interface StepperProps {
//   activeStep: number;
//   orientation?: "horizontal" | "vertical";
//   children: React.ReactNode;
//   style?: ViewStyle;
// }

// interface StepProps {
//   index: number;
//   activeStep: number;
//   orientation?: "horizontal" | "vertical";
//   children: React.ReactNode;
//   style?: ViewStyle;
// }

// interface StepLabelProps {
//   children: React.ReactNode;
//   style?: TextStyle;
//   active?: boolean;
//   optional?: React.ReactNode;
// }

// interface StepContentProps {
//   children: React.ReactNode;
//   style?: ViewStyle;
// }

// const Stepper: React.FC<StepperProps> = ({
//   activeStep,
//   orientation = "horizontal",
//   children,
//   style,
// }) => {
//   return (
//     <View
//       style={[
//         styles.stepper,
//         orientation === "vertical" && styles.verticalStepper,
//         style,
//       ]}
//     >
//       {React.Children.map(children, (child, index) =>
//         React.cloneElement(child as React.ReactElement<any>, {
//           index,
//           activeStep,
//           orientation,
//         })
//       )}
//     </View>
//   );
// };

// const Step: React.FC<StepProps> = ({
//   index,
//   activeStep,
//   orientation = "horizontal",
//   children,
//   style,
// }) => {
//   return (
//     <View
//       style={[
//         styles.step,
//         orientation === "vertical" && styles.verticalStep,
//         style,
//       ]}
//     >
//       {React.Children.map(children, (child) =>
//         React.cloneElement(child as React.ReactElement<any>, {
//           active: index === activeStep,
//         })
//       )}
//     </View>
//   );
// };

// const StepLabel: React.FC<StepLabelProps> = ({
//   children,
//   style,
//   active,
//   optional,
// }) => {
//   return (
//     <View style={styles.stepLabelContainer}>
//       <Text style={[styles.stepLabel, style, active && styles.activeStepLabel]}>
//         {children}
//       </Text>
//       {optional && <Text style={styles.optionalLabel}>{optional}</Text>}
//     </View>
//   );
// };

// const StepContent: React.FC<StepContentProps> = ({ children, style }) => {
//   return <View style={[styles.stepContent, style]}>{children}</View>;
// };

// const styles = StyleSheet.create({
//   stepper: {
//     flexDirection: "row",
//   },
//   verticalStepper: {
//     flexDirection: "column",
//   },
//   step: {
//     marginHorizontal: 8,
//   },
//   verticalStep: {
//     marginVertical: 8,
//   },
//   stepLabelContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   stepLabel: {
//     fontSize: 16,
//     color: "#000",
//   },
//   activeStepLabel: {
//     fontWeight: "bold",
//     color: "#3f51b5",
//   },
//   optionalLabel: {
//     fontSize: 12,
//     color: "#999",
//     marginLeft: 8,
//   },
//   stepContent: {
//     paddingLeft: 16,
//     borderLeftWidth: 2,
//     borderLeftColor: "#3f51b5",
//   },
// });

// export { Stepper, Step, StepLabel, StepContent };
