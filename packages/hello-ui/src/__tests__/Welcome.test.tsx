import { cleanup, render, screen } from "@testing-library/react-native";

import { UIProvider } from "../UIProvider";
import { Welcome } from "../Welcome";

afterEach(cleanup);

it("renders textual children", () => {
  render(
    <UIProvider theme="dark">
      <Welcome />
    </UIProvider>
  );
  expect(screen.getByText("Hello UI")).toBeDefined();
  expect(screen.getByText("This is the first page of your app.")).toBeDefined();
});
