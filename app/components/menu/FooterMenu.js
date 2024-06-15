import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const FooterMenu = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <FontAwesome name="map-o" style={styles.iconStyle}/>
            <Text>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <FontAwesome name="plus-square-o" style={styles.iconStyle}/>
            <Text>Post</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <FontAwesome name="comment-o" style={styles.iconStyle}/>
            <Text>About</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <FontAwesome name="user-o" style={styles.iconStyle}/>
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