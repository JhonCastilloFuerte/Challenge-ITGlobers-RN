import React, { useState } from 'react'
import { Button, TextInput } from '@components/index';
import { Text, SafeAreaView, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {style, Colors} from '@views/styles/registerStyles'

import LOGO from "@assets/Logo.png";
import { StackScreenProps } from '@react-navigation/stack';


const DefaultText = {
  email: 'Email',
  password: 'Contraseña',
  confirmPassword:  'Confirmar Contraseña'
}

interface IProps extends StackScreenProps<any, any> {}


const RegisterView = ({ navigation }: IProps) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleBack = () =>{
    navigation.navigate('Login');
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
      />
      <TextInput
        value={password}
        placeHolder={DefaultText.password}
        onChangeValue={setPassword}
        secureText
      />
      <TextInput
        value={password}
        placeHolder={DefaultText.confirmPassword}
        onChangeValue={setPassword}
        secureText
      />

      <Button 
        title='Registrarse'
      />


      <Text style={style.register} onPress={handleBack}>Volver a Login</Text>

    </LinearGradient>
  )
}

export default RegisterView;