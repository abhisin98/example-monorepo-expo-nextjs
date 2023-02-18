import { Stack } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { useSignIn } from "../../util/auth";

export default function Signin() {
  const { user, signIn } = useSignIn();
  return (
    <View style={styles.container}>
      {/* Use the `Screen` component to configure the layout. */}
      <Stack.Screen options={{ title: "Sign In" }} />
      <View style={styles.main}>
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subtitle}>
          This is the first page of your app. {JSON.stringify(user)}
        </Text>
        <TouchableOpacity style={styles.button} onPress={signIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  button: {
    marginVertical: 10,
    backgroundColor: "blue",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
