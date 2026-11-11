export default function NewsGridSkeleton() {
  return (
    <section className="py-[56px]" aria-hidden="true">
      <div className="container grid grid-cols-3 gap-[22px] max-[1000px]:grid-cols-2 max-[700px]:grid-cols-1">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-[400px] animate-pulse rounded-[20px] border border-[#edf0f3] bg-[#f3f6f9]" />
        ))}
      </div>
    </section>
  );
}
