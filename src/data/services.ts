export interface Service {
  number: string;
  title: string;
  description: string;
  outcomes: string[];
  bestFor: string;
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
    bestFor: "Businesses, internal operations, and workflow-based tools.",
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
    bestFor: "Student portals, client systems, and operations-heavy teams.",
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
    bestFor: "Founders validating a focused product with real users.",
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
    bestFor: "Local businesses and multi-location service websites.",
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
    bestFor: "Projects moving from development into production.",
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
    bestFor: "Founders who need a clearer product before development begins.",
  },
];