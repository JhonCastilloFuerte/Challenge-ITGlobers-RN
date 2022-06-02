import { StackNavigator } from '@navigation/Stack'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';


const Main = () => {
  return (
    <>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
      <Toast />
    </>
  )
}

export default Main