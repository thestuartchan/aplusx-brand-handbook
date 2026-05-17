import React, { useEffect } from 'react';

const C = {
  surface: '#FAFAF7',
  surface2: '#F3F3EE',
  ink: '#1A1A1A',
  ink2: '#333333',
  muted: '#6B6B68',
  muted2: '#8C8C88',
  faint: '#E5E5DF',
  faint2: '#EEEEE9',
  pulsar: '#0080FF',
  pulsarEs: '#C62828',
  feinmann: '#1B5E20',
  superglide: '#E53935',
  lab: '#43A047',
  aplusx: '#424242',
};
const display = { fontFamily: "'Poppins', system-ui, -apple-system, sans-serif" };
const body = { fontFamily: "'Poppins', system-ui, -apple-system, sans-serif" };
const mono = { fontFamily: "'JetBrains Mono', 'SF Mono', Menlo, monospace" };

const prPrograms = [
  {
    key: 'pulsar-pr', label: 'Pulsar', color: C.pulsar, cadenceLabel: '8–12/quarter',
    tagline: 'Friendly, explanatory, accessible — press materials read like the brand sounds.',
    cadence: '8–12 placements per quarter. Every major product launch is a press moment. Software releases and seasonal moments anchor additional coverage waves.',
    pubs: "PC Gamer · Tom's Hardware · Rock Paper Shotgun · Polygon · IGN · The Verge (gaming) · Kotaku · Dot Esports · Wirecutter (peripherals) · Engadget · PCWorld · regional gaming press in Korea, Japan, and EU",
    voice: 'Friendly, explanatory, accessible. Matches Pulsar\'s social voice. Press materials read like the brand sounds. No spec-led pitches — Pulsar\'s PR explains what the product does for the player, not what the product is.',
    angles: [
      ['"Inside the design of [Product]: how AplusX builds for the hand, not the spec sheet"', 'Design philosophy feature.'],
      ['"[Pro Player] on what makes a mouse feel right"', 'Partner-creator interview with technology context.'],
      ['"Why Pulsar ships in three shapes when most brands ship in one"', 'Shape is King explainer.'],
    ],
  },
  {
    key: 'es-pr', label: 'Pulsar eS', color: C.pulsarEs, cadenceLabel: '3–5/quarter',
    tagline: 'Restrained, technical, documentary — press materials read like a reference, not an announcement.',
    cadence: '3–5 placements per quarter. eS PR happens at readiness, not at calendar. Press releases are short, fact-led, and rare. eS does not chase coverage — coverage comes to eS through tournament moments and professional usage data.',
    pubs: 'Dot Esports · HLTV.org · Liquipedia editorial · Dexerto · GosuGamers · ESPN Esports · tournament organizer media (ESL, BLAST, Riot) · specialist hardware verticals (Linus Tech Tips written, Optimum Tech, RTINGS for depth reviews)',
    voice: 'Restrained, technical, documentary. Press materials read like a technical reference, not a marketing announcement. Specifications stated precisely. Tournament results documented. No adjectives that perform expertise — the expertise is in the precision.',
    angles: [
      ['"[Player] wins [Tournament] using Pulsar eS [Product]"', 'Tournament documentation, no marketing framing.'],
      ['"The QC process behind a tournament-grade mouse"', 'Institutional credibility piece, technical depth.'],
      ['"PRO Series [Player]: built for the way they play"', 'Documentary feature on the player and the product as a single story.'],
    ],
  },
  {
    key: 'feinmann-pr', label: 'Feinmann', color: C.feinmann, cadenceLabel: '2–4/quarter',
    tagline: 'Editorial, considered, never promotional — press reads like a design publication, not a press release.',
    cadence: '2–4 placements per quarter. Editorial-led, not announcement-led. Feinmann PR works through earned editorial more than push releases. Coverage is sought through long lead times, relationship-led pitching, and meeting outlets in their own register.',
    pubs: 'Wallpaper* · Monocle · T Magazine (NYT) · AD (Architectural Digest) · Dezeen · Hypebeast (when peer-tier collab justifies) · Hodinkee (timepiece adjacency) · Robb Report · How to Spend It (FT) · Apartamento · regional design press in Korea and Japan',
    voice: 'Editorial, considered, never promotional. Press materials read like museum copy or a design publication\'s editorial. Names materials precisely. Avoids price as a topic. Treats the product as a cultural artifact, not a consumer purchase.',
    angles: [
      ['"[Material] in Feinmann\'s [Product]: where atelier methods meet input devices"', 'Craft and materials feature.'],
      ['"Feinmann × [Heritage Maker]: precision as a shared language"', 'Peer-tier collaboration feature.'],
      ['"A new category at the table: the luxury input device"', 'Category-defining editorial.'],
    ],
  },
  {
    key: 'superglide-pr', label: 'Superglide', color: C.superglide, cadenceLabel: '10–15/quarter',
    tagline: 'Design-led, current, confident — same energy as social, visually-led press materials.',
    cadence: '10–15 placements per quarter, weighted heavily around collab seasons. Drops are press moments; off-cycle PR is opportunistic. Superglide\'s PR rhythm matches its drop rhythm — fast, visual, and culture-fluent.',
    pubs: 'Hypebeast · Highsnobiety · Complex · Dezeen · It\'s Nice That · Sneaker Freaker (for collab features) · Dot Esports · gaming peripheral verticals · regional culture press · design newsletters and Substacks',
    voice: 'Design-led, current, confident. Same energy as social. Press materials are visually led — the image leads, the copy plays support. Captions are short. The collab is named, the design is shown, and the story is in the visual.',
    angles: [
      ['"Superglide × [Artist/Brand]: the drop that changes the desk"', 'Collab feature.'],
      ['"The accessory that became a category"', 'Superglide\'s role in mainstreaming setup culture.'],
      ['"Why glass mouse skates feel different — the materials story"', 'Design-led product feature.'],
    ],
  },
  {
    key: 'lab-pr', label: 'Pulsar LAB', color: C.lab, cadenceLabel: '2–4/reveal',
    tagline: 'Curious, honest about stage — press materials acknowledge what is in progress and what is not.',
    cadence: '2–4 placements per concept reveal. Most LAB drops have a press hook; concept reveals warrant a press moment of their own. PR is concept-led, not product-led — the question being asked is the story.',
    pubs: 'Core77 · Yanko Design · Dezeen · Fast Company (innovation desk) · Wired (product) · MIT Technology Review (when relevant) · AplusX-credited features in business and industrial press · regional design and innovation press',
    voice: 'Curious, honest about stage. Same as social. Press materials acknowledge what is in progress and what is not. \'We are trying\' is more useful than \'we are launching.\' LAB does not pitch finished products — it pitches questions, processes, and provisional answers.',
    angles: [
      ['"Inside Pulsar LAB: what AplusX is trying that didn\'t fit anywhere else"', 'Exploratory feature.'],
      ['"From LAB to product: how [past concept] became [shipping product]"', 'Concept-to-graduation case study.'],
      ['"The honest experiment: LAB\'s stance on shipping work in progress"', 'Process and philosophy feature.'],
    ],
  },
  {
    key: 'aplusx-pr', label: 'AplusX corporate', color: C.aplusx, cadenceLabel: '4–8/year',
    tagline: 'Institutional, factual — AplusX speaks as the company, not as a brand. No marketing tone.',
    cadence: 'Event-driven. Typically 4–8 placements per year on company-level stories. Earnings, leadership moves, and manufacturing announcements trigger additional cycles. AplusX corporate PR does not run continuously — it speaks when the company has something institutional to say.',
    pubs: 'Bloomberg · Reuters · Nikkei · Korea Economic Daily · Korea Times Business · Financial Times (Asia desk) · Wall Street Journal (tech and manufacturing) · Forbes · Fortune · regional industrial press',
    voice: 'Institutional, factual. AplusX speaks as the company, not as a brand. No marketing tone. The audience is investors, talent, government, retail and distribution partners, and the press — never gamers.',
    angles: [
      ['"AplusX: the Korean manufacturing company behind the gaming peripheral category"', 'Parent-narrative feature.'],
      ['"How a single manufacturer became the parent of three category-defining brands"', 'Portfolio strategy story.'],
      ['"Earnings and financial performance coverage"', 'Manufacturing partnership announcements, leadership profiles.'],
    ],
  },
];

export default function PRPlaybook() {
  useEffect(() => {
    const id = 'aplusx-fonts';
    if (!document.getElementById(id)) {
      const l = document.createElement('link');
      l.id = id; l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap';
      document.head.appendChild(l);
    }
    let meta = document.querySelector('meta[name="color-scheme"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'color-scheme';
      document.head.appendChild(meta);
    }
    meta.content = 'light';
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div style={{ ...body, background: C.surface, color: C.ink, minHeight: '100vh', WebkitFontSmoothing: 'antialiased', colorScheme: 'light' }}>

      <header style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(250, 250, 247, 0.94)',
        backdropFilter: 'saturate(180%) blur(12px)',
        WebkitBackdropFilter: 'saturate(180%) blur(12px)',
        borderBottom: `1px solid ${C.faint}`,
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '14px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
          <a onClick={() => scrollTo('top')} style={{ cursor: 'pointer', ...display, fontWeight: 800, fontSize: 20, letterSpacing: '-0.025em', color: C.ink, textDecoration: 'none' }}>
            AplusX
            <span style={{ ...body, fontWeight: 500, fontSize: 11, color: C.muted, letterSpacing: '0.12em', textTransform: 'uppercase', marginLeft: 14 }}>
              PR Playbook
            </span>
          </a>
          <nav style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
            {prPrograms.map(p => (
              <a key={p.key} onClick={() => scrollTo(p.key)} style={{
                cursor: 'pointer', ...body, fontSize: 13, color: C.muted,
                textDecoration: 'none', fontWeight: 500,
              }}>{p.label === 'AplusX corporate' ? 'AplusX' : p.label}</a>
            ))}
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: 1100, margin: '0 auto', padding: '0 28px' }}>

        {/* HERO */}
        <section id="top" style={{ padding: '96px 0 64px', borderBottom: `1px solid ${C.faint}` }}>
          <div style={{ ...mono, fontSize: 11.5, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.16em', color: C.muted, marginBottom: 24 }}>
            Internal — Strategy &amp; Brand · Version 3.0 · For PR managers and agencies
          </div>
          <h1 style={{ ...display, fontWeight: 900, fontSize: 'clamp(46px, 7vw, 92px)', lineHeight: 0.98, letterSpacing: '-0.035em', color: C.ink, marginBottom: 28 }}>
            Six press programs.<br/><span style={{ color: C.pulsar }}>One portfolio voice.</span>
          </h1>
          <p style={{ maxWidth: 720, fontSize: 19, lineHeight: 1.55, color: C.ink2, marginBottom: 48 }}>
            Each brand owns its own press relationships, with AplusX corporate PR sitting above as the company-level voice. Press contacts, story angles, and editorial relationships differ enough across brands that consolidating PR would weaken every brand's narrative. The principle is the same as for social: voice consistency comes from brand discipline, not from a single shared press function.
          </p>
          <div style={{ display: 'flex', gap: 32, ...mono, fontSize: 12, color: C.muted, textTransform: 'uppercase', letterSpacing: '0.1em', flexWrap: 'wrap', marginBottom: 32 }}>
            <span>Companion to <strong style={{ color: C.ink, fontWeight: 600, marginLeft: 8 }}>AplusX Brand Architecture Handbook</strong></span>
            <span>2026</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 10 }}>
            {prPrograms.map(p => (
              <a key={p.key} onClick={() => scrollTo(p.key)} style={{
                cursor: 'pointer', background: 'white', border: `1px solid ${C.faint}`, borderTop: `4px solid ${p.color}`,
                padding: '16px 18px', borderRadius: 8, textDecoration: 'none',
              }}>
                <div style={{ ...display, fontWeight: 800, fontSize: 17, color: C.ink, marginBottom: 4, letterSpacing: '-0.02em' }}>{p.label}</div>
                <div style={{ ...mono, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.muted }}>{p.cadenceLabel}</div>
              </a>
            ))}
          </div>
        </section>

        {prPrograms.map((p, i) => <PRSection key={p.key} p={p} index={i + 1} />)}

        {/* CROSS-BRAND PR RULES */}
        <section id="cross-brand-pr" style={{ padding: '88px 0', scrollMarginTop: 80 }}>
          <div style={{ ...mono, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.18em', color: C.muted, marginBottom: 18, fontWeight: 500 }}>
            07 · Cross-brand PR rules
          </div>
          <h2 style={{ ...display, fontWeight: 800, fontSize: 'clamp(32px, 4.5vw, 52px)', lineHeight: 1.0, letterSpacing: '-0.03em', color: C.ink, marginBottom: 24, maxWidth: 900 }}>
            How the press programs interact.
          </h2>
          <p style={{ maxWidth: 760, fontSize: 17, lineHeight: 1.6, color: C.ink2, marginBottom: 32 }}>
            When a story could plausibly belong to more than one brand, these rules govern who leads, who credits, and how the brands appear together in coverage.
          </p>
          <div style={{ background: C.surface2, borderLeft: `4px solid ${C.muted}`, borderRadius: 6, padding: '22px 26px' }}>
            <div style={{ ...mono, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.18em', color: C.muted, fontWeight: 500, marginBottom: 4 }}>Reminder</div>
            <div style={{ ...display, fontWeight: 700, color: C.ink, marginBottom: 14, fontSize: 16, letterSpacing: '-0.015em' }}>Cross-brand PR rules</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                "Pulsar PR may credit Pulsar eS as a sibling brand for credibility purposes — using the same 'made by the same brand whose equipment is used by professionals' framing as social",
                'Pulsar eS PR does not address mass-market press; eS press goes to professional, technical, and depth-coverage outlets',
                'Feinmann PR does not place stories in gaming media regardless of the angle',
                'AplusX corporate PR may name any of the brands; brand-level PR may name AplusX only in institutional contexts',
                "When a single story spans multiple brands (e.g., a Pulsar LAB project graduating to eS), the receiving brand's PR team leads, with credit to the other",
                'Press releases are written in the voice of the brand issuing them, never in a portfolio-wide voice (with the exception of AplusX corporate releases)',
                'Sample story angles in this playbook are starting points — adapt to the moment, but stay in the brand\'s register',
              ].map(t => (
                <li key={t} style={{ fontSize: 14, lineHeight: 1.55, color: C.ink2, paddingLeft: 16, position: 'relative', marginBottom: 8 }}>
                  <span style={{ position: 'absolute', left: 4, color: C.muted, fontWeight: 700 }}>·</span>{t}
                </li>
              ))}
            </ul>
          </div>
        </section>

      </main>

      <footer style={{ padding: '64px 28px 56px', borderTop: `1px solid ${C.faint}`, background: C.surface2 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ ...display, fontWeight: 700, fontSize: 18, color: C.ink, lineHeight: 1.4, letterSpacing: '-0.015em' }}>
            <span style={{ color: C.pulsar, fontWeight: 800 }}>AplusX</span> · PR Playbook
          </div>
          <div style={{ ...mono, fontSize: 12, color: C.muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 8 }}>
            Version 3.0 · Internal — Strategy &amp; Brand · 2026
          </div>
        </div>
      </footer>
    </div>
  );
}

function PRSection({ p, index }) {
  return (
    <section id={p.key} style={{ padding: '80px 0', borderBottom: `1px solid ${C.faint}`, scrollMarginTop: 80 }}>
      <div style={{ height: 4, width: 64, background: p.color, marginBottom: 24 }} />
      <div style={{ ...mono, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.18em', color: C.muted, marginBottom: 12, fontWeight: 500 }}>
        0{index} · {p.label} PR
      </div>
      <h2 style={{ ...display, fontWeight: 800, fontSize: 'clamp(40px, 5.5vw, 64px)', lineHeight: 0.98, letterSpacing: '-0.035em', color: C.ink, marginBottom: 16 }}>
        {p.label}
      </h2>
      <div style={{ ...display, fontWeight: 700, fontSize: 'clamp(17px, 2vw, 21px)', color: p.color, lineHeight: 1.3, marginBottom: 36, letterSpacing: '-0.015em', maxWidth: 760 }}>
        {p.tagline}
      </div>

      <PRBlock label="Cadence" color={p.color}>{p.cadence}</PRBlock>
      <PRBlock label="Sample target publications" color={C.muted}>{p.pubs}</PRBlock>
      <PRBlock label="Voice" color={C.muted}>{p.voice}</PRBlock>

      <div style={{
        background: C.surface2, borderTop: `4px solid ${p.color}`,
        padding: '28px 32px', borderRadius: 10, marginTop: 24,
      }}>
        <div style={{ ...mono, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.16em', color: p.color, marginBottom: 18, fontWeight: 600 }}>
          Sample story angles
        </div>
        <ol style={{ listStyle: 'none', padding: 0, margin: 0, counterReset: 'angle' }}>
          {p.angles.map((a, i) => (
            <li key={i} style={{
              padding: '14px 0 14px 36px',
              position: 'relative',
              borderTop: i === 0 ? 'none' : `1px solid ${C.faint}`,
            }}>
              <div style={{
                position: 'absolute', left: 0, top: i === 0 ? 0 : 14,
                ...display, fontWeight: 800, color: p.color, fontSize: 18, letterSpacing: '-0.025em',
              }}>{i + 1}.</div>
              <div style={{ ...display, fontWeight: 700, fontSize: 16.5, color: C.ink, lineHeight: 1.35, marginBottom: 4, letterSpacing: '-0.015em' }}>{a[0]}</div>
              <div style={{ ...body, fontSize: 13.5, color: C.muted, lineHeight: 1.5 }}>{a[1]}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function PRBlock({ label, color, children }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ ...mono, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em', color: C.muted, marginBottom: 8, fontWeight: 500 }}>{label}</div>
      <div style={{
        background: 'white', border: `1px solid ${C.faint}`, borderLeft: `3px solid ${color}`,
        padding: '20px 24px', borderRadius: 8,
      }}>
        <div style={{ ...body, fontSize: 14.5, lineHeight: 1.6, color: C.ink2 }}>{children}</div>
      </div>
    </div>
  );
}
