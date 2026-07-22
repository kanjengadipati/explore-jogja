'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';

const NAV_ITEMS = [
  {
    label: 'Tentang Kami',
    content:
      'Jogjagem adalah platform perjalanan digital yang membantu kamu menjelajahi keindahan Yogyakarta — dari destinasi tersembunyi hingga warisan budaya dunia. Dibuat dengan cinta oleh anak Jogja, untuk semua yang rindu Jogja.',
  },
  {
    label: 'Bantuan',
    content:
      'Butuh bantuan? Hubungi kami via email di hello@jogjagem.id atau DM Instagram @jogjagem. Tim kami siap membantu kamu merencanakan perjalanan terbaik ke Yogyakarta.',
  },
  {
    label: 'Syarat & Ketentuan',
    content:
      'Dengan menggunakan Jogjagem, kamu menyetujui penggunaan layanan secara bertanggung jawab. Konten, foto, dan data destinasi hanya untuk keperluan informasi perjalanan. Jogjagem tidak bertanggung jawab atas perubahan harga atau jam operasional destinasi.',
  },
  {
    label: 'Kebijakan Privasi',
    content:
      'Kami menghargai privasimu. Data lokasi dan preferensi perjalanan hanya digunakan untuk meningkatkan rekomendasi. Kami tidak menjual data pribadimu kepada pihak ketiga. Kamu dapat menghapus akun dan data kapan saja.',
  },
];

export default function MobileFooter() {
  const { t } = useLocale();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <footer className="xl:hidden bg-royal-950 mx-4 mb-[calc(80px+env(safe-area-inset-bottom,0px))] mt-2 rounded-3xl overflow-hidden">
      {/* Quote card */}
      <div className="px-5 pt-5 pb-4 flex items-start gap-3 border-b border-white/8">
        <span className="text-gold-500 text-3xl font-serif leading-none mt-0.5">"</span>
        <div className="flex-1 min-w-0">
          <p className="text-white/80 font-manrope font-semibold text-[12px] leading-relaxed">
            Jogja bukan sekadar tempat, tapi rasa yang selalu ingin kembali.
          </p>
          <p className="text-gold-500/70 text-[10px] font-semibold mt-1.5">— Jogjagem</p>
        </div>
        <div className="shrink-0 opacity-25">
          <Image src="/logo-gold-new.png" alt="" width={36} height={36} className="h-9 w-auto" />
        </div>
      </div>

      {/* Social icons */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-white/8">
        {[
          { icon: 'IG', href: 'https://instagram.com/jogjagem' },
          { icon: 'TK', href: 'https://tiktok.com/@jogjagem' },
          { icon: 'YT', href: 'https://youtube.com' },
          { icon: 'FB', href: 'https://facebook.com' },
        ].map(s => (
          <a
            key={s.icon}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="h-8 w-8 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/15 transition-colors text-[9px] font-bold"
          >
            {s.icon}
          </a>
        ))}
      </div>

      {/* Accordion nav */}
      <div className="px-5 divide-y divide-white/8">
        {NAV_ITEMS.map((item, idx) => (
          <div key={item.label}>
            <button
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full flex items-center justify-between py-3.5 text-left"
            >
              <span className="text-white/80 text-[13px] font-medium">{item.label}</span>
              <ChevronRight
                className={`h-4 w-4 text-white/30 transition-transform duration-200 shrink-0 ${openIdx === idx ? 'rotate-90' : ''}`}
              />
            </button>
            {openIdx === idx && (
              <p className="text-white/50 text-[12px] leading-relaxed pb-3.5 -mt-1 pr-2">
                {item.content}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Copyright */}
      <div className="px-5 py-4 border-t border-white/8">
        <p className="text-[10px] font-mono text-white/25 uppercase tracking-widest">
          {t('footer.copyright')}
        </p>
        <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest mt-0.5">
          {t('footer.build_by')}
        </p>
      </div>
    </footer>
  );
}
