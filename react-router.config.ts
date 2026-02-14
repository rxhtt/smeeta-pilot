import type { Config } from "@react-router/dev/config";
import { hydrogenPreset } from "@shopify/hydrogen/react-router-preset";

export default {
  presets: [hydrogenPreset()],
  appDirectory: "app",
  buildDirectory: "build",
  ssr: true,
  future: {
    v3_singleFetch: false,
  },
} as unknown as Config;
