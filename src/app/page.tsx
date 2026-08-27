import { Smartphone, MessageCircle, Megaphone, Wrench } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import {
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  experience,
  landings,
  whatsappHref,
} from "@/lib/site";

const offer = [
  {
    icon: Smartphone,
    title: "Abre no celular",
    body: "A página é feita para o polegar. Quem vem do Instagram ou do anúncio vê o essencial sem pinçar zoom.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp na cara",
    body: "Botão visível, inclusive fixo. O clique abre a conversa — reserva, pedido ou agendamento.",
  },
  {
    icon: Megaphone,
    title: "Pronta para anúncio",
    body: "Landing enxuta para Instagram e tráfego pago: o visitante cai, entende o negócio e fala com você.",
  },
  {
    icon: Wrench,
    title: "Sites e sistemas simples",
    body: "Além da landing, monto sites institucionais e sistemas pequenos para o dia a dia do negócio local.",
  },
];

export default function Home() {
  return (
    <div id="topo" className="flex min-h-screen flex-col pb-24">
      <SiteHeader />

      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#128C7E]">
            Passo Fundo / RS · região · São Paulo
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Landing que abre no celular, WhatsApp na cara, pronta para anúncio.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Sou o Luiz Ricardo Brugnera. Faço landing pages mobile-first para
            negócios locais — hotel, restaurante, clínica, estética, construtora
            — pensadas para Instagram e tráfego pago. Também faço sites e
            sistemas simples.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#128C7E] px-6 text-base font-semibold text-white hover:bg-[#0f7a6e]"
            >
              Falar no WhatsApp
            </a>
            <a
              href="#prototipos"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background px-6 text-base font-semibold hover:bg-muted"
            >
              Ver {landings.length} protótipos
            </a>
          </div>
        </section>

        <section id="oferta" className="scroll-mt-20 border-t border-border py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              O que o negócio ganha
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Uma página que substitui site morto, antigo ou inexistente. Sem
              blog, sem labirinto: o visitante entende e chama no WhatsApp.
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {offer.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                >
                  <item.icon className="h-6 w-6 text-[#128C7E]" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <PortfolioGrid />

        <section className="border-t border-border py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Também sites e sistemas pequenos
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              A landing é o caminho mais rápido para quem precisa aparecer no
              celular e atender no WhatsApp. Se o negócio pede um site maior ou
              um sistema simples — agenda, pedidos, painel interno — eu monto
              isso também. Combinamos o escopo no WhatsApp, sem pacote genérico
              nesta página.
            </p>
          </div>
        </section>

        <section
          id="experiencia"
          className="scroll-mt-20 border-t border-border bg-muted/40 py-16 sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#128C7E]">
              Experiência
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Onde trabalha
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Em 2025–2026 esteve na Tissage e na Zeeway. Hoje segue só na
              Tissage.
            </p>
            <ul className="mt-10 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
              {experience.map((item) => (
                <li
                  key={item.company}
                  className="flex flex-col gap-1 px-5 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                >
                  <p className="text-lg font-semibold tracking-tight">
                    {item.company}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {item.period}
                    {item.current ? (
                      <span className="ml-2 font-semibold text-[#128C7E]">
                        atual
                      </span>
                    ) : null}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="contato"
          className="scroll-mt-20 border-t border-border bg-[#111110] py-16 text-[#f4f1ea] sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Manda o Instagram do negócio. Eu devolvo a landing no celular.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#c9c3b5]">
              Atendo Passo Fundo, a região e São Paulo. O próximo passo é uma
              conversa no WhatsApp.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#25D366] px-6 text-base font-semibold text-[#073b1a] hover:bg-[#20bd5a]"
            >
              Chamar no WhatsApp
            </a>
            <p className="mt-6 text-sm text-[#9a9488]">
              E-mail:{" "}
              <a href={`mailto:${EMAIL}`} className="underline hover:text-[#f4f1ea]">
                {EMAIL}
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Luiz Ricardo Brugnera</p>
          <div className="flex gap-4">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
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
