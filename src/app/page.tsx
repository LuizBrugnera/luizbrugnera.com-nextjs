import { SiteHeader } from "@/components/site-header";
import { LiveGallery } from "@/components/live-gallery";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import {
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  experience,
  landings,
  whatsappHref,
} from "@/lib/site";

export default function Home() {
  return (
    <div id="topo" className="flex min-h-screen flex-col pb-24">
      <SiteHeader />

      <main className="flex-1">
        <section className="mx-auto w-[90%] max-w-[1280px] pb-20 pt-16 md:w-[80%] md:pb-28 md:pt-28">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#8a8376]">
            Passo Fundo / RS
          </p>
          <h1 className="mt-5 max-w-3xl font-serif text-[2.35rem] leading-[1.12] text-[#f3efe6] sm:text-5xl md:text-[3.35rem]">
            Eu monto a página que o anúncio deveria abrir.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#cfc8bb]">
            Sou o Luiz Ricardo Brugnera. Hotel, churrascaria, clínica, estética,
            construtora: a landing cai no celular, o WhatsApp está na cara.
            Instagram e tráfego pago.
          </p>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#8a8376]">
            Também faço site e sistema pequeno, se o negócio pedir.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#25D366] px-6 text-[15px] font-semibold text-[#073b1a] hover:bg-[#20bd5a]"
            >
              Falar no WhatsApp
            </a>
            <a
              href="#trabalho"
              className="inline-flex h-12 items-center justify-center px-2 text-[15px] text-[#cfc8bb] underline decoration-[#3a3732] underline-offset-4 hover:text-[#f3efe6]"
            >
              Ver {landings.length} protótipos ao vivo
            </a>
          </div>
        </section>

        <LiveGallery />

        <section
          id="experiencia"
          className="scroll-mt-16 border-t border-white/[0.06] py-20 md:py-28"
        >
          <div className="mx-auto w-[90%] max-w-[1280px] md:w-[80%]">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#8a8376]">
              Experiência
            </p>
            <h2 className="mt-3 font-serif text-3xl text-[#f3efe6] sm:text-4xl">
              Onde trabalho
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#b7b0a3]">
              Em 2025–2026 estive na Tissage e na Zeeway. Hoje sigo só na
              Tissage.
            </p>
            <ul className="mt-10 max-w-lg">
              {experience.map((item) => (
                <li
                  key={item.company}
                  className="flex items-baseline justify-between gap-4 border-t border-white/[0.08] py-4 first:border-t-0"
                >
                  <span className="font-serif text-2xl text-[#f3efe6]">
                    {item.company}
                  </span>
                  <span className="font-mono text-xs text-[#8a8376]">
                    {item.period}
                    {item.current ? (
                      <span className="ml-2 text-[#c8f5d4]">atual</span>
                    ) : null}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="contato"
          className="scroll-mt-16 border-t border-white/[0.06] py-20 md:py-28"
        >
          <div className="mx-auto w-[90%] max-w-[1280px] md:w-[80%]">
            <h2 className="max-w-2xl font-serif text-3xl leading-tight text-[#f3efe6] sm:text-4xl">
              Se o negócio precisa disso, me chama.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-[#b7b0a3]">
              Estou em Passo Fundo. Atendo a região e São Paulo. O próximo passo
              é o WhatsApp.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#25D366] px-6 text-[15px] font-semibold text-[#073b1a] hover:bg-[#20bd5a]"
            >
              Chamar no WhatsApp
            </a>
            <p className="mt-6 text-sm text-[#8a8376]">
              E-mail:{" "}
              <a href={`mailto:${EMAIL}`} className="text-[#cfc8bb] hover:text-white">
                {EMAIL}
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.06] py-8">
        <div className="mx-auto flex w-[90%] max-w-[1280px] flex-col gap-4 text-sm text-[#8a8376] md:w-[80%] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Luiz Ricardo Brugnera</p>
          <div className="flex gap-4">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f3efe6]"
            >
              GitHub
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f3efe6]"
            >
              LinkedIn
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f3efe6]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>

      <StickyWhatsApp />
    </div>
  );
}
