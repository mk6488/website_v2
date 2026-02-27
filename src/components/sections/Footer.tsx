import { CONTACT_EMAIL, CONTACT_MAILTO } from "../../content/copy";

function Footer() {
  return (
    <footer className="bg-neutral-950 py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <div>
          <p className="text-sm uppercase tracking-[0.16em] text-ember-400">K Performance</p>
          <p className="mt-2 text-sm text-neutral-400">
            Youth athlete performance and long-term development coaching.
          </p>
        </div>
        <a
          href={CONTACT_MAILTO}
          className="inline-flex w-fit rounded-md border border-neutral-700 px-5 py-3 text-sm font-semibold text-neutral-100 transition hover:border-ember-400 hover:text-ember-300"
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
