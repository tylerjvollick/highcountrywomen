/* ============================================================================
   HCW custom theme · About + Workshops pages
   ========================================================================== */

function AboutPage({ onNav }) {
  const story = [
    'Our story started in a small mountain town in Wyoming. In 2024, Tobey helped Katie plan her wedding after celebrating her own the year before — planning DIY weddings in rural Wyoming is not for the faint of heart! Our friendship took off, and before long we were planning regular sewing dates and dreaming up all the things we wanted to make.',
    'At the time, we were both searching for what was next. Katie had recently been laid off, and Tobey was feeling stuck after spending several years trying to build a business that wasn\u2019t quite the right fit. We found ourselves dreaming about new possibilities — Katie dreamed of designing sewing patterns, and Tobey dreamed of opening a fabric shop.',
    'One December evening during a quilt-coat sewing date, a lightbulb went off and we thought \u2014 \u201cwhat if we started something together?\u201d High Country Women was born a month later, in January of 2025. We also both found out we were pregnant with our first babies \u2014 at the same time.',
    'In June 2025, we launched our first sewing pattern. In August, we launched our second. In September, our babies arrived just seven days apart.',
    'Today, High Country Women has grown to include five sewing patterns, a small collection of fabrics, and our first in-person sewing workshop in the works. What began as two friends sewing together has become a business built around creativity, community, and a shared love of making things by hand.',
    'We\u2019re excited to see where this journey takes us, and we\u2019re grateful you\u2019ve chosen to be part of it.',
  ];
  const milestones = [
    { date: '2021', caption: 'Katie and Tobey meet for the first time on the Lander bar patio.', photo: 'DSCF2468.jpg', focus: '40%', size: 'landscape', offset: 0.18 },
    { date: '2024', caption: 'Tobey coordinates Katie\u2019s wedding, and the two bond over a shared love of sewing.', photo: 'DSCF2467.jpg', focus: '45%', size: 'portrait', offset: 0.62 },
    { date: 'December 2024', caption: 'A lightbulb moment during a quilt-coat sewing date \u2014 \u201cwhat if we started something together?\u201d', size: 'square', offset: 0.28 },
    { date: 'January 2025', caption: 'High Country Women is founded \u2014 and we both find out we\u2019re expecting our first babies.', photo: 'DSCF2423.jpg', focus: 'center', size: 'tall', offset: 0.55 },
    { date: 'June 2025', caption: 'Our very first sewing pattern launches into the world.', photo: 'DSCF0938.jpg', focus: '22%', size: 'square', offset: 0.12 },
    { date: 'August 2025', caption: 'Our second sewing pattern joins the collection.', size: 'portrait', offset: 0.5 },
    { date: 'September 2025', caption: 'Our babies arrive, just seven days apart.', photo: 'DSCF1546.jpg', focus: '80%', size: 'landscape', offset: 0.34 },
    { date: 'Today', caption: 'Five patterns, a growing fabric collection, and our first in-person workshop in the works.', photo: 'DSCF2426.jpg', focus: 'center', size: 'wide', offset: 0.6 },
  ];

  return (
    <main className="scheme-cream" style={{ background: 'var(--bg)' }}>
      {/* intro — text beside founders photo */}
      <section style={{ background: 'var(--bg)' }}>
        <div className="hcw-wrap" style={{ paddingBlock: 'clamp(48px,7vw,104px) clamp(16px,2vw,32px)' }}>
          <div className="split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(28px,5vw,72px)', alignItems: 'center' }}>
            <div>
              <Eyebrow>Our story</Eyebrow>
              <h1 style={{ marginTop: '18px', fontSize: 'clamp(2.4rem,1.6rem+3vw,4rem)', maxWidth: '14ch' }}>Two friends, sewing in the high country.</h1>
              <p className="lead" style={{ marginTop: '22px', maxWidth: '42ch' }}>
                We’re Katie and Tobey — friends, neighbors, sewists, and the women behind High Country Women.</p>
            </div>
            <figure style={{ margin: 0 }}>
              <image-slot
                id="founders"
                shape="rounded"
                radius="3"
                placeholder="Drop a landscape photo of Katie & Tobey"
                style={{ display: 'block', width: '100%', height: 'clamp(260px,32vw,420px)', border: '1px solid var(--hcw-line)', boxShadow: 'var(--shadow-sm)' }}
              ></image-slot>
              <figcaption style={{ marginTop: '12px', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '14px', color: 'var(--text-mute)' }}>
                Katie &amp; Tobey — Lander, Wyoming</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* the letter */}
      <section className="scheme-cream sec" style={{ background: 'var(--bg)', paddingTop: 'clamp(12px,2vw,28px)' }}>
        <div className="hcw-wrap" style={{ maxWidth: '720px' }}>
          <p className="lead" style={{ fontSize: 'var(--step-2)', color: 'var(--text)' }}>Hi there,</p>
          {story.map((para, i) => (
            <p key={i} style={{ marginTop: i === 0 ? '20px' : '18px', fontFamily: 'var(--font-sans)', fontSize: '16.5px', lineHeight: 1.78, color: 'var(--text-soft)', textWrap: 'pretty' }}>{para}</p>
          ))}
          <div style={{ marginTop: '34px' }}>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', color: 'var(--text-soft)' }}>xoxo,</span>
            <div style={{ fontFamily: 'var(--font-script)', color: 'var(--accent)', fontSize: 'clamp(2.4rem,1.8rem+2.4vw,3.6rem)', lineHeight: 1, marginTop: '4px' }}>Katie &amp; Tobey</div>
          </div>
        </div>
      </section>

      {/* horizontal timeline */}
      <Timeline events={milestones} eyebrow="A little history" title="How High Country Women came to be" />

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
