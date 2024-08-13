import React, {ReactElement} from 'react';
import {Platform, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {Icon, Text} from '..';
import {COLORS, icons} from '../../constant';
import {openCamera, takeImage} from '../../utils/imageConfig';
import styles from './styles';

export default function ImagePickerModal({
  visible,
  closeModal,
  setProfileImage,
}: IImagePickerProps): ReactElement {
  const onPickerPress = async (type: 'image' | 'gallery'): Promise<void> => {
    const image = type === 'image' ? await openCamera() : await takeImage();
    if (image?.path) {
      const profile = {
        uri: Platform.OS === 'ios' ? `file:///${image?.path}` : image?.path,
        name: image?.path.substring(image.path.lastIndexOf('/') + 1),
        type: image?.mime,
      };
      setProfileImage(profile);
      closeModal();
    }
  };
  return (
    <Modal
      onBackButtonPress={closeModal}
      isVisible={visible}
      style={{margin: 0}}
      animationIn="fadeIn"
      animationOut="fadeOut">
      <View style={styles.container}>
        <View style={styles.view}>
          <TouchableOpacity
            style={styles.closeButton}
            activeOpacity={0.8}
            onPress={closeModal}>
            <Icon {...icons.closeIcon} color={COLORS.textColor} />
          </TouchableOpacity>

          <View style={styles.row}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.button}
              onPress={() => onPickerPress('gallery')}>
              <Icon {...icons.galleryIcon} />
              <Text text={'Gallery'} style={styles.text} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.button}
              onPress={() => onPickerPress('image')}>
              <Icon {...icons.cameraIcon} size={40} />
              <Text text={'Camera'} style={styles.text} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
