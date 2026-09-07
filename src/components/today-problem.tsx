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
            className="mt-6 min-h-14 rounded-xl bg-navy/90 p-4 text-base border border-line transition-all duration-300"
            aria-live="polite"
          >
            {show ? (
              <div className="flex items-center gap-2 animate-in fade-in zoom-in-95 duration-200">
                <span className="text-gold-soft">✦</span>
                <span>
                  Đáp án:{" "}
                  <strong className="text-gold-soft font-bold text-lg">
                    {problem.answer}
                  </strong>
                </span>
              </div>
            ) : (
              <span className="text-chalk/80 italic text-sm">
                Ẩn đáp án — thử nháp ra giấy trước nhé! ✏️
              </span>
            )}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              variant="gold"
              size="sm"
              type="button"
              className="group shadow-md hover:scale-105 transition-all"
              onClick={() => setShow((v) => !v)}
            >
              {show ? (
                <EyeOff className="size-4" />
              ) : (
                <Eye className="size-4 group-hover:scale-110 transition-transform" />
              )}
              {show ? "Ẩn đáp án" : "Xem đáp án"}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              type="button"
              className="group text-cream hover:text-gold-soft hover:bg-navy/60 transition-all"
              onClick={() => {
                setShow(false);
                setIndex((i) => (i + 1) % PROBLEMS.length);
              }}
            >
              <RefreshCw className="size-4 group-hover:rotate-180 transition-transform duration-500" />
              Câu khác
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
