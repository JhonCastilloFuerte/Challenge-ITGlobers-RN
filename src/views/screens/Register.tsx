import React, { useEffect, useState } from 'react'
import { Button, messageToast, TextInput } from '@components/index';
import { Text, SafeAreaView, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {style, Colors} from '@views/styles/registerStyles'

import LOGO from "@assets/Logo.png";
import { StackScreenProps } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';
import { postSignUp } from '../../store/slices/sign-up/thunks';


const DefaultText = {
  email: 'Email',
  password: 'Contraseña',
  confirmPassword:  'Confirmar Contraseña'
}

const EXP_REG = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const ERROR_MESSAGES = {
  emptyInputs: 'Los campos estan vacios',
  emailIncorrect: 'Email no valido',
  passwordsError: 'las contraseñas no coinciden',
}

interface IProps extends StackScreenProps<any, any> {}


const RegisterView = ({ navigation }: IProps) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
    }
  }, [])
  

  const handleBack = () =>{
    navigation.navigate('Login');
  }

  const handleSubmit = () =>{
      if(email.trim().length > 0 && password.trim().length > 0){
        if(!EXP_REG.test(email)){
          messageToast({
            text1: ERROR_MESSAGES.emailIncorrect
          })
        }else if (password !== confirmPassword){
          messageToast({
            text1: ERROR_MESSAGES.passwordsError
          })
        }else{
          dispatch(postSignUp({email, password}) as any)
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
      <TextInput
        value={confirmPassword}
        placeHolder={DefaultText.confirmPassword}
        onChangeValue={setConfirmPassword}
        secureText
      />
      <Button 
        title='Registrarse'
        onPress={handleSubmit}
      />
      <Text style={style.register} onPress={handleBack}>Volver a Login</Text>
    </LinearGradient>
  )
}

export default RegisterView;