
import { StyleSheet, Text, Dimensions,TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { Link , router} from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-gesture-handler'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const login = () => {
  const [email,setEmail]=useState<string>("");
  const [password,setPassword]=useState<string>("");
  const handleLogin = () => {
    signInWithEmailAndPassword(getAuth(), email, password)
      .then((user) => {
        if (user){ 
            console.log(email);
            router.replace('/(main)/(vm)/');
          }
      })
      .catch((err) => {
        alert(err?.message);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.inputContainer}>
      <Text style={{fontSize:36,marginBottom:32}}>Enter details</Text>
      <TextInput placeholder='Email'
      value={email}
      onChangeText={(text)=>setEmail(text)}
      keyboardType='email-address'
      style={styles.input}/>
      <TextInput placeholder='Password'
      value={password}
      onChangeText={(text)=>setPassword(text)}
      secureTextEntry
      style={styles.input}/>
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={[styles.text,{color:'blue'}]}>login</Text>
      </TouchableOpacity>
      
      </KeyboardAvoidingView>
        <TouchableOpacity style={styles.registerLink}>
        <Link href={'/'} asChild>
        <Text style={styles.text}>Don't have an account? Register</Text>
      </Link>
        </TouchableOpacity>
    </SafeAreaView>
    
  )
}

export default login

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:windowWidth,
    height:windowHeight,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',

  },
  inputContainer:{
    flex:1,
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    gap:16
  },
  input:{
    borderRadius:16,
    width:'90%',
    borderColor:'#000',
    borderWidth:1,
    padding:16,
  },
  registerLink:{
    bottom:50
  },
  text:{
    fontSize:18
  },
  button:{
    alignItems:'center',
    justifyContent:'center',
    borderRadius:16,
    width:'50%',
    borderColor:'#000',
    borderWidth:1,
    padding:16
  }
})