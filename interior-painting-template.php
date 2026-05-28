<?php
/**
 * Template Name: Interior Painting
 */
get_header(); ?>

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

  .rcs-page { font-family: 'DM Sans', sans-serif; background: var(--bg); color: var(--ink); }
  .rcs-disp { font-family: 'Montserrat', sans-serif; }

  .section-label {
    display: inline-flex; align-items: center; gap: 10px;
    font-family: 'Montserrat', sans-serif;
    font-size: 11px; font-weight: 800;
    letter-spacing: .22em; text-transform: uppercase;
    color: var(--red); margin-bottom: 20px;
  }
  .section-label::before {
    content: ''; display: block;
    width: 24px; height: 2px; background: var(--red); flex-shrink: 0;
  }
  .section-label.white { color: rgba(255,255,255,.85); }
  .section-label.white::before { background: rgba(255,255,255,.6); }

  .btn-red {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 14px 28px; background: var(--red); color: #fff;
    font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 800;
    letter-spacing: .04em; text-transform: uppercase; text-decoration: none;
    border-radius: 50px; border: none; cursor: pointer;
    transition: background .15s; box-shadow: 0 4px 20px rgba(204,0,0,.30);
  }
  .btn-red:hover { background: var(--red-dark); color: #fff; }

  .btn-ghost {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 14px 28px; background: transparent; color: var(--ink);
    font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 700;
    letter-spacing: .04em; text-transform: uppercase; text-decoration: none;
    border-radius: 50px; border: 2px solid var(--border);
    transition: border-color .15s, color .15s, background .15s;
  }
  .btn-ghost:hover { border-color: var(--red); color: var(--red); background: var(--red-light); }

  /* Scope table */
  .scope-row {
    display: grid; grid-template-columns: 200px 1fr;
    gap: 0; border-bottom: 1px solid var(--border);
  }
  .scope-row:last-child { border: none; }
  .scope-area {
    padding: 16px 20px;
    background: var(--bg-3);
    border-right: 1px solid var(--border);
    font-family: 'Montserrat', sans-serif;
    font-size: 13px; font-weight: 800; color: var(--ink);
    display: flex; align-items: center;
  }
  .scope-detail {
    padding: 16px 20px;
    font-size: 14px; color: var(--text-muted); line-height: 1.65;
  }

  /* Substrate tag */
  .substrate-item {
    display: flex; align-items: flex-start; gap: 12px;
    padding: 14px 0; border-bottom: 1px solid var(--border);
  }
  .substrate-item:last-child { border: none; }

  /* Process step */
  .process-step {
    display: flex; gap: 20px; align-items: flex-start;
    padding: 28px; background: var(--bg-2);
    border: 1px solid var(--border); border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,.04);
    transition: border-color .2s, box-shadow .2s;
  }
  .process-step:hover {
    border-color: rgba(204,0,0,.2);
    box-shadow: 0 8px 28px rgba(204,0,0,.07);
  }
  .step-number {
    font-family: 'Montserrat', sans-serif;
    font-size: 11px; font-weight: 900;
    letter-spacing: .12em; text-transform: uppercase;
    color: #fff; background: var(--red);
    width: 32px; height: 32px; border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }

  /* Project type pill */
  .type-card {
    background: var(--bg-2); border: 1px solid var(--border);
    border-radius: 10px; padding: 18px 20px;
    display: flex; align-items: flex-start; gap: 12px;
    transition: border-color .2s, box-shadow .2s;
    box-shadow: 0 2px 6px rgba(0,0,0,.04);
  }
  .type-card:hover {
    border-color: rgba(204,0,0,.2);
    box-shadow: 0 6px 20px rgba(204,0,0,.08);
  }

  /* FAQ */
  .faq-item { border-bottom: 1px solid var(--border); }
  .faq-btn {
    width: 100%; display: flex; justify-content: space-between;
    align-items: center; gap: 16px; padding: 20px 0; text-align: left;
    background: none; border: none; cursor: pointer;
    font-family: 'DM Sans', sans-serif; font-size: 15px;
    font-weight: 700; color: var(--ink); transition: color .15s;
  }
  .faq-btn:hover { color: var(--red); }
  .faq-icon {
    width: 26px; height: 26px; border-radius: 6px;
    border: 1px solid var(--border); display: flex;
    align-items: center; justify-content: center;
    flex-shrink: 0; font-size: 17px; font-weight: 300;
    color: var(--red); transition: background .15s, transform .25s;
  }
  .faq-btn[aria-expanded="true"] .faq-icon {
    background: var(--red); color: #fff; transform: rotate(45deg);
  }
  .faq-answer {
    display: none; padding-bottom: 18px;
    font-size: 14px; color: var(--text-muted); line-height: 1.75;
  }
  .faq-answer.open { display: block; }
</style>

<main class="rcs-page">

  <!-- ════════════════════════════════════════════════════════
       §1 — HERO
  ═══════════════════════════════════════════════════════════ -->
  <section
    class="relative overflow-hidden"
    style="background:linear-gradient(135deg,#1A1A1A 0%,#3a0000 55%,#CC0000 130%);min-height:420px;display:flex;align-items:center;"
  >
    <div style="position:absolute;inset:0;background-image:linear-gradient(45deg,rgba(255,255,255,0.03) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.03) 50%,rgba(255,255,255,0.03) 75%,transparent 75%);background-size:32px 32px;pointer-events:none;"></div>
    <div style="position:absolute;top:-20%;right:-10%;width:60%;height:140%;background:radial-gradient(ellipse,rgba(204,0,0,0.2) 0%,transparent 65%);pointer-events:none;"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 py-24">
      <div class="max-w-3xl">

        <!-- Breadcrumb -->
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:20px;">
          <a href="/services" style="font-size:12px;font-weight:700;color:rgba(255,255,255,.45);text-decoration:none;transition:color .15s;" onmouseover="this.style.color='rgba(255,255,255,.8)'" onmouseout="this.style.color='rgba(255,255,255,.45)'">Services</a>
          <span style="color:rgba(255,255,255,.25);font-size:12px;">›</span>
          <span style="font-size:12px;font-weight:700;color:rgba(255,255,255,.6);">Interior Painting</span>
        </div>

        <div class="section-label white">Service · Interior</div>

        <h1 class="rcs-disp text-white mb-6"
          style="font-size:clamp(36px,5vw,64px);font-weight:900;line-height:.92;letter-spacing:-.03em;">
          Multifamily interior painting,<br>
          <span style="color:rgba(255,255,255,.55);">built for production at scale.</span>
        </h1>
        <p style="font-size:17px;color:rgba(255,255,255,.70);line-height:1.78;max-width:580px;margin-bottom:32px;">
          From the first unit on the first floor to the last common-area corridor, RCS delivers interior painting at the production rates and finish quality multifamily new construction demands. Every unit documented. Every inspection ready. Every schedule met.
        </p>
        <div style="display:flex;flex-wrap:wrap;gap:12px;">
          <a href="/contact-us" class="btn-red">
            Request a project bid
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="9,18 15,12 9,6"/></svg>
          </a>
          <a href="/#how-we-run"
            style="display:inline-flex;align-items:center;gap:8px;padding:14px 28px;background:rgba(255,255,255,.12);color:#fff;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;text-decoration:none;border-radius:50px;border:2px solid rgba(255,255,255,.28);transition:background .15s;"
            onmouseover="this.style.background='rgba(255,255,255,.22)'" onmouseout="this.style.background='rgba(255,255,255,.12)'">
            See how we run a project
          </a>
        </div>

      </div>
    </div>
  </section>


  <!-- ════════════════════════════════════════════════════════
       §2 — WHAT'S INCLUDED
  ═══════════════════════════════════════════════════════════ -->
  <section style="background:var(--bg);padding:100px 0;border-bottom:1px solid var(--border);">
    <div class="max-w-7xl mx-auto px-6">

      <div class="section-label">Scope</div>
      <h2 class="rcs-disp mb-10"
        style="font-size:clamp(28px,3.5vw,46px);font-weight:900;line-height:1.0;letter-spacing:-.03em;color:var(--ink);">
        Full interior scope across<br>
        <span style="color:var(--red);">every unit type.</span>
      </h2>

      <div style="background:var(--bg-2);border:1px solid var(--border);border-radius:14px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.05);">
        <?php
          $scope = [
            ['area' => 'Residential Units',       'detail' => 'Walls (Level 4 / Level 5 finish), ceilings, trim, doors, door frames, closets, baseboards, primer + topcoat as specified.'],
            ['area' => 'Common Areas',             'detail' => 'Lobbies, mail rooms, lounges, fitness centers, business centers, leasing offices, model unit special finishes.'],
            ['area' => 'Corridors & Circulation',  'detail' => 'Full corridor scope including walls, ceilings, baseboards, door frames, fire-rated assembly painting per spec.'],
            ['area' => 'Amenity Spaces',           'detail' => 'Clubhouses, pool decks (interior), rooftop spaces, co-working areas, pet wash, package rooms.'],
            ['area' => 'Back-of-House',            'detail' => 'Mechanical rooms, electrical rooms, trash rooms, stairwells, maintenance areas — coated to code and spec.'],
            ['area' => 'Specialty Finishes',       'detail' => 'Accent walls, multi-color schemes per developer design, color blocking, custom textures (when specified).'],
          ];
          foreach ($scope as $s) : ?>
            <div class="scope-row">
              <div class="scope-area"><?php echo esc_html($s['area']); ?></div>
              <div class="scope-detail"><?php echo esc_html($s['detail']); ?></div>
            </div>
        <?php endforeach; ?>
      </div>

    </div>
  </section>


  <!-- ════════════════════════════════════════════════════════
       §3 — SUBSTRATES
  ═══════════════════════════════════════════════════════════ -->
  <section style="background:var(--bg-3);padding:100px 0;border-bottom:1px solid var(--border);">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-start">

        <div>
          <div class="section-label">Substrates</div>
          <h2 class="rcs-disp mb-6"
            style="font-size:clamp(28px,3.5vw,46px);font-weight:900;line-height:1.0;letter-spacing:-.03em;color:var(--ink);">
            Every substrate the building has.<br>
            <span style="color:var(--red);">Coated to spec.</span>
          </h2>
          <p style="font-size:16px;color:var(--text-muted);line-height:1.8;">
            Multifamily interior construction uses a wide range of substrates — each requiring the right primer system, prep process, and finish coat. Our crews are trained on every substrate type common to new construction multifamily, and every application is executed to the finish specification in the contract documents.
          </p>
        </div>

        <div style="background:var(--bg-2);border:1px solid var(--border);border-radius:14px;padding:28px;box-shadow:0 2px 8px rgba(0,0,0,.04);">
          <?php
            $substrates = [
              ['name' => 'Drywall — Level 4 & 5',              'desc' => 'Smooth-coat preparation and finish. Level 5 skim coat process available.'],
              ['name' => 'Fire-Rated Assemblies',               'desc' => 'Proper primer/finish system to maintain fire rating per code.'],
              ['name' => 'Wood Trim, Baseboards, Casing',       'desc' => 'Sand, prime, finish per specification.'],
              ['name' => 'Metal Door Frames',                   'desc' => 'Primer + topcoat or electrostatic application as specified.'],
              ['name' => 'Concrete (Sealed/Painted)',           'desc' => 'Back-of-house and exposed ceiling applications.'],
              ['name' => 'CMU (Concrete Masonry Units)',        'desc' => 'Interior block walls in service areas.'],
              ['name' => 'Wood Doors',                          'desc' => 'Interior unit doors, factory-prime upgrade applications.'],
            ];
            foreach ($substrates as $sub) : ?>
              <div class="substrate-item">
                <div style="width:8px;height:8px;border-radius:50%;background:var(--red);flex-shrink:0;margin-top:5px;"></div>
                <div>
                  <p style="font-family:'Montserrat',sans-serif;font-size:14px;font-weight:800;color:var(--ink);margin-bottom:2px;"><?php echo esc_html($sub['name']); ?></p>
                  <p style="font-size:13px;color:var(--text-muted);"><?php echo esc_html($sub['desc']); ?></p>
                </div>
              </div>
          <?php endforeach; ?>
        </div>

      </div>
    </div>
  </section>


  <!-- ════════════════════════════════════════════════════════
       §4 — PRODUCTION PROCESS
  ═══════════════════════════════════════════════════════════ -->
  <section style="background:var(--bg);padding:100px 0;border-bottom:1px solid var(--border);">
    <div class="max-w-7xl mx-auto px-6">

      <div class="text-center mb-14">
        <div class="section-label" style="justify-content:center;">Our Process</div>
        <h2 class="rcs-disp" style="font-size:clamp(28px,3.5vw,46px);font-weight:900;line-height:1.0;letter-spacing:-.03em;color:var(--ink);">
          Five-step interior production.<br>
          <span style="color:var(--red);">Documented per unit.</span>
        </h2>
      </div>

      <div style="display:flex;flex-direction:column;gap:12px;">
        <?php
          $steps = [
            [
              'n'     => '01',
              'title' => 'Substrate Inspection',
              'body'  => 'Walk every unit before painting begins. Document drywall finish level, identify any GC remediation needed, confirm fire-rated assembly status. Issues raised before paint starts — not after.',
              'icon'  => '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
            ],
            [
              'n'     => '02',
              'title' => 'Prep & Priming',
              'body'  => 'Surface prep per finish spec. Primer application matched to substrate and topcoat system. Patch documentation for any minor drywall corrections coordinated with the drywall sub.',
              'icon'  => '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
            ],
            [
              'n'     => '03',
              'title' => 'Production Painting',
              'body'  => 'Crews assigned per floor or per building section. Spray + back-roll or roller application per spec. Production rate calibrated to GC schedule — typically 40–80 units per week per crew depending on scope.',
              'icon'  => '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
            ],
            [
              'n'     => '04',
              'title' => 'Documented Punch & Touch-Up',
              'body'  => 'Pre-punch walks per unit. Touch-up done in real time, not deferred. Final punch walks coordinated with PM and inspection schedule.',
              'icon'  => '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>',
            ],
            [
              'n'     => '05',
              'title' => 'Closeout Documentation',
              'body'  => 'Per-unit completion records. Color schedule confirmation. Warranty documentation. Final QC report delivered with closeout package.',
              'icon'  => '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
            ],
          ];
          foreach ($steps as $step) : ?>
            <div class="process-step">
              <div style="display:flex;flex-direction:column;align-items:center;gap:0;flex-shrink:0;">
                <div style="width:40px;height:40px;background:var(--red);border-radius:10px;display:flex;align-items:center;justify-content:center;color:#fff;">
                  <?php echo $step['icon']; ?>
                </div>
              </div>
              <div style="flex:1;">
                <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
                  <span style="font-size:10px;font-weight:900;letter-spacing:.16em;text-transform:uppercase;color:rgba(204,0,0,.5);">Step <?php echo esc_html($step['n']); ?></span>
                </div>
                <h3 class="rcs-disp" style="font-size:18px;font-weight:900;color:var(--ink);margin-bottom:6px;"><?php echo esc_html($step['title']); ?></h3>
                <p style="font-size:14px;color:var(--text-muted);line-height:1.72;"><?php echo esc_html($step['body']); ?></p>
              </div>
            </div>
        <?php endforeach; ?>
      </div>

    </div>
  </section>


  <!-- ════════════════════════════════════════════════════════
       §5 — PROJECT TYPES
  ═══════════════════════════════════════════════════════════ -->
  <section style="background:var(--bg-3);padding:100px 0;border-bottom:1px solid var(--border);">
    <div class="max-w-7xl mx-auto px-6">

      <div class="section-label">Project Types</div>
      <h2 class="rcs-disp mb-10"
        style="font-size:clamp(28px,3.5vw,46px);font-weight:900;line-height:1.0;letter-spacing:-.03em;color:var(--ink);">
        Every multifamily interior format<br>
        <span style="color:var(--red);">we know.</span>
      </h2>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <?php
          $types = [
            ['label' => 'Garden-Style Apartments',  'desc' => '2–4 story walk-ups, typical of suburban Texas multifamily.'],
            ['label' => 'Mid-Rise Multifamily',      'desc' => '4–8 stories, urban infill and transit-oriented developments.'],
            ['label' => 'Senior Housing',            'desc' => 'Assisted living, independent living, memory care interiors.'],
            ['label' => 'Student Housing',           'desc' => 'High-traffic, durable finish specs, fast turnaround capability.'],
            ['label' => 'Mixed-Use Multifamily',     'desc' => 'Residential floors over retail, coordinated finish schedules.'],
            ['label' => 'Townhomes',                 'desc' => 'Multi-unit townhome developments, per-unit interior scope.'],
            ['label' => 'Build-to-Rent (BTR)',       'desc' => 'Single-family rental product, scaled interior production.'],
          ];
          foreach ($types as $t) : ?>
            <div class="type-card">
              <div style="width:8px;height:8px;border-radius:50%;background:var(--red);flex-shrink:0;margin-top:5px;"></div>
              <div>
                <p style="font-family:'Montserrat',sans-serif;font-size:13px;font-weight:800;color:var(--ink);margin-bottom:3px;"><?php echo esc_html($t['label']); ?></p>
                <p style="font-size:12px;color:var(--text-muted);line-height:1.5;"><?php echo esc_html($t['desc']); ?></p>
              </div>
            </div>
        <?php endforeach; ?>
      </div>

    </div>
  </section>


  <!-- ════════════════════════════════════════════════════════
       §6 — SERVICE AREA
  ═══════════════════════════════════════════════════════════ -->
  <section style="background:var(--bg);padding:80px 0;border-bottom:1px solid var(--border);">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <div class="section-label">Service Area</div>
          <h2 class="rcs-disp mb-5"
            style="font-size:clamp(26px,3vw,42px);font-weight:900;line-height:1.0;letter-spacing:-.03em;color:var(--ink);">
            Wherever your project is,<br>
            <span style="color:var(--red);">across our 8-state service area.</span>
          </h2>
          <p style="font-size:16px;color:var(--text-muted);line-height:1.8;">
            Our four primary Texas markets are Austin (headquarters), Houston, Dallas-Fort Worth, and San Antonio. We also serve multifamily interior painting projects throughout Oklahoma, Louisiana, Arkansas, and New Mexico. Same crews, same standard, same accountability.
          </p>
        </div>

        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;">
          <?php
            $markets = [
              ['city' => 'Austin, TX',          'badge' => 'HQ',              'color' => 'var(--red)'],
              ['city' => 'Houston, TX',          'badge' => 'Active',          'color' => 'var(--charcoal)'],
              ['city' => 'Dallas–Fort Worth',    'badge' => 'Active',          'color' => 'var(--charcoal)'],
              ['city' => 'San Antonio, TX',      'badge' => 'Active',          'color' => 'var(--charcoal)'],
              ['city' => 'Oklahoma',             'badge' => 'Regional',        'color' => 'var(--text-dim)'],
              ['city' => 'Louisiana',            'badge' => 'Regional',        'color' => 'var(--text-dim)'],
              ['city' => 'Arkansas',             'badge' => 'Regional',        'color' => 'var(--text-dim)'],
              ['city' => 'New Mexico',           'badge' => 'Regional',        'color' => 'var(--text-dim)'],
            ];
            foreach ($markets as $m) : ?>
              <div style="background:var(--bg-2);border:1px solid var(--border);border-radius:9px;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 2px 6px rgba(0,0,0,.04);">
                <span style="font-family:'Montserrat',sans-serif;font-size:13px;font-weight:800;color:var(--ink);"><?php echo esc_html($m['city']); ?></span>
                <span style="font-size:10px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:<?php echo $m['color']; ?>;"><?php echo esc_html($m['badge']); ?></span>
              </div>
          <?php endforeach; ?>
        </div>

      </div>
    </div>
  </section>


  <!-- ════════════════════════════════════════════════════════
       §7 — FAQ
  ═══════════════════════════════════════════════════════════ -->
  <section style="background:var(--bg-3);padding:100px 0;border-bottom:1px solid var(--border);">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-3 gap-16">

        <div>
          <div class="section-label">FAQ</div>
          <h2 class="rcs-disp mb-4"
            style="font-size:clamp(26px,3vw,40px);font-weight:900;line-height:1.0;letter-spacing:-.03em;color:var(--ink);">
            Interior painting<br>
            <span style="color:var(--red);">questions answered.</span>
          </h2>
          <p style="font-size:14px;color:var(--text-muted);line-height:1.75;margin-bottom:24px;">
            Don't see your question? We respond within one business day.
          </p>
          <a href="/contact-us" class="btn-red" style="font-size:13px;padding:12px 22px;">Request a bid</a>
        </div>

        <div class="lg:col-span-2">
          <?php
            $faqs = [
              [
                'q' => 'What production rate can you commit to?',
                'a' => 'Production rates depend on scope, finish level, and concurrent trade activity. As a working benchmark, our crews typically deliver 40–80 finished units per week per crew on Level 4 drywall with standard multifamily finish specs. We commit specific production rates in writing as part of every bid.',
              ],
              [
                'q' => 'Do you handle Level 5 drywall finishes?',
                'a' => 'Yes. Level 5 (smooth-coat) is becoming standard in higher-end multifamily, particularly in mid-rise and luxury garden-style products. Our team is equipped and experienced with the prep, skim coat, and finish coat process required for Level 5 applications.',
              ],
              [
                'q' => 'How do you coordinate with other trades?',
                'a' => 'Standing trade coordination meetings during pre-construction, weekly coordination meetings during production. We work the schedule around drywall finish completion, flooring schedules, finish carpentry, and inspection cadence. Our PM is the single point of contact for the GC across all crews.',
              ],
              [
                'q' => 'Can you handle high-rise interior work?',
                'a' => 'Our specialty is mid-rise and garden-style multifamily where our process and equipment are optimized. We evaluate high-rise opportunities case-by-case based on scope, scale, and concurrent regional capacity. Reach out and we\'ll tell you honestly whether your project is a strong fit.',
              ],
              [
                'q' => 'Do you provide warranty on interior work?',
                'a' => 'Two-year workmanship warranty standard on all interior painting. Extended warranty available by project. Touch-up service available post-occupancy under warranty terms.',
              ],
            ];
            foreach ($faqs as $faq) : ?>
              <div class="faq-item">
                <button class="faq-btn" aria-expanded="false" onclick="toggleFaq(this)">
                  <?php echo esc_html($faq['q']); ?>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer"><?php echo esc_html($faq['a']); ?></div>
              </div>
          <?php endforeach; ?>
        </div>

      </div>
    </div>
  </section>


  <!-- ════════════════════════════════════════════════════════
       §8 — FINAL CTA
  ═══════════════════════════════════════════════════════════ -->
  <section class="relative overflow-hidden" style="background:var(--bg);padding:100px 0;">
    <div class="absolute inset-0" style="background:radial-gradient(ellipse 50% 70% at 90% 50%,rgba(204,0,0,0.06) 0%,transparent 65%);pointer-events:none;"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-6">
      <div class="max-w-3xl">
        <div class="section-label">Get Started</div>
        <h2 class="rcs-disp mb-5"
          style="font-size:clamp(30px,4vw,52px);font-weight:900;line-height:.96;letter-spacing:-.03em;color:var(--ink);">
          Need interior painting for an<br>
          upcoming multifamily project?
          <span style="color:var(--red);"> Send us the plans.</span>
        </h2>
        <p style="font-size:16px;color:var(--text-muted);line-height:1.78;margin-bottom:36px;max-width:540px;">
          We'll respond within one business day with availability, an on-site walk schedule, and a path to a detailed bid.
        </p>
        <div style="display:flex;flex-wrap:wrap;gap:12px;">
          <a href="/contact-us" class="btn-red" style="font-size:15px;padding:16px 32px;">
            Request a project bid
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="9,18 15,12 9,6"/></svg>
          </a>
          <a href="/services/multifamily-exterior-painting" class="btn-ghost" style="font-size:15px;padding:16px 32px;">
            See our exterior services →
          </a>
        </div>
      </div>
    </div>
  </section>

</main>

<!-- FAQ toggle -->
<script>
  function toggleFaq(btn) {
    var isOpen = btn.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.faq-btn').forEach(function(b) {
      b.setAttribute('aria-expanded', 'false');
      b.nextElementSibling.classList.remove('open');
    });
    if (!isOpen) {
      btn.setAttribute('aria-expanded', 'true');
      btn.nextElementSibling.classList.add('open');
    }
  }
</script>

<?php get_footer(); ?>