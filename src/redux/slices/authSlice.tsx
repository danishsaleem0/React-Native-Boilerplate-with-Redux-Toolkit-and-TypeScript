import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import {TOAST_STATUS} from '../../constant';
import authServices from '../../services/authServices';
import {
  LoginRequestPayload,
  LoginSuccessPayload,
  RegisterRequestPayload,
  RegisterSuccessPayload,
} from '../../services/authServices/types';
import errorHandler from '../../utils/errorHandler';
import localStoreUtil, {
  saveAccessToken,
  saveUser,
} from '../../utils/localStoreUtil';
import {DESTROY_SESSION} from '../constant/actionTypes';
import {messageHandlerSet} from './messageHandlerSlice';

interface IAuthState {
  accessToken: string | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  userInfo: Record<string, any> | null;
  errorMessage: string | undefined;
}
const initialState: IAuthState = {
  accessToken: null,
  isLoggedIn: false,
  isLoading: false,
  isSuccess: false,
  isError: false,
  userInfo: null,
  errorMessage: '',
};

export const registerUser = createAsyncThunk<
  RegisterSuccessPayload,
  RegisterRequestPayload
>('registerUser', async (requestData, {dispatch, rejectWithValue}) => {
  try {
    const {status, data} = await authServices.registerUser(requestData);
    if (status === 200 || status === 201) {
      dispatch(
        messageHandlerSet({
          status: TOAST_STATUS.SUCCESS,
          message: data.message,
        }),
      );
      return data;
    }
  } catch (error) {
    const errorMessage = errorHandler(error, dispatch);
    return rejectWithValue(errorMessage);
  }
});

export const loginUser = createAsyncThunk<
  LoginSuccessPayload,
  LoginRequestPayload
>('loginUser', async (requestData, {dispatch, rejectWithValue}) => {
  try {
    const {status, data} = await authServices.loginUser(requestData);
    if (status === 200 || status === 201) {
      dispatch(
        messageHandlerSet({
          status: TOAST_STATUS.SUCCESS,
          message: data.message,
        }),
      );
      saveAccessToken(data?.userInfo?.token);
      saveUser(data?.userInfo);
      return data;
    }
  } catch (error) {
    const errorMessage = errorHandler(error, dispatch);
    return rejectWithValue(errorMessage);
  }
});

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,

  extraReducers: builder => {
    //  register user
    builder.addCase(registerUser.pending, state => {
      state.isLoading = true;
      state.errorMessage = '';
      state.isError = false;
      state.isSuccess = false;
    });
    builder.addCase(registerUser.fulfilled, state => {
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error.message;
      state.isError = true;
    });

    //  login user
    builder.addCase(loginUser.pending, state => {
      state.isLoading = true;
      state.errorMessage = '';
      state.isError = false;
      state.isSuccess = false;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const {userInfo} = action.payload.data.userInfo;
      state.isLoading = false;
      state.isSuccess = true;
      state.accessToken = userInfo?.token;
      state.isLoggedIn = true;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error.message;
      state.isError = true;
    });

    //  logout user
    builder.addCase(DESTROY_SESSION, state => {
      state.isLoggedIn = false;
      state.accessToken = null;
      localStoreUtil.removeData('accessToken');
      localStoreUtil.removeData('user');
    });
  },
  reducers: {},
});

const persistConfig = {
  key: 'authSlice',
  storage: AsyncStorage,
  whitelist: [''],
  timeout: undefined,
};

export default persistReducer(persistConfig, authSlice.reducer);
