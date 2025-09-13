// Import your global CSS file
import "../../global.css";

import { GluestackUIProvider } from "@monorepo/hello-ui/components/gluestack-ui-provider/index.next15";
import type { Metadata } from "next";

import StyledJsxRegistry from "../registry";

// --------------------------------------------------------------------
export const metadata: Metadata = {
  title: "MonoRepo",
  description: "Created by Abhi Sinha",
};

// --------------------------------------------------------------------
export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang='en'>
      <body>
        <StyledJsxRegistry>
          <GluestackUIProvider mode='light'>{children}</GluestackUIProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
