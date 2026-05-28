<?php
/**
 * Template Name: Contact Us
 */
get_header(); ?>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">

<style>
  :root {
    --red:        #CC0000;
    --red-dark:   #A80000;
    --red-light:  #fff0f0;
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
    font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 800;
    letter-spacing: .22em; text-transform: uppercase;
    color: var(--red); margin-bottom: 20px;
  }
  .section-label::before { content: ''; display: block; width: 24px; height: 2px; background: var(--red); flex-shrink: 0; }
  .section-label.white { color: rgba(255,255,255,.85); }
  .section-label.white::before { background: rgba(255,255,255,.6); }

  /* Form elements */
  .form-section-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 10px; font-weight: 900;
    letter-spacing: .2em; text-transform: uppercase;
    color: var(--red);
    padding: 0 0 10px 0;
    border-bottom: 1px solid var(--border);
    margin-bottom: 16px;
  }
  .field-label {
    display: block; font-size: 11px; font-weight: 700;
    letter-spacing: .06em; text-transform: uppercase;
    color: var(--text-muted); margin-bottom: 5px;
  }
  .field-label .req { color: var(--red); margin-left: 2px; }

  .form-input,
  .form-select,
  .form-textarea {
    width: 100%; padding: 10px 14px;
    font-family: 'DM Sans', sans-serif; font-size: 14px;
    color: var(--ink); background: var(--bg);
    border: 1.5px solid var(--border); border-radius: 8px;
    outline: none; transition: border-color .15s, background .15s, box-shadow .15s;
    appearance: none; -webkit-appearance: none;
  }
  .form-input:focus,
  .form-select:focus,
  .form-textarea:focus {
    border-color: var(--red);
    background: #fff;
    box-shadow: 0 0 0 3px rgba(204,0,0,.08);
  }
  .form-select {
    background-image: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
    background-repeat: no-repeat; background-position: right 12px center;
    padding-right: 36px; cursor: pointer;
  }
  .form-textarea { resize: vertical; min-height: 100px; line-height: 1.6; }

  /* Checkboxes / radios */
  .check-group { display: flex; flex-wrap: wrap; gap: 8px; }
  .check-pill {
    display: flex; align-items: center; gap: 6px;
    padding: 6px 12px;
    background: var(--bg); border: 1.5px solid var(--border);
    border-radius: 50px; font-size: 13px; font-weight: 600;
    color: var(--text-muted); cursor: pointer;
    transition: all .15s; user-select: none;
  }
  .check-pill input { position: absolute; opacity: 0; pointer-events: none; }
  .check-pill:has(input:checked) {
    background: var(--red-light); border-color: var(--red); color: var(--red);
  }
  .radio-group { display: flex; gap: 10px; flex-wrap: wrap; }
  .radio-pill {
    display: flex; align-items: center; gap: 6px;
    padding: 8px 16px;
    background: var(--bg); border: 1.5px solid var(--border);
    border-radius: 50px; font-size: 13px; font-weight: 600;
    color: var(--text-muted); cursor: pointer; transition: all .15s;
  }
  .radio-pill input { position: absolute; opacity: 0; pointer-events: none; }
  .radio-pill:has(input:checked) {
    background: var(--red-light); border-color: var(--red); color: var(--red);
  }

  /* Field error */
  .field-error { font-size: 11px; color: var(--red); margin-top: 4px; display: none; }
  .has-error .form-input,
  .has-error .form-select,
  .has-error .form-textarea { border-color: var(--red); }
  .has-error .field-error { display: block; }

  /* Submit button */
  .btn-submit {
    width: 100%; padding: 15px;
    background: var(--red); color: #fff;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px; font-weight: 900;
    letter-spacing: .08em; text-transform: uppercase;
    border: none; border-radius: 50px; cursor: pointer;
    transition: background .15s, transform .1s;
    box-shadow: 0 4px 24px rgba(204,0,0,.30);
    display: flex; align-items: center; justify-content: center; gap: 8px;
  }
  .btn-submit:hover { background: var(--red-dark); }
  .btn-submit:active { transform: scale(.98); }
  .btn-submit:disabled { background: #999; cursor: not-allowed; }

  /* Response timeline table */
  .timeline-row {
    display: grid; grid-template-columns: 140px 1fr;
    border-bottom: 1px solid var(--border);
  }
  .timeline-row:last-child { border: none; }
  .timeline-when {
    padding: 12px 14px; background: var(--bg-3);
    border-right: 1px solid var(--border);
    font-family: 'Montserrat', sans-serif;
    font-size: 11px; font-weight: 800; color: var(--red);
    display: flex; align-items: center;
  }
  .timeline-what {
    padding: 12px 14px; font-size: 13px;
    color: var(--text-muted); line-height: 1.55;
  }

  /* FAQ */
  .faq-item { border-bottom: 1px solid var(--border); }
  .faq-btn {
    width: 100%; display: flex; justify-content: space-between;
    align-items: center; gap: 16px; padding: 18px 0;
    text-align: left; background: none; border: none; cursor: pointer;
    font-family: 'DM Sans', sans-serif; font-size: 15px;
    font-weight: 700; color: var(--ink); transition: color .15s;
  }
  .faq-btn:hover { color: var(--red); }
  .faq-icon {
    width: 26px; height: 26px; border-radius: 6px;
    border: 1px solid var(--border); display: flex;
    align-items: center; justify-content: center;
    flex-shrink: 0; font-size: 17px; color: var(--red);
    transition: background .15s, transform .25s;
  }
  .faq-btn[aria-expanded="true"] .faq-icon {
    background: var(--red); color: #fff; transform: rotate(45deg);
  }
  .faq-answer {
    display: none; padding-bottom: 16px;
    font-size: 14px; color: var(--text-muted); line-height: 1.75;
  }
  .faq-answer.open { display: block; }

  /* Success state */
  .form-success {
    display: none; text-align: center; padding: 48px 32px;
  }
  .form-success.active { display: block; }
  .form-body.hidden { display: none; }

  /* File upload */
  .file-upload-area {
    border: 2px dashed var(--border); border-radius: 10px;
    padding: 24px; text-align: center; cursor: pointer;
    transition: border-color .15s, background .15s;
    background: var(--bg);
  }
  .file-upload-area:hover { border-color: var(--red); background: var(--red-light); }
  .file-upload-area input[type="file"] { display: none; }
</style>

<main class="rcs-page">

  <!-- ════════════════════════════════════════════════════════
       §1 — HERO
  ═══════════════════════════════════════════════════════════ -->
  <section
    class="relative overflow-hidden"
    style="background:linear-gradient(135deg,#1A1A1A 0%,#3a0000 55%,#CC0000 130%);padding:80px 0 72px;"
  >
    <div style="position:absolute;inset:0;background-image:linear-gradient(45deg,rgba(255,255,255,0.03) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.03) 50%,rgba(255,255,255,0.03) 75%,transparent 75%);background-size:32px 32px;pointer-events:none;"></div>
    <div class="max-w-7xl mx-auto px-6">
      <div class="max-w-2xl">
        <div class="section-label white">Contact RCS</div>
        <h1 class="rcs-disp text-white mb-5"
          style="font-size:clamp(42px,5.5vw,72px);font-weight:900;line-height:.9;letter-spacing:-.03em;">
          Request a<br>project bid.
        </h1>
        <p style="font-size:16px;color:rgba(255,255,255,.72);line-height:1.78;margin-bottom:8px;max-width:520px;">
          The owner reviews every project inquiry personally and responds within one business day. For active bids with tight timelines, calling directly is the fastest path.
        </p>
        <p style="font-size:16px;color:rgba(255,255,255,.55);line-height:1.78;max-width:520px;">
          Whether you're a general contractor adding a sub to your bid list, a developer evaluating partners for a recurring pipeline, or contracting directly for a new multifamily development — we structure the conversation around your project.
        </p>
      </div>
    </div>
  </section>


  <!-- ════════════════════════════════════════════════════════
       §2 — MAIN LAYOUT: Form (left) + Info (right)
  ═══════════════════════════════════════════════════════════ -->
  <section style="background:var(--bg);padding:72px 0;border-bottom:1px solid var(--border);">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-5 gap-12 items-start">

        <!-- ── LEFT: Form (3/5) ── -->
        <div class="lg:col-span-3">
          <div style="background:var(--bg-2);border:1px solid var(--border);border-radius:16px;padding:36px;box-shadow:0 4px 24px rgba(0,0,0,.06);">

            <h2 class="rcs-disp mb-2" style="font-size:24px;font-weight:900;color:var(--ink);">Tell us about your project.</h2>
            <p style="font-size:13px;color:var(--text-muted);line-height:1.65;margin-bottom:28px;">
              All fields help us route your inquiry and prepare the most useful response. The more detail you share, the faster we can get to a meaningful conversation.
            </p>

            <!-- Success state -->
            <div class="form-success" id="formSuccess">
              <div style="width:60px;height:60px;border-radius:50%;background:var(--red-light);border:2px solid var(--red);display:flex;align-items:center;justify-content:center;margin:0 auto 16px;">
                <svg width="26" height="26" fill="none" stroke="#CC0000" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h3 class="rcs-disp" style="font-size:22px;font-weight:900;color:var(--ink);margin-bottom:10px;">Project received.</h3>
              <p style="font-size:14px;color:var(--text-muted);line-height:1.7;max-width:340px;margin:0 auto 16px;">
                The owner will review your scope personally and respond within one business day.
              </p>
              <p style="font-size:13px;color:var(--text-muted);margin-bottom:8px;">
                For active bids with tight timelines, call <a href="tel:+15125513050" style="color:var(--red);font-weight:700;">512-551-3050</a> directly.
              </p>
              <p style="font-size:12px;color:var(--text-dim);">
                You'll receive an acknowledgment from <strong>marisa@rcscomplete.com</strong>.<br>
                If you don't see it in 10 minutes, check spam.
              </p>
            </div>

            <!-- Form body -->
            <div class="form-body" id="formBody">
              <form id="contactForm" novalidate>

                <!-- ── PROJECT INFO ── -->
                <div class="form-section-title">Project Information</div>
                <div style="display:flex;flex-direction:column;gap:14px;margin-bottom:24px;">

                  <div class="field-group">
                    <label class="field-label">Project name or address <span class="req">*</span></label>
                    <input name="project_address" type="text" class="form-input" placeholder="123 Main St, Austin TX — or project name">
                    <span class="field-error">Required</span>
                  </div>

                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
                    <div class="field-group">
                      <label class="field-label">Project type <span class="req">*</span></label>
                      <select name="project_type" class="form-select">
                        <option value="">Select…</option>
                        <option>Multifamily new construction</option>
                        <option>Mid-rise</option>
                        <option>Garden-style</option>
                        <option>Senior housing</option>
                        <option>Townhomes</option>
                        <option>Mixed-use</option>
                        <option>Student housing</option>
                        <option>Build-to-rent (BTR)</option>
                        <option>Other</option>
                      </select>
                      <span class="field-error">Required</span>
                    </div>
                    <div class="field-group">
                      <label class="field-label">Unit count (approx.) <span class="req">*</span></label>
                      <input name="unit_count" type="number" class="form-input" placeholder="e.g. 240">
                      <span class="field-error">Required</span>
                    </div>
                  </div>

                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
                    <div class="field-group">
                      <label class="field-label">Project state <span class="req">*</span></label>
                      <select name="project_state" class="form-select">
                        <option value="">Select…</option>
                        <option>Texas</option>
                        <option>Oklahoma</option>
                        <option>Louisiana</option>
                        <option>Arkansas</option>
                        <option>New Mexico</option>
                        <option>Other</option>
                      </select>
                      <span class="field-error">Required</span>
                    </div>
                    <div class="field-group">
                      <label class="field-label">City / Metro <span class="req">*</span></label>
                      <input name="project_city" type="text" class="form-input" placeholder="Austin, Houston, DFW…">
                      <span class="field-error">Required</span>
                    </div>
                  </div>

                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
                    <div class="field-group">
                      <label class="field-label">Building configuration</label>
                      <select name="building_config" class="form-select">
                        <option value="">Select…</option>
                        <option>1–2 stories</option>
                        <option>3–4 stories</option>
                        <option>5–8 stories (mid-rise)</option>
                        <option>9+ stories (high-rise)</option>
                        <option>Multiple buildings</option>
                      </select>
                    </div>
                    <div class="field-group">
                      <label class="field-label">Estimated start date <span class="req">*</span></label>
                      <input name="start_date" type="date" class="form-input">
                      <span class="field-error">Required</span>
                    </div>
                  </div>

                  <div class="field-group">
                    <label class="field-label">Project phase <span class="req">*</span></label>
                    <select name="project_phase" class="form-select">
                      <option value="">Select…</option>
                      <option>Pre-bid</option>
                      <option>Active bid</option>
                      <option>Pre-construction</option>
                      <option>Mobilization</option>
                      <option>Active production</option>
                    </select>
                    <span class="field-error">Required</span>
                  </div>

                </div>

                <!-- ── SCOPE ── -->
                <div class="form-section-title">Scope</div>
                <div style="display:flex;flex-direction:column;gap:14px;margin-bottom:24px;">

                  <div class="field-group">
                    <label class="field-label">Scope needed <span class="req">*</span></label>
                    <div class="check-group" id="scopeGroup">
                      <?php foreach (['Interior painting', 'Exterior painting', 'Specialty coatings', 'Electrostatic', 'Color consulting'] as $s) : ?>
                        <label class="check-pill">
                          <input type="checkbox" name="scope[]" value="<?php echo esc_attr($s); ?>">
                          <?php echo esc_html($s); ?>
                        </label>
                      <?php endforeach; ?>
                    </div>
                    <span class="field-error" id="scopeError">Select at least one</span>
                  </div>

                  <div class="field-group">
                    <label class="field-label">Substrate complexity</label>
                    <div class="check-group">
                      <?php foreach (['Standard drywall', 'Level 5', 'Stucco', 'Fiber cement', 'EIFS', 'Metal', 'Specialty', 'Not sure'] as $s) : ?>
                        <label class="check-pill">
                          <input type="checkbox" name="substrate[]" value="<?php echo esc_attr($s); ?>">
                          <?php echo esc_html($s); ?>
                        </label>
                      <?php endforeach; ?>
                    </div>
                  </div>

                </div>

                <!-- ── CONTACT INFO ── -->
                <div class="form-section-title">Contact Information</div>
                <div style="display:flex;flex-direction:column;gap:14px;margin-bottom:24px;">

                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
                    <div class="field-group">
                      <label class="field-label">Your role <span class="req">*</span></label>
                      <select name="role" class="form-select">
                        <option value="">Select…</option>
                        <option>General Contractor</option>
                        <option>Developer</option>
                        <option>Owner</option>
                        <option>Project Manager</option>
                        <option>Architect</option>
                        <option>Other</option>
                      </select>
                      <span class="field-error">Required</span>
                    </div>
                    <div class="field-group">
                      <label class="field-label">Company <span class="req">*</span></label>
                      <input name="company" type="text" class="form-input" placeholder="Company name">
                      <span class="field-error">Required</span>
                    </div>
                  </div>

                  <div class="field-group">
                    <label class="field-label">Your name <span class="req">*</span></label>
                    <input name="contact_name" type="text" class="form-input" placeholder="First and last name">
                    <span class="field-error">Required</span>
                  </div>

                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
                    <div class="field-group">
                      <label class="field-label">Email <span class="req">*</span></label>
                      <input name="email" type="email" class="form-input" placeholder="you@company.com">
                      <span class="field-error">Valid email required</span>
                    </div>
                    <div class="field-group">
                      <label class="field-label">Phone</label>
                      <input name="phone" type="tel" class="form-input" placeholder="(512) 000-0000">
                    </div>
                  </div>

                  <div class="field-group">
                    <label class="field-label">Best way to reach you</label>
                    <div class="radio-group">
                      <?php foreach (['Email', 'Phone', 'Either'] as $r) : ?>
                        <label class="radio-pill">
                          <input type="radio" name="contact_pref" value="<?php echo esc_attr($r); ?>">
                          <?php echo esc_html($r); ?>
                        </label>
                      <?php endforeach; ?>
                    </div>
                  </div>

                </div>

                <!-- ── DOCUMENTS ── -->
                <div class="form-section-title">Documents & Notes</div>
                <div style="display:flex;flex-direction:column;gap:14px;margin-bottom:28px;">

                  <div class="field-group">
                    <label class="field-label">Project documents</label>
                    <label class="file-upload-area" for="projectFiles">
                      <input type="file" id="projectFiles" name="project_files[]" multiple accept=".pdf,.dwg,.doc,.docx,.xls,.xlsx">
                      <svg width="24" height="24" fill="none" stroke="rgba(0,0,0,.3)" stroke-width="1.75" viewBox="0 0 24 24" style="margin:0 auto 8px;display:block;"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                      <p style="font-size:13px;font-weight:600;color:var(--text-muted);margin-bottom:3px;">Upload drawings, specs, or plans</p>
                      <p style="font-size:11px;color:var(--text-dim);">PDF, DWG, DOC, XLS — max 50MB total · multiple files supported</p>
                    </label>
                    <p id="fileList" style="font-size:12px;color:var(--text-muted);margin-top:6px;"></p>
                  </div>

                  <div class="field-group">
                    <label class="field-label">Additional notes / context</label>
                    <textarea name="notes" class="form-textarea" placeholder="Tell us anything else relevant — schedule pressure, special requirements, prior conversations with us, etc."></textarea>
                  </div>

                  <div class="field-group">
                    <label class="field-label">How did you hear about RCS?</label>
                    <select name="referral_source" class="form-select">
                      <option value="">Select…</option>
                      <option>Referral from a GC</option>
                      <option>Referral from a developer</option>
                      <option>Google search</option>
                      <option>Procore Network</option>
                      <option>LinkedIn</option>
                      <option>Other</option>
                    </select>
                  </div>

                </div>

                <!-- Submit -->
                <button type="submit" class="btn-submit" id="submitBtn">
                  Send project details
                  <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="9,18 15,12 9,6"/></svg>
                </button>
                <p style="font-size:12px;color:var(--text-dim);text-align:center;margin-top:10px;line-height:1.5;">
                  By submitting, you'll receive an acknowledgment email within minutes and a substantive response from the owner within one business day.
                </p>
                <p id="formError" style="font-size:12px;color:var(--red);text-align:center;margin-top:8px;display:none;">
                  Something went wrong. Call us directly: <a href="tel:+15125513050" style="color:var(--red);">512-551-3050</a>
                </p>

              </form>
            </div><!-- /form-body -->
          </div>
        </div>

        <!-- ── RIGHT: Info panel (2/5) ── -->
        <div class="lg:col-span-2 flex flex-col gap-6" style="position:sticky;top:120px;">

          <!-- Direct contact -->
          <div style="background:var(--bg-2);border:1px solid var(--border);border-radius:14px;padding:28px;box-shadow:0 2px 8px rgba(0,0,0,.05);">
            <h3 class="rcs-disp" style="font-size:16px;font-weight:900;color:var(--ink);margin-bottom:5px;">Reach us directly.</h3>
            <p style="font-size:13px;color:var(--text-muted);margin-bottom:18px;line-height:1.6;">For time-sensitive bids or follow-ups on existing project conversations, direct contact is fastest.</p>
            <div style="display:flex;flex-direction:column;gap:12px;">
              <a href="tel:+15125513050" style="display:flex;align-items:center;gap:12px;text-decoration:none;padding:12px 14px;background:var(--bg);border:1px solid var(--border);border-radius:9px;transition:border-color .15s;" onmouseover="this.style.borderColor='var(--red)'" onmouseout="this.style.borderColor='var(--border)'">
                <div style="width:32px;height:32px;background:var(--red-light);border:1px solid rgba(204,0,0,.2);border-radius:7px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                  <svg width="14" height="14" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82 19.8 19.8 0 01.99 2.2 2 2 0 013 0h3a2 2 0 012 1.72l.38 2.66a2 2 0 01-.58 1.72l-1.2 1.2a16 16 0 006 6l1.2-1.2a2 2 0 011.72-.58l2.66.38A2 2 0 0122 16.92z"/></svg>
                </div>
                <div>
                  <p style="font-family:'Montserrat',sans-serif;font-size:13px;font-weight:800;color:var(--ink);">512-551-3050</p>
                  <p style="font-size:11px;color:var(--text-muted);">Mon–Fri 7AM–6PM CT</p>
                </div>
              </a>
              <a href="mailto:marisa@rcscomplete.com" style="display:flex;align-items:center;gap:12px;text-decoration:none;padding:12px 14px;background:var(--bg);border:1px solid var(--border);border-radius:9px;transition:border-color .15s;" onmouseover="this.style.borderColor='var(--red)'" onmouseout="this.style.borderColor='var(--border)'">
                <div style="width:32px;height:32px;background:var(--red-light);border:1px solid rgba(204,0,0,.2);border-radius:7px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                  <svg width="14" height="14" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>
                </div>
                <div>
                  <p style="font-family:'Montserrat',sans-serif;font-size:13px;font-weight:800;color:var(--ink);">marisa@rcscomplete.com</p>
                  <p style="font-size:11px;color:var(--text-muted);">Monitored during business hours</p>
                </div>
              </a>
              <div style="display:flex;align-items:flex-start;gap:12px;padding:12px 14px;background:var(--bg);border:1px solid var(--border);border-radius:9px;">
                <div style="width:32px;height:32px;background:var(--red-light);border:1px solid rgba(204,0,0,.2);border-radius:7px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                  <svg width="14" height="14" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <p style="font-family:'Montserrat',sans-serif;font-size:13px;font-weight:800;color:var(--ink);">912 Bastrop Hwy S, Ste 205</p>
                  <p style="font-size:11px;color:var(--text-muted);">Austin, Texas 78741 · By appointment</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Response timeline -->
          <div style="background:var(--bg-2);border:1px solid var(--border);border-radius:14px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.05);">
            <div style="padding:18px 20px;border-bottom:1px solid var(--border);">
              <h3 class="rcs-disp" style="font-size:15px;font-weight:900;color:var(--ink);">What happens after you submit.</h3>
            </div>
            <?php
              $timeline = [
                ['when' => 'Within minutes',       'what' => 'Acknowledgment email with your case number for reference.'],
                ['when' => 'Within 1 business day','what' => 'Personal response from the owner or a senior PM — direct email or callback.'],
                ['when' => 'Within 72 hours',      'what' => 'On-site walk scheduled for projects in our active service area.'],
                ['when' => 'Within 5 days',        'what' => 'Detailed bid with line-item scope, schedule, and manpower plan.'],
              ];
              foreach ($timeline as $t) : ?>
                <div class="timeline-row">
                  <div class="timeline-when"><?php echo esc_html($t['when']); ?></div>
                  <div class="timeline-what"><?php echo esc_html($t['what']); ?></div>
                </div>
            <?php endforeach; ?>
          </div>

          <!-- RFP guide -->
          <div style="background:var(--bg-2);border:1px solid var(--border);border-radius:14px;padding:24px;box-shadow:0 2px 8px rgba(0,0,0,.05);">
            <h3 class="rcs-disp" style="font-size:15px;font-weight:900;color:var(--ink);margin-bottom:5px;">Help us help you faster.</h3>
            <p style="font-size:13px;color:var(--text-muted);margin-bottom:14px;line-height:1.6;">The most useful initial inquiries include:</p>
            <?php
              $rfp = [
                'Project name, address, and unit count',
                'Architectural drawings (exterior elevations + typical unit plan)',
                'Finish schedule / painting spec section if available',
                'Master schedule or anticipated start/completion dates',
                'Identification of the GC and key stakeholders',
                'Any specific coating requirements beyond standard multifamily',
                'Inclusion goals (HUB/MWBE) if applicable',
              ];
              foreach ($rfp as $r) : ?>
                <div style="display:flex;align-items:flex-start;gap:8px;padding:7px 0;border-bottom:1px solid var(--border);">
                  <svg width="12" height="12" fill="none" stroke="#CC0000" stroke-width="2.5" viewBox="0 0 24 24" style="flex-shrink:0;margin-top:3px;"><polyline points="20 6 9 17 4 12"/></svg>
                  <span style="font-size:13px;color:var(--text-muted);"><?php echo esc_html($r); ?></span>
                </div>
            <?php endforeach; ?>
          </div>

          <!-- Active bid callout -->
          <div style="background:linear-gradient(135deg,#1A1A1A 0%,#3a0000 55%,#CC0000 130%);border-radius:14px;padding:22px;">
            <p style="font-family:'Montserrat',sans-serif;font-size:12px;font-weight:900;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.5);margin-bottom:8px;">Active bid on a tight timeline?</p>
            <p style="font-family:'Montserrat',sans-serif;font-size:18px;font-weight:900;color:#fff;margin-bottom:6px;line-height:1.2;">Bidding tomorrow?<br><span style="color:rgba(255,255,255,.55);">Call us.</span></p>
            <p style="font-size:13px;color:rgba(255,255,255,.55);line-height:1.55;margin-bottom:14px;">If your project is in active bid stage with a deadline inside a week, the phone is faster than the form.</p>
            <a href="tel:+15125513050" style="display:inline-flex;align-items:center;gap:8px;padding:10px 20px;background:#fff;color:var(--red);font-family:'Montserrat',sans-serif;font-size:13px;font-weight:900;border-radius:50px;text-decoration:none;transition:background .15s;" onmouseover="this.style.background='#fff0f0'" onmouseout="this.style.background='#fff'">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82 19.8 19.8 0 01.99 2.2 2 2 0 013 0h3a2 2 0 012 1.72l.38 2.66a2 2 0 01-.58 1.72l-1.2 1.2a16 16 0 006 6l1.2-1.2a2 2 0 011.72-.58l2.66.38A2 2 0 0122 16.92z"/></svg>
              Call 512-551-3050
            </a>
          </div>

        </div>
      </div>
    </div>
  </section>


  <!-- ════════════════════════════════════════════════════════
       §3 — MAP & OFFICE
  ═══════════════════════════════════════════════════════════ -->
  <section style="background:var(--bg-3);padding:80px 0;border-bottom:1px solid var(--border);">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-12 items-start">

        <div>
          <div class="section-label">Our Office</div>
          <h2 class="rcs-disp mb-4"
            style="font-size:clamp(26px,3vw,40px);font-weight:900;line-height:1.0;letter-spacing:-.03em;color:var(--ink);">
            Headquarters in<br>
            <span style="color:var(--red);">southeast Austin.</span>
          </h2>
          <p style="font-size:15px;color:var(--text-muted);line-height:1.75;margin-bottom:20px;">
            Our headquarters is in southeast Austin at 912 Bastrop Hwy S, Ste 205. Office visits welcome by appointment — we work primarily on jobsites, so calling ahead ensures someone is available to meet you in person.
          </p>
          <div style="display:flex;flex-direction:column;gap:10px;">
            <?php
              $info = [
                ['icon' => '<svg width="15" height="15" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>', 'label' => '912 Bastrop Hwy S, Ste 205, Austin, TX 78741'],
                ['icon' => '<svg width="15" height="15" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>', 'label' => 'Monday–Friday 7:00 AM – 6:00 PM CT'],
                ['icon' => '<svg width="15" height="15" fill="none" stroke="#CC0000" stroke-width="1.75" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82 19.8 19.8 0 01.99 2.2 2 2 0 013 0h3a2 2 0 012 1.72l.38 2.66a2 2 0 01-.58 1.72l-1.2 1.2a16 16 0 006 6l1.2-1.2a2 2 0 011.72-.58l2.66.38A2 2 0 0122 16.92z"/></svg>', 'label' => 'Active project response available outside hours via phone'],
              ];
              foreach ($info as $i) : ?>
                <div style="display:flex;align-items:flex-start;gap:10px;">
                  <?php echo $i['icon']; ?>
                  <span style="font-size:14px;color:var(--text-muted);"><?php echo esc_html($i['label']); ?></span>
                </div>
            <?php endforeach; ?>
          </div>
        </div>

        <!-- Map embed -->
        <div style="border-radius:14px;overflow:hidden;border:1px solid var(--border);box-shadow:0 2px 12px rgba(0,0,0,.07);">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.7957!2d-97.6841226!3d30.2293081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644bb0df1290d77%3A0x4968a1633c456fd0!2sRCS%20Complete%20Painting%20LLC!5e0!3m2!1sen!2sus!4v1"
            width="100%" height="340"
            style="border:0;display:block;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="RCS Complete Painting Office Location">
          </iframe>
        </div>

      </div>
    </div>
  </section>


  <!-- ════════════════════════════════════════════════════════
       §4 — FAQ
  ═══════════════════════════════════════════════════════════ -->
  <section style="background:var(--bg);padding:100px 0;">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-3 gap-16">

        <div>
          <div class="section-label">FAQ</div>
          <h2 class="rcs-disp mb-4"
            style="font-size:clamp(26px,3vw,40px);font-weight:900;line-height:1.0;letter-spacing:-.03em;color:var(--ink);">
            Common questions<br>
            <span style="color:var(--red);">about contacting us.</span>
          </h2>
        </div>

        <div class="lg:col-span-2">
          <?php
            $faqs = [
              [
                'q' => 'Do you bid on projects outside Texas, Oklahoma, Louisiana, Arkansas, and New Mexico?',
                'a' => 'Our core service area is Texas and the four neighboring states. For projects outside that footprint, we evaluate case-by-case based on scope, schedule, and crew availability. Reach out — we\'ll give you an honest answer about whether we\'re a fit.',
              ],
              [
                'q' => 'Can I share project documents without uploading them through the form?',
                'a' => 'Yes. Email project documents directly to marisa@rcscomplete.com — reference your project name or address in the subject line. We monitor that inbox during business hours and confirm receipt within hours.',
              ],
              [
                'q' => 'Is there a minimum project size to engage RCS?',
                'a' => 'We evaluate every multifamily new construction opportunity in our service area. There is no formal unit-count minimum — what matters is whether the project type aligns with our discipline. A 24-unit boutique mid-rise can be a strong fit; an 800-unit garden-style is also a strong fit.',
              ],
              [
                'q' => 'Are you available for emergency mobilization on a stalled project?',
                'a' => 'We occasionally take on "painter replacement" engagements when an active project loses its painting subcontractor mid-construction. These require careful evaluation of existing scope and warranty considerations. Call directly if this applies — these conversations move faster by phone than by form.',
              ],
              [
                'q' => 'Will my project information be kept confidential?',
                'a' => 'Yes. Project documents and details submitted through this form are reviewed only by RCS leadership and the PMs assigned to evaluating your inquiry. We do not share project information externally. NDA arrangements available on request for sensitive pre-construction situations.',
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

</main>

<script>
// ── File list display ──────────────────────────────────────────────────────
document.getElementById('projectFiles').addEventListener('change', function() {
  var list = document.getElementById('fileList');
  var names = Array.from(this.files).map(function(f) { return f.name; });
  list.textContent = names.length ? names.join(', ') : '';
});

// ── Form validation & EmailJS submit ──────────────────────────────────────
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var valid = true;

  // Required field groups
  var requiredFields = [
    'project_address', 'project_type', 'unit_count',
    'project_state', 'project_city', 'start_date',
    'project_phase', 'role', 'company', 'contact_name', 'email'
  ];

  requiredFields.forEach(function(name) {
    var el = document.querySelector('[name="' + name + '"]');
    if (!el) return;
    var group = el.closest('.field-group');
    if (!el.value.trim()) {
      if (group) group.classList.add('has-error');
      valid = false;
    } else {
      if (group) group.classList.remove('has-error');
    }
  });

  // Email format
  var emailEl = document.querySelector('[name="email"]');
  if (emailEl && emailEl.value && !/\S+@\S+\.\S+/.test(emailEl.value)) {
    emailEl.closest('.field-group').classList.add('has-error');
    valid = false;
  }

  // Scope checkboxes
  var scopeChecked = document.querySelectorAll('[name="scope[]"]:checked');
  if (scopeChecked.length === 0) {
    document.getElementById('scopeGroup').classList.add('has-error');
    document.getElementById('scopeError').style.display = 'block';
    valid = false;
  } else {
    document.getElementById('scopeGroup').classList.remove('has-error');
    document.getElementById('scopeError').style.display = 'none';
  }

  if (!valid) return;

  // Build template params
  var form = e.target;
  var scope      = Array.from(document.querySelectorAll('[name="scope[]"]:checked')).map(function(c){return c.value;}).join(', ');
  var substrate  = Array.from(document.querySelectorAll('[name="substrate[]"]:checked')).map(function(c){return c.value;}).join(', ');
  var contactPref = (document.querySelector('[name="contact_pref"]:checked') || {}).value || '—';

  var params = {
    project_address:   form.project_address.value,
    project_type:      form.project_type.value,
    unit_count:        form.unit_count.value,
    project_state:     form.project_state.value,
    project_city:      form.project_city.value,
    building_config:   form.building_config.value || '—',
    start_date:        form.start_date.value,
    project_phase:     form.project_phase.value,
    scope:             scope,
    substrate:         substrate || '—',
    role:              form.role.value,
    company:           form.company.value,
    contact_name:      form.contact_name.value,
    email:             form.email.value,
    phone:             form.phone.value || '—',
    contact_pref:      contactPref,
    notes:             form.notes.value || '—',
    referral_source:   form.referral_source.value || '—',
  };

  var btn = document.getElementById('submitBtn');
  btn.disabled = true;
  btn.textContent = 'Sending…';

  // EmailJS — fill in your IDs
  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', params, 'YOUR_PUBLIC_KEY')
    .then(function() {
      document.getElementById('formBody').classList.add('hidden');
      document.getElementById('formSuccess').classList.add('active');
    })
    .catch(function() {
      btn.disabled = false;
      btn.innerHTML = 'Send project details <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="9,18 15,12 9,6"/></svg>';
      document.getElementById('formError').style.display = 'block';
    });
});

// ── FAQ toggle ─────────────────────────────────────────────────────────────
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