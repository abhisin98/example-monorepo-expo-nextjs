import { render, fireEvent } from "@testing-library/react-native";
import React from "react";

import HomePage from "../app/index";

describe("<HomePage /> test", () => {
  it("Text renders correctly on HomeScreen", () => {
    const element = render(<HomePage />);
    expect(element.getByText("Hello UI")).toBeTruthy();
    expect(element).toMatchSnapshot();
  });
});
