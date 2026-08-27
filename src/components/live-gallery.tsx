import { landings } from "@/lib/site";
import { LiveWebView } from "@/components/live-webview";

export function LiveGallery() {
  return (
    <section id="trabalho" className="scroll-mt-16">
      <div className="mx-auto w-[90%] max-w-[1280px] pb-6 pt-8 md:w-[80%] md:pt-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#8a8376]">
          Protótipos / demos
        </p>
        <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-[#f3efe6] sm:text-4xl">
          Não são clientes. São páginas que eu monto para o dono ver no telefone.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-[#b7b0a3]">
          Cada uma abaixo é a landing ao vivo. Rola por dentro. Se o iframe
          travar, o botão abre o site.
        </p>
      </div>

      {landings.map((landing, index) => (
        <article
          key={landing.slug}
          id={landing.slug}
          className="py-14 md:py-24"
        >
          <div className="mx-auto w-[90%] max-w-[1280px] md:w-[80%]">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8a8376]">
              {landing.niche}
            </p>
            <h3 className="mt-2 font-serif text-3xl leading-tight text-[#f3efe6] sm:text-4xl">
              {landing.name}
            </h3>
            <p className="mt-1 text-sm text-[#8a8376]">{landing.city}</p>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#d2ccc0] sm:text-base">
              {landing.caption}
            </p>
            <div className="mt-7 md:mt-9">
              <LiveWebView landing={landing} eager={index < 2} />
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
