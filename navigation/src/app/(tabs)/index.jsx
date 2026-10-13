import { Text, View, StyleSheet } from "react-native";
import {Link} from "expo-router";
export default function Index() {
  return (
    <View style={styles.container}>
      <Link style={styles.links} href={"/about"}>About</Link>
      <Link style={styles.links} href={"/details"}>Details</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap:10,
  },
  links: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
