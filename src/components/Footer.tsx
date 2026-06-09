import { InstagramLogo, XLogo, FacebookLogo } from '@phosphor-icons/react'

type SocialLink = {
  name: string
  href?: string
  Icon: typeof InstagramLogo
}

const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    href: import.meta.env.VITE_SOCIAL_INSTAGRAM_URL?.trim(),
    Icon: InstagramLogo,
  },
  {
    name: 'X (Twitter)',
    href: import.meta.env.VITE_SOCIAL_X_URL?.trim(),
    Icon: XLogo,
  },
  {
    name: 'Facebook',
    href: import.meta.env.VITE_SOCIAL_FACEBOOK_URL?.trim(),
    Icon: FacebookLogo,
  },
]

const activeSocialLinks = socialLinks.filter(
  (link): link is SocialLink & { href: string } => Boolean(link.href)
)

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          {activeSocialLinks.length > 0 ? (
            <div className="flex gap-6">
              {activeSocialLinks.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  className="hover:text-secondary transition-colors duration-300"
                  aria-label={name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-8 h-8" weight="fill" />
                </a>
              ))}
            </div>
          ) : (
            <p className="text-primary-foreground/70 text-sm">Social profiles coming soon.</p>
          )}

          <div className="text-center">
            <p className="text-xl font-semibold mb-2">
              Hot Buns Gym & Bakery
            </p>
            <p className="text-primary-foreground/70 italic text-lg">
              Earn your bun.
            </p>
          </div>

          <div className="text-center text-sm text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} Hot Buns Gym & Bakery. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
