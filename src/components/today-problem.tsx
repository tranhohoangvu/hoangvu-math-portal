import { useMemo, useState } from "react";
import { Eye, EyeOff, RefreshCw } from "lucide-react";
import { PROBLEMS } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function TodayProblem() {
  const seed = useMemo(() => {
    const d = new Date();
    return d.getFullYear() * 400 + d.getMonth() * 32 + d.getDate();
  }, []);
  const [index, setIndex] = useState(seed % PROBLEMS.length);
  const [show, setShow] = useState(false);
  const problem = PROBLEMS[index]!;

  return (
    <section id="cau-hoi" className="bg-navy-deep text-cream scroll-mt-20">
      <div className="mx-auto grid max-w-6xl items-stretch gap-0 lg:grid-cols-2">
        <div className="relative min-h-64 overflow-hidden">
          <img
            src="/images/chalkboard.jpg"
            alt="Bảng xanh với hình học compass"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-deep/35" />
        </div>
        <div className="px-4 py-12 sm:px-10 sm:py-16">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-soft">
            Góc luyện Toán cùng Cô Hoa · {problem.grade}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
            {problem.prompt}
          </h2>
          <p className="mt-6 font-display text-2xl text-gold-soft sm:text-3xl">
            {problem.latex}
          </p>
          <p className="mt-4 text-sm text-chalk">Gợi ý: {problem.hint}</p>
          <div
            className="mt-6 min-h-14 rounded-md bg-navy px-4 py-3 text-base"
            aria-live="polite"
          >
            {show ? (
              <span>
                Đáp án: <strong className="text-gold-soft">{problem.answer}</strong>
              </span>
            ) : (
              <span className="text-chalk">Ẩn đáp án — thử làm trước đã.</span>
            )}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <Button
              variant="gold"
              size="sm"
              type="button"
              onClick={() => setShow((v) => !v)}
            >
              {show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              {show ? "Ẩn đáp án" : "Xem đáp án"}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              type="button"
              onClick={() => {
                setShow(false);
                setIndex((i) => (i + 1) % PROBLEMS.length);
              }}
            >
              <RefreshCw className="size-4" />
              Câu khác
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
