import type { Metadata } from "next";
import { SITE_DESCRIPTION } from "@/data/site";

const SITE_NAME = "Okuru Christian";
export const HOME_TITLE = "Okuru Christian — Front-End Web Developer in Lagos";

const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Okuru Christian — Front-End Web Developer in Lagos",
};

// Complete page metadata: title, description, canonical link, and share cards.
// Next.js replaces (not merges) openGraph/twitter per page, so every page sets them in full.
export function pageMeta({
  title,
  description = SITE_DESCRIPTION,
  path,
}: {
  title?: string;
  description?: string;
  path: string;
}): Metadata {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : HOME_TITLE;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      locale: "en_US",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
