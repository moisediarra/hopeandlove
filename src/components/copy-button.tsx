"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

/** Copies a value (phone number, IBAN…) to the clipboard and confirms it for 2 seconds. */
export function CopyButton({
  value,
  label,
  copiedLabel,
}: {
  value: string;
  label: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (old browser, permissions): the value stays visible to copy by hand.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? copiedLabel : `${label} ${value}`}
      className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-plum-200 bg-white px-3 py-1.5 font-display text-xs font-bold text-plum-800 transition-colors hover:bg-plum-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-600"
    >
      {copied ? (
        <Check className="size-3.5 text-leaf-600" aria-hidden />
      ) : (
        <Copy className="size-3.5" aria-hidden />
      )}
      <span aria-live="polite">{copied ? copiedLabel : label}</span>
    </button>
  );
}
