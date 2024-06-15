import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../screens/Home';
import Register from '../../screens/auth/Register';
import Login from '../../screens/auth/Login';
import HeaderMenu from './HeaderMenu';
import { AuthContext } from '../../context/authContext';
import Post from '../../screens/Post';
import About from '../../screens/About';
import Account from '../../screens/Account';


const ScreenMenu = () => {

    // //global state
    // const [state] = useContext(AuthContext)
    // //auth condition
    // const authenticatedUser = state?.user && state?.token

    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen 
                name='Home' 
                component={Home} 
                options={{
                    title: "Place",
                    headerRight:() => <HeaderMenu/>
                }}
            />

            <Stack.Screen 
                name='Post' 
                component={Post} 
                options={{
                    headerBackTitle: "Post",
                    headerRight:() => <HeaderMenu/>
                }}
            />

            <Stack.Screen 
                name='About' 
                component={About} 
                options={{
                    headerBackTitle: "About",
                    headerRight:() => <HeaderMenu/>
                }}
            />

            <Stack.Screen 
                name='Account' 
                component={Account} 
                options={{
                    headerBackTitle: "Your Account",
                    headerRight:() => <HeaderMenu/>
                }}
            />


            <Stack.Screen name='Register' component={Register} options={{headerShown: false}}/>
            <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default ScreenMenu