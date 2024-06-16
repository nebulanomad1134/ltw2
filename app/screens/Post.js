import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView} from 'react-native';
import axios from 'axios';
import FooterMenu from '../components/menu/FooterMenu';

const Post = ({ route }) => {
  const { placeId } = route.params;
  const [place, setPlace] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchPlaceDetails = async () => {
      try {
        const placeResponse = await axios.get(`/places/${placeId}`);
        setPlace(placeResponse.data);
      } catch (error) {
        console.error('Failed to fetch place details', error);
      }
    };

    const fetchReviews = async () => {
      try {
        const reviewsResponse = await axios.get(`/places/${placeId}/reviews`);
        setReviews(reviewsResponse.data);
      } catch (error) {
        console.error('Failed to fetch reviews', error);
      }
    };

    fetchPlaceDetails();
    fetchReviews();
  }, [placeId]);

  if (!place) {
    return <Text>Loading...</Text>;
  }

  const renderReview = ({ item }) => (
    <View style={styles.reviewItem}>
      <Text style={styles.reviewText}>{item.fullname}: {item.comment}</Text>
      <Text>Rating: {item.rating}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

      <Text style={styles.title}>{place.name}</Text>
      <Image source={{ uri: place.image }} style={styles.placeImage} />
      <Text>{place.description}</Text>
      <Text>Location: {place.location}</Text>
      <Text>Type: {place.type}</Text>
      <FlatList
        data={reviews}
        renderItem={renderReview}
        keyExtractor={(item) => item._id.toString()}
        contentContainerStyle={styles.list}
      />
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
    // justifyContent: 'space-between',
    // margin: 10,
    // marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  list: {
    paddingBottom: 20,
  },
  reviewItem: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    marginVertical: 5,
    borderRadius: 5,
  },
  reviewText: {
    fontSize: 16,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  scrollContainer: {
    padding: 10,
    paddingBottom: 80, 
  },
  placeImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default Post;
