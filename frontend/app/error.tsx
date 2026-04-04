'use client';


import { AlertTriangle, RotateCcw } from "lucide-react";
import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  
  // Best practice: Log error ke sistem monitoring (misal: Sentry) di sisi client
  useEffect(() => {
    console.error("System Error Captured:", error);
  }, [error]);

  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 text-center sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-lg flex-col items-center justify-center space-y-8">
        
        {/* Ikon Dekoratif dengan warna Destructive */}
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-destructive/10">
          <AlertTriangle className="h-10 w-10 text-destructive" aria-hidden="true" />
        </div>

        {/* Tipografi Formal */}
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Terjadi Kesalahan Sistem
          </h1>
          <p className="text-base text-muted-foreground">
            Mohon maaf atas ketidaknyamanan ini. Sistem kami sedang mengalami kendala teknis. Tim administrator telah mencatat masalah ini dan sedang melakukan perbaikan.
          </p>
        </div>

        {/* Call to Action: Mencoba merender ulang segment yang error */}
        <button
          onClick={() => reset()}
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <RotateCcw className="mr-2 h-4 w-4" aria-hidden="true" />
          Muat Ulang Halaman
        </button>

      </div>
    </main>
  );
}