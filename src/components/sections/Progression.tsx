import { progression } from "../../content/copy";

function Progression() {
  return (
    <section className="border-b border-neutral-800 bg-neutral-950 py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Athlete progression path</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {progression.map((stage, index) => (
            <article key={stage.phase} className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ember-400">
                Step {index + 1}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">{stage.phase}</h3>
              <p className="mt-3 text-sm text-neutral-300">{stage.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Progression;
