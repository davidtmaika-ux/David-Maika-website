# David Maika — Customer Success Portfolio

## Run it locally
1. Open this folder in VS Code
2. Open a terminal (Terminal -> New Terminal)
3. Run: npm install
4. Run: npm run dev
5. Open http://localhost:3000 in your browser

## Where to edit things
- Case study content: lib/case-studies.ts (edit the text, or add a new
  object to the list and a new case study page appears automatically)
- Homepage: app/page.tsx
- About page: app/about/page.tsx
- Resume page: app/resume/page.tsx
- Contact page: app/contact/page.tsx
- Colors: app/globals.css (the --gold, --burgundy, --navy variables near
  the top of the file)
- Add your portrait: put the image file in /public, then look for the
  comment inside app/page.tsx's hero section for the exact line to change

## Deploy it live, free
See Part 8 of the "David Maika Build Plan" document (Git & Vercel) for the
exact steps -- git init, push to GitHub, import into Vercel.
