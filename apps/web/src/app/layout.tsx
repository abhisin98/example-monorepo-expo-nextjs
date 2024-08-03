import { GluestackUIProvider } from "@monorepo/hello-ui";
import type { Metadata } from "next";

import "../../global.css";
import StyledJsxRegistry from "./registry";

export const metadata: Metadata = {
  title: "MonoRepo",
  description: "Created by Abhi Sinha",
};

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
