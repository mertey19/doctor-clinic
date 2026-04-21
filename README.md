# Doctor Clinic Website

Cleaned public-facing clinic website built with Next.js, TypeScript, Tailwind CSS, and Prisma fallback data.

## Scope

This project currently includes only the public site:
- Home
- About
- Services
- Service detail pages
- Contact
- Sitemap

Removed from the project scope:
- Blog
- FAQ
- Testimonials
- Appointment page
- Admin dashboard
- Public form endpoints

## Tech

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Prisma

## Local setup

1. Install a supported Node.js version: Node 18.18+ or Node 20+
2. Copy `.env.example` to `.env`
3. Set `DATABASE_URL`
4. Install dependencies:

```bash
npm install
```

`postinstall` automatically runs Prisma Client generation.

## Run locally

Development:

```bash
npm run dev
```

Production check:

```bash
npm run build
npm run start
```

## Database

Useful commands:

```bash
npm run db:push
npm run db:seed
npm run db:studio
```

Even if the database is unavailable, the public pages can still render with fallback content.

## Notes

- Do not ship `node_modules`, `.next`, or `.env` in deployment archives.
- Use a fresh dependency install on the target machine.
- Environment secrets should not be committed or shared in public archives.
