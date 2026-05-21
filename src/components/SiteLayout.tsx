import { Outlet } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#resume", label: "Resume" },
] as const;

export function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#home" className="font-display text-xl tracking-tight font-semibold">
            Shamshad<span className="text-primary">.</span>
          </a>
          <nav className="flex gap-1 sm:gap-2 text-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-md text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border mt-24">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Shamshad Ali. Graphic Designer.</p>
          <p>Rawalpindi, Pakistan · shamshadali878@gmail.com</p>
        </div>
      </footer>

      <a
        href="https://wa.me/923479580079"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-2 bg-[#25D366] text-white rounded-full shadow-lg shadow-black/40 hover:shadow-xl transition-all hover:scale-105 pl-4 pr-5 py-3"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-sm font-medium hidden sm:inline">0347 9580079</span>
      </a>
    </div>
  );
}
