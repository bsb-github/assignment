import React, {useState} from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  Alert,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "./screens/signUp";
import HomeScreen from "./screens/homeScreen";
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Stack = createNativeStackNavigator();

function SignIn({ navigation }) {
  const auth = getAuth();
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);


  const onpressed = () => {
    navigation.navigate("SignUp")
  };
 
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUserSignIn = () => {
    signInWithEmailAndPassword(auth, Email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user.email)
    navigation.navigate("home");
    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
    <Alert>{errorMessage}</Alert>
  });

  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.marginAbove}>
        <Text style={styles.textStyle}>Sign In</Text>
      </View>
      <View style={styles.spacer}></View>
      <View style={styles.container2}>
        <TextInput
          placeholder="Email......."

          placeholderTextColor={"#46cd80"}
          value={Email}
          onChangeText={(text) => setEmail(text)}
          style={styles.loginTextInput}
        />
      </View>
      <View style={styles.container3}>
        <TextInput
          placeholder="Password......."
          placeholderTextColor={"#46cd80"}
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.loginTextInput}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.buttonSignIn}>
        <TouchableOpacity style={styles.buttonSignInBg} onPress={handleUserSignIn}>
          <Text style={styles.blackText}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.spacer2}></View>
      <View style={styles.donthaveAccount}>
        <Text style={styles.textStyle1}>Dont Have Account?</Text>
        <TouchableOpacity onPress={onpressed}>
          <Text style={styles.textStyle2}> Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.spacer2}></View>
      <View style={styles.spacer3}>
        <TouchableOpacity>
          <Text style={styles.textStyle3}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.spacer3}>
        <Text style={styles.textStyle1}>OR</Text>
      </View>
      <View style={styles.signInOption}>
        <Button title="Google" />
        <View style={styles.spacer4}></View>
      </View>
    </SafeAreaView>
  );
}

export default function App() {
 // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg56fI1Hqj5ZL1i18i5ToV7nRyq3fz3F4",
  authDomain: "fir-auth-91a42.firebaseapp.com",
  databaseURL: "https://fir-auth-91a42-default-rtdb.firebaseio.com",
  projectId: "fir-auth-91a42",
  storageBucket: "fir-auth-91a42.appspot.com",
  messagingSenderId: "444509202678",
  appId: "1:444509202678:web:5716e682ed960abc3824d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="home" component={HomeScreen}   options={{
          title: 'Add Product',
          headerStyle: {
            backgroundColor: '#46cd80',
          },
          headerTintColor: '#1c213b',
          headerTitleStyle: {
            fontWeight:'normal'
          },
        }} />
      <Stack.Screen name="SignIn" component={SignIn} />
     
       
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  blackText: {
    color: "#000000",
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#1c213b",
  },
  textStyle: {
    color: "#efefef",
    fontSize: 25,
  },
  textStyle1: {
    color: "#efefef",
    fontSize: 16,
  },
  textStyle2: {
    color: "#46cd80",
    fontSize: 16,
  },
  textStyle3: {
    color: "#46cd80",
    fontSize: 16,
    fontWeight: "bold",
  },
  marginAbove: {
    marginTop: 15,
    marginLeft: 20,
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
  spacer: {
    marginTop: 40,
  },
  spacer2: {
    marginTop: 16,
  },
  spacer3: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  spacer4: {
    margin: 10,
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
  buttonView: {
    height: 50,
  },
  buttonSignIn: {
    margin: 18,
    borderRadius: 20,
  },
  donthaveAccount: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  signInOption: {
    flexDirection: "row",
    marginTop: 40,
    alignContent: "center",
    justifyContent: "center",
  },
  buttonSignInBg: {
    height: 55,
    backgroundColor: "#46cd80",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
  },
});
