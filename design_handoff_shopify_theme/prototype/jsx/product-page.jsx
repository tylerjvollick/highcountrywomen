/* ============================================================================
   HCW custom theme · Product detail page
   ========================================================================== */

function Accordion({ title, children, open: openInit }) {
  const [open, setOpen] = useState(!!openInit);
  return (
    <div style={{ borderBottom: '1px solid var(--line)' }}>
      <button onClick={() => setOpen(o => !o)} style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0', textAlign: 'left',
        fontFamily: 'var(--font-sans)', fontSize: '12.5px', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text)' }}>
        {title}<Icon name={open ? 'minus' : 'plus'} size={18} />
      </button>
      <div style={{ maxHeight: open ? '420px' : '0', overflow: 'hidden', transition: 'max-height .4s var(--ease)' }}>
        <div style={{ padding: '0 0 22px', fontFamily: 'var(--font-sans)', fontSize: '14.5px', lineHeight: 1.65, color: 'var(--text-soft)' }}>{children}</div>
      </div>
    </div>
  );
}

function ProductPage({ product, onAdd, onOpen, onNav }) {
  const thumbs = [product.photo, ASSET + 'photo-skirt.jpg', ASSET + 'photo-sweater.jpg', IMG + 'DSCF1659.jpg'];
  const [active, setActive] = useState(0);
  const related = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <main className="scheme-cream" style={{ background: 'var(--bg)' }}>
      {/* breadcrumb */}
      <div className="hcw-wrap" style={{ paddingTop: '26px', fontFamily: 'var(--font-sans)', fontSize: '12.5px', color: 'var(--text-mute)', letterSpacing: '.02em' }}>
        <a className="ulink" onClick={() => onNav('home')} style={{ cursor: 'pointer' }}>Home</a> &nbsp;/&nbsp;
        <a className="ulink" onClick={() => onNav('collection')} style={{ cursor: 'pointer' }}>Patterns</a> &nbsp;/&nbsp;
        <span style={{ color: 'var(--text-soft)' }}>{product.name}</span>
      </div>

      <div className="hcw-wrap" style={{ paddingBlock: 'clamp(26px,3vw,44px) clamp(48px,7vw,96px)' }}>
        <div className="split" style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 'clamp(28px,4vw,72px)', alignItems: 'flex-start' }}>
          {/* gallery */}
          <div style={{ position: 'sticky', top: '96px' }}>
            <ProductCover product={product} ratio="4/5" big />
            <div className="hrail tidy-scroll" style={{ marginTop: '14px' }}>
              {thumbs.map((t, i) => (
                <button key={i} onClick={() => setActive(i)} style={{ width: '74px', height: '92px', padding: 0, cursor: 'pointer',
                  borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: active === i ? '1.5px solid var(--hcw-ink)' : '1px solid var(--line)',
                  background: `url(${t}) center/cover` }} aria-label={'View ' + (i + 1)} />
              ))}
            </div>
          </div>

          {/* details */}
          <div>
            {product.tag && <Eyebrow>{product.tag}</Eyebrow>}
            <h1 style={{ fontSize: 'clamp(2rem,1.4rem+2.4vw,3.2rem)', marginTop: '10px' }}>{product.name} PDF Sewing Pattern</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '14px' }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: 600 }}>${product.price.toFixed(2)} USD</span>
              <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--text-mute)' }}>· {product.level}</span>
            </div>
            <p style={{ marginTop: '24px', fontFamily: 'var(--font-sans)', fontSize: '15.5px', lineHeight: 1.7, color: 'var(--text-soft)', maxWidth: '54ch' }}>{product.blurb}</p>
            <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Button variant="ink" full icon="shopping-bag" onClick={() => onAdd(product)}>Add to cart — ${product.price.toFixed(2)}</Button>
              <Button variant="outline" full onClick={() => onAdd(product)}>Buy it now</Button>
            </div>

            <div style={{ marginTop: '34px' }}>
              <Accordion title="Pattern Difficulty" open>
                Rated <strong>{product.level}</strong>. Clear step-by-step instructions with a full photo &amp; video sewalong — a confident first project, or an easy make for seasoned sewists.
              </Accordion>
              <Accordion title="Sizing">
                Inclusive size range XXS–4X with finished-garment measurements and a printable size chart included in the file.
              </Accordion>
              <Accordion title="Includes">
                Layered, print-at-home (A4 / US Letter) and A0 copyshop PDF files, a full sewing booklet, and a link to the YouTube sewalong.
              </Accordion>
              <Accordion title="Fabric Recommendations">
                Light-to-mid-weight natural fibers — cotton lawn, linen, double gauze, or a soft chambray. See our <span style={{ color: 'var(--accent)' }}>fabric collection</span>.
              </Accordion>
            </div>

            <p style={{ marginTop: '28px', fontFamily: 'var(--font-sans)', fontSize: '13px', lineHeight: 1.7, color: 'var(--text-mute)', maxWidth: '56ch' }}>
              This listing is for a PDF pattern only, not a paper pattern or physical product. After your purchase has been finalized you will receive a link to zip folders containing your digital patterns.<br /><br />
              Copyright by 2026 High Country Women. ALL RIGHTS RESERVED. Not for resale or profit.</p>
          </div>
        </div>
      </div>

      {/* sewalong band */}
      <section className="scheme-wheat" style={{ background: 'var(--bg)' }}>
        <div className="hcw-wrap sec" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Eyebrow>Detailed sewalong tutorial</Eyebrow>
          <h2 style={{ marginTop: '16px', maxWidth: '20ch' }}>Follow along, every step of the way</h2>
          <p className="lead" style={{ marginTop: '16px', maxWidth: '46ch' }}>
            We walk you through the entire {product.name} pattern in our detailed YouTube sewalong — perfect for beginners.</p>
          <div className="zoomwrap" style={{ position: 'relative', width: 'min(820px, 100%)', aspectRatio: '16/9', marginTop: '36px', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}>
            <div className="bg" style={{ position: 'absolute', inset: 0, background: `url(${IMG}DSCF1659.jpg) center 18%/cover` }} />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(46,42,36,.28)' }} />
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ width: '76px', height: '76px', borderRadius: '999px', background: 'var(--accent)', color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-md)' }}><Icon name="play" size={28} /></span>
            </div>
          </div>
        </div>
      </section>

      {/* related */}
      <section className="scheme-cream sec" style={{ background: 'var(--bg)' }}>
        <div className="hcw-wrap">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 'clamp(24px,3vw,40px)' }}>
            <h2 style={{ fontSize: 'var(--step-3)' }}>You may also like</h2>
            <a className="ulink" onClick={() => onNav('collection')} style={{ cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--accent)' }}>View all</a>
          </div>
          <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'clamp(18px,2.5vw,28px)' }}>
            {related.map(p => <ProductCard key={p.id} product={p} onOpen={onOpen} onAdd={onAdd} cardStyle="minimal" />)}
          </div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { Accordion, ProductPage });
