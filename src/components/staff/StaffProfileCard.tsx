export function StaffProfileCard() {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-3">
        <span className="flex size-12 items-center justify-center rounded-full bg-gradient-to-b from-gold-bright to-gold-deep font-medium uppercase text-dark">
          K
        </span>
        <div className="space-y-0.5 uppercase">
          <h2 className="font-roboto text-sm font-medium tracking-[0.06em] text-foreground">
            Katherine M.
          </h2>
          <p className="font-roboto text-xs tracking-[0.06em] text-secondary">
            Senior Operative
          </p>
        </div>
      </div>
      <span className="size-2 rounded-full bg-teal shadow-[var(--shadow-glow-teal)]" />
    </div>
  );
}
