import React, {ReactElement} from 'react';
import {StatusBar, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {IStatusBarProps} from './types';

export default function CustomStatusBar({
  backgroundColor,
  barStyle = 'light-content',
}: IStatusBarProps): ReactElement {
  const insets = useSafeAreaInsets();

  return (
    <View style={{height: insets.top, backgroundColor}}>
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
    </View>
  );
}
