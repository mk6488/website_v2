import { howItWorks } from "../../content/copy";

function HowItWorks() {
  return (
    <section className="border-b border-neutral-800 bg-black py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">How it works</h2>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2">
          {howItWorks.map((step, index) => (
            <li key={step} className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ember-400">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 text-neutral-200">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default HowItWorks;
