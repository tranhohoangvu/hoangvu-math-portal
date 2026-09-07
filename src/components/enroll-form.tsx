import { useState, type FormEvent } from "react";
import {
  Check,
  Clock,
  Copy,
  MessageCircle,
  Phone,
  QrCode,
  RotateCcw,
  Send,
  Sparkles,
  Target,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  LEARNING_GOALS,
  PROGRAMS,
  SITE,
  TIME_PREFERENCES,
  composeMessage,
} from "@/lib/site";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "thv-enrollments";

type Draft = {
  parent: string;
  student: string;
  program: string;
  goal: string;
  timeSlot: string;
  phone: string;
  note: string;
};

const empty: Draft = {
  parent: "",
  student: "",
  program: "",
  goal: "",
  timeSlot: "",
  phone: "",
  note: "",
};

export function EnrollForm() {
  const [draft, setDraft] = useState<Draft>(empty);
  const [message, setMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!draft.student.trim() || !draft.phone.trim()) {
      toast.error("Vui lòng nhập họ tên học sinh và số điện thoại liên hệ.");
      return;
    }
    const text = composeMessage(draft);
    try {
      const prev = JSON.parse(
        localStorage.getItem(STORAGE_KEY) ?? "[]",
      ) as unknown[];
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify([
          { ...draft, at: new Date().toISOString() },
          ...(Array.isArray(prev) ? prev : []),
        ]),
      );
    } catch {
      /* ignore quota */
    }
    setMessage(text);
    setCopied(false);
    toast.success("Đã tạo mẫu tin nhắn đăng ký thành công!", {
      description: "Quý phụ huynh có thể sao chép, mở Zalo hoặc quét mã QR.",
    });
  }

  function handleReset() {
    setDraft(empty);
    setMessage(null);
    setCopied(false);
    toast.info("Đã làm mới biểu mẫu đăng ký.");
  }

  async function copyText() {
    if (!message) return;
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      toast.success("Đã sao chép tin nhắn đăng ký.", {
        description: "Hãy dán vào ô chat Zalo để gửi cho cô giáo.",
      });
      setTimeout(() => setCopied(false), 3000);
    } catch {
      toast.error("Không thể tự động sao chép. Vui lòng bôi đen và copy tay.");
    }
  }

  return (
    <div className="rounded-2xl bg-cream p-5 shadow-[var(--shadow-card)] sm:p-8 border border-line/80">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
          Đăng ký học
        </span>
        <span className="size-1.5 rounded-full bg-gold animate-pulse" />
      </div>

      <h2 className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
        Để cô giáo xếp lịch học phù hợp
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted text-justify">
        Biểu mẫu giúp phụ huynh tạo nhanh nội dung đăng ký gửi trực tiếp tới cô
        Hồ Thị Hoa. Cô sẽ liên hệ để trao đổi chi tiết về học lực của con và sắp
        xếp buổi học thử tối ưu nhất.
      </p>

      <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
        {/* Hàng 1: Tên học sinh & Tên phụ huynh */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="student" className="font-medium text-navy">
              Họ tên học sinh <span className="text-red-500">*</span>
            </Label>
            <Input
              id="student"
              required
              value={draft.student}
              onChange={(e) => setDraft({ ...draft, student: e.target.value })}
              placeholder="Ví dụ: Nguyễn Văn An"
              autoComplete="name"
              className="mt-1 bg-paper"
            />
          </div>
          <div>
            <Label htmlFor="parent" className="font-medium text-navy">
              Tên phụ huynh
            </Label>
            <Input
              id="parent"
              value={draft.parent}
              onChange={(e) => setDraft({ ...draft, parent: e.target.value })}
              placeholder="Ví dụ: Chị Lan / Anh Hùng"
              className="mt-1 bg-paper"
            />
          </div>
        </div>

        {/* Hàng 2: Khóa học & Số điện thoại */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="program" className="font-medium text-navy">
              Chương trình / Khối lớp
            </Label>
            <select
              id="program"
              value={draft.program}
              onChange={(e) => setDraft({ ...draft, program: e.target.value })}
              className={cn(
                "mt-1 h-11 w-full rounded-md bg-paper px-3.5 text-sm sm:text-base shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-ink)_14%,transparent)] outline-none focus-visible:shadow-[0_0_0_2px_var(--color-gold)] transition-colors",
                draft.program ? "text-ink font-medium" : "text-ink-muted/80",
              )}
            >
              <option value="" className="text-ink-muted">
                -- Chọn khối lớp / chương trình --
              </option>
              {PROGRAMS.map((p) => (
                <option key={p.id} value={p.title} className="text-ink">
                  {p.title} ({p.kicker})
                </option>
              ))}
            </select>
          </div>
          <div>
            <Label htmlFor="phone" className="font-medium text-navy">
              Số điện thoại liên hệ <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              required
              inputMode="tel"
              value={draft.phone}
              onChange={(e) => setDraft({ ...draft, phone: e.target.value })}
              placeholder="Ví dụ: 0123 456 789"
              className="mt-1 bg-paper"
            />
          </div>
        </div>

        {/* Hàng 3: Mục tiêu học tập & Thời gian mong muốn */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label
              htmlFor="goal"
              className="font-medium text-navy flex items-center gap-1.5"
            >
              <Target className="size-3.5 text-gold" />
              <span>Mục tiêu học tập</span>
            </Label>
            <select
              id="goal"
              value={draft.goal}
              onChange={(e) => setDraft({ ...draft, goal: e.target.value })}
              className={cn(
                "mt-1 h-11 w-full rounded-md bg-paper px-3.5 text-sm sm:text-base shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-ink)_14%,transparent)] outline-none focus-visible:shadow-[0_0_0_2px_var(--color-gold)] transition-colors",
                draft.goal ? "text-ink font-medium" : "text-ink-muted/80",
              )}
            >
              <option value="" className="text-ink-muted">
                -- Chọn mục tiêu học tập (không bắt buộc) --
              </option>
              {LEARNING_GOALS.map((g) => (
                <option key={g.id} value={g.label} className="text-ink">
                  {g.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <Label
              htmlFor="timeSlot"
              className="font-medium text-navy flex items-center gap-1.5"
            >
              <Clock className="size-3.5 text-gold" />
              <span>Thời gian học mong muốn</span>
            </Label>
            <select
              id="timeSlot"
              value={draft.timeSlot}
              onChange={(e) => setDraft({ ...draft, timeSlot: e.target.value })}
              className={cn(
                "mt-1 h-11 w-full rounded-md bg-paper px-3.5 text-sm sm:text-base shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-ink)_14%,transparent)] outline-none focus-visible:shadow-[0_0_0_2px_var(--color-gold)] transition-colors",
                draft.timeSlot ? "text-ink font-medium" : "text-ink-muted/80",
              )}
            >
              <option value="" className="text-ink-muted">
                -- Chọn thời gian học (không bắt buộc) --
              </option>
              {TIME_PREFERENCES.map((t) => (
                <option key={t.id} value={t.label} className="text-ink">
                  {t.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Hàng 4: Ghi chú */}
        <div>
          <Label htmlFor="note" className="font-medium text-navy">
            Ghi chú thêm (không bắt buộc)
          </Label>
          <Textarea
            id="note"
            rows={3}
            value={draft.note}
            onChange={(e) => setDraft({ ...draft, note: e.target.value })}
            placeholder="Ví dụ: Con đang hổng phần hình học, cần kèm sát cách trình bày bài thi..."
            className="mt-1 bg-paper"
          />
        </div>

        <div className="mt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <Button
            type="submit"
            size="lg"
            className="flex-1 group shadow-lg hover:shadow-gold/30 hover:scale-[1.01] active:scale-[0.98] transition-all"
          >
            <Sparkles className="size-4 text-gold-soft animate-pulse" />
            <span>Soạn tin đăng ký học</span>
            <Send className="size-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={handleReset}
            className="group hover:bg-paper hover:text-navy active:scale-[0.98] transition-all"
            title="Làm mới lại toàn bộ biểu mẫu"
          >
            <RotateCcw className="size-4 text-ink-muted group-hover:-rotate-90 transition-transform duration-300" />
            <span>Làm mới</span>
          </Button>
        </div>
      </form>

      {/* KHỐI KẾT QUẢ TẠO TIN NHẮN & TÍCH HỢP QR ZALO */}
      {message ? (
        <div className="mt-8 rounded-2xl bg-paper p-5 sm:p-7 border-2 border-gold/40 shadow-xl animate-in fade-in zoom-in-95 duration-300">
          <div className="flex items-center justify-between border-b border-line pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="flex size-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-bold text-xs">
                ✓
              </span>
              <h4 className="font-display text-base sm:text-lg font-bold text-navy">
                Tin nhắn đăng ký đã sẵn sàng
              </h4>
            </div>
            <span className="text-xs text-gold font-semibold uppercase tracking-wider hidden sm:inline-block">
              Trực tiếp Cô Hoa
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            {/* Cột Trái (7 cols): Nội dung tin nhắn & Nút gửi */}
            <div className="lg:col-span-7 space-y-4">
              <div className="rounded-xl bg-cream p-4 border border-line shadow-inner">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-1.5">
                  Nội dung gửi cô:
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-ink font-serif italic">
                  "{message}"
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 pt-1">
                <Button
                  type="button"
                  variant="gold"
                  size="sm"
                  onClick={copyText}
                  className="group shadow-md hover:scale-105 transition-all"
                >
                  {copied ? (
                    <Check className="size-4 text-emerald-800" />
                  ) : (
                    <Copy className="size-4 group-hover:scale-110 transition-transform" />
                  )}
                  <span>{copied ? "Đã sao chép!" : "Sao chép tin nhắn"}</span>
                </Button>

                <Button
                  asChild
                  variant="navy"
                  size="sm"
                  className="group shadow-md hover:scale-105 transition-all bg-[#0068FF] hover:bg-[#0052cc]"
                >
                  <a href={SITE.zalo} target="_blank" rel="noreferrer">
                    <MessageCircle className="size-4 fill-current" />
                    <span>Mở Zalo gửi ngay</span>
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="group hover:scale-105 transition-all"
                >
                  <a href={SITE.tel}>
                    <Phone className="size-4 animate-phone-ring text-gold" />
                    <span>Gọi {SITE.phoneDisplay}</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Cột Phải (5 cols): Khung quét mã QR Zalo tiện lợi trên máy tính */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center rounded-xl bg-cream/70 p-4 border border-gold/30 text-center">
              <div className="flex items-center gap-1.5 text-xs font-bold text-navy mb-2.5">
                <QrCode className="size-4 text-gold" />
                <span>Quét mã QR Zalo Cô Hoa</span>
              </div>

              <div className="rounded-lg bg-white p-2.5 shadow-md border border-line">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(SITE.zalo)}&margin=10`}
                  alt={`Mã QR Zalo Cô Hoa ${SITE.phoneDisplay}`}
                  className="size-32 sm:size-36 rounded object-contain"
                  loading="lazy"
                />
              </div>

              <p className="mt-2 text-[11px] leading-relaxed text-ink-muted">
                Dùng app Zalo hoặc Camera trên điện thoại quét mã để mở chat trực tiếp.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
