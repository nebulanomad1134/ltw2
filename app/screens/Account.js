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
      <View style={styles.footerContainer}>
        <FooterMenu />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 10,
    paddingBottom: 80, // Ensure some space above the footer
  },
  placeItem: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#f9c2ff',
    borderRadius: 10,
  },
  placeImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  placeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default Account