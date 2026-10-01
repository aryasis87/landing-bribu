import Link from 'next/link';
import { KATEGORI, STATUS, rp, tanggal } from '@/lib/papan';

/* Kartu brief bergaya pengumuman di papan: paku tekan, kode, garis kiri biru. */

export const masuk = (b) => (b.status === 'kurasi' || b.status === 'draf' ? 0 : b.status === 'sketsa' ? b.arah.filter((a) => a[2] === 'Sketsa masuk').length : 3);

export function Slot({ b }) {
  const n = masuk(b);
  return (
    <span className="flex items-center gap-2">
      <span className="sr-only">{n} dari 3 sketsa masuk</span>
      <span aria-hidden="true" className="flex gap-1">
        {[0, 1, 2].map((i) => <span key={i} className={`h-2.5 w-4 ${i < n ? 'bg-pin' : 'border border-board/25'}`} />)}
      </span>
      <span aria-hidden="true" className="slug text-muted">{n}/3</span>
    </span>
  );
}

export function KartuBrief({ b, judul: H = 'h3', tautan = true, className = '' }) {
  const isi = (
    <>
      <span aria-hidden="true" className="absolute -top-1.5 left-6 h-3 w-3 rounded-full bg-tack shadow-[0_1px_0_rgb(16_24_32/0.4)]" />
      <span className="flex items-center justify-between gap-3">
        <span className="slug text-pin">{b.kode}</span>
        <span className={`slug shrink-0 px-2 py-1 ${b.status === 'selesai' ? 'bg-board text-chalk' : b.status === 'draf' ? 'border border-dashed border-board/40 text-board' : 'bg-paper-2 text-board'}`}>{STATUS[b.status]?.nama ?? 'Draf'}</span>
      </span>
      <span className="slug mt-1 block text-muted">{KATEGORI[b.kategori].nama}</span>
      <H className="mt-3 font-[family-name:var(--font-intertight)] text-xl font-bold tracking-tight text-board">{b.usaha || 'Nama usaha Anda'}</H>
      <span className="text-sm">{b.kota || 'Kota'}</span>
      <span className="mt-3 block text-sm leading-relaxed text-board/85">{b.ringkas || 'Ringkasan brief akan tampil di sini.'}</span>
      <span className="mt-auto flex items-center justify-between gap-3 border-t border-board/10 pt-4">
        <Slot b={b} />
        <span className="text-sm font-semibold text-board">{rp(KATEGORI[b.kategori].paket)}</span>
      </span>
      {b.dipasang && <span className="slug mt-2 block text-muted">Dipasang {tanggal(b.dipasang)}</span>}
    </>
  );
  const kelas = `board-card relative flex h-full flex-col p-6 pt-7 ${className}`;
  return tautan ? <Link href={`/papan/${b.kode.toLowerCase()}`} className={`${kelas} transition-transform hover:-translate-y-0.5`}>{isi}</Link> : <div className={kelas}>{isi}</div>;
}

/* Sketsa SVG sederhana: satu "arah" desain per gaya, dari nama & warna usaha. */
export function Sketsa({ b, gaya, label }) {
  const [c1, c2] = b.warna;
  const huruf = b.usaha.split(' ').filter((w) => w.length > 2).slice(-2).map((w) => w[0]).join('');
  const nama = b.usaha.toUpperCase();
  const g = { stroke: c1, strokeWidth: 3, fill: 'none' };
  const isi = {
    monogram: (
      <>
        <circle cx="100" cy="68" r="42" fill={c1} />
        <text x="100" y="82" textAnchor="middle" fontSize="40" fontWeight="800" fill={c2}>{huruf}</text>
        <text x="100" y="134" textAnchor="middle" fontSize="11" letterSpacing="3" fill={c1} textLength="150" lengthAdjust="spacingAndGlyphs">{nama}</text>
      </>
    ),
    wordmark: (
      <>
        <text x="100" y="80" textAnchor="middle" fontSize="30" fontWeight="800" fill={c1} textLength="168" lengthAdjust="spacingAndGlyphs">{b.usaha.split(' ').slice(-1)[0].toLowerCase()}</text>
        <path d="M24 92 H176" stroke={c1} strokeWidth="5" />
        <path d="M24 92 L40 104" stroke={c1} strokeWidth="5" />
        <text x="100" y="124" textAnchor="middle" fontSize="10" letterSpacing="2" fill={c1} textLength="150" lengthAdjust="spacingAndGlyphs">{nama}</text>
      </>
    ),
    emblem: (
      <>
        <circle cx="100" cy="72" r="54" {...g} />
        <circle cx="100" cy="72" r="44" {...g} strokeWidth="1.5" />
        <text x="100" y="86" textAnchor="middle" fontSize="38" fontWeight="800" fill={c1}>{huruf[0]}</text>
        <text x="100" y="146" textAnchor="middle" fontSize="10" letterSpacing="3" fill={c1}>{b.kota.toUpperCase()}</text>
      </>
    ),
    kantong: (
      <>
        <path d="M62 22 H138 L146 132 H54 Z" fill={c1} />
        <rect x="70" y="58" width="60" height="44" fill={c2} />
        <text x="100" y="80" textAnchor="middle" fontSize="11" fontWeight="800" fill={c1} textLength="50" lengthAdjust="spacingAndGlyphs">{nama}</text>
        <path d="M78 90 H122" stroke={c1} strokeWidth="1.5" />
      </>
    ),
    label: (
      <>
        <rect x="66" y="18" width="68" height="16" rx="3" fill={c1} />
        <rect x="58" y="34" width="84" height="102" rx="12" {...g} />
        <rect x="58" y="62" width="84" height="44" fill={c1} />
        <text x="100" y="89" textAnchor="middle" fontSize="12" fontWeight="800" fill={c2} textLength="70" lengthAdjust="spacingAndGlyphs">{nama}</text>
      </>
    ),
    pita: (
      <>
        <rect x="20" y="20" width="160" height="110" fill={c2} stroke={c1} strokeWidth="2" />
        <path d="M10 60 H190 L180 75 L190 90 H10 L20 75 Z" fill={c1} />
        <text x="100" y="80" textAnchor="middle" fontSize="13" fontWeight="800" fill={c2} textLength="140" lengthAdjust="spacingAndGlyphs">{nama}</text>
      </>
    ),
    kisi: (
      <>
        {[0, 1, 2].flatMap((r) => [0, 1, 2].map((k) => <rect key={`${r}${k}`} x={44 + k * 38} y={14 + r * 40} width="34" height="36" fill={(r + k) % 2 ? c2 : c1} stroke={c1} strokeWidth="1.5" />))}
        {[0, 1, 2].map((r) => <path key={r} d={`M${48} ${30 + r * 40} H${74}`} stroke={c2} strokeWidth="2" />)}
      </>
    ),
    kolom: (
      <>
        <rect x="44" y="14" width="112" height="122" fill={c1} />
        <text x="56" y="62" fontSize="34" fontWeight="800" fill={c2}>{huruf}</text>
        {[80, 92, 104].map((y, i) => <path key={y} d={`M56 ${y} H${144 - i * 22}`} stroke={c2} strokeWidth="5" />)}
      </>
    ),
    bukit: (
      <>
        {[0, 1, 2, 3].map((i) => <rect key={i} x={24 + (i % 2) * 78} y={20 + Math.floor(i / 2) * 58} width="72" height="52" fill={i % 3 ? c2 : c1} stroke={c1} strokeWidth="2" />)}
        <path d="M24 78 H174 M100 20 V130" stroke={c1} strokeWidth="2" strokeDasharray="4 4" />
      </>
    ),
    daun: (
      <>
        <path d="M100 18 C150 30 170 92 100 132 C30 92 50 30 100 18 Z" fill={c1} />
        <path d="M100 26 V128" stroke={c2} strokeWidth="2" />
        {[20, 36, 52].map((d) => <circle key={d} cx={70 + d} cy={10 + d / 2} r="3" fill={c1} />)}
      </>
    ),
    hujan: (
      <>
        {Array.from({ length: 9 }, (_, i) => <path key={i} d={`M${30 + i * 18} 12 l-6 16`} stroke={c1} strokeWidth="2" />)}
        <path d="M50 74 A50 40 0 0 1 150 74 Z" fill={c1} />
        <path d="M100 74 V122 a8 8 0 0 1 -16 0" {...g} />
        <path d="M20 134 H180" stroke={c1} strokeWidth="3" />
      </>
    ),
  }[gaya];
  return (
    <svg viewBox="0 0 200 150" role="img" aria-label={label} className="h-auto w-full" style={{ backgroundColor: c2 }}>
      {isi}
    </svg>
  );
}
