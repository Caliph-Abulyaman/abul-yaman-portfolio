# Productization Guide

Treat this as one small, finished product—not seven disconnected pages. The V1 objective is a live, credible portfolio with real contact routes, intentional project placeholders, and no invented proof.

Use **Astro + Tailwind CSS + Cloudflare Pages**. Astro is suitable because it ships static pages with no JavaScript runtime by default unless you add interactive features. Current Astro requires Node.js 22.12 or newer, so update if you are still on Node 20. ([Cloudflare Docs][1])

## 1. Freeze the V1 scope

Build only:

* Home
* About
* Projects
* Services
* Resume
* Contact
* Mobile navigation
* Project placeholders
* Direct email, phone, and WhatsApp links
* A working contact form
* Free deployment

Do not build yet:

* Blog/Writing
* Dark-mode toggle
* CMS
* Login system
* Analytics dashboard
* Public GitHub profile section
* Social-media icons
* Testimonials
* Fake statistics
* Project-detail pages that reveal private information

This prevents the portfolio from becoming an unfinished “big project.”

## 2. Create the product source of truth

Before building UI, create these files:

```text
docs/
  product-brief.md
  content-rules.md

src/data/
  site.ts
  projects.ts
  skills.ts
  services.ts
  education.ts
```

`product-brief.md` contains the approved design plan.

`content-rules.md` should state:

* Never invent client results, user numbers, revenue, team size, dates, or certifications.
* Do not claim UET enrollment; write “Awaiting UET Peshawar Computer Science admission.”
* CS50 and CS75 must be described as “audited online coursework,” not certified courses.
* Huzaifa Portal and the pSEO Engine are private.
* Fantivers may only use its approved public description.
* Screenshots must not expose student names, emails, payment details, phone numbers, or client data.
* No GitHub or social profile buttons until real public profiles exist.

Put all text content in data files rather than scattering it through page components. This means future edits remain simple.

## 3. Set up the development environment

Install or update:

* Node.js 22 LTS
* VS Code
* Astro extension for VS Code
* Git
* GitHub account
* Cloudflare account

Check Node first:

```powershell
node -v
npm -v
```

If Node is below `v22.12.0`, update it before starting. Astro’s current documentation lists Node 22.12.0 as its minimum supported version. ([Astro Docs][2])

Create the project:

```powershell
npm create astro@latest abul-yaman-portfolio
cd abul-yaman-portfolio
npm install
npm run dev
```

During setup:

* Choose the minimal template.
* Enable TypeScript.
* Initialize Git.
* Install dependencies.

Then install Tailwind CSS:

```powershell
npm install tailwindcss @tailwindcss/vite
```

Tailwind’s current Astro setup uses the `@tailwindcss/vite` plugin and a global CSS import. ([Tailwind CSS][3])

## 4. Create the repository and deployment path early

Create a **private** GitHub repository named:

```text
abul-yaman-portfolio
```

It does not matter that you do not use GitHub socially. This repository is for version control and deployment only; it does not need to be visible on the portfolio.

Push the base project:

```powershell
git add .
git commit -m "chore: initialize portfolio project"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/abul-yaman-portfolio.git
git push -u origin main
```

Use Cloudflare Pages with Git integration from the start.

* It supports private GitHub repositories.
* Every push to `main` can deploy automatically.
* Feature branches can receive preview URLs before production.
* Do not start with Direct Upload, because Cloudflare does not allow switching a Direct Upload project to Git integration later. ([Cloudflare Docs][4])

Cloudflare build settings:

```text
Framework preset: Astro
Production branch: main
Build command: npm run build
Build output directory: dist
```

Those are Cloudflare’s documented Astro settings. ([Cloudflare Docs][5])

The free Pages plan is sufficient for this portfolio: it allows 500 builds per month and up to 20,000 site files, far beyond this project’s needs. ([Cloudflare Docs][6])

## 5. Build the design system before pages

Create these first:

```text
src/
  layouts/
    BaseLayout.astro

  components/
    Header.astro
    Footer.astro
    Container.astro
    Button.astro
    SectionHeading.astro
    ProjectCard.astro
    ProjectPreview.astro
    ServiceCard.astro
    SkillCard.astro
    StatusBadge.astro
    ContactCTA.astro

  styles/
    global.css
```

Set the visual system once:

```text
Background: #F5F2EB
Primary text: #101826
Secondary text: #5B6470
Accent bronze: #A77A3B
Accent olive: #66705A
Border: #DED8CD
Dark surface: #121A27
Dark text: #F8F5EE
```

Typography:

```text
Headings: DM Serif Display
Body: Manrope
Labels: Manrope, uppercase, letter-spaced
```

Do not style each page independently. Every page must use the same spacing, button, heading, badge, card, border, and container rules.

## 6. Create the data model

Create the site data before creating page layouts.

`site.ts` should contain:

```text
Name: Abul Yaman
Location: Khyber Pakhtunkhwa, Pakistan
Email: abulyaman101@gmail.com
Phone 1: +92 371 0967684
Phone 2: +92 315 4560970
Headline: Laravel Developer Building SaaS, Dashboards, and Scalable Web Systems
```

`projects.ts` should contain three projects.

**Huzaifa Portal**

* Status: Private client project
* Stack: Laravel, PHP, Livewire, Tailwind CSS, MySQL, queues, email workflows
* Description: Student and tuition management platform
* Image state: Placeholder until screenshots arrive
* Public repository: No
* Live URL: Hidden until confirmed

**Programmatic SEO Engine**

* Status: Private, under testing
* Stack: Laravel, PHP, databases, SEO architecture
* Description: Structured local-service page generation for multi-location businesses
* Image state: Placeholder

**Fantivers**

* Status: In design and development
* Description: Collaborative storytelling platform built around shared fictional worlds and participant-driven creation
* Do not include governance, economic systems, or private mechanics
* Image state: Conceptual placeholder

## 7. Build intentional project placeholders

Do not use gray blocks saying “Image coming soon.”

Create one reusable `ProjectPreview.astro` component with variants:

```text
variant="dashboard"
variant="pseo"
variant="fantivers"
```

The dashboard variant should resemble:

* Browser frame
* Sidebar
* Dashboard cards
* Table rows
* Progress blocks
* “Screenshots coming soon” label

The pSEO variant should resemble:

* City labels
* Service-page blocks
* Data rows
* Internal linking map
* “Private system — testing in progress” label

The Fantivers variant should resemble:

* Story nodes
* World cards
* Character labels
* Layered fictional-world interface
* “In design and development” label

These are not fake screenshots. They are designed visual representations of private projects.

## 8. Build pages in this order

### A. Base layout and navigation

First complete:

* Header
* Mobile menu
* Footer
* Page title/meta support
* Shared button styles
* Shared responsive spacing

The header should have:

```text
Abul Yaman
Home
About
Projects
Services
Resume
Contact
```

No public GitHub or social icons.

### B. Home page

Build sections in this sequence:

1. Hero
2. Expertise strip
3. Selected projects
4. Services summary
5. Engineering approach
6. Contact call-to-action

The hero must answer immediately:

* Who is this?
* What does he build?
* Why should someone view his work?
* How can they contact him?

Primary heading:

> Building web systems that are designed to grow.

### C. Projects page

Build it as one strong case-study page, not separate detail pages.

Order:

1. Huzaifa Portal
2. pSEO Engine
3. Fantivers

Every project section needs:

* Status badge
* Placeholder visual
* Short description
* Stack tags
* Feature highlights
* Privacy note
* No fake project link

### D. About page

Include:

* Personal engineering approach
* AI-assisted workflow
* Skills grid
* Education timeline
* Languages
* Principles card

Keep the focus on systems, refinement, Laravel, databases, SEO, scalability, and deployment.

### E. Services page

Include six services:

1. Laravel web applications
2. Admin dashboards and management systems
3. SaaS MVP development
4. Programmatic SEO systems
5. Hosting, domain, and deployment setup
6. Product blueprints and technical planning

### F. Resume page

Use browser-readable sections:

* Summary
* Skills
* Projects
* Education
* Coursework
* Languages
* Contact

Do not show a fake résumé download button. Use “PDF résumé coming soon” until you create one.

### G. Contact page

Include:

* Email
* Both phone numbers
* WhatsApp buttons
* Contact form
* Clear response expectation, such as “Include your project goal, required features, and preferred timeline.”

## 9. Keep interactivity minimal

Use normal Astro and small vanilla JavaScript only for:

* Mobile navigation
* Optional smooth scrolling
* Contact form state
* Optional subtle scroll reveal

Avoid React, Vue, animation libraries, sliders, carousels, or complicated client-side state.

The site should feel polished because of typography, spacing, clarity, and visual hierarchy—not because of effects.

## 10. Implement the contact form correctly

For V1, use Formspree because it works with a static site and handles email delivery without you building a backend. Its current free tier starts at 50 submissions per month, which is enough for an early portfolio. ([help.formspree.io][7])

Form fields:

```text
Name
Email
Project type
Timeline
Budget range (optional)
Message
Website (hidden honeypot field)
```

Rules:

* Email and WhatsApp must remain visible above the form.
* The form cannot be the only contact option.
* Display a success message after submission.
* Display a real failure message with direct-email fallback.
* Add spam protection before launch.

Later, you can move the form to Cloudflare Pages Functions. Pages Functions can process form submissions and other server-side behavior, but this is unnecessary for the first version. ([Cloudflare Docs][8])

## 11. Use a disciplined AI-agent workflow

Do not tell Cline, Aider, or Claude to “build the entire site” in one request.

Give one milestone at a time:

1. Foundation and design tokens
2. Reusable components
3. Homepage
4. Projects page
5. About and services pages
6. Resume and contact pages
7. Mobile/accessibility fixes
8. Deployment preparation

For every milestone, require the agent to:

* Read the existing project before changing files.
* Change only files related to the assigned milestone.
* Preserve the approved content and privacy rules.
* Avoid installing unnecessary dependencies.
* Run `npm run build`.
* Report changed files and any unresolved issue.
* Never invent images, metrics, project URLs, client claims, or social links.

## 12. Apply quality gates before launch

Before deployment, test:

```text
npm run build
```

Then check:

* Every navigation item works.
* Every page works on mobile width.
* No horizontal scrolling exists.
* Phone numbers open calling apps.
* WhatsApp links open correctly.
* Email link opens correctly.
* Contact form sends one test message.
* Buttons have visible focus states.
* Text contrast is readable.
* All placeholder visuals look deliberate.
* No client data appears in images.
* No private repository link appears.
* No false claim appears.
* No “Lorem ipsum” remains.
* No empty Writing page exists.

## 13. Launch sequence

1. Commit the finished V1.
2. Push to `main`.
3. Connect the private repository to Cloudflare Pages.
4. Select Astro preset.
5. Set build command to `npm run build`.
6. Set output directory to `dist`.
7. Deploy.
8. Test the generated `pages.dev` address on your phone and laptop.
9. Test the contact form from a different email address.
10. Keep the site live with placeholders until screenshots are ready.

Cloudflare Pages generates a project URL after deployment, and private repositories are supported for Git-based Pages projects. ([Cloudflare Docs][4])

## 14. Post-launch upgrades

After V1 is live:

1. Add sanitized Huzaifa Portal screenshots.
2. Add pSEO Engine screenshots after testing.
3. Replace Fantivers placeholder only with publicly safe visuals.
4. Create a proper PDF résumé.
5. Buy a domain when affordable.
6. Add a Writing page only after publishing at least one strong public piece.
7. Add selected GitHub repositories only when you have work worth showing publicly.

Start with Steps 1–4. Do not begin page implementation until the Astro project, private repository, Cloudflare deployment path, and source-of-truth data files are in place.

[1]: https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/ "Astro · Cloudflare Pages docs"
[2]: https://docs.astro.build/en/tutorial/1-setup/1/ "Build a blog tutorial: Prepare your dev environment | Docs"
[3]: https://tailwindcss.com/docs/installation/framework-guides/astro "Install Tailwind CSS with Astro - Tailwind CSS"
[4]: https://developers.cloudflare.com/pages/get-started/git-integration/?utm_source=chatgpt.com "Git integration guide · Cloudflare Pages docs"
[5]: https://developers.cloudflare.com/pages/configuration/build-configuration/?utm_source=chatgpt.com "Build configuration · Cloudflare Pages docs"
[6]: https://developers.cloudflare.com/pages/platform/limits/?utm_source=chatgpt.com "Limits · Cloudflare Pages docs"
[7]: https://help.formspree.io/articles/account-management/account-limits?utm_source=chatgpt.com "Account limits"
[8]: https://developers.cloudflare.com/pages/functions/?utm_source=chatgpt.com "Functions · Cloudflare Pages docs"


You are now the implementation agent for Abul Yaman’s static portfolio website.

I have already completed setup up to Step 5:
- Astro project exists.
- Tailwind setup is expected to exist or should be verified.
- Basic project installation is done.
- The design direction is approved.
- The site must be static, professional, responsive, and deployable on Cloudflare Pages.

Your job is to implement the rest of the portfolio carefully.

Do not redesign the concept. Follow this plan exactly.

PROJECT GOAL
Build a multi-page static portfolio and résumé website for Abul Yaman.

The portfolio should present him as:
“Laravel Developer Building SaaS, Dashboards, and Scalable Web Systems.”

He is based in Khyber Pakhtunkhwa, Pakistan. He is awaiting UET Peshawar Computer Science admission. Do not call him a UET student yet.

The site must feel serious, premium, modern, clean, and slightly human. It must not look like a generic student template.

CORE RULES
1. Do not invent fake achievements, numbers, testimonials, public links, certifications, clients, revenue, user counts, or GitHub repositories.
2. Do not add GitHub, LinkedIn, Instagram, Facebook, or social icons unless real URLs are provided.
3. Do not create a Blog/Writing page in V1.
4. Do not expose private project details.
5. Do not claim CS50 or CS75 certificates. Say “audited online coursework.”
6. Do not say he is enrolled at UET. Say “Awaiting UET Peshawar Computer Science admission.”
7. Huzaifa Portal and pSEO Engine are private projects.
8. Fantivers may be described publicly only as a collaborative storytelling platform built around shared fictional worlds and participant-driven creation.
9. The source must remain easy to edit manually.
10. Run a build after every major milestone.

TECH STACK
Use:
- Astro
- Tailwind CSS
- TypeScript where useful
- Static data files
- No backend
- No database
- No CMS
- No React/Vue unless already installed and strictly necessary

DESIGN SYSTEM
Use this visual system:

Colors:
- Background: #F5F2EB
- Primary text: #101826
- Secondary text: #5B6470
- Accent bronze: #A77A3B
- Accent olive: #66705A
- Border: #DED8CD
- Dark surface: #121A27
- Dark text: #F8F5EE

Typography:
- Headings: DM Serif Display
- Body: Manrope
- Labels: Manrope uppercase with letter spacing

If using Google Fonts, import:
- DM Serif Display
- Manrope

Visual tone:
- Premium
- Editorial
- Modern
- Calm
- Structured
- Warm
- Not flashy
- No excessive gradients
- No particle effects
- No fake terminal gimmicks

SITE PAGES
Create these pages only:

1. /
2. /about
3. /projects
4. /services
5. /resume
6. /contact

Do not create /writing yet.

FILE STRUCTURE
Create or adjust the structure to approximately this:

src/
  components/
    Header.astro
    Footer.astro
    Container.astro
    Button.astro
    SectionHeading.astro
    ProjectCard.astro
    ProjectPreview.astro
    ServiceCard.astro
    SkillCard.astro
    StatusBadge.astro
    ContactCTA.astro

  data/
    site.ts
    projects.ts
    skills.ts
    services.ts
    education.ts

  layouts/
    BaseLayout.astro

  pages/
    index.astro
    about.astro
    projects.astro
    services.astro
    resume.astro
    contact.astro

  styles/
    global.css

public/
  favicon.svg
  robots.txt

CONTENT DATA

site.ts:
- name: Abul Yaman
- headline: Laravel Developer Building SaaS, Dashboards, and Scalable Web Systems
- location: Khyber Pakhtunkhwa, Pakistan
- email: abulyaman101@gmail.com
- phonePrimary: +92 371 0967684
- phoneSecondary: +92 315 4560970
- whatsappPrimary: use wa.me format
- whatsappSecondary: use wa.me format
- shortBio: Computer Science applicant from Khyber Pakhtunkhwa, Pakistan, focused on modern Laravel applications, scalable product systems, AI-assisted development workflows, and refined web experiences.

projects.ts:
Project 1:
- title: Huzaifa Portal
- status: Private client project
- type: Student management platform
- stack: Laravel, PHP, Livewire, Tailwind CSS, MySQL, queues, email workflows
- description: A Laravel-based student and tuition management platform designed to handle students, courses, classes, homework, payments, progress tracking, administration, and gamified student engagement.
- features:
  - Student dashboard
  - Admin dashboard
  - Course and class management
  - Homework workflows
  - Payment tracking
  - Notifications
  - Progress visibility
  - Gamification
  - Queue-driven emails
  - Role-based access
  - Secure account verification
- privacyNote: Private client project. Screens and technical details available on request.
- previewVariant: dashboard

Project 2:
- title: Programmatic SEO Engine
- status: Private system under testing
- type: Search-driven content system
- stack: Laravel, PHP, database architecture, SEO systems
- description: A programmatic SEO engine designed to create structured local-service pages for businesses operating across multiple cities and service areas.
- features:
  - Location page generation
  - Service page generation
  - Structured content templates
  - Internal-linking strategy
  - Scalable page architecture
  - SEO quality controls
  - Data-driven content structure
- privacyNote: Private system. Currently under testing.
- previewVariant: pseo

Project 3:
- title: Fantivers
- status: In design and development
- type: Collaborative storytelling platform
- stack: Product design, system planning, Laravel-oriented architecture
- description: Fantivers is an emerging collaborative storytelling platform built around shared fictional worlds, evolving stories, and community-driven creation.
- features:
  - Shared fictional worlds
  - Participant-driven creation
  - Story and world exploration
  - Public visitor-facing platform concept
- privacyNote: Internal product mechanics are private during design.
- previewVariant: fantivers

skills.ts:
Include:
- Laravel — Strong
- PHP — Strong
- Livewire — Strong
- Tailwind CSS — Strong
- MySQL — Strong
- PostgreSQL — Intermediate
- Git — Intermediate
- Deployment and hosting — Strong
- SEO — Strong
- pSEO — Strong
- AI coding agents — Strong
- Product blueprints — Strong
- English technical writing — Strong

services.ts:
Include:
1. Laravel Web Applications
2. Admin Dashboards and Management Systems
3. SaaS MVP Development
4. Programmatic SEO Systems
5. Hosting, Domain, and Deployment Setup
6. Product Blueprints and Technical Planning

education.ts:
- 2023 — Matric, Iqra School and College, Garhi Kapura
- 2025 — FSc Computer Science, Capital Degree College, Peshawar
- Present — Awaiting UET Peshawar Computer Science admission decision
- Online coursework — Harvard CS50 and CS75, audited online

Languages:
- Pashto — Native
- English — Professional working proficiency
- Urdu — Professional working proficiency

COMPONENT REQUIREMENTS

BaseLayout.astro:
- Accept title and description props.
- Include SEO meta tags.
- Include Open Graph basics.
- Use Header and Footer.
- Use global styles.
- Set correct lang="en".

Header.astro:
- Desktop navigation:
  - Home
  - About
  - Projects
  - Services
  - Resume
  - Contact
- Contact link slightly emphasized.
- Mobile menu must work.
- No social links.

Footer.astro:
Text:
“© 2026 Abul Yaman. Built with Laravel thinking, even when static.”
Include email, WhatsApp, and Back to top.

Button.astro:
Variants:
- primary
- secondary
- ghost

SectionHeading.astro:
Props:
- eyebrow
- title
- description

ProjectPreview.astro:
Create designed placeholders, not empty gray boxes.

Variants:
1. dashboard
   - browser frame
   - sidebar
   - dashboard cards
   - fake table rows
   - progress blocks
   - label: Screenshots coming soon

2. pseo
   - city/service page blocks
   - rows
   - linking map feel
   - label: Private system — testing in progress

3. fantivers
   - dark layered story-map interface
   - world/story nodes
   - fictional tags
   - label: In design and development

These must look intentional and premium.

PAGE REQUIREMENTS

HOME PAGE
Sections:
1. Hero
   Heading:
   “Building web systems that are designed to grow.”

   Text:
   “Laravel developer focused on SaaS products, management platforms, dashboards, pSEO systems, and practical tools built with long-term structure in mind.”

   Buttons:
   - View Projects -> /projects
   - Contact Me -> /contact

   Right side:
   Use a custom visual composition, not a photo.

2. Credibility strip:
   - Laravel applications
   - Management systems
   - pSEO infrastructure
   - Deployment & hosting

3. Selected Work:
   Show three ProjectCard components.

4. What I Build:
   Three cards:
   - SaaS and internal tools
   - Dashboards and management systems
   - Search-driven web products

5. Engineering approach:
   Heading:
   “Built with structure, not shortcuts.”
   Points:
   - Clean Laravel architecture
   - Database-first thinking
   - Responsive interface systems
   - Performance and scalability awareness
   - Deployment and hosting knowledge
   - AI-assisted workflows used carefully, not blindly

6. Dark contact CTA:
   Heading:
   “Have a system worth building?”
   Buttons:
   - Email Me
   - WhatsApp

ABOUT PAGE
Sections:
1. Intro:
   Heading:
   “A developer interested in systems, not just pages.”

2. Background:
   Mention:
   - based in KP, Pakistan
   - Computer Science applicant
   - Laravel focus
   - AI coding agents used to accelerate work
   - commitment to refinement and quality

3. Principles card:
   - Build for the actual workflow
   - Treat the database as part of the product
   - Design for future complexity
   - Refine until weak points are addressed
   - Use AI to improve speed, not replace judgment

4. Technical focus:
   Show skills grid.

5. Education:
   Timeline.

6. Languages:
   Cards for Pashto, English, Urdu.

PROJECTS PAGE
Heading:
“Projects built around real systems and long-term structure.”

Supporting text:
“A selection of private client work, internal tools, and products currently in development.”

Show the three projects in large sections, not tiny cards. Each project must include:
- Status badge
- Preview visual
- Description
- Stack tags
- Feature list
- Privacy note

SERVICES PAGE
Heading:
“Services for products that need more than a landing page.”

Show six service cards from services.ts.

CTA:
“For project inquiries, include your goal, target users, required features, and preferred timeline.”

RESUME PAGE
Browser-readable résumé.
Sections:
- Summary
- Technical Skills
- Projects
- Education
- Online Coursework
- Languages
- Contact

Do not create a fake PDF download.
Instead show:
“PDF résumé coming soon.”

CONTACT PAGE
Heading:
“Let’s discuss the system you need to build.”

Show:
- Email: abulyaman101@gmail.com
- Phone/WhatsApp:
  - +92 371 0967684
  - +92 315 4560970

Create a contact form visually, but do not connect a backend unless Formspree endpoint is provided.

Fields:
- Name
- Email
- Project type
- Timeline
- Budget range optional
- Message

Add note:
“Direct email and WhatsApp are available if the form is not configured yet.”

RESPONSIVE REQUIREMENTS
- Mobile-first
- No horizontal overflow
- Header usable on mobile
- Project cards stack on mobile
- Buttons large enough to tap
- Text readable without zoom
- Images/placeholders responsive
- Test at 375px, 768px, 1024px, and desktop

ACCESSIBILITY REQUIREMENTS
- Semantic HTML
- Proper heading order
- Accessible labels on forms
- Visible focus states
- Sufficient contrast
- Keyboard navigation
- Reduced-motion support
- No important information conveyed only by color

SEO REQUIREMENTS
Each page needs:
- Unique title
- Unique meta description
- Proper heading hierarchy
- Clean URLs
- robots.txt
- basic Open Graph tags

QUALITY CHECKS
After implementation:
1. Run:
   npm run build

2. Fix all build errors.

3. Check:
   - No Lorem ipsum
   - No fake links
   - No fake stats
   - No fake certificates
   - No social placeholders
   - No writing page
   - No private project details
   - No UET enrollment claim
   - Contact links work
   - WhatsApp links use correct wa.me format
   - Mobile menu works
   - No horizontal overflow
   - Placeholder visuals look intentional

DELIVERY FORMAT
When finished, report:
1. Files created
2. Files modified
3. Any assumptions made
4. Any remaining manual steps
5. Build result

Begin by inspecting the existing project structure. Then implement the data files, layout, global styles, components, pages, and quality checks in that order.