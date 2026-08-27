"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { displayUrl, type LandingDemo } from "@/lib/site";

type LiveWebViewProps = {
  landing: LandingDemo;
  eager?: boolean;
};

export function LiveWebView({ landing, eager = false }: LiveWebViewProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(eager);
  const [iframeFailed, setIframeFailed] = useState(false);
  const [iframeReady, setIframeReady] = useState(false);

  useEffect(() => {
    if (shouldLoad) return;
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "640px 0px", threshold: 0.01 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldLoad]);

  const showPoster = iframeFailed || !iframeReady;

  return (
    <div
      ref={rootRef}
      className="flex h-[80vh] flex-col overflow-hidden rounded-xl border border-white/[0.12] bg-[#141210] shadow-[0_24px_80px_-32px_rgba(0,0,0,0.8)] md:h-[75vh]"
    >
      <div className="flex shrink-0 flex-col gap-1 border-b border-white/[0.08] bg-[#1c1a17] px-3 py-2 sm:flex-row sm:items-center sm:gap-3 sm:px-3 sm:py-2">
        <p className="min-w-0 truncate text-[11px] font-medium tracking-wide text-[#cfc8bb] sm:max-w-[28%] sm:text-xs">
          {landing.name}
          <span className="text-[#7d776c]"> · {landing.city}</span>
        </p>
        <a
          href={landing.url}
          target="_blank"
          rel="noopener noreferrer"
          title={landing.url}
          className="order-last min-w-0 flex-1 truncate rounded-md bg-black/40 px-2.5 py-1 font-mono text-[11px] text-[#9a9488] hover:text-[#e8e2d6] sm:order-none sm:text-center"
        >
          {displayUrl(landing.url)}
        </a>
        <a
          href={landing.url}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 self-start rounded-md bg-[#ece7dc] px-2.5 py-1 text-[11px] font-semibold text-[#161412] hover:bg-white sm:self-auto sm:text-xs"
        >
          Abrir no site
        </a>
      </div>

      <div className="relative min-h-0 flex-1 bg-[#0c0b0a]">
        {showPoster ? (
          <div className="absolute inset-0">
            <Image
              src={landing.image}
              alt={`Preview de ${landing.name}`}
              fill
              sizes="(max-width: 768px) 90vw, 80vw"
              className="object-cover object-top"
              priority={eager}
            />
            {iframeFailed ? (
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5">
                <a
                  href={landing.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-[#ece7dc] px-3 py-2 text-sm font-semibold text-[#161412]"
                >
                  Abrir no site
                </a>
              </div>
            ) : null}
          </div>
        ) : null}

        {shouldLoad && !iframeFailed ? (
          <iframe
            src={landing.url}
            title={`Landing ${landing.name}`}
            loading={eager ? "eager" : "lazy"}
            referrerPolicy="no-referrer-when-downgrade"
            className={`absolute inset-0 h-full w-full border-0 bg-[#0c0b0a] ${
              iframeReady ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setIframeReady(true)}
            onError={() => setIframeFailed(true)}
          />
        ) : null}
      </div>
    </div>
  );
}
