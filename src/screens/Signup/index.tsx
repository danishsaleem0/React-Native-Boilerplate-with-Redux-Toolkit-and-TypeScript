import React, {ReactElement} from 'react';
import {Text, View} from 'react-native';
import {useAppDispatch} from '../../redux/store/store';
import {registerUser} from '../../redux/slices/authSlice';

function Signup(): ReactElement {
  return (
    <View>
      <Text>Signup</Text>
    </View>
  );
}

export default Signup;
