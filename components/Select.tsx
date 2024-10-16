import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
  TextStyle,
  ViewStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Assuming you are using Expo, otherwise use react-native-vector-icons
import Colors from "@/constants/Colors";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  style?: ViewStyle;
  optionStyle?: TextStyle;
}

const { black, white,"text-50":tx50 } = Colors;

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder,
  style,
  optionStyle,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelect = (selectedValue: string) => {
    onChange(selectedValue);
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={[styles.select, style]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.selectText}>
          {value
            ? options.find((option) => option.value === value)?.label
            : placeholder}
        </Text>
        <Ionicons
          name="chevron-down"
          size={24}
          color={black}
          style={styles.icon}
        />
      </TouchableOpacity>
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.option,
                    item.value === value && styles.selectedOption,
                  ]}
                  onPress={() => handleSelect(item.value)}
                >
                  <Text
                    style={[
                      styles.optionText,
                      optionStyle,
                      item.value === value && styles.selectedOptionText,
                    ]}
                  >
                    {item.label}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  select: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    backgroundColor: white,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectText: {
    fontSize: 16,
  },
  icon: {
    marginLeft: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: tx50,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: white,
    borderRadius: 8,
    padding: 20,
    maxHeight: "80%",
  },
  option: {
    paddingVertical: 10,
  },
  selectedOption: {
    backgroundColor: white,
  },
  optionText: {
    fontSize: 16,
  },
  selectedOptionText: {
    fontWeight: "bold",
  },
});

export default Select;
