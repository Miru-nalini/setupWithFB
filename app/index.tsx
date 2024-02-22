import { StyleSheet, Text, Dimensions,TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { Link , router} from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-gesture-handler'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const register = () => {
  const [email,setEmail]=useState<string>("");
  const [password,setPassword]=useState<string>("");
  const handleRegister = () => {
    createUserWithEmailAndPassword(getAuth(), email, password)
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

        <Text style={{fontSize:56,marginBottom:48}}>Welcome!</Text>

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

        <TouchableOpacity onPress={handleRegister} style={styles.button}>
          <Text style={[styles.text,{color:'blue'}]}>Register</Text>
        </TouchableOpacity>
      
      </KeyboardAvoidingView>

        <TouchableOpacity style={styles.registerLink}>
          <Link href={'/login'} asChild>
            <Text style={styles.text}>Already have an account? Login</Text>
          </Link>
        </TouchableOpacity>
        
    </SafeAreaView>
    
  )
}

export default register

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:windowWidth,
    height:windowHeight,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'space-between',

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