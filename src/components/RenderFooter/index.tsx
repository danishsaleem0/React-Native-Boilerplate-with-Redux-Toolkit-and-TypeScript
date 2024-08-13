import React, {ReactElement} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {COLORS, SIZES, commonStyles} from '../../constant';
import {IFooterComponentProps} from './types';

export default function RenderFooter({
  loading,
  containerStyle,
}: IFooterComponentProps): ReactElement {
  return (
    <View style={[commonStyles.emptyView100, containerStyle]}>
      {loading && (
        <ActivityIndicator color={COLORS.secondary} size={SIZES.padding + 2} />
      )}
    </View>
  );
}
