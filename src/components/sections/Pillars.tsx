import { pillars } from "../../content/copy";

function Pillars() {
  return (
    <section className="border-b border-neutral-800 bg-neutral-950 py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Core coaching pillars</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6"
            >
              <h3 className="text-xl font-semibold text-ember-300">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pillars;
