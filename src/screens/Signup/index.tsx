import {Field, Formik} from 'formik';
import React, {ReactElement, RefObject, useRef, useState} from 'react';
import {Keyboard, TextInput, TouchableOpacity, View} from 'react-native';
import CheckBox from 'react-native-check-box';
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';
import {
  Button,
  Container,
  IconInputField,
  InputField,
  Text,
} from '../../components';
import {commonStyles, SIZES} from '../../constant';
import NavigationStrings from '../../navigation/NavigationStrings';
import {signupSchema} from '../../utils/validation';
import styles from './styles';
import {InputMask, ISignUpFormValues, ISignUpProps} from './types';

function Signup({navigation}: ISignUpProps): ReactElement {
  const fullnameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const cnicRef = useRef<InputMask>(null);
  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);

  const [emailFocused, setEmailFocused] = useState<boolean>(false);
  const [fullnameFocused, setFullnameFocused] = useState<boolean>(false);
  const [confirmPasswordFocused, setConfirmPasswordFocused] =
    useState<boolean>(false);
  const [passwordFocused, setPasswordFocused] = useState<boolean>(false);
  const [isRemembered, setIsRemembered] = useState(false);

  const focusNextField = (nextFieldRef: RefObject<any>): void => {
    nextFieldRef.current && nextFieldRef.current.focus();
  };

  const onLoginPress = (values: ISignUpFormValues, resetForm: any): void => {
    // Your logic here
  };

  const onSignInPress = (): void => {
    navigation.navigate(NavigationStrings.LOGIN);
  };

  return (
    <Container scroll={true}>
      <View>
        <Text text="Sign Up" style={styles.boldText30} />
        <Formik
          validationSchema={signupSchema}
          initialValues={{
            fullName: '',
            cnic: '',
            employeeID: '',
            email: '',
            password: '',
            confirmPassword: '',
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
                <Text text={'Full Name'} style={styles.fieldName} />
                <Field
                  component={InputField}
                  name="fullName"
                  placeholder="Enter Full Name"
                  inputRef={fullnameRef}
                  onFocus={() => setFullnameFocused(true)}
                  isFocused={fullnameFocused}
                  setUnfocused={setFullnameFocused}
                  onSubmitEditing={() => focusNextField(emailRef)}
                />
              </Animated.View>

              <Animated.View
                entering={FadeInUp.delay(200).duration(1000).springify()}
                style={styles.commonView}>
                <Text text={'Email Address'} style={styles.fieldName} />
                <Field
                  component={InputField}
                  name="email"
                  placeholder="Enter Email Address"
                  keyboardType="email-address"
                  inputRef={emailRef}
                  onFocus={() => setEmailFocused(true)}
                  isFocused={emailFocused}
                  setUnfocused={setEmailFocused}
                  onSubmitEditing={(): void =>
                    cnicRef?.current?.getElement()?.focus()
                  }
                />
              </Animated.View>

              <Animated.View
                entering={FadeInDown.delay(200).duration(1000).springify()}
                style={styles.commonView}>
                <Text text={'Password'} style={styles.fieldName} />
                <Field
                  component={IconInputField}
                  name="password"
                  placeholder="Enter Password"
                  inputRef={passwordRef}
                  onFocus={() => setPasswordFocused(true)}
                  isFocused={passwordFocused}
                  setUnfocused={setPasswordFocused}
                  onSubmitEditing={() => focusNextField(confirmPasswordRef)}
                  secureText={true}
                  rightIcon={true}
                />
              </Animated.View>

              <Animated.View
                entering={FadeInDown.delay(200).duration(1000).springify()}
                style={[styles.commonView, {marginBottom: 0}]}>
                <Text text={'Confirm Password'} style={styles.fieldName} />
                <Field
                  component={IconInputField}
                  name="confirmPassword"
                  placeholder="Re-Enter Password"
                  inputRef={confirmPasswordRef}
                  onFocus={() => setConfirmPasswordFocused(true)}
                  isFocused={confirmPasswordFocused}
                  setUnfocused={setConfirmPasswordFocused}
                  onSubmitEditing={handleSubmit}
                  secureText={true}
                  rightIcon={true}
                />
              </Animated.View>

              <Animated.View
                entering={FadeInDown.delay(200).duration(1000).springify()}>
                <View style={[commonStyles.rowHCenter, styles.paddingVertical]}>
                  <CheckBox
                    style={{marginRight: SIZES.small}}
                    onClick={() => setIsRemembered(!isRemembered)}
                    isChecked={isRemembered}
                  />
                  <Text style={styles.regularText13}>
                    I accept and agree to the
                    <Text
                      text={' Terms and Conditions'}
                      style={styles.boldText13}
                    />
                  </Text>
                </View>
                <Button
                  style={{marginVertical: 0}}
                  disabled={!isValid}
                  onPress={handleSubmit}
                  text={'Sign Up'}
                />
              </Animated.View>

              <View style={{paddingVertical: SIZES.medium}}>
                <Animated.View
                  entering={FadeInDown.delay(200).duration(1000).springify()}
                  style={[commonStyles.row, commonStyles.center]}>
                  <Text
                    text={'Already have an account?  '}
                    style={styles.regularText14}
                  />
                  <TouchableOpacity onPress={onSignInPress} activeOpacity={0.8}>
                    <Text text={'Sign In'} style={styles.boldText14} />
                  </TouchableOpacity>
                </Animated.View>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </Container>
  );
}

export default Signup;
