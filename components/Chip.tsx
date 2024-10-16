import Colors from "@/constants/Colors";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Image,
  ImageSourcePropType,
} from "react-native";

interface ChipProps {
  label: string;
  onDelete?: () => void;
  style?: ViewStyle;
  labelStyle?: TextStyle;
  icon?: React.ReactNode;
  avatar?: ImageSourcePropType;
}

const Chip: React.FC<ChipProps> = ({
  label,
  onDelete,
  style,
  labelStyle,
  icon,
  avatar,
}) => {
  return (
    <TouchableOpacity style={[styles.container, style]}>
      {avatar && <Image source={avatar} style={styles.avatar} />}
      {icon && <View style={styles.icon}>{icon}</View>}
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      {onDelete && (
        <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
          <Text style={styles.deleteText}>✕</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.disabled,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 5,
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 5,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    fontSize: 16,
    color: Colors.black,
  },
  deleteButton: {
    marginLeft: 10,
  },
  deleteText: {
    fontSize: 16,
    color: Colors.black,
  },
});

export default Chip;
