import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Button } from "ui";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.heading}>Expo</Text>
      <Text style={styles.subHeading}>
        Open up App.tsx to start working on your app!
      </Text>
      <Button
        style={styles.buttonText}
        onPress={() => Alert.alert("Hello", "I'am React Native Button")}
      >
        React Native Button
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 72,
    fontWeight: "600",
    color: "white",
  },
  subHeading: {
    color: "white",
    fontSize: 18,
    fontWeight: "400",
    marginVertical: 10,
  },
  buttonText: {
    color: "blue",
    fontSize: 16,
    fontWeight: "400",
  },
});
