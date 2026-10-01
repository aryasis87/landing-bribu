'use client';

import { useState } from 'react';
import { KATEGORI } from '@/lib/papan';

export default function FormDesainer() {
  const [selesai, setSelesai] = useState(false);
  const input = 'w-full border border-board/20 bg-white px-4 py-3 text-board focus:border-pin focus:outline-none';

  return (
    <section aria-labelledby="gabung" className="mt-20 grid gap-10 border-t-2 border-board pt-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
      <div>
        <h2 id="gabung" className="text-3xl text-board md:text-4xl">Kirim portofolio</h2>
        <p className="mt-3 leading-relaxed">Kurator membalas dalam lima hari kerja, diterima atau belum.</p>
      </div>
      {selesai ? (
        <div role="status" className="board-card p-8">
          <p className="text-2xl font-bold text-board">Portofolio tercatat.</p>
          <p className="mt-3 leading-relaxed">Ini purwarupa desain: tidak ada data yang dikirim.</p>
          <button type="button" onClick={() => setSelesai(false)} className="slug mt-6 border border-board/25 px-4 py-3 text-board hover:border-pin">Isi ulang</button>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSelesai(true); }} className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="d-nama" className="slug mb-2 block text-board">Nama</label>
            <input id="d-nama" required autoComplete="name" className={input} />
          </div>
          <div>
            <label htmlFor="d-kota" className="slug mb-2 block text-board">Kota</label>
            <input id="d-kota" required autoComplete="address-level2" className={input} />
          </div>
          <div>
            <label htmlFor="d-bidang" className="slug mb-2 block text-board">Bidang utama</label>
            <select id="d-bidang" className={input}>
              {Object.values(KATEGORI).map((c) => <option key={c.nama}>{c.nama}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="d-tautan" className="slug mb-2 block text-board">Tautan portofolio</label>
            <input id="d-tautan" type="url" required placeholder="https://" className={input} />
          </div>
          <button type="submit" className="bg-pin py-4 font-semibold text-white hover:bg-board sm:col-span-2">Kirim untuk dikurasi</button>
          <p className="text-xs leading-relaxed sm:col-span-2">Purwarupa desain — formulir ini tidak mengirim data ke mana pun.</p>
        </form>
      )}
    </section>
  );
}
