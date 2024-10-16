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

interface CheckBoxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  style?: ViewStyle;
  labelStyle?: TextStyle;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  checked,
  onChange,
  label,
  style,
  labelStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => onChange(!checked)}
    >
      <View style={[styles.box, checked && styles.checkedBox]}>
        {checked && <Text style={styles.checkMark}>✔</Text>}
      </View>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  box: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: Colors["text-50"],
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  checkedBox: {
    backgroundColor: Colors.primary,
  },
  checkMark: {
    color: Colors.white,
    fontSize: 16,
  },
  label: {
    fontSize: 16,
  },
});

export default CheckBox;
