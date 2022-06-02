import { setSession } from '@store/slices/auth/authSlice';
import axios from 'axios';
import { messageToast } from '@components/index';


interface SignUpInteface {
  email: string;
  password: string;
}

export const postSignUp = ({email = '', password = ''}:SignUpInteface) =>{

  return async (dispatch: any) =>{
    try {
      console.log(email, password);
      const resp = await axios.post('https://reqres.in/api/register', {email, password});
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
          text1: 'Registro Completo :)',
          type: 'success'
        })
      }
    } catch (error) {
        messageToast({
          text1: 'Algo ocurrio, correo no valido :(',
        });
        throw error
    }
  }
}