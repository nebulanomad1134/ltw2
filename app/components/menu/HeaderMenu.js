import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, {useContext} from 'react';
import { AuthContext } from '../../context/authContext';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation, useRoute } from '@react-navigation/native'


const HeaderMenu = () => {
    const navigation = useNavigation()
    const [state, setState] = useContext(AuthContext);
    //logout
    const handleLogout = async () => {
        setState({token:'',user: null})
        await AsyncStorage.removeItem('@auth')
        navigation.navigate("Login")
        alert("Logout successfully")
        
    }

  return (
    <View>
        <TouchableOpacity onPress={handleLogout}>
            <Text>Logout</Text>
            <FontAwesome name="sign-out" style={styles.iconStyle}/>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 15,
        justifyContent: 'space-between',
    },
    iconStyle: {
        marginBottom: 3,
        alignSelf: 'center',
        fontSize: 25,
    }
})

export default HeaderMenu