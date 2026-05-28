<?php
/**
 * Template Name: Specialty Coatings
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

  /* Service divider tab */
  .service-tab {
    display: inline-flex; align-items: center; gap: 10px;
    padding: 8px 18px;
    background: var(--red); color: #fff;
    font-family: 'Montserrat', sans-serif;
    font-size: 11px; font-weight: 900;
    letter-spacing: .16em; text-transform: uppercase;
    border-radius: 50px;
    margin-bottom: 28px;
  }

  /* Application card */
  .app-card {
    background: var(--bg-2); border: 1px solid var(--border);
    border-radius: 10px; padding: 18px 20px;
    display: flex; align-items: flex-start; gap: 12px;
    transition: border-color .2s, box-shadow .2s;
    box-shadow: 0 2px 6px rgba(0,0,0,.04);
  }
  .app-card:hover {
    border-color: rgba(204,0,0,.2);
    box-shadow: 0 6px 20px rgba(204,0,0,.08);
  }

  /* Deliverable card */
  .deliverable-card {
    background: var(--bg-2); border: 1px solid var(--border);
    border-radius: 12px; padding: 22px;
    display: flex; gap: 14px;
    box-shadow: 0 2px 6px rgba(0,0,0,.04);
    transition: border-color .2s, box-shadow .2s;
  }
  .deliverable-card:hover {
    border-color: rgba(204,0,0,.2);
    box-shadow: 0 6px 20px rgba(204,0,0,.08);
  }

  /* Comparison row */
  .compare-row {
    display: grid; grid-template-columns: 1fr 1fr;
    border-bottom: 1px solid var(--border);
  }
  .compare-row:last-child { border: none; }
  .compare-cell {
    padding: 14px 18px; font-size: 14px;
    line-height: 1.55; color: var(--text-muted);
  }
  .compare-cell:first-child {
    border-right: 1px solid var(--border);
    background: var(--bg-3);
    font-family: 'Montserrat', sans-serif;
    font-weight: 700; color: var(--ink); font-size: 13px;
  }

  /* Why card */
  .why-card {
    background: var(--bg-2); border: 1px solid var(--border);
    border-radius: 10px; padding: 20px;
    box-shadow: 0 2px 6px rgba(0,0,0,.04);
    transition: border-color .2s, box-shadow .2s;
    position: relative; overflow: hidden;
  }
  .why-card::before {
    content: ''; position: absolute;
    bottom: 0; left: 0; right: 0; height: 3px;
    background: var(--red); transform: scaleX(0);
    transform-origin: left; transition: transform .25s;
  }
  .why-card:hover { border-color: rgba(204,0,0,.2); }
  .why-card:hover::before { transform: scaleX(1); }
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
          <a href="/services" style="font-size:12px;font-weight:700;color:rgba(255,255,255,.45);text-decoration:none;" onmouseover="this.style.color='rgba(255,255,255,.8)'" onmouseout="this.style.color='rgba(255,255,255,.45)'">Services</a>
          <span style="color:rgba(255,255,255,.25);font-size:12px;">›</span>
          <span style="font-size:12px;font-weight:700;color:rgba(255,255,255,.6);">Specialty Coatings</span>
        </div>

        <div class="section-label white">Service · Specialty</div>

        <h1 class="rcs-disp text-white mb-6"
          style="font-size:clamp(36px,5vw,64px);font-weight:900;line-height:.92;letter-spacing:-.03em;">
          Specialty applications and<br>design partnership for<br>
          <span style="color:rgba(255,255,255,.55);">multifamily projects.</span>
        </h1>
        <p style="font-size:17px;color:rgba(255,255,255,.70);line-height:1.78;max-width:600px;margin-bottom:28px;">
          Beyond standard interior and exterior painting, RCS offers two specialty services that complete the multifamily painting scope: electrostatic painting for metal components, and color consulting partnerships with developers selecting palettes for new properties.
        </p>

        <!-- Two service pills -->
        <div style="display:flex;flex-wrap:wrap;gap:10px;">
          <a href="#electrostatic" style="display:inline-flex;align-items:center;gap:8px;padding:10px 20px;background:rgba(255,255,255,.15);color:#fff;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:700;text-decoration:none;border-radius:50px;border:1px solid rgba(255,255,255,.3);transition:background .15s;" onmouseover="this.style.background='rgba(255,255,255,.25)'" onmouseout="this.style.background='rgba(255,255,255,.15)'">
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/></svg>
            Electrostatic Painting
          </a>
          <a href="#color-consulting" style="display:inline-flex;align-items:center;gap:8px;padding:10px 20px;background:rgba(255,255,255,.15);color:#fff;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:700;text-decoration:none;border-radius:50px;border:1px solid rgba(255,255,255,.3);transition:background .15s;" onmouseover="this.style.background='rgba(255,255,255,.25)'" onmouseout="this.style.background='rgba(255,255,255,.15)'">
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4"/></svg>
            Color Consulting
          </a>
        </div>

      </div>
    </div>
  </section>


  <!-- ════════════════════════════════════════════════════════
       SERVICE 1 — ELECTROSTATIC PAINTING
  ═══════════════════════════════════════════════════════════ -->

  <!-- §2A — What is electrostatic painting -->
  <section id="electrostatic" style="background:var(--bg);padding:100px 0;border-bottom:1px solid var(--border);">
    <div class="max-w-7xl mx-auto px-6">

      <div class="service-tab">
        <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/></svg>
        Service 01 — Electrostatic Painting
      </div>

      <div class="grid lg:grid-cols-2 gap-16 items-start">

        <div>
          <div class="section-label">What It Is</div>
          <h2 class="rcs-disp mb-6"
            style="font-size:clamp(28px,3.5vw,46px);font-weight:900;line-height:1.0;letter-spacing:-.03em;color:var(--ink);">
            Factory powder coat finish.<br>
            <span style="color:var(--red);">Applied in place.</span>
          </h2>
          <div style="display:flex;flex-direction:column;gap:16px;">
            <p style="font-size:16px;color:var(--text-muted);line-height:1.8;">
              Electrostatic painting is a specialized application method where the coating is electrically charged to bond with the grounded metal surface. The result is a smoother, more durable, more consistent finish than conventional spray application — particularly on complex metal geometry like railings, balusters, and door frames.
            </p>
            <p style="font-size:16px;color:var(--text-muted);line-height:1.8;">
              For multifamily, the practical benefit is two-fold: (1) it produces a finish indistinguishable from factory powder coat on items that aren't economically powder-coatable in the field, and (2) it can be applied in place, without removing the railings, doors, or frames from the building.
            </p>
          </div>
        </div>

        <!-- Comparison table -->
        <div style="background:var(--bg-2);border:1px solid var(--border);border-radius:14px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.05);">
          <!-- Header row -->
          <div style="display:grid;grid-template-columns:1fr 1fr;background:var(--red);">
            <div style="padding:12px 18px;font-family:'Montserrat',sans-serif;font-size:11px;font-weight:900;letter-spacing:.12em;text-transform:uppercase;color:#fff;border-right:1px solid rgba(255,255,255,.2);">Conventional Spray</div>
            <div style="padding:12px 18px;font-family:'Montserrat',sans-serif;font-size:11px;font-weight:900;letter-spacing:.12em;text-transform:uppercase;color:#fff;">Electrostatic</div>
          </div>
          <?php
            $compare = [
              ['conv' => 'Higher overspray, masking required', 'elec' => 'Minimal overspray — charge attracts coating to metal'],
              ['conv' => 'Uneven film on complex geometry',    'elec' => 'Uniform film wraps around balusters and rails'],
              ['conv' => 'Components may need removal',       'elec' => 'Applied in place — no removal required'],
              ['conv' => 'Standard commercial finish',         'elec' => 'Finish comparable to factory powder coat'],
              ['conv' => 'Lower upfront cost',                'elec' => 'Higher durability, fewer touch-up callbacks'],
            ];
            foreach ($compare as $c) : ?>
              <div class="compare-row">
                <div class="compare-cell" style="color:var(--text-dim);"><?php echo esc_html($c['conv']); ?></div>
                <div class="compare-cell" style="font-weight:600;color:var(--ink);">
                  <span style="color:var(--red);margin-right:6px;">✓</span><?php echo esc_html($c['elec']); ?>
                </div>
              </div>
          <?php endforeach; ?>
        </div>

      </div>
    </div>
  </section>

  <!-- §2B — Applications -->
  <section style="background:var(--bg-3);padding:80px 0;border-bottom:1px solid var(--border);">
    <div class="max-w-7xl mx-auto px-6">

      <div class="section-label">Common Applications</div>
      <h2 class="rcs-disp mb-10"
        style="font-size:clamp(26px,3vw,42px);font-weight:900;line-height:1.0;letter-spacing:-.03em;color:var(--ink);">
        Where electrostatic delivers<br>
        <span style="color:var(--red);">the best outcome.</span>
      </h2>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <?php
          $apps = [
            ['title' => 'Balcony Railings',       'desc' => 'Privacy panels, balusters, top rails, gate components.',
             'icon' => '<svg width="18" height="18" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12"/><line x1="8" y1="5" x2="8" y2="19"/><line x1="16" y1="5" x2="16" y2="19"/></svg>'],
            ['title' => 'Stair Railings',          'desc' => 'Interior and exterior stair systems, safety rails.',
             'icon' => '<svg width="18" height="18" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><polyline points="7 17 17 7"/><polyline points="7 7 17 7 17 17"/></svg>'],
            ['title' => 'Door Frames',             'desc' => 'Interior and exterior metal frames, refinish for color match.',
             'icon' => '<svg width="18" height="18" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>'],
            ['title' => 'Metal Doors',             'desc' => 'Exterior security, mechanical room, fire-rated assemblies.',
             'icon' => '<svg width="18" height="18" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/></svg>'],
            ['title' => 'Architectural Metal',     'desc' => 'Feature walls, screen panels, decorative metalwork.',
             'icon' => '<svg width="18" height="18" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/></svg>'],
            ['title' => 'Mechanical Screening',    'desc' => 'RTU screens, generator enclosures, dumpster gates.',
             'icon' => '<svg width="18" height="18" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83"/></svg>'],
            ['title' => 'Site Amenities',          'desc' => 'Mailbox kiosks, leasing pavilion accents, gatehouse details.',
             'icon' => '<svg width="18" height="18" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>'],
          ];
          foreach ($apps as $a) : ?>
            <div class="app-card">
              <div style="width:34px;height:34px;background:var(--red-light);border:1px solid rgba(204,0,0,.2);border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <?php echo $a['icon']; ?>
              </div>
              <div>
                <p style="font-family:'Montserrat',sans-serif;font-size:13px;font-weight:800;color:var(--ink);margin-bottom:3px;"><?php echo esc_html($a['title']); ?></p>
                <p style="font-size:12px;color:var(--text-muted);line-height:1.5;"><?php echo esc_html($a['desc']); ?></p>
              </div>
            </div>
        <?php endforeach; ?>
      </div>

    </div>
  </section>

  <!-- §2C — When to use electrostatic -->
  <section style="background:var(--bg);padding:80px 0;border-bottom:1px solid var(--border);">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <div class="section-label">When To Use It</div>
          <h2 class="rcs-disp mb-6"
            style="font-size:clamp(26px,3vw,42px);font-weight:900;line-height:1.0;letter-spacing:-.03em;color:var(--ink);">
            Right choice when the spec<br>
            <span style="color:var(--red);">demands powder coat quality.</span>
          </h2>
          <div style="display:flex;flex-direction:column;gap:16px;">
            <p style="font-size:16px;color:var(--text-muted);line-height:1.8;">
              Electrostatic is the right choice when the project needs a finish that looks and performs like factory powder coat, but the components are already installed or aren't practical to remove. It's also the right choice when the substrate complexity (railings with multiple geometries, intricate balusters) would produce inconsistent coverage with conventional spray.
            </p>
            <p style="font-size:16px;color:var(--text-muted);line-height:1.8;">
              We work with the GC and architect on coating selection — when electrostatic is the right call, and when standard direct-to-metal application is more cost-effective for the spec.
            </p>
          </div>
        </div>

        <!-- Decision callout -->
        <div style="display:flex;flex-direction:column;gap:10px;">
          <div style="background:var(--bg-2);border:1px solid var(--border);border-radius:12px;padding:22px;box-shadow:0 2px 8px rgba(0,0,0,.04);">
            <p style="font-family:'Montserrat',sans-serif;font-size:13px;font-weight:900;color:var(--red);letter-spacing:.08em;text-transform:uppercase;margin-bottom:14px;">Use electrostatic when:</p>
            <?php foreach ([
              'Components are installed and impractical to remove',
              'Complex geometry (balusters, ornamental rail) needs uniform film',
              'Spec calls for powder coat quality finish in the field',
              'Minimizing overspray near completed finishes is critical',
            ] as $item) : ?>
              <div style="display:flex;align-items:flex-start;gap:10px;padding:9px 0;border-bottom:1px solid var(--border);">
                <svg width="14" height="14" fill="none" stroke="#CC0000" stroke-width="2.5" viewBox="0 0 24 24" style="flex-shrink:0;margin-top:2px;"><polyline points="20 6 9 17 4 12"/></svg>
                <span style="font-size:14px;color:var(--text-muted);"><?php echo esc_html($item); ?></span>
              </div>
            <?php endforeach; ?>
          </div>

          <div style="background:var(--bg-3);border:1px solid var(--border);border-radius:12px;padding:22px;box-shadow:0 2px 8px rgba(0,0,0,.04);">
            <p style="font-family:'Montserrat',sans-serif;font-size:13px;font-weight:900;color:var(--charcoal);letter-spacing:.08em;text-transform:uppercase;margin-bottom:14px;">Standard DTM when:</p>
            <?php foreach ([
              'Simple flat or low-complexity metal surfaces',
              'Budget spec where powder coat quality isn\'t required',
              'Components can be primed/topcoated off the building',
            ] as $item) : ?>
              <div style="display:flex;align-items:flex-start;gap:10px;padding:9px 0;border-bottom:1px solid var(--border);">
                <div style="width:6px;height:6px;border-radius:50%;background:var(--text-dim);flex-shrink:0;margin-top:5px;"></div>
                <span style="font-size:14px;color:var(--text-muted);"><?php echo esc_html($item); ?></span>
              </div>
            <?php endforeach; ?>
          </div>
        </div>

      </div>
    </div>
  </section>


  <!-- ════════════════════════════════════════════════════════
       SERVICE 2 — COLOR CONSULTING
  ═══════════════════════════════════════════════════════════ -->

  <!-- §3A — How it works -->
  <section id="color-consulting" style="background:var(--bg-3);padding:100px 0;border-bottom:1px solid var(--border);">
    <div class="max-w-7xl mx-auto px-6">

      <div class="service-tab" style="background:var(--charcoal);">
        <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83"/></svg>
        Service 02 — Color Consulting
      </div>

      <div class="grid lg:grid-cols-2 gap-16 items-start">

        <div>
          <div class="section-label">How It Works</div>
          <h2 class="rcs-disp mb-6"
            style="font-size:clamp(28px,3.5vw,46px);font-weight:900;line-height:1.0;letter-spacing:-.03em;color:var(--ink);">
            Color selection backed by<br>
            <span style="color:var(--red);">field experience, not just theory.</span>
          </h2>
          <div style="display:flex;flex-direction:column;gap:16px;margin-bottom:24px;">
            <p style="font-size:16px;color:var(--text-muted);line-height:1.8;">
              Color consulting is a partnership service for developers and architects selecting interior and exterior color palettes for new multifamily properties. We bring the field experience of having executed hundreds of multifamily projects to the color selection process — what works in Texas sun, what reads well in unit photography, what holds up over time.
            </p>
            <p style="font-size:16px;color:var(--text-muted);line-height:1.8;">
              This is a paid consulting engagement separate from any painting contract. Many of our developer color consulting relationships predate the painting bid by 6–12 months.
            </p>
          </div>

          <!-- Timeline pill -->
          <div style="display:inline-flex;align-items:center;gap:10px;padding:12px 18px;background:var(--bg-2);border:1px solid var(--border);border-radius:10px;box-shadow:0 2px 6px rgba(0,0,0,.04);">
            <svg width="16" height="16" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            <span style="font-size:13px;color:var(--text-muted);line-height:1.4;max-width:260px;">Many consulting relationships begin <strong style="color:var(--ink);">6–12 months</strong> before the painting bid.</span>
          </div>
        </div>

        <!-- Audience cards -->
        <div style="display:flex;flex-direction:column;gap:12px;">
          <div style="background:var(--bg-2);border:1px solid var(--border);border-radius:14px;padding:24px;box-shadow:0 2px 8px rgba(0,0,0,.04);">
            <p style="font-family:'Montserrat',sans-serif;font-size:12px;font-weight:900;letter-spacing:.16em;text-transform:uppercase;color:var(--red);margin-bottom:12px;">For Developers</p>
            <p style="font-size:14px;color:var(--text-muted);line-height:1.7;">
              Palette selection that aligns with your project's positioning, target demographic, and marketing direction — before you commit to a spec that's hard to change mid-construction.
            </p>
          </div>
          <div style="background:var(--bg-2);border:1px solid var(--border);border-radius:14px;padding:24px;box-shadow:0 2px 8px rgba(0,0,0,.04);">
            <p style="font-family:'Montserrat',sans-serif;font-size:12px;font-weight:900;letter-spacing:.16em;text-transform:uppercase;color:var(--charcoal);margin-bottom:12px;">For Architects</p>
            <p style="font-size:14px;color:var(--text-muted);line-height:1.7;">
              Coating specification support that bridges design intent and field execution — product selection, system compatibility, and finish standards aligned to your drawings.
            </p>
          </div>
          <div style="background:var(--bg-2);border:1px solid var(--border);border-radius:14px;padding:24px;box-shadow:0 2px 8px rgba(0,0,0,.04);">
            <p style="font-family:'Montserrat',sans-serif;font-size:12px;font-weight:900;letter-spacing:.16em;text-transform:uppercase;color:var(--text-dim);margin-bottom:12px;">For Interior Designers</p>
            <p style="font-size:14px;color:var(--text-muted);line-height:1.7;">
              Coordination between your interior concept and the paint spec that gets executed on the wall — not translated through a GC PM who doesn't know the difference between eggshell and satin.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- §3B — What we deliver -->
  <section style="background:var(--bg);padding:80px 0;border-bottom:1px solid var(--border);">
    <div class="max-w-7xl mx-auto px-6">

      <div class="section-label">What We Deliver</div>
      <h2 class="rcs-disp mb-10"
        style="font-size:clamp(26px,3vw,42px);font-weight:900;line-height:1.0;letter-spacing:-.03em;color:var(--ink);">
        From initial palette to<br>
        <span style="color:var(--red);">production verification.</span>
      </h2>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <?php
          $deliverables = [
            [
              'num'   => '01',
              'title' => 'Initial Palette Concepts',
              'desc'  => 'Concepts based on project positioning — Class A vs. Class B, urban vs. suburban, target demographic. Interior and exterior palettes developed in parallel.',
              'icon'  => '<svg width="20" height="20" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>',
            ],
            [
              'num'   => '02',
              'title' => 'Sample Boards & Mock-Ups',
              'desc'  => 'Physical sample boards and on-site mock-up panels for stakeholder approval — color, sheen, and texture reviewed in context.',
              'icon'  => '<svg width="20" height="20" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>',
            ],
            [
              'num'   => '03',
              'title' => 'Specification Documents',
              'desc'  => 'Colors matched to product systems — interior latex, exterior elastomeric, DTM metal coatings. Documents structured for GC and paint contractor use.',
              'icon'  => '<svg width="20" height="20" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/></svg>',
            ],
            [
              'num'   => '04',
              'title' => 'Team Coordination',
              'desc'  => 'Coordination with architect, interior designer, and developer marketing team. Single color spec that all parties have approved before production begins.',
              'icon'  => '<svg width="20" height="20" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
            ],
            [
              'num'   => '05',
              'title' => 'Production Verification Walks',
              'desc'  => 'Site walks during active production to verify color execution matches spec. Issues caught and corrected in real time — not at the final punch.',
              'icon'  => '<svg width="20" height="20" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
            ],
          ];
          foreach ($deliverables as $d) : ?>
            <div class="deliverable-card">
              <div style="width:40px;height:40px;background:var(--red-light);border:1px solid rgba(204,0,0,.2);border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <?php echo $d['icon']; ?>
              </div>
              <div>
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:5px;">
                  <span style="font-size:10px;font-weight:900;color:rgba(204,0,0,.4);letter-spacing:.12em;"><?php echo esc_html($d['num']); ?></span>
                  <p style="font-family:'Montserrat',sans-serif;font-size:14px;font-weight:800;color:var(--ink);"><?php echo esc_html($d['title']); ?></p>
                </div>
                <p style="font-size:13px;color:var(--text-muted);line-height:1.65;"><?php echo esc_html($d['desc']); ?></p>
              </div>
            </div>
        <?php endforeach; ?>
      </div>

    </div>
  </section>

  <!-- §3C — Why work with us on color -->
  <section style="background:var(--bg-3);padding:80px 0;border-bottom:1px solid var(--border);">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-center">

        <!-- Left — copy -->
        <div>
          <div class="section-label">Why Us</div>
          <h2 class="rcs-disp mb-6"
            style="font-size:clamp(28px,3.5vw,46px);font-weight:900;line-height:1.0;letter-spacing:-.03em;color:var(--ink);">
            Most color consultants<br>don't apply the paint.<br>
            <span style="color:var(--red);">We do.</span>
          </h2>
          <div style="display:flex;flex-direction:column;gap:16px;">
            <p style="font-size:16px;color:var(--text-muted);line-height:1.8;">
              Every day, across 20+ active multifamily projects. That means our recommendations are grounded in what actually performs in the field: which whites pick up Texas-sun yellowing, which accent colors fade fastest on south-facing elevations, which interior schemes photograph well for leasing marketing.
            </p>
            <p style="font-size:16px;color:var(--text-muted);line-height:1.8;">
              Developers working with us on color end up with palettes that look as good in year five as they do at lease-up.
            </p>
          </div>
        </div>

        <!-- Right — field knowledge cards -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
          <?php
            $knowledge = [
              ['title' => 'Texas sun performance',  'desc' => 'Which colors and sheens hold under high UV index without fading or yellowing.'],
              ['title' => 'Leasing photography',    'desc' => 'Interior palettes that photograph well for marketing — not just look good in person.'],
              ['title' => 'South-facing elevation', 'desc' => 'Exterior colors tested against heat and UV on south-facing walls in Texas summers.'],
              ['title' => '5-year durability',      'desc' => 'Palettes that remain spec-accurate through the property\'s first lease-up cycle.'],
            ];
            foreach ($knowledge as $k) : ?>
              <div class="why-card">
                <div style="width:8px;height:8px;border-radius:50%;background:var(--red);margin-bottom:10px;"></div>
                <p style="font-family:'Montserrat',sans-serif;font-size:13px;font-weight:800;color:var(--ink);margin-bottom:5px;"><?php echo esc_html($k['title']); ?></p>
                <p style="font-size:12px;color:var(--text-muted);line-height:1.55;"><?php echo esc_html($k['desc']); ?></p>
              </div>
          <?php endforeach; ?>
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
        <h2 class="rcs-disp mb-5"
          style="font-size:clamp(30px,4vw,52px);font-weight:900;line-height:.96;letter-spacing:-.03em;color:var(--ink);">
          Need specialty coatings or<br>color consulting for an<br>
          <span style="color:var(--red);">upcoming project?</span>
        </h2>
        <p style="font-size:16px;color:var(--text-muted);line-height:1.78;margin-bottom:36px;max-width:540px;">
          Reach out with project details. The owner reviews specialty inquiries personally and will respond within one business day.
        </p>
        <div style="display:flex;flex-wrap:wrap;gap:12px;">
          <a href="/contact-us" class="btn-red" style="font-size:15px;padding:16px 32px;">
            Request a project bid
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="9,18 15,12 9,6"/></svg>
          </a>
          <a href="/contact-us?service=color-consulting" class="btn-ghost" style="font-size:15px;padding:16px 32px;">
            Schedule a color consulting conversation
          </a>
        </div>
      </div>
    </div>
  </section>

</main>

<?php get_footer(); ?>