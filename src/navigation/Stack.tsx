import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginView, PaginationView, RegisterView } from '@views/screens';
import { Colors } from '@constants/colors';
import { useSelector } from 'react-redux';

const {Screen, Navigator} = createStackNavigator();


const StackNavigator = () => {

  const {email, isAuht} = useSelector( (state: any ) => state.session );
  const INITIAL_ROUTE = !isAuht ? 'Login' : 'Pagination';

  const OPTIONS_PAGINATION = {
    headerShown: true, 
    headerLeft: () => null,
    headerTintColor: Colors.WHITE,
    headerStyle: {
      backgroundColor: Colors.PRIMARY,
    },
    title: `Email: ${email}`
  }
  return (
    <Navigator
      initialRouteName={INITIAL_ROUTE}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Login" component={LoginView} />
      <Screen name="Register" component={RegisterView} />
      <Screen options={{...OPTIONS_PAGINATION}} name="Pagination" component={PaginationView} />
    </Navigator>
  );
}

export {StackNavigator}