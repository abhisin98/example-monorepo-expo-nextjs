import { Welcome } from "@monorepo/hello-ui";
import { Stack } from "expo-router";

export default function Page() {
  return (
    <>
      <Stack.Screen options={{ title: "Overview" }} />
      <Welcome />
    </>
  );
}
