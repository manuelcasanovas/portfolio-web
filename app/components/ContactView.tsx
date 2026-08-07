"use client";

export default function ContactView() {
  return (
    <article className="max-w-xl space-y-8 py-4">
      <header className="space-y-2">
        <h2 className="font-serif text-3xl font-normal text-neutral-900">
          Contacto
        </h2>
      </header>

      <div className="space-y-6 text-sm text-neutral-700 font-light leading-relaxed">

        <div className="space-y-2 font-mono text-xs">
          <p>
            <span className="text-neutral-400">Email:</span>{" "}
            <a
              href="mailto:[EMAIL_ADDRESS]"
              className="text-neutral-900 underline underline-offset-4"
            >
              [EMAIL_ADDRESS]
            </a>
          </p>
          <p>
            <span className="text-neutral-400">Ubicación:</span> Mar del plata, Argentina
          </p>
          <p>
            <span className="text-neutral-400">Instagram:</span>{" "}
            <a
              href="https://instagram.com/micsbianchi"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-900 underline underline-offset-4"
            >
              @micsbianchi
            </a>
          </p>
        </div>
      </div>
    </article>
  );
}
