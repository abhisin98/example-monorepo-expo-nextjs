import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import * as React from "react";
// import { Welcome } from "./welcome";

export interface UIProviderProps {
  children?: React.ReactNode;
  theme: "dark" | "light";
}

export const UIProvider: React.FC<UIProviderProps> = ({ children, theme, ...rest }) => {
  return (
    <ApplicationProvider {...eva} theme={eva[theme]} {...rest}>
      {children}
    </ApplicationProvider>
  );
};
