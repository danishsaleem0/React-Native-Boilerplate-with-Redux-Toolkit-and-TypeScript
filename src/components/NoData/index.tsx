import React, {ReactElement} from 'react';
import {View} from 'react-native';
import {Text} from '..';
import styles from './styles';
import animations from '../../constant/animations';
import LottieView from 'lottie-react-native';

interface IProps {
  text: string;
}

function NoData({text}: IProps): ReactElement {
  return (
    <View style={styles.NoDataView}>
      <LottieView
        source={animations.data_not_found}
        autoPlay
        loop
        style={styles.lottieView}
      />
      <Text text={text} style={styles.text} />
    </View>
  );
}

export default NoData;
