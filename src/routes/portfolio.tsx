import { createFileRoute } from "@tanstack/react-router";
import logo1 from "@/assets/logos/logo_1.jpg";
import logo2 from "@/assets/logos/logo_2.jpg";
import logo3 from "@/assets/logos/logo_3.jpg";
import logo4 from "@/assets/logos/logo_4.jpg";
import logo6 from "@/assets/logos/logo_6.jpg";
import logo8 from "@/assets/logos/logo_8.jpg";
import logo9 from "@/assets/logos/logo_9.jpg";
import logo10 from "@/assets/logos/logo_10.jpg";
import logo11 from "@/assets/logos/logo_11.jpg";
import logo13 from "@/assets/logos/logo_13.jpg";
import logo19 from "@/assets/logos/logo_19.jpg";
import logo23 from "@/assets/logos/logo_23.jpg";
import social1 from "@/assets/social/social_1.jpg";
import social2 from "@/assets/social/social_2.jpg";
import social3 from "@/assets/social/social_3.jpg";
import social4 from "@/assets/social/social_4.jpg";
import social6 from "@/assets/social/social_6.jpg";
import car1 from "@/assets/social/carousel_1.jpg";
import car2 from "@/assets/social/carousel_2.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Shamshad Ali" },
      { name: "description", content: "Selected logo design, social media design and carousel work by Shamshad Ali." },
    ],
  }),
  component: PortfolioPage,
});

const logos = [
  { src: logo6, name: "Iqra Online Quran Academy" },
  { src: logo2, name: "Lumina Technologies" },
  { src: logo3, name: "Right Way Property Adviser" },
  { src: logo8, name: "Drive Smartly" },
  { src: logo1, name: "Mangoo Films" },
  { src: logo9, name: "J+Q" },
  { src: logo10, name: "Majeedi Graphics" },
  { src: logo19, name: "Recruitment World" },
  { src: logo4, name: "Foodour.pk" },
  { src: logo23, name: "Al Murtaza Quran Academy" },
  { src: logo13, name: "Zee Fashion" },
  { src: logo11, name: "Sagar Coffee" },
];

const socials = [social1, social2, social3, social4, social6];
const carousels = [car1, car2];

function PortfolioPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20 space-y-24">
      <header>
        <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Portfolio</p>
        <h1 className="font-display text-5xl sm:text-6xl">Selected work.</h1>
        <p className="text-muted-foreground mt-4 max-w-xl">
          A curated mix of brand identities, social media designs and editorial carousels crafted over the past few years.
        </p>
      </header>

      <Section title="Logo Design" count={logos.length}>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {logos.map((l) => (
            <figure key={l.name} className="group relative aspect-square overflow-hidden rounded-xl border border-border bg-card">
              <img src={l.src} alt={l.name} loading="lazy" className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 p-3 text-xs text-muted-foreground bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition">
                {l.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section title="Social Media Design" count={socials.length}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {socials.map((s, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-xl border border-border bg-card">
              <img src={s} alt={`Social media design ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Carousel Design" count={carousels.length}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {carousels.map((c, i) => (
            <div key={i} className="overflow-hidden rounded-xl border border-border bg-card">
              <img src={c} alt={`Carousel ${i + 1}`} loading="lazy" className="w-full h-auto object-cover" />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

function Section({ title, count, children }: { title: string; count: number; children: React.ReactNode }) {
  return (
    <section>
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="font-display text-3xl sm:text-4xl">{title}</h2>
        <span className="text-xs uppercase tracking-widest text-muted-foreground">{count} pieces</span>
      </div>
      {children}
    </section>
  );
}
