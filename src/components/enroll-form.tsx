import { useState, type FormEvent } from "react";
import { Check, Copy, MessageCircle, Phone } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PROGRAMS, SITE, composeMessage } from "@/lib/site";

const STORAGE_KEY = "thv-enrollments";

type Draft = {
  parent: string;
  student: string;
  program: string;
  phone: string;
  note: string;
};

const empty: Draft = {
  parent: "",
  student: "",
  program: "Lớp 9",
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
      toast.error("Nhập tên học sinh và số điện thoại giúp cô liên hệ.");
      return;
    }
    const text = composeMessage(draft);
    try {
      const prev = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as unknown[];
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
    toast.success("Đã soạn tin. Gọi hoặc nhắn Zalo cô Hoa để chốt lịch.");
  }

  async function copyText() {
    if (!message) return;
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      toast.success("Đã sao chép tin nhắn.");
    } catch {
      toast.error("Không sao chép được. Hãy bôi đen và copy tay.");
    }
  }

  return (
    <div className="rounded-xl bg-cream p-5 shadow-[var(--shadow-card)] sm:p-8">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
        Đăng ký học
      </p>
      <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-navy">
        Để cô giáo xếp lớp cho con
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted text-justify">
        Form soạn sẵn tin nhắn gửi trực tiếp tới cô Hồ Thị Hoa. Cô sẽ liên hệ trao đổi cụ thể về lực học hiện tại của con và xếp lịch học thử phù hợp nhất.
      </p>

      <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="student">Họ tên học sinh</Label>
            <Input
              id="student"
              value={draft.student}
              onChange={(e) => setDraft({ ...draft, student: e.target.value })}
              placeholder="Nguyễn Văn A"
              autoComplete="name"
            />
          </div>
          <div>
            <Label htmlFor="parent">Phụ huynh</Label>
            <Input
              id="parent"
              value={draft.parent}
              onChange={(e) => setDraft({ ...draft, parent: e.target.value })}
              placeholder="Chị / anh …"
            />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="program">Chương trình</Label>
            <select
              id="program"
              value={draft.program}
              onChange={(e) => setDraft({ ...draft, program: e.target.value })}
              className="h-11 w-full rounded-md bg-paper px-3.5 text-base text-ink shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-ink)_14%,transparent)] outline-none focus-visible:shadow-[0_0_0_2px_var(--color-gold)]"
            >
              {PROGRAMS.map((p) => (
                <option key={p.id} value={p.title}>
                  {p.title}
                </option>
              ))}
            </select>
          </div>
          <div>
            <Label htmlFor="phone">Số điện thoại</Label>
            <Input
              id="phone"
              type="tel"
              inputMode="tel"
              value={draft.phone}
              onChange={(e) => setDraft({ ...draft, phone: e.target.value })}
              placeholder="09xx …"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="note">Ghi chú (không bắt buộc)</Label>
          <Textarea
            id="note"
            value={draft.note}
            onChange={(e) => setDraft({ ...draft, note: e.target.value })}
            placeholder="Con đang yếu phân số, muốn học thử buổi tối…"
          />
        </div>
        <Button type="submit" size="lg">
          Soạn tin đăng ký
        </Button>
      </form>

      {message ? (
        <div className="mt-6 rounded-lg bg-paper p-4">
          <p className="text-sm leading-relaxed text-ink">{message}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button type="button" variant="gold" size="sm" onClick={copyText}>
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
              {copied ? "Đã sao chép" : "Sao chép tin"}
            </Button>
            <Button asChild variant="navy" size="sm">
              <a href={SITE.zalo} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" />
                Mở Zalo
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href={SITE.tel}>
                <Phone className="size-4" />
                Gọi cô Hoa
              </a>
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
