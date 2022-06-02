import React, { useEffect, useState } from 'react'

import {style, Colors} from '../styles/loginStyles';

import { Button, messageToast, TextInput } from '@components/index';

import LOGO from "@assets/Logo.png";
import LinearGradient from 'react-native-linear-gradient';
import { StackScreenProps } from '@react-navigation/stack';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { postLogin } from '../../store/slices/auth/thunks';
import { getResources } from '@store/slices/pagination';
import { Image, Text } from 'react-native';



const DefaultText = {
  email: 'Email',
  password: 'Contraseña'
}

const ERROR_MESSAGES = {
  emptyInputs: 'Los campos estan vacios',
  emailIncorrect: 'Email no valido' 
}

const EXP_REG = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


interface IProps extends StackScreenProps<any, any> {}

const LoginView = ({ navigation }: IProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const {isAuth} = useSelector( (state: any ) => state.session );


  useEffect(() => {
    const Logged = () =>{
      if(isAuth){
        dispatch(getResources({page: 1, cuantity: 4 }) as any);
        setTimeout(() => {
          navigation.navigate('Pagination');
        }, 500);
      }
    }
    Logged();
  },)
  
  const handleRegister = () => {
    navigation.navigate('Register');
  }
  
  const handleSession = () => {
    if(email.trim().length > 0 && password.trim().length > 0){
      if(!EXP_REG.test(email)){
        messageToast({
          text1: ERROR_MESSAGES.emailIncorrect
        })
      }else{
        dispatch(postLogin({email, password}) as any);
      }
    }else{
      messageToast({
        text1: ERROR_MESSAGES.emptyInputs
      })
    }
  }


  return (
    <LinearGradient colors={[ Colors.PRIMARY, Colors.VIOLET ]} style={style.container}>
      <Image
        style={style.logo}
        source={LOGO}
      />
      <TextInput
        value={email}
        placeHolder={DefaultText.email}
        onChangeValue={setEmail}
        keyboardType={'email-address'}
      />
      <TextInput
        value={password}
        placeHolder={DefaultText.password}
        onChangeValue={setPassword}
        secureText
      />
      <Button
        title='Iniciar Sesión'
        onPress={ handleSession }
      />
      <Text style={style.register} onPress={handleRegister}>Registrarse</Text>
    </LinearGradient>
  )
}

export default LoginView