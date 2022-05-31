import React, { useState } from 'react'
import { SafeAreaView, Image, Text } from 'react-native';
import {style, Colors} from '../styles/loginStyles';

import { Button, TextInput } from '@components/index';

import LOGO from "@assets/Logo.png";
import LinearGradient from 'react-native-linear-gradient';

const DefaultText = {
  email: 'Email',
  password: 'Contraseña'
}

const handleRegister = () => {
  console.log('Registrarse')
}

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      <Button
        title='Iniciar Sesión'
      />
      <Text style={style.register} onPress={handleRegister}>Regitrarse</Text>
    </LinearGradient>
  )
}

export default LoginView