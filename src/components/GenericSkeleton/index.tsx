import React, {Fragment, ReactElement} from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {SIZES} from '../../constant';
import styles from './styles';
import {ISkeletonProps} from './types';

const GenericSkeleton = ({
  length,
  width,
  height,
  skeletonStyle,
  containerStyle,
}: ISkeletonProps): ReactElement => {
  return (
    <Fragment>
      {Array.from({length}).map((_, index) => (
        <View key={index} style={[styles.container, containerStyle]}>
          <SkeletonPlaceholder>
            <SkeletonPlaceholder.Item
              width={width || '100%'}
              height={height}
              borderRadius={SIZES.base}
              {...skeletonStyle}
            />
          </SkeletonPlaceholder>
        </View>
      ))}
    </Fragment>
  );
};

export default GenericSkeleton;
