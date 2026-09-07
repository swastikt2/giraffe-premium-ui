import { createFileRoute } from "@tanstack/react-router";

import heroSculpture from "@/assets/giraffe-hero-sculpture.jpg";
import solaraCampaign from "@/assets/solara-campaign.jpg";
import meridianMotors from "@/assets/meridian-motors.jpg";
import auricSkincare from "@/assets/auric-skincare.jpg";
import giraffeStudio from "@/assets/giraffe-studio.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Giraffe — Advertising & Marketing" },
      { name: "description", content: "Giraffe is an Indian creative studio shaping brands, campaigns, films, and digital experiences that people remember." },
      { property: "og:title", content: "Giraffe — Advertising & Marketing" },
      { property: "og:description", content: "An Indian creative studio shaping brands, campaigns, films, and digital experiences." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GiraffeHome,
});

function GiraffeHome() {
  return (
    <div className="min-h-dvh bg-brand-cream font-sans text-brand-ink antialiased">
      <header className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-7 md:px-14">
        <a href="#top" className="flex items-baseline gap-2" aria-label="Giraffe home">
          <span className="font-display text-2xl tracking-tight">GIRAFFE</span>
          <span className="hidden text-[11px] uppercase tracking-[0.25em] text-brand-clay md:inline">Advertising &amp; Marketing</span>
        </a>
        <nav className="hidden items-center gap-9 text-sm font-medium text-brand-ink/70 md:flex" aria-label="Primary navigation">
          <a href="#work" className="transition-colors hover:text-brand-ink">Work</a>
          <a href="#studio" className="transition-colors hover:text-brand-ink">Studio</a>
          <a href="#capabilities" className="transition-colors hover:text-brand-ink">Services</a>
        </nav>
        <a href="mailto:hello@giraffe.co.in" className="group inline-flex items-center gap-2 rounded-full bg-brand-ink px-5 py-2.5 text-sm font-semibold text-brand-cream shadow-lg shadow-brand-gold/20 transition-colors hover:bg-brand-clay">
          Start a project
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </header>

      <main id="top" className="px-6 md:px-14">
        <section className="relative mx-auto max-w-[1440px] pb-16 pt-6 md:pb-24 md:pt-12" aria-labelledby="hero-title">
          <figure className="pointer-events-none absolute right-0 top-12 hidden w-[clamp(10rem,18vw,17rem)] overflow-hidden rounded-2xl bg-brand-ink/10 shadow-2xl shadow-brand-clay/20 md:block">
            <img src={heroSculpture} alt="" width={1024} height={1280} className="sculpture-drift aspect-[4/5] w-full object-cover object-center mix-blend-multiply" aria-hidden="true" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-brand-ink/70 px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-brand-cream backdrop-blur-sm">The Giraffe mark</figcaption>
          </figure>
          <div className="editorial-rise flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-brand-clay">
            <span className="size-1.5 rounded-full bg-brand-gold" aria-hidden="true" />
            Award-winning creative · Est. 2014 · India
          </div>
          <h1 id="hero-title" className="editorial-rise mt-7 max-w-[980px] font-display text-[clamp(2.75rem,9vw,7.5rem)] uppercase leading-[0.9] [animation-delay:80ms]">
            Storytelling that<br />
            <em className="font-editorial not-italic text-brand-gold">reaches</em><br />
            <span className="text-brand-clay">across every horizon.</span>
          </h1>
          <div className="mt-9 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="editorial-rise max-w-md text-base leading-relaxed text-brand-ink/70 [animation-delay:160ms]">
              A creative studio shaping brands, campaigns, and films for the boldest names in India. We blend strategy with cinema to make audiences stop, feel, and remember.
            </p>
            <div className="editorial-rise flex items-center gap-4 [animation-delay:240ms]">
              <a href="#work" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-ink underline decoration-brand-gold decoration-2 underline-offset-4 transition-colors hover:text-brand-clay">View selected work</a>
              <a href="#work" aria-label="Scroll to selected work" className="grid size-12 place-items-center rounded-full border border-brand-ink/15 text-sm font-medium text-brand-ink/60 transition-colors hover:border-brand-gold hover:text-brand-gold">↓</a>
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-[1440px] scroll-mt-6 py-16 md:py-24" aria-labelledby="work-title">
          <div className="flex items-end justify-between border-b border-brand-line pb-5">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-brand-clay">01 — Selected work</span>
              <h2 id="work-title" className="mt-3 font-display text-4xl uppercase md:text-5xl">Case studies</h2>
            </div>
            <a href="mailto:hello@giraffe.co.in?subject=Portfolio%20request" className="hidden text-sm font-semibold text-brand-ink/60 transition-colors hover:text-brand-ink md:inline">All projects →</a>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <WorkCard image={solaraCampaign} alt="Amber sparkling drink splashing in golden-hour light" name="Solara Sparkling" category="Beverage brand campaign" year="2024" />
            <WorkCard image={meridianMotors} alt="Pearl-white electric car driving beside a sunlit mountain range" name="Meridian Motors" category="Launch film & OOH" year="2023" />
            <WorkCard image={auricSkincare} alt="Amber skincare bottle and cream jar on warm travertine" name="Auric Skincare" category="Identity & e-commerce" year="2024" />
          </div>
        </section>

        <section id="capabilities" className="mx-auto max-w-[1440px] scroll-mt-6 py-16 md:py-24" aria-labelledby="capabilities-title">
          <div className="flex items-end justify-between border-b border-brand-line pb-5">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-brand-clay">02 — What we do</span>
              <h2 id="capabilities-title" className="mt-3 font-display text-4xl uppercase md:text-5xl">Capabilities</h2>
            </div>
          </div>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl bg-brand-line md:grid-cols-2">
            <Capability number="01" title="Brand & Strategy">Positioning, naming, and identity systems that give brands a voice people actually trust.</Capability>
            <Capability number="02" title="Campaign & Film">Cinematic storytelling across TV, digital, and OOH — crafted to travel from city skylines to phone screens.</Capability>
            <Capability number="03" title="Digital & Performance">Paid media, creative testing, and web that turns attention into measurable growth.</Capability>
            <Capability number="04" title="Motion & Design">Motion graphics, 3D, and art direction that give every asset a warm, premium finish.</Capability>
          </div>
        </section>

        <section id="studio" className="mx-auto my-10 max-w-[1440px] scroll-mt-6 md:my-16" aria-label="The Giraffe studio">
          <div className="overflow-hidden rounded-3xl">
            <img src={giraffeStudio} alt="Creative team gathered in a sunlit studio overlooking the city" width={1920} height={912} loading="lazy" className="aspect-[16/7] w-full object-cover object-center" />
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-[1440px] scroll-mt-6 py-16 md:py-24" aria-labelledby="contact-title">
          <div className="relative overflow-hidden rounded-3xl bg-brand-ink px-8 py-14 text-brand-cream md:px-16 md:py-20">
            <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-brand-gold/30 blur-3xl" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 left-10 size-80 rounded-full bg-brand-clay/40 blur-3xl" />
            <div className="relative flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-brand-gold">Let&apos;s talk</span>
                <h2 id="contact-title" className="mt-5 max-w-2xl font-display text-4xl uppercase leading-[0.92] md:text-6xl">Have a brand<br />worth chasing?</h2>
              </div>
              <a href="mailto:hello@giraffe.co.in" className="group inline-flex items-center gap-3 rounded-full bg-brand-gold px-7 py-4 text-base font-semibold text-brand-ink transition-colors hover:bg-brand-cream">
                hello@giraffe.co.in
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-brand-line px-6 py-10 md:px-14">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-xl tracking-tight">GIRAFFE</span>
            <span className="text-[11px] uppercase tracking-[0.25em] text-brand-clay">Advertising &amp; Marketing</span>
          </div>
          <p className="text-sm text-brand-ink/50">© 2026 Giraffe Studio · India</p>
          <div className="flex items-center gap-6 text-sm font-medium text-brand-ink/60">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="transition-colors hover:text-brand-ink">Instagram</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="transition-colors hover:text-brand-ink">LinkedIn</a>
            <a href="mailto:hello@giraffe.co.in" className="transition-colors hover:text-brand-ink">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function WorkCard({ image, alt, name, category, year }: { image: string; alt: string; name: string; category: string; year: string }) {
  return (
    <article className="group">
      <div className="overflow-hidden rounded-2xl bg-brand-sand">
        <img src={image} alt={alt} width={1024} height={1280} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
      </div>
      <div className="mt-4 flex items-center justify-between gap-4">
        <div>
          <h3 className="font-editorial text-xl transition-colors group-hover:text-brand-clay">{name}</h3>
          <p className="text-sm text-brand-ink/55">{category}</p>
        </div>
        <span className="text-xs font-semibold text-brand-gold">{year}</span>
      </div>
    </article>
  );
}

function Capability({ number, title, children }: { number: string; title: string; children: string }) {
  return (
    <article className="bg-brand-cream p-8 md:p-10">
      <span className="text-sm font-semibold text-brand-gold">{number}</span>
      <h3 className="mt-4 font-editorial text-2xl">{title}</h3>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-ink/60">{children}</p>
    </article>
  );
}