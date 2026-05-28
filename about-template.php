<?php
/**
 * Template Name: About Us
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

  .rcs-page  { font-family: 'DM Sans', sans-serif; background: var(--bg); color: var(--ink); }
  .rcs-disp  { font-family: 'Montserrat', sans-serif; }

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

  /* Principle card */
  .principle-card {
    background: var(--bg-2); border: 1px solid var(--border);
    border-radius: 12px; padding: 28px;
    transition: border-color .2s, box-shadow .2s;
    box-shadow: 0 2px 8px rgba(0,0,0,.04);
    position: relative; overflow: hidden;
  }
  .principle-card::before {
    content: ''; position: absolute;
    top: 0; left: 0; width: 4px; height: 100%;
    background: var(--red); transform: scaleY(0);
    transform-origin: top; transition: transform .25s ease;
  }
  .principle-card:hover { border-color: rgba(204,0,0,.25); box-shadow: 0 8px 28px rgba(204,0,0,.08); }
  .principle-card:hover::before { transform: scaleY(1); }

  /* Team role row */
  .team-role {
    display: flex; align-items: flex-start; gap: 14px;
    padding: 16px 0; border-bottom: 1px solid var(--border);
  }
  .team-role:last-child { border: none; }

  /* Cred table */
  .cred-col {
    background: var(--bg-2); border: 1px solid var(--border);
    border-radius: 10px; padding: 24px;
    box-shadow: 0 2px 8px rgba(0,0,0,.04);
  }
  .cred-item {
    display: flex; align-items: flex-start; gap: 10px;
    padding: 10px 0; border-bottom: 1px solid var(--border);
    font-size: 14px; color: var(--text-muted); line-height: 1.4;
  }
  .cred-item:last-child { border: none; padding-bottom: 0; }
  .cred-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--red); flex-shrink: 0; margin-top: 5px;
  }

  /* Stat highlight */
  .stat-box {
    background: var(--bg-2); border: 1px solid var(--border);
    border-radius: 12px; padding: 24px 20px; text-align: center;
    box-shadow: 0 2px 8px rgba(0,0,0,.04);
  }

  /* Grid texture */
  .grid-bg {
    background-image:
      linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
    background-size: 48px 48px;
  }

  /* Insurance card */
  .ins-card {
    background: var(--bg-2); border: 1px solid var(--border);
    border-radius: 10px; padding: 18px 20px;
    display: flex; align-items: flex-start; gap: 14px;
    box-shadow: 0 2px 6px rgba(0,0,0,.04);
  }

  /* Reveal animation */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .reveal   { animation: fadeUp .6s ease both; }
  .reveal-d1 { animation-delay: .1s; }
  .reveal-d2 { animation-delay: .2s; }
  .reveal-d3 { animation-delay: .3s; }
</style>

<main class="rcs-page">

  <!-- ════════════════════════════════════════════════════════
       §1 — HERO
  ═══════════════════════════════════════════════════════════ -->
  <section
    class="relative overflow-hidden"
    style="background: linear-gradient(135deg, #1A1A1A 0%, #3a0000 55%, #CC0000 130%); min-height: 520px; display: flex; align-items: center;"
  >
    <!-- Diagonal texture -->
    <div style="position:absolute;inset:0;background-image:linear-gradient(45deg,rgba(255,255,255,0.03) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.03) 50%,rgba(255,255,255,0.03) 75%,transparent 75%);background-size:32px 32px;pointer-events:none;"></div>
    <!-- Red glow -->
    <div style="position:absolute;top:-20%;right:-10%;width:60%;height:140%;background:radial-gradient(ellipse,rgba(204,0,0,0.25) 0%,transparent 65%);pointer-events:none;"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 py-28">
      <div class="max-w-3xl reveal">

        <div class="section-label white">About RCS Complete Painting</div>

        <h1 class="rcs-disp text-white mb-6"
          style="font-size:clamp(36px,5vw,68px);font-weight:900;line-height:.92;letter-spacing:-.03em;">
          Three decades in the field.<br>
          One discipline.<br>
          <span style="color:rgba(255,255,255,.55);">Built for the projects that can't afford a painter who doesn't show up.</span>
        </h1>

        <p class="mb-10" style="font-size:17px;color:rgba(255,255,255,.72);line-height:1.78;max-width:580px;">
          RCS Complete Painting is a Hispanic-owned multifamily painting specialist headquartered in Austin, Texas. We've built our team, our equipment, and our processes around one project type — multifamily new construction — and we've spent 30+ years getting it right.
        </p>

        <!-- Trust strip -->
        <div style="display:flex;flex-wrap:wrap;gap:20px;">
          <?php
            $trust = ['Founded in Austin', '30+ Years in Commercial Painting', 'Owner-Led on Every Project', 'Hispanic-Owned Business'];
            foreach ($trust as $t) : ?>
              <div style="display:flex;align-items:center;gap:6px;font-size:12px;font-weight:700;color:rgba(255,255,255,.65);">
                <span style="width:4px;height:4px;border-radius:50%;background:rgba(255,255,255,.45);flex-shrink:0;"></span>
                <?php echo esc_html($t); ?>
              </div>
          <?php endforeach; ?>
        </div>

      </div>
    </div>
  </section>


  <!-- ════════════════════════════════════════════════════════
       §2 — OUR STORY
  ═══════════════════════════════════════════════════════════ -->
  <section style="background:var(--bg);padding:100px 0;border-bottom:1px solid var(--border);">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-start">

        <!-- Left — copy -->
        <div>
          <div class="section-label">Our Story</div>
          <h2 class="rcs-disp mb-8"
            style="font-size:clamp(28px,3.5vw,46px);font-weight:900;line-height:1.0;letter-spacing:-.03em;color:var(--ink);">
            Built by people who have spent<br>a career inside multifamily construction.
          </h2>

          <div style="display:flex;flex-direction:column;gap:20px;">
            <p style="font-size:16px;color:var(--text-muted);line-height:1.8;">
              RCS Complete Painting was founded on a simple observation: most general contractors and developers managing multifamily projects don't lose sleep over the paint. They lose sleep over the painter — the sub who shows up understaffed on a Monday, misses an inspection by Wednesday, and pushes the project's punch closeout by two weeks.
            </p>
            <p style="font-size:16px;color:var(--text-muted);line-height:1.8;">
              Our founder spent 30+ years in commercial and multifamily painting before launching RCS — watching that exact pattern play out across hundreds of projects. The decision to start RCS was a decision to remove that pattern from the equation. To build a painting company that operates the way GCs and developers actually need it to: predictably, transparently, and at the scale modern multifamily construction demands.
            </p>
            <p style="font-size:16px;color:var(--text-muted);line-height:1.8;">
              Today, RCS runs 20+ active multifamily projects simultaneously across Texas and the South Central region. The work has scaled — the principles haven't. Every project is owner-supervised. Every crew is on payroll. Every commitment we make in the bid is one we plan to honor in the field.
            </p>
          </div>
        </div>

        <!-- Right — stats + image -->
        <div class="flex flex-col gap-5">

          <!-- Owner photo placeholder -->
          <div style="height:340px;background:var(--bg-3);border:1px solid var(--border);border-radius:14px;overflow:hidden;position:relative;">
            <div style="position:absolute;inset:0;background:url('/wp-content/uploads/founder-rcs.jpg') center/cover no-repeat;"></div>
            <div class="grid-bg" style="position:absolute;inset:0;opacity:.5;"></div>
            <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.7) 0%,rgba(0,0,0,.1) 60%);"></div>
            <div style="position:absolute;bottom:20px;left:20px;right:20px;background:rgba(0,0,0,.75);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.12);border-radius:8px;padding:14px 16px;">
              <p style="font-size:11px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:3px;">Founder & Owner</p>
              <p style="font-size:13px;color:rgba(255,255,255,.6);">On-site on every active project — from bid walk to final punch.</p>
            </div>
          </div>

          <!-- Stats row -->
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
            <?php
              $stats = [
                ['n' => '30+', 'l' => 'Years of experience'],
                ['n' => '20+', 'l' => 'Active projects'],
                ['n' => '100+','l' => 'Painters on payroll'],
              ];
              foreach ($stats as $s) : ?>
                <div class="stat-box">
                  <div class="rcs-disp" style="font-size:36px;font-weight:900;color:var(--red);line-height:1;letter-spacing:-.02em;"><?php echo esc_html($s['n']); ?></div>
                  <p style="font-size:12px;color:var(--text-muted);margin-top:5px;line-height:1.4;"><?php echo esc_html($s['l']); ?></p>
                </div>
            <?php endforeach; ?>
          </div>

        </div>
      </div>
    </div>
  </section>


  <!-- ════════════════════════════════════════════════════════
       §3 — WHAT DEFINES US
  ═══════════════════════════════════════════════════════════ -->
  <section style="background:var(--bg-3);padding:100px 0;border-bottom:1px solid var(--border);">
    <div class="max-w-7xl mx-auto px-6">

      <div class="text-center mb-14">
        <div class="section-label" style="justify-content:center;">What Defines Us</div>
        <h2 class="rcs-disp" style="font-size:clamp(28px,3.5vw,46px);font-weight:900;line-height:1.0;letter-spacing:-.03em;color:var(--ink);">
          Four principles that have shaped<br>
          <span style="color:var(--red);">how we work for three decades.</span>
        </h2>
      </div>

      <div class="grid md:grid-cols-2 gap-5">
        <?php
          $principles = [
            [
              'num'   => '01',
              'title' => 'Focus over breadth.',
              'body'  => 'Multifamily new construction is its own discipline — different production rates, different inspection cadence, different finish standards than residential or commercial TI. We chose to specialize because specialization is what allows us to deliver consistency. One project type. Three decades of learning curve.',
            ],
            [
              'num'   => '02',
              'title' => 'The owner walks every job.',
              'body'  => 'The founder is not behind a desk reviewing photos. He is on the site, with the crew, with the project manager, walking the work. Every project. This is the only model that produces real accountability — and it is the model RCS has run on since day one.',
            ],
            [
              'num'   => '03',
              'title' => 'Communication before you ask.',
              'body'  => 'Daily progress reports during active production. Weekly photo documentation. Schedule variance reports. COIs within 24 hours. The information you would normally have to chase is the information we deliver as standard practice. It\'s faster for everyone.',
            ],
            [
              'num'   => '04',
              'title' => 'Long relationships over single jobs.',
              'body'  => 'Half of our annual volume comes from repeat partners — GCs and developers we\'ve worked with across multiple projects. That repeat business is the most honest review of our work, and it is the standard we measure ourselves against on every new bid.',
            ],
          ];
          foreach ($principles as $p) : ?>
            <div class="principle-card">
              <div style="display:flex;align-items:flex-start;gap:16px;">
                <span class="rcs-disp" style="font-size:32px;font-weight:900;color:rgba(204,0,0,.20);line-height:1;flex-shrink:0;"><?php echo esc_html($p['num']); ?></span>
                <div>
                  <h3 class="rcs-disp" style="font-size:20px;font-weight:900;color:var(--ink);margin-bottom:10px;line-height:1.1;">
                    <?php echo esc_html($p['title']); ?>
                  </h3>
                  <p style="font-size:14px;color:var(--text-muted);line-height:1.75;">
                    <?php echo esc_html($p['body']); ?>
                  </p>
                </div>
              </div>
            </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>


  <!-- ════════════════════════════════════════════════════════
       §4 — THE TEAM
  ═══════════════════════════════════════════════════════════ -->
  <section style="background:var(--bg);padding:100px 0;border-bottom:1px solid var(--border);">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-start">

        <!-- Left — copy -->
        <div>
          <div class="section-label">The Team</div>
          <h2 class="rcs-disp mb-6"
            style="font-size:clamp(28px,3.5vw,46px);font-weight:900;line-height:1.0;letter-spacing:-.03em;color:var(--ink);">
            100+ painters.<br>
            <span style="color:var(--red);">One standard.</span>
          </h2>
          <p style="font-size:16px;color:var(--text-muted);line-height:1.8;margin-bottom:16px;">
            RCS operates with 100+ painters mobilized across our service area. Every crew member is on payroll — not a day laborer pulled off a corner, not a 1099 fill-in. Every supervisor is OSHA 30 certified. Every field crew is OSHA 10 minimum. The owner makes the hiring decision personally on every supervisor we bring on.
          </p>
          <p style="font-size:16px;color:var(--text-muted);line-height:1.8;">
            This is what allows the standard to remain consistent whether we have 5 crews on one project or 20+ crews across the region: the people are ours, they know what we expect, and we are accountable for their work.
          </p>
        </div>

        <!-- Right — team roles -->
        <div style="background:var(--bg-2);border:1px solid var(--border);border-radius:14px;padding:32px;box-shadow:0 2px 12px rgba(0,0,0,.05);">
          <p style="font-size:11px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:20px;padding-bottom:14px;border-bottom:1px solid var(--border);">Team Structure</p>

          <?php
            $roles = [
              [
                'role' => 'Owner / Founder',
                'desc' => 'On-site oversight on every active project.',
                'icon' => '<svg width="18" height="18" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
              ],
              [
                'role' => 'Project Managers',
                'desc' => 'Full-time, dedicated to RCS, assigned per project.',
                'icon' => '<svg width="18" height="18" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
              ],
              [
                'role' => 'OSHA 30 Supervisors',
                'desc' => 'Crew leadership, safety enforcement, daily reporting.',
                'icon' => '<svg width="18" height="18" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
              ],
              [
                'role' => 'Field Painters',
                'desc' => 'OSHA 10 trained, fully equipped, on RCS payroll.',
                'icon' => '<svg width="18" height="18" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><path d="M3 3h12v4H3zM5 7v8a2 2 0 002 2h4a2 2 0 002-2V7"/><path d="M18 8c0-1.5 3-3 3-3s-1.5 2.5-1.5 3a1.5 1.5 0 01-3 0"/></svg>',
              ],
              [
                'role' => 'Color & Specification Consultants',
                'desc' => 'In-house support for developer color schedules.',
                'icon' => '<svg width="18" height="18" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4"/></svg>',
              ],
            ];
            foreach ($roles as $r) : ?>
              <div class="team-role">
                <div style="width:36px;height:36px;border-radius:8px;background:var(--red-light);border:1px solid rgba(204,0,0,.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                  <?php echo $r['icon']; ?>
                </div>
                <div>
                  <p style="font-family:'Montserrat',sans-serif;font-size:14px;font-weight:800;color:var(--ink);margin-bottom:2px;"><?php echo esc_html($r['role']); ?></p>
                  <p style="font-size:13px;color:var(--text-muted);"><?php echo esc_html($r['desc']); ?></p>
                </div>
              </div>
          <?php endforeach; ?>
        </div>

      </div>
    </div>
  </section>


  <!-- ════════════════════════════════════════════════════════
       §5 — CERTIFICATIONS & COMPLIANCE
  ═══════════════════════════════════════════════════════════ -->
  <section style="background:var(--bg-3);padding:100px 0;border-bottom:1px solid var(--border);">
    <div class="max-w-7xl mx-auto px-6">

      <div class="text-center mb-14">
        <div class="section-label" style="justify-content:center;">Credentials</div>
        <h2 class="rcs-disp" style="font-size:clamp(28px,3.5vw,46px);font-weight:900;line-height:1.0;letter-spacing:-.03em;color:var(--ink);">
          Documented. Verifiable.<br>
          <span style="color:var(--red);">Procurement-ready.</span>
        </h2>
        <p style="font-size:15px;color:var(--text-muted);line-height:1.7;margin-top:14px;max-width:520px;margin-left:auto;margin-right:auto;">
          Every credential below is verifiable on request. We deliver insurance certificates, W-9s, and references within one business day — typically faster for active bids.
        </p>
      </div>

      <!-- Cred columns -->
      <div class="grid md:grid-cols-3 gap-5 mb-10">

        <div class="cred-col">
          <div style="font-size:11px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid var(--border);">Safety & Training</div>
          <?php foreach (['OSHA 10 — all field crew', 'OSHA 30 — all supervisors', 'Boom lift certified', 'Fall protection trained', 'Lead-safe procedures (RRP)'] as $item) : ?>
            <div class="cred-item"><span class="cred-dot"></span><?php echo esc_html($item); ?></div>
          <?php endforeach; ?>
        </div>

        <div class="cred-col">
          <div style="font-size:11px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid var(--border);">Business & Legal</div>
          <?php foreach (['Fully insured (GL, WC, auto)', 'DUNS #082349795', 'Hispanic-owned business', 'Texas registered LLC', 'HUB Texas certification eligible', 'SAM.gov registered'] as $item) : ?>
            <div class="cred-item"><span class="cred-dot"></span><?php echo esc_html($item); ?></div>
          <?php endforeach; ?>
        </div>

        <div class="cred-col">
          <div style="font-size:11px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid var(--border);">Quality & Operations</div>
          <?php foreach (['Owner-supervised every project', 'Premium commercial-grade coatings', '2-year workmanship warranty', 'Documented QC walks weekly', 'Digital daily reporting'] as $item) : ?>
            <div class="cred-item"><span class="cred-dot"></span><?php echo esc_html($item); ?></div>
          <?php endforeach; ?>
        </div>

      </div>

      <!-- Insurance coverage -->
      <div style="background:var(--bg-2);border:1px solid var(--border);border-radius:14px;padding:32px;margin-bottom:14px;box-shadow:0 2px 8px rgba(0,0,0,.04);">
        <p style="font-size:11px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:20px;">Insurance Coverage</p>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <?php
            $insurance = [
              ['title' => 'General Liability',    'desc' => 'Coverage limits available on COI request'],
              ['title' => "Workers' Compensation", 'desc' => 'Full Texas state coverage'],
              ['title' => 'Commercial Auto',       'desc' => 'Fleet coverage for all RCS vehicles'],
              ['title' => 'Umbrella Policy',       'desc' => 'Extended liability protection'],
            ];
            foreach ($insurance as $ins) : ?>
              <div class="ins-card">
                <div style="width:8px;height:8px;border-radius:50%;background:var(--red);flex-shrink:0;margin-top:5px;"></div>
                <div>
                  <p style="font-family:'Montserrat',sans-serif;font-size:13px;font-weight:800;color:var(--ink);margin-bottom:3px;"><?php echo esc_html($ins['title']); ?></p>
                  <p style="font-size:12px;color:var(--text-muted);"><?php echo esc_html($ins['desc']); ?></p>
                </div>
              </div>
          <?php endforeach; ?>
        </div>
      </div>

      <!-- Compliance row -->
      <div style="background:var(--bg-2);border:1px solid var(--border);border-radius:14px;padding:32px;box-shadow:0 2px 8px rgba(0,0,0,.04);">
        <p style="font-size:11px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:20px;">Compliance & Procurement</p>
        <div class="grid sm:grid-cols-2 gap-3">
          <?php
            $compliance = [
              'W-9 available within 24 hours of request',
              'COI within 24 hours, naming additional insured as needed',
              'References available — 3–5 active GC partners and 2–3 developer partners',
              'Pre-qualification packages compatible with Procore, BuildingConnected, ConstructConnect',
            ];
            foreach ($compliance as $c) : ?>
              <div style="display:flex;align-items:flex-start;gap:10px;padding:10px 0;border-bottom:1px solid var(--border);">
                <svg width="16" height="16" fill="none" stroke="#CC0000" stroke-width="2" viewBox="0 0 24 24" style="flex-shrink:0;margin-top:1px;"><polyline points="20 6 9 17 4 12"/></svg>
                <span style="font-size:14px;color:var(--text-muted);"><?php echo esc_html($c); ?></span>
              </div>
          <?php endforeach; ?>
        </div>
      </div>

    </div>
  </section>


  <!-- ════════════════════════════════════════════════════════
       §6 — WHY MULTIFAMILY NEW CONSTRUCTION
  ═══════════════════════════════════════════════════════════ -->
  <section style="background:var(--bg);padding:100px 0;border-bottom:1px solid var(--border);">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-center">

        <!-- Left — stat blocks -->
        <div class="grid grid-cols-2 gap-5">
          <?php
            $why_stats = [
              ['n' => '2M+',  'l' => 'New Texas residents since 2020'],
              ['n' => '#1',   'l' => 'Fastest-growing multifamily region in the US'],
              ['n' => '30+',  'l' => 'Years specializing in this exact work'],
              ['n' => '100%', 'l' => 'Of our focus on multifamily new construction'],
            ];
            foreach ($why_stats as $ws) : ?>
              <div class="stat-box" style="text-align:left;padding:24px;">
                <div class="rcs-disp" style="font-size:40px;font-weight:900;color:var(--red);line-height:1;letter-spacing:-.02em;margin-bottom:8px;"><?php echo esc_html($ws['n']); ?></div>
                <p style="font-size:13px;color:var(--text-muted);line-height:1.45;"><?php echo esc_html($ws['l']); ?></p>
              </div>
          <?php endforeach; ?>
        </div>

        <!-- Right — copy -->
        <div>
          <div class="section-label">Why We Specialize</div>
          <h2 class="rcs-disp mb-6"
            style="font-size:clamp(28px,3.5vw,46px);font-weight:900;line-height:1.0;letter-spacing:-.03em;color:var(--ink);">
            Why we built this company<br>
            <span style="color:var(--red);">around one project type.</span>
          </h2>
          <div style="display:flex;flex-direction:column;gap:16px;">
            <p style="font-size:16px;color:var(--text-muted);line-height:1.8;">
              Multifamily new construction is the most demanding painting work in the industry. Production rates have to scale across hundreds of units without losing finish quality. Inspection cadence is relentless — fire-rated assemblies, finish standards, MEP coordination — all of it has to be coordinated with five other trades working the same building.
            </p>
            <p style="font-size:16px;color:var(--text-muted);line-height:1.8;">
              The work is harder than residential. The margins are thinner than commercial TI. The schedule is less forgiving than custom or institutional. Most painters either don't take it or take it and underperform. We chose to specialize in it precisely because that gap is where our experience matters.
            </p>
            <p style="font-size:16px;color:var(--text-muted);line-height:1.8;">
              Texas has added 2+ million new residents since 2020. Multifamily new construction is the fastest-growing segment in our region, and our growth has been built on serving that demand — one well-executed project at a time.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>


  <!-- ════════════════════════════════════════════════════════
       §7 — HISPANIC-OWNED
  ═══════════════════════════════════════════════════════════ -->
  <section style="background:var(--bg-3);padding:100px 0;border-bottom:1px solid var(--border);">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-start">

        <!-- Left -->
        <div>
          <div class="section-label">Ownership & Certification</div>
          <h2 class="rcs-disp mb-6"
            style="font-size:clamp(28px,3.5vw,46px);font-weight:900;line-height:1.0;letter-spacing:-.03em;color:var(--ink);">
            Hispanic-owned.<br>HUB-eligible.<br>
            <span style="color:var(--red);">Built for inclusion goals.</span>
          </h2>
          <div style="display:flex;flex-direction:column;gap:16px;">
            <p style="font-size:16px;color:var(--text-muted);line-height:1.8;">
              RCS Complete Painting is a Hispanic-owned business, eligible for HUB (Historically Underutilized Business) certification in Texas and qualifying for MWBE (Minority and Women-Owned Business Enterprise) inclusion goals on many public, institutional, and federally-funded projects.
            </p>
            <p style="font-size:16px;color:var(--text-muted);line-height:1.8;">
              For GCs and developers managing diversity inclusion targets on a project, RCS provides documented eligibility along with the operational scale to actually deliver on the work — not just to fill a category.
            </p>
          </div>
        </div>

        <!-- Right — documentation -->
        <div style="background:var(--bg-2);border:1px solid var(--border);border-radius:14px;padding:32px;box-shadow:0 2px 8px rgba(0,0,0,.04);">
          <p style="font-size:11px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:20px;padding-bottom:14px;border-bottom:1px solid var(--border);">Documentation Available</p>

          <?php
            $hub_docs = [
              ['title' => 'HUB Texas Certification',   'desc' => 'Certification documentation or in-process status available on request'],
              ['title' => 'DUNS #082349795',            'desc' => 'Federal contractor registration — active'],
              ['title' => 'SAM.gov Registration',       'desc' => 'Registered for federal contracts and procurement'],
              ['title' => 'MWBE Documentation',         'desc' => 'Supporting documentation for inclusion programs'],
            ];
            foreach ($hub_docs as $doc) : ?>
              <div style="display:flex;align-items:flex-start;gap:14px;padding:14px 0;border-bottom:1px solid var(--border);">
                <div style="width:36px;height:36px;border-radius:8px;background:var(--red-light);border:1px solid rgba(204,0,0,.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                  <svg width="16" height="16" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                </div>
                <div>
                  <p style="font-family:'Montserrat',sans-serif;font-size:14px;font-weight:800;color:var(--ink);margin-bottom:3px;"><?php echo esc_html($doc['title']); ?></p>
                  <p style="font-size:13px;color:var(--text-muted);"><?php echo esc_html($doc['desc']); ?></p>
                </div>
              </div>
          <?php endforeach; ?>

          <div style="margin-top:20px;padding:14px;background:var(--bg-4);border-radius:8px;display:flex;align-items:center;gap:10px;">
            <svg width="16" height="16" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            <p style="font-size:13px;color:var(--text-muted);">All documentation delivered within one business day of request.</p>
          </div>
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
        <h2 class="rcs-disp mb-6"
          style="font-size:clamp(30px,4vw,54px);font-weight:900;line-height:.96;letter-spacing:-.03em;color:var(--ink);">
          Ready to see what working<br>with RCS looks like?
          <span style="color:var(--red);"> Let's talk about a real project.</span>
        </h2>
        <p style="font-size:16px;color:var(--text-muted);line-height:1.78;margin-bottom:36px;max-width:560px;">
          The best way to evaluate a painting partner is to talk through a real project. If you have a multifamily new construction job in the pipeline — bid stage, pre-construction, or active mobilization — we'd like to hear about it.
        </p>
        <div class="flex flex-wrap gap-4">
          <a href="/contact-us" class="btn-red" style="font-size:15px;padding:16px 32px;">
            Request a project bid
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="9,18 15,12 9,6"/></svg>
          </a>
          <a href="tel:+15125513050" class="btn-ghost" style="font-size:15px;padding:16px 32px;">
            Call the owner: 512-551-3050
          </a>
          <a href="/wp-content/uploads/rcs-capabilities-statement.pdf" target="_blank" class="btn-ghost" style="font-size:15px;padding:16px 32px;">
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Capabilities Statement
          </a>
        </div>
      </div>
    </div>
  </section>

</main>

<?php get_footer(); ?>