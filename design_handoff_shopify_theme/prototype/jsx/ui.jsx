/* ============================================================================
   HCW custom theme · UI atoms + chrome
   Exports to window at the bottom (Babel scripts don't share scope).
   ========================================================================== */
const { useState, useEffect, useRef } = React;
const ASSET = 'assets/';
const IMG = 'images/';

/* ---- Lucide icon --------------------------------------------------------- */
function Icon({ name, size = 19, stroke = 1.6, style }) {
  const ref = useRef(null);
  useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', name);
      el.setAttribute('width', size); el.setAttribute('height', size);
      el.setAttribute('stroke-width', stroke);
      ref.current.appendChild(el);
      window.lucide.createIcons();
    }
  }, [name, size, stroke]);
  return <span ref={ref} style={{ display: 'inline-flex', alignItems: 'center', ...style }} />;
}

/* ---- Eyebrow / overline -------------------------------------------------- */
function Eyebrow({ children, plain, color, style }) {
  return <div className={'eyebrow' + (plain ? ' eyebrow--plain' : '')} style={{ color: color || 'var(--accent)', ...style }}>{children}</div>;
}

/* ---- Button -------------------------------------------------------------- */
function Button({ children, variant = 'primary', full, onClick, icon, iconRight, style }) {
  const [h, setH] = useState(false);
  const base = {
    fontFamily: 'var(--font-sans)', fontSize: '13.5px', fontWeight: 600, letterSpacing: '.06em',
    textTransform: 'uppercase', cursor: 'pointer', border: 'none', padding: '15px 30px',
    borderRadius: 'var(--radius-sm)', width: full ? '100%' : 'auto', display: 'inline-flex',
    alignItems: 'center', justifyContent: 'center', gap: '10px', transition: 'all var(--dur) var(--ease)',
  };
  const variants = {
    primary: { background: 'var(--accent)', color: 'var(--accent-text)' },
    ink:     { background: 'var(--hcw-ink)', color: 'var(--hcw-cream)', padding: '18px 30px' },
    outline: { background: 'transparent', color: 'var(--text)', border: '1.5px solid currentColor' },
    ghost:   { background: 'transparent', color: 'var(--text)', padding: '6px 0', textTransform: 'none', letterSpacing: '.01em' },
  };
  const hov = h ? (
    variant === 'primary' ? { background: 'var(--hcw-red-deep)' } :
    variant === 'ink' ? { background: '#000' } :
    variant === 'outline' ? { background: 'var(--text)', color: 'var(--bg)' } : {}
  ) : {};
  return (
    <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ ...base, ...variants[variant], ...hov, ...style }}>
      {icon && <Icon name={icon} size={16} />}{children}{iconRight && <Icon name={iconRight} size={16} />}
    </button>
  );
}

/* ---- Logo ---------------------------------------------------------------- */
function Logo({ height = 26, cream = false }) {
  return <img src={ASSET + (cream ? 'wordmark-cream.png' : 'logo-full-red.png')} alt="High Country Women"
    style={{ height: height + 'px', width: 'auto', objectFit: 'contain' }} />;
}

/* ---- Header -------------------------------------------------------------- */
function Header({ onNav, current, cartCount, onCart }) {
  const [menu, setMenu] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const nav = [
    { label: 'Patterns', go: 'collection' },
    { label: 'Fabric', go: 'fabric' },
    { label: 'Workshops', go: 'workshops' },
    { label: 'About', go: 'about' },
  ];
  const link = (n) => (
    <a key={n.label} onClick={() => { onNav(n.go); setMenu(false); }}
      style={{ cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 500,
        letterSpacing: '.04em', textTransform: 'uppercase', color: current === n.go ? 'var(--accent)' : 'var(--text-soft)',
        borderBottom: current === n.go ? '1.5px solid var(--accent)' : '1.5px solid transparent', paddingBottom: '3px' }}
      onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
      onMouseLeave={e => e.currentTarget.style.color = current === n.go ? 'var(--accent)' : 'var(--text-soft)'}>{n.label}</a>
  );
  return (
    <header className="scheme-cream" style={{ position: 'sticky', top: 0, zIndex: 60, background: 'var(--bg)',
      borderBottom: '1px solid var(--line)' }}>
      {/* announcement ribbon */}
      <div className="scheme-terra" style={{ background: 'var(--bg)', color: 'var(--text)', textAlign: 'center',
        fontFamily: 'var(--font-sans)', fontSize: '11.5px', fontWeight: 600, letterSpacing: '.14em',
        textTransform: 'uppercase', padding: '8px 16px' }}>
        Free pillow-cover pattern with every order · Beginner-friendly PDF patterns
      </div>
      <div className="hcw-wrap" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center',
        paddingBlock: '18px' }}>
        {/* left nav (desktop) */}
        <nav className="only-desktop" style={{ display: 'flex', gap: '26px', alignItems: 'center' }}>{nav.map(link)}</nav>
        {/* mobile hamburger */}
        <button className="only-mobile" onClick={() => setMenu(true)} aria-label="Menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text)', justifySelf: 'start', padding: 0 }}>
          <Icon name="menu" size={24} />
        </button>
        {/* logo */}
        <div onClick={() => onNav('home')} style={{ cursor: 'pointer', justifySelf: 'center' }}>
          <Logo height={26} />
        </div>
        {/* utilities */}
        <div style={{ display: 'flex', gap: '18px', alignItems: 'center', justifySelf: 'end', color: 'var(--text-soft)' }}>
          <span className="only-desktop" style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px', letterSpacing: '.04em' }}>USD <Icon name="chevron-down" size={13} /></span>
          <Icon name="search" size={19} style={{ cursor: 'pointer' }} />
          <span className="only-desktop"><Icon name="user-round" size={19} style={{ cursor: 'pointer' }} /></span>
          <span onClick={onCart} style={{ cursor: 'pointer', position: 'relative', display: 'inline-flex' }}>
            <Icon name="shopping-bag" size={19} />
            {cartCount > 0 && <span style={{ position: 'absolute', top: '-8px', right: '-9px', background: 'var(--accent)',
              color: '#fff', fontFamily: 'var(--font-sans)', fontSize: '10px', fontWeight: 700, minWidth: '17px', height: '17px',
              padding: '0 4px', borderRadius: '999px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{cartCount}</span>}
          </span>
        </div>
      </div>

      {/* mobile drawer */}
      <div onClick={() => setMenu(false)} style={{ position: 'fixed', inset: 0, zIndex: 80, background: 'rgba(46,42,36,.4)',
        opacity: menu ? 1 : 0, pointerEvents: menu ? 'auto' : 'none', transition: 'opacity .3s var(--ease)' }} />
      <aside className="scheme-cream" style={{ position: 'fixed', top: 0, left: 0, bottom: 0, zIndex: 90, width: 'min(82vw, 340px)',
        background: 'var(--bg)', transform: menu ? 'translateX(0)' : 'translateX(-100%)', transition: 'transform .34s var(--ease)',
        boxShadow: 'var(--shadow-lg)', padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
          <Logo height={22} />
          <span onClick={() => setMenu(false)} style={{ cursor: 'pointer' }}><Icon name="x" size={22} /></span>
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {nav.map(n => (
            <a key={n.label} onClick={() => { onNav(n.go); setMenu(false); }}
              style={{ cursor: 'pointer', fontFamily: 'var(--font-display)', fontSize: '26px',
                color: current === n.go ? 'var(--accent)' : 'var(--text)', padding: '10px 0', borderBottom: '1px dashed var(--line)' }}>{n.label}</a>
          ))}
        </nav>
        <div style={{ marginTop: '28px', fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--text-soft)' }}>
          Sewing patterns designed by two friends in the high country.
        </div>
      </aside>
    </header>
  );
}

/* ---- Marquee ribbon ------------------------------------------------------ */
function Marquee({ items, scheme = 'scheme-terra' }) {
  const row = (
    <span style={{ display: 'inline-flex', alignItems: 'center' }}>
      {items.map((t, i) => (
        <span key={i} style={{ display: 'inline-flex', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px,3vw,34px)', padding: '0 26px', whiteSpace: 'nowrap' }}>{t}</span>
          <span style={{ color: 'var(--accent)', fontSize: '14px' }}>✦</span>
        </span>
      ))}
    </span>
  );
  return (
    <section className={scheme} style={{ background: 'var(--bg)', color: 'var(--text)', paddingBlock: 'clamp(22px,3vw,34px)', borderBlock: '1px solid var(--line)' }}>
      <div className="marquee"><div className="marquee__track">{row}{row}</div></div>
    </section>
  );
}

/* ---- Newsletter band (free pattern capture) ------------------------------ */
function NewsletterBand() {
  return (
    <section className="scheme-wheat" style={{ background: 'var(--bg)' }}>
      <div className="split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'stretch' }}>
        <div style={{ padding: 'clamp(40px, 7vw, 104px) clamp(24px,5vw,72px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Eyebrow>Ready for an easy sewing project?</Eyebrow>
          <h2 style={{ marginTop: '20px', marginBottom: '20px' }}>Download the Free<br />Pillow Cover Pattern</h2>
          <p className="lead" style={{ maxWidth: '42ch' }}>
            A classic pillow cover with an envelope opening and optional ruffle—perfect for beginners. Refresh any space with cozy textures and color.</p>
          <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', gap: '10px', marginTop: '30px', maxWidth: '520px', flexWrap: 'wrap' }}>
            <input className="field" placeholder="Email address" style={{ flex: '1 1 220px' }} />
            <Button>Email me the pattern</Button>
          </form>
        </div>
        <div className="zoomwrap" style={{ minHeight: '440px', position: 'relative' }}>
          <div className="bg" style={{ position: 'absolute', inset: 0, background: `url(${IMG}DSCF1546.jpg) center 30%/cover` }} />
        </div>
      </div>
    </section>
  );
}

/* ---- Footer -------------------------------------------------------------- */
function Footer({ onNav }) {
  const cols = [
    ['Shop', [['Sewing Patterns', 'collection'], ['Fabric', 'fabric'], ['Workshops', 'workshops'], ['Gift Cards', 'collection']]],
    ['Company', [['About', 'about'], ['Contact Us', 'about'], ['Shipping & Returns', 'about'], ['Terms & Policies', 'about']]],
  ];
  return (
    <footer className="scheme-ink" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <div className="hcw-wrap" style={{ paddingBlock: 'clamp(56px, 7vw, 96px) 40px' }}>
        <div className="grid-foot" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1.6fr', gap: 'clamp(28px,4vw,56px)', alignItems: 'start' }}>
          <div>
            <Logo height={26} cream />
            <p className="lead" style={{ marginTop: '20px', color: 'var(--text-soft)', maxWidth: '32ch' }}>
              Sewing patterns and fabric for heirloom pieces — designed by two friends in the high country.</p>
            <div style={{ display: 'flex', gap: '16px', marginTop: '24px', color: 'var(--text-soft)' }}>
              {['instagram', 'facebook', 'youtube'].map(s => <span key={s} style={{ cursor: 'pointer' }}><Icon name={s} size={19} /></span>)}
            </div>
          </div>
          {cols.map(([h, links]) => (
            <div key={h}>
              <Eyebrow plain style={{ marginBottom: '18px' }}>{h}</Eyebrow>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {links.map(([l, go]) => <li key={l}><a className="ulink" onClick={() => onNav(go)} style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--text-soft)' }}>{l}</a></li>)}
              </ul>
            </div>
          ))}
          <div>
            <Eyebrow plain style={{ marginBottom: '18px' }}>Join the list</Eyebrow>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--text-soft)', marginBottom: '16px', maxWidth: '30ch' }}>
              New patterns, fabric drops & workshop dates — straight to your inbox.</p>
            <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', gap: '8px' }}>
              <input className="field" placeholder="Email address" style={{ flex: 1, fontSize: '14px', padding: '12px 14px' }} />
              <Button>Sign up</Button>
            </form>
          </div>
        </div>
        <hr className="stitch" style={{ marginBlock: '44px 22px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px',
          fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--text-mute)' }}>
          <span>© 2026 High Country Women · Lander, Wyoming</span>
          <span>All rights reserved. Not for resale or profit.</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Icon, Eyebrow, Button, Logo, Header, Marquee, NewsletterBand, Footer, ASSET, IMG });
