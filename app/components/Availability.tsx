// Small green "available" signal — the only place green is used
export default function Availability({ className = "" }: { className?: string }) {
  return (
    <p className={`flex items-center gap-1.5 t-small text-avail ${className}`}>
      <span className="dot bg-avail" aria-hidden="true" />
      Open to new projects
    </p>
  );
}
