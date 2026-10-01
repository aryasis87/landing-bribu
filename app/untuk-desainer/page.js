import { BAGI, KATEGORI, SITE, rincian, rp } from '@/lib/papan';
import FormDesainer from '../components/FormDesainer';

export const metadata = {
  title: 'Untuk Desainer',
  description: 'Bergabung dengan Bribu: kurasi dari portofolio, uang sketsa dibayar meski tidak terpilih, dan 80% sisa paket untuk desainer terpilih.',
  alternates: { canonical: `${SITE}/untuk-desainer` },
};

const ATURAN = [
  ['Kurasi dari portofolio', 'Kirim enam karya terbaik. Kurator menilai kecocokan dengan jenis brief, bukan jumlah pengikut.'],
  ['Satu sketsa, satu arah', 'Di tahap sketsa Anda menggambar satu arah yang dipikirkan, bukan lima variasi warna.'],
  ['Sketsa tetap milik Anda', 'Sketsa yang tidak terpilih tidak boleh dipakai klien. Anda boleh memajangnya di portofolio setelah brief selesai.'],
  ['Dibayar per tahap', 'Uang sketsa cair setelah sketsa diunggah. Sisa bagian Anda cair setelah klien melunasi.'],
];

export default function UntukDesainer() {
  return (
    <main className="bg-paper px-6 pt-32 pb-24">
      <div className="mx-auto max-w-6xl">
        <p className="slug text-pin">Untuk desainer</p>
        <h1 className="mt-4 max-w-3xl text-[2.6rem] leading-[1.02] text-board md:text-6xl">Setiap sketsa yang Anda gambar dibayar</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed">Bribu tidak menjalankan kontes. Anda diundang ke brief karena portofolio Anda cocok, dan uang sketsa dibayar meski arah Anda tidak terpilih.</p>

        <ul className="mt-14 grid gap-px bg-board/12 md:grid-cols-2">
          {ATURAN.map(([j, d], i) => (
            <li key={j} className="bg-paper p-6 md:p-8">
              <span className="slug text-pin">Aturan {i + 1}</span>
              <h2 className="mt-2 text-2xl text-board">{j}</h2>
              <p className="mt-2 leading-relaxed">{d}</p>
            </li>
          ))}
        </ul>

        <section id="bagi-hasil" aria-labelledby="bh" className="mt-20 scroll-mt-20">
          <h2 id="bh" className="text-3xl text-board md:text-4xl">Uang sketsa & bagi hasil</h2>
          <p className="mt-3 max-w-2xl leading-relaxed">Dari setiap paket, uang sketsa ketiga desainer dibayarkan lebih dulu. Sisanya dibagi: {Math.round(BAGI * 100)}% untuk desainer terpilih, {Math.round((1 - BAGI) * 100)}% untuk Bribu.</p>
          <div className="mt-8 overflow-x-auto" tabIndex={0} role="region" aria-label="Tabel bagi hasil per kategori">
            <table className="w-full min-w-[40rem] border-collapse text-left">
              <caption className="sr-only">Rincian pembagian biaya paket per kategori</caption>
              <thead>
                <tr className="border-b-2 border-board">
                  {['Kategori', 'Paket', 'Uang sketsa (per orang)', 'Diterima desainer terpilih', 'Bagian Bribu'].map((h) => <th key={h} scope="col" className="slug py-3 pr-4 text-board">{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {Object.entries(KATEGORI).map(([k, c]) => {
                  const r = rincian(k);
                  return (
                    <tr key={k} className="border-b border-board/12">
                      <th scope="row" className="py-4 pr-4 font-semibold text-board">{c.nama}</th>
                      <td className="py-4 pr-4">{rp(c.paket)}</td>
                      <td className="py-4 pr-4">{rp(c.sketsa)}</td>
                      <td className="py-4 pr-4 font-semibold text-board">{rp(r.terpilih)}</td>
                      <td className="py-4 pr-4">{rp(r.bribu)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm">&ldquo;Diterima desainer terpilih&rdquo; = uang sketsa + {Math.round(BAGI * 100)}% sisa paket. Angka contoh purwarupa desain.</p>
        </section>

        <FormDesainer />
      </div>
    </main>
  );
}
