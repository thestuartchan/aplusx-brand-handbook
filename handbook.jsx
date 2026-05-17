import React, { useState, useEffect } from 'react';

// === COLOR PALETTE (locked, explicit) ===
const C = {
  surface: '#FAFAF7',
  surface2: '#F3F3EE',
  surface3: '#EAEAE3',
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
  check: '#2E7D32',
  cross: '#C62828',
  selective: '#F57C00',
  parent: '#424242',
};

// === TYPE STYLES ===
const display = { fontFamily: "'Poppins', system-ui, -apple-system, sans-serif" };
const body = { fontFamily: "'Poppins', system-ui, -apple-system, sans-serif" };
const mono = { fontFamily: "'JetBrains Mono', 'SF Mono', Menlo, monospace" };

// === BRAND DATA ===
const brands = {
  pulsar: {
    key: 'pulsar', name: 'pulsar', label: 'Pulsar', color: C.pulsar,
    role: 'Mass performance default',
    oneLiner: 'All performance. No posture.',
    essence: 'The default esports gear brand for gamers. Mass-market sports equipment for the mainstream, translating performance culture into language the general public can choose with confidence. Pulsar competes on fit, performance, and speed — not on RGB, futuristic styling, or spec sheets.',
    positioning: 'For mass-market gamers who want gear that performs without complexity, Pulsar is the sports equipment brand for gamers — the rational default that the most people trust for the longest time, because it is designed by the brand whose products are already in the hands of professionals at the highest level.',
    voiceSig: [
      ['Manifesto', 'Pulsar explains performance without intimidating.'],
      ['Voice', 'Clear. Confident. Practical.'],
      ['Tagline', 'Shape is King.'],
    ],
    audience: {
      primary: 'Mass-market PC gamers, 18–34, who play competitively or aspirationally but are not hardware enthusiasts. They want better gear, but they want the decision to be simple.',
      secondary: 'Crossover players moving from mobile or console to PC, first-time mechanical keyboard buyers, gift purchasers making a confident choice.',
      notFor: "Professional players (eS's audience), hardware enthusiasts who tune everything themselves, status-driven luxury buyers (Feinmann's audience).",
    },
    personality: [
      ['Direct', 'We explain things plainly. We do not hide behind technical jargon.'],
      ['Confident', 'We know what works. We do not apologize for our point of view.'],
      ['Friendly', 'We talk with users, not at them.'],
      ['Fast', 'We move quickly — in product, in content, in market response.'],
      ['Grounded', 'We earn our authority from results and craft, not from posture.'],
    ],
    tone: {
      sound: 'A trusted equipment expert who has been in the game a long time, talks to gamers as peers, and does not waste their time. Conversational but informed. Plain but precise. Confident but never arrogant. Specific over abstract.',
      never: [
        "A 'gaming' brand performing gaming aesthetics",
        'A spec sheet reading itself aloud',
        "An influencer's enthusiasm",
        'A premium or boutique brand',
        'eS (silent, distant, expert-to-expert)',
      ],
    },
    pillars: [
      {
        head: 'Shape is King',
        body: "Pulsar's range exists because gamers' hands and styles do not fit one template. This pillar carries every story about form factor variety, grip-type fit, and why we ship multiple shapes in the same series.",
        topics: [
          'Why we ship the X2H, X2V, and X2 Mini — three shapes for three grips',
          'How to choose between fingertip, palm, and claw',
          'Inside the X-series geometry: why the curve at the back matters',
        ],
      },
      {
        head: 'Made by the same hands that build for pros',
        body: "Pulsar's credibility comes from AplusX's R&D and manufacturing depth — the same engineering base that ships Pulsar eS to professional players.",
        topics: [
          'The sensor lineage — what Pulsar shares with the pro reference platform',
          'QC walk-through — how every Pulsar mouse is verified',
          'Heritage feature — the R&D base behind both Pulsar and eS',
        ],
      },
      {
        head: 'Performance you can feel',
        body: 'The differences Pulsar champions are felt in the hand, in the input, in the result on screen — not measured on a spec sheet.',
        topics: [
          'Feel-test — what changes when you swap a 60g mouse for an 80g one',
          'Grip versus shape versus weight — what matters most for your style',
          'Switch feel comparisons — beyond the spec',
        ],
      },
      {
        head: 'Always the next, always on time',
        body: 'Pulsar leads the mass market by cadence and rhythm — not by being first to invent, but by being first to ship at scale.',
        topics: [
          'What is coming this quarter — the cadence brief',
          'Variant launch — color, weight, switch swap',
          'Software update — what changed in the latest firmware',
        ],
      },
    ],
    restrictions: [
      'Never claims to be the best — Pulsar is the default, not the peak',
      "Never adopts eS's silent register — Pulsar explains",
      'Never leads with specifications — Pulsar leads with what they enable',
      'Never speaks down to mass audiences — translation, not condescension',
      'Never copies the visual language of generic gaming brands',
    ],
    crossBrandRules: [
      'Pulsar may reference Pulsar eS as proof of pro-grade credibility — always as a separate tier, never as "Pulsar\'s upper line"',
      'Pulsar may repost from the eS chain — PRO Series, Signature, and partnered-player content — selectively, reframed in Pulsar\'s voice',
      "Pulsar may reference Superglide accessories as compatible add-ons but does not act as Superglide's parent",
      'Pulsar may credit Pulsar LAB for experimental research translated into a Pulsar product, but does not market LAB outputs themselves',
      'Pulsar does not reference Feinmann publicly — the audiences do not overlap',
    ],
    contentMix: [
      { label: 'Education', desc: 'gear explainers, fit guides, software walk-throughs', pct: 40, color: '#0080FF' },
      { label: 'Product', desc: 'launches, restocks, variant reveals, retail availability', pct: 25, color: '#5BB1F7' },
      { label: 'Community', desc: 'user setups, feedback response, partner creators', pct: 20, color: '#7DC4F8' },
      { label: 'Culture', desc: 'esports moments, gaming community context', pct: 15, color: '#9FD6F9' },
    ],
  },
  'pulsar-es': {
    key: 'pulsar-es', name: 'pulsar eS', label: 'Pulsar eS', color: C.pulsarEs,
    role: 'Absolute pro standard',
    oneLiner: 'Built for the moments that matter.',
    essence: 'The absolute standard of esports equipment for professionals. Pulsar eS is not gaming gear — it is the reference. Not designed to be enjoyable, designed to avoid mistakes at the highest level of competition. eS does not explain itself; it is proven through use, tournament results, and the professional usage rate.',
    positioning: 'For professional players and the technical core of the competitive community, Pulsar eS is the equipment standard that does not fail at the most critical moments — proven through tournament use, professional usage rates, and uncompromising quality control, not through advertising.',
    voiceSig: [
      ['Manifesto', "eS doesn't sell. eS is chosen."],
      ['Voice', 'Silent. Serious. Authoritative.'],
      ['Tagline', 'Standard is King.'],
    ],
    audience: {
      primary: 'Professional esports players and the technical core of the player community — coaches, analysts, hardware-aware streamers, and competitive players who treat equipment as performance-critical infrastructure.',
      secondary: 'Tournament organizers, team management, hardware press whose reviews influence professional and core community.',
      notFor: "Mass-market gamers (Pulsar's audience), aesthetic-driven buyers, beginners, anyone for whom price is the determining variable.",
    },
    personality: [
      ['Restrained', 'eS does not chase attention.'],
      ['Precise', 'eS speaks in specifics, never in claims.'],
      ['Unhurried', 'eS releases when ready, not when scheduled.'],
      ['Confident', 'eS does not need to convince anyone. The position is earned in competition.'],
    ],
    tone: {
      sound: 'A technical reference document. Specifications stated precisely, without adjectives. Tournament results documented, not celebrated. Product reveals are minimal, often launched alongside a tournament moment in which the product is already being used.',
      never: [
        'A mass-market consumer brand',
        'A hype account — no countdowns, no teaser series',
        'A lifestyle brand — no "lifestyle" settings',
        'An influencer-led brand',
        'Pulsar — eS is not chatty, it does not translate',
      ],
    },
    pillars: [
      {
        head: 'The reference standard',
        body: 'eS is the equipment used at the highest level. The pillar carries proof points — usage rates, tournament context, professional adoption.',
        topics: [
          'Tournament usage data — which eS products were on the table at the major',
          'Professional usage rate — the number, by category, by region',
          'Why eS is the reference and not the alternative',
        ],
      },
      {
        head: 'Proven, not claimed',
        body: 'Every eS communication points to verifiable use. Specifications are stated precisely, results are documented, and claims are never made.',
        topics: [
          "QC process — what 'meeting the eS standard' actually means",
          'Tournament outcome — documenting the use, not the marketing',
          'Specification reveal — at readiness, no countdown',
        ],
      },
      {
        head: 'The player is the standard (PRO Series)',
        body: 'PRO Series is the humanization layer of eS. Each product is built around a specific pro player. The pillar carries player documentation and the connection between the player and the product.',
        topics: [
          'Documentary feature on a PRO Series player — hand, grip, play style',
          'The build process — how eS develops a PRO Series product with a specific player',
          'Why this product was built for this player',
        ],
      },
    ],
    restrictions: [
      'Never markets — eS does not run launches, countdowns, or hype cycles',
      "Never operates a 'lifestyle' content stream",
      "Never claims to be 'better than' — eS is the reference",
      'Never engages with mass-market consumer language',
      'Never participates in non-competitive collabs or pop-culture IP',
    ],
    crossBrandRules: [
      'Pulsar eS does not reference Pulsar in consumer-facing communications',
      'Pulsar eS does not reference Superglide products as tournament accessories',
      'Pulsar eS does not reference Feinmann',
      'Pulsar eS may credit Pulsar LAB when LAB research has been incorporated into an eS product — selectively, with restrained voice',
      'Pulsar eS does not participate in AplusX-level corporate messaging that would soften its standalone authority',
    ],
    contentMix: [
      { label: 'Proof', desc: 'tournament use, professional usage data, win moments', pct: 60, color: '#C62828' },
      { label: 'Product', desc: 'at readiness only; deeply specific reveals, no hype', pct: 30, color: '#D85959' },
      { label: 'Institutional', desc: 'partnership and tournament announcements', pct: 10, color: '#E48989' },
    ],
  },
  feinmann: {
    key: 'feinmann', name: 'feinmann', label: 'Feinmann', color: C.feinmann,
    role: 'Authority / luxury',
    oneLiner: 'Refined, to the touch.',
    essence: "The world's first luxury input device brand, created exclusively for the top 1%. Feinmann does not exist to sell in large volumes — scarcity is intentional strategy. Small-batch, atelier-made in Korea and Japan. The input device as a luxury object, not an electronic product.",
    positioning: "For the top 1% who furnish their environments with objects of authority, Feinmann is the world's first luxury input device — a Korean and Japanese atelier-made object that signals taste rather than performance, in a category that has never before existed at this tier.",
    voiceSig: [
      ['Manifesto', 'Feinmann never explains itself fully.'],
      ['Voice', 'Quiet. Refined. Calm. Almost intimidating.'],
      ['Posture', 'Authority over accessibility.'],
    ],
    audience: {
      primary: 'The global top 1% — executives, principals, founders, sovereign and institutional figures, high-net-worth individuals who furnish their environments with objects of taste and authority. Not bound by industry or by gaming.',
      secondary: 'Connoisseur collectors of fine objects, design-led architects and interior specifiers, luxury retail and concierge platforms.',
      notFor: 'Gamers as an identity. Performance-first audiences. Anyone for whom price is a consideration in the buying decision.',
    },
    personality: [
      ['Discreet', 'Feinmann does not perform luxury.'],
      ['Confident', 'Feinmann does not justify its price.'],
      ['Patient', 'Feinmann does not chase moments.'],
      ['Authoritative', 'Feinmann assumes the audience recognizes what it is looking at.'],
      ['Crafted', 'Rooted in the hand of the maker, not the algorithm of the market.'],
    ],
    tone: {
      sound: "A design publication's editorial. Calm, considered, complete. Sentences are short and intentional. Materials are named precisely. Numbers are minimized. The voice does not perform luxury — it assumes it.",
      never: [
        'A consumer brand making a luxury claim',
        'A tech product describing its specs',
        'A gaming brand at any volume',
        'A status-signaling brand performing exclusivity',
        'An influencer endorsement',
      ],
    },
    pillars: [
      {
        head: 'Authority as object',
        body: 'Feinmann products are objects first, input devices second. Their value is measured in tactile feel, weight, balance, proportion, completeness of detail.',
        topics: [
          'The object on the desk — composition, light, proportion',
          'Weight, balance, and the language of the hand',
          'Why the object precedes the function',
        ],
      },
      {
        head: 'Atelier method',
        body: 'Small-batch production in Korea and Japan, close to handcraftsmanship. Materials, finishing, precision — the artisanal premise is the brand.',
        topics: [
          'Inside the atelier — the people, the tools, the slowness',
          'Material study — the steel, the wood, the leather, the finish',
          'Why small-batch is the model and scale is not the goal',
        ],
      },
      {
        head: 'A new category at the table',
        body: 'Feinmann is creating a category — the luxury input device — that has not existed before. Pillar covers cultural placement, peer-tier collaboration.',
        topics: [
          'Why the input device belongs at the luxury tier',
          'Peer-tier collaboration — Feinmann × heritage maker',
          'Placement — the product in the environment of authority',
        ],
      },
    ],
    restrictions: [
      'Never appears at gaming venues, trade shows, or media',
      'Never performs luxury — no theatrics, no superlatives',
      'Never collaborates with mass IPs, streetwear, or celebrity endorsements',
      'Never compresses price — discounts and promotions do not exist',
      'Never references gaming peripherals as a category in its own copy',
    ],
    crossBrandRules: [
      'Feinmann does not publicly reference Pulsar, Pulsar eS, Superglide, or Pulsar LAB',
      'Feinmann\'s corporate parent (AplusX) is acknowledged only in regulatory or institutional contexts where required',
      'Feinmann does not share retail, trade show, or editorial venues with the gaming portfolio',
      "Feinmann's manufacturing relationship with AplusX is disclosed in technical contexts but is not part of the consumer story",
    ],
    contentMix: [
      { label: 'Object', desc: 'high-craft photography in considered environments', pct: 60, color: '#1B5E20' },
      { label: 'Process', desc: 'atelier work, materials, the people behind the craft', pct: 25, color: '#4D8550' },
      { label: 'Customer/place', desc: 'collector features, environments, editorial', pct: 15, color: '#82AB85' },
    ],
  },
  superglide: {
    key: 'superglide', name: 'superglide', label: 'Superglide', color: C.superglide,
    role: 'Accessories & culture',
    oneLiner: 'Glides. Grips. Drops.',
    essence: 'An independent accessories brand that treats input device accessories as core elements of play feel, not consumables. Works across all mice and all brands. The portfolio\'s accessories engine — designed to operate fastest, most freely, and most collaboratively in the market. Fully independent from Q3 2026.',
    positioning: 'For setup-driven players and mass-market consumers, Superglide is the independent accessories brand that changes how a setup feels and how a desk looks — designed across every input device and every brand, fluent in trend, and the first accessories brand built for the retail aisle.',
    voiceSig: [
      ['Manifesto', 'Create desire before explanations.'],
      ['Voice', 'Energetic. Expressive. Trend-aware.'],
      ['Posture', 'Speed and trend engine.'],
    ],
    audience: {
      primary: 'Light users and general consumers entering the accessories category through retail, gift, and discovery channels. Setup-driven buyers who shop on aesthetic and feel.',
      secondary: 'Existing enthusiasts, core community members, professional players who define what is hip and cool. Creators, designers, culture-adjacent buyers.',
      notFor: 'Hardware purists who reject accessories as a category — a small population. Superglide is positioned for everyone else.',
    },
    personality: [
      ['Visual', 'Superglide is seen before it is read.'],
      ['Culture-fluent', 'Superglide reads the room and reacts in days.'],
      ['Generous', 'Superglide is a platform for artists, IPs, and other brands.'],
      ['Design-led', 'Color and pattern are not afterthoughts. They are the product.'],
      ['Accessible', 'Mass-friendly, but not generic.'],
    ],
    tone: {
      sound: 'A design-led culture brand. Confident, current, visually fluent. Captions are short and punchy. Drop announcements name the collab and let the design speak.',
      never: [
        'A hardware brand specifying performance',
        'A tutorial channel — accessories are not features, they are feel',
        'A brand asking permission',
        'A subsidiary of Pulsar — Superglide is independent',
        'Generic — Superglide stops launching when it stops being distinctive',
      ],
    },
    pillars: [
      {
        head: 'Feel the difference, see the difference',
        body: 'Superglide products change how a setup feels (glide, grip, tactile) and how it looks (color, texture, statement).',
        topics: [
          'The feel-test — glass skates versus PTFE',
          'The visual moment — color, finish, statement on the desk',
          'Why this skate feels different — the material story',
        ],
      },
      {
        head: 'The drop that changes the desk',
        body: 'Superglide operates on a drop cadence — collabs, limited editions, artist features.',
        topics: [
          'Superglide × [Artist/Brand] — the collab story',
          'Drop calendar — what is coming, what is rare',
          'The drop that sold out — community reactions',
        ],
      },
      {
        head: 'Setup is culture',
        body: 'Superglide treats the desk as a cultural surface. Pillar covers setup as expression, the broader culture of personalization.',
        topics: [
          'Setup-of-the-week — user showcase',
          'Trend report — what setup culture is doing now',
          'The shift — from gear to setup, why now',
        ],
      },
    ],
    restrictions: [
      'Never frames itself as a Pulsar sub-brand or accessories afterthought',
      "Never claims tournament-grade competitive proof — that is eS's posture",
      'Never stays silent — stagnation kills Superglide more than a misstep would',
      "Never participates in 'gaming peripheral' editorial framing",
      'Never publishes content that requires hardware vocabulary to enjoy',
    ],
    crossBrandRules: [
      'Superglide may state device compatibility with Pulsar and Pulsar eS — never as a parent-product relationship',
      'Superglide may share retail and trade show presence with Pulsar after operational separation, with separate booth identity',
      "Superglide does not reference Pulsar eS as a 'tournament accessory'",
      'Superglide does not reference Feinmann',
      'Superglide may collaborate with Pulsar LAB on experimental drops, with both credited as siblings',
    ],
    contentMix: [
      { label: 'Product', desc: 'reveals, collab teases, trend reactions', pct: 40, color: '#E53935' },
      { label: 'Setup & community', desc: 'user setups, design culture', pct: 30, color: '#EB6764' },
      { label: 'Culture & collab', desc: 'partners, artists, IPs, drops', pct: 20, color: '#F09592' },
      { label: 'Education', desc: 'install, care, compatibility', pct: 10, color: '#F5C2C0' },
    ],
  },
  lab: {
    key: 'lab', name: 'pulsar LAB', label: 'Pulsar LAB', color: C.lab,
    role: 'Experiments & future',
    oneLiner: 'Ideas worth trying.',
    essence: 'The release valve. The space where ideas can emerge without first having to fit a brand. The proving ground for concepts that may become Pulsar or eS products later — or may never need to.',
    positioning: 'For early adopters, design-curious audiences, and the broader portfolio\'s internal R&D needs, Pulsar LAB is the experimental sandbox of AplusX — where ideas can be tested before they have to be products, and where the standard is "worth trying," not "ready to ship."',
    voiceSig: [
      ['Manifesto', 'Worth trying is the standard.'],
      ['Voice', 'Curious. Candid. Provisional.'],
      ['Posture', 'Honest about stage.'],
    ],
    audience: {
      primary: 'Early adopters, design-curious gamers, and community segments that follow experimentation. Internal product teams using LAB as the formal mechanism for ideation.',
      secondary: 'Press and industry observers who use LAB as a window into where AplusX is investing R&D ahead of mainstream releases.',
      notFor: "Mass-market buyers seeking the polished, supported, warranty-backed experience of Pulsar. Professional players seeking the proven, tournament-ready standard of Pulsar eS.",
    },
    personality: [
      ['Curious', 'LAB is interested before it is conclusive.'],
      ['Honest', 'LAB tells the audience exactly what stage a project is at.'],
      ['Permissive', 'LAB allows itself to be incomplete, inconsistent, occasionally wrong.'],
      ['Generative', 'LAB exists to produce ideas, not to optimize them.'],
      ['Transparent', 'LAB documents process, not just outcome.'],
    ],
    tone: {
      sound: "A research notebook with a sense of design. The voice is curious, candid, and lightly informal. We say 'we are trying' and 'we don't yet know,' and we treat that openness as a feature.",
      never: [
        "A polished consumer brand — no 'this changes everything'",
        'A spec-led hardware reveal',
        'eS — LAB has voice in abundance, eS has restraint',
        'A discount tier — LAB is experimental, not cheap',
        'A community-led brand pretending LAB is the audience\'s',
      ],
    },
    pillars: [
      {
        head: 'Worth trying',
        body: "The standard for LAB is not 'ready to ship,' it is 'worth trying.' Pillar carries the experiments — products, concepts, materials, partnerships that earn their place by asking a question.",
        topics: [
          'What we are trying this quarter — the LAB brief',
          'Concept reveal — the question being asked',
          "Field note — what we learned, what we didn't",
        ],
      },
      {
        head: 'Process is the product',
        body: 'LAB shares its work in progress. The pillar carries documentation of materials, prototypes, R&D narratives.',
        topics: [
          'Behind-the-design — materials and prototypes',
          'R&D narrative — why this approach, what alternatives we considered',
          'The build log — what changed, what stayed',
        ],
      },
      {
        head: 'From LAB to product',
        body: 'Some LAB ideas graduate to Pulsar, eS, or Feinmann. The pillar carries the case-study format — the experiment that became something, and the experiments that did not.',
        topics: [
          'From LAB to product — case study on a concept that shipped',
          "Concepts shelved — what didn't make it, why",
          'The graduation moment — when an idea earns its brand',
        ],
      },
    ],
    restrictions: [
      'Never markets LAB drops as if they were finished consumer products',
      'Never pretends LAB is open-source or community-led — LAB is authored by AplusX',
      'Never positions itself as the next big thing — LAB is the trying, not the arriving',
      'Never publishes content that disguises a LAB drop as a Pulsar or eS launch',
      "Never undercuts Pulsar's price points or operates as a discount tier",
    ],
    crossBrandRules: [
      'Pulsar LAB may credit Pulsar and Pulsar eS as siblings under AplusX, not as a sub-brand of either',
      'Pulsar LAB may share R&D narratives with both Pulsar and Pulsar eS where research crosses portfolio lines',
      'Pulsar LAB does not reference Feinmann',
      'Pulsar LAB may collaborate with Superglide on experimental drops, with both brands credited',
      "Pulsar LAB outputs that graduate to a consumer brand are re-introduced under the receiving brand's voice and rules",
    ],
    contentMix: [
      { label: 'Concept', desc: 'what is being tried, why, and what the early results look like', pct: 50, color: '#43A047' },
      { label: 'Behind-the-design', desc: 'materials, prototypes, R&D footage', pct: 30, color: '#6FBC73' },
      { label: 'Community', desc: 'beta testers, concept feedback, public reactions', pct: 20, color: '#A1D4A4' },
    ],
  },
};

// === MAIN COMPONENT ===
export default function AplusXHandbook() {
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const id = 'aplusx-fonts';
    if (!document.getElementById(id)) {
      const l = document.createElement('link');
      l.id = id; l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap';
      document.head.appendChild(l);
    }
    // Lock to light color scheme
    let meta = document.querySelector('meta[name="color-scheme"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'color-scheme';
      document.head.appendChild(meta);
    }
    meta.content = 'light';
  }, []);

  useEffect(() => {
    const handler = () => {
      const sections = ['top', 'architecture', 'cross-brand', 'voice', 'channels', 'pulsar', 'pulsar-es', 'feinmann', 'superglide', 'lab', 'crisis'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 120) {
          setActiveSection(id);
          return;
        }
      }
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div style={{ ...body, background: C.surface, color: C.ink, minHeight: '100vh', WebkitFontSmoothing: 'antialiased', colorScheme: 'light' }}>

      {/* TOPBAR */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(250, 250, 247, 0.94)',
        backdropFilter: 'saturate(180%) blur(12px)',
        WebkitBackdropFilter: 'saturate(180%) blur(12px)',
        borderBottom: `1px solid ${C.faint}`,
      }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '14px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
          <a onClick={() => scrollTo('top')} style={{ cursor: 'pointer', ...display, fontWeight: 800, fontSize: 20, letterSpacing: '-0.025em', color: C.ink, textDecoration: 'none' }}>
            AplusX
            <span style={{ ...body, fontWeight: 500, fontSize: 11, color: C.muted, letterSpacing: '0.12em', textTransform: 'uppercase', marginLeft: 14 }}>
              Brand Architecture Handbook
            </span>
          </a>
          <nav style={{ display: 'flex', gap: 18, alignItems: 'center', flexWrap: 'wrap' }}>
            {[
              ['architecture', 'Architecture'],
              ['cross-brand', 'Cross-brand'],
              ['voice', 'Voice'],
              ['channels', 'Channels'],
              ['pulsar', 'Pulsar'],
              ['pulsar-es', 'eS'],
              ['feinmann', 'Feinmann'],
              ['superglide', 'Superglide'],
              ['lab', 'LAB'],
            ].map(([id, label]) => (
              <a key={id} onClick={() => scrollTo(id)} style={{
                cursor: 'pointer', ...body, fontSize: 13,
                color: activeSection === id ? C.ink : C.muted,
                textDecoration: 'none', fontWeight: 500,
                borderBottom: activeSection === id ? `1.5px solid ${C.ink}` : '1.5px solid transparent',
                paddingBottom: 2, transition: 'color 0.15s',
              }}>{label}</a>
            ))}
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: 1240, margin: '0 auto', padding: '0 28px' }}>

        {/* HERO */}
        <section id="top" style={{ padding: '96px 0 64px', borderBottom: `1px solid ${C.faint}` }}>
          <Eyebrow>Internal — Strategy &amp; Brand · Version 3.0</Eyebrow>
          <h1 style={{ ...display, fontWeight: 900, fontSize: 'clamp(48px, 7.5vw, 100px)', lineHeight: 0.98, letterSpacing: '-0.035em', color: C.ink, marginBottom: 28, marginTop: 24 }}>
            Hi. <span style={{ color: C.pulsar }}>Welcome to AplusX.</span>
          </h1>
          <p style={{ maxWidth: 720, fontSize: 19, lineHeight: 1.55, color: C.ink2, marginBottom: 16 }}>
            We're so glad you're here. AplusX is five sibling brands under one parent, each built for an audience no single voice could serve.
          </p>
          <p style={{ maxWidth: 720, fontSize: 19, lineHeight: 1.55, color: C.ink2, marginBottom: 48 }}>
            This handbook is your guide to what each brand is, how it speaks, and how the brands work together. Take your time with it — and come back whenever you need to.
          </p>
          <div style={{ display: 'flex', gap: 32, ...mono, fontSize: 12, color: C.muted, textTransform: 'uppercase', letterSpacing: '0.1em', flexWrap: 'wrap' }}>
            <span>For <strong style={{ color: C.ink, fontWeight: 600, marginLeft: 8 }}>Marketing ops · Brand managers · Social teams</strong></span>
            <span>2026</span>
          </div>
        </section>

        {/* ARCHITECTURE */}
        <ArchitectureSection scrollTo={scrollTo} />

        {/* CROSS-BRAND */}
        <CrossBrandSection />

        {/* VOICE & TONE */}
        <VoiceToneSection />

        {/* CHANNELS & CADENCE */}
        <ChannelsSection />

        {/* PER-BRAND SECTIONS */}
        {Object.values(brands).map((b, i) => (
          <BrandSection key={b.key} b={b} index={i + 1} />
        ))}

        {/* CRISIS */}
        <CrisisSection />

      </main>

      <Footer />
    </div>
  );
}

// === COMPONENTS ===

function Eyebrow({ children }) {
  return (
    <div style={{ ...mono, fontSize: 11.5, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.16em', color: C.muted }}>
      {children}
    </div>
  );
}

function SectionEyebrow({ children }) {
  return (
    <div style={{ ...mono, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.18em', color: C.muted, marginBottom: 18, fontWeight: 500 }}>
      {children}
    </div>
  );
}

function H2({ children, color = C.ink, max = 900 }) {
  return (
    <h2 style={{ ...display, fontWeight: 800, fontSize: 'clamp(34px, 4.8vw, 58px)', lineHeight: 1.0, letterSpacing: '-0.03em', color, marginBottom: 24, maxWidth: max }}>
      {children}
    </h2>
  );
}

function H3({ children, mt = 56 }) {
  return (
    <h3 style={{ ...display, fontWeight: 700, fontSize: 26, lineHeight: 1.15, letterSpacing: '-0.02em', color: C.ink, marginBottom: 20, marginTop: mt }}>
      {children}
    </h3>
  );
}

function H4({ children, color = C.ink, mt = 28 }) {
  return (
    <h4 style={{ ...display, fontWeight: 700, fontSize: 18, color, marginBottom: 12, marginTop: mt, letterSpacing: '-0.015em' }}>
      {children}
    </h4>
  );
}

function MicroLabel({ children }) {
  return (
    <div style={{ ...mono, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em', color: C.muted, marginBottom: 12, fontWeight: 500 }}>
      {children}
    </div>
  );
}

function SectionLede({ children }) {
  return (
    <p style={{ maxWidth: 760, fontSize: 18, lineHeight: 1.6, color: C.ink2, marginBottom: 48 }}>
      {children}
    </p>
  );
}

function Callout({ children, color = C.ink }) {
  return (
    <div style={{
      borderLeft: `3px solid ${color}`, padding: '4px 0 4px 22px',
      ...display, fontWeight: 600, fontSize: 20, lineHeight: 1.35, color: C.ink,
      letterSpacing: '-0.015em', maxWidth: 760, margin: '8px 0 24px',
    }}>{children}</div>
  );
}

// === ARCHITECTURE SECTION ===

function ArchitectureSection({ scrollTo }) {
  return (
    <section id="architecture" style={{ padding: '96px 0', borderBottom: `1px solid ${C.faint}`, scrollMarginTop: 80 }}>
      <SectionEyebrow>01 · Architecture</SectionEyebrow>
      <H2>A horizontal portfolio.<br/>Operationally siblings, perceptually a chain.</H2>
      <SectionLede>
        AplusX is the parent — the manufacturing base, R&amp;D engine, and holding entity. It does not communicate to consumers. Beneath it sit five sibling brands, each with a distinct role. Three of them — Pulsar, Pulsar eS, Feinmann — form an authority and aspiration chain in the consumer mind, even though they are operationally siblings. Two — Superglide and Pulsar LAB — sit outside the chain and feed it.
      </SectionLede>

      <ArchitectureMap scrollTo={scrollTo} />

      <H3>The five brands at a glance</H3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 14 }}>
        {Object.values(brands).map((b) => (
          <a key={b.key} onClick={() => scrollTo(b.key)} style={{
            cursor: 'pointer',
            background: 'white', border: `1px solid ${C.faint}`,
            borderTop: `4px solid ${b.color}`, borderRadius: 8,
            padding: '22px 22px 24px', textDecoration: 'none',
          }}>
            <div style={{ ...display, fontWeight: 800, fontSize: 22, letterSpacing: '-0.02em', color: C.ink, marginBottom: 4 }}>{b.label}</div>
            <div style={{ ...mono, fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.14em', color: b.color, fontWeight: 500, marginBottom: 14 }}>{b.role}</div>
            <div style={{ ...body, fontSize: 14.5, lineHeight: 1.45, color: C.ink2, fontWeight: 500 }}>{b.oneLiner}</div>
          </a>
        ))}
      </div>

      <H3>The Pulsar eS internal stack</H3>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: C.ink2, marginBottom: 16 }}>
        Pulsar eS contains three internal handling tiers. All share the same technical floor — accuracy, consistency, QC, tournament proof. They differ in <strong style={{ fontWeight: 600 }}>who the product is built around</strong>: no player (eS Core), a single professional player (PRO Series), or an icon-level player whose cultural weight justifies a dedicated product (Signature).
      </p>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: C.ink2, marginBottom: 28 }}>
        Signature is currently held as an internal-only handling tier. Signature products ship publicly under the PRO Series brandmark but are tracked separately for cadence, marketing intensity, and lifecycle planning. The decision to make Signature publicly visible will be revisited at 18–24 months from this version, based on market signal.
      </p>
      <Callout color={C.pulsarEs}>
        Earn the right to complicate the architecture. Keep the consumer-facing brand simple until market data justifies added complexity.
      </Callout>

      <H3>Web architecture &amp; discovery</H3>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: C.ink2, marginBottom: 16 }}>
        The portfolio's domain strategy mirrors the architecture. <strong>pulsar.gg</strong> is the consumer entry; <strong>pulsar.gg/es</strong> and <strong>pulsar.gg/es/pro</strong> sit as shared-DNA subpaths. <strong>superglide.gg</strong> is standalone on .gg. <strong>feinmann.com</strong> sits on a different TLD to signal category separation. <strong>aplusx.com</strong> is the invisible parent — not consumer-facing.
      </p>
      <p style={{ fontSize: 17, lineHeight: 1.6, color: C.ink2 }}>
        The governing rule across the portfolio: <strong>link upstream for authority, never cross-sell</strong>. Pulsar may link to eS to surface heritage. eS does not try to sell back to Pulsar. Feinmann does not link to any of the gaming brands publicly.
      </p>
    </section>
  );
}

function ArchitectureMap({ scrollTo }) {
  const colHeader = { ...mono, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.16em', color: C.muted, textAlign: 'center', fontWeight: 600, paddingBottom: 6 };
  const yLabel = { display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center', paddingRight: 12 };
  const yLabelText = { ...mono, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.18em', color: C.ink, fontWeight: 700 };
  const emptyCell = { minHeight: 110, borderRadius: 6, border: `1px dashed ${C.faint}`, opacity: 0.55 };

  return (
    <div style={{
      background: C.surface2, borderRadius: 16,
      padding: 'clamp(20px, 3vw, 36px)',
      border: `1px solid ${C.faint}`,
      marginTop: 24, marginBottom: 12,
    }}>
      <div style={{ textAlign: 'center', marginBottom: 28 }}>
        <div style={{ ...display, fontWeight: 800, fontSize: 'clamp(20px, 2.5vw, 26px)', letterSpacing: '-0.02em', color: C.ink, marginBottom: 6 }}>
          The AplusX brand portfolio
        </div>
        <div style={{ ...body, fontSize: 13, color: C.muted, lineHeight: 1.5, maxWidth: 620, margin: '0 auto' }}>
          Plotted by audience tier and category role — the aspiration chain ascends the left; standalone brands feed inward.
        </div>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(56px, 76px) repeat(3, minmax(150px, 1fr))',
          gap: 10,
          minWidth: 540,
        }}>
          {/* Column headers */}
          <div />
          <div style={colHeader}>Hardware reference</div>
          <div style={colHeader}>Adjacent</div>
          <div style={colHeader}>Experimental</div>

          {/* LUXURY row */}
          <div style={yLabel}><div style={yLabelText}>Luxury</div></div>
          <ArchTile b={brands.feinmann} desc="Quiet. Refined. Calm." scrollTo={scrollTo} />
          <div style={emptyCell} />
          <div style={emptyCell} />

          {/* PRO row */}
          <div style={yLabel}><div style={yLabelText}>Pro</div></div>
          <ArchTile b={brands['pulsar-es']} withStack scrollTo={scrollTo} />
          <div style={emptyCell} />
          <ArchTile b={brands.lab} desc="Honest about stage." feedsChain scrollTo={scrollTo} />

          {/* MASS row */}
          <div style={yLabel}>
            <div style={yLabelText}>Mass</div>
            <div style={{ ...mono, fontSize: 13, color: C.muted, marginTop: 4, lineHeight: 1 }}>↑</div>
            <div style={{ ...mono, fontSize: 8, textTransform: 'uppercase', letterSpacing: '0.14em', color: C.muted2, fontWeight: 500, marginTop: 2 }}>aspiration</div>
          </div>
          <ArchTile b={brands.pulsar} desc="Clear. Confident. Practical." scrollTo={scrollTo} />
          <ArchTile b={brands.superglide} desc="Speed and trend engine." feedsChain scrollTo={scrollTo} />
          <div style={emptyCell} />
        </div>
      </div>

      <div style={{
        display: 'flex', justifyContent: 'center', gap: 28, flexWrap: 'wrap',
        marginTop: 24, paddingTop: 16, borderTop: `1px solid ${C.faint}`,
        ...mono, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.14em', color: C.muted,
      }}>
        <span>↑ Aspiration vector</span>
        <span>↙ Standalone brands feed the chain</span>
      </div>

      <div style={{
        background: C.ink, color: C.surface,
        padding: '14px 24px', borderRadius: 10,
        marginTop: 16, textAlign: 'center',
        ...mono, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 500,
      }}>
        AplusX · the invisible parent · the system underneath
      </div>
    </div>
  );
}

function ArchTile({ b, withStack, feedsChain, desc, scrollTo }) {
  return (
    <a onClick={() => scrollTo && scrollTo(b.key)} style={{
      cursor: 'pointer',
      background: 'white',
      border: `2px solid ${b.color}`,
      borderRadius: 8,
      padding: '14px 14px 12px',
      textDecoration: 'none',
      display: 'flex', flexDirection: 'column',
      minHeight: withStack ? 180 : 110,
    }}>
      <div style={{ ...display, fontWeight: 800, fontSize: 'clamp(15px, 1.5vw, 19px)', letterSpacing: '-0.025em', color: C.ink, marginBottom: 2 }}>
        {b.label}
      </div>
      <div style={{ ...mono, fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.14em', color: b.color, fontWeight: 700, marginBottom: 10 }}>
        {b.role}
      </div>
      {desc && (
        <div style={{ ...body, fontSize: 12, color: C.ink2, lineHeight: 1.4, fontStyle: 'italic', marginBottom: feedsChain ? 8 : 0 }}>
          {desc}
        </div>
      )}
      {withStack && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {[
            ['eS Core', 'Pure reference — no player association'],
            ['PRO Series', 'Player-built — broader audience pull'],
            ['Signature', 'Icon-driven — widest reach (internal tier)'],
          ].map(([t, d]) => (
            <div key={t} style={{
              background: C.surface2,
              borderLeft: `2px solid ${b.color}`,
              padding: '6px 9px',
              borderRadius: 3,
            }}>
              <div style={{ ...display, fontWeight: 700, fontSize: 12, color: C.ink, letterSpacing: '-0.005em' }}>{t}</div>
              <div style={{ ...body, fontSize: 10.5, color: C.ink2, lineHeight: 1.35 }}>{d}</div>
            </div>
          ))}
        </div>
      )}
      {feedsChain && (
        <div style={{
          ...mono, fontSize: 8.5, textTransform: 'uppercase', letterSpacing: '0.14em',
          color: C.muted, fontWeight: 500, marginTop: 'auto', paddingTop: 8,
        }}>
          ↙ Feeds chain
        </div>
      )}
    </a>
  );
}

// === CROSS-BRAND SECTION ===

function CrossBrandSection() {
  return (
    <section id="cross-brand" style={{ padding: '96px 0', borderBottom: `1px solid ${C.faint}`, scrollMarginTop: 80 }}>
      <SectionEyebrow>02 · Cross-brand</SectionEyebrow>
      <H2>How the brands reference and amplify each other.</H2>
      <SectionLede>
        Every cross-brand reference is a strategic decision. The matrix below codifies which brand may reference which other brand in consumer-facing communications. The reposting grids govern what each brand may amplify on its own channels — including the reach play that lets Pulsar borrow human credibility from the eS chain.
      </SectionLede>

      <H3 mt={24}>Cross-brand reference matrix</H3>
      <p style={{ fontSize: 16, lineHeight: 1.55, color: C.ink2, marginBottom: 20 }}>Read row to column: can the row brand reference the column brand, and under what conditions?</p>
      <div style={{ overflow: 'auto', background: 'white', border: `1px solid ${C.faint}`, borderRadius: 10 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5, minWidth: 700 }}>
          <thead>
            <tr>
              <ThEmpty />
              {['Pulsar', 'eS', 'Feinmann', 'Superglide', 'LAB'].map(h => <Th key={h}>{h}</Th>)}
            </tr>
          </thead>
          <tbody>
            <RefRow brand="Pulsar" color={C.pulsar} cells={[
              null,
              ['Yes', 'check', 'as separate proof source. Never as "Pulsar\'s upper line."'],
              ['No', 'cross', 'audiences do not overlap'],
              ['Yes', 'check', 'compatibility. Never as parent.'],
              ['Yes', 'check', 'credit LAB research that became a Pulsar product'],
            ]} />
            <RefRow brand="Pulsar eS" color={C.pulsarEs} cells={[
              ['No', 'cross', "eS does not address Pulsar's audience"],
              null,
              ['No', 'cross', ''],
              ['No', 'cross', 'Superglide is not a tournament accessory'],
              ['Sel.', 'sel', 'LAB research relevant to a competitive standard'],
            ]} />
            <RefRow brand="Feinmann" color={C.feinmann} cells={[
              ['No', 'cross', ''], ['No', 'cross', ''], null, ['No', 'cross', ''], ['No', 'cross', ''],
            ]} />
            <RefRow brand="Superglide" color={C.superglide} cells={[
              ['Yes', 'check', 'device compatibility'],
              ['Yes', 'check', 'eS device compatibility, with care'],
              ['No', 'cross', ''],
              null,
              ['No', 'cross', ''],
            ]} />
            <RefRow brand="Pulsar LAB" color={C.lab} cells={[
              ['Yes', 'check', 'credit as sibling'],
              ['Yes', 'check', 'credit as sibling'],
              ['No', 'cross', ''],
              ['No', 'cross', ''],
              null,
            ]} />
          </tbody>
        </table>
      </div>

      <H3>Reposting permission grids</H3>
      <p style={{ fontSize: 16, lineHeight: 1.55, color: C.ink2, marginBottom: 24 }}>Reposting is a brand-level endorsement, not a personal share. Every repost should be treated as if you were publishing the content originally.</p>

      <H4>By source type</H4>
      <div style={{ overflow: 'auto', background: 'white', border: `1px solid ${C.faint}`, borderRadius: 10 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, minWidth: 720 }}>
          <thead>
            <tr>
              <ThEmpty />
              {['Other portfolio brand', 'Partnered player', 'Partnered creator', 'User / fan', 'Collab partner', 'Press / editorial'].map(h => <Th key={h} center>{h}</Th>)}
            </tr>
          </thead>
          <tbody>
            <RepostRow brand="Pulsar" color={C.pulsar} cells={['sel', 'sel', 'yes', 'yes', 'yes', 'own']} />
            <RepostRow brand="Pulsar eS" color={C.pulsarEs} cells={['no', 'sel', 'no', 'no', 'rare', 'own']} />
            <RepostRow brand="Feinmann" color={C.feinmann} cells={['no', 'no', 'no', 'sel', 'yes', 'own']} />
            <RepostRow brand="Superglide" color={C.superglide} cells={['sel', 'na', 'yes', 'yes', 'yes', 'own']} />
            <RepostRow brand="Pulsar LAB" color={C.lab} cells={['sel', 'na', 'yes', 'yes', 'yes', 'own']} />
          </tbody>
        </table>
      </div>
      <Legend />

      <H4>Brand-to-brand</H4>
      <div style={{ overflow: 'auto', background: 'white', border: `1px solid ${C.faint}`, borderRadius: 10 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5, minWidth: 600 }}>
          <thead>
            <tr>
              <ThEmpty>Reposter ↓ / Source →</ThEmpty>
              {['Pulsar', 'eS', 'Feinmann', 'Superglide', 'LAB'].map(h => <Th key={h} center>{h}</Th>)}
            </tr>
          </thead>
          <tbody>
            <RepostRow brand="Pulsar" color={C.pulsar} cells={['dash', 'sel', 'no', 'sel', 'sel']} />
            <RepostRow brand="Pulsar eS" color={C.pulsarEs} cells={['no', 'dash', 'no', 'no', 'no']} />
            <RepostRow brand="Feinmann" color={C.feinmann} cells={['no', 'no', 'dash', 'no', 'no']} />
            <RepostRow brand="Superglide" color={C.superglide} cells={['sel', 'no', 'no', 'dash', 'sel']} />
            <RepostRow brand="Pulsar LAB" color={C.lab} cells={['sel', 'sel', 'sel', 'sel', 'dash']} />
          </tbody>
        </table>
      </div>

      <H4 mt={36}>Operational conditions the grids can't show</H4>
      <div style={{ marginTop: 16 }}>
        {[
          ['Pulsar reposting from the eS chain (the reach play)', "Pulsar may repost from Pulsar eS — especially PRO Series and Signature content, and partnered-player posts — when the content carries narrative the mass audience will respond to. The reposting brand handles the framing in Pulsar's voice: educational, accessible, never importing eS's silent register. This is the reach engine that lets Pulsar borrow human credibility from the eS chain without diluting either brand's position."],
          ['What Pulsar still does not repost from eS', "eS Core's own product reveals or technical posts — those land in eS's voice and would clash with Pulsar's register. The Pulsar repost works when the content is player-led (PRO/Signature/partnered player), not when it is brand-led (eS Core)."],
          ['Pulsar eS reposts from partnered players', 'Match-result moments and equipment-context shots only. Never lifestyle content. The repost centers the player as the subject, not the gear as the product.'],
          ["Pulsar's user reposts", 'Weekly cap recommended to prevent the feed from drifting into UGC-only content. Permission required, attribution clear.'],
          ["Feinmann's user reposts", "Only when content meets editorial standards — tasteful environment, considered photography, customer's explicit permission — and at very low frequency."],
          ['Pulsar LAB cross-brand reposts', 'LAB may repost from any brand when crediting an idea or material that has graduated from LAB to that brand. This is the one directional crossing the portfolio allows.'],
        ].map(([label, txt]) => (
          <div key={label} style={{
            background: 'white', border: `1px solid ${C.faint}`,
            borderLeft: `3px solid ${C.muted}`, borderRadius: 6,
            padding: '18px 22px', marginBottom: 10,
          }}>
            <div style={{ ...display, fontWeight: 700, fontSize: 15, color: C.ink, marginBottom: 6, letterSpacing: '-0.01em' }}>{label}</div>
            <div style={{ ...body, fontSize: 14, lineHeight: 1.55, color: C.ink2 }}>{txt}</div>
          </div>
        ))}
      </div>

      <H3>Universal reposting principles</H3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
        {[
          ['01', 'Permission first', 'Never repost without explicit permission, regardless of public-content status.'],
          ['02', 'Attribution always', 'Visible credit on the post, not buried in a thread.'],
          ['03', 'Repost in voice', "The framing copy on a repost is the brand's own voice — even when the content is someone else's."],
          ['04', 'No retroactive curation', 'A repost cannot be deleted to manage a creator falling out of favor. The original endorsement remains. Choose carefully.'],
        ].map(([n, head, txt]) => (
          <PrincipleCard key={n} num={n} head={head} body={txt} />
        ))}
      </div>

      <H3>Architectural anti-patterns — refuse these</H3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
        {[
          ['Pulsar imitating Pulsar eS', "Pulsar adopting eS's silence to feel premium, eS-grade language in mass-market copy, monochrome aesthetics to mimic eS's restraint. The brands diverge on purpose."],
          ['eS framed as Pulsar\'s upper tier', "eS is not 'Pulsar Pro,' 'Pulsar Premium,' or 'the next step up.' eS is a distinct brand with a different audience and different operating logic."],
          ['Feinmann pulled into gaming', 'No co-marketing with gaming brands. No gaming trade shows. No gaming media. Feinmann appears at design events, luxury retail, executive forums.'],
          ['LAB mistaken for product commitments', 'Every LAB output must be unambiguously identified as a LAB output. The audience must understand LAB items are experimental and may not be supported indefinitely.'],
        ].map(([head, txt]) => (
          <div key={head} style={{
            background: 'white', border: `1px solid ${C.faint}`, borderLeft: `3px solid ${C.cross}`,
            padding: '20px 22px', borderRadius: 6,
          }}>
            <div style={{ ...display, fontWeight: 700, fontSize: 16, color: C.cross, marginBottom: 8, letterSpacing: '-0.015em' }}>{head}</div>
            <div style={{ ...body, fontSize: 14, lineHeight: 1.55, color: C.ink2 }}>{txt}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ThEmpty({ children }) {
  return (
    <th style={{
      padding: '12px 16px', textAlign: 'left', borderBottom: `1px solid ${C.faint}`,
      ...mono, fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.muted, fontWeight: 500, background: C.surface2,
    }}>{children}</th>
  );
}

function Th({ children, center }) {
  return (
    <th style={{
      padding: '12px 16px', textAlign: center ? 'center' : 'left', borderBottom: `1px solid ${C.faint}`,
      ...mono, fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.muted, fontWeight: 500, background: C.surface2,
    }}>{children}</th>
  );
}

function RefRow({ brand, color, cells }) {
  return (
    <tr>
      <td style={{ padding: '14px 16px', borderBottom: `1px solid ${C.faint2}`, ...display, fontWeight: 700, color, fontSize: 14, letterSpacing: '-0.01em' }}>{brand}</td>
      {cells.map((c, i) => (
        <td key={i} style={{ padding: '14px 16px', borderBottom: `1px solid ${C.faint2}`, fontSize: 12.5, verticalAlign: 'top' }}>
          {c === null ? <span style={{ color: C.muted2 }}>—</span> : (
            <>
              <span style={{
                color: c[1] === 'check' ? C.check : c[1] === 'cross' ? C.cross : C.selective,
                fontWeight: 700,
              }}>{c[0]}</span>
              {c[2] && <> · <span style={{ color: C.ink2 }}>{c[2]}</span></>}
            </>
          )}
        </td>
      ))}
    </tr>
  );
}

function RepostRow({ brand, color, cells }) {
  const sym = {
    yes: { c: C.check, s: '✓', sz: 17 },
    no: { c: C.cross, s: '✗', sz: 17 },
    sel: { c: C.selective, s: '~', sz: 17 },
    dash: { c: '#BBBBBB', s: '—', sz: 15 },
    na: { c: C.muted2, s: 'n/a', sz: 11 },
    own: { c: C.muted2, s: 'own only', sz: 11 },
    rare: { c: C.muted2, s: 'rare', sz: 11 },
  };
  return (
    <tr>
      <td style={{ padding: '14px 16px', borderBottom: `1px solid ${C.faint2}`, ...display, fontWeight: 700, color, fontSize: 14, letterSpacing: '-0.01em', textAlign: 'right' }}>{brand}</td>
      {cells.map((c, i) => {
        const s = sym[c];
        return (
          <td key={i} style={{ padding: '14px 16px', borderBottom: `1px solid ${C.faint2}`, textAlign: 'center', verticalAlign: 'middle' }}>
            <span style={{ color: s.c, fontWeight: 700, fontSize: s.sz, fontStyle: c === 'na' || c === 'own' || c === 'rare' ? 'italic' : 'normal' }}>{s.s}</span>
          </td>
        );
      })}
    </tr>
  );
}

function Legend() {
  return (
    <div style={{ display: 'flex', gap: 22, alignItems: 'center', flexWrap: 'wrap', marginTop: 14, fontSize: 13, color: C.muted }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ color: C.check, fontWeight: 700, fontSize: 16 }}>✓</span> Allowed</span>
      <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ color: C.selective, fontWeight: 700, fontSize: 16 }}>~</span> Selective</span>
      <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ color: C.cross, fontWeight: 700, fontSize: 16 }}>✗</span> Not allowed</span>
    </div>
  );
}

function PrincipleCard({ num, head, body: txt }) {
  return (
    <div style={{ background: 'white', border: `1px solid ${C.faint}`, padding: '20px 22px', borderRadius: 8 }}>
      <div style={{ ...display, fontWeight: 700, fontSize: 22, color: C.muted, marginBottom: 6, letterSpacing: '-0.02em' }}>{num}</div>
      <div style={{ ...display, fontWeight: 700, fontSize: 17, color: C.ink, marginBottom: 6, letterSpacing: '-0.015em' }}>{head}</div>
      <div style={{ ...body, fontSize: 14, lineHeight: 1.5, color: C.ink2 }}>{txt}</div>
    </div>
  );
}

// === VOICE & TONE SECTION ===

function VoiceToneSection() {
  return (
    <section id="voice" style={{ padding: '96px 0', borderBottom: `1px solid ${C.faint}`, scrollMarginTop: 80 }}>
      <SectionEyebrow>03 · Voice &amp; tone</SectionEyebrow>
      <H2>Five voices.<br/>One spectrum.</H2>
      <SectionLede>
        The five brands sit at distinct points on a single underlying spectrum: how loudly each brand communicates, how directly it addresses its audience, and how much explanation it offers. Misreading where a brand sits on this spectrum is the most common source of cross-brand drift.
      </SectionLede>

      <H3 mt={24}>Voice signatures</H3>
      <div style={{ display: 'grid', gap: 14 }}>
        {[
          { name: 'Pulsar', role: 'Mass default', color: C.pulsar, m: 'Pulsar explains performance without intimidating.', v: 'Clear. Confident. Practical.', t: 'Shape is King.' },
          { name: 'Pulsar eS', role: 'Pro standard', color: C.pulsarEs, m: "eS doesn't sell. eS is chosen.", v: 'Silent. Serious. Authoritative.', t: 'Standard is King.' },
          { name: 'PRO Series', role: 'Internal eS tier', color: C.pulsarEs, m: 'The player is the standard.', v: 'Precise. Respectful. Documentary.', t: 'The Pro is King.' },
          { name: 'Feinmann', role: 'Luxury', color: C.feinmann, m: 'Feinmann never explains itself fully.', v: 'Quiet. Refined. Calm.', t: 'Authority over accessibility.' },
          { name: 'Superglide', role: 'Accessories', color: C.superglide, m: 'Create desire before explanations.', v: 'Energetic. Expressive. Trend-aware.', t: 'Speed and trend engine.' },
          { name: 'Pulsar LAB', role: 'Experimental', color: C.lab, m: 'Worth trying is the standard.', v: 'Curious. Candid. Provisional.', t: 'Honest about stage.' },
        ].map(s => (
          <div key={s.name} style={{
            background: 'white', border: `1px solid ${C.faint}`, borderLeft: `4px solid ${s.color}`,
            borderRadius: 8, padding: '20px 24px',
            display: 'grid', gridTemplateColumns: 'minmax(140px, 1fr) 2fr 1.4fr 1.4fr', gap: 18, alignItems: 'baseline',
          }}>
            <div>
              <div style={{ ...display, fontWeight: 800, fontSize: 18, color: C.ink, letterSpacing: '-0.02em' }}>{s.name}</div>
              <div style={{ ...mono, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.14em', color: s.color, marginTop: 4, fontWeight: 600 }}>{s.role}</div>
            </div>
            <VoiceCell label="Manifesto" value={s.m} />
            <VoiceCell label="Voice" value={s.v} />
            <VoiceCell label="Tagline / posture" value={s.t} />
          </div>
        ))}
      </div>

      <H3>Five portfolio-level principles</H3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
        {[
          ['01', 'Specific beats abstract', "A real grip difference beats 'engineered for comfort.' A real tournament result beats 'preferred by champions.' Whatever the voice, the preference is for specificity."],
          ['02', 'Performance is earned, not claimed', 'None of the brands make claims they cannot verify in product use. eS verifies in tournaments. Pulsar in community use. Superglide in feel. Feinmann in object quality. LAB in experimentation.'],
          ['03', "Voice never apologizes for the brand's position", 'Pulsar is not embarrassed to be mass-market. eS is not embarrassed to be exclusive. Feinmann is not embarrassed to be expensive. Superglide is not embarrassed to follow trends. LAB is not embarrassed to be incomplete.'],
          ['04', 'The audience is treated as capable', "Even in Pulsar's mass voice, the reader is someone who can understand. We translate, we do not condescend."],
          ['05', 'Cross-brand reference follows the matrix', 'The matrix in Section 02 is the operational rulebook. When in doubt: does this co-reference make both brands stronger, or dilute one? If dilute, refuse.'],
        ].map(([n, h, t]) => <PrincipleCard key={n} num={n} head={h} body={t} />)}
      </div>

      <H3>Naming hygiene — non-negotiable</H3>
      <div style={{ overflow: 'auto', background: 'white', border: `1px solid ${C.faint}`, borderRadius: 10 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5, minWidth: 600 }}>
          <thead>
            <tr><Th>Name</Th><Th>Correct</Th><Th>Never</Th></tr>
          </thead>
          <tbody>
            {[
              ['AplusX', 'One word. Capital A, lowercase plus, capital X.', "'A+X', 'A Plus X', 'Aplus-X'."],
              ['Pulsar', 'Capital P, one word.', "'PULSAR' in body copy."],
              ['Pulsar eS', "'Pulsar eS' — lowercase 'e', capital 'S'. Always with 'Pulsar'.", "'PulsareS', 'Pulsar ES', 'eS' standalone in headlines."],
              ['PRO Series', 'Uppercase PRO, capital S. Used as a designation within eS.', "'Pulsar PRO', 'PRO' standalone as a brand."],
              ['Feinmann', 'Capital F. One word.', "'FEINMANN' in body copy. 'FineMann.'"],
              ['Superglide', 'One word. Capital S.', "'Super Glide', 'SuperGlide'."],
              ['Pulsar LAB', "'Pulsar LAB' — LAB all caps.", "'Pulsar Lab', 'PulsarLab', 'LAB' standalone in marketing."],
            ].map(([n, c, x]) => (
              <tr key={n}>
                <td style={{ padding: '14px 16px', borderBottom: `1px solid ${C.faint2}`, ...display, fontWeight: 700, color: C.ink, fontSize: 14 }}>{n}</td>
                <td style={{ padding: '14px 16px', borderBottom: `1px solid ${C.faint2}`, color: C.ink2, fontSize: 13 }}>{c}</td>
                <td style={{ padding: '14px 16px', borderBottom: `1px solid ${C.faint2}`, color: C.ink2, fontSize: 13 }}>{x}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function VoiceCell({ label, value }) {
  return (
    <div>
      <div style={{ ...mono, fontSize: 9.5, textTransform: 'uppercase', letterSpacing: '0.14em', color: C.muted, marginBottom: 4 }}>{label}</div>
      <div style={{ ...display, fontSize: 15, color: C.ink, fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.015em' }}>{value}</div>
    </div>
  );
}

// === CHANNELS SECTION ===

function ChannelsSection() {
  return (
    <section id="channels" style={{ padding: '96px 0', borderBottom: `1px solid ${C.faint}`, scrollMarginTop: 80 }}>
      <SectionEyebrow>04 · Channels &amp; cadence</SectionEyebrow>
      <H2>How each brand shows up,<br/>at what rhythm.</H2>
      <SectionLede>
        Channel strategy is brand-specific. Some channels carry one brand at high volume and another barely at all. Cadence varies dramatically — Superglide runs 7–10+ posts a week, Feinmann 1–2 a month. The brand that posts most is not the brand that wins.
      </SectionLede>

      <H3 mt={24}>Channel role by brand</H3>
      <div style={{ overflow: 'auto', background: 'white', border: `1px solid ${C.faint}`, borderRadius: 10 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, minWidth: 720 }}>
          <thead>
            <tr><Th>Channel</Th><Th>Pulsar</Th><Th>eS</Th><Th>Feinmann</Th><Th>Superglide</Th><Th>LAB</Th></tr>
          </thead>
          <tbody>
            {[
              ['YouTube', 'Primary — long-form, education', 'Avoid on brand handle', 'Avoid', 'Secondary — collab reveals', 'Secondary — concept reveals'],
              ['Instagram', 'Primary — product, lifestyle, community', 'Low — product readiness only', 'Primary — object photography', 'Primary — drops, collabs, trends', 'Secondary — work in progress'],
              ['TikTok', 'Primary — explainers, fit guides', 'Avoid', 'Avoid', 'Primary — trend reactions, drops', 'Selective — concept teases'],
              ['X / Twitter', 'Secondary — announcements, community', 'Primary — tournament posts, results', 'Avoid', 'Secondary — drop announcements', 'Primary — concept reveals, candid'],
              ['Discord', 'Primary — community hub', 'Selective — pro-tier channels', 'Avoid', 'Primary — drop access, community', 'Primary — beta testers, feedback'],
              ['Twitch', 'Selective — sponsored streams', 'Selective — pro player streams', 'Avoid', 'Selective — drop watch parties', 'Avoid'],
            ].map(row => (
              <tr key={row[0]}>
                <td style={{ padding: '12px 16px', borderBottom: `1px solid ${C.faint2}`, ...mono, fontSize: 12, fontWeight: 600, color: C.ink }}>{row[0]}</td>
                {row.slice(1).map((cell, i) => (
                  <td key={i} style={{ padding: '12px 16px', borderBottom: `1px solid ${C.faint2}`, fontSize: 12.5, color: C.ink2 }}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H3>Cadence framework</H3>
      <div style={{ background: 'white', border: `1px solid ${C.faint}`, borderRadius: 10, padding: '24px 28px' }}>
        {[
          { name: 'Superglide', c: C.superglide, w: 100, label: 'Very high · 7–10+/wk' },
          { name: 'Pulsar', c: C.pulsar, w: 60, label: 'High · 4–5/wk' },
          { name: 'Pulsar LAB', c: C.lab, w: 35, label: 'Irregular · by reveal' },
          { name: 'Pulsar eS', c: C.pulsarEs, w: 20, label: 'Low · 1–3/mo' },
          { name: 'Feinmann', c: C.feinmann, w: 10, label: 'Very low · 1–2/mo' },
        ].map(r => (
          <div key={r.name} style={{ display: 'grid', gridTemplateColumns: '120px 1fr 110px', gap: 16, alignItems: 'center', padding: '12px 0', borderBottom: `1px solid ${C.faint2}` }}>
            <div style={{ ...display, fontWeight: 700, color: r.c, fontSize: 14, letterSpacing: '-0.015em' }}>{r.name}</div>
            <div style={{ height: 14, background: C.faint2, borderRadius: 7, overflow: 'hidden' }}>
              <div style={{ height: '100%', background: r.c, width: `${r.w}%`, borderRadius: 7 }} />
            </div>
            <div style={{ ...mono, fontSize: 11, color: C.muted, textAlign: 'right' }}>{r.label}</div>
          </div>
        ))}
      </div>

      <H3>Production quality posture by channel</H3>
      <p style={{ fontSize: 16, lineHeight: 1.55, color: C.ink2, marginBottom: 24 }}>
        Quick classification for what production effort each channel wants — a guide for planning, not a rule.
      </p>
      <div style={{ overflow: 'auto', background: 'white', border: `1px solid ${C.faint}`, borderRadius: 10 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, minWidth: 560 }}>
          <thead>
            <tr>
              <Th>Channel</Th>
              <Th>Classification</Th>
              <Th>Descriptor</Th>
            </tr>
          </thead>
          <tbody>
            {[
              ['YouTube', 'Polished', 'Long-form, edit-heavy, color-graded. The polish ceiling.'],
              ['Instagram', 'Polished', 'Composed stills and short reels, considered light, finish-aware.'],
              ['TikTok', 'Casual', 'Native cuts, single takes, on-trend audio. Visually strong but unfussed.'],
              ['X / Twitter', 'Casual', 'Text-led; image supports. Production is in the wording, not the visuals.'],
              ['Twitch', 'Casual', 'Live capture, native to platform. Production is in the setup, not post.'],
              ['Discord', 'Hyper casual', 'Real-time chat. No photography required; tone and moderation are the craft.'],
            ].map(([channel, level, desc]) => {
              const badge = level === 'Polished' ? { bg: C.ink, fg: 'white' }
                : level === 'Casual' ? { bg: C.muted, fg: 'white' }
                : { bg: C.faint, fg: C.ink2 };
              return (
                <tr key={channel}>
                  <td style={{ padding: '14px 16px', borderBottom: `1px solid ${C.faint2}`, ...display, fontWeight: 700, color: C.ink, fontSize: 14.5, letterSpacing: '-0.01em' }}>{channel}</td>
                  <td style={{ padding: '14px 16px', borderBottom: `1px solid ${C.faint2}` }}>
                    <span style={{
                      display: 'inline-block', padding: '5px 11px', borderRadius: 999,
                      ...mono, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.14em', fontWeight: 700,
                      background: badge.bg, color: badge.fg,
                    }}>{level}</span>
                  </td>
                  <td style={{ padding: '14px 16px', borderBottom: `1px solid ${C.faint2}`, color: C.ink2, fontSize: 13.5, lineHeight: 1.5 }}>{desc}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <H3>Content mix by brand</H3>
      <p style={{ fontSize: 16, lineHeight: 1.55, color: C.ink2, marginBottom: 24 }}>
        These ratios are starting points, not rigid quotas. Calibrate quarterly against audience response. <strong>Content categories are the channel-level execution of each brand's messaging pillars</strong> (see each brand's section).
      </p>
      {Object.values(brands).map(b => (
        <div key={b.key} style={{ marginBottom: 32 }}>
          <H4 color={b.color} mt={0}>{b.label} — content mix</H4>
          <ContentMixRow brand={b} />
        </div>
      ))}

      <H3>Community management — three principles</H3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
        {[
          ['01', "Match the brand's voice", 'Community responses sound like the brand. Pulsar friendly and explanatory. eS rare and considered. Feinmann private and editorial. Superglide energetic. LAB curious.'],
          ['02', 'Speed matches brand cadence', 'Pulsar responds within hours for product issues. eS responds slowly and deliberately. Feinmann responds privately first, publicly only when broader credibility is at stake.'],
          ['03', 'Negative feedback is not silenced', 'Honest criticism gets honest acknowledgement. Brands that hide complaints lose more trust than brands that respond to them.'],
        ].map(([n, h, t]) => <PrincipleCard key={n} num={n} head={h} body={t} />)}
      </div>
    </section>
  );
}

function ContentMixRow({ brand: b }) {
  // build conic-gradient string
  let acc = 0;
  const stops = b.contentMix.map(c => {
    const start = acc;
    acc += c.pct;
    return `${c.color} ${start}% ${acc}%`;
  }).join(', ');
  return (
    <div style={{ display: 'flex', gap: 32, alignItems: 'center', flexWrap: 'wrap', marginTop: 16 }}>
      <div style={{
        width: 180, height: 180, borderRadius: '50%',
        background: `conic-gradient(${stops})`,
        position: 'relative', flexShrink: 0,
      }}>
        <div style={{
          position: 'absolute', top: 30, left: 30, width: 120, height: 120, background: 'white', borderRadius: '50%',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{ ...display, fontWeight: 800, fontSize: 22, color: b.color, letterSpacing: '-0.025em' }}>{b.label}</div>
          <div style={{ ...mono, fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.muted, marginTop: 3 }}>Content mix</div>
        </div>
      </div>
      <div style={{ flex: 1, minWidth: 280 }}>
        {b.contentMix.map(c => (
          <div key={c.label} style={{ display: 'flex', alignItems: 'baseline', gap: 12, padding: '6px 0', borderBottom: `1px solid ${C.faint2}` }}>
            <div style={{ width: 10, height: 10, background: c.color, borderRadius: 2, flexShrink: 0, marginTop: 6 }} />
            <div style={{ ...mono, fontSize: 12, fontWeight: 600, color: b.color, width: 40 }}>{c.pct}%</div>
            <div style={{ flex: 1 }}>
              <div style={{ ...display, fontSize: 14, fontWeight: 700, color: C.ink, letterSpacing: '-0.01em' }}>{c.label}</div>
              <div style={{ ...body, fontSize: 13, color: C.ink2, lineHeight: 1.4 }}>{c.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// === PER-BRAND SECTION ===

function BrandSection({ b, index }) {
  const brandC = b.color;
  return (
    <section id={b.key} style={{ padding: '96px 0', borderBottom: `1px solid ${C.faint}`, scrollMarginTop: 80 }}>
      <div style={{ height: 4, width: 64, background: brandC, marginBottom: 24 }} />
      <SectionEyebrow>Brand · 0{index}</SectionEyebrow>
      <h2 style={{ ...display, fontWeight: 900, fontSize: 'clamp(56px, 8vw, 104px)', lineHeight: 0.95, letterSpacing: '-0.04em', color: C.ink, textTransform: 'lowercase', marginBottom: '0.25em' }}>
        {b.name}
      </h2>
      <div style={{ ...display, fontWeight: 700, fontSize: 'clamp(20px, 2.5vw, 26px)', color: brandC, lineHeight: 1.25, marginTop: 12, marginBottom: 28, letterSpacing: '-0.015em' }}>
        {b.oneLiner}
      </div>
      <p style={{ fontSize: 19, lineHeight: 1.5, color: C.ink2, marginBottom: 48, maxWidth: 760 }}>{b.essence}</p>

      <MicroLabel>Positioning</MicroLabel>
      <Callout color={brandC}>{b.positioning}</Callout>

      <MicroLabel>Voice signature</MicroLabel>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14, marginBottom: 40 }}>
        {b.voiceSig.map(([l, v]) => (
          <div key={l} style={{ background: 'white', border: `1px solid ${C.faint}`, borderTop: `3px solid ${brandC}`, padding: '18px 20px', borderRadius: 8 }}>
            <div style={{ ...mono, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.14em', color: C.muted, marginBottom: 6 }}>{l}</div>
            <div style={{ ...display, fontSize: 17, color: C.ink, fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.015em' }}>{v}</div>
          </div>
        ))}
      </div>

      <MicroLabel>Audience</MicroLabel>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14, marginBottom: 40 }}>
        {[['Primary', b.audience.primary], ['Secondary', b.audience.secondary], ['Not for', b.audience.notFor]].map(([h, t]) => (
          <div key={h} style={{ background: 'white', border: `1px solid ${C.faint}`, borderTop: `3px solid ${brandC}`, padding: '22px 24px', borderRadius: 8 }}>
            <div style={{ ...mono, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.14em', color: brandC, marginBottom: 12, fontWeight: 600 }}>{h}</div>
            <div style={{ ...body, fontSize: 14, lineHeight: 1.55, color: C.ink2 }}>{t}</div>
          </div>
        ))}
      </div>

      <MicroLabel>Brand personality</MicroLabel>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12, marginBottom: 40 }}>
        {b.personality.map(([t, d]) => (
          <div key={t} style={{ background: 'white', border: `1px solid ${C.faint}`, borderTop: `3px solid ${brandC}`, padding: '18px 18px 20px', borderRadius: 7 }}>
            <div style={{ ...display, fontWeight: 800, fontSize: 19, color: brandC, marginBottom: 8, letterSpacing: '-0.02em' }}>{t}</div>
            <div style={{ ...body, fontSize: 13.5, lineHeight: 1.5, color: C.ink2 }}>{d}</div>
          </div>
        ))}
      </div>

      <MicroLabel>Tone of voice</MicroLabel>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14, marginBottom: 40 }}>
        <div style={{ background: 'white', border: `1px solid ${C.faint}`, borderTop: `3px solid ${C.check}`, padding: '22px 26px', borderRadius: 8 }}>
          <div style={{ ...mono, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.14em', color: C.check, marginBottom: 14, fontWeight: 600 }}>We sound like</div>
          <p style={{ ...body, fontSize: 14, lineHeight: 1.55, color: C.ink2, margin: 0 }}>{b.tone.sound}</p>
        </div>
        <div style={{ background: 'white', border: `1px solid ${C.faint}`, borderTop: `3px solid ${C.cross}`, padding: '22px 26px', borderRadius: 8 }}>
          <div style={{ ...mono, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.14em', color: C.cross, marginBottom: 14, fontWeight: 600 }}>We never sound like</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {b.tone.never.map(t => (
              <li key={t} style={{ ...body, fontSize: 13.5, lineHeight: 1.45, color: C.ink2, paddingLeft: 14, position: 'relative', marginBottom: 7 }}>
                <span style={{ position: 'absolute', left: 0, color: C.muted, fontWeight: 700 }}>·</span>{t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <MicroLabel>Messaging pillars</MicroLabel>
      <div style={{ marginBottom: 40 }}>
        {b.pillars.map((p, i) => (
          <div key={i} style={{ display: 'flex', background: 'white', border: `1px solid ${C.faint}`, borderRadius: 8, marginBottom: 12, overflow: 'hidden' }}>
            <div style={{ background: brandC, color: 'white', padding: '22px 18px', minWidth: 78, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <div style={{ ...mono, fontSize: 9.5, textTransform: 'uppercase', letterSpacing: '0.14em', opacity: 0.85, marginBottom: 6 }}>Pillar</div>
              <div style={{ ...display, fontSize: 36, fontWeight: 900, lineHeight: 1, letterSpacing: '-0.04em' }}>{i + 1}</div>
            </div>
            <div style={{ padding: '20px 26px 22px', flex: 1 }}>
              <div style={{ ...display, fontWeight: 800, fontSize: 21, color: C.ink, marginBottom: 8, letterSpacing: '-0.02em' }}>{p.head}</div>
              <div style={{ ...body, fontSize: 14.5, lineHeight: 1.55, color: C.ink2, marginBottom: 14 }}>{p.body}</div>
              <div style={{ ...mono, fontSize: 9.5, textTransform: 'uppercase', letterSpacing: '0.14em', color: C.muted, fontWeight: 500, marginBottom: 6 }}>Sample topics</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {p.topics.map(t => (
                  <li key={t} style={{ ...body, fontSize: 13.5, lineHeight: 1.5, color: C.ink2, paddingLeft: 14, position: 'relative', marginBottom: 5 }}>
                    <span style={{ position: 'absolute', left: 0, color: brandC, fontWeight: 700 }}>→</span>{t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <MicroLabel>What {b.label} never says or does</MicroLabel>
      <div style={{ background: 'white', border: `1px solid ${C.faint}`, borderLeft: `4px solid ${C.cross}`, borderRadius: 8, padding: '24px 28px', marginBottom: 24 }}>
        <div style={{ ...mono, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em', color: C.cross, marginBottom: 14, fontWeight: 600 }}>Restrictions</div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {b.restrictions.map(t => (
            <li key={t} style={{ ...body, fontSize: 14.5, lineHeight: 1.55, color: C.ink2, paddingLeft: 22, position: 'relative', marginBottom: 8 }}>
              <span style={{ position: 'absolute', left: 0, color: C.cross, fontWeight: 700 }}>✗</span>{t}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ background: C.surface2, borderLeft: `4px solid ${C.muted}`, borderRadius: 6, padding: '20px 24px', marginBottom: 24 }}>
        <div style={{ ...mono, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.18em', color: C.muted, fontWeight: 500, marginBottom: 4 }}>Reminder</div>
        <div style={{ ...display, fontWeight: 700, color: C.ink, marginBottom: 12, fontSize: 15, letterSpacing: '-0.015em' }}>Cross-brand interaction rules</div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {b.crossBrandRules.map(t => (
            <li key={t} style={{ ...body, fontSize: 13.5, lineHeight: 1.55, color: C.ink2, paddingLeft: 14, position: 'relative', marginBottom: 6 }}>
              <span style={{ position: 'absolute', left: 4, color: C.muted, fontWeight: 700 }}>·</span>{t}
            </li>
          ))}
        </ul>
      </div>

      <div style={{
        background: C.ink, color: C.surface,
        padding: '32px 36px', borderRadius: 12,
        display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap',
      }}>
        <div style={{ ...mono, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.18em', color: brandC, fontWeight: 500 }}>One-liner</div>
        <div style={{ ...display, fontWeight: 800, fontSize: 'clamp(22px, 3vw, 30px)', lineHeight: 1.15, flex: 1, letterSpacing: '-0.025em' }}>
          {b.label} — {b.oneLiner}
        </div>
      </div>
    </section>
  );
}

// === CRISIS SECTION ===

function CrisisSection() {
  return (
    <section id="crisis" style={{ padding: '96px 0', scrollMarginTop: 80 }}>
      <SectionEyebrow>05 · Crisis &amp; issue response</SectionEyebrow>
      <H2>When something goes wrong.</H2>
      <SectionLede>Crisis response is brand-specific, but three portfolio-level principles always apply.</SectionLede>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
        {[
          ['01', 'The brand that owns the issue owns the response', 'If a Pulsar product has a defect, Pulsar responds — not AplusX, not eS. AplusX speaks only when the issue is structural to the company or affects multiple brands.'],
          ['02', 'Response speed matches brand cadence', 'Pulsar within hours for product issues. eS slowly and deliberately. Feinmann privately to affected customers first, publicly only when broader credibility is at stake.'],
          ['03', 'Acknowledgement before explanation', "Whatever the brand's voice, the response opens by acknowledging the problem. Explanation comes second. Defensive responses lose the audience."],
        ].map(([n, h, t]) => <PrincipleCard key={n} num={n} head={h} body={t} />)}
      </div>
    </section>
  );
}

// === FOOTER ===

function Footer() {
  return (
    <footer style={{ padding: '64px 28px 56px', borderTop: `1px solid ${C.faint}`, background: C.surface2 }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'end' }}>
        <div>
          <div style={{ ...display, fontWeight: 700, fontSize: 18, color: C.ink, lineHeight: 1.4, letterSpacing: '-0.015em' }}>
            <span style={{ color: C.pulsar, fontWeight: 800 }}>AplusX</span> · Brand Architecture Handbook
          </div>
          <div style={{ ...mono, fontSize: 12, color: C.muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 8 }}>
            Version 3.0 · Internal — Strategy &amp; Brand · 2026
          </div>
        </div>
      </div>
    </footer>
  );
}
