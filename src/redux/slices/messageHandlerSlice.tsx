import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IMessageHandler {
  status: 'success' | 'error' | 'info' | undefined;
  message: string | undefined;
}

const initialState: IMessageHandler = {
  status: undefined,
  message: undefined,
};

export const messageHandlerSlice = createSlice({
  name: 'messageHandlerSlice',
  initialState,
  reducers: {
    messageHandlerSet(state, action: PayloadAction<IMessageHandler>) {
      state.status = action.payload.status;
      state.message = action.payload.message;
    },
    messageHandlerReset(state) {
      state.status = undefined;
      state.message = undefined;
    },
  },
});

export const {messageHandlerSet, messageHandlerReset} =
  messageHandlerSlice.actions;

export default messageHandlerSlice.reducer;
