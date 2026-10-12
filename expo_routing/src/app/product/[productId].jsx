import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const ProductScreen = () => {

    const {productId}=useLocalSearchParams();
  return (
    <View>
      <Text>Product_Id: {productId}</Text>
    </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({})