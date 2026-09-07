import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
  Sparkles,
  Users,
} from "lucide-react";
import { EnrollForm } from "@/components/enroll-form";
import { FloatingContact } from "@/components/floating-contact";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { TodayProblem } from "@/components/today-problem";
import { Button } from "@/components/ui/button";
import { FAQS, HOURS, PROGRAMS, SCHEDULE_NOTE, SITE, TEACHER_INFO } from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="min-h-dvh">
      <Nav />
      <Hero />
      <GoldRibbon />
      <Why />
      <Teacher />
      <Programs />
      <TodayProblem />
      <EnrollSection />
      <Place />
      <Footer />
      <FloatingContact />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep text-cream">
      <img
        src="/images/classroom.jpg"
        alt="Phòng học Toán buổi chiều, bàn gỗ và bảng xanh"
        className="absolute inset-0 size-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,31,69,0.95)_0%,rgba(8,31,69,0.82)_55%,rgba(8,31,69,0.5)_100%)]" />

      {/* Floating Math Symbols Background Animation */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden select-none opacity-20"
        aria-hidden="true"
      >
        <span className="absolute top-10 left-[8%] font-display text-4xl text-gold-soft animate-float-slow">
          ∑
        </span>
        <span className="absolute top-24 right-[12%] font-display text-3xl text-cream animate-float-reverse">
          π
        </span>
        <span className="absolute bottom-28 left-[18%] font-display text-3xl text-gold animate-float-slow">
          √x
        </span>
        <span className="absolute bottom-16 right-[24%] font-display text-4xl text-gold-soft animate-float-reverse">
          Δ
        </span>
        <span className="absolute top-40 left-[42%] font-display text-2xl text-chalk animate-float-slow">
          x²
        </span>
        <span className="absolute bottom-36 right-[6%] font-display text-3xl text-cream animate-float-reverse">
          ∫
        </span>
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:flex-row lg:items-end lg:py-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 border border-gold/40 px-3.5 py-1 text-xs font-semibold text-gold-soft mb-4 backdrop-blur-sm shadow-sm shimmer-badge">
            <Sparkles className="size-3.5 text-gold animate-pulse" />
            <span>Cô Hồ Thị Hoa trực tiếp giảng dạy</span>
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-soft">
            {SITE.kind} · Ea Kiết, Đắk Lắk
          </p>
          <h1 className="mt-2 font-display text-[clamp(2.6rem,8vw,5.2rem)] font-semibold leading-[0.95] tracking-tight text-cream">
            {SITE.name}
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-chalk sm:text-xl text-justify">
            {SITE.tagline} Lớp bồi dưỡng do{" "}
            <strong className="font-semibold text-gold-soft">
              cô Hồ Thị Hoa
            </strong>{" "}
            (Giáo viên môn Toán tại Trường TH & THCS Hoàng Văn Thụ) trực tiếp đứng
            lớp tại Trung tâm Bồi dưỡng Kiến thức Trần Hoàng Vũ — kèm sát từng em lớp{" "}
            {SITE.grades}, bồi dưỡng học sinh giỏi và luyện thi đỗ vào lớp 10.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="gold" size="lg" className="group shadow-lg hover:shadow-gold/30 transition-all duration-300 hover:scale-[1.02]">
              <a href={SITE.tel}>
                <Phone className="size-4 animate-phone-ring" />
                Gọi Cô Hoa: {SITE.phoneDisplay}
              </a>
            </Button>
            <Button asChild variant="cream" size="lg" className="group hover:scale-[1.02] transition-transform">
              <a href="#co-giao">
                Gặp gỡ cô giáo
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
        {/* Teacher & Tutoring Info Card */}
        <div className="relative w-full max-w-lg lg:max-w-[490px] rounded-2xl bg-navy/85 p-6 sm:p-7 backdrop-blur-md border border-gold/30 shadow-2xl space-y-5">
          <div className="flex items-center gap-4">
            <div className="relative size-16 shrink-0 overflow-hidden rounded-full ring-2 ring-gold shadow-md">
              <img
                src="/images/co-hoa.jpg"
                alt="Cô Hoa"
                className="size-full object-cover"
              />
              <span className="absolute bottom-0 right-0 size-3.5 rounded-full bg-emerald-500 ring-2 ring-navy-deep" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold text-gold-soft border border-gold/40 shimmer-badge-mini backdrop-blur-sm">
                <span className="inline-block size-1.5 rounded-full bg-gold animate-pulse" />
                <span>Giáo viên trực tiếp đứng lớp</span>
              </div>
              <h3 className="mt-1 font-display text-2xl font-bold text-cream">
                Cô Hồ Thị Hoa
              </h3>
              <p className="text-sm text-gold-soft font-medium">
                Trường TH & THCS Hoàng Văn Thụ
              </p>
            </div>
          </div>

          <div className="space-y-3 rounded-xl bg-navy-deep/65 p-4 border border-line text-sm sm:text-[15px] leading-relaxed text-chalk">
            <div className="flex items-start gap-2.5">
              <span className="font-semibold text-gold-soft shrink-0">
                Nơi công tác:
              </span>
              <span className="text-cream">Trường TH & THCS Hoàng Văn Thụ</span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="font-semibold text-gold-soft shrink-0">
                Địa điểm học:
              </span>
              <span className="text-cream">
                Trung tâm Bồi dưỡng Kiến thức Trần Hoàng Vũ
                <span className="block text-xs text-chalk/90 sm:text-sm">
                  (Thôn Tân An — Thôn 8 cũ, Ea Kiết)
                </span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2.5 text-center pt-1">
            <div className="rounded-xl bg-navy/60 px-2 py-2.5 sm:py-3 border border-line flex flex-col justify-center">
              <div className="font-display text-xl sm:text-2xl font-bold text-gold-soft">
                100%
              </div>
              <div className="mt-0.5 text-xs sm:text-[13px] text-chalk whitespace-nowrap">
                Cô đứng lớp
              </div>
            </div>
            <div className="rounded-xl bg-navy/60 px-2 py-2.5 sm:py-3 border border-line flex flex-col justify-center">
              <div className="font-display text-base sm:text-lg font-bold text-gold-soft">
                Lớp nhỏ
              </div>
              <div className="mt-0.5 text-xs sm:text-[13px] text-chalk whitespace-nowrap">
                Số lượng ít, kèm sát
              </div>
            </div>
            <div className="rounded-xl bg-navy/60 px-2 py-2.5 sm:py-3 border border-line flex flex-col justify-center">
              <div className="font-display text-lg sm:text-xl font-bold text-gold-soft">
                Lớp 6–9
              </div>
              <div className="mt-0.5 text-xs sm:text-[13px] text-chalk whitespace-nowrap">
                Bồi dưỡng & Thi 10
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GoldRibbon() {
  const item = (
    <div className="flex items-center gap-6 text-sm font-semibold tracking-wide text-navy-deep sm:text-base font-display">
      <span>
        {SITE.subject} — Cô Hồ Thị Hoa (GV Trường TH & THCS Hoàng Văn Thụ) trực tiếp đứng
        lớp tại Trung tâm Bồi dưỡng Kiến thức Trần Hoàng Vũ
      </span>
      <span className="text-navy-deep/60">✦</span>
      <span className="font-bold">Lớp nhỏ kèm sát từng bài</span>
      <span className="text-navy-deep/60">✦</span>
      <span className="font-bold">Bồi dưỡng Toán 6–9 & Luyện thi vào 10</span>
      <span className="text-navy-deep/60">✦</span>
      <span>Thôn Tân An (Thôn 8 cũ), Ea Kiết</span>
      <span className="text-navy-deep/60">✦</span>
    </div>
  );

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gold via-gold-soft to-gold py-2.5 sm:py-3 shadow-inner border-y border-gold/40">
      <div className="flex w-max animate-marquee gap-6 whitespace-nowrap">
        {item}
        {item}
      </div>
    </div>
  );
}

function Why() {
  const items = [
    {
      icon: Users,
      title: "Lớp nhỏ, kèm sát từng bài",
      body: "Không phải lớp đại trà đông đúc. Cô giáo ngồi cạnh từng em tại trung tâm, chữa từng bài tập, hướng dẫn kiên nhẫn cho đến khi con thực sự hiểu bản chất.",
    },
    {
      icon: BookOpen,
      title: "Đúng chuẩn THCS & Bám sát thi thật",
      body: "Bám chắc chương trình GDPT mới, bổ sung các dạng đề thi học kỳ, bồi dưỡng học sinh giỏi và rèn kỹ năng giải đề thi vào 10 tỉnh Đắk Lắk.",
    },
    {
      icon: Sparkles,
      title: "Từ lấy lại gốc đến bứt phá điểm 9–10",
      body: "Hổng kiến thức thì kiên nhẫn bù nền. Khá giỏi thì bồi dưỡng chuyên đề nâng cao. Mỗi học sinh đều có một lộ trình tiến bộ rõ rệt.",
    },
  ];
  return (
    <section className="paper-grid bg-cream">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="group rounded-xl bg-paper p-6 shadow-[var(--shadow-card)] border border-line/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-gold/60"
          >
            <div className="size-11 rounded-xl bg-gold/15 flex items-center justify-center border border-gold/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-gold/25 group-hover:border-gold/60">
              <item.icon className="size-5 text-gold" strokeWidth={2} />
            </div>
            <h2 className="mt-4 font-display text-2xl font-semibold text-navy group-hover:text-navy-mid transition-colors">
              {item.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted text-justify">
              {item.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Teacher() {
  return (
    <section
      id="co-giao"
      className="relative isolate overflow-hidden bg-navy-deep text-cream scroll-mt-20 py-16 sm:py-20 lg:py-24"
    >
      {/* Background glow elements */}
      <div className="pointer-events-none absolute -left-32 top-1/4 size-96 rounded-full bg-gold/10 blur-3xl animate-soft-glow" />
      <div className="pointer-events-none absolute -right-32 bottom-10 size-96 rounded-full bg-navy-mid/40 blur-3xl animate-soft-glow" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 border border-gold/40 px-3.5 py-1 text-xs font-semibold text-gold-soft backdrop-blur-sm shimmer-badge">
            <Sparkles className="size-3.5 text-gold animate-pulse" />
            <span>GIÁO VIÊN TRỰC TIẾP ĐỨNG LỚP</span>
          </div>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-5xl text-cream">
            Cô Hồ Thị Hoa — Giáo viên môn Toán
          </h2>
          <p className="mt-3 text-base leading-relaxed text-chalk sm:text-lg text-justify">
            Cô Hồ Thị Hoa hiện đang công tác và giảng dạy chính quy tại{" "}
            <strong className="text-gold-soft">
              Trường TH & THCS Hoàng Văn Thụ
            </strong>
            . Ngoài giờ lên lớp, cô trực tiếp phụ trách bồi dưỡng kiến thức môn
            Toán cho các em học sinh THCS tại{" "}
            <strong className="text-gold-soft">
              Trung tâm Bồi dưỡng Kiến thức Trần Hoàng Vũ
            </strong>{" "}
            (Thôn Tân An — Thôn 8 cũ, Ea Kiết). Không qua trung gian hay trợ giảng — cô trực tiếp
            kèm cặp, chữa từng bài và rèn từng bước lập luận cho con.
          </p>
        </div>

        {/* Main 2-Column Content */}
        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left: Teacher Portrait & Stats */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative group overflow-hidden rounded-2xl border-2 border-gold/40 shadow-2xl shadow-navy-deep/70 transition-all duration-300 hover:border-gold hover:shadow-[0_20px_50px_rgba(196,150,26,0.2)]">
              <img
                src="/images/co-hoa.jpg"
                alt="Cô Hoa - Giáo viên Toán Trường TH & THCS Hoàng Văn Thụ, dạy bồi dưỡng tại Trung tâm Trần Hoàng Vũ"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/25 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-cream">
                <p className="font-display text-2xl font-bold text-cream drop-shadow-md">
                  {TEACHER_INFO.name}
                </p>
                <p className="text-xs sm:text-sm text-gold-soft font-medium drop-shadow-sm">
                  {TEACHER_INFO.title}
                </p>
                <p className="text-[11px] text-chalk/80">
                  Dạy bồi dưỡng tại Trung tâm Bồi dưỡng Kiến thức Trần Hoàng Vũ
                </p>
              </div>
              <div className="absolute top-3 right-3 rounded-full bg-navy-deep/90 px-3 py-1 text-[11px] font-semibold text-gold-soft border border-gold/40 backdrop-blur-sm shadow-sm">
                Đứng lớp 100% tại trung tâm
              </div>
            </div>

            {/* Quick highlight metric cards */}
            <div className="grid grid-cols-2 gap-3">
              {TEACHER_INFO.highlights.map((h) => (
                <div
                  key={h.label}
                  className="group rounded-xl bg-navy/60 border border-line p-3.5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-navy/80"
                >
                  <p className="font-display text-base font-bold text-gold-soft sm:text-lg group-hover:scale-105 transition-transform origin-left">
                    {h.num}
                  </p>
                  <p className="mt-0.5 text-xs font-semibold text-cream">
                    {h.label}
                  </p>
                  <p className="text-[11px] text-chalk/80">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Quote, Philosophy, Commitments & Contact */}
          <div className="lg:col-span-7 space-y-6">
            {/* Quote Card */}
            <div className="relative rounded-2xl bg-gradient-to-br from-navy/85 to-navy-deep/95 p-6 sm:p-7 border border-gold/30 shadow-lg">
              <Quote className="size-8 text-gold/30 absolute top-5 right-6" />
              <p className="font-display text-lg sm:text-xl italic leading-relaxed text-cream text-justify">
                "{TEACHER_INFO.quote}"
              </p>
              <div className="mt-4 flex items-center gap-3 pt-3 border-t border-line">
                <div className="size-9 rounded-full bg-gold/20 flex items-center justify-center border border-gold/50 text-gold font-bold text-sm">
                  H
                </div>
                <div>
                  <p className="text-sm font-semibold text-cream">Cô Hồ Thị Hoa</p>
                  <p className="text-xs text-gold-soft">
                    Giáo viên Trường TH & THCS Hoàng Văn Thụ · Giảng dạy tại Trung tâm
                    Bồi dưỡng Kiến thức Trần Hoàng Vũ
                  </p>
                </div>
              </div>
            </div>

            {/* 3 Teaching Pillars */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
                Phương pháp giảng dạy đặc trưng
              </h3>
              <div className="grid gap-3 sm:grid-cols-3">
                {TEACHER_INFO.philosophy.map((item, idx) => (
                  <div
                    key={item.title}
                    className="group rounded-xl bg-navy/50 border border-line p-4 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-navy/70"
                  >
                    <div className="size-7 rounded-lg bg-gold/15 flex items-center justify-center text-xs font-bold text-gold border border-gold/30 mb-2.5 group-hover:scale-110 group-hover:bg-gold/25 transition-all">
                      0{idx + 1}
                    </div>
                    <h4 className="font-display text-base font-semibold text-cream group-hover:text-gold-soft transition-colors">
                      {item.title}
                    </h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-chalk/90 text-justify">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3 Commitments */}
            <div className="rounded-xl bg-navy/40 border border-line p-5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft mb-3">
                3 Cam kết của cô giáo tại Trung tâm Trần Hoàng Vũ
              </h3>
              <ul className="space-y-2.5">
                {TEACHER_INFO.commitments.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-2.5 text-sm text-chalk"
                  >
                    <CheckCircle2 className="size-4 text-gold shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button asChild variant="gold" size="lg" className="group shadow-lg hover:shadow-gold/30 transition-all duration-300 hover:scale-[1.02]">
                <a href={SITE.tel}>
                  <Phone className="size-4 animate-phone-ring" />
                  Gọi trao đổi với Cô ({SITE.phoneDisplay})
                </a>
              </Button>
              <Button asChild variant="cream" size="lg" className="group hover:scale-[1.02] transition-transform animate-pulse-zalo">
                <a href={SITE.zalo} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4 group-hover:scale-110 transition-transform" />
                  Nhắn Zalo cho Cô Hoa
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section id="chuong-trinh" className="bg-paper scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
          Chương trình học
        </p>
        <h2 className="mt-2 max-w-xl font-display text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
          Sáu lộ trình bồi dưỡng bám sát năng lực
        </h2>
        <p className="mt-3 max-w-xl text-ink-muted text-justify">
          Giáo án do cô Hồ Thị Hoa trực tiếp biên soạn theo từng cấp độ và sức học của
          từng em. Bám sát chương trình GDPT mới và kỳ thi tuyển sinh vào lớp 10.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((p) => (
            <article
              key={p.id}
              className="group relative overflow-hidden rounded-xl bg-cream p-6 shadow-[var(--shadow-card)] border border-line/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-gold/60"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-1 -top-3 font-display text-6xl font-semibold text-navy/10 group-hover:text-gold/25 group-hover:scale-110 transition-all duration-300"
              >
                {p.grade}
              </span>
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                  {p.kicker}
                </p>
                <span className="text-[11px] font-medium text-navy/70 bg-paper px-2 py-0.5 rounded-full border border-line">
                  Kèm sát từng em
                </span>
              </div>
              <h3 className="mt-2 font-display text-2xl font-semibold text-navy group-hover:text-navy-mid transition-colors">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted text-justify">
                {p.body}
              </p>
              <div className="mt-4 pt-3 border-t border-line/60 flex items-center justify-between text-xs text-navy font-medium">
                <span>Lớp nhỏ, số lượng ít</span>
                <span className="text-gold font-semibold group-hover:translate-x-1.5 transition-transform duration-200">
                  Chi tiết giáo án &rarr;
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EnrollSection() {
  return (
    <section id="dang-ky" className="bg-paper scroll-mt-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-5 lg:py-20">
        <div className="lg:col-span-2">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
            Câu hỏi thường gặp
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-navy">
            Trước khi gửi con tới lớp bồi dưỡng
          </h2>
          <div className="mt-6 divide-y divide-line">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-3">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 text-left font-medium text-navy">
                  {f.q}
                  <span className="text-gold transition-transform duration-150 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-2 pb-2 text-sm leading-relaxed text-ink-muted text-justify">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
          <div className="mt-8 rounded-xl bg-cream/70 p-4 border border-gold/35 space-y-2.5 shadow-sm">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Calendar className="size-4 text-gold" />
                <span className="text-xs font-bold uppercase tracking-wider text-navy">
                  {SCHEDULE_NOTE.title}
                </span>
              </div>
              <span className="rounded-full bg-gold/20 px-2.5 py-0.5 text-[11px] font-semibold text-gold-soft border border-gold/40">
                {SCHEDULE_NOTE.status}
              </span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-ink-muted text-justify">
              {SCHEDULE_NOTE.description}
            </p>
            <div className="pt-1.5 border-t border-line/60 flex items-center gap-1.5 text-[11px] text-navy font-medium">
              <span className="text-gold">✦</span>
              <span>{SCHEDULE_NOTE.flexibility}</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3">
          <EnrollForm />
        </div>
      </div>
    </section>
  );
}

function Place() {
  return (
    <section
      id="lien-he"
      className="relative isolate overflow-hidden bg-navy-deep text-cream scroll-mt-20"
    >
      <img
        src="/images/house.jpg"
        alt="Nhà mái ngói ở Tây Nguyên, nơi đặt Trung tâm Bồi dưỡng Kiến thức Trần Hoàng Vũ"
        className="absolute inset-0 size-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-navy-deep/80" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold-soft">
              Địa chỉ trung tâm
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-cream">
              Trung tâm Bồi dưỡng Kiến thức Trần Hoàng Vũ
            </h2>

            {/* Address Box showing both new and old address */}
            <div className="mt-5 space-y-2.5 rounded-xl bg-navy/70 p-4 border border-gold/30">
              <div className="flex items-start gap-2.5">
                <span className="shrink-0 rounded bg-gold/25 px-2 py-0.5 text-[11px] font-bold text-gold-soft border border-gold/40">
                  Địa chỉ mới (sau sáp nhập)
                </span>
                <span className="text-sm font-semibold text-cream sm:text-base">
                  {SITE.addressNew}
                </span>
              </div>
              <div className="flex items-start gap-2.5 pt-2 border-t border-line">
                <span className="shrink-0 rounded bg-navy-deep/70 px-2 py-0.5 text-[11px] font-medium text-chalk border border-line">
                  Địa chỉ cũ (trước sáp nhập)
                </span>
                <span className="text-xs text-chalk sm:text-sm">
                  {SITE.addressOld}
                </span>
              </div>
            </div>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-chalk text-justify">
              Địa điểm tổ chức các lớp bồi dưỡng Toán ngoài giờ của cô Hồ Thị Hoa — phòng
              học thoáng mát, yên tĩnh, trang bị đầy đủ bảng xanh và bàn ghế
              chuẩn. Dù phụ huynh quen gọi Thôn Tân An hay Thôn 8 cũ đều dễ dàng
              tìm đến đúng lớp học.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                variant="gold"
                size="lg"
                className="group shadow-lg hover:shadow-gold/30 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
              >
                <a href={SITE.maps} target="_blank" rel="noreferrer">
                  <MapPin className="size-4 group-hover:-translate-y-0.5 group-hover:scale-110 transition-transform duration-300" />
                  Mở Google Maps chỉ đường
                </a>
              </Button>
              <Button
                asChild
                variant="cream"
                size="lg"
                className="group shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
              >
                <a href={SITE.tel}>
                  <Phone className="size-4 animate-phone-ring" />
                  Gọi hỏi đường ({SITE.phoneDisplay})
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-2xl border-2 border-gold/40 shadow-2xl shadow-navy-deep/80 bg-navy/70 backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-line px-4 py-2.5 bg-navy-deep/90 text-xs text-gold-soft font-medium">
                <span className="flex items-center gap-1.5">
                  <MapPin className="size-3.5 text-gold" />
                  Vị trí trên bản đồ
                </span>
                <a
                  href={SITE.maps}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-cream hover:text-gold transition-colors"
                >
                  Xem trên Google Maps &rarr;
                </a>
              </div>
              <iframe
                title="Vị trí Trung tâm Bồi dưỡng Kiến thức Trần Hoàng Vũ trên Google Maps"
                src={SITE.mapsEmbed}
                className="h-72 w-full border-0 sm:h-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
