"use client";

export default function AboutView() {
  return (
    <article className="max-w-2xl space-y-8 py-4">
      {/* <header className="space-y-2">
        <h2 className="font-serif text-2xl font-normal text-neutral-900">
          Micaela Bianchi
        </h2>
      </header> */}

      <div className="space-y-6 text-sm text-neutral-700 font-light leading-relaxed">
        <p>
          Trabajos fotográficos y audiovisuales. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit omnis dolorum assumenda voluptatum iste veniam dolore a quia doloremque similique rerum ipsum debitis animi saepe, quasi, illum nesciunt iusto inventore!
        </p>
      </div>

      <div className="w-full overflow-hidden mt-6">
        <img
          src="/projects/image_bio.png"
          alt="Micaela Bianchi"
          className="w-full h-auto block object-contain"
        />
      </div>
    </article>
  );
}
