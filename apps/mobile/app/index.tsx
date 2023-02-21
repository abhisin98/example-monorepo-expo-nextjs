import { Text, Button, Layout } from "@monorepo/hello-ui";
import { Stack } from "expo-router";
import { View } from "react-native";

import { useSignOut } from "../util/auth";

export default function Page() {
  const { user, signOut } = useSignOut();
  return (
    <Layout style={{ flex: 1 }}>
      {/* Use the `Screen` component to configure the layout. */}
      <Stack.Screen options={{ title: "Overview" }} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text category="h1">Hello UI</Text>
        <Text>This is the first page of your app.</Text>
        <Text>{JSON.stringify(user)}</Text>
      </View>
      <Button appearance="ghost" onPress={signOut}>
        Sign Out
      </Button>
    </Layout>
  );
}
