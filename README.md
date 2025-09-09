# Rezume - AI-Powered Resume Review Platform

A modern, AI-powered resume review and collaboration platform built with Next.js 14, TypeScript, Tailwind CSS, and Supabase.

## Features

- 🔐 **Authentication** - Magic link + Google/GitHub OAuth via Supabase
- 📄 **File Upload** - Support for .docx and .md files (10MB max)
- 🤖 **AI Review** - Intelligent feedback using OpenAI GPT models
- 📊 **Version Control** - Track changes and compare versions
- 💬 **Comments** - Collaborative feedback system
- 🔗 **Sharing** - Private, link-based, or public resume sharing
- 🌙 **Dark Mode** - Beautiful dark/light theme support

## Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Supabase (Auth, Postgres, Storage)
- **AI**: OpenAI GPT models with provider-agnostic wrapper
- **Validation**: Zod for type-safe environment variables and inputs

## Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- Supabase account
- OpenAI API key

### Installation

1. **Clone and install dependencies:**
   ```bash
   git clone <repository-url>
   cd rezume
   pnpm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables in `.env.local`:
   ```env
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL="your-supabase-url"
   NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"
   SUPABASE_SERVICE_ROLE_KEY="your-supabase-service-role-key"
   
   # Application Configuration
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   
   # AI Configuration
   AI_PROVIDER="openai"
   AI_MODEL="gpt-4o-mini"
   OPENAI_API_KEY="your-openai-api-key"
   ```

3. **Start the development server:**
   ```bash
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── dashboard/         # Main dashboard
│   ├── r/[id]/           # Resume detail pages
│   │   └── diff/         # Version comparison
│   ├── share/[slug]/     # Public sharing
│   └── layout.tsx        # Root layout
├── components/            # Reusable UI components
├── lib/                  # Utilities and configurations
│   ├── env.ts           # Environment validation
│   └── utils.ts         # Helper functions
```

## Environment Variables

All environment variables are validated using Zod in `src/lib/env.ts`. Missing or invalid variables will throw descriptive errors.

Required variables:
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY` - Supabase service role key
- `NEXT_PUBLIC_APP_URL` - Application URL (for auth callbacks)
- `AI_PROVIDER` - AI provider ("openai", "anthropic", "google")
- `AI_MODEL` - AI model name
- `OPENAI_API_KEY` - OpenAI API key

## Development

- **Type Safety**: Full TypeScript support with strict mode
- **Linting**: ESLint with Next.js configuration
- **Styling**: Tailwind CSS with shadcn/ui components
- **Validation**: Zod schemas for all inputs and environment variables

## Deployment

The app is optimized for deployment on Vercel with Supabase backend services.

## License

MIT License - see LICENSE file for details.