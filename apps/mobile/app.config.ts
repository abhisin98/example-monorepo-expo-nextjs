import type { ExpoConfig, ConfigContext } from "expo/config";

const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return "com.mobile.dev";
  }

  if (IS_PREVIEW) {
    return "com.mobile.preview";
  }

  return "com.mobile.app";
};

const getAppName = () => {
  if (IS_DEV) {
    return "Mobile (Dev)";
  }

  if (IS_PREVIEW) {
    return "Mobile (Preview)";
  }

  return "Mobile";
};

// --------------------------------------------------------------------
const defineConfig = ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: getAppName(),
  slug: "mobile",
  scheme: "mobile",
  version: "0.1.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  jsEngine: "hermes",
  assetBundlePatterns: ["**/*"],
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  web: {
    favicon: "./assets/favicon.png",
    bundler: "metro",
  },
  ios: {
    jsEngine: "jsc",
    buildNumber: "1",
    bundleIdentifier: getUniqueIdentifier(),
    supportsTablet: true,
  },
  android: {
    versionCode: 1,
    package: getUniqueIdentifier(),
    edgeToEdgeEnabled: true,
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#FFFFFF",
    },
  },
  plugins: ["expo-router"],
  experiments: {
    typedRoutes: true,
  },
  extra: {
    eas: {
      projectId: "<projectId>",
    },
  },
  updates: {
    url: "https://u.expo.dev/<projectId>",
  },
  runtimeVersion: {
    policy: "appVersion",
  },
});

export default defineConfig;
