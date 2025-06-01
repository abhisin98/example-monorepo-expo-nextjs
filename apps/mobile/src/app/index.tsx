import { Button, ButtonText, ButtonSpinner, ButtonIcon } from "@monorepo/hello-ui/components/button";
import { Heading } from "@monorepo/hello-ui/components/heading";
import { AddIcon } from "@monorepo/hello-ui/components/icon";
import { View, Text } from "react-native";

// --------------------------------------------------------------------
export default function Page() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Heading size='2xl'>Hello UI</Heading>
      <Text>This is the first page of your app.</Text>
      <Button size='md' variant='solid' action='primary'>
        <ButtonText>Hello World!</ButtonText>
        <ButtonSpinner />
        <ButtonIcon as={AddIcon} />
      </Button>
    </View>
  );
}
