import {
  Image,
  Text,
  View,
  Button,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Pressable,
  useColorScheme,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { StatusBar } from 'react-native';

const App = () => {
  const theme=useColorScheme();
  const isDarkMode=theme==="dark";

  const bgColor=isDarkMode?"black":"white";
  const textColor=isDarkMode?"white":"black";
  
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#ffffff" />

      <SafeAreaView style={[styles.container,{backgroundColor:bgColor}]}>
        <Text style={[styles.text,{color:textColor}]}>Hello World</Text>
        <Image
          style={styles.img}
          source={{
            uri: 'https://i.pinimg.com/736x/be/11/63/be1163d5e5f9c12f2ea6c8dd2973ee8f.jpg',
          }}
        />

        {/* <Button title="Press Me" />
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert('Pressed!!')}
        >
          <Text>Button</Text>
        </TouchableOpacity> */}

        <Pressable style={styles.button} onPress={()=>Alert.alert("Clicked")}>
          <Text style={styles.btnText}>Press Me</Text>
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;



const styles=StyleSheet.create({
  container:{
    width:"100%", 
    height:"100%",
    backgroundColor:"black",
    alignItems:"center",
    gap:10
  },
  text:{
    color:"white",
    fontSize:20,
    fontWeight:"bold",

  },
  img:{
    width:"50%",
    height:"30%"
  },

  button:{
    padding: 10, 
    backgroundColor: 'blue',    
    borderRadius:20,
    padding:10 
  },

  btnText:{
    color:"white",
    fontSize:18,
    fontWeight:20
  }
})