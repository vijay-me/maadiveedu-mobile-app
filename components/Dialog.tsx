import Colors from "@/constants/Colors";
import React from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'; // Assuming you are using Expo, otherwise use react-native-vector-icons


interface DialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  fullScreen?: boolean;
  fullWidth?: boolean;
  maxWidth?: "sm" | "md" | "lg";
}

const DialogTitle: React.FC<{ title?: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <View style={{ padding: 16 }}>
    {title && <Text style={styles.title}>{title}</Text>}
    {children}
  </View>
);

const DialogContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <View style={styles.content}>{children}</View>;

const DialogActions: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <View style={styles.actions}>{children}</View>;

const Dialog: React.FC<DialogProps> = ({
  open,
  onClose,
  children,
  fullScreen = false,
  fullWidth = false,
  maxWidth = "md",
}) => {
  const getMaxWidth = () => {
    switch (maxWidth) {
      case "sm":
        return "60%";
      case "md":
        return "75%";
      case "lg":
        return "90%";
      default:
        return "75%";
    }
  };

  return (
    <Modal
      transparent={true}
      visible={open}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View
          style={[
            styles.dialog,
            fullScreen && styles.fullScreenDialog,
            fullWidth && styles.fullWidthDialog,
            !fullScreen && !fullWidth && { width: getMaxWidth() },
          ]}
        >
            <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <Ionicons name="close" size={24} color={Colors.black} />
          </TouchableOpacity>
          {children}
          
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  dialog: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 20,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: "relative",
  },
  fullScreenDialog: {
    width: "100%",
    height: "100%",
    borderRadius: 0,
    padding: 0,
  },
  fullWidthDialog: {
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    marginBottom: 20,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  closeButton: {
    marginTop: 10,
    alignSelf: "flex-end",
  },
  closeButtonText: {
    color: Colors.primary,
    fontSize: 16,
  },
  closeIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
});

export { Dialog, DialogTitle, DialogContent, DialogActions };
