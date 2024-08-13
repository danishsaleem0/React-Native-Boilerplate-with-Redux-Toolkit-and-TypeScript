import {RootState} from '../slices/rootReducer';
import {useAppSelector} from '../store/store';

export default () => {
  const hasGeneralMessage = useAppSelector(
    (state: RootState) => state?.messageHandlerReducer,
  );

  return {
    hasGeneralMessage,
  };
};
