<?php
/**
 * Template Name: Services
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
    width: 24px; height: 2px;
    background: var(--red); flex-shrink: 0;
  }
  .section-label.white { color: rgba(255,255,255,.85); }
  .section-label.white::before { background: rgba(255,255,255,.6); }

  /* Buttons */
  .btn-red {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 14px 28px; background: var(--red); color: #fff;
    font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 800;
    letter-spacing: .04em; text-transform: uppercase; text-decoration: none;
    border-radius: 50px; border: none; cursor: pointer;
    transition: background .15s, transform .1s;
    box-shadow: 0 4px 20px rgba(204,0,0,.30);
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

  /* Service card */
  .service-card {
    background: var(--bg-2);
    border: 1px solid var(--border);
    border-radius: 14px;
    overflow: hidden;
    transition: transform .2s, box-shadow .2s, border-color .2s;
    box-shadow: 0 2px 12px rgba(0,0,0,.05);
    display: flex;
    flex-direction: column;
  }
  .service-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(204,0,0,.12);
    border-color: rgba(204,0,0,.25);
  }
  .service-card-header {
    padding: 32px 32px 24px;
    position: relative;
  }
  .service-card-body {
    padding: 0 32px 32px;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .service-number {
    font-family: 'Montserrat', sans-serif;
    font-size: 64px;
    font-weight: 900;
    color: rgba(204,0,0,.08);
    line-height: 1;
    position: absolute;
    top: 20px;
    right: 24px;
    letter-spacing: -.04em;
  }
  .scope-item {
    display: flex; align-items: flex-start; gap: 10px;
    padding: 9px 0; border-bottom: 1px solid var(--border);
    font-size: 13px; color: var(--text-muted); line-height: 1.5;
  }
  .scope-item:last-child { border: none; }
  .scope-label {
    font-size: 10px; font-weight: 800; letter-spacing: .14em;
    text-transform: uppercase; color: var(--red);
    flex-shrink: 0; min-width: 90px; padding-top: 1px;
  }

  /* Together section card */
  .together-card {
    background: var(--bg-2);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 2px 8px rgba(0,0,0,.04);
    display: flex;
    align-items: flex-start;
    gap: 14px;
  }

  /* Grid bg */
  .grid-bg {
    background-image:
      linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
    background-size: 48px 48px;
  }
</style>

<main class="rcs-page">

  <!-- ════════════════════════════════════════════════════════
       §1 — HERO
  ═══════════════════════════════════════════════════════════ -->
  <section
    class="relative overflow-hidden"
    style="background: linear-gradient(135deg, #1A1A1A 0%, #3a0000 55%, #CC0000 130%); min-height: 440px; display: flex; align-items: center;"
  >
    <div style="position:absolute;inset:0;background-image:linear-gradient(45deg,rgba(255,255,255,0.03) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.03) 50%,rgba(255,255,255,0.03) 75%,transparent 75%);background-size:32px 32px;pointer-events:none;"></div>
    <div style="position:absolute;top:-20%;right:-10%;width:60%;height:140%;background:radial-gradient(ellipse,rgba(204,0,0,0.2) 0%,transparent 65%);pointer-events:none;"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 py-24">
      <div class="max-w-3xl">
        <div class="section-label white">Our Services</div>
        <h1 class="rcs-disp text-white mb-6"
          style="font-size:clamp(36px,5vw,68px);font-weight:900;line-height:.92;letter-spacing:-.03em;">
          Three services.<br>One discipline.<br>
          <span style="color:rgba(255,255,255,.55);">Built for multifamily new construction.</span>
        </h1>
        <p style="font-size:17px;color:rgba(255,255,255,.68);line-height:1.78;max-width:580px;">
          Every service below is purpose-built for multifamily new construction projects. Our team, equipment, and processes are tuned for the production rates, safety standards, and finish quality this work requires — from the first interior unit to the last exterior detail.
        </p>
      </div>
    </div>
  </section>


  <!-- ════════════════════════════════════════════════════════
       §2 — SERVICE CARDS
  ═══════════════════════════════════════════════════════════ -->
  <section style="background:var(--bg);padding:100px 0;border-bottom:1px solid var(--border);">
    <div class="max-w-7xl mx-auto px-6">

      <div class="grid lg:grid-cols-3 gap-6">

        <!-- Card 1 — Interior -->
        <div class="service-card">
          <div class="service-card-header">
            <span class="service-number">01</span>

            <div style="width:48px;height:48px;background:var(--red-light);border:1px solid rgba(204,0,0,.2);border-radius:10px;display:flex;align-items:center;justify-content:center;margin-bottom:16px;">
              <svg width="22" height="22" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
            </div>

            <div style="font-size:10px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:8px;">Interior</div>
            <h2 class="rcs-disp" style="font-size:22px;font-weight:900;color:var(--ink);line-height:1.1;margin-bottom:12px;">Multifamily Interior Painting</h2>
            <p style="font-size:14px;color:var(--text-muted);line-height:1.72;">
              Production-scale interior painting for every unit type — studios through penthouses, common areas, corridors, amenity spaces. Prep, prime, finish, and punch executed on schedules our partners plan around.
            </p>
          </div>

          <div class="service-card-body">
            <div style="border-top:1px solid var(--border);padding-top:20px;margin-bottom:24px;flex:1;">
              <div class="scope-item">
                <span class="scope-label">Scope</span>
                <span>Full interior unit production, common areas, corridors, amenity spaces</span>
              </div>
              <div class="scope-item">
                <span class="scope-label">Substrates</span>
                <span>Drywall (Level 4 & 5), wood trim, metal door frames, fire-rated assemblies</span>
              </div>
              <div class="scope-item">
                <span class="scope-label">Coordination</span>
                <span>MEP, finish carpentry, flooring, inspection cadence</span>
              </div>
            </div>

            <a href="/services/multifamily-interior-painting"
              style="display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:700;color:var(--red);text-decoration:none;letter-spacing:.04em;text-transform:uppercase;transition:gap .15s;"
              onmouseover="this.style.gap='10px'" onmouseout="this.style.gap='6px'">
              See interior services
              <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="9,18 15,12 9,6"/></svg>
            </a>
          </div>
        </div>

        <!-- Card 2 — Exterior -->
        <div class="service-card">
          <div class="service-card-header">
            <span class="service-number">02</span>

            <div style="width:48px;height:48px;background:var(--red-light);border:1px solid rgba(204,0,0,.2);border-radius:10px;display:flex;align-items:center;justify-content:center;margin-bottom:16px;">
              <svg width="22" height="22" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>

            <div style="font-size:10px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:8px;">Exterior</div>
            <h2 class="rcs-disp" style="font-size:22px;font-weight:900;color:var(--ink);line-height:1.1;margin-bottom:12px;">Multifamily Exterior Painting</h2>
            <p style="font-size:14px;color:var(--text-muted);line-height:1.72;">
              Weather-resistant exterior systems for Texas and South Central conditions. Surface prep, repair, and finish applications across complex multifamily envelopes — garden-style to mid-rise.
            </p>
          </div>

          <div class="service-card-body">
            <div style="border-top:1px solid var(--border);padding-top:20px;margin-bottom:24px;flex:1;">
              <div class="scope-item">
                <span class="scope-label">Scope</span>
                <span>Full building envelopes, balconies, corridors, parking structures</span>
              </div>
              <div class="scope-item">
                <span class="scope-label">Substrates</span>
                <span>Stucco, fiber cement, EIFS, metal trim, wood trim, masonry</span>
              </div>
              <div class="scope-item">
                <span class="scope-label">Equipment</span>
                <span>Boom lifts, scissor lifts, scaffolding, swing stages for mid-rise</span>
              </div>
            </div>

            <a href="/services/multifamily-exterior-painting"
              style="display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:700;color:var(--red);text-decoration:none;letter-spacing:.04em;text-transform:uppercase;transition:gap .15s;"
              onmouseover="this.style.gap='10px'" onmouseout="this.style.gap='6px'">
              See exterior services
              <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="9,18 15,12 9,6"/></svg>
            </a>
          </div>
        </div>

        <!-- Card 3 — Specialty -->
        <div class="service-card">
          <div class="service-card-header">
            <span class="service-number">03</span>

            <div style="width:48px;height:48px;background:var(--red-light);border:1px solid rgba(204,0,0,.2);border-radius:10px;display:flex;align-items:center;justify-content:center;margin-bottom:16px;">
              <svg width="22" height="22" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
            </div>

            <div style="font-size:10px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:8px;">Specialty</div>
            <h2 class="rcs-disp" style="font-size:22px;font-weight:900;color:var(--ink);line-height:1.1;margin-bottom:12px;">Specialty Coatings &amp; Color Consulting</h2>
            <p style="font-size:14px;color:var(--text-muted);line-height:1.72;">
              Specialty applications and design support beyond standard interior and exterior paint. Electrostatic painting for metal components and color consulting for developers selecting palettes for new properties.
            </p>
          </div>

          <div class="service-card-body">
            <div style="border-top:1px solid var(--border);padding-top:20px;margin-bottom:24px;flex:1;">
              <div class="scope-item">
                <span class="scope-label">Electrostatic</span>
                <span>Railings, doors, frames, industrial metal components</span>
              </div>
              <div class="scope-item">
                <span class="scope-label">Consulting</span>
                <span>Palette development for new multifamily properties</span>
              </div>
              <div class="scope-item">
                <span class="scope-label">Spec Support</span>
                <span>Working with architects and developers on coating selection</span>
              </div>
            </div>

            <a href="/services/specialty-coatings"
              style="display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:700;color:var(--red);text-decoration:none;letter-spacing:.04em;text-transform:uppercase;transition:gap .15s;"
              onmouseover="this.style.gap='10px'" onmouseout="this.style.gap='6px'">
              See specialty services
              <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="9,18 15,12 9,6"/></svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>


  <!-- ════════════════════════════════════════════════════════
       §3 — HOW SERVICES WORK TOGETHER
  ═══════════════════════════════════════════════════════════ -->
  <section style="background:var(--bg-3);padding:100px 0;border-bottom:1px solid var(--border);">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-center">

        <!-- Left — copy -->
        <div>
          <div class="section-label">Full Scope</div>
          <h2 class="rcs-disp mb-6"
            style="font-size:clamp(28px,3.5vw,46px);font-weight:900;line-height:1.0;letter-spacing:-.03em;color:var(--ink);">
            Most projects need more than one.<br>
            <span style="color:var(--red);">We deliver them as one scope.</span>
          </h2>
          <div style="display:flex;flex-direction:column;gap:16px;margin-bottom:32px;">
            <p style="font-size:16px;color:var(--text-muted);line-height:1.8;">
              A typical multifamily new construction project doesn't need just interior painting or just exterior — it needs the full scope, coordinated. Interior production has to match exterior weather windows. Specialty coatings have to integrate with the finish carpentry schedule. Color consulting has to align with the developer's design timeline.
            </p>
            <p style="font-size:16px;color:var(--text-muted);line-height:1.8;">
              Bringing all three services under one painting partner removes coordination friction, simplifies billing, and gives the project one accountable owner across the full painting scope. This is how we structure 80% of our work.
            </p>
          </div>

          <!-- 80% callout -->
          <div style="display:inline-flex;align-items:center;gap:14px;padding:16px 24px;background:var(--bg-2);border:1px solid var(--border);border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,.04);">
            <span class="rcs-disp" style="font-size:42px;font-weight:900;color:var(--red);line-height:1;letter-spacing:-.02em;">80%</span>
            <span style="font-size:14px;color:var(--text-muted);max-width:220px;line-height:1.5;">of our work is full-scope: interior + exterior + specialty under one contract.</span>
          </div>
        </div>

        <!-- Right — flow diagram -->
        <div style="display:flex;flex-direction:column;gap:10px;">

          <?php
            $flow = [
              [
                'phase'  => 'Phase 1',
                'title'  => 'Interior Production',
                'body'   => 'Unit-by-unit prep, prime, finish and punch — coordinated with MEP clearances and inspection milestones.',
                'icon'   => '<svg width="18" height="18" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>',
              ],
              [
                'phase'  => 'Phase 2',
                'title'  => 'Exterior Systems',
                'body'   => 'Full envelope prep, repair, and finish — scheduled around weather windows and concurrent trades.',
                'icon'   => '<svg width="18" height="18" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
              ],
              [
                'phase'  => 'Phase 3',
                'title'  => 'Specialty & Closeout',
                'body'   => 'Electrostatic coatings, final color touches, punch closeout documentation, and warranty handover.',
                'icon'   => '<svg width="18" height="18" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>',
              ],
            ];
            foreach ($flow as $i => $f) : ?>
              <div class="together-card">
                <!-- Connector line for non-last items -->
                <div style="display:flex;flex-direction:column;align-items:center;gap:0;flex-shrink:0;">
                  <div style="width:40px;height:40px;background:var(--red-light);border:1px solid rgba(204,0,0,.2);border-radius:10px;display:flex;align-items:center;justify-content:center;">
                    <?php echo $f['icon']; ?>
                  </div>
                  <?php if ($i < count($flow) - 1) : ?>
                    <div style="width:2px;height:10px;background:rgba(204,0,0,.2);margin-top:0;"></div>
                  <?php endif; ?>
                </div>
                <div>
                  <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
                    <span style="font-size:10px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--red);"><?php echo esc_html($f['phase']); ?></span>
                  </div>
                  <p style="font-family:'Montserrat',sans-serif;font-size:15px;font-weight:800;color:var(--ink);margin-bottom:4px;"><?php echo esc_html($f['title']); ?></p>
                  <p style="font-size:13px;color:var(--text-muted);line-height:1.6;"><?php echo esc_html($f['body']); ?></p>
                </div>
              </div>
          <?php endforeach; ?>

          <!-- One contract callout -->
          <div style="background:linear-gradient(135deg,#1A1A1A 0%,#3a0000 55%,#CC0000 130%);border-radius:12px;padding:20px 24px;display:flex;align-items:center;gap:14px;">
            <svg width="20" height="20" fill="none" stroke="rgba(255,255,255,.7)" stroke-width="1.75" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            <p style="font-size:14px;color:rgba(255,255,255,.8);line-height:1.5;">
              <strong style="color:#fff;font-family:'Montserrat',sans-serif;">One contract. One invoice. One point of accountability</strong> — across the full painting scope.
            </p>
          </div>

        </div>
      </div>
    </div>
  </section>


  <!-- ════════════════════════════════════════════════════════
       §4 — FINAL CTA
  ═══════════════════════════════════════════════════════════ -->
  <section class="relative overflow-hidden" style="background:var(--bg);padding:100px 0;">
    <div class="absolute inset-0" style="background:radial-gradient(ellipse 50% 70% at 90% 50%,rgba(204,0,0,0.06) 0%,transparent 65%);pointer-events:none;"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-6">
      <div class="max-w-3xl">
        <div class="section-label">Get Started</div>
        <h2 class="rcs-disp mb-6"
          style="font-size:clamp(30px,4vw,54px);font-weight:900;line-height:.96;letter-spacing:-.03em;color:var(--ink);">
          Have a multifamily project?<br>
          <span style="color:var(--red);">Let's talk scope.</span>
        </h2>
        <p style="font-size:16px;color:var(--text-muted);line-height:1.78;margin-bottom:36px;max-width:560px;">
          Whether your project needs full interior + exterior + specialty, or just one of the three, we'll structure the bid to fit the scope. The owner reviews every project inquiry personally.
        </p>
        <div class="flex flex-wrap gap-4">
          <a href="/contact-us" class="btn-red" style="font-size:15px;padding:16px 32px;">
            Request a project bid
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="9,18 15,12 9,6"/></svg>
          </a>
          <a href="tel:+15125513050" class="btn-ghost" style="font-size:15px;padding:16px 32px;">
            Call: 512-551-3050
          </a>
        </div>
      </div>
    </div>
  </section>

</main>

<?php get_footer(); ?>