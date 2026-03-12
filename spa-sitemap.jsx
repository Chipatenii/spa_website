import { useState } from "react";

/* ─── Brand Colors ─── */
const brand = {
  white: "#ffffff",
  cream: "#faf8f5",
  gold: "#c9a96e",
  goldLight: "#f5eedd",
  teal: "#2a9d8f",
  tealLight: "#e0f5f2",
  dark: "#1a1a1a",
  muted: "#666",
};

/* ─── Service Categories ─── */
const pages = [
  {
    id: "home",
    label: "Home",
    route: "/",
    tag: "Landing",
    tagColor: brand.gold,
    desc: "Hero, value prop, service categories, social proof, booking CTA",
    children: [],
    level: 0,
  },
  {
    id: "lashes",
    label: "Lashes",
    route: "/services/lashes",
    tag: "Category",
    tagColor: "#b07d9e",
    desc: "Lash extensions, lash lifts, and lash treatments",
    level: 1,
    children: [
      { label: "Classic Lashes", route: "/services/lashes/classic" },
      { label: "Volume Lashes", route: "/services/lashes/volume" },
      { label: "Hybrid Lashes", route: "/services/lashes/hybrid" },
      { label: "Lash Lift & Tint", route: "/services/lashes/lift-tint" },
    ],
  },
  {
    id: "hair",
    label: "Hair",
    route: "/services/hair",
    tag: "Category",
    tagColor: "#8d9ec9",
    desc: "Full hair services — braids, styling, treatments",
    level: 1,
    children: [
      { label: "Braids", route: "/services/hair/braids" },
      { label: "Styling", route: "/services/hair/styling" },
      { label: "Hair Treatments", route: "/services/hair/treatments" },
    ],
  },
  {
    id: "facials",
    label: "Facials",
    route: "/services/facials",
    tag: "Category",
    tagColor: "#d4a5c7",
    desc: "Professional facial treatments for all skin types",
    level: 1,
    children: [
      { label: "Deep Cleanse Facial", route: "/services/facials/deep-cleanse" },
      { label: "Hydrating Facial", route: "/services/facials/hydrating" },
      { label: "Anti-Aging Facial", route: "/services/facials/anti-aging" },
      { label: "Chemical Peels", route: "/services/facials/chemical-peels" },
    ],
  },
  {
    id: "body-contouring",
    label: "Body Contouring",
    route: "/services/body-contouring",
    tag: "Category",
    tagColor: "#7dab9e",
    desc: "Non-invasive body sculpting and contouring treatments",
    level: 1,
    children: [
      { label: "BBL / Hip Dips", route: "/services/body-contouring/bbl-hip-dips" },
      { label: "Fat Dissolving", route: "/services/body-contouring/fat-dissolving" },
      { label: "Body Sculpting", route: "/services/body-contouring/sculpting" },
    ],
  },
  {
    id: "aesthetics",
    label: "Aesthetics",
    route: "/services/aesthetics",
    tag: "Category",
    tagColor: brand.teal,
    desc: "Advanced aesthetic procedures by CPD-accredited professionals",
    level: 1,
    children: [
      { label: "Micro Needling", route: "/services/aesthetics/micro-needling" },
      { label: "Lip Enhancement", route: "/services/aesthetics/lips" },
      { label: "Skin Rejuvenation", route: "/services/aesthetics/skin-rejuvenation" },
    ],
  },
  {
    id: "massages",
    label: "Massages",
    route: "/services/massages",
    tag: "Category",
    tagColor: "#c4a882",
    desc: "Relaxation and therapeutic massage treatments",
    level: 1,
    children: [
      { label: "Full Body Massage", route: "/services/massages/full-body" },
      { label: "Deep Tissue Massage", route: "/services/massages/deep-tissue" },
      { label: "Hot Stone Massage", route: "/services/massages/hot-stone" },
      { label: "Couples Massage", route: "/services/massages/couples" },
    ],
  },
  {
    id: "pedicure",
    label: "Pedicure",
    route: "/services/pedicure",
    tag: "Category",
    tagColor: "#e09b8a",
    desc: "Luxury pedicure services for hands and feet",
    level: 1,
    children: [
      { label: "Classic Pedicure", route: "/services/pedicure/classic" },
      { label: "Gel Pedicure", route: "/services/pedicure/gel" },
      { label: "Spa Pedicure", route: "/services/pedicure/spa" },
    ],
  },
  {
    id: "booking",
    label: "Book Now",
    route: "/booking",
    tag: "Action",
    tagColor: "#c97a6e",
    desc: "Select service → pick therapist → choose date/time → pay K50 deposit → confirmed. No DMs needed.",
    children: [],
    level: 0,
  },
  {
    id: "about",
    label: "About",
    route: "/about",
    tag: "Trust",
    tagColor: "#a0a0a0",
    desc: "Studio story, team credentials (CPD accredited), equipment, ethos",
    children: [],
    level: 0,
  },
  {
    id: "gallery",
    label: "Gallery",
    route: "/gallery",
    tag: "Trust",
    tagColor: "#a0a0a0",
    desc: "Before/afters, studio photos, work portfolio",
    children: [],
    level: 0,
  },
  {
    id: "contact",
    label: "Contact",
    route: "/contact",
    tag: "Utility",
    tagColor: "#888",
    desc: "Location, hours, phone, Instagram link, contact form",
    children: [],
    level: 0,
  },
];

/* ─── Team ─── */
const team = [
  { name: "Mrs Swoden", role: "Director / Lead Aesthetician", availability: "Tue–Fri", slots: 3, color: brand.gold },
  { name: "Lisa", role: "Therapist", availability: "Mon–Sat", slots: 5, color: brand.teal },
  { name: "—", role: "Hair Dresser", availability: "Mon–Sat", slots: 5, color: "#8d9ec9" },
  { name: "—", role: "Masseuse", availability: "Mon–Sat", slots: 5, color: "#c4a882" },
  { name: "—", role: "Lash Tech / Masseuse", availability: "Mon–Sat", slots: 5, color: "#b07d9e" },
  { name: "—", role: "Masseuse", availability: "Mon–Sat", slots: 5, color: "#c4a882" },
  { name: "—", role: "Nurse", availability: "Mon–Sat", slots: 5, color: "#e09b8a" },
  { name: "—", role: "Lash Tech", availability: "Mon–Sat", slots: 5, color: "#b07d9e" },
  { name: "Gladys", role: "Aesthetician", availability: "Mon–Sat", slots: 5, color: brand.teal },
];

/* ─── Booking Rules ─── */
const bookingRules = [
  { icon: "🕘", label: "Hours", detail: "9:00 AM – 5:00 PM (last slot at 17:00)" },
  { icon: "📅", label: "Days", detail: "Monday to Saturday (Director: Tue–Fri)" },
  { icon: "🎫", label: "Therapist Slots", detail: "5 appointments per therapist per day" },
  { icon: "👑", label: "Director Slots", detail: "3 appointments per day (Tue–Fri only)" },
  { icon: "💳", label: "Deposit", detail: "K50 non-refundable deposit to secure booking" },
];

/* ─── User Flows ─── */
const userFlows = [
  {
    title: "New client discovers via Google",
    emoji: "🔍",
    steps: [
      "Searches 'body contouring [city]' or 'lash extensions near me'",
      "Lands on a service detail page",
      "Reads treatment details + pricing",
      "Clicks Book Now → selects service & therapist",
      "Pays K50 deposit → booking confirmed",
    ],
    color: brand.gold,
  },
  {
    title: "Warm lead from Instagram",
    emoji: "📱",
    steps: [
      "Sees post / reel on Instagram",
      "Clicks link in bio → Home page",
      "Browses service categories",
      "Finds treatment of interest",
      "Books online — no DMs needed",
    ],
    color: "#b07d9e",
  },
  {
    title: "Existing client returns",
    emoji: "🔁",
    steps: [
      "Goes directly to /booking",
      "Selects known service & preferred therapist",
      "Picks available slot",
      "Pays K50 deposit → done in under 2 mins",
    ],
    color: brand.teal,
  },
];

/* ─── Total service detail pages ─── */
const totalServicePages = pages.reduce((sum, p) => sum + (p.children?.length || 0), 0);
const totalMainPages = pages.filter((p) => p.level === 0).length + pages.filter((p) => p.level === 1).length;

/* ─── Component ─── */
export default function SiteMap() {
  const [active, setActive] = useState(null);

  return (
    <div style={{
      fontFamily: "'Georgia', serif",
      background: brand.cream,
      minHeight: "100vh",
      padding: "40px 24px",
      color: brand.dark,
    }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: brand.teal, marginBottom: 8, fontWeight: 600 }}>
            Site Architecture
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 700, margin: 0, lineHeight: 1.2 }}>
            Africa Aesthetics Spa — Full Site Map
          </h1>
          <p style={{ color: brand.muted, marginTop: 10, fontSize: 14, lineHeight: 1.6 }}>
            {totalMainPages} pages · {totalServicePages} service detail pages · {team.length} team members · 3 user flows
          </p>
          <div style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
            <ColorSwatch color={brand.white} label="White (Primary)" border />
            <ColorSwatch color={brand.gold} label="Gold" />
            <ColorSwatch color={brand.teal} label="Teal" />
          </div>
        </div>

        {/* Nav Overview */}
        <div style={{ marginBottom: 48 }}>
          <SectionLabel>Navigation Structure</SectionLabel>
          <div style={{
            background: brand.white,
            border: "1px solid #e8e3db",
            borderRadius: 12,
            padding: "20px 24px",
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            alignItems: "center"
          }}>
            {["Home", "Lashes", "Hair", "Facials", "Body Contouring", "Aesthetics", "Massages", "Pedicure", "Gallery", "About", "Contact"].map((item, i) => (
              <span key={i} style={{
                padding: "6px 14px",
                background: i === 0 ? brand.dark : brand.goldLight,
                color: i === 0 ? brand.white : "#444",
                borderRadius: 20,
                fontSize: 13,
                fontFamily: "system-ui, sans-serif",
              }}>{item}</span>
            ))}
            <span style={{
              padding: "6px 18px",
              background: brand.teal,
              color: brand.white,
              borderRadius: 20,
              fontSize: 13,
              fontWeight: 600,
              fontFamily: "system-ui, sans-serif",
              marginLeft: "auto"
            }}>Book Now →</span>
          </div>
        </div>

        {/* Pages */}
        <div style={{ marginBottom: 48 }}>
          <SectionLabel>Pages & Purpose</SectionLabel>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {pages.map((page) => (
              <div
                key={page.id}
                onClick={() => setActive(active === page.id ? null : page.id)}
                style={{
                  background: brand.white,
                  border: `1px solid ${active === page.id ? page.tagColor : "#e8e3db"}`,
                  borderLeft: `4px solid ${page.tagColor}`,
                  borderRadius: 10,
                  padding: "16px 20px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                  <span style={{ fontWeight: 600, fontSize: 15, fontFamily: "system-ui, sans-serif" }}>
                    {page.label}
                  </span>
                  <span style={{
                    fontSize: 10,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                    background: page.tagColor + "22",
                    color: page.tagColor,
                    padding: "2px 8px",
                    borderRadius: 4,
                    fontFamily: "system-ui, sans-serif",
                    fontWeight: 600,
                  }}>{page.tag}</span>
                  <span style={{ fontSize: 12, color: "#aaa", fontFamily: "monospace", marginLeft: "auto" }}>
                    {page.route}
                  </span>
                </div>
                <p style={{ margin: "8px 0 0", fontSize: 13, color: brand.muted, fontFamily: "system-ui, sans-serif", lineHeight: 1.5 }}>
                  {page.desc}
                </p>

                {active === page.id && page.children?.length > 0 && (
                  <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px dashed #e8e3db" }}>
                    <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "#aaa", marginBottom: 8, fontFamily: "system-ui, sans-serif" }}>
                      Service Detail Pages
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {page.children.map((c, i) => (
                        <div key={i} style={{
                          padding: "6px 12px",
                          background: page.tagColor + "15",
                          border: `1px solid ${page.tagColor}44`,
                          borderRadius: 6,
                          fontSize: 12,
                          fontFamily: "system-ui, sans-serif",
                        }}>
                          <strong>{c.label}</strong>
                          <span style={{ color: "#aaa", marginLeft: 6 }}>{c.route}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: "#aaa", marginTop: 10, fontFamily: "system-ui, sans-serif" }}>
            ↑ Click a category page to expand its service detail pages
          </p>
        </div>

        {/* Team */}
        <div style={{ marginBottom: 48 }}>
          <SectionLabel>Team & Availability</SectionLabel>
          <div style={{
            background: brand.white,
            border: "1px solid #e8e3db",
            borderRadius: 12,
            overflow: "hidden",
          }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, fontFamily: "system-ui, sans-serif" }}>
              <thead>
                <tr style={{ background: brand.goldLight, textAlign: "left" }}>
                  <th style={{ padding: "10px 16px", fontWeight: 600, fontSize: 11, letterSpacing: 1, textTransform: "uppercase", color: "#888" }}>Name</th>
                  <th style={{ padding: "10px 16px", fontWeight: 600, fontSize: 11, letterSpacing: 1, textTransform: "uppercase", color: "#888" }}>Role</th>
                  <th style={{ padding: "10px 16px", fontWeight: 600, fontSize: 11, letterSpacing: 1, textTransform: "uppercase", color: "#888" }}>Availability</th>
                  <th style={{ padding: "10px 16px", fontWeight: 600, fontSize: 11, letterSpacing: 1, textTransform: "uppercase", color: "#888", textAlign: "center" }}>Slots/Day</th>
                </tr>
              </thead>
              <tbody>
                {team.map((member, i) => (
                  <tr key={i} style={{ borderTop: "1px solid #f0ebe3" }}>
                    <td style={{ padding: "10px 16px", fontWeight: 600 }}>{member.name}</td>
                    <td style={{ padding: "10px 16px" }}>
                      <span style={{
                        display: "inline-block",
                        width: 8,
                        height: 8,
                        borderRadius: 4,
                        background: member.color,
                        marginRight: 8,
                        verticalAlign: "middle",
                      }} />
                      {member.role}
                    </td>
                    <td style={{ padding: "10px 16px", color: brand.muted }}>{member.availability}</td>
                    <td style={{ padding: "10px 16px", textAlign: "center", fontWeight: 600, color: brand.teal }}>{member.slots}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 12, color: brand.teal, marginTop: 8, fontFamily: "system-ui, sans-serif", fontWeight: 600 }}>
            ✦ CPD Accredited Practice
          </p>
        </div>

        {/* Booking Rules */}
        <div style={{ marginBottom: 48 }}>
          <SectionLabel>Booking System Rules</SectionLabel>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 10,
          }}>
            {bookingRules.map((rule, i) => (
              <div key={i} style={{
                background: brand.white,
                border: "1px solid #e8e3db",
                borderRadius: 10,
                padding: "16px 18px",
              }}>
                <div style={{ fontSize: 20, marginBottom: 6 }}>{rule.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 4, fontFamily: "system-ui, sans-serif", color: brand.dark }}>
                  {rule.label}
                </div>
                <div style={{ fontSize: 12, color: brand.muted, fontFamily: "system-ui, sans-serif", lineHeight: 1.5 }}>
                  {rule.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User Flows */}
        <div style={{ marginBottom: 48 }}>
          <SectionLabel>User Flows</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
            {userFlows.map((flow, i) => (
              <div key={i} style={{
                background: brand.white,
                border: "1px solid #e8e3db",
                borderTop: `3px solid ${flow.color}`,
                borderRadius: 10,
                padding: 20,
              }}>
                <div style={{ fontSize: 22, marginBottom: 8 }}>{flow.emoji}</div>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 14, fontFamily: "system-ui, sans-serif", lineHeight: 1.3 }}>
                  {flow.title}
                </div>
                <ol style={{ margin: 0, paddingLeft: 18 }}>
                  {flow.steps.map((step, j) => (
                    <li key={j} style={{ fontSize: 12, color: "#555", marginBottom: 6, fontFamily: "system-ui, sans-serif", lineHeight: 1.5 }}>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Note */}
        <div style={{
          background: brand.tealLight,
          border: `1px solid ${brand.teal}33`,
          borderRadius: 10,
          padding: 20,
          fontFamily: "system-ui, sans-serif",
        }}>
          <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: brand.teal, marginBottom: 6, fontWeight: 600 }}>
            SEO Entry Points
          </div>
          <p style={{ margin: 0, fontSize: 13, color: brand.muted, lineHeight: 1.7 }}>
            Each of the <strong>{totalServicePages} service detail pages</strong> is a standalone SEO landing page targeting high-intent searches like <em>"body contouring [city]"</em> or <em>"lash extensions near me"</em>. That's {totalServicePages} Google entry points the business currently has zero of.
          </p>
        </div>

      </div>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div style={{
      fontSize: 11,
      letterSpacing: 3,
      textTransform: "uppercase",
      color: brand.teal,
      marginBottom: 14,
      fontFamily: "system-ui, sans-serif",
      fontWeight: 600,
    }}>
      {children}
    </div>
  );
}

function ColorSwatch({ color, label, border }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{
        width: 24,
        height: 24,
        borderRadius: 6,
        background: color,
        border: border ? "1px solid #ddd" : "none",
      }} />
      <span style={{ fontSize: 12, fontFamily: "system-ui, sans-serif", color: "#666" }}>{label}</span>
    </div>
  );
}
