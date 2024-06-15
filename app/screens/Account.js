import { View, Text, StyleSheet } from 'react-native'
import React, {useContext} from 'react'
import { AuthContext } from '../context/authContext'
import FooterMenu from '../components/menu/FooterMenu'

const Account = () => {
  // global state
  const [state] = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <Text>Username: {state?.username}</Text>
      <Text>Role: {state?.role}</Text>
      {/* <Text>{JSON.stringify(state, null, 4)}</Text> */}
      <View style={{flex: 1, justifyContent:"flex-end"}}>
        <FooterMenu/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      margin: 10,
  
    },
  })

export default Account