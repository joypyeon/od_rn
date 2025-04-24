import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {SEMANTIC} from '../styles/colors';
import {textStyles} from '../styles/typography';

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  onCustomerService: () => void;
  onDelete: () => void;
}

const CustomModal = ({
  visible,
  onClose,
  onCustomerService,
  onDelete,
}: CustomModalProps) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}>
      <Pressable style={styles.overlay} onPress={onClose}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={onCustomerService}
            activeOpacity={0.7}>
            <Text style={styles.buttonText}>고객센터 문의</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.deleteButton]}
            onPress={onDelete}
            activeOpacity={0.7}>
            <Text style={[styles.buttonText, styles.deleteText]}>
              내역 삭제
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={onClose}
            activeOpacity={0.7}>
            <Text style={[styles.buttonText, styles.cancelText]}>취소</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
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
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    gap: 16,
  },
  button: {
    width: '100%',
    paddingVertical: 12,
    alignItems: 'center',
  },
  deleteButton: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#9C9C9C',
  },
  buttonText: {
    ...textStyles.body14,
    color: SEMANTIC.text.primary,
  },
  deleteText: {
    color: SEMANTIC.text.error,
  },
  cancelButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#9C9C9C',
  },
  cancelText: {
    color: '#E03021',
  },
});

export default CustomModal;
