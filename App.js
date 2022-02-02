import React from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import signUpScreen from './screens/signUp';
 
export default function App() {
  
  const Stack = createNativeStackNavigator();
<Stack.Screen
  name="Home"
  component={signUpScreen}
  options={{ title: 'Overview' }}
/>
  return (
    
    <View style={styles.container}>
      <View style={styles.marginAbove}>
      <Text style={styles.textStyle} 
      >Sign In</Text>
      </View>
      <View
      style={
        styles.spacer
      }
      ></View>
      <View style={styles.container2}>
        <TextInput
        placeholder='Username.......'
        style={styles.loginTextInput}
        />
      </View>
      <View style={styles.container3}>
        <TextInput
        placeholder='Password.......'
        style={styles.loginTextInput}
        secureTextEntry= {true}
        />
      </View>
      <View style={styles.buttonSignIn}>
        <Button 
        title='Sign In'
        color={'#46cd80'}
        style={styles.buttonView}
        />
      </View>
      <View
      style={styles.spacer2}
      >
      </View>
      <View style={styles.donthaveAccount}>
        <Text style={styles.textStyle1}>Dont Have Account?</Text>
        <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        >
        <Text style={styles.textStyle2}>  Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View
      style={styles.spacer2}
      >
      </View>
      <View style={styles.spacer3}>
        <TouchableOpacity>
          <Text style={styles.textStyle3}>Forgot Password?</Text>
        </TouchableOpacity>
        
      </View>
      <View style={styles.spacer3}>
        <Text style={styles.textStyle1}>OR</Text>
      </View>
      <View style={styles.signInOption}>
        <Button
        title='Google'
        />
        <View
        style={styles.spacer4}
        ></View>
      </View>
      
    </View>
  );
}
function navi() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="signUp" component={signUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  img:{
    height: 50,
    width: 50
  },
  container: {
    flex: 1,
    backgroundColor: '#1c213b',
  },
  textStyle: {
    color: '#efefef',
    fontSize: 25,
  },
  textStyle1: {
    color: '#efefef',
    fontSize: 16,
  },
  textStyle2: {
    color: '#46cd80',
    fontSize: 16,
  },
  textStyle3: {
    color: '#46cd80',
    fontSize: 16,
    fontWeight: 'bold'
  },
  marginAbove: {
    marginTop: 15,
    marginLeft: 15

  },
  container2:{
    marginTop: 30,
    margin: 16,
    backgroundColor: '#252849',
    height: 50,
//    alignItems: 'center',
    justifyContent: 'center',
    padding: 34,
    borderRadius: 30

  },
  loginTextInput:{
    height: 50,
    color: '#fff',
    fontSize: 20,
    
  },
  spacer:{
    marginTop: 40
  },
  spacer2:{
    marginTop: 16
  },
  spacer3:{
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  spacer4:{
    margin: 10,
  },
  container3:{
    marginTop: 20,
    margin: 16,
    backgroundColor: '#252849',
    height: 50,
//    alignItems: 'center',
    justifyContent: 'center',
    padding: 34,
    borderRadius: 30

  },
  buttonView:{ 
    height: 50

   },
  buttonSignIn:{
    margin: 16,
    marginHorizontal: 80,
   borderRadius: 20

  },
  donthaveAccount:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  signInOption:{
    flexDirection: 'row',
    marginTop: 40,
    alignContent:'center',
    justifyContent: 'center'
  }
});
