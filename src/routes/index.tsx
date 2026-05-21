import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import aboutHero from "@/assets/about-hero.jpg";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shamshad Ali — Graphic Designer Portfolio" },
      { name: "description", content: "Graphic designer based in Rawalpindi, specializing in branding, logo design, social media designs and creative visual identity." },
    ],
  }),
  component: HomePage,
});


const services = ["Logo Design", "Social Media Design", "Web Design", "Print Media Design"];

const tools = [
  { name: "Adobe Illustrator", level: 95 },
  { name: "Adobe Photoshop", level: 95 },
  { name: "Figma", level: 85 },
  { name: "Canva", level: 80 },
  { name: "Adobe InDesign", level: 75 },
  { name: "Adobe Premiere Pro", level: 60 },
  { name: "Google Workspace", level: 70 },
];

const experience = [
  { role: "Graphic Designer", co: "Techexa", time: "Mar 2026 – Present", type: "Onsite" },
  { role: "Graphic Designer", co: "Lumina Technologies", time: "Aug 2024 – Present", type: "Freelance" },
  { role: "Graphic Designer", co: "VisaQuick", time: "Jan 2024 – Dec 2025", type: "Onsite" },
  { role: "Graphic Designer", co: "14-News-HD", time: "Jul 2024 – Feb 2025", type: "Freelance" },
  { role: "Graphic Designer", co: "R&A Solicitors", time: "Jan 2024 – May 2024", type: "Freelance" },
  { role: "Graphic Designer", co: "Al-Ahad-IINA", time: "Nov 2022 – Dec 2023", type: "Freelance" },
  { role: "Graphic Designer", co: "AMOQA", time: "Jan 2021 – Aug 2022", type: "Freelance" },
  { role: "Graphic Designer", co: "Recruitment World", time: "Feb 2021 – Dec 2024", type: "Freelance" },
  { role: "Graphic Designer", co: "DigitalBaba", time: "Jan 2020 – Nov 2021", type: "Onsite" },
];

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

function HomePage() {
  return (
    <div className="scroll-smooth">
      {/* HERO */}
      <section id="home" className="relative overflow-hidden scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6 pt-16 sm:pt-24 pb-20 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Hi, I'm</p>
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl leading-[0.95] font-semibold tracking-tight">
              Shamshad
              <br />
              <span className="text-primary">Ali.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Graphic Designer — crafting impactful visuals for print and digital. Branding, social media designs and creative identity systems.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#portfolio" className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition">
                View Portfolio
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              <Stat n="5+" label="Years" />
              <Stat n="9" label="Companies" />
              <Stat n="50+" label="Projects" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-primary/10 blur-3xl rounded-full" />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border bg-card">
              <img src={portrait} alt="Portrait of Shamshad Ali" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
                <div>
                  <p className="text-xs text-muted-foreground">Based in</p>
                  <p className="text-sm">Rawalpindi, Pakistan</p>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                  Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-20 max-w-6xl mx-auto px-6 py-20 space-y-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-border order-2 lg:order-1">
            <img src={aboutHero} alt="Shamshad Ali" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">About</p>
            <h2 className="font-display text-5xl sm:text-6xl font-semibold tracking-tight mb-6">A designer with a sharp eye.</h2>
            <p className="text-muted-foreground leading-relaxed">
              I'm a results-driven graphic designer creating impactful visuals for both print and digital platforms. I specialize in branding, social media designs and creative solutions that help businesses stand out and connect with their audience.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              My approach combines creativity, problem-solving, and attention to detail — ensuring every project reflects both the client's vision and market needs.
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-display text-4xl font-semibold tracking-tight mb-8">What I do</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s) => (
              <div key={s} className="border border-border rounded-xl p-6 bg-card hover:border-primary/40 transition">
                <p className="font-medium">{s}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-4xl font-semibold tracking-tight mb-8">Tools I use</h3>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
            {tools.map((t) => (
              <div key={t.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span>{t.name}</span>
                  <span className="text-muted-foreground">{t.level}%</span>
                </div>
                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${t.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-4xl font-semibold tracking-tight mb-8">Work experience</h3>
          <ol className="relative border-l border-border ml-3 space-y-8">
            {experience.map((e) => (
              <li key={e.co} className="pl-6 relative">
                <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-primary" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <p className="font-medium">{e.role} · <span className="text-primary">{e.co}</span></p>
                    <p className="text-sm text-muted-foreground">{e.time}</p>
                  </div>
                  <span className="text-xs uppercase tracking-wider px-2.5 py-1 rounded-full border border-border text-muted-foreground">
                    {e.type}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="scroll-mt-20 max-w-6xl mx-auto px-6 py-20 space-y-20">
        <header>
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Portfolio</p>
          <h2 className="font-display text-5xl sm:text-6xl font-semibold tracking-tight">Selected work.</h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            A curated mix of brand identities, social media designs and editorial carousels crafted over the past few years.
          </p>
        </header>

        <Subsection title="Logo Design" count={logos.length}>
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
        </Subsection>

        <Subsection title="Social Media Design" count={socials.length}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {socials.map((s, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-xl border border-border bg-card">
                <img src={s} alt={`Social media design ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </Subsection>

        <Subsection title="Carousel Design" count={carousels.length}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {carousels.map((c, i) => (
              <div key={i} className="overflow-hidden rounded-xl border border-border bg-card">
                <img src={c} alt={`Carousel ${i + 1}`} loading="lazy" className="w-full h-auto object-cover" />
              </div>
            ))}
          </div>
        </Subsection>
      </section>

    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <p className="font-display text-3xl text-primary font-semibold">{n}</p>
      <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{label}</p>
    </div>
  );
}

function Subsection({ title, count, children }: { title: string; count: number; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-6">
        <h3 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">{title}</h3>
        <span className="text-xs uppercase tracking-widest text-muted-foreground">{count} pieces</span>
      </div>
      {children}
    </div>
  );
}
