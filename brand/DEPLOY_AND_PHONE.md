# Deploy + Phone (partner ops)

## Deploy site to Vercel

```bash
cd /Users/astickley/development/projects/toledo-power-wash
npx vercel login          # one-time browser login
npx vercel --prod --yes --scope lemxnaidhead-6918s-projects
```

Or with a token:
```bash
export VERCEL_TOKEN=...
npx vercel --prod --yes --token $VERCEL_TOKEN --scope lemxnaidhead-6918s-projects
```

GitHub repo (already pushed): https://github.com/astickleyid/toledo-power-wash

## Get a Toledo business number (419)

### Option A — Twilio (~$1.15/mo) — recommended for business SMS+voice
1. Sign up: https://www.twilio.com/try-twilio (free trial credit)
2. Copy Account SID + Auth Token into `toledo-power-wash/.env`:
   ```
   TWILIO_ACCOUNT_SID=ACxxxx
   TWILIO_AUTH_TOKEN=xxxx
   ```
3. Run:
   ```bash
   node scripts/buy-twilio-number.mjs
   ```
4. That writes `brand/phone.json` + `.env.local` with NEXT_PUBLIC_PHONE
5. Tell Grok "number is ready" — we wire Pressure Ops + redeploy

### Option B — Google Voice (free)
1. https://voice.google.com — get a free number (prefer 419 if available)
2. Tell Grok the number — we put it everywhere

### Option C — OpenPhone
1. https://www.openphone.com — business app, app on phone
2. Same: give Grok the number

## After number exists
- Site env: NEXT_PUBLIC_PHONE=+1... NEXT_PUBLIC_PHONE_DISPLAY="(419) ..."
- Pressure Ops: PUT /api/meta phone
- Google Business Profile: same number
