import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView, Image, KeyboardAvoidingView, Platform } from 'react-native';
import axios from 'axios';
import FooterMenu from '../components/menu/FooterMenu';
import { AuthContext } from '../context/authContext';

const About = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '', username: '' });
  const [response, setResponse] = useState('');
  const [state] = useContext(AuthContext);

  useEffect(() => {
    if (state.user) {
      setForm((prevForm) => ({ ...prevForm, username: state.user.username }));
    }
  }, [state.user]);

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post('/contacts', form);
      setResponse(res.data.message);
      Alert.alert('Success', res.data.message);
    } catch (error) {
      setResponse('Failed to send message');
      Alert.alert('Error', 'Failed to send message');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Text style={styles.title}>About us</Text>
          <Text style={styles.description}>
            Welcome to our rating place app! This app is your go-to guide for exploring the most famous places around the world. 
            Share your experiences and read others' comments about various locations.
          </Text>

          <Text style={styles.developersTitle}>Meet the Developers</Text>
          <View style={styles.developerContainer}>
            <View style={styles.developer}>
              <Image
                style={styles.avatar}
                source={{ uri: 'https://scontent.fhan9-1.fna.fbcdn.net/v/t39.30808-6/427730106_1472602366686197_4180854381589349155_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEu36X00MjrD6g46t36PXxxYgT6yha_uQtiBPrKFr-5C68okzEMNAvKPktOQe5jjOd3O_mCx5yDa2p2HykreBMH&_nc_ohc=owZGJ7w9nHEQ7kNvgFJjdlc&_nc_ht=scontent.fhan9-1.fna&oh=00_AYD8__N0xbmfKLODSH3HoadJwDRD2TPBroA8u7snYdJ6tw&oe=66748B4C' }}
              />
              <Text style={styles.developerName}>mikecohi</Text>
            </View>
            <View style={styles.developer}>
              <Image
                style={styles.avatar}
                source={{ uri: 'https://i.pinimg.com/736x/c7/60/ab/c760abe4d6e1abf565e71baec5778247.jpg' }}
              />
              <Text style={styles.developerName}>nebulanomad1134</Text>
            </View>
          </View>

          <Text style={styles.title}>Contact Us</Text>

          <View style={styles.inputContainer}>
            <Text>Username:</Text>
            <TextInput
              style={styles.input}
              value={state.username}
              editable={false} // Make this field non-editable
            />
          </View>

          <View style={styles.inputContainer}>
            <Text>Email:</Text>
            <TextInput
              style={styles.input}
              value={form.email}
              onChangeText={(value) => handleChange('email', value)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text>Name:</Text>
            <TextInput
              style={styles.input}
              value={form.name}
              onChangeText={(value) => handleChange('name', value)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text>Message:</Text>
            <TextInput
              style={[styles.input, styles.textarea]}
              value={form.message}
              onChangeText={(value) => handleChange('message', value)}
              multiline
            />
          </View>
          <Button title="Send" onPress={handleSubmit} />
          {response ? <Text style={styles.response}>{response}</Text> : null}
        </ScrollView>
      </View>


      <View style={{flex: 1, justifyContent:"flex-end"}}>
        <FooterMenu />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 6,
  },
  scrollViewContent: {
    padding: 10,
    // flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'justify',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  textarea: {
    height: 100,
  },
  response: {
    marginTop: 20,
    fontSize: 16,
    color: 'green',
  },
  developersTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 10,
  },
  developerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  developer: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  developerName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default About;
