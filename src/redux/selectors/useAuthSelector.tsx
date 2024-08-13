import {useAppSelector} from '../store/store';

export default () => {
  const {
    accessToken,
    isLoggedIn,
    isLoading,
    isSuccess,
    isError,
    userInfo,
    errorMessage,
  } = useAppSelector(state => state?.authReducer);

  return {
    accessToken,
    isLoggedIn,
    isLoading,
    isSuccess,
    isError,
    userInfo,
    errorMessage,
  };
};
