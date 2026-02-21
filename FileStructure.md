src/
│
├── app/                     # Next.js app router
│   ├── (marketing)/         # Public pages group
│   │   ├── page.tsx
│   │   ├── pricing/
│   │   └── about/
│   │
│   ├── (auth)/              # Auth pages group
│   │   ├── login/
│   │   └── register/
│   │
│   ├── dashboard/           # Protected app
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── interviews/
│   │
│   ├── interview/           # Interview room
│   │   └── [roomId]/
│   │       └── page.tsx
│   │
│   ├── api/                 # Route handlers
│   │   └── auth/
│   │
│   ├── layout.tsx
│   └── globals.css
│
├── components/              # Reusable UI
│   ├── ui/                  # Buttons, inputs, cards
│   ├── layout/              # Navbar, sidebar
│   ├── interview/           # Interview-specific UI
│   └── common/
│
├── features/                # Feature-based modules
│   ├── auth/
│   ├── interviews/
│   ├── chat/
│   └── code-editor/
│
├── lib/                     # Helpers & configs
│   ├── db.ts
│   ├── utils.ts
│   ├── websocket.ts
│   └── judge0.ts
│
├── hooks/                   # Custom React hooks
│   ├── useAuth.ts
│   ├── useSocket.ts
│   └── useInterview.ts
│
├── services/                # API calls
│   ├── auth.service.ts
│   ├── interview.service.ts
│   └── user.service.ts
│
├── store/                   # Zustand/Redux
│   └── interviewStore.ts
│
├── types/                   # TS types
│   ├── interview.ts
│   └── user.ts
│
├── styles/                  # Extra styles
│
└── config/                  # App configs
    ├── site.ts
    └── constants.ts
