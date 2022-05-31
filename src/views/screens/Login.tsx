import React, { useState } from 'react'
import { SafeAreaView, Image, Text } from 'react-native';
import {style, Colors} from '../styles/loginStyles';

import { Button, TextInput } from '@components/index';

import LOGO from "@assets/Logo.png";
import LinearGradient from 'react-native-linear-gradient';
import { StackScreenProps } from '@react-navigation/stack';

const DefaultText = {
  email: 'Email',
  password: 'Contraseña'
}

interface IProps extends StackScreenProps<any, any> {}

const LoginView = ({ navigation }: IProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  
  const handleRegister = () => {
    navigation.navigate('Register');
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
      <Button
        title='Iniciar Sesión'
        onPress={() => navigation.navigate('Pagination')}
      />
      <Text style={style.register} onPress={handleRegister}>Regitrarse</Text>
    </LinearGradient>
  )
}

export default LoginView