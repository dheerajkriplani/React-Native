import { View, Text } from "react-native";
import { Slot } from "expo-router";

const AuthLayout = () => {
  return (
    <View>
      <Text>Header</Text>
      <Slot />
      {/* Common layout in the folder  */}
      <Text>Footer</Text>
    </View>
  );
};

export default AuthLayout;