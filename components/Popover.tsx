import Colors from '@/constants/Colors';
import React, { useEffect, useState } from 'react';
import { Modal, View, StyleSheet, ViewStyle, Dimensions } from 'react-native';

interface PopoverProps {
  open: boolean;
  onClose: () => void;
  anchorEl: { x: number; y: number } | null;
  children: React.ReactNode;
  style?: ViewStyle;
}

const Popover: React.FC<PopoverProps> = ({ open, onClose, anchorEl, children, style }) => {
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
        <View style={[styles.popover, style, { top: position.top, left: position.left }]}>
          {children}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popover: {
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
});

export default Popover;