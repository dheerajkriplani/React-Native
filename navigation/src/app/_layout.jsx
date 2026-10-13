import { Stack } from "expo-router";
import { Drawer } from "expo-router/drawer";


export default function RootLayout() {
  return (
    // <Stack
    //   screenOptions={{
    //     headerTintColor:"white",
    //     headerTitleStyle:{
    //       fontWeight:900,
    //     },
    //     headerTitleAlign:"center"
    //   }}
    // >
    //   <Stack.Screen name="index" 
    //   options={{
    //     title:"Home",
    //     headerStyle:{
    //       backgroundColor:"orange",
    //     }
    //   }}/>
    //   <Stack.Screen name="about"
    //   options={{
    //     title:"About",
    //     headerStyle:{
    //       backgroundColor:"teal",
    //     }
    //   }}/>
    //   <Stack.Screen name="details"
    //   options={{
    //     title:"Details",
    //     headerStyle:{
    //       backgroundColor:"lightpink",
    //     }
    //   }}
    //   />
    // </Stack>


// Tabs

    // <Stack>
    //   <Stack.Screen
    //     name="(tabs)"
    //     options={{
    //       headerShown:false,
    //     }}
    //   />
    // </Stack>


  //Drawer
    <Drawer/>

    
  )
}
