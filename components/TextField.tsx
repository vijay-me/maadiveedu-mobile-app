import Colors from "@/constants/Colors";
import { spacing } from "@/constants/spacing";
import React from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TextInputProps,
} from "react-native";

interface TextFieldProps extends TextInputProps {
  label?: string;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  error = false,
  helperText,
  fullWidth = false,
  style,
  ...props
}) => {
  return (
    <View style={[styles.container, fullWidth && styles.fullWidth]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, error && styles.errorInput, style]}
        {...props}
      />
      {helperText && (
        <Text style={[styles.helperText, error && styles.errorText]}>
          {helperText}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginBottom: 16,
  },
  fullWidth: {
    width: "100%",
  },
  label: {
    marginBottom: 4,
    fontSize: 16,
    color: Colors.black,
  },
  input: {
    height: spacing.huge + spacing.extraSmall,
    borderColor: Colors.disabled,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  errorInput: {
    borderColor: Colors.error,
  },
  helperText: {
    marginTop: 4,
    fontSize: 12,
    color: Colors.disabled,
  },
  errorText: {
    color: Colors.error,
  },
});

export default TextField;
