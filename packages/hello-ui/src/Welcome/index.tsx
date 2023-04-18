import { Layout, Text } from "@ui-kitten/components";
import * as React from "react";

const Welcome: React.FC = () => {
  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text category='h1'>Hello UI</Text>
      <Text>This is the first page of your app.</Text>
    </Layout>
  );
};

export default Welcome;
