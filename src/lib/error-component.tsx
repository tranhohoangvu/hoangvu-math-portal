import type { ErrorComponentProps } from "@tanstack/react-router";
import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const FALLBACK_MESSAGE =
  "Đã xảy ra lỗi không mong muốn. Vui lòng thử tải lại trang.";

function errorMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  if (typeof error === "string" && error) return error;
  return FALLBACK_MESSAGE;
}

export function AppErrorComponent({ error, reset }: ErrorComponentProps) {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center bg-paper text-ink">
      <div className="flex size-14 items-center justify-center rounded-full bg-red-100 text-red-600 ring-4 ring-red-50">
        <AlertCircle className="size-8" strokeWidth={2} />
      </div>
      <h1 className="font-display text-2xl font-bold text-navy">
        Đã có sự cố xảy ra
      </h1>
      <p className="max-w-md text-sm text-ink-muted leading-relaxed break-words">
        {errorMessage(error)}
      </p>
      <div className="mt-2 flex items-center gap-3">
        <Button
          onClick={() => (reset ? reset() : window.location.reload())}
          size="sm"
        >
          <RefreshCw className="size-4 mr-1.5" />
          Tải lại trang
        </Button>
        <Button asChild variant="outline" size="sm">
          <a href="/">Về trang chủ</a>
        </Button>
      </div>
    </main>
  );
}
