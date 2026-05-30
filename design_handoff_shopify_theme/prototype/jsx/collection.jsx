/* ============================================================================
   HCW custom theme · Collection pages (Sewing Patterns, Fabric)
   ========================================================================== */

function FilterBar({ count, label }) {
  const Pill = ({ children }) => (
    <button style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', letterSpacing: '.02em', color: 'var(--text-soft)', background: 'transparent',
      border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 0' }}>{children} <Icon name="chevron-down" size={14} /></button>
  );
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBlock: '1px solid var(--line)', padding: '12px 0', margin: '0 0 clamp(28px,4vw,44px)', flexWrap: 'wrap', gap: '12px' }}>
      <div style={{ display: 'flex', gap: '24px' }}><Pill>Availability</Pill><Pill>Price</Pill></div>
      <div style={{ display: 'flex', gap: '22px', alignItems: 'center', fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--text-mute)' }}>
        <span>{count} {label}</span><Pill>Sort</Pill>
      </div>
    </div>
  );
}

/* Shared collection header (editorial, centered) */
function CollectionHeader({ eyebrow, title, blurb, photo, pos }) {
  return (
    <section className="scheme-cream" style={{ background: 'var(--bg)', paddingTop: 'clamp(36px,5vw,64px)' }}>
      <div className="hcw-wrap" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 style={{ marginTop: '18px', fontSize: 'clamp(2.8rem,2rem+4vw,5.2rem)' }}>{title}</h1>
        <p className="lead" style={{ marginTop: '18px', maxWidth: '48ch' }}>{blurb}</p>
      </div>
    </section>
  );
}

function CollectionPage({ onOpen, onAdd, cardStyle }) {
  return (
    <main className="scheme-cream" style={{ background: 'var(--bg)' }}>
      <CollectionHeader eyebrow="The Pattern Library"
        title="Sewing Patterns"
        blurb="Beginner-friendly PDF patterns for the home sewist — named for the women of the high country." />
      <div className="hcw-wrap" style={{ paddingBlock: 'clamp(36px,5vw,56px) clamp(56px,8vw,112px)' }}>
        <FilterBar count={PRODUCTS.length} label="patterns" />
        <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'clamp(18px,2.5vw,32px) clamp(18px,2.5vw,28px)' }}>
          {PRODUCTS.map((p, i) => <Reveal key={p.id} delay={(i % 4) * 60}><ProductCard product={p} onOpen={onOpen} onAdd={onAdd} cardStyle={cardStyle} /></Reveal>)}
        </div>
      </div>
      <NewsletterBand />
    </main>
  );
}

function FabricPage({ onAdd }) {
  return (
    <main className="scheme-cream" style={{ background: 'var(--bg)' }}>
      <CollectionHeader eyebrow="By the yard"
        title="Fabric"
        blurb="Natural-fiber cottons and linens — vintage florals, gingham and stripes, chosen to pair beautifully with our patterns." />
      <div className="hcw-wrap" style={{ paddingBlock: 'clamp(36px,5vw,56px) clamp(56px,8vw,112px)' }}>
        <FilterBar count={FABRICS.length} label="fabrics" />
        <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'clamp(18px,2.5vw,32px) clamp(18px,2.5vw,28px)' }}>
          {FABRICS.map((f, i) => <Reveal key={f.id} delay={(i % 4) * 60}><FabricCard product={f} onAdd={onAdd} /></Reveal>)}
        </div>
      </div>
      <section className="scheme-wheat sec" style={{ background: 'var(--bg)' }}>
        <div className="hcw-wrap" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Eyebrow>A note on our fabric</Eyebrow>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem,1.1rem+2vw,2.6rem)', lineHeight: 1.2, maxWidth: '26ch', marginTop: '20px' }}>
            Cut to order, shipped folded with care from Lander, Wyoming.</p>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { FilterBar, CollectionHeader, CollectionPage, FabricPage });
