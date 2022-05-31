import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginView, PaginationView, RegisterView } from '@views/screens';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginView} />
      <Stack.Screen name="Register" component={RegisterView} />
      <Stack.Screen name="Pagination" component={PaginationView} />
    </Stack.Navigator>
  );
}

export {StackNavigator}