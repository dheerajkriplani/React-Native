import { Text, View, StyleSheet } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Index Page</Text>
      <Link style={styles.links} href={"/about"}>About Page</Link>
      <Link style={styles.links} href={"/details"}>Details Page</Link>
      <Link style={styles.links} href={"/overview"}>Overview</Link>
      <Link style={styles.links} href={"/overview/user"}>Overview-User</Link>
      <Link style={styles.links} href={"/profile/12345"}>Profile Page</Link>
      <Link style={styles.links} href={"/product/090909"}>Product Page</Link>
      <Link style={styles.links} href={"/user/12345/profile/09876"}>Nested Page</Link>    

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
