import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({

  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
  },

  client: {
    NEXT_PUBLIC_CLIENT_APP_DOMAIN: z.string(),
    NEXT_PUBLIC_CLIENT_DEV_DOMAIN: z.string(),
  },

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_CLIENT_APP_DOMAIN: process.env.NEXT_PUBLIC_CLIENT_APP_DOMAIN,
    NEXT_PUBLIC_CLIENT_DEV_DOMAIN: process.env.NEXT_PUBLIC_CLIENT_DEV_DOMAIN,
  },
 
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
