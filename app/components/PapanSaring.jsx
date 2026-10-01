'use client';

import { useState } from 'react';
import { BRIEF, KATEGORI, STATUS } from '@/lib/papan';
import { KartuBrief } from './Papan';

export default function PapanSaring() {
  const [kat, setKat] = useState('semua');
  const [st, setSt] = useState('semua');
  const tampil = BRIEF.filter((b) => (kat === 'semua' || b.kategori === kat) && (st === 'semua' || b.status === st));
  const tombol = (aktif) => `slug border px-3 py-2 ${aktif ? 'border-board bg-board text-chalk' : 'border-board/20 bg-white text-board hover:border-board'}`;

  return (
    <>
      <div className="mt-10 flex flex-col gap-4 border-y border-board/12 py-5 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label="Saring kategori" className="flex flex-wrap gap-2">
          {[['semua', 'Semua kategori'], ...Object.entries(KATEGORI).map(([k, c]) => [k, c.nama])].map(([k, n]) => (
            <button key={k} type="button" aria-pressed={kat === k} onClick={() => setKat(k)} className={tombol(kat === k)}>{n}</button>
          ))}
        </div>
        <div role="group" aria-label="Saring status" className="flex flex-wrap gap-2">
          {[['semua', 'Semua status'], ...Object.entries(STATUS).map(([k, s]) => [k, s.nama])].map(([k, n]) => (
            <button key={k} type="button" aria-pressed={st === k} onClick={() => setSt(k)} className={tombol(st === k)}>{n}</button>
          ))}
        </div>
      </div>
      <p className="slug mt-6 text-muted" role="status">{tampil.length} brief</p>
      {tampil.length ? (
        <ul className="mt-8 grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {tampil.map((b) => <li key={b.kode}><KartuBrief b={b} judul="h2" /></li>)}
        </ul>
      ) : (
        <p className="mt-8 border border-dashed border-board/25 p-8 text-center">Belum ada brief dengan saringan ini.</p>
      )}
    </>
  );
}
