import Colors from "@/constants/Colors";
import React from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
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
}) => {
  return (
    <Modal
      transparent={true}
      visible={open}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.dialog}>
          {children}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
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
    width: "85%",
    backgroundColor:Colors.white,
    borderRadius: 8,
    padding: 20,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
});

export { Dialog, DialogTitle, DialogContent, DialogActions };
