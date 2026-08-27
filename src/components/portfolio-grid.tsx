import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { landings } from "@/lib/site";

export function PortfolioGrid() {
  return (
    <section id="prototipos" className="scroll-mt-20 border-t border-border bg-muted/40 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#128C7E]">
          Protótipos / demos
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Landings que eu monto para o negócio ver no celular
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Estes não são cases de contrato nem empresas que me contrataram. São
          protótipos e demos: a página que o dono do negócio abre no telefone,
          com WhatsApp na cara, no lugar de site morto, antigo ou inexistente.
        </p>

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {landings.map((landing) => (
            <li key={landing.slug}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <a
                  href={landing.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-[1200/630] overflow-hidden bg-muted"
                >
                  <Image
                    src={landing.image}
                    alt={`Preview da landing ${landing.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </a>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {landing.city} · {landing.niche}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold tracking-tight">
                    {landing.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {landing.result}
                  </p>
                  <a
                    href={landing.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#128C7E] hover:underline"
                  >
                    Ver demo ao vivo
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
