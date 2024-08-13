/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';

import React, {FunctionComponent, useEffect} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainNavigator from './src/navigation/Stack/MainNavigator';
import Toast from 'react-native-toast-message';
import toastConfig from './src/utils/toast';
import {COLORS, SIZES} from './src/constant';
import {CustomStatusBar} from './src/components';
import {useAppDispatch} from './src/redux/store/store';
import useMessageSelector from './src/redux/selectors/useMessageSelector';
import {messageHandlerReset} from './src/redux/slices/messageHandlerSlice';

const App: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const {hasGeneralMessage} = useMessageSelector();

  useEffect(() => {
    if (hasGeneralMessage?.message) {
      Toast.show({
        onHide: () => dispatch(messageHandlerReset()),
        type: hasGeneralMessage?.status,
        text1: hasGeneralMessage?.message,
      });
    }
  }, [hasGeneralMessage, dispatch]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({
        ios: 'padding',
        android: undefined,
      })}
      keyboardVerticalOffset={Platform.select({
        ios: 0,
        android: 30,
      })}>
      <SafeAreaProvider>
        <CustomStatusBar backgroundColor={COLORS.secondary} />
        <SafeAreaView style={styles.container}>
          <MainNavigator />

          <Toast
            config={toastConfig}
            visibilityTime={3000}
            topOffset={SIZES.padding + SIZES.small}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
