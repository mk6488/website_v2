import { forWho } from "../../content/copy";

function ForWho() {
  return (
    <section className="border-b border-neutral-800 bg-black py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Who this is for</h2>
        <ul className="mt-8 space-y-4">
          {forWho.map((item) => (
            <li key={item} className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-5">
              <p className="text-neutral-200">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ForWho;
