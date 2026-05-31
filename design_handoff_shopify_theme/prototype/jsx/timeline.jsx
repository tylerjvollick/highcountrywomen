/* ============================================================================
   HCW custom theme · Horizontal scrolling Timeline (irregular / editorial)
   ----------------------------------------------------------------------------
   Drag-to-scroll history rail. Photos vary in size and float at different
   heights along one continuous baseline; dates sit centered below. Events
   WITHOUT a photo render as a serif "moment" card so nothing looks blank.

   Update the `events` array to add a milestone. Each event:
     { date, caption, photo?, focus?, size?, offset? }
   - photo   filename in images/ (omit for a text card)
   - focus   background-position Y for the photo (e.g. '22%', 'bottom')
   - size    'portrait' | 'tall' | 'square' | 'landscape' | 'wide'
   - offset  0..1 — how high the media floats above the line (optional)
   ========================================================================== */

const TL_ZONE = 520; // px — vertical room above the baseline for media to float
const TL_SIZE = {
  portrait:  { w: 300, ar: 4 / 5 },
  tall:      { w: 280, ar: 3 / 4 },
  square:    { w: 330, ar: 1 / 1 },
  landscape: { w: 460, ar: 3 / 2 },
  wide:      { w: 500, ar: 16 / 10 },
};
const TL_FACTORS = [0.55, 0.12, 0.68, 0.28, 0.5, 0.18, 0.62, 0.34];

function Timeline({ events = [], eyebrow = 'Our story, so far', title }) {
  const railRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const drag = useRef({ down: false, startX: 0, startScroll: 0, moved: false });

  const syncArrows = () => {
    const el = railRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    syncArrows();
    const el = railRef.current;
    if (!el) return;
    el.addEventListener('scroll', syncArrows, { passive: true });
    window.addEventListener('resize', syncArrows);
    return () => { el.removeEventListener('scroll', syncArrows); window.removeEventListener('resize', syncArrows); };
  }, []);

  const nudge = (dir) => {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.7, 560), behavior: 'smooth' });
  };

  const onDown = (e) => {
    const el = railRef.current;
    drag.current = { down: true, startX: e.clientX, startScroll: el.scrollLeft, moved: false };
    el.setPointerCapture?.(e.pointerId);
  };
  const onMove = (e) => {
    const el = railRef.current;
    if (!drag.current.down) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    el.scrollLeft = drag.current.startScroll - dx;
  };
  const onUp = (e) => {
    const el = railRef.current;
    drag.current.down = false;
    el.releasePointerCapture?.(e.pointerId);
  };

  return (
    <section className="scheme-cream sec tl-section" style={{ background: 'var(--bg)', overflow: 'hidden' }}>
      <div className="hcw-wrap" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          {title && <h2 style={{ marginTop: '14px', maxWidth: '18ch' }}>{title}</h2>}
        </div>
        <div className="tl-arrows" style={{ display: 'flex', gap: '10px' }}>
          <button className="tl-arrow" aria-label="Previous" disabled={!canPrev} onClick={() => nudge(-1)}><Icon name="arrow-left" size={18} /></button>
          <button className="tl-arrow" aria-label="Next" disabled={!canNext} onClick={() => nudge(1)}><Icon name="arrow-right" size={18} /></button>
        </div>
      </div>

      <div ref={railRef} className="tl-rail" onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp}>
        <div className="tl-track" style={{ '--tl-zone': TL_ZONE + 'px' }}>
          <div className="tl-baseline" style={{ top: TL_ZONE + 'px' }} />
          {events.map((ev, i) => {
            const size = ev.size || (ev.photo ? ['landscape', 'portrait', 'square', 'tall', 'wide'][i % 5] : (i % 2 ? 'portrait' : 'square'));
            const S = TL_SIZE[size] || TL_SIZE.square;
            const mediaH = Math.round(S.w / S.ar);
            const room = Math.max(TL_ZONE - mediaH, 0);
            const factor = ev.offset != null ? ev.offset : TL_FACTORS[i % TL_FACTORS.length];
            const off = Math.round(room * factor);
            return (
              <article className="tl-item" key={i} style={{ width: Math.max(S.w, 220) + 'px' }}>
                <div className="tl-figure" style={{ height: TL_ZONE + 'px' }}>
                  <div className="tl-tick" style={{ height: off + 'px' }} />
                  <div className="tl-media" style={{ width: S.w + 'px', height: mediaH + 'px', marginBottom: off + 'px' }}>
                    {ev.photo
                      ? <div className="tl-photo zoomwrap"><div className="bg" style={{ position: 'absolute', inset: 0, background: `url(${IMG}${ev.photo}) center ${ev.focus || 'center'}/cover` }} /></div>
                      : <div className="tl-card"><span className="tl-card-mark">&#10022;</span><p className="tl-quote">{ev.caption}</p></div>}
                  </div>
                  <span className="tl-dot" />
                </div>
                <div className="tl-foot">
                  <div className="tl-date">{ev.date}</div>
                  {ev.photo && <p className="tl-caption">{ev.caption}</p>}
                </div>
              </article>
            );
          })}
          <div className="tl-end" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Timeline });
