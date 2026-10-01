import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-board/10 bg-paper/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <Link href="/" className="flex items-center gap-2 font-[family-name:var(--font-intertight)] text-xl font-extrabold tracking-tight text-board">
          <span aria-hidden="true" className="h-3 w-3 rounded-full bg-tack ring-2 ring-board" />
          Bribu
        </Link>
        <nav aria-label="Navigasi utama" className="hidden items-center gap-8 md:flex">
          {[['/papan', 'Papan brief'], ['/#cara', 'Cara kerja'], ['/#paket', 'Paket'], ['/untuk-desainer', 'Untuk desainer']].map(([h, l]) => (
            <Link key={h} href={h} className="text-sm font-semibold text-muted hover:text-board">{l}</Link>
          ))}
        </nav>
        <Link href="/#pasang" className="inline-flex bg-pin px-4 py-2.5 text-sm font-semibold text-white hover:bg-board">Pasang brief</Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-board px-6 text-chalk">
      <div className="mx-auto grid max-w-6xl gap-10 py-14 md:grid-cols-[minmax(0,1.4fr)_repeat(2,minmax(0,1fr))]">
        <div>
          <p className="flex items-center gap-2 font-[family-name:var(--font-intertight)] text-2xl font-extrabold">
            <span aria-hidden="true" className="h-3 w-3 rounded-full bg-tack" />
            Bribu
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-chalk/80">Papan brief desain untuk usaha kecil. Tiga desainer terkurasi, tiga sketsa yang dibayar, satu pilihan Anda.</p>
        </div>
        <nav aria-label="Klien">
          <p className="slug mb-4 text-chalk/80">Untuk klien</p>
          <ul className="space-y-2.5 text-sm text-chalk/80">
            <li><Link href="/#pasang" className="hover:text-chalk">Pasang brief</Link></li>
            <li><Link href="/#paket" className="hover:text-chalk">Paket & biaya</Link></li>
            <li><Link href="/papan" className="hover:text-chalk">Papan brief</Link></li>
          </ul>
        </nav>
        <nav aria-label="Desainer">
          <p className="slug mb-4 text-chalk/80">Untuk desainer</p>
          <ul className="space-y-2.5 text-sm text-chalk/80">
            <li><Link href="/untuk-desainer" className="hover:text-chalk">Cara bergabung</Link></li>
            <li><Link href="/untuk-desainer#bagi-hasil" className="hover:text-chalk">Uang sketsa & bagi hasil</Link></li>
          </ul>
        </nav>
      </div>
      <p className="slug mx-auto max-w-6xl border-t border-chalk/15 py-6 leading-[1.9] text-chalk/70">© 2026 Bribu · Usaha, desainer, harga, dan tanggal di situs ini adalah contoh purwarupa desain</p>
    </footer>
  );
}
