A React + vite-based AI dance choreography app powered by TensorFlow, Firebase, Supabase,and Stripe.

## Scripts 
- 'npm install': install  dependencies 
- 'npm run dev': run in development 
- 'npm run build ': production  build

## Deployment 
Deploy  to Vercel  from this  GitHub repo.
Ensure  environment  variables  for Firebase and Stripe are configured.

## Project  Structure 
'''
/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Auth/
│   │   ├── DanceRoutine/
│   │   ├── Payment/
│   │   └── Shared/
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   ├── Dashboard.tsx
│   │   └── RoutineEditor.tsx
│   ├── styles/
│   ├── App.tsx
│   ├── main.tsx
│   ├── firebase.ts
│   └── supabaseClient.ts
├── functions/
│   └── remixGenerator.ts
├── index.html
├── package.json
├── vite.config.ts
├── capacitor.config.ts
├── .env
└── README.md