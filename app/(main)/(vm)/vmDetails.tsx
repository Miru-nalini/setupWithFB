import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const vmDetails = () => {
  return (
    <View>
      <Text>vmDetails</Text>
      <Link href={'/(main)/(vm)/pdtDetails'} asChild>
        <Text>go to pdt Details</Text>
      </Link>
    </View>
  )
}

export default vmDetails

const styles = StyleSheet.create({})