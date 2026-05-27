<?php
/**
 * Template Name: Home
 */
get_header(); ?>

<!-- Google Fonts: Barlow Condensed (display) + Barlow (body) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">

<style>
  :root {
    --red:        #CC0000;
    --red-dark:   #A80000;
    --red-light:  #fff0f0;
    --red-glow:   rgba(204,0,0,0.10);
    --charcoal:   #2B2B2B;
    --ink:        #1A1A1A;
    --bg:         #F6F6F4;
    --bg-2:       #FFFFFF;
    --bg-3:       #F0EFED;
    --bg-4:       #E8E7E5;
    --border:     rgba(0,0,0,0.09);
    --text-muted: rgba(0,0,0,0.50);
    --text-dim:   rgba(0,0,0,0.30);
  }

  /* Base */
  .rcs-page { font-family: 'DM Sans', sans-serif; background: var(--bg); color: var(--ink); }
  .rcs-display { font-family: 'Montserrat', sans-serif; }

  /* Paint-stroke texture background */
  .paint-texture {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='600'%3E%3Cfilter id='p'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='600' height='600' filter='url(%23p)' opacity='0.035'/%3E%3C/svg%3E");
  }

  /* Section label */
  .section-label {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: .22em;
    text-transform: uppercase;
    color: var(--red);
    margin-bottom: 20px;
  }
  .section-label::before {
    content: '';
    display: block;
    width: 24px;
    height: 2px;
    background: var(--red);
    flex-shrink: 0;
  }

  /* Swoosh diagonal — el elemento clave del flyer */
  .swoosh-section {
    position: relative;
    overflow: hidden;
  }
  .swoosh-section::before {
    content: '';
    position: absolute;
    top: -10%;
    left: -8%;
    width: 65%;
    height: 130%;
    background: var(--red);
    border-radius: 0 60% 60% 0 / 0 50% 50% 0;
    transform: rotate(-3deg);
    z-index: 0;
  }

  /* Light grid texture */
  .grid-bg {
    background-image:
      linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
    background-size: 48px 48px;
  }

  /* Stat counter */
  .stat-number {
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(52px, 6vw, 80px);
    font-weight: 900;
    line-height: 1;
    color: var(--red);
    letter-spacing: -0.03em;
  }
  .stat-number span { color: var(--charcoal); }

  /* Phase step */
  .phase-step {
    position: relative;
    padding-left: 28px;
    border-left: 2px solid var(--border);
    transition: border-color .2s;
  }
  .phase-step:hover { border-color: var(--red); }
  .phase-step::before {
    content: '';
    position: absolute;
    left: -5px;
    top: 6px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--red);
  }

  /* Service card */
  .service-card {
    background: var(--bg-2);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 36px 32px;
    transition: border-color .2s, transform .2s, box-shadow .2s;
    position: relative;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(0,0,0,0.05);
  }
  .service-card::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3px;
    background: var(--red);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform .3s ease;
  }
  .service-card:hover {
    border-color: rgba(204,0,0,0.3);
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(204,0,0,0.10);
  }
  .service-card:hover::after { transform: scaleX(1); }

  /* Reason card */
  .reason-card {
    background: var(--bg-2);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 28px;
    transition: border-color .2s, box-shadow .2s;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  }
  .reason-card:hover {
    border-color: rgba(204,0,0,0.25);
    box-shadow: 0 8px 28px rgba(204,0,0,0.08);
  }

  /* Market card */
  .market-card {
    background: var(--bg-2);
    border: 1px solid var(--border);
    border-radius: 10px;
    overflow: hidden;
    transition: box-shadow .25s, transform .2s;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  }
  .market-card:hover {
    box-shadow: 0 12px 40px rgba(204,0,0,0.12);
    transform: translateY(-2px);
  }
  .market-thumb {
    height: 160px;
    background: var(--bg-3);
    position: relative;
    display: flex;
    align-items: flex-end;
    padding: 16px;
  }

  /* Credential table */
  .cred-col {
    background: var(--bg-2);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 28px 24px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  }
  .cred-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 10px 0;
    border-bottom: 1px solid var(--border);
    font-size: 14px;
    color: var(--text-muted);
    line-height: 1.4;
  }
  .cred-item:last-child { border: none; padding-bottom: 0; }
  .cred-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--red);
    flex-shrink: 0;
    margin-top: 5px;
  }

  /* FAQ */
  .faq-item { border-bottom: 1px solid var(--border); }
  .faq-btn {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    padding: 22px 0;
    text-align: left;
    background: none;
    border: none;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: var(--ink);
    transition: color .15s;
  }
  .faq-btn:hover { color: var(--red); }
  .faq-btn .faq-icon {
    width: 28px;
    height: 28px;
    border-radius: 6px;
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 18px;
    font-weight: 300;
    color: var(--red);
    transition: background .15s, transform .25s;
  }
  .faq-btn[aria-expanded="true"] .faq-icon {
    background: var(--red);
    color: #fff;
    transform: rotate(45deg);
  }
  .faq-answer {
    display: none;
    padding-bottom: 20px;
    font-size: 15px;
    color: var(--text-muted);
    line-height: 1.7;
  }
  .faq-answer a { color: var(--red); text-decoration: none; }
  .faq-answer a:hover { text-decoration: underline; }
  .faq-answer.open { display: block; }

  /* CTA button */
  .btn-red {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 28px;
    background: var(--red);
    color: #fff;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 800;
    letter-spacing: .04em;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    transition: background .15s, transform .1s, box-shadow .15s;
    box-shadow: 0 4px 20px rgba(204,0,0,0.30);
  }
  .btn-red:hover { background: var(--red-dark); color: #fff; box-shadow: 0 6px 28px rgba(204,0,0,.40); }
  .btn-red:active { transform: scale(.97); }

  .btn-ghost {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 28px;
    background: transparent;
    color: var(--ink);
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: .04em;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 50px;
    border: 2px solid var(--border);
    transition: border-color .15s, color .15s, background .15s;
  }
  .btn-ghost:hover { border-color: var(--red); color: var(--red); background: var(--red-light); }

  /* Ghost white variant — for red/dark sections */
  .btn-ghost-white {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 28px;
    background: rgba(255,255,255,0.15);
    color: #fff;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: .04em;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 50px;
    border: 2px solid rgba(255,255,255,0.4);
    transition: background .15s, border-color .15s;
  }
  .btn-ghost-white:hover { background: rgba(255,255,255,0.25); border-color: #fff; color: #fff; }

  /* Trust strip badge */
  .trust-badge {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 12px;
    font-weight: 700;
    color: rgba(255,255,255,0.85);
    white-space: nowrap;
  }
  .trust-dot { width: 4px; height: 4px; border-radius: 50%; background: rgba(255,255,255,0.5); flex-shrink: 0; }

  /* Scroll reveal */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .reveal { animation: fadeUp .6s ease both; }
  .reveal-d1 { animation-delay: .1s; }
  .reveal-d2 { animation-delay: .2s; }
  .reveal-d3 { animation-delay: .3s; }
  .reveal-d4 { animation-delay: .4s; }
</style>

<main class="rcs-page">

  <!-- ═══════════════════════════════════════════════════════════
       §1 — HERO  (swoosh rojo sobre fondo claro — estética flyer)
  ════════════════════════════════════════════════════════════ -->
  <section
    class="swoosh-section relative overflow-hidden"
    style="background: #F0EFED; min-height: 100vh;"
  >
    <!-- Paint texture -->
    <div class="paint-texture absolute inset-0" style="pointer-events:none;"></div>

    <!-- Two-column grid -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-24">
      <div class="grid lg:grid-cols-2 gap-12 items-center">

        <!-- ── LEFT: Headline (sobre el swoosh rojo) ── -->
        <div class="reveal">

          <!-- Eyebrow -->
          <div class="section-label mb-6" style="color:#fff;">
            <span style="background:#fff;width:24px;height:2px;display:inline-block;flex-shrink:0;"></span>
            Multifamily painting specialist · Texas &amp; South Central
          </div>

          <!-- H1 -->
          <h1 class="rcs-display text-white mb-8"
            style="font-size: clamp(44px, 5.5vw, 76px); font-weight: 900; line-height: .95; letter-spacing: -0.03em;">
            High-volume<br>
            multifamily<br>
            painting that<br>
            <span style="color:rgba(255,255,255,0.65);">hits your schedule.</span>
          </h1>

          <!-- Subhead -->
          <p class="mb-3" style="font-size:16px; color:rgba(255,255,255,.78); line-height:1.75; max-width:460px;">
            New construction multifamily painting is its own discipline. Production rates, MEP coordination, finish standards, draw schedules they all depend on a painter who specializes in this work.
          </p>
          <p class="mb-10" style="font-size:16px; color:rgba(255,255,255,.65); line-height:1.75; max-width:460px;">
            The partner GCs and developers across Texas trust to protect their schedule, deliver consistent finish quality, and communicate clearly from RFP through turnover.
          </p>

          <!-- Trust strip -->
          <div class="flex flex-wrap gap-x-5 gap-y-3">
            <?php
              $trust = [
                'OSHA 10 & 30',
                'Boom Lift Certified',
                'Fully Insured',
                'Hispanic-Owned',
                'DUNS #082349795',
                '30+ Years Experience',
              ];
              foreach ($trust as $item) : ?>
                <div class="trust-badge">
                  <span class="trust-dot"></span>
                  <?php echo esc_html($item); ?>
                </div>
            <?php endforeach; ?>
          </div>

        </div>

        <!-- ── RIGHT: React ContactForm ── -->
        <div class="reveal reveal-d2">
          <div id="render-hero-form-here"></div>
        </div>

      </div>
    </div>

    <!-- Bottom fade -->
    <div class="absolute bottom-0 inset-x-0 h-2"
      style="background: linear-gradient(to bottom, transparent, #F0EFED); z-index:1; pointer-events:none;"></div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════
       §2 — STATS STRIP
  ════════════════════════════════════════════════════════════ -->
  <section style="background: var(--red); border-top: none;">
    <div class="max-w-7xl mx-auto px-6 py-16">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">

        <?php
          $stats = [
            [ 'number' => '30',  'suffix' => '+', 'label' => 'Years of multifamily painting experience' ],
            [ 'number' => '20',  'suffix' => '+', 'label' => 'Active projects running simultaneously' ],
            [ 'number' => '8',   'suffix' => '',  'label' => 'States across Texas + South Central' ],
            [ 'number' => '100', 'suffix' => '+', 'label' => 'Painters mobilized across our service area' ],
          ];
          foreach ($stats as $stat) : ?>
            <div class="flex flex-col gap-2 lg:border-r lg:border-white/20 lg:last:border-0 lg:pr-8">
              <div class="stat-number" style="color:#fff;"><?php echo esc_html($stat['number']); ?><span style="color:rgba(255,255,255,0.6);"><?php echo esc_html($stat['suffix']); ?></span></div>
              <p style="font-size:13px; color:rgba(255,255,255,0.7); line-height:1.45; max-width:180px;"><?php echo esc_html($stat['label']); ?></p>
            </div>
        <?php endforeach; ?>

      </div>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════
       §3 — WHO WE ARE
  ════════════════════════════════════════════════════════════ -->
  <section style="background: var(--bg); padding: 100px 0; border-top:1px solid var(--border);">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-center">

        <!-- Left — copy -->
        <div>
          <div class="section-label">About RCS</div>
          <h2 class="rcs-display mb-6"
            style="font-size: clamp(28px, 3.5vw, 46px); font-weight: 900; line-height: 1.0; letter-spacing:-0.03em; color:var(--ink);">
            Built for construction<br>professionals who need<br>
            <em style="color:var(--red); font-style:normal;">a painter they can count on.</em>
          </h2>
          <p class="mb-5" style="font-size:16px; color:var(--text-muted); line-height:1.78;">
            Multifamily new construction runs on tight margins and tighter schedules. GCs and developers managing complex builds need a painting partner who shows up with the right manpower, hits inspection milestones, and closes the punch on time — without follow-up emails to make it happen.
          </p>
          <p class="mb-5" style="font-size:16px; color:var(--text-muted); line-height:1.78;">
            RCS Complete Painting was built around exactly that promise. Every crew, every supervisor, every shift is dedicated to one discipline: multifamily new construction. That focus is what lets us deliver consistent production rates across every job, and it's what allows our partners to plan schedules they can actually keep.
          </p>
          <p class="mb-10" style="font-size:16px; color:var(--text-muted); line-height:1.78;">
            We compete on schedule reliability, finish quality, and clear communication — the things that actually move a project forward.
          </p>
          <a href="/about-us" class="btn-ghost">Learn how we work →</a>
        </div>

        <!-- Right — image placeholder + accent block -->
        <div class="relative">
          <!-- Main image -->
          <div class="rounded-xl overflow-hidden"
            style="height:480px; background:var(--bg-3); border:1px solid var(--border); position:relative;">
            <!-- Real photo goes here as inline style background -->
            <div style="position:absolute;inset:0;background:url('/wp-content/uploads/about-rcs.jpg') center/cover no-repeat;"></div>
            <!-- If no photo, show placeholder pattern -->
            <div class="grid-bg" style="position:absolute;inset:0;opacity:.5;"></div>
            <div style="position:absolute;inset:0;background:linear-gradient(135deg,rgba(0,0,0,.6) 0%,transparent 60%);"></div>

            <!-- Overlay label -->
            <div style="position:absolute;bottom:24px;left:24px;right:24px;">
              <div style="background:rgba(0,0,0,.75);backdrop-filter:blur(12px);border:1px solid var(--border);border-radius:8px;padding:16px 20px;">
                <p style="font-size:12px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:4px;">Owner-supervised on every project</p>
                <p style="font-size:13px;color:var(--text-muted);">The founder walks every bid, every walkthrough, every punch.</p>
              </div>
            </div>
          </div>

          <!-- Floating stat -->
          <div class="absolute -top-5 -right-5 hidden lg:flex flex-col items-center justify-center text-center"
            style="width:120px;height:120px;background:var(--red);border-radius:12px;box-shadow:0 20px 60px rgba(204,0,0,.4);">
            <span class="rcs-display" style="font-size:38px;font-weight:900;line-height:1;">30<span style="font-size:22px;">+</span></span>
            <span style="font-size:11px;color:rgba(255,255,255,.75);font-weight:600;line-height:1.3;margin-top:4px;">Years<br>Experience</span>
          </div>
        </div>

      </div>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════
       §4 — SERVICES
  ════════════════════════════════════════════════════════════ -->
  <section style="background: var(--bg); padding: 100px 0; border-top:1px solid var(--border);">
    <div class="max-w-7xl mx-auto px-6">

      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
        <div>
          <div class="section-label">What We Do</div>
          <h2 class="rcs-display"
            style="font-size: clamp(34px, 4.5vw, 56px); font-weight:900; line-height:.95; letter-spacing:-0.03em; max-width:560px; color:var(--ink);">
            Three services.<br>One discipline.<br>
            <span style="color:var(--red);">Built for new construction.</span>
          </h2>
        </div>
        <p style="font-size:15px;color:var(--text-muted);line-height:1.7;max-width:380px;">
          Every service below is purpose-built for multifamily new construction. Our team, equipment, and processes are tuned for the production rates, safety standards, and finish quality this work requires.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6">

        <!-- Interior -->
        <div class="service-card">
          <div class="mb-6" style="width:44px;height:44px;background:var(--red-glow);border:1px solid rgba(204,0,0,.3);border-radius:8px;display:flex;align-items:center;justify-content:center;">
            <svg width="20" height="20" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
          </div>
          <div style="font-size:11px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:10px;">Interior</div>
          <h3 class="rcs-display mb-4" style="font-size:26px;font-weight:800;line-height:1.05;">Multifamily Interior Painting</h3>
          <p style="font-size:14px;color:var(--text-muted);line-height:1.75;margin-bottom:24px;">
            New unit production at scale. Prep, prime, finish, punch — executed across the building on schedules our partners can plan around. Smooth-finish drywall, fire-rated assemblies, MEP coordination, and finish standards documented per unit.
          </p>
          <a href="/services/multifamily-interior-painting"
            style="font-size:13px;font-weight:700;color:var(--red);text-decoration:none;letter-spacing:.04em;text-transform:uppercase;display:inline-flex;align-items:center;gap:6px;transition:gap .15s;"
            onmouseover="this.style.gap='10px'" onmouseout="this.style.gap='6px'">
            See interior services
            <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="9,18 15,12 9,6"/></svg>
          </a>
        </div>

        <!-- Exterior -->
        <div class="service-card">
          <div class="mb-6" style="width:44px;height:44px;background:var(--red-glow);border:1px solid rgba(204,0,0,.3);border-radius:8px;display:flex;align-items:center;justify-content:center;">
            <svg width="20" height="20" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </div>
          <div style="font-size:11px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:10px;">Exterior</div>
          <h3 class="rcs-display mb-4" style="font-size:26px;font-weight:800;line-height:1.05;">Multifamily Exterior Painting</h3>
          <p style="font-size:14px;color:var(--text-muted);line-height:1.75;margin-bottom:24px;">
            Weather-resistant exterior systems built for Texas and South Central conditions. Surface prep, repair, primer and topcoat across stucco, fiber cement, trim, and architectural metals. Boom lift certified crews for mid-rise envelopes.
          </p>
          <a href="/services/multifamily-exterior-painting"
            style="font-size:13px;font-weight:700;color:var(--red);text-decoration:none;letter-spacing:.04em;text-transform:uppercase;display:inline-flex;align-items:center;gap:6px;transition:gap .15s;"
            onmouseover="this.style.gap='10px'" onmouseout="this.style.gap='6px'">
            See exterior services
            <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="9,18 15,12 9,6"/></svg>
          </a>
        </div>

        <!-- Specialty -->
        <div class="service-card">
          <div class="mb-6" style="width:44px;height:44px;background:var(--red-glow);border:1px solid rgba(204,0,0,.3);border-radius:8px;display:flex;align-items:center;justify-content:center;">
            <svg width="20" height="20" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
          </div>
          <div style="font-size:11px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:10px;">Specialty</div>
          <h3 class="rcs-display mb-4" style="font-size:26px;font-weight:800;line-height:1.05;">Specialty Coatings &amp; Color Consulting</h3>
          <p style="font-size:14px;color:var(--text-muted);line-height:1.75;margin-bottom:24px;">
            Electrostatic painting for railings, doors, frames, and industrial metal components. Color consulting partnerships with developers selecting palettes for new properties — backed by premium commercial-grade product expertise.
          </p>
          <a href="/services/specialty-coatings"
            style="font-size:13px;font-weight:700;color:var(--red);text-decoration:none;letter-spacing:.04em;text-transform:uppercase;display:inline-flex;align-items:center;gap:6px;transition:gap .15s;"
            onmouseover="this.style.gap='10px'" onmouseout="this.style.gap='6px'">
            See specialty services
            <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="9,18 15,12 9,6"/></svg>
          </a>
        </div>

      </div>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════
       §5 — WHY RCS
  ════════════════════════════════════════════════════════════ -->
  <section style="background: var(--bg-3); padding: 100px 0; border-top:1px solid var(--border);">
    <div class="max-w-7xl mx-auto px-6">

      <div class="text-center mb-14">
        <div class="section-label" style="justify-content:center;">Why Choose RCS</div>
        <h2 class="rcs-display" style="font-size:clamp(34px,4.5vw,56px);font-weight:900;line-height:.95;letter-spacing:-0.03em;color:var(--ink);">
          Why construction professionals<br><span style="color:var(--red);">choose RCS.</span>
        </h2>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

        <?php
          $reasons = [
            [
              'title' => 'Owner-supervised on every job.',
              'body'  => 'The founder is on-site, walking the project. The same person who shook your hand at the bid walk is the one walking your punch. Continuity and accountability from day one to closeout.',
              'icon'  => '<svg width="20" height="20" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
            ],
            [
              'title' => 'Built for multifamily new construction.',
              'body'  => 'Our entire team, equipment, and process are designed around one project type. That focus is what allows us to maintain production rates partners can build a schedule around.',
              'icon'  => '<svg width="20" height="20" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>',
            ],
            [
              'title' => '20+ simultaneous active projects.',
              'body'  => 'We operate at scale every day. Mobilization, scheduling, manpower allocation — all proven across 20+ live projects running simultaneously across Texas and the South Central region.',
              'icon'  => '<svg width="20" height="20" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
            ],
            [
              'title' => 'OSHA certified. Fully insured.',
              'body'  => 'Every crew member trained to OSHA 10 minimum, supervisors at OSHA 30. General liability, workers\' comp, and auto coverage in place. COIs delivered within 24 hours of request.',
              'icon'  => '<svg width="20" height="20" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
            ],
            [
              'title' => 'Eight-state service area. One standard.',
              'body'  => 'Active across Texas (Austin, Houston, Dallas-Fort Worth, San Antonio) plus Oklahoma, Louisiana, Arkansas, and New Mexico. The same execution quality regardless of which market your project sits in.',
              'icon'  => '<svg width="20" height="20" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>',
            ],
            [
              'title' => 'Hispanic-owned. HUB-eligible. DUNS registered.',
              'body'  => 'Hispanic-owned business with DUNS #082349795. Eligible for HUB Texas certification and federal contracting through SAM.gov. Relevant for MWBE inclusion goals on public and institutional projects.',
              'icon'  => '<svg width="20" height="20" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
            ],
          ];
          foreach ($reasons as $i => $r) : ?>
            <div class="reason-card">
              <div class="mb-5" style="width:40px;height:40px;background:var(--red-glow);border:1px solid rgba(204,0,0,.25);border-radius:8px;display:flex;align-items:center;justify-content:center;">
                <?php echo $r['icon']; ?>
              </div>
              <h3 style="font-family:'Montserrat', sans-serif;font-size:19px;font-weight:800;color:var(--ink);line-height:1.15;margin-bottom:12px;">
                <?php echo esc_html($r['title']); ?>
              </h3>
              <p style="font-size:14px;color:var(--text-muted);line-height:1.72;">
                <?php echo esc_html($r['body']); ?>
              </p>
            </div>
        <?php endforeach; ?>

      </div>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════
       §6 — HOW WE RUN A PROJECT
  ════════════════════════════════════════════════════════════ -->
  <section id="how-we-run" style="background:var(--bg-3);padding:100px 0;border-top:1px solid var(--border);">
    <div class="max-w-7xl mx-auto px-6">

      <div class="grid lg:grid-cols-2 gap-16 items-start">

        <!-- Left — heading -->
        <div class="lg:sticky lg:top-32">
          <div class="section-label">Our Process</div>
          <h2 class="rcs-display mb-6"
            style="font-size:clamp(34px,4.5vw,56px);font-weight:900;line-height:.95;letter-spacing:-0.03em;color:var(--ink);">
            How we run a project,<br>
            <span style="color:var(--red);">from RFP to turnover.</span>
          </h2>
          <p style="font-size:15px;color:var(--text-muted);line-height:1.75;max-width:400px;">
            Five phases. Each one with a commitment you can hold us to.
          </p>
        </div>

        <!-- Right — phases -->
        <div class="flex flex-col gap-8">
          <?php
            $phases = [
              [
                'label' => 'Phase 1',
                'time'  => 'Days 1–7',
                'title' => 'Bid & Walkthrough',
                'body'  => 'On-site walk within 72 hours of RFP receipt. Detailed bid with line-item scope, schedule, manpower plan, and material specifications delivered within five business days.',
              ],
              [
                'label' => 'Phase 2',
                'time'  => 'Days 8–14',
                'title' => 'Pre-Construction Alignment',
                'body'  => 'Submittals, color schedule confirmation, MEP coordination meeting, site safety plan, and manpower loading curve. Owner present at every kick-off.',
              ],
              [
                'label' => 'Phase 3',
                'time'  => 'Mobilization',
                'title' => 'Crews On-Site',
                'body'  => 'Crews on-site per the agreed schedule. Daily progress reports, weekly photo documentation, manpower logs, and schedule variance reports — sent before you ask.',
              ],
              [
                'label' => 'Phase 4',
                'time'  => 'Production',
                'title' => 'Owner-Supervised Production',
                'body'  => 'Owner-supervised QC walks weekly. Punch list management integrated into production, not deferred to the end. Crews stay on a single project until completion.',
              ],
              [
                'label' => 'Phase 5',
                'time'  => 'Turnover',
                'title' => 'Turnover & Warranty',
                'body'  => 'Final walk, punch closeout, warranty documentation, and CO support. Two-year workmanship warranty standard. Extended terms available by project.',
              ],
            ];
            foreach ($phases as $phase) : ?>
              <div class="phase-step">
                <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
                  <span style="font-size:11px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:var(--red);"><?php echo esc_html($phase['label']); ?></span>
                  <span style="width:1px;height:12px;background:rgba(255,255,255,.15);"></span>
                  <span style="font-size:12px;color:var(--text-dim);font-weight:600;"><?php echo esc_html($phase['time']); ?></span>
                </div>
                <h3 style="font-family:'Montserrat', sans-serif;font-size:21px;font-weight:800;color:var(--ink);margin-bottom:8px;">
                  <?php echo esc_html($phase['title']); ?>
                </h3>
                <p style="font-size:14px;color:var(--text-muted);line-height:1.72;">
                  <?php echo esc_html($phase['body']); ?>
                </p>
              </div>
          <?php endforeach; ?>
        </div>

      </div>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════
       §7 — MARKETS WE SERVE
  ════════════════════════════════════════════════════════════ -->
  <section style="background:var(--bg);padding:100px 0;border-top:1px solid var(--border);">
    <div class="max-w-7xl mx-auto px-6">

      <div class="section-label">Service Area</div>
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
        <h2 class="rcs-display"
          style="font-size:clamp(34px,4.5vw,56px);font-weight:900;line-height:.95;letter-spacing:-0.03em;color:var(--ink);max-width:560px;">
          Active across Texas and<br>
          <span style="color:var(--red);">the South Central region.</span>
        </h2>
        <p style="font-size:15px;color:var(--text-muted);line-height:1.7;max-width:360px;">
          Texas has added 2+ million new residents since 2020. Our service area expands into Oklahoma, Louisiana, Arkansas, and New Mexico — covering the South Central US where multifamily growth is most active.
        </p>
      </div>

      <!-- Texas markets grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <?php
          $markets = [
            [
              'city'    => 'Austin, TX',
              'badge'   => 'Headquarters',
              'stat'    => '11,000+',
              'stat_l'  => 'new housing permits',
              'slug'    => 'austin',
              'img'     => '/wp-content/uploads/market-austin.jpg',
            ],
            [
              'city'    => 'Houston, TX',
              'badge'   => 'Highest project velocity',
              'stat'    => '40,000+',
              'stat_l'  => 'new residents per year',
              'slug'    => 'houston',
              'img'     => '/wp-content/uploads/market-houston.jpg',
            ],
            [
              'city'    => 'Dallas–Fort Worth',
              'badge'   => 'Largest metro pipeline',
              'stat'    => '20%',
              'stat_l'  => 'metro growth since 2020',
              'slug'    => 'dallas-fort-worth',
              'img'     => '/wp-content/uploads/market-dfw.jpg',
            ],
            [
              'city'    => 'San Antonio, TX',
              'badge'   => 'Established multifamily base',
              'stat'    => 'I-35',
              'stat_l'  => 'corridor & Loop 1604 zones',
              'slug'    => 'san-antonio',
              'img'     => '/wp-content/uploads/market-sanantonio.jpg',
            ],
          ];
          foreach ($markets as $m) : ?>
            <a href="/locations/<?php echo esc_attr($m['slug']); ?>" class="market-card" style="text-decoration:none;">
              <div class="market-thumb">
                <!-- Real photo as inline bg -->
                <div style="position:absolute;inset:0;background:url('<?php echo esc_attr($m['img']); ?>') center/cover no-repeat;"></div>
                <div class="grid-bg" style="position:absolute;inset:0;"></div>
                <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.8) 0%,rgba(0,0,0,.2) 60%);"></div>

                <div style="position:relative;z-index:1;">
                  <span style="font-size:10px;font-weight:800;letter-spacing:.15em;text-transform:uppercase;color:var(--red);background:rgba(204,0,0,.15);border:1px solid rgba(204,0,0,.35);padding:3px 8px;border-radius:4px;">
                    <?php echo esc_html($m['badge']); ?>
                  </span>
                </div>
              </div>

              <div style="padding:20px;">
                <h3 style="font-family:'Montserrat', sans-serif;font-size:20px;font-weight:800;color:var(--ink);margin-bottom:8px;">
                  <?php echo esc_html($m['city']); ?>
                </h3>
                <div style="display:flex;align-items:baseline;gap:6px;">
                  <span style="font-family:'Montserrat', sans-serif;font-size:26px;font-weight:900;color:var(--red);"><?php echo esc_html($m['stat']); ?></span>
                  <span style="font-size:12px;color:var(--text-muted);"><?php echo esc_html($m['stat_l']); ?></span>
                </div>
              </div>
            </a>
        <?php endforeach; ?>
      </div>

      <!-- Regional states band -->
      <div style="background:var(--bg-4);border:1px solid var(--border);border-radius:10px;padding:20px 28px;display:flex;flex-wrap:wrap;align-items:center;gap:12px;">
        <span style="font-size:11px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:var(--text-dim);">Also active in:</span>
        <?php
          $states = ['Oklahoma', 'Louisiana', 'Arkansas', 'New Mexico'];
          foreach ($states as $s) : ?>
            <span style="font-size:14px;font-weight:700;color:rgba(255,255,255,.6);padding:6px 14px;border:1px solid var(--border);border-radius:6px;">
              <?php echo esc_html($s); ?>
            </span>
        <?php endforeach; ?>
      </div>

    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════
       §8 — CREDENTIALS
  ════════════════════════════════════════════════════════════ -->
  <section style="background:var(--bg-3);padding:100px 0;border-top:1px solid var(--border);">
    <div class="max-w-7xl mx-auto px-6">

      <div class="text-center mb-14">
        <div class="section-label" style="justify-content:center;">Verified Credentials</div>
        <h2 class="rcs-display" style="font-size:clamp(34px,4.5vw,56px);font-weight:900;line-height:.95;letter-spacing:-0.03em;color:var(--ink);">
          Credentials that pass<br><span style="color:var(--red);">procurement review.</span>
        </h2>
        <p style="font-size:15px;color:var(--text-muted);line-height:1.7;margin-top:16px;max-width:520px;margin-left:auto;margin-right:auto;">
          Every credential below is verifiable. Insurance certificates, W-9, and references available on request — typically delivered within one business day.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-5">

        <!-- Safety & Training -->
        <div class="cred-col">
          <div style="font-size:11px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:18px;padding-bottom:14px;border-bottom:1px solid var(--border);">
            Safety &amp; Training
          </div>
          <?php
            $safety = [
              'OSHA 10 — all field crew',
              'OSHA 30 — all supervisors',
              'Boom lift certified',
              'Fall protection trained',
            ];
            foreach ($safety as $item) : ?>
              <div class="cred-item">
                <span class="cred-dot"></span>
                <?php echo esc_html($item); ?>
              </div>
          <?php endforeach; ?>
        </div>

        <!-- Business & Legal -->
        <div class="cred-col">
          <div style="font-size:11px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:18px;padding-bottom:14px;border-bottom:1px solid var(--border);">
            Business &amp; Legal
          </div>
          <?php
            $legal = [
              'Fully insured (GL, WC, auto)',
              'DUNS #082349795',
              'Hispanic-owned business',
              'Texas registered LLC',
            ];
            foreach ($legal as $item) : ?>
              <div class="cred-item">
                <span class="cred-dot"></span>
                <?php echo esc_html($item); ?>
              </div>
          <?php endforeach; ?>
        </div>

        <!-- Quality Standards -->
        <div class="cred-col">
          <div style="font-size:11px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:18px;padding-bottom:14px;border-bottom:1px solid var(--border);">
            Quality Standards
          </div>
          <?php
            $quality = [
              'Owner-supervised every project',
              'Premium commercial-grade coatings',
              '2-year workmanship warranty',
              'Documented QC walks',
            ];
            foreach ($quality as $item) : ?>
              <div class="cred-item">
                <span class="cred-dot"></span>
                <?php echo esc_html($item); ?>
              </div>
          <?php endforeach; ?>
        </div>

      </div>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════
       §9 — FAQ
  ════════════════════════════════════════════════════════════ -->
  <section style="background:var(--bg);padding:100px 0;border-top:1px solid var(--border);">
    <div class="max-w-7xl mx-auto px-6">

      <div class="grid lg:grid-cols-3 gap-16">

        <!-- Left — heading -->
        <div>
          <div class="section-label">FAQ</div>
          <h2 class="rcs-display mb-6"
            style="font-size:clamp(34px,4vw,48px);font-weight:900;line-height:.95;letter-spacing:-0.03em;">
            Common questions<br>from GCs and<br>
            <span style="color:var(--red);">developers.</span>
          </h2>
          <p style="font-size:14px;color:var(--text-muted);line-height:1.75;margin-bottom:24px;">
            Don't see your question? We respond within one business day.
          </p>
          <a href="/contact-us" class="btn-red" style="font-size:13px;padding:12px 22px;">
            Request a bid
          </a>
        </div>

        <!-- Right — accordion -->
        <div class="lg:col-span-2">
          <?php
            $faqs = [
              [
                'q' => 'What types of projects do you specialize in?',
                'a' => 'Multifamily new construction across the full range — garden-style, mid-rise, senior housing, townhomes, and mixed-use multifamily. Specializing in <a href="/services">new construction</a> is what allows us to deliver consistent production rates and schedule reliability our partners can plan around.',
              ],
              [
                'q' => "What's the minimum project size you'll bid?",
                'a' => "We evaluate every multifamily new construction opportunity in our service area. There is no formal unit-count minimum — what matters is whether the project type aligns with our discipline. A 24-unit boutique mid-rise is a strong fit; so is an 800-unit garden-style community.",
              ],
              [
                'q' => 'How quickly can you respond to an RFP?',
                'a' => 'On-site walk within 72 hours. Detailed bid with line-item scope, schedule, and manpower plan within five business days. Faster turnarounds available when the project requires it.',
              ],
              [
                'q' => 'Are you a subcontractor, or do you work directly with developers?',
                'a' => 'Both. Roughly half of our work is as a painting subcontractor under a general contractor; the other half is direct contract with developers, owners, and asset managers. We adjust our communication and reporting structure to fit your project delivery model.',
              ],
              [
                'q' => "What's your warranty?",
                'a' => 'Two-year workmanship warranty standard on all completed installations. Extended terms available on a project-by-project basis.',
              ],
              [
                'q' => 'How do you communicate during the project?',
                'a' => 'Daily progress reports during active production. Weekly photo documentation, manpower logs, and schedule variance reports sent to the project contact before you ask. Owner-supervised QC walks weekly. Issues are escalated immediately — not held until they affect the schedule.',
              ],
              [
                'q' => 'What states do you operate in?',
                'a' => 'Our four primary Texas markets are <a href="/locations/austin">Austin</a> (headquarters), <a href="/locations/houston">Houston</a>, <a href="/locations/dallas-fort-worth">Dallas-Fort Worth</a>, and <a href="/locations/san-antonio">San Antonio</a>. We also serve multifamily new construction projects throughout Oklahoma, Louisiana, Arkansas, and New Mexico.',
              ],
              [
                'q' => 'How do you maintain quality across that many projects?',
                'a' => 'Owner-supervised QC walks on every project. Dedicated crews assigned to one job at a time — no rotation between projects mid-production. Documented finish standards per unit. The same approach that works on a 50-unit build scales to a 500-unit one.',
              ],
            ];
            foreach ($faqs as $i => $faq) : ?>
              <div class="faq-item">
                <button
                  class="faq-btn"
                  aria-expanded="false"
                  onclick="toggleFaq(this)"
                >
                  <?php echo esc_html($faq['q']); ?>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer">
                  <?php echo wp_kses($faq['a'], ['a' => ['href' => []]]); ?>
                </div>
              </div>
          <?php endforeach; ?>
        </div>

      </div>
    </div>
  </section>


  <!-- ═══════════════════════════════════════════════════════════
       §10 — FINAL CTA
  ════════════════════════════════════════════════════════════ -->
  <section class="relative overflow-hidden" style="background:var(--bg);padding:100px 0;border-top:1px solid var(--border);">
    <!-- Subtle red accent blob -->
    <div class="absolute inset-0" style="background:radial-gradient(ellipse 50% 70% at 90% 50%, rgba(204,0,0,0.06) 0%, transparent 65%); pointer-events:none;"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-6">
      <div class="max-w-3xl">
        <div class="section-label">Get Started</div>
        <h2 class="rcs-display mb-6"
          style="font-size:clamp(30px,4vw,58px);font-weight:900;line-height:.98;letter-spacing:-0.03em;color:var(--ink);">
          Your next multifamily project<br>
          deserves a painter<br>
          <span style="color:var(--red);">who delivers.</span>
        </h2>
        <p style="font-size:16px;color:var(--text-muted);line-height:1.78;margin-bottom:36px;max-width:560px;">
          RCS Complete Painting works with general contractors, developers, and owners across Texas and the South Central region who need a multifamily painting partner they can count on — for the schedule, the finish, and the communication. We respond within one business day.
        </p>
        <div class="flex flex-wrap gap-4">
          <a href="/contact-us" class="btn-red" style="font-size:15px;padding:16px 32px;">
            Request a project bid
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="9,18 15,12 9,6"/></svg>
          </a>
          <a href="tel:+15125513050" class="btn-ghost" style="font-size:15px;padding:16px 32px;">
            Call us: 512-551-3050
          </a>
        </div>
      </div>
    </div>
  </section>

</main><!-- .rcs-page -->

<!-- FAQ toggle script -->
<script>
  function toggleFaq(btn) {
    var isOpen   = btn.getAttribute('aria-expanded') === 'true';
    var answer   = btn.nextElementSibling;
    var icon     = btn.querySelector('.faq-icon');

    // Close all
    document.querySelectorAll('.faq-btn').forEach(function(b) {
      b.setAttribute('aria-expanded', 'false');
      b.nextElementSibling.classList.remove('open');
    });

    // Open this one if it was closed
    if (!isOpen) {
      btn.setAttribute('aria-expanded', 'true');
      answer.classList.add('open');
    }
  }
</script>

<?php get_footer(); ?>