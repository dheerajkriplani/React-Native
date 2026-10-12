import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const ProfileScreen = () => {
  const {userId, profileId } = useLocalSearchParams();

  return (
    <View>
      <Text>User_Id: {userId}</Text>
      <Text>Profile_Id: {profileId}</Text>

      <Text>for this we have to make folder in folder</Text>
      <Text style={{color:"red"}}>To overcome this we use Catch All Routes</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});