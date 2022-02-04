import React, { useState } from "react";
import { handleDataWrite } from "../functions/firebseDatabase";
import { SafeAreaView, View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
export default function HomeScreen() {
  const[itemName, setItemName] = useState('');
  const[itemPrice, setItemPrice] = useState('');
  const[itemCategory, setItemCategory] = useState('');
  return (
      <View style={styles.container}>
        <View style={styles.searchbar}>
          <Image source = {require('assignment/assets/logo.png')}
          height={50}
          width={50}
          />
        </View>
        <View style={styles.addContainer}>
          <View style={styles.nameInput}>
            <Text  style={{
                color: "#46cd80",
                fontSize: 16,
                fontWeight:'bold',
                marginTop: 4
              }}>Name :</Text>
              <View style={styles.paddingOf}>
                 <TextInput 
                 value={itemName}
          onChangeText={(text) => setItemName(text)}
              placeholder="Name Of Product"
              placeholderTextColor={'#46cd80'}
              style={styles.textColor}
              />
              </View>
             
          </View>
          <View style={styles.priceInput}>
            <Text  style={{
                color: "#46cd80",
                fontSize: 16,
                fontWeight:'bold',
                marginTop: 4
              }}>Price :</Text>
              <View style={styles.paddingOf}>
                 <TextInput 
                 value={itemPrice}
                 onChangeText={(text) => setItemPrice(text)}
              placeholder="Price Of Product"
              placeholderTextColor={'#46cd80'}
              style={styles.textColor}
              />
              </View>
             
          </View>
          <View style={styles.categoryInput}>
            <Text  style={{
                color: "#46cd80",
                fontSize: 16,
                fontWeight:'bold',
                marginTop: 4
              }}>Category :</Text>
              <View style={styles.paddingOf}>
                 <TextInput 
                 value={itemCategory}
                 onChangeText={(text) => setItemCategory(text)}
              placeholder="Category Of Product"
              placeholderTextColor={'#46cd80'}
              style={styles.textColor}
              />
              </View>
             
          </View>
          <View>
            <TouchableOpacity
            style={styles.addBtn}
             onPressIn={()=>{handleDataWrite(itemName, itemPrice, itemCategory)}}
            >
              <Text>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c213b",
    alignItems:'center',
  },
  searchbar:{
    marginTop:8,
    alignItems:'center',
    justifyContent:'center'
  },
  addContainer:{
    marginTop: 20,
    backgroundColor:'#252849',
    height: 500,
    width:420,
    borderRadius:16,
    padding: 24,
    justifyContent:'center'
  },
  nameInput:{
    flexDirection:"row",
    justifyContent:'space-between'
   //'
  },
  paddingOf:{
    padding:4,
    width:300,
    height:40,
    backgroundColor:'#383c6b',
    borderRadius:12,
    paddingLeft:8
  },
  textColor:{
    fontSize: 16,
    color:'#efefef',
    fontWeight:'bold'
  },
  priceInput:{
    marginTop:24,
    flexDirection:"row",
    justifyContent:'space-between'
   //'
  },
  categoryInput:{
    marginTop:24,
    flexDirection:"row",
    justifyContent:'space-between'
   //'
  },
  addBtn:{
   marginTop:24,
    alignItems:'center',
    justifyContent:'center',
    height: 50,
    backgroundColor:'#46cd80',
    borderRadius:20
  }
});
