import { cleanup, render, screen } from "@testing-library/react-native";
import { Layout, Text } from "@ui-kitten/components";
import React from "react";

import UIProvider from "../index";

afterEach(cleanup);

it("renders UIProvider with children", () => {
  render(
    <UIProvider theme='dark'>
      <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Welcome to Hello UI</Text>
      </Layout>
    </UIProvider>
  );
  expect(screen.getByText("Welcome to Hello UI")).toBeDefined();
});
