<script lang="ts">
  import { onMount } from 'svelte';
  import { i18n } from '$lib/i18n/index.svelte';

  const REPO = 'https://github.com/Lavescar-dev/vekalet';
  const SITE = 'https://lavescar.com.tr';

  onMount(() => i18n.init());

  const t = $derived(i18n.t);
  const locale = $derived(i18n.locale);
</script>

<svelte:head>
  <title>vekâlet — Hukuk Bürosu Yönetim Sistemi</title>
  <meta name="description" content="Solo avukatlar ve küçük hukuk büroları için self-hosted CRM/ERP — Rust + React + SQLite, müvekkil, dava, etkinlik, fatura ve belge yönetimi." />
</svelte:head>

<main class="page">
  <header class="top">
    <div class="brand">
      <span class="logo">⚖</span>
      <span class="name">vekâlet</span>
      <span class="sep">▸</span>
      <span class="mode">hukuk büro yönetimi</span>
    </div>
    <nav class="top-nav" aria-label={t.langSwitch.aria}>
      <a href={REPO} target="_blank" rel="noopener">{t.nav.github}</a>
      <a href={SITE} target="_blank" rel="noopener">{t.nav.site}</a>
      <div class="lang" role="group" aria-label={t.langSwitch.aria}>
        <button class="lang-btn" class:on={locale === 'tr'} aria-pressed={locale === 'tr'} onclick={() => i18n.set('tr')}>{t.langSwitch.tr}</button>
        <button class="lang-btn" class:on={locale === 'en'} aria-pressed={locale === 'en'} onclick={() => i18n.set('en')}>{t.langSwitch.en}</button>
      </div>
    </nav>
  </header>

  <section class="hero">
    <div class="hero-main">
      <div class="hero-eyebrow">{t.hero.eyebrow}</div>
      <h1>
        <span class="h-muted">{t.hero.titleLead}</span><br />
        <span class="h-accent">{t.hero.titleAccent}</span><br />
        {t.hero.titleTail}
      </h1>
      <p class="hero-sub">{t.hero.sub}</p>

      <div class="hero-cta">
        <a class="btn primary" href={REPO} target="_blank" rel="noopener">{t.hero.ctaSource}</a>
        <a class="btn ghost" href={SITE} target="_blank" rel="noopener">{t.hero.ctaSite}</a>
      </div>

      <div class="hero-meta">
        <span>{t.hero.metaLicense}</span>
        <span class="dot-sep">·</span>
        <span>{t.hero.metaStack}</span>
        <span class="dot-sep">·</span>
        <span>{t.hero.metaTarget}</span>
      </div>
    </div>

    <div class="hero-card" aria-hidden="true">
      <div class="mock-row head">
        <span>panel · ankara barosu · 12 dava aktif</span>
        <span class="clip">UI</span>
      </div>
      <div class="mock-rules">
        <div><code>müvekkil</code> Ahmet Yılmaz · TC ****0001</div>
        <div><code>dava</code> 2026/142 Esas · 3. Asliye Hukuk · DEVAM</div>
        <div><code>etkinlik</code> Duruşma · 12 May 10:30</div>
        <div><code>belge</code> ihtiyati_tedbir.pdf · 184 KB</div>
        <div><code>fatura</code> 2026-0042 · ₺18.750 · ÖDENMEDI</div>
      </div>
      <div class="mock-row head">izleme <span class="ready">canlı</span></div>
      <div class="mock-output">
        <div><span class="dot ok"></span>5 müvekkil · 12 dava · 3 yaklaşan duruşma</div>
        <div><span class="dot ok"></span>aylık tahsilat ₺142.300 · vadesi geçen ₺28.500</div>
        <div><span class="dot dim"></span>session avukat@buro.local · son giriş 2 dk önce</div>
      </div>
    </div>
  </section>

  <section class="block">
    <h2>{t.what.title}</h2>
    <ul class="grid">
      {#each t.what.items as item}
        <li>
          <strong>{item.name}</strong>
          <span>{item.desc}</span>
        </li>
      {/each}
    </ul>
  </section>

  <section class="block">
    <h2>{t.flow.title}</h2>
    <ol class="steps">
      {#each t.flow.steps as step}
        <li>
          <span class="step-k">{step.k}</span>
          <div>
            <strong>{step.t}</strong>
            <span>{step.d}</span>
          </div>
        </li>
      {/each}
    </ol>
  </section>

  <section class="block">
    <h2>{t.features.title}</h2>
    <ul class="grid">
      {#each t.features.items as it}
        <li>
          <strong>{it.t}</strong>
          <span>{it.d}</span>
        </li>
      {/each}
    </ul>
  </section>

  <section class="block">
    <h2>{t.install.title}</h2>
    <p class="muted">{t.install.sub}</p>
    <div class="two">
      <article class="card">
        <h3>{t.install.backendTitle}</h3>
        <pre><code>{t.install.backendCmd}</code></pre>
      </article>
      <article class="card">
        <h3>{t.install.frontendTitle}</h3>
        <pre><code>{t.install.frontendCmd}</code></pre>
      </article>
    </div>
  </section>

  <footer class="foot">
    <span>{t.footer.author}</span>
    <span class="dot-sep">·</span>
    <span>{t.footer.built}</span>
  </footer>
</main>
