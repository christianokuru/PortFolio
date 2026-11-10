import { TECH_DOTS } from "@/data/site";

const DOTS = TECH_DOTS as Record<string, string>;

export default function Tag({ label }: { label: string }) {
  return (
    <span className="tag">
      <span className="dot" style={{ backgroundColor: DOTS[label] === "#000000" ? "currentColor" : DOTS[label] ?? "#878787" }} aria-hidden="true" />
      {label}
    </span>
  );
}
