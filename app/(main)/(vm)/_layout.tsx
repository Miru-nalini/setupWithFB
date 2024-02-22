import { StyleSheet,SafeAreaView,Text } from 'react-native'
import React from 'react'
import { Stack, router } from 'expo-router'
import { useState } from 'react'
import { Router } from 'expo-router'
const _layout = () => {
  const [isLoading,setIsLoading]=useState(true);

  return (
    <SafeAreaView style={{flex:1}}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="vmDetails" options={{presentation:'containedModal', headerShown:true}} />
      </Stack>
    </SafeAreaView>
  )
}

export default _layout

const styles = StyleSheet.create({})