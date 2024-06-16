import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import FooterMenu from '../components/menu/FooterMenu';

const Home = ({ navigation }) => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get('/places');
        setPlaces(response.data);
      } catch (error) {
        console.error('Failed to fetch places', error);
      }
    };

    fetchPlaces();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {places.map((place) => (
          <TouchableOpacity key={place._id} onPress={() => navigation.navigate('Post', { placeId: place._id })}>
            <View style={styles.placeItem}>
              <Image source={{ uri: place.image }} style={styles.placeImage} />
              <Text style={styles.placeName}>{place.name}</Text>
              <Text>{place.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.footerContainer}>
        <FooterMenu />
      </View>
    </View>
  );
};

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
    backgroundColor: '#E2EAF4',
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

export default Home;
