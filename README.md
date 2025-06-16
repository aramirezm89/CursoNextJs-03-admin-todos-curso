# Admin TODO App

A Next.js application for task management with PostgreSQL database support and Prisma ORM.

## Prerequisites

- Node.js 18 or higher
- Docker and Docker Compose
- npm or pnpm package manager
- Prisma CLI (installed with project dependencies)

## Getting Started

### 1. Database Setup

First, start the PostgreSQL database using Docker Compose:

```bash
docker compose up -d
```

Initialize Prisma in your project:

```bash
npx prisma init
```

This will create a `prisma` directory with a `schema.prisma` file and a `.env` file.

Then, after defining your models in the schema, run Prisma migrations to set up your database schema:

```bash
npx prisma migrate dev
```
after that we need to generate our PrimaClient¨

```bash
npx prisma generate
```
To populate the database with initial development data, make a GET request to:
```bash
http://localhost:3000/api/seed
```
This will create sample data in your development database.

### 2. Environment Setup

Rename the `.env.example` file to `.env` and update the environment variables if needed:

```bash
# Database connection string
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/postgres?schema=public"
```

### 3. Install Dependencies

Install the project dependencies:

```bash
npm install
# or
pnpm install
```

### 4. Run Development Server

Start the development server:

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Database Connection

The application will connect to PostgreSQL with these default settings:
- Host: localhost
- Port: 5432
- Database: postgres
- Username: postgres
- Password: postgres

## Features

- Task management interface
- PostgreSQL database integration
- Docker containerized database
- REST API endpoints
- Database seeding for development
- Modern UI with Next.js 14

## Tech Stack

- [Next.js 14](https://nextjs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma ORM](https://www.prisma.io/)
- [Docker](https://www.docker.com/)
- [TypeScript](https://www.typescriptlang.org/)
ent Commands
npm run dev

# Generate Prisma Clienterver
npx prisma generatenpm run dev

# Run Prisma Studio Client
npx prisma studionpx prisma generate

# Build for productionStudio
npm run buildnpx prisma studio

# Start production serveror production
npm startnpm run build

# Stop database containerserver
docker compose down start
```
se container
## Learn Moredocker compose down

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Docker Documentation](https://docs.docker.com/)This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).- [Next.js Documentation](https://nextjs.org/docs)
ation](https://www.prisma.io/docs)
## Getting Started- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
ocs.docker.com/)This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
First, run the development server:
ing Started
```bash
npm run devt, run the development server:
# or
yarn devash
# ordev
pnpm dev
# orv
bun devr
```pnpm dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.bun dev

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
 editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
## Learn More
-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.To learn more about Next.js, take a look at the following resources:

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
ttps://nextjs.org/learn) - an interactive Next.js tutorial.
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
