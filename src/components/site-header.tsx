import { whatsappHref } from "@/lib/site";

const nav = [
  { href: "#oferta", label: "Oferta" },
  { href: "#prototipos", label: "Protótipos" },
  { href: "#contato", label: "Contato" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6">
        <a href="#topo" className="min-w-0 truncate text-sm font-semibold tracking-tight sm:text-base">
          Luiz Ricardo Brugnera
        </a>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 shrink-0 items-center rounded-full bg-[#128C7E] px-3 text-xs font-semibold text-white hover:bg-[#0f7a6e] sm:h-10 sm:px-4 sm:text-sm"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
