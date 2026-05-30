/* ============================================================================
   HCW custom theme · Home page sections + Hero variations
   ========================================================================== */

/* Scroll-reveal wrapper */
function Reveal({ children, delay = 0, style, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return <div ref={ref} className={'reveal ' + className} style={{ transitionDelay: delay + 'ms', ...style }}>{children}</div>;
}

/* ---- HERO (3 variants) --------------------------------------------------- */
function Hero({ onNav, variant = 'split' }) {
  const TAG = 'sewing patterns and fabric for heirloom pieces.';

  if (variant === 'overlay') {
    return (
      <section className="zoomwrap" style={{ position: 'relative', minHeight: 'min(88vh, 820px)', display: 'flex',
        alignItems: 'flex-end', justifyContent: 'center', textAlign: 'center' }}>
        <div className="bg" style={{ position: 'absolute', inset: 0, background: `url(${IMG}DSCF1659.jpg) center 22%/cover` }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(46,42,36,.30) 0%, rgba(46,42,36,.05) 32%, rgba(46,42,36,.42) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, padding: '0 24px clamp(48px,8vh,96px)', display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '900px' }}>
          <Eyebrow color="#F5EFE5">High Country Women · Wyoming</Eyebrow>
          <h1 style={{ color: '#FBF8F1', marginTop: '22px', fontSize: 'clamp(2.4rem,1.4rem+3.8vw,4.6rem)', lineHeight: 1.04, textShadow: '0 2px 30px rgba(40,30,20,.4)' }}>
            sewing patterns &amp; fabric for <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>heirloom</em> pieces.</h1>
          <div style={{ marginTop: '34px', display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button onClick={() => onNav('collection')}>Shop patterns</Button>
            <Button variant="outline" onClick={() => onNav('fabric')} style={{ color: '#FBF8F1' }}>Shop fabric</Button>
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'overlay-left') {
    return (
      <section className="zoomwrap" style={{ position: 'relative', minHeight: 'min(92vh, 880px)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <div className="bg" style={{ position: 'absolute', inset: 0, background: `url(${IMG}DSCF1659.jpg) center 20%/cover` }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(46,42,36,.62) 0%, rgba(46,42,36,.32) 42%, rgba(46,42,36,.08) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(46,42,36,.5) 0%, transparent 30%)' }} />
        {/* vertical side label */}
        <div className="only-desktop" style={{ position: 'absolute', right: '20px', top: 0, bottom: 0, display: 'flex', alignItems: 'center', zIndex: 2 }}>
          <span style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontFamily: 'var(--font-sans)', fontSize: '11px',
            fontWeight: 600, letterSpacing: '.24em', textTransform: 'uppercase', color: 'rgba(245,239,229,.78)' }}>Est. in the High Country · Wyoming</span>
        </div>
        {/* content */}
        <div style={{ position: 'relative', zIndex: 2, width: '100%', paddingInline: 'clamp(20px,5vw,72px)', paddingTop: 'clamp(120px,18vh,200px)', paddingBottom: 'clamp(36px,5vw,56px)' }}>
          <div style={{ maxWidth: '660px', color: '#FBF8F1' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '11px', fontFamily: 'var(--font-sans)', fontSize: 'var(--step--1)',
              fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '999px', background: 'var(--hcw-red-bright)' }} />Patterns · Fabric · Workshops</div>
            <h1 style={{ color: '#FBF8F1', marginTop: '22px', fontSize: 'clamp(2.7rem,1.6rem+4.4vw,5.2rem)', lineHeight: .98, textShadow: '0 2px 30px rgba(40,30,20,.4)' }}>
              sewing patterns &amp; fabric<br />for <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>heirloom</em> pieces.</h1>
            <p style={{ marginTop: '24px', fontFamily: 'var(--font-sans)', fontSize: 'clamp(1rem,.95rem+.3vw,1.2rem)', lineHeight: 1.6, color: 'rgba(251,248,241,.92)', maxWidth: '40ch' }}>
              Beginner-friendly PDF patterns and natural-fiber fabric — everything you need to make pieces worth keeping.</p>
            <div style={{ marginTop: '34px', display: 'flex', gap: '26px', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button onClick={() => onNav('collection')}>Shop patterns</Button>
              <Button variant="outline" onClick={() => onNav('fabric')} style={{ color: '#FBF8F1' }}>Shop fabric</Button>
            </div>
          </div>
        </div>
        {/* bottom utility bar */}
        <div style={{ position: 'relative', zIndex: 2, borderTop: '1px solid rgba(245,239,229,.24)' }}>
          <div style={{ width: '100%', paddingInline: 'clamp(20px,5vw,72px)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBlock: '16px',
            fontFamily: 'var(--font-sans)', fontSize: '11.5px', fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(251,248,241,.84)' }}>
            <span>Free pillow pattern with every order</span>
            <div className="only-desktop" style={{ display: 'flex', gap: '32px' }}>
              <a className="ulink" onClick={() => onNav('fabric')} style={{ cursor: 'pointer' }}>Fabric</a>
              <a className="ulink" onClick={() => onNav('collection')} style={{ cursor: 'pointer' }}>Sewing Patterns</a>
              <a className="ulink" onClick={() => onNav('workshops')} style={{ cursor: 'pointer' }}>Workshops</a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'card') {
    return (
      <section className="scheme-cream" style={{ background: 'var(--bg)', paddingBlock: 'clamp(24px,3.5vw,56px)' }}>
        <div className="hcw-wrap">
          <div className="hero-cardleft">
            {/* portrait image, right */}
            <div className="hcl-img zoomwrap" style={{ position: 'relative', borderRadius: 'var(--radius-sm)' }}>
              <div className="bg" style={{ height: 'clamp(552px,83vh,782px)', background: `url(${IMG}DSCF1659.jpg) center 16%/cover` }} />
              <span style={{ position: 'absolute', top: 'clamp(16px,1.6vw,24px)', right: 'clamp(16px,1.6vw,24px)', background: 'var(--hcw-sage)',
                color: '#FBF8F1', fontFamily: 'var(--font-sans)', fontSize: '11.5px', fontWeight: 600, letterSpacing: '.18em',
                textTransform: 'uppercase', padding: '8px 14px' }}>Heirloom Pieces · No. 01</span>
            </div>
            {/* content card, overlapping the image's left edge */}
            <div className="hcl-card" style={{ background: 'var(--hcw-paper)', border: '1px solid var(--hcw-line)', boxShadow: 'var(--shadow-md)',
              padding: 'clamp(22px,2vw,32px)' }}>
              <h1 style={{ margin: 0, fontSize: 'clamp(2.8rem, 2.3rem + 1.8vw, 4rem)', lineHeight: 1.08 }}>
                sewing patterns &amp; fabric for <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>heirloom</em> pieces.</h1>
              <hr style={{ border: 'none', borderTop: '2px solid var(--accent)', width: '40px', margin: '14px 0' }} />
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(.88rem, .85rem + .12vw, .98rem)', color: 'var(--text-soft)', maxWidth: '30ch', margin: 0 }}>
                Everything you need to make pieces worth keeping.</p>
              <div style={{ marginTop: '20px', display: 'inline-flex', alignItems: 'center', gap: '11px', fontFamily: 'var(--font-sans)', fontSize: 'var(--step--1)',
                fontWeight: 600, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--text-soft)' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '999px', background: 'var(--accent)' }} />
                <a className="ulink" onClick={() => onNav('collection')} style={{ cursor: 'pointer' }}>Patterns</a>
                <span style={{ color: 'var(--hcw-line)' }}>·</span>
                <a className="ulink" onClick={() => onNav('fabric')} style={{ cursor: 'pointer' }}>Fabric</a>
                <span style={{ color: 'var(--hcw-line)' }}>·</span>
                <a className="ulink" onClick={() => onNav('workshops')} style={{ cursor: 'pointer' }}>Workshops</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* default: editorial split */
  return (
    <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 'min(86vh, 800px)' }} className="split scheme-cream">
      <div style={{ background: 'var(--bg)', display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: 'clamp(40px,6vw,96px) clamp(24px,5vw,80px)' }}>
        <Eyebrow>High Country Women · Wyoming</Eyebrow>
        <h1 style={{ marginTop: '26px', fontSize: 'clamp(2.5rem,1.5rem+4vw,4.8rem)', lineHeight: 1.02 }}>
          sewing patterns and fabric for <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--accent)' }}>heirloom</span> pieces.</h1>
        <p className="lead" style={{ marginTop: '26px', maxWidth: '40ch' }}>
          Designed by two friends in the high country — durable natural fibers, meant to be made and remade for years.</p>
        <div style={{ marginTop: '34px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <Button onClick={() => onNav('collection')}>Shop patterns</Button>
          <Button variant="outline" onClick={() => onNav('fabric')}>Shop fabric</Button>
        </div>
      </div>
      <div className="zoomwrap" style={{ position: 'relative', minHeight: '420px' }}>
        <div className="bg" style={{ position: 'absolute', inset: 0, background: `url(${IMG}DSCF1659.jpg) center 24%/cover` }} />
      </div>
    </section>
  );
}

/* ---- COLLECTION TILES (editorial, numbered) ------------------------------ */
function CollectionTiles({ onNav }) {
  const tiles = [
    { label: 'Fabric', sub: 'Natural-fiber florals & linens', photo: IMG + 'DSCF2423.jpg', pos: 'center', go: 'fabric' },
    { label: 'Sewing Patterns', sub: 'Beginner-friendly PDF patterns', photo: IMG + 'DSCF0938.jpg', pos: 'center 22%', go: 'collection' },
    { label: 'Workshops', sub: 'In-person classes in Lander', photo: IMG + 'DSCF2467.jpg', pos: 'center 60%', go: 'workshops' },
  ];
  return (
    <section className="scheme-cream sec--tight" style={{ background: 'var(--bg)' }}>
      <div className="hcw-wrap">
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'clamp(16px,2vw,26px)' }}>
          {tiles.map((t, i) => (
            <Reveal key={t.label} delay={i * 90}>
              <div onClick={() => onNav(t.go)} className="zoomwrap" style={{ position: 'relative', aspectRatio: '3/4', cursor: 'pointer', borderRadius: 'var(--radius-sm)' }}>
                <div className="bg" style={{ position: 'absolute', inset: 0, background: `url(${t.photo}) ${t.pos}/cover` }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(46,42,36,.04), rgba(46,42,36,.52))' }} />
                <div style={{ position: 'absolute', inset: 0, padding: 'clamp(22px,2.4vw,34px)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', color: '#FBF8F1' }}>
                  <div style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '.02em', lineHeight: 1.04, fontSize: 'clamp(2rem,1.3rem+2.2vw,3.2rem)' }}>{t.label}</div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(14px,.9rem+.2vw,16px)', opacity: .94, marginTop: '10px', display: 'flex', alignItems: 'center', gap: '9px' }}>
                    {t.sub} <Icon name="arrow-right" size={17} /></div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- SHOP SECTION (featured patterns) ------------------------------------ */
function ShopSection({ onOpen, onAdd, onNav, cardStyle }) {
  return (
    <section className="scheme-wheat sec" style={{ background: 'var(--bg)' }}>
      <div className="hcw-wrap">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '20px', marginBottom: 'clamp(28px,4vw,48px)', flexWrap: 'wrap' }}>
          <div>
            <Eyebrow>The Pattern Library</Eyebrow>
            <h2 style={{ marginTop: '16px' }}>Shop our sewing patterns</h2>
          </div>
          <a className="ulink" onClick={() => onNav('collection')} style={{ cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--accent)' }}>View all patterns</a>
        </div>
        <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'clamp(18px,2.5vw,30px)' }}>
          {PRODUCTS.slice(0, 4).map((p, i) => <Reveal key={p.id} delay={i * 70}><ProductCard product={p} onOpen={onOpen} onAdd={onAdd} cardStyle={cardStyle} /></Reveal>)}
        </div>
      </div>
    </section>
  );
}

/* ---- HERITAGE BAND (Prairie Blue scheme) --------------------------------- */
function HeritageBand() {
  return (
    <section className="scheme-blue" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <div className="hcw-wrap sec" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Eyebrow color="var(--accent)">Named for the women before us</Eyebrow>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.7rem,1.1rem+2.6vw,3.1rem)', lineHeight: 1.18, maxWidth: '20ch', margin: '24px auto 0', color: 'var(--text)' }}>
          Each pattern is named after a high country woman in Wyoming.</p>
        <p className="lead" style={{ marginTop: '22px', color: 'var(--text-soft)' }}>Classic, well-used, and made to become heirloom.</p>
        <hr className="stitch stitch--center" style={{ marginTop: '34px', borderColor: 'var(--text-soft)' }} />
      </div>
    </section>
  );
}

/* ---- FABRIC TEASER (split) ----------------------------------------------- */
function FabricTeaser({ onNav }) {
  return (
    <section className="scheme-cream sec" style={{ background: 'var(--bg)' }}>
      <div className="hcw-wrap">
        <div className="split split--reverse" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 'clamp(28px,4vw,64px)', alignItems: 'center' }}>
          <div>
            <Eyebrow>By the yard</Eyebrow>
            <h2 style={{ marginTop: '16px' }}>Vintage-floral cottons<br />for your next make</h2>
            <p className="lead" style={{ marginTop: '20px', maxWidth: '40ch' }}>
              Natural-fiber cottons and linens, hand-picked to pair with our patterns. Soft, durable, and made to be lived in.</p>
            <div style={{ marginTop: '28px' }}><Button onClick={() => onNav('fabric')} iconRight="arrow-right">Shop fabric</Button></div>
          </div>
          <div className="zoomwrap" style={{ position: 'relative', aspectRatio: '5/4', borderRadius: 'var(--radius-sm)' }}>
            <div className="bg" style={{ position: 'absolute', inset: 0, background: `url(${IMG}DSCF2426.jpg) center/cover` }} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- HOME PAGE ----------------------------------------------------------- */
function HomePage({ onNav, onOpen, onAdd, heroVariant, cardStyle, ribbon = true }) {
  return (
    <main>
      <Hero onNav={onNav} variant={heroVariant} />
      <CollectionTiles onNav={onNav} />
      <ShopSection onOpen={onOpen} onAdd={onAdd} onNav={onNav} cardStyle={cardStyle} />
      <HeritageBand />
      <FabricTeaser onNav={onNav} />
      <NewsletterBand />
    </main>
  );
}

Object.assign(window, { Reveal, Hero, CollectionTiles, ShopSection, HeritageBand, FabricTeaser, HomePage });
