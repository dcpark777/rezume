import { z } from "zod";

const envSchema = z.object({
  // Supabase Configuration
  NEXT_PUBLIC_SUPABASE_URL: z.string().url("Invalid Supabase URL"),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1, "Supabase anon key is required"),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1, "Supabase service role key is required"),

  // Application Configuration
  NEXT_PUBLIC_APP_URL: z.string().url("Invalid app URL"),

  // AI Configuration
  AI_PROVIDER: z.enum(["openai", "anthropic", "google"], {
    errorMap: () => ({ message: "AI provider must be one of: openai, anthropic, google" }),
  }),
  AI_MODEL: z.string().min(1, "AI model is required"),
  OPENAI_API_KEY: z.string().min(1, "OpenAI API key is required"),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  AI_PROVIDER: process.env.AI_PROVIDER,
  AI_MODEL: process.env.AI_MODEL,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
});

// Type-safe environment variables
export type Env = z.infer<typeof envSchema>;
