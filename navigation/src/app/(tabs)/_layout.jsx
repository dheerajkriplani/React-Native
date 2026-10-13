import { StyleSheet, Text, View } from 'react-native'
import {Tabs} from 'expo-router';
import { Ionicons } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
        screenOptions={{
            headerShown:true,
            tabBarStyle:{
                backgroundColor:"black",
                height:60,
                padding:10,
                justifyContent:"center",
                alignItems:"center",
                marginBottom:30,
                width:300,
                borderRadius:50,
                alignSelf:"center"
            },
            tabBarActiveTintColor:"skyblue",
            tabBarInactiveTintColor:"grey"
        }}
    >
        <Tabs.Screen 
            name="index"
            options={{
                title:"Home",
                tabBarIcon:({color,size})=>(
                    <Ionicons name="home" color={color} size={size}/>
                ),
            }}
        />
        <Tabs.Screen 
            name="about"
            options={{
                title:"About",
                 tabBarIcon:({color,size})=>(
                    <Ionicons name="compass" color={color} size={size}/>
                ),
            }}
        />
        <Tabs.Screen 
            name="details"
            options={{
                title:"Details",
                 tabBarIcon:({color,size})=>(
                    <Ionicons name="list" color={color} size={size}/>
                ),
                tabBarBadge:10,
            }}
        />
    </Tabs>
  );
}

export default TabsLayout

const styles = StyleSheet.create({})