import { createFileRoute } from "@tanstack/react-router";
import aboutHero from "@/assets/about-hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Shamshad Ali" },
      { name: "description", content: "About Shamshad Ali — graphic designer specialising in branding, social media and print design." },
    ],
  }),
  component: AboutPage,
});

const services = [
  "Logo Design",
  "Social Media Design",
  "Web Design",
  "Print Media Design",
];

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

function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20 space-y-24">
      <section className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square rounded-2xl overflow-hidden border border-border order-2 lg:order-1">
          <img src={aboutHero} alt="Shamshad Ali" className="w-full h-full object-cover" />
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">About</p>
          <h1 className="font-display text-5xl sm:text-6xl mb-6">A designer with a sharp eye.</h1>
          <p className="text-muted-foreground leading-relaxed">
            I'm a results-driven graphic designer creating impactful visuals for both print and digital platforms. I specialize in branding, social media designs and creative solutions that help businesses stand out and connect with their audience.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            My approach combines creativity, problem-solving, and attention to detail — ensuring every project reflects both the client's vision and market needs. From logos and posters to social media campaigns and user-friendly interfaces, I focus on designs that are visually appealing and effective in communication.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-4xl mb-8">What I do</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s) => (
            <div key={s} className="border border-border rounded-xl p-6 bg-card hover:border-primary/40 transition">
              <p className="font-medium">{s}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-4xl mb-8">Tools I use</h2>
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
      </section>

      <section>
        <h2 className="font-display text-4xl mb-8">Work experience</h2>
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
      </section>
    </div>
  );
}
