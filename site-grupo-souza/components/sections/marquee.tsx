const ITEMS = [
  "Google Ads",
  "Meta Ads",
  "GTM",
  "GA4",
  "Next.js",
  "Supabase",
  "n8n",
  "AIEO/GEO",
  "Tailwind",
  "Vercel",
  "CRM",
  "Lead Scoring",
];

export function Marquee() {
  return (
    <div className="overflow-hidden relative py-8 border-y border-white/5">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050505] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050505] to-transparent z-10" />
      <div className="flex w-[200%] animate-marquee">
        {[0, 1].map((group) => (
          <div
            key={group}
            className="flex justify-around items-center w-1/2 gap-12 px-6"
          >
            {ITEMS.map((item) => (
              <span
                key={`${group}-${item}`}
                className="text-sm font-medium text-neutral-600 whitespace-nowrap font-mono tracking-wider"
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
