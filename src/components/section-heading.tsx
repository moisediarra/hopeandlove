export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  align = "left",
  inverted = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  inverted?: boolean;
}) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={`inline-flex items-center gap-3 font-display text-xs font-bold uppercase tracking-[0.22em] ${
          inverted ? "text-sun-400" : "text-leaf-700"
        }`}
      >
        <span aria-hidden className="h-px w-8 bg-current" />
        {eyebrow}
        {centered && <span aria-hidden className="h-px w-8 bg-current" />}
      </p>
      <h2
        id={id}
        className={`mt-4 text-balance font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] ${
          inverted ? "text-white" : "text-plum-900"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-lg leading-relaxed ${inverted ? "text-plum-100" : "text-muted"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
