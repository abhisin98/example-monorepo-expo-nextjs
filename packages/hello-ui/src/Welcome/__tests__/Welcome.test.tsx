import { cleanup, render, screen } from "@testing-library/react-native";
import React from "react";

import UIProvider from "../../UIProvider";
import Welcome from "../index";

afterEach(cleanup);

it("renders Welcome component", () => {
  render(
    <UIProvider theme='dark'>
      <Welcome />
    </UIProvider>
  );
  expect(screen.getByText("Hello UI")).toBeDefined();
  expect(screen.getByText("This is the first page of your app.")).toBeDefined();
});
