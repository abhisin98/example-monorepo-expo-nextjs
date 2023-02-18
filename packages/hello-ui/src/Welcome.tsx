import { Layout, Text } from "@ui-kitten/components";
import React from "react";

export const Welcome: React.FC = () => {
  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text category="h1">Hello UI</Text>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      <Text>This is the first page of your app.</Text>
    </Layout>
  );
};
