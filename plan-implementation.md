This is the complete static Astro portfolio implementation, based on the approved design and content rules. 

Create the folders exactly as shown, then replace or add each file below. Each code block is a separate file.

## 1. `astro.config.mjs`

```js
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "static",
  trailingSlash: "never",
  vite: {
    plugins: [tailwindcss()],
  },
});
```

## 2. `src/data/site.ts`

```ts
export const site = {
  name: "Abul Yaman",
  shortName: "AY",
  headline: "Laravel Developer Building SaaS, Dashboards, and Scalable Web Systems",
  location: "Khyber Pakhtunkhwa, Pakistan",
  email: "abulyaman101@gmail.com",
  emailHref: "mailto:abulyaman101@gmail.com",
  phonePrimary: "+92 371 0967684",
  phoneSecondary: "+92 315 4560970",
  phonePrimaryHref: "tel:+923710967684",
  phoneSecondaryHref: "tel:+923154560970",
  whatsappPrimary:
    "https://wa.me/923710967684?text=Hello%20Abul%20Yaman%2C%20I%20would%20like%20to%20discuss%20a%20project.",
  whatsappSecondary:
    "https://wa.me/923154560970?text=Hello%20Abul%20Yaman%2C%20I%20would%20like%20to%20discuss%20a%20project.",
  shortBio:
    "Computer Science applicant from Khyber Pakhtunkhwa, Pakistan, focused on modern Laravel applications, scalable product systems, AI-assisted development workflows, and refined web experiences.",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact", emphasized: true },
];
```

## 3. `src/data/projects.ts`

```ts
export type ProjectPreviewVariant = "dashboard" | "pseo" | "fantivers";

export interface PortfolioProject {
  slug: string;
  title: string;
  status: string;
  type: string;
  stack: string[];
  description: string;
  features: string[];
  privacyNote: string;
  previewVariant: ProjectPreviewVariant;
  accent: "bronze" | "olive" | "navy";
}

export const projects: PortfolioProject[] = [
  {
    slug: "huzaifa-portal",
    title: "Huzaifa Portal",
    status: "Private client project",
    type: "Student management platform",
    stack: [
      "Laravel",
      "PHP",
      "Livewire",
      "Tailwind CSS",
      "MySQL",
      "Queues",
      "Email Workflows",
    ],
    description:
      "A Laravel-based student and tuition management platform designed to handle students, courses, classes, homework, payments, progress tracking, administration, and gamified student engagement.",
    features: [
      "Student dashboard",
      "Admin dashboard",
      "Course and class management",
      "Homework workflows",
      "Payment tracking",
      "Notifications",
      "Progress visibility",
      "Gamification",
      "Queue-driven emails",
      "Role-based access",
      "Secure account verification",
    ],
    privacyNote:
      "Private client project. Screens and technical details are available on request.",
    previewVariant: "dashboard",
    accent: "bronze",
  },
  {
    slug: "pseo-engine",
    title: "Programmatic SEO Engine",
    status: "Private system under testing",
    type: "Search-driven content system",
    stack: [
      "Laravel",
      "PHP",
      "Database Architecture",
      "SEO Systems",
      "Content Templates",
    ],
    description:
      "A programmatic SEO engine designed to create structured local-service pages for businesses operating across multiple cities and service areas.",
    features: [
      "Location page generation",
      "Service page generation",
      "Structured content templates",
      "Internal-linking strategy",
      "Scalable page architecture",
      "SEO quality controls",
      "Data-driven content structure",
    ],
    privacyNote:
      "Private system currently under testing. Public examples are not available yet.",
    previewVariant: "pseo",
    accent: "olive",
  },
  {
    slug: "fantivers",
    title: "Fantivers",
    status: "In design and development",
    type: "Collaborative storytelling platform",
    stack: [
      "Product Design",
      "System Planning",
      "World Building",
      "Laravel-Oriented Architecture",
    ],
    description:
      "Fantivers is an emerging collaborative storytelling platform built around shared fictional worlds, evolving stories, and participant-driven creation.",
    features: [
      "Shared fictional worlds",
      "Participant-driven creation",
      "Story and world exploration",
      "Public visitor-facing platform concept",
    ],
    privacyNote:
      "Internal product mechanics, planning, and architecture remain private during design.",
    previewVariant: "fantivers",
    accent: "navy",
  },
];
```

## 4. `src/data/skills.ts`

```ts
export type SkillLevel = "Strong" | "Intermediate";

export interface Skill {
  name: string;
  level: SkillLevel;
  category: "Development" | "Systems" | "Product";
  description: string;
}

export const skills: Skill[] = [
  {
    name: "Laravel",
    level: "Strong",
    category: "Development",
    description: "Building structured web applications, dashboards, and workflow-driven systems.",
  },
  {
    name: "PHP",
    level: "Strong",
    category: "Development",
    description: "Server-side application logic, clean architecture, and practical backend development.",
  },
  {
    name: "Livewire",
    level: "Strong",
    category: "Development",
    description: "Interactive Laravel interfaces without unnecessary frontend complexity.",
  },
  {
    name: "Tailwind CSS",
    level: "Strong",
    category: "Development",
    description: "Responsive interface systems with consistent spacing, hierarchy, and polish.",
  },
  {
    name: "MySQL",
    level: "Strong",
    category: "Systems",
    description: "Relational data modeling for business workflows and product systems.",
  },
  {
    name: "PostgreSQL",
    level: "Intermediate",
    category: "Systems",
    description: "Structured relational data work and database-aware application design.",
  },
  {
    name: "Git",
    level: "Intermediate",
    category: "Systems",
    description: "Version control, repository workflows, and disciplined project iteration.",
  },
  {
    name: "Deployment & Hosting",
    level: "Strong",
    category: "Systems",
    description: "Domains, HTTPS, hosting, production configuration, and deployment workflows.",
  },
  {
    name: "SEO",
    level: "Strong",
    category: "Product",
    description: "Search-focused website structure, technical foundations, and content architecture.",
  },
  {
    name: "Programmatic SEO",
    level: "Strong",
    category: "Product",
    description: "Scalable local-service content systems built around structured data and templates.",
  },
  {
    name: "AI Coding Agents",
    level: "Strong",
    category: "Product",
    description: "Using tools such as Cline and Aider to improve speed without abandoning judgment.",
  },
  {
    name: "Product Blueprints",
    level: "Strong",
    category: "Product",
    description: "Feature maps, technical planning, product rules, workflows, and system structure.",
  },
  {
    name: "English Technical Writing",
    level: "Strong",
    category: "Product",
    description: "Writing product documentation, reviews, blueprints, and technical explanations.",
  },
];
```

## 5. `src/data/services.ts`

```ts
export interface Service {
  number: string;
  title: string;
  description: string;
  outcomes: string[];
}

export const services: Service[] = [
  {
    number: "01",
    title: "Laravel Web Applications",
    description:
      "Custom Laravel applications for businesses, internal operations, customer workflows, and practical digital products.",
    outcomes: [
      "Structured backend logic",
      "Secure user workflows",
      "Responsive product interfaces",
    ],
  },
  {
    number: "02",
    title: "Admin Dashboards & Management Systems",
    description:
      "Systems for managing students, clients, classes, payments, tasks, records, products, and operational workflows.",
    outcomes: [
      "Role-based dashboards",
      "Data management workflows",
      "Clear operational visibility",
    ],
  },
  {
    number: "03",
    title: "SaaS MVP Development",
    description:
      "Early-stage product development for founders who need more than a landing page and want a usable first version.",
    outcomes: [
      "Feature planning",
      "Database-first structure",
      "Scalable product foundations",
    ],
  },
  {
    number: "04",
    title: "Programmatic SEO Systems",
    description:
      "Structured content infrastructure for local businesses, multi-location services, and search-driven websites.",
    outcomes: [
      "Location and service pages",
      "Template-based architecture",
      "Internal-linking systems",
    ],
  },
  {
    number: "05",
    title: "Hosting, Domains & Deployment",
    description:
      "Deployment support for static sites and Laravel applications, including hosting setup, domains, HTTPS, and production readiness.",
    outcomes: [
      "Domain configuration",
      "HTTPS and DNS setup",
      "Deployment workflows",
    ],
  },
  {
    number: "06",
    title: "Product Blueprints & Technical Planning",
    description:
      "Clear product planning before development: workflows, features, entities, rules, edge cases, and implementation direction.",
    outcomes: [
      "Feature architecture",
      "User-flow planning",
      "Technical decision support",
    ],
  },
];
```

## 6. `src/data/education.ts`

```ts
export const education = [
  {
    year: "2023",
    title: "Matric",
    institution: "Iqra School and College, Garhi Kapura",
    note: "Completed secondary education.",
  },
  {
    year: "2025",
    title: "FSc Computer Science",
    institution: "Capital Degree College, Peshawar",
    note: "Completed higher secondary education with Computer Science.",
  },
  {
    year: "Present",
    title: "Computer Science Admission",
    institution: "Awaiting UET Peshawar admission decision",
    note: "Admission status is pending; not presented as current enrollment.",
  },
  {
    year: "Online",
    title: "Harvard CS50 & CS75",
    institution: "Audited online coursework",
    note: "Studied online without claiming certification.",
  },
];

export const languages = [
  {
    name: "Pashto",
    level: "Native",
    description: "First language.",
  },
  {
    name: "English",
    level: "Professional working proficiency",
    description: "Able to speak, understand, read, and write confidently.",
  },
  {
    name: "Urdu",
    level: "Professional working proficiency",
    description: "Able to speak, understand, read, and write confidently.",
  },
];
```

## 7. `src/components/Container.astro`

```astro
---
interface Props {
  class?: string;
}

const { class: className = "" } = Astro.props;
---

<div class:list={["container", className]}>
  <slot />
</div>
```

## 8. `src/components/Button.astro`

```astro
---
interface Props {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  class?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

const {
  href,
  variant = "primary",
  class: className = "",
  target,
  rel,
  ariaLabel,
} = Astro.props;
---

<a
  href={href}
  target={target}
  rel={rel}
  aria-label={ariaLabel}
  class:list={["button", `button--${variant}`, className]}
>
  <slot />
</a>
```

## 9. `src/components/SectionHeading.astro`

```astro
---
interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const {
  eyebrow,
  title,
  description,
  align = "left",
} = Astro.props;
---

<header class:list={["section-heading", `section-heading--${align}`]}>
  {eyebrow && <p class="eyebrow">{eyebrow}</p>}
  <h2>{title}</h2>
  {description && <p class="section-heading__description">{description}</p>}
</header>
```

## 10. `src/components/StatusBadge.astro`

```astro
---
interface Props {
  label: string;
  tone?: "bronze" | "olive" | "navy";
}

const { label, tone = "bronze" } = Astro.props;
---

<span class:list={["status-badge", `status-badge--${tone}`]}>
  <span class="status-badge__dot"></span>
  {label}
</span>
```

## 11. `src/components/ProjectPreview.astro`

```astro
---
import type { ProjectPreviewVariant } from "../data/projects";

interface Props {
  variant: ProjectPreviewVariant;
  label?: string;
}

const { variant, label } = Astro.props;
---

<div class:list={["project-preview", `project-preview--${variant}`]}>
  {variant === "dashboard" && (
    <div class="preview-browser">
      <div class="preview-browser__topbar">
        <span></span>
        <span></span>
        <span></span>
        <div class="preview-browser__address"></div>
      </div>

      <div class="preview-dashboard">
        <aside class="preview-dashboard__sidebar">
          <div class="preview-dashboard__brand"></div>
          <div class="preview-dashboard__nav">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </aside>

        <div class="preview-dashboard__main">
          <div class="preview-dashboard__headline">
            <div></div>
            <span></span>
          </div>

          <div class="preview-dashboard__stats">
            <div>
              <span></span>
              <strong></strong>
            </div>
            <div>
              <span></span>
              <strong></strong>
            </div>
            <div>
              <span></span>
              <strong></strong>
            </div>
          </div>

          <div class="preview-dashboard__content">
            <div class="preview-dashboard__table">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div class="preview-dashboard__chart">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}

  {variant === "pseo" && (
    <div class="preview-pseo">
      <div class="preview-pseo__toolbar">
        <span class="preview-pseo__brand"></span>
        <span class="preview-pseo__toggle"></span>
        <span class="preview-pseo__toggle"></span>
      </div>

      <div class="preview-pseo__body">
        <aside class="preview-pseo__filters">
          <span>LOCATION</span>
          <div></div>
          <div></div>
          <div></div>
          <span>SERVICES</span>
          <div></div>
          <div></div>
        </aside>

        <div class="preview-pseo__canvas">
          <div class="preview-pseo__page preview-pseo__page--main">
            <span class="preview-pseo__city">ROOF REPAIR · PESHAWAR</span>
            <strong></strong>
            <i></i>
            <i></i>
            <i></i>
          </div>

          <div class="preview-pseo__nodes">
            <div>HVAC<br />MARDAN</div>
            <div>PLUMBING<br />SWABI</div>
            <div>ROOFING<br />CHARSADDA</div>
          </div>

          <div class="preview-pseo__links">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )}

  {variant === "fantivers" && (
    <div class="preview-fantivers">
      <div class="preview-fantivers__glow preview-fantivers__glow--one"></div>
      <div class="preview-fantivers__glow preview-fantivers__glow--two"></div>

      <div class="preview-fantivers__topbar">
        <span>FANTIVERS</span>
        <i></i>
        <i></i>
      </div>

      <div class="preview-fantivers__world">
        <div class="preview-fantivers__node preview-fantivers__node--core">
          <span>THE<br />WORLD</span>
        </div>

        <div class="preview-fantivers__node preview-fantivers__node--one">
          <span>STORY<br />ARC</span>
        </div>

        <div class="preview-fantivers__node preview-fantivers__node--two">
          <span>CHARACTER<br />THREAD</span>
        </div>

        <div class="preview-fantivers__node preview-fantivers__node--three">
          <span>LORE<br />ENTRY</span>
        </div>

        <div class="preview-fantivers__line preview-fantivers__line--one"></div>
        <div class="preview-fantivers__line preview-fantivers__line--two"></div>
        <div class="preview-fantivers__line preview-fantivers__line--three"></div>
      </div>

      <div class="preview-fantivers__tags">
        <span>WORLD</span>
        <span>STORY</span>
        <span>CREATION</span>
      </div>
    </div>
  )}

  {label && <span class="project-preview__label">{label}</span>}
</div>

<style>
  .project-preview {
    position: relative;
    min-height: 320px;
    overflow: hidden;
    border: 1px solid var(--border);
    border-radius: 1.5rem;
    background: var(--surface-soft);
  }

  .project-preview__label {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    z-index: 2;
    padding: 0.48rem 0.7rem;
    border: 1px solid rgb(255 255 255 / 14%);
    border-radius: 999px;
    background: rgb(16 24 38 / 82%);
    color: #fff;
    font-size: 0.65rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    backdrop-filter: blur(10px);
  }

  /* Dashboard preview */

  .project-preview--dashboard {
    padding: 1.25rem;
    background:
      radial-gradient(circle at 12% 10%, rgb(167 122 59 / 16%), transparent 28%),
      linear-gradient(150deg, #e9e2d7 0%, #f9f7f2 100%);
  }

  .preview-browser {
    height: 100%;
    overflow: hidden;
    border: 1px solid rgb(16 24 38 / 14%);
    border-radius: 1rem;
    background: #f8f8f7;
    box-shadow: 0 24px 50px rgb(16 24 38 / 12%);
  }

  .preview-browser__topbar {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    height: 2.25rem;
    padding: 0 0.75rem;
    border-bottom: 1px solid rgb(16 24 38 / 8%);
    background: #f0efed;
  }

  .preview-browser__topbar > span {
    width: 0.46rem;
    height: 0.46rem;
    border-radius: 999px;
    background: #c9c1b4;
  }

  .preview-browser__address {
    width: 44%;
    height: 0.5rem;
    margin-left: 0.55rem;
    border-radius: 99px;
    background: #ddd9d1;
  }

  .preview-dashboard {
    display: grid;
    grid-template-columns: 24% 1fr;
    min-height: 262px;
  }

  .preview-dashboard__sidebar {
    padding: 1rem 0.72rem;
    background: #152031;
  }

  .preview-dashboard__brand {
    width: 52%;
    height: 0.5rem;
    margin-bottom: 1.7rem;
    border-radius: 99px;
    background: #d4a768;
  }

  .preview-dashboard__nav {
    display: grid;
    gap: 0.74rem;
  }

  .preview-dashboard__nav span {
    display: block;
    width: 82%;
    height: 0.36rem;
    border-radius: 99px;
    background: rgb(248 245 238 / 22%);
  }

  .preview-dashboard__nav span:nth-child(2) {
    width: 64%;
    background: rgb(248 245 238 / 50%);
  }

  .preview-dashboard__main {
    padding: 1rem;
  }

  .preview-dashboard__headline {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .preview-dashboard__headline div {
    width: 32%;
    height: 0.58rem;
    border-radius: 99px;
    background: #1e2a3b;
  }

  .preview-dashboard__headline span {
    width: 16%;
    height: 0.4rem;
    border-radius: 99px;
    background: #ded8cd;
  }

  .preview-dashboard__stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.6rem;
    margin-top: 1rem;
  }

  .preview-dashboard__stats div {
    min-height: 3.5rem;
    padding: 0.7rem;
    border: 1px solid #e5e1d9;
    border-radius: 0.55rem;
    background: #fff;
  }

  .preview-dashboard__stats span,
  .preview-dashboard__stats strong {
    display: block;
    border-radius: 99px;
  }

  .preview-dashboard__stats span {
    width: 52%;
    height: 0.28rem;
    background: #d8d4cc;
  }

  .preview-dashboard__stats strong {
    width: 70%;
    height: 0.55rem;
    margin-top: 0.58rem;
    background: #c89a57;
  }

  .preview-dashboard__content {
    display: grid;
    grid-template-columns: 1.25fr 0.75fr;
    gap: 0.7rem;
    margin-top: 0.7rem;
  }

  .preview-dashboard__table,
  .preview-dashboard__chart {
    min-height: 108px;
    border: 1px solid #e5e1d9;
    border-radius: 0.55rem;
    background: #fff;
  }

  .preview-dashboard__table {
    display: grid;
    align-content: center;
    gap: 0.55rem;
    padding: 0.8rem;
  }

  .preview-dashboard__table span {
    display: block;
    height: 0.35rem;
    border-radius: 99px;
    background: #e5e1d9;
  }

  .preview-dashboard__table span:nth-child(2),
  .preview-dashboard__table span:nth-child(4) {
    width: 74%;
  }

  .preview-dashboard__chart {
    display: flex;
    align-items: end;
    gap: 0.38rem;
    padding: 0.7rem;
  }

  .preview-dashboard__chart span {
    flex: 1;
    border-radius: 0.25rem 0.25rem 0 0;
    background: #839066;
  }

  .preview-dashboard__chart span:nth-child(1) {
    height: 38%;
  }

  .preview-dashboard__chart span:nth-child(2) {
    height: 58%;
  }

  .preview-dashboard__chart span:nth-child(3) {
    height: 43%;
  }

  .preview-dashboard__chart span:nth-child(4) {
    height: 80%;
  }

  .preview-dashboard__chart span:nth-child(5) {
    height: 64%;
  }

  /* pSEO preview */

  .project-preview--pseo {
    padding: 1.25rem;
    background:
      radial-gradient(circle at 90% 10%, rgb(102 112 90 / 22%), transparent 28%),
      linear-gradient(150deg, #f5f4ee 0%, #e4e7dd 100%);
  }

  .preview-pseo {
    height: 100%;
    overflow: hidden;
    border: 1px solid rgb(16 24 38 / 12%);
    border-radius: 1rem;
    background: #fbfbf7;
    box-shadow: 0 24px 50px rgb(16 24 38 / 10%);
  }

  .preview-pseo__toolbar {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    height: 2.4rem;
    padding: 0 0.8rem;
    border-bottom: 1px solid #e2e3dc;
    background: #f1f2eb;
  }

  .preview-pseo__brand {
    width: 28%;
    height: 0.45rem;
    margin-right: auto;
    border-radius: 99px;
    background: #617059;
  }

  .preview-pseo__toggle {
    width: 0.85rem;
    height: 0.85rem;
    border-radius: 0.22rem;
    background: #d2d7c7;
  }

  .preview-pseo__body {
    display: grid;
    grid-template-columns: 26% 1fr;
    min-height: 263px;
  }

  .preview-pseo__filters {
    display: grid;
    align-content: start;
    gap: 0.55rem;
    padding: 0.9rem 0.7rem;
    border-right: 1px solid #e5e6df;
    background: #f5f6f0;
  }

  .preview-pseo__filters span {
    margin-top: 0.35rem;
    color: #64705b;
    font-size: 0.43rem;
    font-weight: 900;
    letter-spacing: 0.1em;
  }

  .preview-pseo__filters div {
    height: 0.4rem;
    border-radius: 99px;
    background: #d9ddce;
  }

  .preview-pseo__filters div:nth-of-type(2) {
    width: 76%;
  }

  .preview-pseo__canvas {
    position: relative;
    padding: 1rem;
  }

  .preview-pseo__page {
    width: 63%;
    padding: 0.85rem;
    border: 1px solid #d8dccf;
    border-radius: 0.5rem;
    background: #fff;
  }

  .preview-pseo__city {
    color: #68765d;
    font-size: 0.38rem;
    font-weight: 900;
    letter-spacing: 0.08em;
  }

  .preview-pseo__page strong,
  .preview-pseo__page i {
    display: block;
    border-radius: 99px;
  }

  .preview-pseo__page strong {
    width: 72%;
    height: 0.54rem;
    margin: 0.7rem 0;
    background: #26332c;
  }

  .preview-pseo__page i {
    width: 94%;
    height: 0.3rem;
    margin-top: 0.35rem;
    background: #e1e4dc;
  }

  .preview-pseo__page i:nth-of-type(2) {
    width: 72%;
  }

  .preview-pseo__nodes {
    position: absolute;
    right: 0.8rem;
    bottom: 1rem;
    display: grid;
    gap: 0.45rem;
  }

  .preview-pseo__nodes div {
    min-width: 4.1rem;
    padding: 0.48rem;
    border: 1px solid #ced3c5;
    border-radius: 0.4rem;
    background: #f8f9f4;
    color: #536149;
    font-size: 0.37rem;
    font-weight: 900;
    letter-spacing: 0.08em;
    text-align: center;
  }

  .preview-pseo__links span {
    position: absolute;
    display: block;
    height: 1px;
    transform-origin: left;
    background: #a6b39a;
  }

  .preview-pseo__links span:nth-child(1) {
    top: 44%;
    left: 42%;
    width: 26%;
    transform: rotate(20deg);
  }

  .preview-pseo__links span:nth-child(2) {
    top: 54%;
    left: 45%;
    width: 26%;
    transform: rotate(43deg);
  }

  .preview-pseo__links span:nth-child(3) {
    top: 63%;
    left: 42%;
    width: 24%;
    transform: rotate(64deg);
  }

  /* Fantivers preview */

  .project-preview--fantivers {
    background:
      radial-gradient(circle at 20% 15%, rgb(188 147 255 / 25%), transparent 25%),
      radial-gradient(circle at 80% 80%, rgb(103 180 156 / 18%), transparent 28%),
      #121a27;
  }

  .preview-fantivers {
    position: relative;
    min-height: 320px;
    overflow: hidden;
    color: #f8f5ee;
  }

  .preview-fantivers__glow {
    position: absolute;
    width: 12rem;
    height: 12rem;
    border-radius: 999px;
    filter: blur(55px);
    opacity: 0.34;
  }

  .preview-fantivers__glow--one {
    top: -5rem;
    left: -2rem;
    background: #9b7acd;
  }

  .preview-fantivers__glow--two {
    right: -4rem;
    bottom: -6rem;
    background: #4c9b83;
  }

  .preview-fantivers__topbar {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    height: 2.6rem;
    padding: 0 1rem;
    border-bottom: 1px solid rgb(248 245 238 / 12%);
  }

  .preview-fantivers__topbar span {
    margin-right: auto;
    color: #d9c3a0;
    font-size: 0.47rem;
    font-weight: 900;
    letter-spacing: 0.18em;
  }

  .preview-fantivers__topbar i {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: rgb(248 245 238 / 28%);
  }

  .preview-fantivers__world {
    position: relative;
    height: 225px;
  }

  .preview-fantivers__node {
    position: absolute;
    z-index: 2;
    display: grid;
    width: 4.5rem;
    height: 4.5rem;
    place-items: center;
    border: 1px solid rgb(248 245 238 / 30%);
    border-radius: 50%;
    background: rgb(16 24 38 / 58%);
    box-shadow: 0 0 0 0.5rem rgb(248 245 238 / 3%);
    backdrop-filter: blur(8px);
  }

  .preview-fantivers__node span {
    color: #f4ecdf;
    font-size: 0.38rem;
    font-weight: 900;
    letter-spacing: 0.1em;
    line-height: 1.45;
    text-align: center;
  }

  .preview-fantivers__node--core {
    top: 5rem;
    left: 43%;
    border-color: #d4a768;
    background: rgb(167 122 59 / 21%);
  }

  .preview-fantivers__node--one {
    top: 1.2rem;
    left: 16%;
  }

  .preview-fantivers__node--two {
    right: 12%;
    bottom: 1.5rem;
  }

  .preview-fantivers__node--three {
    bottom: 0.8rem;
    left: 29%;
  }

  .preview-fantivers__line {
    position: absolute;
    z-index: 1;
    height: 1px;
    transform-origin: left;
    background: linear-gradient(90deg, rgb(212 167 104 / 75%), rgb(248 245 238 / 12%));
  }

  .preview-fantivers__line--one {
    top: 7.4rem;
    left: 29%;
    width: 23%;
    transform: rotate(20deg);
  }

  .preview-fantivers__line--two {
    top: 9rem;
    left: 55%;
    width: 24%;
    transform: rotate(35deg);
  }

  .preview-fantivers__line--three {
    top: 11.7rem;
    left: 42%;
    width: 16%;
    transform: rotate(117deg);
  }

  .preview-fantivers__tags {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    display: flex;
    gap: 0.35rem;
  }

  .preview-fantivers__tags span {
    padding: 0.3rem 0.42rem;
    border: 1px solid rgb(248 245 238 / 15%);
    border-radius: 999px;
    background: rgb(248 245 238 / 6%);
    color: rgb(248 245 238 / 72%);
    font-size: 0.35rem;
    font-weight: 900;
    letter-spacing: 0.1em;
  }

  @media (max-width: 460px) {
    .project-preview {
      min-height: 260px;
    }

    .preview-dashboard {
      min-height: 205px;
    }

    .preview-pseo__body {
      min-height: 205px;
    }

    .preview-fantivers {
      min-height: 260px;
    }

    .preview-fantivers__world {
      transform: scale(0.84);
      transform-origin: top center;
    }
  }
</style>
```

## 12. `src/components/ProjectCard.astro`

```astro
---
import type { PortfolioProject } from "../data/projects";
import ProjectPreview from "./ProjectPreview.astro";
import StatusBadge from "./StatusBadge.astro";

interface Props {
  project: PortfolioProject;
}

const { project } = Astro.props;

const previewLabel =
  project.previewVariant === "dashboard"
    ? "Screenshots coming soon"
    : project.previewVariant === "pseo"
      ? "Private system — testing in progress"
      : "In design and development";
---

<article class="project-card">
  <ProjectPreview variant={project.previewVariant} label={previewLabel} />

  <div class="project-card__content">
    <div class="project-card__meta">
      <StatusBadge label={project.status} tone={project.accent} />
      <span class="project-card__type">{project.type}</span>
    </div>

    <h3>{project.title}</h3>
    <p>{project.description}</p>

    <div class="tag-list" aria-label={`${project.title} technology stack`}>
      {project.stack.slice(0, 4).map((item) => (
        <span class="tag">{item}</span>
      ))}
    </div>

    <a class="text-link" href={`/projects#${project.slug}`}>
      Explore project
      <span aria-hidden="true">↗</span>
    </a>
  </div>
</article>
```

## 13. `src/components/ServiceCard.astro`

```astro
---
import type { Service } from "../data/services";

interface Props {
  service: Service;
}

const { service } = Astro.props;
---

<article class="service-card">
  <span class="service-card__number">{service.number}</span>

  <h3>{service.title}</h3>
  <p>{service.description}</p>

  <ul>
    {service.outcomes.map((outcome) => (
      <li>{outcome}</li>
    ))}
  </ul>
</article>
```

## 14. `src/components/SkillCard.astro`

```astro
---
import type { Skill } from "../data/skills";

interface Props {
  skill: Skill;
}

const { skill } = Astro.props;
---

<article class="skill-card">
  <div class="skill-card__top">
    <h3>{skill.name}</h3>
    <span>{skill.level}</span>
  </div>

  <p>{skill.description}</p>
</article>
```

## 15. `src/components/ContactCTA.astro`

```astro
---
import { site } from "../data/site";
import Button from "./Button.astro";
---

<section class="contact-cta">
  <div class="container contact-cta__grid">
    <div>
      <p class="eyebrow eyebrow--light">Available for selected work</p>
      <h2>Have a system worth building?</h2>
      <p>
        For freelance work, technical collaborations, internships, or product
        conversations.
      </p>
    </div>

    <div class="contact-cta__actions">
      <Button href={site.emailHref}>Email Me</Button>
      <Button
        href={site.whatsappPrimary}
        variant="secondary"
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </Button>
    </div>
  </div>
</section>
```

## 16. `src/components/Header.astro`

```astro
---
import { navigation, site } from "../data/site";

const currentPath = Astro.url.pathname;
---

<header class="site-header">
  <div class="container site-header__inner">
    <a class="brand" href="/" aria-label={`${site.name} home page`}>
      <span class="brand__mark">AY</span>
      <span class="brand__name">{site.name}</span>
    </a>

    <nav class="desktop-nav" aria-label="Primary navigation">
      {navigation.map((item) => {
        const isActive =
          item.href === "/"
            ? currentPath === "/"
            : currentPath.startsWith(item.href);

        return (
          <a
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            class:list={[
              "nav-link",
              isActive && "nav-link--active",
              item.emphasized && "nav-link--contact",
            ]}
          >
            {item.label}
          </a>
        );
      })}
    </nav>

    <button
      class="menu-toggle"
      type="button"
      aria-expanded="false"
      aria-controls="mobile-menu"
      data-menu-toggle
    >
      <span class="sr-only">Open navigation menu</span>
      <span></span>
      <span></span>
    </button>
  </div>

  <div class="mobile-menu" id="mobile-menu" data-mobile-menu hidden>
    <div class="container mobile-menu__inner">
      <nav aria-label="Mobile navigation">
        {navigation.map((item) => (
          <a href={item.href} data-mobile-link>
            {item.label}
          </a>
        ))}
      </nav>

      <div class="mobile-menu__contact">
        <a href={site.emailHref}>{site.email}</a>
        <a href={site.whatsappPrimary} target="_blank" rel="noreferrer">
          WhatsApp: {site.phonePrimary}
        </a>
      </div>
    </div>
  </div>
</header>

<script>
  const toggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-mobile-menu]");

  const closeMenu = () => {
    if (!(toggle instanceof HTMLButtonElement) || !(menu instanceof HTMLElement)) {
      return;
    }

    toggle.setAttribute("aria-expanded", "false");
    menu.hidden = true;
    document.body.classList.remove("menu-open");
  };

  const openMenu = () => {
    if (!(toggle instanceof HTMLButtonElement) || !(menu instanceof HTMLElement)) {
      return;
    }

    toggle.setAttribute("aria-expanded", "true");
    menu.hidden = false;
    document.body.classList.add("menu-open");
  };

  if (toggle instanceof HTMLButtonElement && menu instanceof HTMLElement) {
    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    document.querySelectorAll("[data-mobile-link]").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });
  }
</script>
```

## 17. `src/components/Footer.astro`

```astro
---
import { site } from "../data/site";
---

<footer class="site-footer">
  <div class="container">
    <div class="site-footer__top">
      <div>
        <a class="site-footer__brand" href="/">{site.name}</a>
        <p>Laravel Developer</p>
      </div>

      <div class="site-footer__links">
        <a href={site.emailHref}>Email</a>
        <a href={site.whatsappPrimary} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
        <a href="#top">Back to top ↑</a>
      </div>
    </div>

    <div class="site-footer__bottom">
      <p>© 2026 Abul Yaman. Built with Laravel thinking, even when static.</p>
      <p>{site.location}</p>
    </div>
  </div>
</footer>
```

## 18. `src/layouts/BaseLayout.astro`

```astro
---
import "../styles/global.css";
import Header from "../components/Header.astro";
import Footer from "../components/Footer.astro";
import { site } from "../data/site";

interface Props {
  title?: string;
  description?: string;
  noIndex?: boolean;
}

const {
  title,
  description = site.shortBio,
  noIndex = false,
} = Astro.props;

const pageTitle = title ? `${title} | ${site.name}` : `${site.name} | ${site.headline}`;

const canonicalUrl = new URL(
  Astro.url.pathname,
  Astro.site ?? Astro.url.origin,
).href;
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <meta name="description" content={description} />
    <meta name="author" content={site.name} />
    <meta name="theme-color" content="#F5F2EB" />

    {noIndex && <meta name="robots" content="noindex, nofollow" />}

    <link rel="canonical" href={canonicalUrl} />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

    <meta property="og:type" content="website" />
    <meta property="og:title" content={pageTitle} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonicalUrl} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={pageTitle} />
    <meta name="twitter:description" content={description} />

    <title>{pageTitle}</title>
  </head>

  <body id="top">
    <div class="site-shell">
      <Header />

      <main class="site-main">
        <slot />
      </main>

      <Footer />
    </div>
  </body>
</html>
```

## 19. `src/pages/index.astro`

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import Button from "../components/Button.astro";
import ContactCTA from "../components/ContactCTA.astro";
import ProjectCard from "../components/ProjectCard.astro";
import SectionHeading from "../components/SectionHeading.astro";
import { projects } from "../data/projects";
import { site } from "../data/site";

const serviceHighlights = [
  {
    title: "SaaS & Internal Tools",
    text: "Products designed around the actual workflow: users, roles, actions, data, and future growth.",
  },
  {
    title: "Dashboards & Management Systems",
    text: "Operational interfaces for students, clients, teams, payments, classes, records, and more.",
  },
  {
    title: "Search-Driven Web Products",
    text: "SEO-aware systems with structured content, scalable templates, and practical technical foundations.",
  },
];
---

<BaseLayout
  description="Portfolio of Abul Yaman, a Laravel developer building SaaS products, management systems, dashboards, pSEO systems, and scalable web tools."
>
  <section class="hero section">
    <div class="container hero__grid">
      <div class="hero__content">
        <p class="eyebrow">Laravel developer · KP, Pakistan</p>

        <h1>Building web systems that are designed to grow.</h1>

        <p class="hero__description">
          Laravel developer focused on SaaS products, management platforms,
          dashboards, pSEO systems, and practical tools built with long-term
          structure in mind.
        </p>

        <div class="hero__actions">
          <Button href="/projects">View Projects</Button>
          <Button href="/contact" variant="secondary">Contact Me</Button>
        </div>

        <div class="hero__stack" aria-label="Primary technology stack">
          <span>Laravel</span>
          <span>Livewire</span>
          <span>Tailwind</span>
          <span>MySQL</span>
          <span>PostgreSQL</span>
        </div>
      </div>

      <div class="hero-visual" aria-label="Visual representation of development systems">
        <div class="hero-visual__canvas">
          <div class="hero-visual__label hero-visual__label--top">
            <span></span>
            SYSTEM THINKING
          </div>

          <div class="hero-visual__card hero-visual__card--main">
            <div class="hero-visual__card-top">
              <span>PRODUCT SYSTEM</span>
              <i></i>
            </div>

            <div class="hero-visual__code">
              <span class="hero-visual__code--muted">app/</span>
              <span>dashboard</span>
              <span>workflows</span>
              <span>database</span>
              <span class="hero-visual__code--accent">scalable</span>
            </div>

            <div class="hero-visual__bars">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>

          <div class="hero-visual__card hero-visual__card--small">
            <span>AI-ASSISTED</span>
            <strong>Judgment<br />still leads.</strong>
          </div>

          <div class="hero-visual__label hero-visual__label--bottom">
            <span></span>
            BUILT FOR MORE THAN LAUNCH DAY
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="credibility-strip">
    <div class="container credibility-strip__grid">
      <span>Laravel applications</span>
      <span>Management systems</span>
      <span>pSEO infrastructure</span>
      <span>Deployment & hosting</span>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <SectionHeading
        eyebrow="Selected work"
        title="Work built around real systems."
        description="A selection of private client work, internal tooling, and product work currently in development."
      />

      <div class="project-grid">
        {projects.map((project) => <ProjectCard project={project} />)}
      </div>
    </div>
  </section>

  <section class="section section--soft">
    <div class="container">
      <SectionHeading
        eyebrow="What I build"
        title="Products that need more than a landing page."
        description="The focus is practical software: useful workflows, durable structure, and interfaces people can actually operate."
      />

      <div class="three-column-grid">
        {serviceHighlights.map((service, index) => (
          <article class="home-service-card">
            <span class="home-service-card__number">0{index + 1}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container approach-grid">
      <div>
        <p class="eyebrow">Engineering approach</p>
        <h2>Built with structure, not shortcuts.</h2>
      </div>

      <div class="approach-list">
        <div>
          <span>01</span>
          <p>Clean Laravel architecture</p>
        </div>
        <div>
          <span>02</span>
          <p>Database-first thinking</p>
        </div>
        <div>
          <span>03</span>
          <p>Responsive interface systems</p>
        </div>
        <div>
          <span>04</span>
          <p>Performance and scalability awareness</p>
        </div>
        <div>
          <span>05</span>
          <p>Deployment and hosting knowledge</p>
        </div>
        <div>
          <span>06</span>
          <p>AI-assisted workflows used carefully, not blindly</p>
        </div>
      </div>
    </div>
  </section>

  <ContactCTA />
</BaseLayout>
```

## 20. `src/pages/about.astro`

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import ContactCTA from "../components/ContactCTA.astro";
import SectionHeading from "../components/SectionHeading.astro";
import SkillCard from "../components/SkillCard.astro";
import { education, languages } from "../data/education";
import { skills } from "../data/skills";
import { site } from "../data/site";
---

<BaseLayout
  title="About"
  description="Learn about Abul Yaman's development approach, technical focus, education, languages, and interest in scalable Laravel systems."
>
  <section class="page-intro section">
    <div class="container page-intro__grid">
      <div>
        <p class="eyebrow">About</p>
        <h1>A developer interested in systems, not just pages.</h1>
      </div>

      <p>
        I am a Computer Science applicant from Khyber Pakhtunkhwa, Pakistan,
        focused on Laravel applications, dashboard-heavy products, practical
        workflows, structured data, and polished interfaces.
      </p>
    </div>
  </section>

  <section class="section section--soft">
    <div class="container story-grid">
      <div class="story-grid__content">
        <p class="eyebrow">Working approach</p>

        <h2>Modern tools, deliberate decisions.</h2>

        <p>
          I use AI coding agents to increase speed, explore implementation
          options, and reduce repetitive work. The goal is not to hand over
          judgment to a tool. The goal is to move faster while keeping product
          structure, usability, and technical decisions under control.
        </p>

        <p>
          My strongest interest is in building SaaS products, management
          platforms, dashboards, pSEO systems, and smaller tools that solve
          practical problems without becoming fragile as they grow.
        </p>

        <div class="inline-facts">
          <div>
            <span>Based in</span>
            <strong>{site.location}</strong>
          </div>
          <div>
            <span>Current focus</span>
            <strong>Laravel systems</strong>
          </div>
          <div>
            <span>Work style</span>
            <strong>Refine the weak points</strong>
          </div>
        </div>
      </div>

      <aside class="principles-card">
        <p class="eyebrow eyebrow--light">Principles</p>
        <h3>How I approach product work.</h3>

        <ol>
          <li>
            <span>01</span>
            <p>Build for the actual workflow, not a vague feature checklist.</p>
          </li>
          <li>
            <span>02</span>
            <p>Treat the database as part of the product, not an afterthought.</p>
          </li>
          <li>
            <span>03</span>
            <p>Design for future complexity before it becomes expensive.</p>
          </li>
          <li>
            <span>04</span>
            <p>Refine until the visible weak points have been addressed.</p>
          </li>
          <li>
            <span>05</span>
            <p>Use AI to improve speed, not replace judgment.</p>
          </li>
        </ol>
      </aside>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <SectionHeading
        eyebrow="Technical focus"
        title="The tools behind the work."
        description="A development stack centred on Laravel, interactive server-driven interfaces, relational data, deployment, search systems, and product planning."
      />

      <div class="skill-grid">
        {skills.map((skill) => <SkillCard skill={skill} />)}
      </div>
    </div>
  </section>

  <section class="section section--soft">
    <div class="container">
      <SectionHeading
        eyebrow="Education"
        title="Academic and independent learning."
        description="Current education, completed study, and coursework presented accurately."
      />

      <div class="timeline">
        {education.map((item) => (
          <article class="timeline__item">
            <div class="timeline__year">{item.year}</div>

            <div class="timeline__content">
              <h3>{item.title}</h3>
              <p class="timeline__institution">{item.institution}</p>
              <p>{item.note}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <SectionHeading
        eyebrow="Languages"
        title="Communication across three languages."
      />

      <div class="language-grid">
        {languages.map((language) => (
          <article class="language-card">
            <span>{language.level}</span>
            <h3>{language.name}</h3>
            <p>{language.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>

  <ContactCTA />
</BaseLayout>
```

## 21. `src/pages/projects.astro`

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import ContactCTA from "../components/ContactCTA.astro";
import ProjectPreview from "../components/ProjectPreview.astro";
import StatusBadge from "../components/StatusBadge.astro";
import { projects } from "../data/projects";
---

<BaseLayout
  title="Projects"
  description="Selected private client work, pSEO infrastructure, and product design work by Laravel developer Abul Yaman."
>
  <section class="page-intro section">
    <div class="container page-intro__grid">
      <div>
        <p class="eyebrow">Projects</p>
        <h1>Projects built around real systems and long-term structure.</h1>
      </div>

      <p>
        A selection of private client work, internal tools, and product work
        currently in development. Each project is presented honestly without
        exposing private code, client data, or unreleased product mechanics.
      </p>
    </div>
  </section>

  <section class="section project-case-studies">
    <div class="container">
      {projects.map((project, index) => {
        const previewLabel =
          project.previewVariant === "dashboard"
            ? "Screenshots coming soon"
            : project.previewVariant === "pseo"
              ? "Private system — testing in progress"
              : "In design and development";

        return (
          <article
            id={project.slug}
            class:list={[
              "project-case-study",
              index % 2 === 1 && "project-case-study--reverse",
            ]}
          >
            <div class="project-case-study__visual">
              <ProjectPreview
                variant={project.previewVariant}
                label={previewLabel}
              />
            </div>

            <div class="project-case-study__content">
              <div class="project-case-study__meta">
                <StatusBadge label={project.status} tone={project.accent} />
                <span>{project.type}</span>
              </div>

              <h2>{project.title}</h2>

              <p class="project-case-study__description">
                {project.description}
              </p>

              <div>
                <p class="mini-label">Technology and focus</p>
                <div class="tag-list">
                  {project.stack.map((item) => (
                    <span class="tag">{item}</span>
                  ))}
                </div>
              </div>

              <div>
                <p class="mini-label">Key areas</p>

                <ul class="feature-list">
                  {project.features.map((feature) => (
                    <li>{feature}</li>
                  ))}
                </ul>
              </div>

              <p class="privacy-note">
                <strong>Project note:</strong> {project.privacyNote}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  </section>

  <ContactCTA />
</BaseLayout>
```

## 22. `src/pages/services.astro`

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import Button from "../components/Button.astro";
import ServiceCard from "../components/ServiceCard.astro";
import { services } from "../data/services";
---

<BaseLayout
  title="Services"
  description="Laravel development, dashboards, SaaS MVPs, pSEO systems, deployment support, and technical product planning by Abul Yaman."
>
  <section class="page-intro section">
    <div class="container page-intro__grid">
      <div>
        <p class="eyebrow">Services</p>
        <h1>Services for products that need more than a landing page.</h1>
      </div>

      <p>
        The focus is practical web software: structured systems, useful
        workflows, refined interfaces, reliable deployment, and product
        planning before complexity becomes expensive.
      </p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="service-grid">
        {services.map((service) => <ServiceCard service={service} />)}
      </div>
    </div>
  </section>

  <section class="section section--soft">
    <div class="container service-process">
      <div>
        <p class="eyebrow">Project inquiries</p>
        <h2>Better information creates better systems.</h2>
      </div>

      <div>
        <p>
          For project inquiries, include your goal, target users, required
          features, current situation, and preferred timeline. A short but
          precise description is enough to begin a useful conversation.
        </p>

        <Button href="/contact">Discuss a Project</Button>
      </div>
    </div>
  </section>
</BaseLayout>
```

## 23. `src/pages/resume.astro`

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import Button from "../components/Button.astro";
import { education, languages } from "../data/education";
import { projects } from "../data/projects";
import { skills } from "../data/skills";
import { site } from "../data/site";
---

<BaseLayout
  title="Resume"
  description="Browser-readable résumé for Abul Yaman: Laravel developer, Computer Science applicant, and builder of management systems and search-driven products."
>
  <section class="resume-hero section">
    <div class="container resume-hero__grid">
      <div>
        <p class="eyebrow">Resume</p>
        <h1>{site.name}</h1>
        <p class="resume-hero__headline">{site.headline}</p>
      </div>

      <div class="resume-hero__actions">
        <Button href={site.emailHref}>Email Me</Button>
        <Button href="/contact" variant="secondary">Contact Page</Button>
      </div>
    </div>
  </section>

  <section class="section section--soft">
    <div class="container resume-layout">
      <aside class="resume-sidebar">
        <div>
          <p class="mini-label">Location</p>
          <p>{site.location}</p>
        </div>

        <div>
          <p class="mini-label">Email</p>
          <a href={site.emailHref}>{site.email}</a>
        </div>

        <div>
          <p class="mini-label">Phone / WhatsApp</p>
          <a href={site.phonePrimaryHref}>{site.phonePrimary}</a>
          <a href={site.phoneSecondaryHref}>{site.phoneSecondary}</a>
        </div>

        <div class="resume-pdf-note">
          <strong>PDF résumé coming soon.</strong>
          <span>The browser version contains the current public information.</span>
        </div>
      </aside>

      <div class="resume-content">
        <section>
          <p class="eyebrow">Summary</p>
          <h2>Product-minded Laravel developer.</h2>
          <p>
            Computer Science applicant focused on Laravel applications,
            management systems, dashboards, pSEO infrastructure, deployment,
            and refined interface work. Interested in building SaaS products,
            practical tools, and systems designed to remain useful as they
            grow.
          </p>
        </section>

        <section>
          <p class="eyebrow">Technical skills</p>

          <div class="resume-skills">
            {skills.map((skill) => (
              <div>
                <span>{skill.name}</span>
                <strong>{skill.level}</strong>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p class="eyebrow">Selected projects</p>

          <div class="resume-projects">
            {projects.map((project) => (
              <article>
                <div>
                  <h3>{project.title}</h3>
                  <span>{project.status}</span>
                </div>

                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <p class="eyebrow">Education & coursework</p>

          <div class="resume-education">
            {education.map((item) => (
              <article>
                <span>{item.year}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.institution}</p>
                  <small>{item.note}</small>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <p class="eyebrow">Languages</p>

          <div class="resume-languages">
            {languages.map((language) => (
              <div>
                <h3>{language.name}</h3>
                <p>{language.level}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  </section>
</BaseLayout>
```

## 24. `src/pages/contact.astro`

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import { site } from "../data/site";
---

<BaseLayout
  title="Contact"
  description="Contact Abul Yaman for Laravel applications, dashboards, pSEO systems, deployment support, technical planning, internships, or collaborations."
>
  <section class="page-intro section">
    <div class="container page-intro__grid">
      <div>
        <p class="eyebrow">Contact</p>
        <h1>Let’s discuss the system you need to build.</h1>
      </div>

      <p>
        For freelance work, technical collaborations, internships, product
        discussions, or questions about a project, direct email and WhatsApp
        are available.
      </p>
    </div>
  </section>

  <section class="section">
    <div class="container contact-layout">
      <aside class="contact-details">
        <div class="contact-details__intro">
          <p class="eyebrow">Direct contact</p>
          <h2>Start with the useful details.</h2>
          <p>
            Mention your goal, users, required features, existing setup, and
            preferred timeline. A detailed brief is useful, but a clear short
            message is enough to start.
          </p>
        </div>

        <div class="contact-method">
          <span>Email</span>
          <a href={site.emailHref}>{site.email}</a>
        </div>

        <div class="contact-method">
          <span>Phone & WhatsApp</span>
          <a href={site.phonePrimaryHref}>{site.phonePrimary}</a>
          <a href={site.phoneSecondaryHref}>{site.phoneSecondary}</a>
        </div>

        <div class="contact-actions">
          <a
            class="button button--primary"
            href={site.whatsappPrimary}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Primary Number
          </a>

          <a
            class="button button--secondary"
            href={site.whatsappSecondary}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Second Number
          </a>
        </div>
      </aside>

      <div class="contact-form-card">
        <div class="contact-form-card__header">
          <p class="eyebrow">Project inquiry</p>
          <h2>Send a message</h2>
          <p>
            This form prepares an email in your mail app. Direct email and
            WhatsApp remain available if your device does not have a mail app
            configured.
          </p>
        </div>

        <form data-contact-form>
          <div class="form-grid">
            <div class="form-field">
              <label for="name">Name</label>
              <input id="name" name="name" type="text" autocomplete="name" required />
            </div>

            <div class="form-field">
              <label for="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
              />
            </div>
          </div>

          <div class="form-field">
            <label for="projectType">Project type</label>
            <select id="projectType" name="projectType" required>
              <option value="">Select one</option>
              <option value="Laravel web application">Laravel web application</option>
              <option value="Admin dashboard or management system">
                Admin dashboard or management system
              </option>
              <option value="SaaS MVP">SaaS MVP</option>
              <option value="Programmatic SEO system">Programmatic SEO system</option>
              <option value="Deployment or hosting">Deployment or hosting</option>
              <option value="Product blueprint or technical planning">
                Product blueprint or technical planning
              </option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div class="form-grid">
            <div class="form-field">
              <label for="timeline">Preferred timeline</label>
              <select id="timeline" name="timeline">
                <option value="Not sure yet">Not sure yet</option>
                <option value="Within 1 week">Within 1 week</option>
                <option value="Within 2–4 weeks">Within 2–4 weeks</option>
                <option value="Within 1–3 months">Within 1–3 months</option>
                <option value="Longer-term project">Longer-term project</option>
              </select>
            </div>

            <div class="form-field">
              <label for="budget">Budget range <span>(optional)</span></label>
              <select id="budget" name="budget">
                <option value="Not specified">Not specified</option>
                <option value="Under $250">Under $250</option>
                <option value="$250–$500">$250–$500</option>
                <option value="$500–$1,000">$500–$1,000</option>
                <option value="$1,000+">$1,000+</option>
              </select>
            </div>
          </div>

          <div class="form-field">
            <label for="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="7"
              required
              placeholder="Describe the system, users, goals, important features, and current situation."
            ></textarea>
          </div>

          <div class="honeypot" aria-hidden="true">
            <label for="website">Website</label>
            <input
              id="website"
              name="website"
              type="text"
              tabindex="-1"
              autocomplete="off"
            />
          </div>

          <button class="button button--primary" type="submit">
            Prepare Email
          </button>

          <p class="form-status" data-form-status aria-live="polite"></p>
        </form>
      </div>
    </div>
  </section>
</BaseLayout>

<script>
  const form = document.querySelector("[data-contact-form]");
  const status = document.querySelector("[data-form-status]");

  if (form instanceof HTMLFormElement && status instanceof HTMLElement) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(form);

      if (String(formData.get("website") || "").trim() !== "") {
        return;
      }

      const name = String(formData.get("name") || "").trim();
      const email = String(formData.get("email") || "").trim();
      const projectType = String(formData.get("projectType") || "").trim();
      const timeline = String(formData.get("timeline") || "").trim();
      const budget = String(formData.get("budget") || "").trim();
      const message = String(formData.get("message") || "").trim();

      const subject = `Portfolio inquiry from ${name || "a visitor"}`;

      const body = [
        `Name: ${name}`,
        `Email: ${email}`,
        `Project type: ${projectType}`,
        `Timeline: ${timeline}`,
        `Budget range: ${budget}`,
        "",
        "Message:",
        message,
      ].join("\n");

      status.textContent =
        "Your email application should open now. If it does not, use the direct email or WhatsApp options.";

      window.location.href =
        `mailto:abulyaman101@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }
</script>
```

## 25. `src/styles/global.css`

```css
@import "tailwindcss";
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Manrope:wght@400;500;600;700;800&display=swap");

:root {
  --bg: #f5f2eb;
  --surface: #fffdf8;
  --surface-soft: #ece8df;
  --ink: #101826;
  --muted: #5b6470;
  --bronze: #a77a3b;
  --olive: #66705a;
  --border: #ded8cd;
  --navy: #121a27;
  --light: #f8f5ee;
  --max-width: 1120px;
  --shadow-soft: 0 20px 60px rgb(16 24 38 / 8%);
  --shadow-card: 0 18px 42px rgb(16 24 38 / 9%);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  background: var(--bg);
}

body {
  min-width: 320px;
  margin: 0;
  overflow-x: hidden;
  background: var(--bg);
  color: var(--ink);
  font-family: "Manrope", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.7;
}

body.menu-open {
  overflow: hidden;
}

::selection {
  background: rgb(167 122 59 / 28%);
  color: var(--ink);
}

img,
svg {
  display: block;
  max-width: 100%;
}

button,
input,
textarea,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

a:focus-visible,
button:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 3px solid rgb(167 122 59 / 55%);
  outline-offset: 3px;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1,
h2,
h3 {
  color: var(--ink);
  font-family: "DM Serif Display", Georgia, serif;
  font-weight: 400;
  line-height: 1.05;
}

h1 {
  max-width: 14ch;
  margin-bottom: 1.6rem;
  font-size: clamp(3rem, 7vw, 6.6rem);
  letter-spacing: -0.055em;
}

h2 {
  margin-bottom: 1.25rem;
  font-size: clamp(2.35rem, 4.8vw, 4.25rem);
  letter-spacing: -0.045em;
}

h3 {
  margin-bottom: 0.8rem;
  font-size: clamp(1.4rem, 2.2vw, 2rem);
  letter-spacing: -0.03em;
}

p {
  color: var(--muted);
}

ul,
ol {
  margin: 0;
  padding: 0;
}

.container {
  width: min(calc(100% - 2.5rem), var(--max-width));
  margin-inline: auto;
}

.site-shell {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.site-main {
  flex: 1;
}

.section {
  padding: 7.5rem 0;
}

.section--soft {
  background: rgb(222 216 205 / 38%);
}

.eyebrow,
.mini-label {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  margin-bottom: 1rem;
  color: var(--bronze);
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  line-height: 1.2;
  text-transform: uppercase;
}

.eyebrow::before {
  width: 1.75rem;
  height: 1px;
  background: currentColor;
  content: "";
}

.eyebrow--light {
  color: #d7bc8e;
}

.mini-label {
  margin-bottom: 0.65rem;
  color: var(--muted);
  font-size: 0.64rem;
}

.mini-label::before {
  display: none;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

.button {
  display: inline-flex;
  min-height: 3.1rem;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.15rem;
  border: 1px solid transparent;
  border-radius: 0.65rem;
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.045em;
  line-height: 1.1;
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background 180ms ease,
    color 180ms ease;
}

.button:hover {
  transform: translateY(-2px);
}

.button--primary {
  background: var(--ink);
  color: var(--light);
}

.button--primary:hover {
  background: #1d2b40;
}

.button--secondary {
  border-color: var(--border);
  background: transparent;
  color: var(--ink);
}

.button--secondary:hover {
  border-color: var(--bronze);
  background: rgb(167 122 59 / 8%);
}

.button--ghost {
  padding-inline: 0;
  color: var(--ink);
}

.button--ghost:hover {
  color: var(--bronze);
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.48rem;
}

.tag {
  padding: 0.38rem 0.55rem;
  border: 1px solid var(--border);
  border-radius: 999px;
  color: var(--muted);
  font-size: 0.67rem;
  font-weight: 700;
  line-height: 1.2;
}

/* Header */

.site-header {
  position: sticky;
  z-index: 30;
  top: 0;
  border-bottom: 1px solid rgb(222 216 205 / 80%);
  background: rgb(245 242 235 / 88%);
  backdrop-filter: blur(16px);
}

.site-header__inner {
  display: flex;
  min-height: 4.8rem;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
}

.brand__mark {
  display: grid;
  width: 2rem;
  height: 2rem;
  place-items: center;
  border: 1px solid var(--ink);
  border-radius: 0.48rem;
  color: var(--ink);
  font-family: "DM Serif Display", Georgia, serif;
  font-size: 0.84rem;
  line-height: 1;
}

.brand__name {
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 0.1rem;
}

.nav-link {
  padding: 0.55rem 0.72rem;
  border-radius: 0.45rem;
  color: var(--muted);
  font-size: 0.72rem;
  font-weight: 800;
  transition:
    color 180ms ease,
    background 180ms ease;
}

.nav-link:hover,
.nav-link--active {
  color: var(--ink);
}

.nav-link--active {
  background: rgb(16 24 38 / 6%);
}

.nav-link--contact {
  margin-left: 0.3rem;
  border: 1px solid var(--ink);
  color: var(--ink);
}

.nav-link--contact:hover {
  background: var(--ink);
  color: var(--light);
}

.menu-toggle {
  display: none;
  width: 2.6rem;
  height: 2.6rem;
  padding: 0;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  background: transparent;
}

.menu-toggle span:not(.sr-only) {
  display: block;
  width: 1rem;
  height: 1px;
  margin: 0.22rem auto;
  background: var(--ink);
}

.mobile-menu {
  border-top: 1px solid var(--border);
  background: var(--bg);
}

.mobile-menu__inner {
  padding: 1.5rem 0 2rem;
}

.mobile-menu nav {
  display: grid;
  gap: 0.3rem;
}

.mobile-menu nav a {
  padding: 0.85rem 0;
  border-bottom: 1px solid var(--border);
  color: var(--ink);
  font-family: "DM Serif Display", Georgia, serif;
  font-size: 1.8rem;
}

.mobile-menu__contact {
  display: grid;
  gap: 0.55rem;
  margin-top: 1.5rem;
  color: var(--muted);
  font-size: 0.76rem;
  font-weight: 700;
}

/* Footer */

.site-footer {
  padding: 3rem 0 1.8rem;
  background: var(--navy);
  color: var(--light);
}

.site-footer__top {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgb(248 245 238 / 14%);
}

.site-footer__brand {
  color: var(--light);
  font-family: "DM Serif Display", Georgia, serif;
  font-size: 2rem;
  letter-spacing: -0.04em;
}

.site-footer p {
  margin: 0.2rem 0 0;
  color: rgb(248 245 238 / 62%);
  font-size: 0.73rem;
}

.site-footer__links {
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  gap: 1rem;
}

.site-footer__links a {
  color: rgb(248 245 238 / 80%);
  font-size: 0.72rem;
  font-weight: 800;
}

.site-footer__links a:hover {
  color: #d7bc8e;
}

.site-footer__bottom {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1.4rem;
}

/* Hero */

.hero {
  padding-top: 6rem;
  padding-bottom: 6.2rem;
}

.hero__grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: clamp(3rem, 7vw, 7.5rem);
}

.hero__description {
  max-width: 43rem;
  margin-bottom: 2rem;
  font-size: 1.03rem;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.hero__stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 2.2rem;
}

.hero__stack span {
  padding: 0.35rem 0.5rem;
  color: var(--muted);
  font-size: 0.65rem;
  font-weight: 800;
}

.hero__stack span:not(:last-child)::after {
  margin-left: 0.45rem;
  color: var(--bronze);
  content: "•";
}

.hero-visual__canvas {
  position: relative;
  min-height: 440px;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 1.7rem;
  background:
    radial-gradient(circle at 12% 12%, rgb(167 122 59 / 18%), transparent 28%),
    radial-gradient(circle at 88% 88%, rgb(102 112 90 / 16%), transparent 33%),
    linear-gradient(145deg, #e8e2d7, #f9f7f2);
  box-shadow: var(--shadow-soft);
}

.hero-visual__canvas::before {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgb(16 24 38 / 4%) 1px, transparent 1px),
    linear-gradient(90deg, rgb(16 24 38 / 4%) 1px, transparent 1px);
  background-size: 2.15rem 2.15rem;
  content: "";
}

.hero-visual__card,
.hero-visual__label {
  position: absolute;
  z-index: 2;
}

.hero-visual__card--main {
  top: 4.3rem;
  right: 2.2rem;
  width: min(72%, 22rem);
  padding: 1.35rem;
  border: 1px solid rgb(248 245 238 / 15%);
  border-radius: 1rem;
  background: #152031;
  box-shadow: 0 30px 45px rgb(16 24 38 / 20%);
  transform: rotate(3deg);
}

.hero-visual__card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.9rem;
  border-bottom: 1px solid rgb(248 245 238 / 13%);
}

.hero-visual__card-top span {
  color: #d8bd91;
  font-size: 0.55rem;
  font-weight: 900;
  letter-spacing: 0.14em;
}

.hero-visual__card-top i {
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 50%;
  background: #819164;
}

.hero-visual__code {
  display: grid;
  gap: 0.58rem;
  margin-top: 1.25rem;
  color: #f6f2eb;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.74rem;
}

.hero-visual__code span::before {
  margin-right: 0.48rem;
  color: #819164;
  content: "›";
}

.hero-visual__code--muted {
  color: rgb(248 245 238 / 52%);
}

.hero-visual__code--accent {
  color: #d8bd91;
}

.hero-visual__bars {
  display: flex;
  align-items: end;
  gap: 0.42rem;
  height: 4rem;
  margin-top: 1.4rem;
}

.hero-visual__bars i {
  width: 1rem;
  border-radius: 0.24rem 0.24rem 0 0;
  background: #6f855b;
}

.hero-visual__bars i:nth-child(1) {
  height: 30%;
}

.hero-visual__bars i:nth-child(2) {
  height: 58%;
}

.hero-visual__bars i:nth-child(3) {
  height: 43%;
}

.hero-visual__bars i:nth-child(4) {
  height: 84%;
  background: #c39150;
}

.hero-visual__bars i:nth-child(5) {
  height: 62%;
}

.hero-visual__card--small {
  bottom: 3.4rem;
  left: 2.2rem;
  width: 11.5rem;
  padding: 1rem;
  border: 1px solid rgb(16 24 38 / 13%);
  border-radius: 0.85rem;
  background: rgb(255 253 248 / 90%);
  box-shadow: 0 18px 35px rgb(16 24 38 / 10%);
  transform: rotate(-4deg);
}

.hero-visual__card--small span {
  color: var(--bronze);
  font-size: 0.52rem;
  font-weight: 900;
  letter-spacing: 0.12em;
}

.hero-visual__card--small strong {
  display: block;
  margin-top: 0.6rem;
  color: var(--ink);
  font-family: "DM Serif Display", Georgia, serif;
  font-size: 1.45rem;
  font-weight: 400;
  line-height: 1.05;
}

.hero-visual__label {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--muted);
  font-size: 0.55rem;
  font-weight: 900;
  letter-spacing: 0.12em;
}

.hero-visual__label span {
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 50%;
  background: var(--bronze);
}

.hero-visual__label--top {
  top: 1.45rem;
  left: 1.45rem;
}

.hero-visual__label--bottom {
  right: 1.45rem;
  bottom: 1.45rem;
}

/* Homepage content */

.credibility-strip {
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.credibility-strip__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.credibility-strip__grid span {
  padding: 1.2rem 0.9rem;
  color: var(--muted);
  font-size: 0.72rem;
  font-weight: 800;
  text-align: center;
}

.credibility-strip__grid span:not(:last-child) {
  border-right: 1px solid var(--border);
}

.section-heading {
  max-width: 48rem;
  margin-bottom: 3rem;
}

.section-heading--center {
  margin-right: auto;
  margin-left: auto;
  text-align: center;
}

.section-heading--center .eyebrow {
  justify-content: center;
}

.section-heading__description {
  max-width: 43rem;
  margin-bottom: 0;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.1rem;
}

.project-card {
  display: flex;
  min-width: 0;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 1.4rem;
  background: var(--surface);
  box-shadow: 0 0 0 transparent;
  transition:
    transform 220ms ease,
    box-shadow 220ms ease,
    border-color 220ms ease;
}

.project-card:hover {
  border-color: rgb(167 122 59 / 48%);
  box-shadow: var(--shadow-card);
  transform: translateY(-6px);
}

.project-card .project-preview {
  min-height: 230px;
  border: 0;
  border-bottom: 1px solid var(--border);
  border-radius: 0;
}

.project-card__content {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: start;
  padding: 1.3rem;
}

.project-card__meta,
.project-case-study__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 1rem;
}

.project-card__type,
.project-case-study__meta > span:not(.status-badge) {
  color: var(--muted);
  font-size: 0.64rem;
  font-weight: 800;
}

.project-card h3 {
  font-size: 1.9rem;
}

.project-card p {
  margin-bottom: 1.1rem;
  font-size: 0.86rem;
  line-height: 1.65;
}

.project-card .tag-list {
  margin-bottom: 1.5rem;
}

.text-link {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  margin-top: auto;
  color: var(--ink);
  font-size: 0.72rem;
  font-weight: 900;
}

.text-link span {
  color: var(--bronze);
  transition: transform 180ms ease;
}

.text-link:hover span {
  transform: translate(3px, -3px);
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.38rem;
  padding: 0.35rem 0.5rem;
  border: 1px solid currentColor;
  border-radius: 999px;
  font-size: 0.58rem;
  font-weight: 900;
  letter-spacing: 0.07em;
  line-height: 1;
  text-transform: uppercase;
}

.status-badge__dot {
  width: 0.35rem;
  height: 0.35rem;
  border-radius: 50%;
  background: currentColor;
}

.status-badge--bronze {
  color: #91662d;
}

.status-badge--olive {
  color: #5e6a50;
}

.status-badge--navy {
  color: #34425a;
}

.three-column-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.home-service-card {
  min-height: 16rem;
  padding: 1.55rem;
  border: 1px solid var(--border);
  border-radius: 1rem;
  background: rgb(255 253 248 / 64%);
}

.home-service-card__number {
  display: block;
  margin-bottom: 3.2rem;
  color: var(--bronze);
  font-size: 0.65rem;
  font-weight: 900;
  letter-spacing: 0.1em;
}

.home-service-card h3 {
  font-size: 1.65rem;
}

.home-service-card p {
  margin: 0;
  font-size: 0.85rem;
}

.approach-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 6rem;
}

.approach-grid h2 {
  max-width: 11ch;
}

.approach-list {
  border-top: 1px solid var(--border);
}

.approach-list > div {
  display: grid;
  grid-template-columns: 2rem 1fr;
  gap: 1rem;
  padding: 1.05rem 0;
  border-bottom: 1px solid var(--border);
}

.approach-list span {
  color: var(--bronze);
  font-size: 0.67rem;
  font-weight: 900;
}

.approach-list p {
  margin: 0;
  color: var(--ink);
  font-weight: 700;
}

/* Contact CTA */

.contact-cta {
  padding: 5.8rem 0;
  background:
    radial-gradient(circle at 12% 22%, rgb(167 122 59 / 22%), transparent 24%),
    var(--navy);
}

.contact-cta__grid {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
}

.contact-cta h2 {
  max-width: 12ch;
  margin-bottom: 1rem;
  color: var(--light);
}

.contact-cta p:not(.eyebrow) {
  max-width: 36rem;
  margin-bottom: 0;
  color: rgb(248 245 238 / 70%);
}

.contact-cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.contact-cta .button--primary {
  background: #d7bc8e;
  color: var(--navy);
}

.contact-cta .button--primary:hover {
  background: #efd6ab;
}

.contact-cta .button--secondary {
  border-color: rgb(248 245 238 / 32%);
  color: var(--light);
}

.contact-cta .button--secondary:hover {
  border-color: #d7bc8e;
  background: rgb(248 245 238 / 7%);
}

/* Intro pages */

.page-intro {
  padding-top: 6rem;
  padding-bottom: 5.2rem;
}

.page-intro__grid {
  display: grid;
  grid-template-columns: 1fr 0.72fr;
  align-items: end;
  gap: 5rem;
}

.page-intro h1 {
  margin-bottom: 0;
}

.page-intro p:last-child {
  max-width: 32rem;
  margin: 0 0 0.4rem;
  font-size: 1rem;
}

/* About page */

.story-grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 5rem;
  align-items: start;
}

.story-grid__content > p {
  max-width: 42rem;
  font-size: 0.98rem;
}

.inline-facts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.7rem;
  margin-top: 2rem;
}

.inline-facts > div {
  padding-top: 0.8rem;
  border-top: 1px solid var(--border);
}

.inline-facts span {
  display: block;
  margin-bottom: 0.35rem;
  color: var(--muted);
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.inline-facts strong {
  color: var(--ink);
  font-size: 0.76rem;
}

.principles-card {
  padding: 2rem;
  border-radius: 1.2rem;
  background:
    radial-gradient(circle at 95% 7%, rgb(167 122 59 / 24%), transparent 28%),
    var(--navy);
  box-shadow: var(--shadow-card);
}

.principles-card h3 {
  max-width: 13ch;
  color: var(--light);
  font-size: 2.1rem;
}

.principles-card ol {
  list-style: none;
}

.principles-card li {
  display: grid;
  grid-template-columns: 2rem 1fr;
  gap: 0.8rem;
  padding: 0.9rem 0;
  border-top: 1px solid rgb(248 245 238 / 12%);
}

.principles-card li span {
  color: #d7bc8e;
  font-size: 0.65rem;
  font-weight: 900;
}

.principles-card li p {
  margin: 0;
  color: rgb(248 245 238 / 75%);
  font-size: 0.82rem;
}

.skill-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.9rem;
}

.skill-card {
  min-height: 11.4rem;
  padding: 1.25rem;
  border: 1px solid var(--border);
  border-radius: 0.85rem;
  background: var(--surface);
}

.skill-card__top {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 1rem;
}

.skill-card h3 {
  margin-bottom: 0.7rem;
  font-size: 1.35rem;
}

.skill-card__top span {
  flex: none;
  padding: 0.28rem 0.42rem;
  border: 1px solid rgb(167 122 59 / 35%);
  border-radius: 99px;
  color: #88602b;
  font-size: 0.56rem;
  font-weight: 900;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.skill-card p {
  margin: 0;
  font-size: 0.79rem;
  line-height: 1.58;
}

.timeline {
  border-top: 1px solid var(--border);
}

.timeline__item {
  display: grid;
  grid-template-columns: 8rem 1fr;
  gap: 2rem;
  padding: 1.6rem 0;
  border-bottom: 1px solid var(--border);
}

.timeline__year {
  color: var(--bronze);
  font-size: 0.7rem;
  font-weight: 900;
  letter-spacing: 0.08em;
}

.timeline__content h3 {
  margin-bottom: 0.35rem;
  font-size: 1.65rem;
}

.timeline__content p {
  margin-bottom: 0.28rem;
  font-size: 0.85rem;
}

.timeline__institution {
  color: var(--ink) !important;
  font-weight: 800;
}

.language-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.language-card {
  padding: 1.5rem;
  border-top: 2px solid var(--bronze);
  background: var(--surface);
  box-shadow: 0 12px 28px rgb(16 24 38 / 5%);
}

.language-card span {
  display: block;
  margin-bottom: 2rem;
  color: var(--muted);
  font-size: 0.64rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.language-card h3 {
  margin-bottom: 0.55rem;
  font-size: 2rem;
}

.language-card p {
  margin: 0;
  font-size: 0.82rem;
}

/* Projects page */

.project-case-studies {
  padding-top: 1rem;
}

.project-case-study {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 6vw, 5rem);
  align-items: center;
  padding: 5rem 0;
  border-top: 1px solid var(--border);
}

.project-case-study--reverse .project-case-study__visual {
  order: 2;
}

.project-case-study__content {
  min-width: 0;
}

.project-case-study h2 {
  margin-bottom: 1.25rem;
}

.project-case-study__description {
  margin-bottom: 1.7rem;
  font-size: 0.96rem;
}

.project-case-study .tag-list {
  margin-bottom: 1.55rem;
}

.feature-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.62rem 0.8rem;
  margin-bottom: 1.7rem;
  list-style: none;
}

.feature-list li {
  position: relative;
  padding-left: 1rem;
  color: var(--muted);
  font-size: 0.78rem;
  line-height: 1.45;
}

.feature-list li::before {
  position: absolute;
  top: 0.48rem;
  left: 0;
  width: 0.35rem;
  height: 0.35rem;
  border-radius: 50%;
  background: var(--bronze);
  content: "";
}

.privacy-note {
  padding: 0.85rem 1rem;
  border-left: 2px solid var(--olive);
  background: rgb(102 112 90 / 8%);
  font-size: 0.77rem;
  line-height: 1.58;
}

/* Services */

.service-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.9rem;
}

.service-card {
  min-height: 20rem;
  padding: 1.5rem;
  border: 1px solid var(--border);
  border-radius: 1rem;
  background: var(--surface);
  transition:
    transform 180ms ease,
    box-shadow 180ms ease;
}

.service-card:hover {
  box-shadow: var(--shadow-card);
  transform: translateY(-4px);
}

.service-card__number {
  display: block;
  margin-bottom: 2.8rem;
  color: var(--bronze);
  font-size: 0.67rem;
  font-weight: 900;
  letter-spacing: 0.12em;
}

.service-card h3 {
  font-size: 1.8rem;
}

.service-card > p {
  min-height: 4.5rem;
  font-size: 0.83rem;
  line-height: 1.62;
}

.service-card ul {
  display: grid;
  gap: 0.46rem;
  margin-top: 1.4rem;
  list-style: none;
}

.service-card li {
  position: relative;
  padding-left: 0.95rem;
  color: var(--ink);
  font-size: 0.72rem;
  font-weight: 800;
}

.service-card li::before {
  position: absolute;
  top: 0.55rem;
  left: 0;
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  background: var(--olive);
  content: "";
}

.service-process {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 5rem;
  align-items: start;
}

.service-process h2 {
  max-width: 11ch;
}

.service-process p:not(.eyebrow) {
  max-width: 37rem;
  margin-bottom: 1.5rem;
}

/* Resume */

.resume-hero {
  padding-top: 5.7rem;
  padding-bottom: 4.5rem;
}

.resume-hero__grid {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
}

.resume-hero h1 {
  margin-bottom: 0.6rem;
}

.resume-hero__headline {
  max-width: 40rem;
  margin: 0;
  font-size: 1rem;
}

.resume-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
}

.resume-layout {
  display: grid;
  grid-template-columns: 17rem 1fr;
  gap: 4.5rem;
}

.resume-sidebar {
  display: grid;
  align-content: start;
  gap: 1.4rem;
}

.resume-sidebar > div {
  padding-bottom: 1.2rem;
  border-bottom: 1px solid var(--border);
}

.resume-sidebar p:not(.mini-label) {
  margin: 0;
  color: var(--ink);
  font-size: 0.82rem;
  font-weight: 700;
}

.resume-sidebar a {
  display: block;
  width: fit-content;
  margin-bottom: 0.25rem;
  color: var(--ink);
  font-size: 0.78rem;
  font-weight: 800;
}

.resume-sidebar a:hover {
  color: var(--bronze);
}

.resume-pdf-note {
  display: grid;
  gap: 0.3rem;
  padding: 1rem !important;
  border: 1px solid rgb(167 122 59 / 32%) !important;
  border-radius: 0.65rem;
  background: rgb(167 122 59 / 8%);
}

.resume-pdf-note strong {
  color: var(--ink);
  font-size: 0.76rem;
}

.resume-pdf-note span {
  color: var(--muted);
  font-size: 0.72rem;
  line-height: 1.45;
}

.resume-content {
  display: grid;
  gap: 3.7rem;
}

.resume-content section > p:not(.eyebrow) {
  max-width: 46rem;
  font-size: 0.94rem;
}

.resume-skills {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-top: 1px solid var(--border);
}

.resume-skills > div {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.75rem 0.8rem 0.75rem 0;
  border-bottom: 1px solid var(--border);
}

.resume-skills > div:nth-child(odd) {
  margin-right: 1.5rem;
}

.resume-skills span {
  color: var(--ink);
  font-size: 0.77rem;
  font-weight: 800;
}

.resume-skills strong {
  color: var(--bronze);
  font-size: 0.62rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.resume-projects {
  display: grid;
  gap: 1.2rem;
}

.resume-projects article {
  padding-bottom: 1.2rem;
  border-bottom: 1px solid var(--border);
}

.resume-projects article > div {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
}

.resume-projects h3 {
  margin-bottom: 0.4rem;
  font-size: 1.6rem;
}

.resume-projects span {
  color: var(--bronze);
  font-size: 0.62rem;
  font-weight: 900;
  letter-spacing: 0.06em;
  text-align: right;
  text-transform: uppercase;
}

.resume-projects p {
  max-width: 47rem;
  margin: 0;
  font-size: 0.81rem;
}

.resume-education {
  display: grid;
  gap: 1rem;
}

.resume-education article {
  display: grid;
  grid-template-columns: 5rem 1fr;
  gap: 1rem;
}

.resume-education article > span {
  color: var(--bronze);
  font-size: 0.68rem;
  font-weight: 900;
}

.resume-education h3 {
  margin-bottom: 0.25rem;
  font-size: 1.35rem;
}

.resume-education p,
.resume-education small {
  display: block;
  margin: 0;
  font-size: 0.78rem;
}

.resume-education p {
  color: var(--ink);
  font-weight: 800;
}

.resume-languages {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}

.resume-languages > div {
  min-width: 11rem;
  flex: 1;
  padding: 1rem;
  border: 1px solid var(--border);
  background: var(--surface);
}

.resume-languages h3 {
  margin-bottom: 0.35rem;
  font-size: 1.4rem;
}

.resume-languages p {
  margin: 0;
  font-size: 0.72rem;
}

/* Contact */

.contact-layout {
  display: grid;
  grid-template-columns: 0.78fr 1.22fr;
  gap: 5rem;
  align-items: start;
}

.contact-details__intro h2 {
  max-width: 10ch;
  font-size: 3.4rem;
}

.contact-details__intro p:not(.eyebrow) {
  font-size: 0.87rem;
}

.contact-method {
  display: grid;
  gap: 0.38rem;
  padding: 1.15rem 0;
  border-top: 1px solid var(--border);
}

.contact-method:last-of-type {
  border-bottom: 1px solid var(--border);
}

.contact-method span {
  color: var(--muted);
  font-size: 0.62rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.contact-method a {
  width: fit-content;
  color: var(--ink);
  font-size: 0.85rem;
  font-weight: 800;
}

.contact-method a:hover {
  color: var(--bronze);
}

.contact-actions {
  display: grid;
  gap: 0.65rem;
  margin-top: 1.5rem;
}

.contact-form-card {
  padding: clamp(1.2rem, 4vw, 2.2rem);
  border: 1px solid var(--border);
  border-radius: 1.25rem;
  background: var(--surface);
  box-shadow: var(--shadow-soft);
}

.contact-form-card__header {
  margin-bottom: 1.8rem;
}

.contact-form-card__header h2 {
  margin-bottom: 0.6rem;
  font-size: 3rem;
}

.contact-form-card__header p:not(.eyebrow) {
  max-width: 39rem;
  margin: 0;
  font-size: 0.83rem;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.85rem;
}

.form-field {
  display: grid;
  gap: 0.45rem;
  margin-bottom: 1rem;
}

.form-field label {
  color: var(--ink);
  font-size: 0.72rem;
  font-weight: 800;
}

.form-field label span {
  color: var(--muted);
  font-weight: 600;
}

.form-field input,
.form-field textarea,
.form-field select {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 0.6rem;
  background: #fffefa;
  color: var(--ink);
  font-size: 0.84rem;
  outline: none;
  transition:
    border-color 180ms ease,
    box-shadow 180ms ease;
}

.form-field input,
.form-field select {
  min-height: 3rem;
  padding: 0.65rem 0.75rem;
}

.form-field textarea {
  min-height: 10rem;
  padding: 0.75rem;
  resize: vertical;
}

.form-field input:focus,
.form-field textarea:focus,
.form-field select:focus {
  border-color: var(--bronze);
  box-shadow: 0 0 0 3px rgb(167 122 59 / 12%);
}

.honeypot {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.form-status {
  min-height: 1.3rem;
  margin: 0.8rem 0 0;
  color: var(--olive);
  font-size: 0.75rem;
  font-weight: 700;
}

/* Responsive */

@media (max-width: 980px) {
  .hero__grid,
  .page-intro__grid,
  .story-grid,
  .contact-layout {
    grid-template-columns: 1fr;
  }

  .hero__grid,
  .page-intro__grid,
  .story-grid,
  .contact-layout {
    gap: 2.5rem;
  }

  .hero h1 {
    max-width: 12ch;
  }

  .hero-visual__canvas {
    min-height: 390px;
  }

  .project-grid,
  .skill-grid,
  .service-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .approach-grid,
  .service-process {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .project-case-study,
  .project-case-study--reverse {
    grid-template-columns: 1fr;
  }

  .project-case-study--reverse .project-case-study__visual {
    order: 0;
  }

  .resume-layout {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .resume-sidebar {
    grid-template-columns: repeat(2, 1fr);
  }

  .resume-sidebar > div:last-child {
    grid-column: 1 / -1;
  }

  .contact-details__intro h2 {
    max-width: none;
  }
}

@media (max-width: 720px) {
  .section {
    padding: 4.7rem 0;
  }

  .container {
    width: min(calc(100% - 2rem), var(--max-width));
  }

  .desktop-nav {
    display: none;
  }

  .menu-toggle {
    display: block;
  }

  .hero {
    padding-top: 4.5rem;
    padding-bottom: 4.6rem;
  }

  .hero__description,
  .page-intro p:last-child {
    font-size: 0.94rem;
  }

  .hero-visual__canvas {
    min-height: 340px;
  }

  .hero-visual__card--main {
    top: 3.4rem;
    right: 1.3rem;
    width: 74%;
  }

  .hero-visual__card--small {
    bottom: 2.3rem;
    left: 1.3rem;
  }

  .hero-visual__label--top {
    top: 1rem;
    left: 1rem;
  }

  .hero-visual__label--bottom {
    right: 1rem;
    bottom: 1rem;
  }

  .credibility-strip__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .credibility-strip__grid span:nth-child(2) {
    border-right: 0;
  }

  .credibility-strip__grid span:nth-child(-n + 2) {
    border-bottom: 1px solid var(--border);
  }

  .project-grid,
  .three-column-grid,
  .skill-grid,
  .language-grid,
  .service-grid {
    grid-template-columns: 1fr;
  }

  .inline-facts {
    grid-template-columns: 1fr;
  }

  .timeline__item {
    grid-template-columns: 1fr;
    gap: 0.55rem;
  }

  .feature-list {
    grid-template-columns: 1fr;
  }

  .contact-cta__grid,
  .resume-hero__grid,
  .site-footer__top,
  .site-footer__bottom {
    flex-direction: column;
    align-items: start;
  }

  .site-footer__links {
    justify-content: start;
  }

  .resume-sidebar,
  .resume-skills {
    grid-template-columns: 1fr;
  }

  .resume-sidebar > div:last-child {
    grid-column: auto;
  }

  .resume-skills > div:nth-child(odd) {
    margin-right: 0;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 430px) {
  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.45rem;
  }

  .hero-visual__canvas {
    min-height: 300px;
  }

  .hero-visual__card--main {
    top: 3.2rem;
    right: 0.8rem;
    width: 79%;
    padding: 1rem;
  }

  .hero-visual__card--small {
    bottom: 1.5rem;
    left: 0.8rem;
    width: 9.5rem;
    padding: 0.8rem;
  }

  .hero-visual__card--small strong {
    font-size: 1.15rem;
  }

  .hero-visual__label {
    font-size: 0.44rem;
  }

  .project-case-study {
    padding: 3.4rem 0;
  }

  .contact-form-card__header h2 {
    font-size: 2.45rem;
  }

  .resume-projects article > div {
    flex-direction: column;
    gap: 0.3rem;
  }

  .resume-projects span {
    text-align: left;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

## 26. `public/robots.txt`

```txt
User-agent: *
Allow: /
```

## 27. `public/favicon.svg`

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#101826"/>
  <text
    x="32"
    y="41"
    text-anchor="middle"
    font-family="Georgia, serif"
    font-size="26"
    fill="#F8F5EE"
  >
    AY
  </text>
</svg>
```

## 28. Run these commands

```powershell
npm run dev
```

Open the local URL Astro gives you, usually:

```text
http://localhost:4321
```

Then verify production build:

```powershell
npm run build
```

When the build succeeds:

```powershell
git add .
git commit -m "feat: build multi-page portfolio website"
git push
```

The only later task is replacing the three designed project placeholders with sanitized screenshots when you upload them.
