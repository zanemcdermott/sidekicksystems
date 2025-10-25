export function FormSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <div className="h-4 w-16 bg-white/10 rounded"></div>
          <div className="h-12 bg-white/5 rounded-lg"></div>
        </div>
        <div className="space-y-2">
          <div className="h-4 w-20 bg-white/10 rounded"></div>
          <div className="h-12 bg-white/5 rounded-lg"></div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <div className="h-4 w-24 bg-white/10 rounded"></div>
          <div className="h-12 bg-white/5 rounded-lg"></div>
        </div>
        <div className="space-y-2">
          <div className="h-4 w-32 bg-white/10 rounded"></div>
          <div className="h-12 bg-white/5 rounded-lg"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-4 w-28 bg-white/10 rounded"></div>
        <div className="h-32 bg-white/5 rounded-lg"></div>
      </div>
      <div className="h-14 bg-white/10 rounded-xl"></div>
    </div>
  );
}

export function ContentSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-3 animate-pulse">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 bg-white/10 rounded"
          style={{ width: `${Math.random() * 30 + 70}%` }}
        ></div>
      ))}
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="bg-[var(--color-surface)]/60 ring-1 ring-white/[0.06] rounded-xl p-6 animate-pulse">
      <div className="space-y-4">
        <div className="h-8 w-32 bg-white/10 rounded"></div>
        <div className="space-y-2">
          <div className="h-4 bg-white/10 rounded w-full"></div>
          <div className="h-4 bg-white/10 rounded w-5/6"></div>
          <div className="h-4 bg-white/10 rounded w-4/6"></div>
        </div>
      </div>
    </div>
  );
}