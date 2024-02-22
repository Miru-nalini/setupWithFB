import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
    const navigation = useNavigation();
    const handleDrawer = ()=>{
        navigation.dispatch(DrawerActions.openDrawer());
    }

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.header}>
      <TouchableOpacity onPress={handleDrawer}>
        <Ionicons name='menu-outline' size={32} />
      </TouchableOpacity>
      </View>
      <View style={styles.mainContainer}>
      <Text>home</Text>
      <Link href={'/(main)/(vm)/vmDetails'} asChild>
        <Text>go to vm Details</Text>
      </Link>
      </View>  
      
      
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  header:{
    width:'100%',
    padding:16
  },
  mainContainer:{
    justifyContent:'center',
    alignItems:'center',
    width:'100%'
  }
})