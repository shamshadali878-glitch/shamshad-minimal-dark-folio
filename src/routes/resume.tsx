import { createFileRoute } from "@tanstack/react-router";
import { Download, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Shamshad Ali" },
      { name: "description", content: "View and download Shamshad Ali's graphic design resume." },
    ],
  }),
  component: ResumePage,
});

const RESUME = "/shamshad-ali-resume.pdf";

function ResumePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
      <header className="flex flex-wrap items-end justify-between gap-6 mb-10">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Resume</p>
          <h1 className="font-display text-5xl sm:text-6xl">Shamshad Ali</h1>
          <p className="text-muted-foreground mt-3">Graphic Designer · Rawalpindi, Pakistan</p>
        </div>
        <div className="flex gap-3">
          <a
            href={RESUME}
            download
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
          >
            <Download className="w-4 h-4" /> Download
          </a>
          <a
            href={RESUME}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-secondary transition"
          >
            <ExternalLink className="w-4 h-4" /> Open in new tab
          </a>
        </div>
      </header>

      <div className="rounded-2xl overflow-hidden border border-border bg-card">
        <object
          data={RESUME}
          type="application/pdf"
          className="w-full h-[80vh] min-h-[600px]"
        >
          <iframe
            src={RESUME}
            title="Shamshad Ali Resume"
            className="w-full h-[80vh] min-h-[600px]"
          />
        </object>
      </div>
    </div>
  );
}
