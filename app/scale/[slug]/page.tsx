import ScalePage from "../about-content";

export async function generateStaticParams() {
  return [
    { slug: "why-ssbm" },
    { slug: "industry-designed" },
    { slug: "tech-infused" },
    { slug: "global-exposure" },
    { slug: "startup-incubation" },
    { slug: "residential-learning" },
    { slug: "sona-legacy" },
    { slug: "future-proof-careers" },
    { slug: "leadership-development" },
    { slug: "future-ready-school" },
  ];
}

export function generateMetadata({ params }: any) {
  const titles: any = {
    "why-SSBM": "Why SSBM?",
    "industry-designed": "Industry Designed Business School",
    "tech-infused": "Tech-Infused Curriculum",
    "global-exposure": "Global Exposure",
    "startup-incubation": "Startup Incubation Centre",
    "residential-learning": "Residential Learning Environment",
    "sona-legacy": "Sona Legacy",
    "future-proof-careers": "Future-Proof Careers",
    "leadership-development": "Leadership Development",
    "future-ready-school": "Future Ready School",
  };

  const title = titles[params.slug] || "SCALE";

  return {
    title: `${title} | SCALE | Sona School of Business & Management`,
    description: `Explore ${title} at SCALE – India’s First Tech-Driven, Industry-Built Business School.`,
    alternates: {
      canonical: `https://www.sonabusinessschool.com/about-scale/${params.slug}`,
    },
    robots: "index, follow",
  };
}

export const dynamic = "force-static";

export default function ScaleSlugPage({ params }: any) {
  return <ScalePage activeSlug={params.slug} />;
}
