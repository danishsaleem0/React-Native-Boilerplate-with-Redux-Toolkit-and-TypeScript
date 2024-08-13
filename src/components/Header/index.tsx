import React, {Fragment, ReactElement} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Icon, Text} from '..';
import {icons} from '../../constant';
import {goBack, navigationRef} from '../../navigation/Stack/NavigationRef';
import styles from './styles';
import {IHeaderProps} from './types';

export default function Header({
  title,
  isBack = false,
  backBtnStyle,
  onGoBack,
  rightIcon,
  rightIconPress,
  leftIcon,
  leftIconPress,
  containerStyle,
  titleStyle,
}: IHeaderProps): ReactElement {
  return (
    <Fragment>
      <View style={[styles.container, containerStyle]}>
        {isBack && navigationRef.canGoBack() && (
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.backBtn, backBtnStyle]}
            onPress={() => (onGoBack ? onGoBack() : goBack())}>
            <Icon {...icons.backIcon} />
          </TouchableOpacity>
        )}
        {leftIcon && (
          <TouchableOpacity
            onPress={leftIconPress}
            style={styles.button}
            activeOpacity={0.8}>
            <Icon {...leftIcon} />
          </TouchableOpacity>
        )}
        {title && (
          <View style={styles.centerTitleView}>
            <Text
              text={title}
              style={[styles.titleText, titleStyle]}
              numberOfLines={1}
            />
          </View>
        )}

        <TouchableOpacity
          disabled={!rightIcon}
          onPress={rightIconPress}
          style={styles.button}
          activeOpacity={0.8}>
          {rightIcon && <Icon {...rightIcon} />}
        </TouchableOpacity>
      </View>
    </Fragment>
  );
}
