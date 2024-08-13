import {DESTROY_SESSION} from '../redux/constant/actionTypes';
import {TOAST_STATUS} from '../constant';
import {AppDispatch} from '../redux/store/store';
import {messageHandlerSet} from '../redux/slices/messageHandlerSlice';
import {Store} from '@reduxjs/toolkit';

interface ErrorResponse {
  status: number;
  data?: any;
}

// Custom error handling function
const errorHandler = (error: any, dispatch: any): any => {
  let errorMessage = 'An unexpected error occurred. Please try again.';

  if (error.response) {
    const {status, data} = error.response as ErrorResponse;

    switch (status) {
      case 400:
        errorMessage = data.message || 'Bad request. Please check your input.';
        break;
      case 401:
        errorMessage = 'Unauthorized. Please log in again.';
        dispatch({type: DESTROY_SESSION});
        break;
      case 403:
        errorMessage =
          'Forbidden. You do not have permission to access this resource.';
        break;
      case 404:
        errorMessage = 'Resource not found. Please try again.';
        break;
      case 500:
        errorMessage = 'Internal server error. Please try again later.';
        break;
      default:
        errorMessage = data.message || 'An error occurred. Please try again.';
        break;
    }
  } else if (error.request) {
    errorMessage =
      'No response from server. Please check your internet connection.';
  } else {
    errorMessage =
      error.message || 'An unexpected error occurred. Please try again.';
  }

  // Optionally, dispatch a message to be displayed to the user
  dispatch(
    messageHandlerSet({
      status: TOAST_STATUS.ERROR,
      message: errorMessage,
    }),
  );

  return errorMessage;
};

export default errorHandler;
