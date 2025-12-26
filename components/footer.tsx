import { Twitter, Send, Youtube, ShoppingBag, Facebook, Instagram } from "lucide-react"

export function Footer() {
  const partners = [
    { name: "Notcoin", url: "https://t.me/notcoin" },
    { name: "Blum", url: "https://t.me/blum" },
    { name: "Paws", url: "https://t.me/PAWSOG_bot" },
    { name: "Cats", url: "https://t.me/Cats_housewtf" },
    { name: "TON", url: "https://ton.org" },
  ]

  const socialLinks = [
    { icon: Twitter, url: "https://x.com/bums_official", label: "Twitter" },
    { icon: Send, url: "https://t.me/bums_official", label: "Telegram" },
    { icon: Youtube, url: "https://youtube.com/@bums_corner", label: "YouTube" },
    { icon: ShoppingBag, url: "https://bums.store/", label: "Bums Market" },
    { icon: Facebook, url: "https://facebook.com/bums.official", label: "Facebook" },
    { icon: Instagram, url: "https://instagram.com/bums.corner", label: "Instagram" },
  ]

  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Partners */}
        <div className="mb-16">
          <h3 className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider">Trusted Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-muted-foreground/50 hover:text-primary transition-colors cursor-pointer"
              >
                {partner.name}
              </a>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass-morphism flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-colors group"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
            </a>
          ))}
        </div>

        {/* Additional Links */}
        <div className="text-center mb-8">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a
              href="https://coinmarketcap.com/community/profile/bums_corner/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              CoinMarketCap
            </a>
            <span className="text-muted-foreground/30">•</span>
            <a
              href="https://tiktok.com/@bums_corner"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              TikTok
            </a>
            <span className="text-muted-foreground/30">•</span>
            <span className="text-muted-foreground">
              <span className="text-primary">Top 2</span> Grossing Apps
            </span>
          </div>
        </div>

        {/* Legal & Brand */}
        <div className="text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Use
            </a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">
              AI Ethics Statement
            </a>
          </div>
          <div className="text-sm text-muted-foreground">
            <span className="text-primary glow-text">BUMS 2.0</span> © 2025. Building the future of intelligent digital
            beings.
          </div>
        </div>
      </div>
    </footer>
  )
}
