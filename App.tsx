import React from 'react';
import { LoginView,RegisterView } from '@views/screens';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from '@navigation/index';

const App = () => {

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
