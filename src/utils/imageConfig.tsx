import ImagePicker from 'react-native-image-crop-picker';

export const takeImage = async () => {
  try {
    const image = await ImagePicker.openPicker({
      width: 300,
      mediaType: 'photo',
      height: 300,
      cropping: true,
    });
    return image;
  } catch (error) {
    return error;
  }
};

export const openCamera = async () => {
  try {
    const image = await ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
      mediaType: 'photo',
      compressImageQuality: 0.99,
    });
    return image;
  } catch (error) {
    return error;
  }
};
