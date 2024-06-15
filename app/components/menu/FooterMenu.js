import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation, useRoute } from '@react-navigation/native'

const FooterMenu = () => {
    //hooks
    const navigation = useNavigation()
    const route = useRoute()

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <FontAwesome 
            name="map-o" 
            style={styles.iconStyle}
            color={route.name ==="Home" && '#A0B3CA'}/>
            <Text>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Post')}>
            <FontAwesome 
            name="plus-square-o" 
            style={styles.iconStyle} 
            color={route.name ==="Post" && '#A0B3CA'}/>
            <Text>Post</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('About')}>
            <FontAwesome 
            name="comment-o" 
            style={styles.iconStyle}
            color={route.name ==="About" && '#A0B3CA'}/>
            <Text>About</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Account')}>
            <FontAwesome 
            name="user-o" 
            style={styles.iconStyle}
            color={route.name ==="Account" && '#A0B3CA'}/>
            <Text>Account</Text>
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

export default FooterMenu