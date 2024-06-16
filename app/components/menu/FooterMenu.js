import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation, useRoute } from '@react-navigation/native';

const FooterMenu = () => {
  //hooks
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.menuItem}>
        <FontAwesome 
          name="map-o" 
          style={[styles.iconStyle, route.name === "Home" && styles.activeIcon]}
        />
        <Text style={[styles.menuText, route.name === "Home" && styles.activeText]}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('About')} style={styles.menuItem}>
        <FontAwesome 
          name="comment-o" 
          style={[styles.iconStyle, route.name === "About" && styles.activeIcon]}
        />
        <Text style={[styles.menuText, route.name === "About" && styles.activeText]}>About</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Account')} style={styles.menuItem}>
        <FontAwesome 
          name="user-o" 
          style={[styles.iconStyle, route.name === "Account" && styles.activeIcon]}
        />
        <Text style={[styles.menuText, route.name === "Account" && styles.activeText]}>Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  menuItem: {
    alignItems: 'center',
  },
  iconStyle: {
    fontSize: 25,
    color: '#666',
  },
  menuText: {
    fontSize: 12,
    color: '#666',
  },
  activeIcon: {
    color: '#A0B3CA',
  },
  activeText: {
    color: '#A0B3CA',
  },
});

export default FooterMenu;
