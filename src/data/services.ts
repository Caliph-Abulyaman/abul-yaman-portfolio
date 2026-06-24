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