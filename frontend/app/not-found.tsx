import Link from "next/link";
import { SearchX, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 text-center sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-lg flex-col items-center justify-center space-y-8">
        
        {/* Ikon Dekoratif */}
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-muted">
          <SearchX className="h-10 w-10 text-muted-foreground" aria-hidden="true" />
        </div>

        {/* Tipografi Formal */}
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-base text-muted-foreground">
            Mohon maaf, tautan yang Anda tuju mungkin telah dipindahkan, dihapus, atau tidak pernah ada. Silakan periksa kembali URL yang Anda masukkan.
          </p>
        </div>

        {/* Call to Action */}
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Home className="mr-2 h-4 w-4" aria-hidden="true" />
          Kembali ke Beranda
        </Link>
        
      </div>
    </main>
  );
}