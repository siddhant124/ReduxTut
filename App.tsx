import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import CartScreen from './src/screens/CartScreen';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{headerShown: false}}>
          <Stack.Screen component={HomeScreen} name="HomeScreen" />
          <Stack.Screen component={CartScreen} name="CartScreen" />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
