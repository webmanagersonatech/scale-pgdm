import SpecializationPageContent from "../specializationscontent";

// This is required for static export
export function generateStaticParams() {
  return [
    { slug: "eligibility" },
    { slug: "general" },
    { slug: "marketing" },
    { slug: "hrtech" },
    { slug: "analytics" },
    { slug: "supplychain" },
    { slug: "fintech" },
  ];
}

// Dynamic metadata based on slug
export function generateMetadata({ params }: any) {
  const titles: Record<string, string> = {
    eligibility: "Admission Eligibility",
    general: "PGDM Specialisations",
    marketing: "MarTech Innovation & Automation",
    hrtech: "HR Tech & Digital Transformation",
    analytics: "AI, Data Analytics & Business Intelligence",
    supplychain: "AI, IoT & Big Data in Supply Chain Operations",
    fintech: "Fin-Tech, AI & Digital Finance",
  };

  const title = titles[params.slug] || "Admission";

  return {
    title: `${title} | MBA Specialization | Sona School of Business & Management`,
    description: `Explore ${title} at Sona School of Business & Management.`,
    alternates: {
      canonical: `https://www.sonabusinessschool.com/admission/${params.slug}`,
    },
    robots: "index, follow",
  };
}

// Force pre-render
export const dynamic = "force-static";

export default function AdmissionSlugPage({ params }: any) {
  return <SpecializationPageContent activeSlug={params.slug} />;
}
