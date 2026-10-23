type SocialLink = {
  label: string;
  href: string;
};

type SiteConfig = {
  contactEmail: string;
  socialLinks: SocialLink[];
};

export const site: SiteConfig = {
  contactEmail: "wastoo.team@gmail.com",
  socialLinks: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/wastoo-algeria-4b7123446/",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/wastoo.2026",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/wastoo.dz/",
    },
  ],
};
