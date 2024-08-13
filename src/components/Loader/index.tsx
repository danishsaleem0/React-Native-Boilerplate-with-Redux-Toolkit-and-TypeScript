import React, {ReactNode} from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import Text from '../CustomText';
import styles from './styles';
import LottieView from 'lottie-react-native';
import animations from '../../constant/animations';

interface ILoaderProps {
  visible: boolean;
}
export default function Loader({visible}: ILoaderProps): ReactNode {
  return (
    <Modal
      style={{margin: 0}}
      isVisible={visible}
      animationIn="fadeIn"
      animationOut="fadeOut">
      <View style={styles.container}>
        <View style={styles.mainView}>
          <LottieView
            autoPlay
            source={animations.loading}
            style={styles.lottieView}
          />
          <Text text={'Loading...'} style={styles.boldText16} />
        </View>
      </View>
    </Modal>
  );
}
