import endPoints from '../../redux/constant/endPoints';
import {fetchApi} from '../../utils/helper';
import {
  LoginRequestPayload,
  LoginSuccessPayload,
  RegisterRequestPayload,
  RegisterSuccessPayload,
} from './types';

class AuthServices {
  public registerUser = async (data: RegisterRequestPayload) => {
    const response = await fetchApi({
      method: 'POST',
      endPoint: endPoints.REGISTER_USER,
      data,
      formData: true,
    });
    return response;
  };

  public loginUser = async (data: LoginRequestPayload) => {
    const response = await fetchApi({
      method: 'POST',
      endPoint: endPoints.LOGIN,
      data,
      formData: true,
    });
    return response;
  };
}

const authServices = new AuthServices();
export default authServices;
