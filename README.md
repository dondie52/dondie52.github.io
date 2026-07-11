# Georgy Moni Portfolio

React and Vite portfolio for Georgy Moni, with a GitHub Pages frontend and a separate Render API for the hero AI assistant.

## Local Development

Install and run the frontend:

```bash
npm install
npm run dev
```

Run the AI API locally in another terminal:

```bash
cd server
npm install
cp .env.example .env
npm run dev
```

Set `OPENAI_API_KEY` in `server/.env` before testing live AI responses. For local frontend calls, set this in the root `.env` file:

```bash
VITE_AI_API_URL=http://localhost:3001/api/ask-georgy
```

## AI Hero Chat Setup

The homepage hero chat card calls the API URL from `VITE_AI_API_URL`. If that variable is not set, it falls back to `https://georgy-portfolio-ai-api.onrender.com/api/ask-georgy`.

Never put `OPENAI_API_KEY` in a Vite/frontend environment variable. Vite variables are bundled into browser code when they start with `VITE_`.

## AI API Security

The AI API is designed so the browser never sees private credentials. Security controls include:

- strict CORS allowlisting through `ALLOWED_ORIGINS`
- blocked missing or unknown origins on `/api/*`
- JSON-only requests with a small body limit
- per-IP rate limiting with hashed rate-limit keys
- prompt-injection and secret-exfiltration prefilters
- short OpenAI request timeout and bounded assistant responses
- Helmet security headers and `Cache-Control: no-store`
- generic production errors that do not expose provider details

For local API testing with tools like curl, include an allowed `Origin` header:

```bash
curl -X POST http://localhost:3001/api/ask-georgy \
  -H "Origin: http://localhost:5173" \
  -H "Content-Type: application/json" \
  -d "{\"message\":\"What does Georgy build?\",\"history\":[]}"
```

## Render API Deployment

Deploy the `server/` folder as a Render web service.

Required Render environment variable:

```bash
OPENAI_API_KEY=your_openai_api_key
```

Recommended Render environment variables:

```bash
OPENAI_MODEL=gpt-5.5
ALLOWED_ORIGINS=https://dondie52.github.io,http://localhost:5173
RATE_LIMIT_SALT=a_long_random_string
```

Render can use the root `render.yaml`, or these manual settings:

```bash
Root Directory: server
Build Command: npm install
Start Command: npm start
Health Check Path: /health
```

## GitHub Pages Deployment

Keep `OPENAI_API_KEY` out of GitHub Pages. After deploying the Render service, add this GitHub repository variable:

```bash
VITE_AI_API_URL=https://your-render-service.onrender.com/api/ask-georgy
```

The Pages workflow passes `VITE_AI_API_URL` into the Vite build. This value is public and safe because it is only the API endpoint URL.
