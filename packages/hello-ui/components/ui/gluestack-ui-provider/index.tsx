import { OverlayProvider } from "@gluestack-ui/overlay";
import { ToastProvider } from "@gluestack-ui/toast";
import React from "react";
import { View, ViewProps } from "react-native";

import { config } from "./config";

export function GluestackUIProvider({ mode = "light", ...props }: { mode?: "light" | "dark"; children?: React.ReactNode; style?: ViewProps["style"] }) {
  return (
    <View style={[config[mode], { flex: 1, height: "100%", width: "100%" }, props.style]}>
      <OverlayProvider>
        <ToastProvider>{props.children}</ToastProvider>
      </OverlayProvider>
    </View>
  );
}
