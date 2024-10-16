import Colors from "@/constants/Colors";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";

interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps {
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  style?: ViewStyle;
  labelStyle?: TextStyle;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  value,
  onChange,
  style,
  labelStyle,
}) => {
  return (
    <View style={[styles.container, style]}>
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          style={styles.option}
          onPress={() => onChange(option.value)}
        >
          <View
            style={[
              styles.radio,
              value === option.value && styles.selectedRadio,
            ]}
          >
            {value === option.value && <View style={styles.innerCircle} />}
          </View>
          <Text style={[styles.label, labelStyle]}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.black,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  selectedRadio: {
    borderColor: Colors.primary,
  },
  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor:Colors.primary,
  },
  label: {
    fontSize: 16,
  },
});

export default RadioGroup;
