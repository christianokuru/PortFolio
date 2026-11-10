"use client";

import { useState } from "react";

type Item = { q: string; a: string };

export default function Faq({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <ul>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.q} className="border-b border-line first:border-t lg:border-none">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-4 text-left lg:py-5"
              aria-expanded={isOpen}
            >
              <span className="t-body">{item.q}</span>
              <span
                className={`grid h-6 w-6 shrink-0 place-items-center rounded-full bg-paper transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden="true"
              >
                <svg width="8" height="8" viewBox="0 0 8 8">
                  <path d="M4 0v8M0 4h8" stroke="currentColor" strokeWidth="1" />
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="t-body max-w-[52ch] pb-5 text-quiet">{item.a}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
