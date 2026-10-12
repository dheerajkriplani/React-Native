import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const ProfileScreen = () => {
  const { profileId } = useLocalSearchParams();

  return (
    <View>
      <Text>Profile_Id: {profileId}</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});