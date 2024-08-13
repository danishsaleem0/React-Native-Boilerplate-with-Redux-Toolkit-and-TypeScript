import React, {ReactElement, useRef, useState} from 'react';
import {Keyboard, TextInput, View} from 'react-native';
import {Button, Container, Header, InputField, Text} from '../../components';
import styles from './styles';
import {COLORS, commonStyles, SIZES} from '../../constant';
import {Field, Formik} from 'formik';
import {forgotPasswordSchema} from '../../utils/validation';
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';

export default function ForgotPassword(): ReactElement {
  const emailRef = useRef<TextInput>(null);

  const [emailFocused, setEmailFocused] = useState<boolean>(false);

  return (
    <Container isPadding={false}>
      <Header isBack={true} title="Forgot Password" />

      <Container style={{backgroundColor: COLORS.transparent}}>
        <Animated.View
          entering={FadeInUp.delay(200).duration(1000).springify()}>
          <Text
            style={[commonStyles.textAlignCenter, styles.regular14]}
            text="No worries! Enter your email address below and we will end you a code to reset password."
          />
        </Animated.View>

        <Formik
          validationSchema={forgotPasswordSchema}
          initialValues={{
            email: '',
          }}
          onSubmit={(values, {resetForm}): void => {
            Keyboard.dismiss();
            //   onLoginPress(values, resetForm);
          }}>
          {({handleSubmit, isValid}) => (
            <View style={[commonStyles.fill, {paddingTop: SIZES.padding}]}>
              <Animated.View
                entering={FadeInUp.delay(200).duration(1000).springify()}
                style={styles.commonView}>
                <Text text={'E-mail'} style={styles.fieldName} />
                <Field
                  component={InputField}
                  name="email"
                  placeholder="Enter your email"
                  keyboardType="email-address"
                  inputRef={emailRef}
                  onFocus={() => setEmailFocused(true)}
                  isFocused={emailFocused}
                  setUnfocused={setEmailFocused}
                  onSubmitEditing={handleSubmit}
                />
              </Animated.View>

              <Animated.View
                entering={FadeInDown.delay(200).duration(1000).springify()}
                style={[commonStyles.fill, commonStyles.justifyContentEnd]}>
                <Button text="Send Reset Instruction" onPress={handleSubmit} />
              </Animated.View>
            </View>
          )}
        </Formik>
      </Container>
    </Container>
  );
}
