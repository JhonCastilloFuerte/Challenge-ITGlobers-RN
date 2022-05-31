import React from 'react';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { LoginView, PaginationView, RegisterView } from '@views/screens';
import { Colors } from '@constants/colors';

const Stack = createStackNavigator();

const OPTIONS_PAGINATION = {
  headerShown: true, 
  headerLeft: () => null,
  headerTintColor: Colors.WHITE,
  headerStyle: {
    backgroundColor: Colors.PRIMARY,
  }
}

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Login" component={LoginView} />
      <Stack.Screen name="Register" component={RegisterView} />
      <Stack.Screen options={OPTIONS_PAGINATION} name="Pagination" component={PaginationView} />
    </Stack.Navigator>
  );
}

export {StackNavigator}