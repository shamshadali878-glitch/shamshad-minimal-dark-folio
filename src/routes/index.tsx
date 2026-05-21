import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shamshad Ali — Graphic Designer" },
      { name: "description", content: "Hi, I'm Shamshad Ali — a graphic designer crafting impactful brand visuals, logos and social media designs." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 pt-16 sm:pt-24 pb-20 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">
            Hi, I'm
          </p>
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl leading-[0.95]">
            Shamshad
            <br />
            <span className="text-primary italic">Ali.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Graphic Designer — crafting impactful visuals for print and digital. Branding, social media designs and creative identity systems.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              View Portfolio
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
            </Link>
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-secondary transition"
            >
              View Resume
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            <Stat n="6+" label="Years" />
            <Stat n="9" label="Companies" />
            <Stat n="50+" label="Projects" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-primary/10 blur-3xl rounded-full" />
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border bg-card">
            <img src={portrait} alt="Portrait of Shamshad Ali" className="w-full h-full object-cover grayscale-[15%]" />
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
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <p className="font-display text-3xl text-primary">{n}</p>
      <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{label}</p>
    </div>
  );
}
