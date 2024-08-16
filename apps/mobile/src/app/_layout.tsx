// Import your global CSS file
import "../../global.css";

// import { GluestackUIProvider } from "@monorepo/hello-ui/components/gluestack-ui-provider";
import { Slot } from "expo-router";

// --------------------------------------------------------------------
export default function Root() {
  return (
    // <GluestackUIProvider mode='light'>
    <Slot />
    // </GluestackUIProvider>
  );
}
