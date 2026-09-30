import Image from "next/image";
import logoMark from "../../public/brand/logo-mark.png";

/** The circular emblem (hands, figures and arc) on a transparent background. */
export function BrandMark({ className = "" }: { className?: string }) {
  return <Image src={logoMark} alt="" sizes="96px" className={className} />;
}

/** "HOPE AND LOVE" set like the logo, followed by a small TV badge. Font size is inherited. */
export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <span
      className={`flex items-center gap-1.5 font-display font-extrabold leading-none tracking-tight ${
        inverted ? "text-white" : "text-plum-900"
      }`}
    >
      HOPE
      <span
        className={`border-y-[1.5px] px-px py-[2px] text-[0.55em] font-bold leading-none ${
          inverted ? "border-white" : "border-plum-900"
        }`}
      >
        AND
      </span>
      LOVE
      <span className="ml-1 rounded-md bg-sun-500 px-1.5 py-[3px] text-[0.6em] font-extrabold tracking-wide text-plum-950">
        TV
      </span>
    </span>
  );
}
