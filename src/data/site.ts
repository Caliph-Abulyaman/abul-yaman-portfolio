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

// Primary nav — kept to 7 items max before it needs to collapse into a
// "More" group. Learning Journey and AI Practice are top-level per your
// call to keep them separate rather than folding into About.
export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Journey", href: "/journey" },
  { label: "AI Practice", href: "/ai-practice" },
  { label: "Services", href: "/services" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact", emphasized: true },
];
