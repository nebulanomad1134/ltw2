import { View, Text, StyleSheet, TextInput, Alert  } from 'react-native'
import React, {useState} from 'react'
import InputBox from '../../components/form/InputBox';
import SubmitButton from '../../components/form/SubmitButton';

const Login = () => {
    //states
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    //fucntions
    //btn function
    const handleSubmit = async () => {
        try {
          setLoading(true);
          if (!username || !password) {
            Alert.alert("Please Fill All Fields");
            setLoading(false);
            return;
          }
          setLoading(false);
          console.log("Login Data==> ", { username, password });
        } catch (error) {
          alert(error.response.data.message);
          setLoading(false);
          console.log(error);
        }
    };

  return (
    <View style={styles.container}>
    <Text style={styles.pageTitle}>Login</Text>
    <View style={{ marginHorizontal: 20 }}>
      {/* <InputBox inputTitle={"Name"}/> */}
      <InputBox inputTitle={"Username"} 
      value={username}
      setValue={setUsername}
      />
      <InputBox inputTitle={"Password"} 
      secureTextEntry={true}
      autoComplete="password"
      value={password}
      setValue={setPassword}
      />
    </View>
    {/* <Text>{JSON.stringify({ username, password }, null, 4)}</Text> */}
    <SubmitButton
      btnTitle="LOGIN"
      loading={loading}
      handleSubmit={handleSubmit}
    />
    <Text style={styles.linkText}>
      Not a user? {" "}
      <Text style={styles.link} onPress={() => navigation.navigate("Register")}>
        Register
      </Text>{" "}
    </Text>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#E2EAF4",
    },
    pageTitle: {
      fontSize: 40,
      fontWeight: "bold",
      textAlign: "center",
      color: "#060270",
      marginBottom: 20,
    },
    inputBox: {
      height: 40,
      marginBottom: 20,
      backgroundColor: "#ffffff",
      borderRadius: 10,
      marginTop: 10,
      paddingLeft: 10,
      color: "#E2EAF4",
    },
    linkText: {
      textAlign: "center",
    },
    link: {
      color: "#D20103",
    },
});


export default Login