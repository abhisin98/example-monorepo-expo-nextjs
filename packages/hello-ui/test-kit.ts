import { render as rn, RenderOptions, renderCurrentTest as rnct, RenderCurrentTestOptions } from "nativewind/test";
import React from "react";

import tailwindRootConfig from "./tailwind.config.js";
export * from "nativewind/test";

const css = `
@tailwind base;
@tailwind components;
@tailwind utilities;
`;

export const render = (component: React.ReactElement<any>, options?: RenderOptions) => {
  return rn(component, {
    config: tailwindRootConfig,
    css,
    ...options,
  });
};

export const renderCurrentTest = (options?: RenderCurrentTestOptions) => {
  return rnct({
    config: tailwindRootConfig,
    css,
    ...options,
  });
};
