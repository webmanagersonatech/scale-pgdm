
import AboutPage from "../about-content";

export async function generateStaticParams() {
    return [
        { slug: "aboutus" },
        { slug: "vision" },
        { slug: "history" },
        { slug: "management" },
        { slug: "chairman" },
        { slug: "advisory" }

    ];
}


export function generateMetadata({ params }: any) {
    const titles: any = {
        aboutus: "About Us",
        vision: "BlackbVision & Missionoard",
        history: "History",
        chairman: "Chairman's Books",
        management: "Management Profile",
        advisory: "Advisory Board"

    };

    const title = titles[params.slug] || "Facilities";
    return {
        title: `About | ${title} | Sona School of Business & Management`,
        description: `Explore ${title} at Sona School of Business and Management`,
        alternates: {
            canonical: `https://www.sonabusinessschool.com/about/${params.slug}`,
        },
        robots: "index, follow",
    };
}

export const dynamic = "force-static";

export default function FacilitySlugPage({ params }: any) {
    return <AboutPage activeSlug={params.slug} />;
}
