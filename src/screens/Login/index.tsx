import {Field, Formik} from 'formik';
import React, {ReactElement, RefObject, useRef, useState} from 'react';
import {Keyboard, TextInput, TouchableOpacity, View} from 'react-native';
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';
import {
  Button,
  Container,
  IconInputField,
  InputField,
  Text,
} from '../../components';
import {commonStyles, images, SIZES} from '../../constant';
import NavigationStrings from '../../navigation/NavigationStrings';
import {loginSchema} from '../../utils/validation';
import styles from './styles';
import {ILoginFormValues, ILoginProps} from './types';

function Login({navigation}: ILoginProps): ReactElement {
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const [emailFocused, setEmailFocused] = useState<boolean>(false);
  const [passwordFocused, setPasswordFocused] = useState<boolean>(false);

  const focusNextField = (nextFieldRef: RefObject<any>): void => {
    nextFieldRef.current && nextFieldRef.current.focus();
  };

  const onLoginPress = (values: ILoginFormValues, resetForm: any): void => {
    navigation.navigate(NavigationStrings.MAIN_STACK);
  };

  const onSignupPress = (): void => {
    navigation.navigate(NavigationStrings.SIGN_UP);
  };

  const onForgotPress = (): void => {
    navigation.navigate(NavigationStrings.FORGOT_PASSWORD);
  };

  return (
    <Container scroll={true}>
      <View style={[commonStyles.center, styles.headerView]}>
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          source={images.logo}
          style={styles.logoStyle}
          resizeMode={'contain'}
        />
      </View>
      <Formik
        validationSchema={loginSchema}
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values, {resetForm}): void => {
          Keyboard.dismiss();
          onLoginPress(values, resetForm);
        }}>
        {({handleSubmit, isValid}) => (
          <View style={commonStyles.fill}>
            <Animated.View
              entering={FadeInUp.delay(200).duration(1000).springify()}
              style={styles.commonView}>
              <Text text={'E-mail'} style={styles.fieldName} />
              <Field
                component={InputField}
                name="email"
                placeholder="Enter Email Address"
                keyboardType="email-address"
                inputRef={emailRef}
                onFocus={() => setEmailFocused(true)}
                isFocused={emailFocused}
                setUnfocused={setEmailFocused}
                onSubmitEditing={() => focusNextField(passwordRef)}
              />
            </Animated.View>

            <Animated.View
              entering={FadeInDown.delay(200).duration(1000).springify()}
              style={[styles.commonView, {marginBottom: 0}]}>
              <Text text={'Password'} style={styles.fieldName} />
              <Field
                component={IconInputField}
                name="password"
                placeholder="Enter Password"
                inputRef={passwordRef}
                onFocus={() => setPasswordFocused(true)}
                isFocused={passwordFocused}
                setUnfocused={setPasswordFocused}
                onSubmitEditing={() => handleSubmit()}
                secureText={true}
                rightIcon={true}
              />
            </Animated.View>

            <Animated.View
              entering={FadeInDown.delay(200).duration(1000).springify()}>
              <TouchableOpacity
                onPress={onForgotPress}
                activeOpacity={0.8}
                style={styles.forgotButton}>
                <Text text={'Forgot password?'} style={styles.mediumText14} />
              </TouchableOpacity>
            </Animated.View>

            <Animated.View
              style={[commonStyles.justifyContentCenter]}
              entering={FadeInDown.delay(200).duration(1000).springify()}>
              <Button
                disabled={!isValid}
                onPress={handleSubmit}
                text={'Login'}
              />
            </Animated.View>

            <View style={{paddingVertical: SIZES.medium}}>
              <Animated.View
                entering={FadeInDown.delay(200).duration(1000).springify()}
                style={[commonStyles.row, commonStyles.center]}>
                <Text
                  text={'Don’t have an account?  '}
                  style={styles.regularText14}
                />
                <TouchableOpacity onPress={onSignupPress} activeOpacity={0.8}>
                  <Text text={'Sign Up'} style={styles.boldText14} />
                </TouchableOpacity>
              </Animated.View>
            </View>
          </View>
        )}
      </Formik>
    </Container>
  );
}

export default Login;
