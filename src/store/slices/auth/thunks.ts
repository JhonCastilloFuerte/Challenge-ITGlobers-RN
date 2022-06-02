import { messageToast } from '@components/index';
import { setSession } from '@store/slices/auth/authSlice';
import axios from 'axios';


interface LoginParams {
  email: string;
  password: string;
}

export const postLogin = ({email = '', password = ''}:LoginParams) =>{

  return async (dispatch: any) =>{
    try {
      const resp = await axios.post('https://reqres.in/api/login', {email, password});
      if(resp.status == 200){
        const {data} = resp;
        dispatch( 
        setSession({
          email,
          password,
          token: data.token,
          isAuth: true
        }));
        messageToast({
          text1: 'Iniciaste sesión correctamente',
          type: 'success'
        })
      }
    } catch (error) {
      throw error;
    }
  }
}