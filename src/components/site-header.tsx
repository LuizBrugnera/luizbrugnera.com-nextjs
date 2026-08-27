import { whatsappHref } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-[#0c0b0a]/80 backdrop-blur-md">
      <div className="mx-auto flex h-12 max-w-[1280px] items-center justify-between gap-3 px-[5%] md:h-14 md:w-[80%] md:px-0">
        <a
          href="#topo"
          className="min-w-0 truncate text-[13px] font-medium tracking-tight text-[#f3efe6]"
        >
          Luiz Ricardo Brugnera
        </a>
        <div className="flex items-center gap-5 text-[13px]">
          <a
            href="#trabalho"
            className="hidden text-[#9a9488] hover:text-[#f3efe6] sm:inline"
          >
            Trabalho
          </a>
          <a
            href="#experiencia"
            className="hidden text-[#9a9488] hover:text-[#f3efe6] sm:inline"
          >
            Experiência
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c8f5d4] hover:text-white"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
