import { screen, cleanup } from "@testing-library/react-native";

import { Button, ButtonText } from "../components/button";
import { GluestackUIProvider } from "../components/gluestack-ui-provider";
import { render } from "../test-util";

afterAll(cleanup);

//-----------------------------------------------------------------
test("UI test", async () => {
  await render(
    <GluestackUIProvider mode='light'>
      <Button action='primary' variant='solid' testID='hello-test'>
        <ButtonText>Click me</ButtonText>
      </Button>
    </GluestackUIProvider>
  );

  const component = screen.getByTestId("hello-test");
  expect(component).toHaveStyle({
    backgroundColor: "rgba(51, 51, 51, 1)",
    borderColor: "rgba(102, 102, 102, 1)",
  });

  expect(screen).toMatchSnapshot();
});
