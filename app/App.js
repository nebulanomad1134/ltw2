// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import Register from './screens/auth/Register';
import Home from './screens/Home';
import Login from './screens/auth/Login';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { AuthProvider } from './context/authContext';
import HeaderMenu from './components/menu/HeaderMenu';
import RootNavigation from './Navigation';

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <RootNavigation/>
      {/* <AuthProvider>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name='Home' component={Home} options={{
            title: "Place",
            headerRight:() => <HeaderMenu/>
            }}
          />
          <Stack.Screen name='Register' component={Register} options={{headerShown: false}}/>
          <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
        </Stack.Navigator>
      </AuthProvider> */}
    </NavigationContainer>
  );
}

