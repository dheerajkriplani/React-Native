import { StyleSheet, Text, View } from 'react-native'
import {useLocalSearchParams} from 'expo-router'

const SlugScreen = () => {
    const {slug}=useLocalSearchParams();
    const routes=slug.join("/");
  return (
    <View>
      <Text>{routes}</Text>
      <Text style={{color:"red"}}>We get the routes and params without creating folders thats why we use slug(spread operator) used to store in the array.</Text>
    </View>
  )
}

export default SlugScreen

const styles = StyleSheet.create({})