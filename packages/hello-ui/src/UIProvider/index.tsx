import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import * as React from "react";

export interface UIProviderProps {
  children: React.ReactNode;
  theme: "dark" | "light";
}
const UIProvider: React.FC<UIProviderProps> = ({ children, theme }) => {
  return (
    <ApplicationProvider {...eva} theme={eva[theme]}>
      {children}
    </ApplicationProvider>
  );
};

export default UIProvider;
