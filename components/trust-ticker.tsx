"use client"

export function TrustTicker() {
  const stats = [
    { icon: "✅", text: "$15M+ Revenue (On-Chain Verified)" },
    { icon: "👥", text: "33,000,000+ Users" },
    { icon: "🏆", text: "#2 Telegram Grossing App" },
    { icon: "👛", text: "5M+ Connected Wallets" },
  ]

  return (
    <div className="w-full border-y border-border/50 bg-card/50 backdrop-blur-sm py-6 overflow-hidden">
      <div className="flex animate-[scroll_30s_linear_infinite]">
        {/* Duplicate for seamless loop */}
        {[...stats, ...stats].map((stat, index) => (
          <div key={index} className="flex items-center gap-3 px-8 whitespace-nowrap text-sm md:text-base font-mono">
            <span className="text-2xl">{stat.icon}</span>
            <span className="text-muted-foreground">{stat.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
