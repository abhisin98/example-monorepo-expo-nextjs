"use client";
import { Button, ButtonText } from "@monorepo/hello-ui/components/button";
import { Heading } from "@monorepo/hello-ui/components/heading";
import { View, Text } from "react-native";

// --------------------------------------------------------------------
export default function HomePage() {
  return (
    <main style={{ height: "100vh" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Heading size='2xl'>Hello UI</Heading>
        <Text>This is the first page of your app.</Text>

        <Button size='md' variant='solid' action='primary'>
          <ButtonText>Hello World!</ButtonText>
        </Button>
      </View>
    </main>
  );
}
