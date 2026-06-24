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