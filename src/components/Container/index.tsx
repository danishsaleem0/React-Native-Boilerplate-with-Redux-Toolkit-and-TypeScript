import React, {Fragment, ReactElement} from 'react';
import {ScrollView, View} from 'react-native';
import styles from './styles.tsx';
import {IContainerProps} from './types.tsx';

export default function Container({
  children,
  scroll,
  style,
  isPadding = true,
  onLayout,
}: IContainerProps): ReactElement {
  const commonScrollViewProps = {
    showsVerticalScrollIndicator: false,
    contentContainerStyle: [
      styles.container2,
      style,
      !isPadding && {paddingHorizontal: 0, paddingTop: 0},
    ],
  };

  const containerContent = (
    <Fragment>
      {scroll ? (
        <ScrollView
          keyboardShouldPersistTaps="always"
          {...commonScrollViewProps}>
          {children}
        </ScrollView>
      ) : (
        <View
          onLayout={onLayout}
          style={[
            styles.container,
            style,
            !isPadding && {paddingTop: 0, paddingHorizontal: 0},
          ]}>
          {children}
        </View>
      )}
    </Fragment>
  );

  return containerContent;
}
