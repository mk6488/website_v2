import { testimonials } from "../../content/copy";

function Testimonials() {
  return (
    <section className="border-b border-neutral-800 bg-black py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">What athletes and parents say</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {testimonials.map((item) => (
            <blockquote
              key={item.author}
              className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6"
            >
              <p className="text-neutral-200">"{item.quote}"</p>
              <footer className="mt-4 text-sm font-semibold text-ember-300">{item.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
