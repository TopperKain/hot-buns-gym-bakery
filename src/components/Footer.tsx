import { InstagramLogo, XLogo, FacebookLogo } from '@phosphor-icons/react'

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex gap-6">
            <a 
              href="#" 
              className="hover:text-secondary transition-colors duration-300"
              aria-label="Instagram"
            >
              <InstagramLogo className="w-8 h-8" weight="fill" />
            </a>
            <a 
              href="#" 
              className="hover:text-secondary transition-colors duration-300"
              aria-label="X (Twitter)"
            >
              <XLogo className="w-8 h-8" weight="fill" />
            </a>
            <a 
              href="#" 
              className="hover:text-secondary transition-colors duration-300"
              aria-label="Facebook"
            >
              <FacebookLogo className="w-8 h-8" weight="fill" />
            </a>
          </div>

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
