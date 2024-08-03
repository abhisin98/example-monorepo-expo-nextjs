import { GluestackUIProvider } from "@monorepo/hello-ui";
import { Slot } from "expo-router";

import "../../global.css";

export default function Root() {
  return (
    <GluestackUIProvider mode='light'>
      <Slot />
    </GluestackUIProvider>
  );
}
