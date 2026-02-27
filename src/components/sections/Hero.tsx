import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { heroCopy, mailto } from "../../content/copy";

const EnergyLinesHero = lazy(() => import("../three/EnergyLinesHero"));

function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [shouldLoadScene, setShouldLoadScene] = useState(false);
  const prefersReducedMotion = useReducedMotion() ?? false;

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadScene(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin: "320px 0px", threshold: 0.01 },
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-screen overflow-hidden border-b border-neutral-800"
      aria-label="Hero"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black" />
      <div className="absolute inset-0 z-10">
        {prefersReducedMotion ? (
          <div
            className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.25),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(251,146,60,0.18),transparent_35%)]"
            aria-hidden
          />
        ) : shouldLoadScene ? (
          <Suspense
            fallback={
              <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.22),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(251,146,60,0.16),transparent_35%)]" />
            }
          >
            <EnergyLinesHero />
          </Suspense>
        ) : (
          <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.22),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(251,146,60,0.16),transparent_35%)]" />
        )}
      </div>
      <div
        className="pointer-events-none absolute inset-0 z-20 bg-black/30 backdrop-blur-[1px]"
        aria-hidden
      />

      <div className="relative z-30 mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-24 sm:px-10">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={prefersReducedMotion ? false : { opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? undefined : { duration: 0.55, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-ember-300">
            {heroCopy.eyebrow}
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            {heroCopy.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base text-neutral-300 sm:text-lg">
            {heroCopy.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={mailto(heroCopy.primaryCta.subject, heroCopy.primaryCta.body)}
              className="rounded-md bg-ember-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ember-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              {heroCopy.primaryCta.label}
            </a>
            <a
              href={mailto(heroCopy.secondaryCta.subject, heroCopy.secondaryCta.body)}
              className="rounded-md border border-neutral-600 px-6 py-3 text-sm font-semibold text-neutral-100 transition hover:border-ember-400 hover:text-ember-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              {heroCopy.secondaryCta.label}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
