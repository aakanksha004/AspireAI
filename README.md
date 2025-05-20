# 🚀 AspireAI

**AspireAI** is an AI-powered career toolkit that helps users **build resumes**, **prepare for interviews**, generate **tailored cover letters**, and explore **industry insights** — all in one seamless platform.

---

## 🌟 Features

### ✅ Build Resume
Easily generate a professional resume by filling in a guided form or importing data. Designed to be fast, customizable, and AI-assisted.

### 🤖 AI Cover Letter
Generate context-specific, compelling cover letters using **Gemini AI**. Personalized based on user experience, job roles, and industry language.

### 🎯 Interview Prep
Prepare for interviews with smart Q&A generation powered by AI. Get mock questions, suggested answers, and tips based on your resume and job target.

### 📊 Industry Insights
Stay up to date with salary trends, in-demand skills, and hiring patterns across industries — perfect for strategic career planning.

---

## 🔐 Authentication

- User authentication is handled with [**Clerk**](https://clerk.dev), providing secure login, registration, and session management.

---

## 🧠 AI Integration

- All AI-powered features (resume builder, interview questions, cover letter generation) are built using **Gemini API** by Google.

---

## ⚙️ Background Jobs & Workflows

- **Inngest** is used for handling asynchronous workflows (e.g., large cover letter generation, analytics tasks, or industry data fetching).

---

## 🛠️ Tech Stack

| Category         | Technology                  |
|------------------|-----------------------------|
| Frontend         | Next.js, Tailwind CSS       |
| Backend          | Next.js API routes, Prisma  |
| Authentication   | Clerk                       |
| AI Integration   | Gemini API (Google)         |
| Job Queues       | Inngest                     |
| Database         | PostgreSQL (via Prisma ORM) |
| Hosting          | Vercel              |

---

## 📂 Folder Structure (Simplified)



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
