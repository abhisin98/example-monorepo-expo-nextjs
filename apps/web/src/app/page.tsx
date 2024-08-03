"use client";
import { Heading } from "@monorepo/hello-ui";
import React from "react";
import { View, Text } from "react-native";

// --------------------------------------------------------------------
export default function HomePage() {
  return (
    <main style={{ height: "100vh" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Heading size='2xl'>Hello UI</Heading>
        <Text>This is the first page of your app.</Text>
      </View>
    </main>
  );
}
