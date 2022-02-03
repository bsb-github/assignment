import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { initializeApp } from "firebase/app";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const Stack = createNativeStackNavigator();

export default function SignUpScreen({ navigation }) {
  const firebaseConfig = {
    apiKey: "AIzaSyBg56fI1Hqj5ZL1i18i5ToV7nRyq3fz3F4",
    authDomain: "fir-auth-91a42.firebaseapp.com",
    projectId: "fir-auth-91a42",
    databaseURL: "https://fir-auth-91a42-default-rtdb.firebaseio.com/",
    storageBucket: "fir-auth-91a42.appspot.com",
    messagingSenderId: "444509202678",
    appId: "1:444509202678:web:5716e682ed960abc3824d7",
  };

  //const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  // const database = getDatabase(app);

  const handleSignUp = () => {
    let userId = 1;
    const db = getDatabase();
    set(ref(db, "users/" + username), {
      username: username,
      email: Email,
    });
    createUserWithEmailAndPassword(auth, Email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.email);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  const onpressed = () => {
    navigation.goBack();
  };
  var back = "<-";
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.signup}>
        <View>
          <Text
            style={{
              color: "#efefefef",
              fontSize: 28,
              fontWeight: "bold",
            }}
          >
            Sign Up
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={{
              marginTop: 8,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                color: "#efefefef",
                fontSize: 16,
              }}
            >
              {back}
            </Text>

            <View
              style={{
                marginRight: 4,
              }}
            ></View>

            <Text
              style={{
                color: "#efefefef",
                fontSize: 16,
              }}
            >
              Back To Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.spacer}></View>
      <View style={styles.container2}>
        <TextInput
          value={username}
          onChangeText={(text) => setUsername(text)}
          placeholder="Username......."
          placeholderTextColor={"#46cd80"}
          style={styles.loginTextInput}
        />
      </View>
      <View style={styles.container3}>
        <TextInput
          value={Email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email......."
          placeholderTextColor={"#46cd80"}
          style={styles.loginTextInput}
        />
      </View>
      <View style={styles.container3}>
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password......."
          placeholderTextColor={"#46cd80"}
          style={styles.loginTextInput}
          secureTextEntry={true}
        />
      </View>
      <View>
        <View style={styles.buttonSignIn}>
          <TouchableOpacity
            style={styles.buttonSignInBg}
            onPress={handleSignUp}
          >
            <Text style={styles.blackText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.spacer3}>
        <Text style={styles.textStyle1}>OR</Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c213b",
    paddingTop: 30,
    paddingHorizontal: 26,
  },
  signup: {
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "space-between",
  },
  spacer: {
    marginTop: 40,
  },
  container2: {
    marginTop: 30,
    margin: 16,
    backgroundColor: "#252849",
    height: 50,
    //    alignItems: 'center',
    justifyContent: "center",
    padding: 34,
    borderRadius: 30,
  },
  loginTextInput: {
    height: 50,
    color: "#fff",
    fontSize: 20,
  },
  container3: {
    marginTop: 20,
    margin: 16,
    backgroundColor: "#252849",
    height: 50,
    //    alignItems: 'center',
    justifyContent: "center",
    padding: 34,
    borderRadius: 30,
  },
  buttonSignIn: {
    margin: 18,
    borderRadius: 20,
  },
  buttonSignInBg: {
    height: 55,
    backgroundColor: "#46cd80",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
  },
  blackText: {
    color: "#000000",
    fontSize: 20,
  },
  spacer3: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
