/* ============================================================================
   HCW custom theme · About + Workshops pages
   ========================================================================== */

function AboutPage({ onNav }) {
  return (
    <main className="scheme-cream" style={{ background: 'var(--bg)' }}>
      {/* intro */}
      <section style={{ background: 'var(--bg)' }}>
        <div className="hcw-wrap" style={{ paddingBlock: 'clamp(48px,7vw,104px) clamp(36px,5vw,64px)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Eyebrow>Our story</Eyebrow>
          <h1 style={{ marginTop: '18px', fontSize: 'clamp(2.6rem,1.8rem+4vw,5rem)', maxWidth: '16ch' }}>Two friends, sewing in the high country.</h1>
          <p className="lead" style={{ marginTop: '22px', maxWidth: '52ch' }}>
            High Country Women began at a kitchen table in Lander, Wyoming — a shared love of natural fibers, old-fashioned charm, and pieces made to last.</p>
        </div>
      </section>

      {/* full-bleed studio image */}
      <div className="zoomwrap" style={{ position: 'relative', height: 'clamp(320px,52vw,640px)' }}>
        <div className="bg" style={{ position: 'absolute', inset: 0, background: `url(${IMG}DSCF2468.jpg) center 40%/cover` }} />
      </div>

      {/* story split */}
      <section className="scheme-cream sec" style={{ background: 'var(--bg)' }}>
        <div className="hcw-wrap">
          <div className="split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(28px,5vw,80px)', alignItems: 'center' }}>
            <div className="zoomwrap" style={{ position: 'relative', aspectRatio: '4/5', borderRadius: 'var(--radius-sm)' }}>
              <div className="bg" style={{ position: 'absolute', inset: 0, background: `url(${IMG}DSCF2467.jpg) center/cover` }} />
            </div>
            <div>
              <Eyebrow>Heirloom, by hand</Eyebrow>
              <h2 style={{ marginTop: '16px' }}>An homage to the women who came before</h2>
              <p style={{ marginTop: '20px', fontFamily: 'var(--font-sans)', fontSize: '15.5px', lineHeight: 1.7, color: 'var(--text-soft)' }}>
                Every pattern is named after a high country woman in Wyoming — Nellie, Esther, Lizabeth — a quiet tribute to the grandmothers and makers who taught us that the best things are well-used and passed down.</p>
              <p style={{ marginTop: '16px', fontFamily: 'var(--font-sans)', fontSize: '15.5px', lineHeight: 1.7, color: 'var(--text-soft)' }}>
                We design beginner-friendly patterns and stock the natural-fiber fabric to make them, so anyone can sew something they'll keep for years.</p>
              <div style={{ marginTop: '28px' }}><Button onClick={() => onNav('collection')} iconRight="arrow-right">Shop the patterns</Button></div>
            </div>
          </div>
        </div>
      </section>

      {/* values */}
      <section className="scheme-blue" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
        <div className="hcw-wrap sec">
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'clamp(24px,4vw,56px)' }}>
            {[['Natural fibers', 'Cottons, linens and vintage florals chosen to wear in, not out.'],
              ['Beginner friendly', 'Clear instructions and full video sewalongs for every pattern.'],
              ['Made to last', 'Durable, comfortable pieces meant to become heirlooms.']].map(([h, b], i) => (
              <div key={h}>
                <span className="indexnum" style={{ color: 'var(--accent)' }}>0{i + 1}</span>
                <hr className="stitch" style={{ marginBlock: '14px', borderColor: 'var(--text-soft)' }} />
                <h3 style={{ fontSize: 'var(--step-2)' }}>{h}</h3>
                <p style={{ marginTop: '10px', fontFamily: 'var(--font-sans)', fontSize: '14.5px', lineHeight: 1.65, color: 'var(--text-soft)' }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <NewsletterBand />
    </main>
  );
}

function WorkshopsPage({ onNav }) {
  const classes = [
    { date: 'Sat · Jun 14', name: 'Beginner Sewing 101', detail: 'Thread your machine, master a straight seam, and finish your first pillow cover.', level: 'No experience needed', price: 65 },
    { date: 'Sat · Jun 28', name: 'Make the Esther Tank', detail: 'Sew the Esther Tank start to finish in a guided half-day class.', level: 'Beginner', price: 85 },
    { date: 'Sun · Jul 13', name: 'Nellie Dress Intensive', detail: 'A full-day workshop building the Nellie button-placket bodice & tiered skirt.', level: 'Confident Beginner', price: 120 },
  ];
  return (
    <main className="scheme-cream" style={{ background: 'var(--bg)' }}>
      {/* hero */}
      <section className="zoomwrap" style={{ position: 'relative', minHeight: 'clamp(340px,52vw,620px)', display: 'flex', alignItems: 'flex-end' }}>
        <div className="bg" style={{ position: 'absolute', inset: 0, background: `url(${IMG}DSCF2467.jpg) center 45%/cover` }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(46,42,36,.1), rgba(46,42,36,.5))' }} />
        <div className="hcw-wrap" style={{ position: 'relative', zIndex: 2, paddingBottom: 'clamp(36px,5vw,64px)', color: '#FBF8F1' }}>
          <Eyebrow color="#F5EFE5">In-person · Lander, Wyoming</Eyebrow>
          <h1 style={{ color: '#FBF8F1', marginTop: '18px', fontSize: 'clamp(2.6rem,1.8rem+4vw,5rem)' }}>Workshops &amp; Classes</h1>
        </div>
      </section>

      <section className="scheme-cream sec" style={{ background: 'var(--bg)' }}>
        <div className="hcw-wrap">
          <p className="lead" style={{ maxWidth: '54ch', marginBottom: 'clamp(28px,4vw,48px)' }}>
            Small, friendly classes for beginners and upskilling sewists. Machines, fabric, and tea provided — just bring yourself.</p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {classes.map((c, i) => (
              <Reveal key={c.name} delay={i * 70}>
                <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr auto', gap: 'clamp(16px,3vw,40px)', alignItems: 'center',
                  padding: 'clamp(22px,3vw,34px) 0', borderTop: '1px solid var(--line)' }} className="ws-row">
                  <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'var(--step-1)', color: 'var(--accent)' }}>{c.date}</div>
                  <div>
                    <h3 style={{ fontSize: 'var(--step-2)' }}>{c.name}</h3>
                    <p style={{ marginTop: '8px', fontFamily: 'var(--font-sans)', fontSize: '14.5px', color: 'var(--text-soft)', maxWidth: '52ch' }}>{c.detail}</p>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--text-mute)' }}>{c.level}</span>
                  </div>
                  <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px' }}>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 600 }}>${c.price}</span>
                    <Button>Reserve a spot</Button>
                  </div>
                </div>
              </Reveal>
            ))}
            <div style={{ borderTop: '1px solid var(--line)' }} />
          </div>
        </div>
      </section>

      <section className="scheme-wheat sec" style={{ background: 'var(--bg)' }}>
        <div className="hcw-wrap" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Eyebrow>Private &amp; group sessions</Eyebrow>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem,1.1rem+2vw,2.6rem)', lineHeight: 1.2, maxWidth: '24ch', marginTop: '18px' }}>
            Gather a few friends for a private sewing afternoon.</p>
          <div style={{ marginTop: '26px' }}><Button onClick={() => onNav('about')} variant="outline">Get in touch</Button></div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { AboutPage, WorkshopsPage });
