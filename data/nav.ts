export type SubItem = { label: string; href: string };
export type NavItem = { label: string; href: string; submenu?: SubItem[] };

export const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about/aboutus",
    submenu: [
      { label: "Vision & Mission", href: "/about/vision" },

      { label: "Management Profile", href: "/about/management" },
      { label: "Advisory Board", href: "/about/advisory" },

    ],
  },

  {
    label: "Faculty",
    href: "/faculty",
  },
  {
    label: "Admisssion",
    href: "/admission/general",

  },
  {
    label: "Research",
    href: "/admission/general",


  },
  {
    label: "Placement",
    href: "/placement",


  },
  // {
  //   label: "Program",
  //   href: "/program",
  //   submenu: [
  //     { label: " Why Sona MBA ", href: "/program?tab=whysonamaba" },
  //     { label: " Admission ", href: "/program?tab=admission" },
  //     { label: " FAQs ", href: "/program?tab=faq" },


  //   ],
  // },
  // {
  //   label: "Research",
  //   href: "/research",
  //   submenu: [
  //     { label: "Center for Research", href: "/research?tab=centerforresearch" },

  //     { label: "Publication", href: "/research?tab=publication" },

  //   ],
  // },
  // {
  //   label: "Enrichment",
  //   href: "/enrichment",
  //   submenu: [
  //     { label: "Workshops/ FDP/seminars", href: "/enrichment?tab=workshops" },
  //     { label: "Achievements & Awards", href: "/enrichment?tab=achievements" },
  //     { label: "Departmental Forum", href: "/enrichment?tab=departmentalforum" },
  //     { label: "Professional Societies", href: "/enrichment?tab=professionalsocieties" },

  //   ],
  // },
  // {
  //   label: "Corporate",
  //   href: "/corporate",
  //   submenu: [
  //     { label: "Distinguished Visitors", href: "/corporate?tab=distinguishedvisitors" },
  //     { label: "Industry Associates", href: "/corporate?tab=industryassociates" },
  //     { label: "Consulting", href: "/corporate?tab=Consulting" },
  //     { label: "Industry Interface", href: "/corporate?tab=industryinterface" },

  //   ],
  // },
  // {
  //   label: "Placement",
  //   href: "/placement",
  //   submenu: [
  //     { label: "Placement Details", href: "/placement?tab=placementdetails" },
  //     { label: "Recruiters", href: "/placement?tab=recruiters" },
  //     { label: "Training", href: "/placement?tab=training" },
  //     { label: "Team and Contact", href: "/placement?tab=teamandcontact" },
  //   ],
  // },
  {
    label: "Contact",
    href: "/contact",
  },
];