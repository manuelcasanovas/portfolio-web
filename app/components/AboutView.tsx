"use client";

import Image from "next/image";

export default function AboutView() {
  return (
    <article className="max-w-2xl space-y-8 py-4">
      <header className="space-y-2">
        <h2 className="font-serif text-3xl font-normal text-neutral-900">
          MICAELA BIANCHI
        </h2>
      </header>

      <div className="space-y-6 text-sm text-neutral-700 font-light leading-relaxed">
        <p>
          Trabajos fotográficos y audiovisuales. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis dolorum assumenda voluptatum iste veniam dolore a quia doloremque similique rerum ipsum debitis animi saepe, quasi, illum nesciunt iusto inventore!
        </p>
      </div>

      <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-100 mt-6">
        <Image
          src="/projects/image_bio.png"
          alt="Micaela Bianchi"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </article>
  );
}
