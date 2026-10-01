import Link from "next/link";

export const metadata = { title: "Halaman tidak ditemukan" };

export default function NotFound() {
  return (
    <main className="board-grid flex min-h-[80vh] items-center px-6 pt-20">
      <div className="board-card relative mx-auto max-w-md p-10 pt-12">
        <span aria-hidden="true" className="absolute -top-1.5 left-8 h-3 w-3 rounded-full bg-tack" />
        <p className="slug text-pin">BR-0404 · tidak ditemukan</p>
        <h1 className="mt-4 text-4xl text-board">Pengumuman ini sudah dicabut dari papan</h1>
        <p className="mt-4 leading-relaxed">Halaman yang Anda cari tidak ada. Mungkin alamatnya salah ketik.</p>
        <Link href="/papan" className="mt-7 inline-flex bg-pin px-6 py-3.5 font-semibold text-white hover:bg-board">Kembali ke papan</Link>
      </div>
    </main>
  );
}
