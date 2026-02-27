import { CONTACT_MAILTO, trainingOptions } from "../../content/copy";

function TrainingOptions() {
  return (
    <section className="border-b border-neutral-800 bg-neutral-950 py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Training options</h2>
        <p className="mt-3 max-w-2xl text-neutral-300">
          Choose the coaching format that best fits the athlete's schedule, training age, and
          performance goals.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {trainingOptions.map((option) => (
            <article
              key={option}
              className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6"
            >
              <h3 className="text-lg font-semibold text-ember-300">{option}</h3>
            </article>
          ))}
        </div>

        <a
          href={CONTACT_MAILTO}
          className="mt-10 inline-flex rounded-md bg-ember-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ember-400"
        >
          Enquire about training options
        </a>
      </div>
    </section>
  );
}

export default TrainingOptions;
