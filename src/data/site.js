export const site = {
  name: 'Fazal Abbas',
  title: 'Frontend Engineer',
  brand: 'Fazal Abbas',
  location: 'Karachi, Pakistan',
  availability: 'Available for freelance projects — remote, worldwide',
  email: 'fazalabbas2002@gmail.com',
  github: 'https://github.com/fazal305',
  linkedin: 'https://www.linkedin.com/in/fazal-abbas-4653dg86/',
  nav: [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ],
  contactLinks: [
    { label: 'fazalabbas2002@gmail.com', href: 'mailto:fazalabbas2002@gmail.com', icon: 'email' },
    { label: 'github.com/fazal305', href: 'https://github.com/fazal305', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fazal-abbas-4653dg86/', icon: 'linkedin' },
  ],
}

export const heroCopy = {
  eyebrow: site.availability,
  headline: 'I build web apps and business systems that actually run your workflow.',
  subhead:
    'Full-stack developer specializing in React applications, business management systems, and AI-integrated tools — designed, built, and shipped to production, not just mocked up.',
  primaryCta: { label: 'Get a Quote', href: '#contact' },
  secondaryCta: { label: 'View Work', href: '#work' },
}

export const heroSkillTags = [
  { label: 'React & Full-Stack', variant: 'sky' },
  { label: 'Business Systems', variant: 'lime' },
  { label: 'AI Integrations', variant: 'coral' },
]

export const finalCta = {
  eyebrow: 'Get started',
  headline: "Have a project in mind? Let's build something useful.",
  primaryCta: { label: 'Get a Quote', href: '#contact' },
  secondaryCta: { label: 'View Work', href: '#work' },
}
