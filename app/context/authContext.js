//context/authContext.js
import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

//context
const AuthContext = createContext();
//provider
const AuthProvider = ({children}) => {
    //global state
    const [state, setState] = useState({
        user: null,
        token: "",
    });

//default axios setting
axios.defaults.baseURL = 'http://192.168.214.120:5000/api';

    //user login -> data gets -> added to local stogare
    //initial => get local storage data
    useEffect(() => {
        const loadLocalStorageData = async () => {
            let data = await AsyncStorage.getItem('@auth');
            let loginData = JSON.parse(data);

            setState({...state, user:loginData?.user, token: loginData?.token});
        };
        loadLocalStorageData() //initial
    }, []);

    return (
        <AuthContext.Provider value={[state, setState]}>
            {children}  
        </AuthContext.Provider>
    )
};

export {AuthContext, AuthProvider};