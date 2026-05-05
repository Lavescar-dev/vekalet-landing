export type Locale = 'tr' | 'en';

export type Dict = {
  langSwitch: { aria: string; tr: string; en: string };
  nav: { github: string; site: string };
  hero: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    titleTail: string;
    sub: string;
    ctaSource: string;
    ctaSite: string;
    metaLicense: string;
    metaStack: string;
    metaTarget: string;
  };
  what: { title: string; items: Array<{ name: string; desc: string }> };
  flow: { title: string; steps: Array<{ k: string; t: string; d: string }> };
  features: { title: string; items: Array<{ t: string; d: string }> };
  install: {
    title: string;
    sub: string;
    backendTitle: string;
    backendCmd: string;
    frontendTitle: string;
    frontendCmd: string;
  };
  footer: { author: string; built: string };
};

const tr: Dict = {
  langSwitch: { aria: 'Dil seçici', tr: 'TR', en: 'EN' },
  nav: { github: 'GitHub', site: 'lavescar.com.tr' },
  hero: {
    eyebrow: 'HUKUK BÜROSU YÖNETIM SISTEMI',
    titleLead: 'Bağımsız avukat,',
    titleAccent: 'küçük büro.',
    titleTail: 'Tek panel, sıfır şişkinlik.',
    sub: 'Türkiye’deki bağımsız avukatlar ve küçük-orta ölçekli hukuk büroları için modern CRM/ERP demosu. Müvekkil, dava, etkinlik, fatura ve belge yönetimi — Rust + React + SQLite.',
    ctaSource: 'Kaynak kodu',
    ctaSite: 'Ana site',
    metaLicense: 'MIT',
    metaStack: 'React 18 · Rust + Axum · SQLite',
    metaTarget: 'Self-hosted',
  },
  what: {
    title: 'modüller',
    items: [
      { name: 'Müvekkiller', desc: 'TC kimlik, vergi numarası, irtibat bilgileri ve müvekkile bağlı dava listesi.' },
      { name: 'Davalar', desc: 'Dava türü, mahkeme, dosya numarası, taraflar, durum ve etkinlik takvimi.' },
      { name: 'Etkinlikler', desc: 'Duruşma, randevu, tebligat — takvim ve hatırlatma akışı.' },
      { name: 'Belgeler', desc: 'Lokal disk depolama (`storage/<firm_id>/<id>_<name>`); Bearer token ile yetkili indirme.' },
      { name: 'Faturalama', desc: 'Hizmet kalemleri, KDV, ödeme takibi, PDF üretimi.' },
      { name: 'Auth', desc: 'Argon2 + sessions tablosu — basit, dış IDP gerek yok.' },
    ],
  },
  flow: {
    title: 'mimari',
    steps: [
      { k: '1', t: 'Frontend', d: 'React 18 + Vite + TypeScript + Tailwind 4 + @tanstack/react-query — single-page app.' },
      { k: '2', t: 'Backend', d: 'Rust 2021 + Axum 0.7 + sqlx + Tokio — tek statik binary, sistem servisi olarak çalıştırılabilir.' },
      { k: '3', t: 'Veri', d: 'SQLite (file-based, WAL mode). İlk çalıştırmada migration + demo seed.' },
      { k: '4', t: 'Belge', d: 'Lokal disk; multi-firm yapısında her büro kendi storage prefix’i ile izole.' },
    ],
  },
  features: {
    title: 'tasarım',
    items: [
      { t: 'Self-hosted', d: 'KVKK ve avukatlık meslek sırrı için bulut yerine on-prem ya da kendi VPS’in.' },
      { t: 'Tek statik binary', d: 'Rust release build sonrası tek dosya — runtime bağımlılığı yok, systemd ile başlat.' },
      { t: 'Çoklu büro', d: 'Tek backend, birden fazla firm_id — her büro kendi müvekkillerini ve belgelerini izole görür.' },
      { t: 'Modern UI', d: 'Tailwind 4 + radix/shadcn benzeri component’lar — masaüstü ergonomik, klavye-öncelikli.' },
      { t: 'Demo seed', d: 'İlk çalıştırmada örnek büro, kullanıcı, müvekkil, dava ve fatura — boş ekran yok.' },
      { t: 'Audit log', d: 'Auth oturumu ve kritik tablolarda kim, ne zaman, ne değiştirdi — log table ile takip.' },
    ],
  },
  install: {
    title: 'kurulum (lokal)',
    sub: 'Vekâlet full-stack lokal bir uygulama — backend Rust, frontend React. Her ikisini de kendi VPS veya makinende çalıştır.',
    backendTitle: '1. Backend',
    backendCmd:
      'cd backend\ncp .env.example .env\ncargo run\n# http://localhost:4040',
    frontendTitle: '2. Frontend',
    frontendCmd:
      'cd frontend\nbun install   # veya pnpm / npm\nbun run dev   # http://localhost:5173',
  },
  footer: { author: '© 2026 Lavescar', built: 'SvelteKit + Cloudflare Pages' },
};

const en: Dict = {
  langSwitch: { aria: 'Language switch', tr: 'TR', en: 'EN' },
  nav: { github: 'GitHub', site: 'lavescar.com.tr' },
  hero: {
    eyebrow: 'LAW FIRM MANAGEMENT SYSTEM',
    titleLead: 'Solo lawyer,',
    titleAccent: 'small firm.',
    titleTail: 'One panel, zero bloat.',
    sub: 'A modern CRM/ERP demo for solo attorneys and small Turkish law firms. Clients, cases, events, invoicing, document storage — Rust + React + SQLite.',
    ctaSource: 'Source code',
    ctaSite: 'Main site',
    metaLicense: 'MIT',
    metaStack: 'React 18 · Rust + Axum · SQLite',
    metaTarget: 'Self-hosted',
  },
  what: {
    title: 'modules',
    items: [
      { name: 'Clients', desc: 'TR national ID, tax number, contacts, and the case list bound to each client.' },
      { name: 'Cases', desc: 'Case type, court, file number, parties, status, and an event calendar.' },
      { name: 'Events', desc: 'Hearings, meetings, notifications — calendar + reminder flow.' },
      { name: 'Documents', desc: 'Local disk storage (`storage/<firm_id>/<id>_<name>`); Bearer token on download.' },
      { name: 'Invoicing', desc: 'Line items, VAT, payment tracking, PDF generation.' },
      { name: 'Auth', desc: 'Argon2 + sessions table — simple, no external IdP required.' },
    ],
  },
  flow: {
    title: 'architecture',
    steps: [
      { k: '1', t: 'Frontend', d: 'React 18 + Vite + TypeScript + Tailwind 4 + @tanstack/react-query — single-page app.' },
      { k: '2', t: 'Backend', d: 'Rust 2021 + Axum 0.7 + sqlx + Tokio — single static binary, runs as a system service.' },
      { k: '3', t: 'Data', d: 'SQLite (file-based, WAL). First run applies migrations and seeds demo data.' },
      { k: '4', t: 'Documents', d: 'Local disk, multi-firm isolation — each firm sees only its own storage prefix.' },
    ],
  },
  features: {
    title: 'design',
    items: [
      { t: 'Self-hosted', d: 'For privacy and attorney–client confidentiality, runs on-prem or on your own VPS.' },
      { t: 'Single static binary', d: 'Cargo release build → one file. No runtime deps, drop into systemd.' },
      { t: 'Multi-firm', d: 'One backend, many firm_id rows — each firm sees only its own clients and documents.' },
      { t: 'Modern UI', d: 'Tailwind 4 + radix/shadcn-style components — desktop ergonomic, keyboard-first.' },
      { t: 'Demo seed', d: 'First run plants a sample firm, users, clients, cases, invoices — no empty state.' },
      { t: 'Audit log', d: 'Auth sessions and critical tables track who-changed-what-when in a log table.' },
    ],
  },
  install: {
    title: 'install (local)',
    sub: 'Vekâlet is a full-stack local app — Rust backend, React frontend. Run both on your own VPS or machine.',
    backendTitle: '1. Backend',
    backendCmd:
      'cd backend\ncp .env.example .env\ncargo run\n# http://localhost:4040',
    frontendTitle: '2. Frontend',
    frontendCmd:
      'cd frontend\nbun install   # or pnpm / npm\nbun run dev   # http://localhost:5173',
  },
  footer: { author: '© 2026 Lavescar', built: 'SvelteKit + Cloudflare Pages' },
};

export const dictionaries: Record<Locale, Dict> = { tr, en };
export { en };
export const defaultLocale: Locale = 'tr';
