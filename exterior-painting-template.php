<?php
/**
 * Template Name: Exterior Painting
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
    border-bottom: 1px solid var(--border);
  }
  .scope-row:last-child { border: none; }
  .scope-area {
    padding: 16px 20px; background: var(--bg-3);
    border-right: 1px solid var(--border);
    font-family: 'Montserrat', sans-serif;
    font-size: 13px; font-weight: 800; color: var(--ink);
    display: flex; align-items: center;
  }
  .scope-detail {
    padding: 16px 20px; font-size: 14px;
    color: var(--text-muted); line-height: 1.65;
  }

  /* Substrate card */
  .substrate-card {
    background: var(--bg-2); border: 1px solid var(--border);
    border-radius: 10px; padding: 18px 20px;
    display: flex; align-items: flex-start; gap: 12px;
    transition: border-color .2s, box-shadow .2s;
    box-shadow: 0 2px 6px rgba(0,0,0,.04);
  }
  .substrate-card:hover {
    border-color: rgba(204,0,0,.2);
    box-shadow: 0 6px 20px rgba(204,0,0,.08);
  }

  /* Equipment card */
  .equip-card {
    background: var(--bg-2); border: 1px solid var(--border);
    border-radius: 12px; padding: 22px;
    display: flex; flex-direction: column; gap: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,.04);
    transition: border-color .2s, box-shadow .2s;
  }
  .equip-card:hover {
    border-color: rgba(204,0,0,.2);
    box-shadow: 0 8px 24px rgba(204,0,0,.08);
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
    style="background:linear-gradient(135deg,#1A1A1A 0%,#3a0000 55%,#CC0000 130%);min-height:440px;display:flex;align-items:center;"
  >
    <div style="position:absolute;inset:0;background-image:linear-gradient(45deg,rgba(255,255,255,0.03) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.03) 50%,rgba(255,255,255,0.03) 75%,transparent 75%);background-size:32px 32px;pointer-events:none;"></div>
    <div style="position:absolute;top:-20%;right:-10%;width:60%;height:140%;background:radial-gradient(ellipse,rgba(204,0,0,0.2) 0%,transparent 65%);pointer-events:none;"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 py-24">
      <div class="max-w-3xl">

        <!-- Breadcrumb -->
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:20px;">
          <a href="/services" style="font-size:12px;font-weight:700;color:rgba(255,255,255,.45);text-decoration:none;transition:color .15s;" onmouseover="this.style.color='rgba(255,255,255,.8)'" onmouseout="this.style.color='rgba(255,255,255,.45)'">Services</a>
          <span style="color:rgba(255,255,255,.25);font-size:12px;">›</span>
          <span style="font-size:12px;font-weight:700;color:rgba(255,255,255,.6);">Exterior Painting</span>
        </div>

        <div class="section-label white">Service · Exterior</div>

        <h1 class="rcs-disp text-white mb-6"
          style="font-size:clamp(36px,5vw,64px);font-weight:900;line-height:.92;letter-spacing:-.03em;">
          Exterior painting built for<br>Texas weather and<br>
          <span style="color:rgba(255,255,255,.55);">multifamily complexity.</span>
        </h1>
        <p style="font-size:17px;color:rgba(255,255,255,.70);line-height:1.78;max-width:580px;margin-bottom:32px;">
          Multifamily envelopes are complex — stucco transitions, fiber cement plank, EIFS systems, architectural metal trim, balcony details. We coat all of it, with crews certified to work safely at mid-rise heights, in product systems built for South Central UV, heat, and storm exposure.
        </p>
        <a href="/contact-us" class="btn-red">
          Request a project bid
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="9,18 15,12 9,6"/></svg>
        </a>

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
        Full envelope scope.<br>
        <span style="color:var(--red);">Every detail coated to spec.</span>
      </h2>

      <div style="background:var(--bg-2);border:1px solid var(--border);border-radius:14px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.05);">
        <?php
          $scope = [
            ['area' => 'Building Envelope',      'detail' => 'Full exterior wall systems including stucco, fiber cement, EIFS, masonry, and wood siding. Primer + topcoat per spec.'],
            ['area' => 'Architectural Details',  'detail' => 'Window trim, door surrounds, fascia, soffit, decorative banding, accent panels, balcony details.'],
            ['area' => 'Metalwork',              'detail' => 'Railings, balcony rails, gates, exterior doors, frames, mechanical screens — electrostatic application available.'],
            ['area' => 'Balconies & Terraces',   'detail' => 'Balcony ceilings, soffits, railing systems, privacy panels, exterior corridor walls.'],
            ['area' => 'Parking Structures',     'detail' => 'Exposed parking levels — wall coatings, ceiling coatings, structural steel painting, traffic-deck transitions.'],
            ['area' => 'Site & Ancillary',       'detail' => 'Trash enclosures, mailbox kiosks, leasing pavilions, gatehouses, perimeter fencing.'],
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
       §3 — SUBSTRATES & COATING SYSTEMS
  ═══════════════════════════════════════════════════════════ -->
  <section style="background:var(--bg-3);padding:100px 0;border-bottom:1px solid var(--border);">
    <div class="max-w-7xl mx-auto px-6">

      <div class="grid lg:grid-cols-2 gap-16 items-start">

        <div>
          <div class="section-label">Substrates</div>
          <h2 class="rcs-disp mb-6"
            style="font-size:clamp(28px,3.5vw,46px);font-weight:900;line-height:1.0;letter-spacing:-.03em;color:var(--ink);">
            Texas weather is unforgiving.<br>
            <span style="color:var(--red);">The coating system has to match.</span>
          </h2>
          <p style="font-size:16px;color:var(--text-muted);line-height:1.8;margin-bottom:20px;">
            Coating systems are matched to substrate, climate zone, and project specification. We work with project architects and developers on system selection during pre-construction.
          </p>

          <!-- Climate callout -->
          <div style="background:var(--bg-2);border:1px solid var(--border);border-radius:12px;padding:20px 22px;display:flex;gap:14px;align-items:flex-start;box-shadow:0 2px 8px rgba(0,0,0,.04);">
            <div style="width:36px;height:36px;background:var(--red-light);border:1px solid rgba(204,0,0,.2);border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
              <svg width="18" height="18" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            </div>
            <div>
              <p style="font-family:'Montserrat',sans-serif;font-size:13px;font-weight:800;color:var(--ink);margin-bottom:3px;">South Central climate requirements</p>
              <p style="font-size:13px;color:var(--text-muted);line-height:1.55;">High UV index, extreme heat cycles, sudden storm exposure, and humidity variance demand coating systems specified for South Central conditions — not generic commercial-grade product.</p>
            </div>
          </div>
        </div>

        <div style="display:flex;flex-direction:column;gap:10px;">
          <?php
            $substrates = [
              ['name' => 'Stucco (Cement & Synthetic)',      'desc' => 'Elastomeric coating systems for crack-bridging on stucco.'],
              ['name' => 'Fiber Cement (Hardie Plank/Panel)', 'desc' => 'Primer + topcoat system optimized for fiber cement substrate.'],
              ['name' => 'EIFS',                             'desc' => 'Coatings compatible with exterior insulation and finish system topcoat layer.'],
              ['name' => 'Brick & Masonry',                  'desc' => 'Breathable mineral coatings or premium acrylic systems per spec.'],
              ['name' => 'Wood Siding & Trim',               'desc' => 'Premium exterior wood coatings with UV inhibitors.'],
              ['name' => 'Metal Trim, Railings & Doors',     'desc' => 'Direct-to-metal primers + topcoat, or electrostatic application for premium finish.'],
              ['name' => 'Concrete',                         'desc' => 'Concrete sealers, anti-graffiti coatings, traffic-deck systems where required.'],
            ];
            foreach ($substrates as $sub) : ?>
              <div class="substrate-card">
                <div style="width:8px;height:8px;border-radius:50%;background:var(--red);flex-shrink:0;margin-top:5px;"></div>
                <div>
                  <p style="font-family:'Montserrat',sans-serif;font-size:13px;font-weight:800;color:var(--ink);margin-bottom:2px;"><?php echo esc_html($sub['name']); ?></p>
                  <p style="font-size:13px;color:var(--text-muted);"><?php echo esc_html($sub['desc']); ?></p>
                </div>
              </div>
          <?php endforeach; ?>
        </div>

      </div>
    </div>
  </section>


  <!-- ════════════════════════════════════════════════════════
       §4 — EQUIPMENT & ACCESS
  ═══════════════════════════════════════════════════════════ -->
  <section style="background:var(--bg);padding:100px 0;border-bottom:1px solid var(--border);">
    <div class="max-w-7xl mx-auto px-6">

      <div class="section-label">Equipment</div>
      <h2 class="rcs-disp mb-10"
        style="font-size:clamp(28px,3.5vw,46px);font-weight:900;line-height:1.0;letter-spacing:-.03em;color:var(--ink);">
        The right equipment for<br>
        <span style="color:var(--red);">every height and complexity.</span>
      </h2>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
        <?php
          $equipment = [
            [
              'title' => 'Boom Lifts (40\'–80\')',
              'desc'  => 'Full operator certification across crews. Mid-rise envelope reach up to 8 stories.',
              'icon'  => '<svg width="22" height="22" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>',
            ],
            [
              'title' => 'Scissor Lifts',
              'desc'  => 'Flat-surface elevated work, parking decks, balcony access.',
              'icon'  => '<svg width="22" height="22" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
            ],
            [
              'title' => 'Tube & Clamp Scaffolding',
              'desc'  => 'Complex envelope details where mechanical lifts won\'t fit.',
              'icon'  => '<svg width="22" height="22" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>',
            ],
            [
              'title' => 'Swing Stages',
              'desc'  => 'Mid/high-rise spec. Coordinated with project safety plan.',
              'icon'  => '<svg width="22" height="22" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>',
            ],
            [
              'title' => 'Airless Spray Equipment',
              'desc'  => 'High-output exterior application matched to substrate and product.',
              'icon'  => '<svg width="22" height="22" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 010 20"/></svg>',
            ],
            [
              'title' => 'Pressure Washing',
              'desc'  => 'Full prep capability for new construction substrate cleaning.',
              'icon'  => '<svg width="22" height="22" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
            ],
          ];
          foreach ($equipment as $eq) : ?>
            <div class="equip-card">
              <div style="width:44px;height:44px;background:var(--red-light);border:1px solid rgba(204,0,0,.2);border-radius:10px;display:flex;align-items:center;justify-content:center;">
                <?php echo $eq['icon']; ?>
              </div>
              <div>
                <p style="font-family:'Montserrat',sans-serif;font-size:15px;font-weight:800;color:var(--ink);margin-bottom:5px;"><?php echo esc_html($eq['title']); ?></p>
                <p style="font-size:13px;color:var(--text-muted);line-height:1.55;"><?php echo esc_html($eq['desc']); ?></p>
              </div>
            </div>
        <?php endforeach; ?>
      </div>

      <!-- OSHA safety callout -->
      <div style="background:linear-gradient(135deg,#1A1A1A 0%,#3a0000 55%,#CC0000 130%);border-radius:14px;padding:24px 28px;display:flex;align-items:center;gap:16px;">
        <svg width="24" height="24" fill="none" stroke="rgba(255,255,255,.7)" stroke-width="1.75" viewBox="0 0 24 24" style="flex-shrink:0;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        <p style="font-size:14px;color:rgba(255,255,255,.80);line-height:1.65;">
          <strong style="color:#fff;font-family:'Montserrat',sans-serif;">All elevated work conducted with fall protection per OSHA</strong> — supervisor certification and daily safety briefings on every active jobsite.
        </p>
      </div>

    </div>
  </section>


  <!-- ════════════════════════════════════════════════════════
       §5 — WEATHER & SCHEDULING
  ═══════════════════════════════════════════════════════════ -->
  <section style="background:var(--bg-3);padding:100px 0;border-bottom:1px solid var(--border);">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-center">

        <!-- Left — copy -->
        <div>
          <div class="section-label">Weather & Scheduling</div>
          <h2 class="rcs-disp mb-6"
            style="font-size:clamp(28px,3.5vw,46px);font-weight:900;line-height:1.0;letter-spacing:-.03em;color:var(--ink);">
            Texas weather is a variable.<br>
            <span style="color:var(--red);">We schedule around it.</span>
          </h2>
          <div style="display:flex;flex-direction:column;gap:16px;">
            <p style="font-size:16px;color:var(--text-muted);line-height:1.8;">
              Exterior painting in Texas and the South Central region means working around heat, humidity, sudden storms, and seasonal patterns. We monitor weather windows aggressively, coordinate with the GC's master schedule, and structure crews to maximize productive weather days.
            </p>
            <p style="font-size:16px;color:var(--text-muted);line-height:1.8;">
              We do not paint outside manufacturer-specified temperature and humidity windows. Pushing application outside spec produces failures we won't honor under warranty — and warranty failures cost everyone more than weather delays. We communicate weather impacts as they emerge, with clear paths to recovery.
            </p>
          </div>
        </div>

        <!-- Right — principles -->
        <div style="display:flex;flex-direction:column;gap:12px;">
          <?php
            $weather = [
              [
                'title' => 'Weather window monitoring',
                'desc'  => 'Real-time monitoring of temperature, humidity, and precipitation forecasts against manufacturer application specs.',
                'icon'  => '<svg width="18" height="18" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></svg>',
              ],
              [
                'title' => 'Early morning starts in summer',
                'desc'  => 'Summer applications often shift to early morning to stay inside product temperature windows before heat peaks.',
                'icon'  => '<svg width="18" height="18" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
              ],
              [
                'title' => 'No out-of-spec application — ever',
                'desc'  => 'We will not push paint outside manufacturer windows. Schedule pressure does not override coating integrity.',
                'icon'  => '<svg width="18" height="18" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
              ],
              [
                'title' => 'Proactive weather impact communication',
                'desc'  => 'When weather affects schedule, you hear it from us first — with a recovery path, not just a status update.',
                'icon'  => '<svg width="18" height="18" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>',
              ],
            ];
            foreach ($weather as $w) : ?>
              <div style="background:var(--bg-2);border:1px solid var(--border);border-radius:10px;padding:18px 20px;display:flex;align-items:flex-start;gap:12px;box-shadow:0 2px 6px rgba(0,0,0,.04);">
                <div style="width:34px;height:34px;background:var(--red-light);border:1px solid rgba(204,0,0,.2);border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                  <?php echo $w['icon']; ?>
                </div>
                <div>
                  <p style="font-family:'Montserrat',sans-serif;font-size:13px;font-weight:800;color:var(--ink);margin-bottom:3px;"><?php echo esc_html($w['title']); ?></p>
                  <p style="font-size:13px;color:var(--text-muted);line-height:1.55;"><?php echo esc_html($w['desc']); ?></p>
                </div>
              </div>
          <?php endforeach; ?>
        </div>

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
            Active across Texas and<br>
            <span style="color:var(--red);">the South Central region.</span>
          </h2>
          <p style="font-size:16px;color:var(--text-muted);line-height:1.8;">
            Four primary Texas markets — Austin (HQ), Houston, Dallas-Fort Worth, San Antonio — plus Oklahoma, Louisiana, Arkansas, and New Mexico for multifamily new construction projects. Our equipment fleet and crew capacity mobilize across the full region.
          </p>
        </div>

        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;">
          <?php
            $markets = [
              ['city' => 'Austin, TX',        'badge' => 'HQ',       'color' => 'var(--red)'],
              ['city' => 'Houston, TX',        'badge' => 'Active',   'color' => 'var(--charcoal)'],
              ['city' => 'Dallas–Fort Worth',  'badge' => 'Active',   'color' => 'var(--charcoal)'],
              ['city' => 'San Antonio, TX',    'badge' => 'Active',   'color' => 'var(--charcoal)'],
              ['city' => 'Oklahoma',           'badge' => 'Regional', 'color' => 'var(--text-dim)'],
              ['city' => 'Louisiana',          'badge' => 'Regional', 'color' => 'var(--text-dim)'],
              ['city' => 'Arkansas',           'badge' => 'Regional', 'color' => 'var(--text-dim)'],
              ['city' => 'New Mexico',         'badge' => 'Regional', 'color' => 'var(--text-dim)'],
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
            Exterior painting<br>
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
                'q' => 'How do you handle Texas heat and weather windows?',
                'a' => 'We schedule exterior work around manufacturer temperature and humidity specs. Summer applications often shift to early morning starts to stay inside product windows. We do not push applications outside spec — the failure rate isn\'t worth the schedule gain.',
              ],
              [
                'q' => 'Do you work on high-rise exteriors?',
                'a' => 'Our core specialty is mid-rise (up to 8 stories) and garden-style. We evaluate high-rise on a case-by-case basis depending on scope, swing-stage requirements, and project schedule. Reach out and we\'ll tell you whether your project is a strong fit for our capability set.',
              ],
              [
                'q' => 'Can you coordinate with the building envelope sub?',
                'a' => 'Yes — and we routinely do. Exterior painting timing depends on stucco cure times, fiber cement install completion, EIFS topcoat, and weatherproofing inspections. Our PM coordinates with the envelope sub and the GC throughout the install sequence.',
              ],
              [
                'q' => 'What\'s your warranty on exterior coatings?',
                'a' => 'Two-year workmanship warranty standard. Manufacturer product warranty passes through to the owner — typically 5–15 years depending on system. We can structure extended workmanship warranty per project.',
              ],
              [
                'q' => 'Do you handle exterior repaints or only new construction?',
                'a' => 'Our discipline is multifamily new construction. We specialize in coatings on new substrates with their specific prep, prime, and finish requirements. That focus is what produces our consistency and our schedule reliability.',
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
          Ready to walk a<br>multifamily exterior?
          <span style="color:var(--red);"> Send us the plans.</span>
        </h2>
        <p style="font-size:16px;color:var(--text-muted);line-height:1.78;margin-bottom:36px;max-width:540px;">
          Send us your envelope drawings and spec. We'll respond within one business day with an on-site walk schedule and a bid timeline.
        </p>
        <div style="display:flex;flex-wrap:wrap;gap:12px;">
          <a href="/contact-us" class="btn-red" style="font-size:15px;padding:16px 32px;">
            Request a project bid
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="9,18 15,12 9,6"/></svg>
          </a>
          <a href="/services/multifamily-interior-painting" class="btn-ghost" style="font-size:15px;padding:16px 32px;">
            See our interior services →
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