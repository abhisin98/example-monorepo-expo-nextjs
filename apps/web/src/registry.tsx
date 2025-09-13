"use client";
import { flush } from "@gluestack-ui/utils/nativewind-utils";
import { useServerInsertedHTML } from "next/navigation";
import React, { useRef, useState } from "react";
// @ts-expect-error : AppRegistry is defined in react-native-web but its type is not defined
import { AppRegistry } from "react-native-web";
import { StyleRegistry, createStyleRegistry } from "styled-jsx";

export default function StyledJsxRegistry({ children }: { children: React.ReactNode }) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [jsxStyleRegistry] = useState(() => createStyleRegistry());
  const isServerInserted = useRef(false);

  useServerInsertedHTML(() => {
    AppRegistry.registerComponent("Main", () => "main");
    const { getStyleElement } = AppRegistry.getApplication("Main");
    if (!isServerInserted.current) {
      isServerInserted.current = true;
      const styles = [getStyleElement(), jsxStyleRegistry.styles(), flush()];
      jsxStyleRegistry.flush();
      return <>{styles}</>;
    }
  });

  return <StyleRegistry registry={jsxStyleRegistry}>{children}</StyleRegistry>;
}
