/* ============================================================================
   HCW custom theme · products data + branded pattern cover + cards
   ========================================================================== */

const PRODUCTS = [
  { id: 'nellie', name: 'Nellie Tank + Dress', script: 'Nellie Tank\n& Dress', price: 16,
    photo: IMG + 'DSCF1659.jpg', pos: 'center 30%', level: 'Confident Beginner', tag: 'Bestseller', hash: '#hcwnellie',
    blurb: 'The Nellie pattern offers five versatile views with a comfortable bodice featuring a gathered neckline and button placket. Choose from a tank, short shift dress, long shift dress, or add a tiered skirt option, with the flexibility to end the button placket at the bodice or continue it through the skirt.' },
  { id: 'esther-tank', name: 'Esther Tank', script: 'Esther Tank', price: 14,
    photo: ASSET + 'photo-sweater.jpg', pos: 'center 20%', level: 'Beginner', tag: null, hash: '#hcwesther',
    blurb: 'A breezy, gently shaped tank with a clean finished neckline — a wardrobe staple you will cut again and again in every fabric you love.' },
  { id: 'esther-skirt', name: 'Esther Skirt', script: 'Esther Skirt', price: 14,
    photo: IMG + 'DSCF1659.jpg', pos: 'center 45%', level: 'Beginner', tag: null, hash: '#hcwesther',
    blurb: 'A tiered, pull-on skirt with an elastic waist and generous twirl. Beautiful in striped linen or a soft vintage floral.' },
  { id: 'lizabeth', name: 'Lizabeth Lounge Top', script: 'Lizabeth\nLounge Top', price: 14,
    photo: IMG + 'DSCF0938.jpg', pos: 'center 25%', level: 'Confident Beginner', tag: 'New', hash: '#hcwlizabeth',
    blurb: 'A relaxed, drop-shoulder lounge top with cozy ribbed cuffs — the everyday layer you will live in all season.' },
  { id: 'kids-lizabeth', name: 'Kids Lizabeth Crewneck', script: 'Kids Lizabeth\nCrewneck', price: 12,
    photo: ASSET + 'photo-sweater.jpg', pos: 'center 30%', level: 'Beginner', tag: null, hash: '#hcwlizabeth',
    blurb: 'The Lizabeth crewneck, sized down for the littlest sewists in your life. Quick to make, sweet to gift.' },
  { id: 'esther-set', name: 'Esther Set', script: 'Esther Set', price: 18,
    photo: IMG + 'DSCF1659.jpg', pos: 'center 38%', level: 'Beginner', tag: 'Bundle', hash: '#hcwesther',
    blurb: 'The Esther Tank and Esther Skirt together as a matching set — one easy, heirloom-worthy summer outfit.' },
];

/* Fabric, sold by the yard. We crop the two fabric-bolt photos at different x
   positions so each floral reads as a distinct bolt. */
const FABRICS = [
  { id: 'fb1', name: 'Wildflower Cotton Lawn', price: 18, photo: IMG + 'DSCF2423.jpg', pos: '8% center', tag: null },
  { id: 'fb2', name: 'Prairie Navy Floral', price: 18, photo: IMG + 'DSCF2423.jpg', pos: '30% center', tag: 'Low stock' },
  { id: 'fb3', name: 'Lilac Meadow Cotton', price: 18, photo: IMG + 'DSCF2423.jpg', pos: '50% center', tag: null },
  { id: 'fb4', name: 'Barn Red Calico', price: 18, photo: IMG + 'DSCF2423.jpg', pos: '66% center', tag: null },
  { id: 'fb5', name: 'Cornflower Linen Blend', price: 22, photo: IMG + 'DSCF2426.jpg', pos: '88% center', tag: 'New' },
  { id: 'fb6', name: 'Garden Spray Cotton', price: 18, photo: IMG + 'DSCF2426.jpg', pos: '50% center', tag: null },
  { id: 'fb7', name: 'Mustard Plaid Flannel', price: 16, photo: IMG + 'DSCF1546.jpg', pos: 'center 70%', tag: null },
  { id: 'fb8', name: 'Heritage Floral Cotton', price: 18, photo: IMG + 'DSCF2426.jpg', pos: '12% center', tag: null },
];

/* ---- Branded printed pattern cover --------------------------------------
   Recreates the real listing artwork: paper ground, red Amsterdam-One script
   name, the garment photo, and a footer band (logo wordmark + PDF SEWING
   PATTERNS). The quilt mark appears ONLY inside the logo lockup. */
function ProductCover({ product, ratio = '4 / 5', big = false }) {
  return (
    <div style={{ position: 'relative', aspectRatio: ratio, background: 'var(--hcw-paper)', overflow: 'hidden',
      borderRadius: 'var(--radius-sm)', display: 'grid', gridTemplateColumns: '1fr 1fr', border: '1px solid var(--hcw-line)' }}>
      {/* left: red script title */}
      <div style={{ padding: big ? '26px 22px' : '15px 13px', position: 'relative', zIndex: 2 }}>
        <div style={{ fontFamily: 'var(--font-script)', color: 'var(--hcw-red)', fontWeight: 400,
          fontSize: big ? 'clamp(34px,4vw,52px)' : 'clamp(19px, 2.4vw, 30px)', lineHeight: 1.0, whiteSpace: 'pre-line' }}>{product.script}</div>
        <div style={{ marginTop: big ? '10px' : '5px', fontFamily: 'var(--font-sans)', fontSize: big ? '11px' : '8.5px',
          fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--hcw-red)' }}>Sewing Pattern</div>
      </div>
      {/* right: garment photo */}
      <div style={{ background: `url(${product.photo}) ${product.pos || 'center'}/cover` }} />
      {/* footer band */}
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 3, display: 'flex',
        justifyContent: 'space-between', alignItems: 'center', padding: big ? '11px 16px' : '7px 11px',
        background: 'linear-gradient(transparent, rgba(251,248,241,.85) 38%)' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: big ? '11px' : '8px', letterSpacing: '.08em',
          textTransform: 'uppercase', color: 'var(--hcw-red)' }}>High Country Women</span>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: big ? '11px' : '8px', letterSpacing: '.08em',
          textTransform: 'uppercase', color: 'var(--hcw-red)' }}>PDF Sewing Patterns</span>
      </div>
      {product.hash && <span style={{ position: 'absolute', right: big ? '16px' : '10px', bottom: big ? '34px' : '22px', zIndex: 3,
        fontFamily: 'var(--font-script)', color: '#fff', fontSize: big ? '20px' : '13px', textShadow: '0 1px 6px rgba(0,0,0,.4)' }}>{product.hash}</span>}
    </div>
  );
}

/* ---- Pattern product card ------------------------------------------------ */
function ProductCard({ product, onOpen, onAdd, cardStyle = 'minimal' }) {
  const [hover, setHover] = useState(false);
  return (
    <div style={{ fontFamily: 'var(--font-sans)' }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div onClick={() => onOpen(product)} className="zoomwrap" style={{ cursor: 'pointer', position: 'relative', borderRadius: 'var(--radius-sm)' }}>
        <div className="bg"><ProductCover product={product} /></div>
        {product.tag && <span style={{ position: 'absolute', top: '12px', left: '12px', zIndex: 5, background: 'var(--hcw-ink)',
          color: 'var(--hcw-cream)', fontSize: '10.5px', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase',
          padding: '5px 11px', borderRadius: 'var(--radius-pill)' }}>{product.tag}</span>}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '10px', marginTop: '15px' }}>
        <div onClick={() => onOpen(product)} style={{ cursor: 'pointer', fontFamily: 'var(--font-display)', fontSize: '18px', lineHeight: 1.15, color: 'var(--text)' }}>{product.name}</div>
        <div style={{ fontSize: '14px', color: 'var(--text-soft)', whiteSpace: 'nowrap' }}>${product.price.toFixed(2)}</div>
      </div>
      <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '13.5px', color: 'var(--text-mute)', marginTop: '3px' }}>{product.level} · PDF Pattern</div>
      {cardStyle === 'button' ? (
        <div style={{ marginTop: '14px' }}><Button variant="outline" full icon="shopping-bag" onClick={() => onAdd(product)}>Add to cart</Button></div>
      ) : (
        <a onClick={() => onAdd(product)} className="ulink" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', marginTop: '11px',
          cursor: 'pointer', fontSize: '12.5px', fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--accent)' }}>
          <Icon name="plus" size={14} /> Add to cart</a>
      )}
    </div>
  );
}

/* ---- Fabric card (sold by the yard) -------------------------------------- */
function FabricCard({ product, onAdd }) {
  const [hover, setHover] = useState(false);
  return (
    <div style={{ fontFamily: 'var(--font-sans)' }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="zoomwrap" style={{ position: 'relative', borderRadius: 'var(--radius-sm)', cursor: 'pointer', border: '1px solid var(--hcw-line)' }}>
        <div className="bg" style={{ aspectRatio: '3/4', background: `url(${product.photo}) ${product.pos}/cover` }} />
        {product.tag && <span style={{ position: 'absolute', top: '12px', left: '12px', background: 'var(--hcw-cream)', color: 'var(--hcw-ink)',
          fontSize: '10.5px', fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', padding: '5px 11px', borderRadius: 'var(--radius-pill)' }}>{product.tag}</span>}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '10px', marginTop: '15px' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '18px', lineHeight: 1.15 }}>{product.name}</div>
        <div style={{ fontSize: '14px', color: 'var(--text-soft)', whiteSpace: 'nowrap' }}>${product.price.toFixed(2)}/yd</div>
      </div>
      <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '13.5px', color: 'var(--text-mute)', marginTop: '3px' }}>Natural-fiber cotton</div>
      <a onClick={() => onAdd({ ...product, name: product.name + ' (1 yd)', script: product.name, level: 'Fabric' })} className="ulink"
        style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', marginTop: '11px', cursor: 'pointer',
        fontSize: '12.5px', fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--accent)' }}>
        <Icon name="plus" size={14} /> Add to cart</a>
    </div>
  );
}

Object.assign(window, { PRODUCTS, FABRICS, ProductCover, ProductCard, FabricCard });
