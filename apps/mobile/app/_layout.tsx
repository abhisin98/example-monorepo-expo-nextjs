import { UIProvider } from "@avivox/hello-ui";
import { Slot } from "expo-router";

import { AuthProvider } from "../util/auth/provider";

export default function Root() {
  return (
    // Setup the auth context and render our layout inside of it.
    <AuthProvider>
      <UIProvider theme="dark">
        <Slot />
      </UIProvider>
    </AuthProvider>
  );
}
