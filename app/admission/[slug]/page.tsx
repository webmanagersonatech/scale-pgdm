
import SpecializationPageContent from "../specializationscontent";

export async function generateStaticParams() {
    return [
        { slug: "general" },
        { slug: "hrtech" },
        { slug: "analytics" },
        { slug: "supplychain" },
        { slug: "fintech" },

    ];
}


export function generateMetadata({ params }: any) {
    const titles: any = {
        general: "General MBA",
        hrtech: "HR Tech & Digital Transformation",
        analytics: "AI, Data Analytics & Business Intelligence",
        supplychain: "AI, IoT & Big Data in Supply Chain Operations",
        fintech: "Fin-Tech, AI & Digital Finance",
    };

    const title = titles[params.slug] || "Admission";
    return {
        title: `Admission | ${title} | Sona School of Business & Management`,
        description: `Explore ${title} at Sona School of Business and Management`,
        alternates: {
            canonical: `https://www.sonabusinessschool.com/about/${params.slug}`,
        },
        robots: "index, follow",
    };
}

export const dynamic = "force-static";

export default function FacilitySlugPage({ params }: any) {
    return <SpecializationPageContent activeSlug={params.slug} />;
}
