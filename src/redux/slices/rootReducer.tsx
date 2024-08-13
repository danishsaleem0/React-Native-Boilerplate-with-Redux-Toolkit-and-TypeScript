import {PayloadAction} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import authSlice from './authSlice';
import {DESTROY_SESSION} from '../constant/actionTypes';
import messageHandlerSlice from './messageHandlerSlice';

const appReducer = combineReducers({
  authReducer: authSlice,
  messageHandlerReducer: messageHandlerSlice,
});

// Infer the RootState from the appReducer
export type RootState = ReturnType<typeof appReducer>;

const rootReducer = (state: RootState, action: PayloadAction) => {
  if (action.type === DESTROY_SESSION) {
    const {authReducer} = state;
    state = {authReducer} as RootState;
  }

  return appReducer(state, action);
};

export default rootReducer;
