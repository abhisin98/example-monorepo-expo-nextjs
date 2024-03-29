import { UIProvider } from "@monorepo/hello-ui";
import { Slot } from "expo-router";

export default function Root() {
  return (
    <UIProvider theme='light'>
      <Slot />
    </UIProvider>
  );
}
