import { cleanup, fireEvent } from "@testing-library/react-native";

import { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup } from "../components/button";
import { GluestackUIProvider } from "../components/gluestack-ui-provider";
import { AddIcon } from "../components/icon";
import { render } from "../test-util";

afterAll(cleanup);

//-----------------------------------------------------------------

describe("Button", () => {
  it("renders Button with text", async () => {
    const element = await render(
      <GluestackUIProvider mode='light'>
        <Button>
          <ButtonText>Click me</ButtonText>
        </Button>
      </GluestackUIProvider>
    );
    expect(element.getByText("Click me")).toBeTruthy();
    expect(element).toMatchSnapshot();
  });

  it("calls onPress when pressed", async () => {
    const onPressMock = jest.fn();
    const element = await render(
      <Button onPress={onPressMock}>
        <ButtonText>Press</ButtonText>
      </Button>
    );
    fireEvent.press(element.getByRole("button"));
    expect(onPressMock).toHaveBeenCalled();
    expect(element).toMatchSnapshot();
  });

  it("renders ButtonIcon", async () => {
    const element = await render(
      <Button>
        <ButtonIcon as={AddIcon} testID='icon' />
        <ButtonText>Star</ButtonText>
      </Button>
    );
    expect(element.getByTestId("icon")).toBeTruthy();
    expect(element).toMatchSnapshot();
  });

  it("renders ButtonSpinner when loading", async () => {
    const element = await render(
      <Button>
        <ButtonSpinner testID='spinner' />
        <ButtonText>Loading</ButtonText>
      </Button>
    );
    expect(element.getByTestId("spinner")).toBeTruthy();
    expect(element).toMatchSnapshot();
  });

  it("renders ButtonGroup with multiple buttons", async () => {
    const element = await render(
      <ButtonGroup>
        <Button>
          <ButtonText>One</ButtonText>
        </Button>
        <Button>
          <ButtonText>Two</ButtonText>
        </Button>
      </ButtonGroup>
    );
    expect(element.getAllByRole("button")).toHaveLength(2);
    expect(element).toMatchSnapshot();
  });
});
