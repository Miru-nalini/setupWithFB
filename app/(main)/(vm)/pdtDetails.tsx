import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const pdtDetails = () => {
  return (
    <View>
      <Text>pdtDetails</Text>
      <Link href={'/(main)/(vm)/history'} asChild>
        <Text>go to pdt history</Text>
      </Link>
    </View>
  )
}

export default pdtDetails

const styles = StyleSheet.create({})