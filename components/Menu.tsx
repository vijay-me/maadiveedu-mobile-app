import Colors from '@/constants/Colors';
import React, { useEffect, useState } from 'react';
import { Modal, View, StyleSheet, ViewStyle, TouchableOpacity, Text } from 'react-native';

interface MenuProps {
  open: boolean;
  onClose: () => void;
  anchorEl: { x: number; y: number } | null;
  children: React.ReactNode;
  style?: ViewStyle;
}

interface MenuItemProps {
  onPress: () => void;
  children: React.ReactNode;
  style?: ViewStyle;
}

const Menu: React.FC<MenuProps> = ({ open, onClose, anchorEl, children, style }) => {
  const [position, setPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });

  useEffect(() => {
    if (anchorEl) {
      setPosition({
        top: anchorEl.y,
        left: anchorEl.x,
      });
    }
  }, [anchorEl]);

  return (
    <Modal
      transparent={true}
      visible={open}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay} onTouchEnd={onClose}>
        <View style={[styles.menu, style, { top: position.top, left: position.left }]}>
          {children}
        </View>
      </View>
    </Modal>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ onPress, children, style }) => {
  return (
    <TouchableOpacity style={[styles.menuItem, style]} onPress={onPress}>
      <Text style={styles.menuItemText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    position: 'absolute',
    backgroundColor: Colors.white,
    borderRadius: 4,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    padding: 10,
    minWidth: 200,
  },
  menuItem: {
    padding: 10,
  },
  menuItemText: {
    fontSize: 16,
  },
});

export { Menu, MenuItem };