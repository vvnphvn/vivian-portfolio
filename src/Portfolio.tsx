// Vivian Phan — Pastel Portfolio (TypeScript + React + Tailwind)
// Replace PERSONAL INFO + arrays as needed. Works in a Vite React-TS app.

import React, { type JSX } from "react";

// ====== PERSONAL INFO ======
const NAME = "Vivian Phan" as const;
const TAGLINE = "Entry-Level Technical Support • B.Sc. in Computer Science" as const;
const LOCATION = "New Westminster, BC, Canada" as const;
const EMAIL = "tinhvanph@gmail.com" as const;
const LINKEDIN = "https://www.linkedin.com/in/vvnphvn" as const;
const GITHUB = "https://github.com/vvnphvn" as const; // can be ""
const RESUME_URL = "#" as const; // link to your PDF resume


// // ====== PASTEL PALETTE (vibrant but soft) ======
// const PASTELS = {
//   bg: "from-[#F6F4FF] via-[#FDF5F0] to-[#F0FBF6]", // hero gradient
//   card: "bg-white/80 backdrop-blur-sm border border-black/5",
//   text: "text-slate-800",
//   accent1: "#8B7AF6", // lavender
//   accent2: "#FFB3C1", // blush
//   accent3: "#6EE7B7", // mint
//   accent4: "#FDE68A", // pastel yellow
//   accent5: "#7DD3FC", // sky
// } as const;

// // ====== BLUE THEME PALETTE (vibrant but readable) ======
// const BLUES = {
//   // hero gradient (light → medium → bright blue)
//   bg: "from-[#CDF1FF] via-[#71D9FF] to-[#00ABFD]",

//   // soft white card with subtle border
//   card: "bg-white/80 backdrop-blur-sm border border-black/10",

//   // DEFAULT TEXT COLOR (dark navy so nothing is white-on-white)
//   text: "text-[#003140]",

//   // accents used for lines, dots, badges, etc.
//   accent1: "#00ABFD", 
//   accent2: "#71D9FF", 
//   accent3: "#6FA8DC", 
//   accent4: "#B6E0FE", 
//   accent5: "#8AB6FF", 

// } as const;

// // ====== PASTEL PALETTE (rose/mauve) ======
// const PINKS = {
//   // hero gradient (light → medium → bright pink)
//   bg: "from-[#FFEBEC] via-[#FFCBE2] to-[#FDA2DD]",
//   card: "bg-white/80 backdrop-blur-sm border border-black/5",
//   text: "text-slate-800",

//   // accents used for lines, dots, badges, pills, etc. (darker → lighter)
//   accent1: "#C15F9B", // rich mauve (great for lines/buttons)
//   accent2: "#D8BBC8", // dusty mauve
//   accent3: "#FDA2DD", // bright pink
//   accent4: "#FFCBE2", // light pink
//   accent5: "#FFEBEC", // very light pink
// } as const;

// ====== BLUE-PINK PALETTE (from your image) ======
const BLUEPINK = {
  // hero gradient (dark navy → steel blue → blush)
  bg: "from-[#0B1B32] via-[#83A6CE] to-[#E5C9D7]",

  // card & base text
  card: "bg-white/85 backdrop-blur-sm border border-[#0D1E4C]/10",
  text: "text-[#0B1B32]",

  // accents (rules, pills, dots, etc.)
  accent1: "#0D1E4C", // deep navy
  accent2: "#C48CB3", // mauve
  accent3: "#83A6CE", // steel blue
  accent4: "#E5C9D7", // blush
  accent5: "#26415E", // muted navy
  accent6: "#6F8DB4", // soft denim blue (lighter, harmonizes with accent3/4)
} as const;

// Reusable CTA styles
const CTA_STYLE: React.CSSProperties = {
  backgroundColor: BLUEPINK.accent5,
  color: "whitesmoke",
};
const CTA_CLASS_SM =
  "rounded-full px-3 py-1.5 text-xs font-semibold shadow hover:opacity-90 border";
const CTA_CLASS_LG =
  "rounded-full px-4 py-2 text-sm font-semibold shadow hover:opacity-90 border";

// ====== TYPES ======
type LinkItem = { label: string; href: string };
type Project = { title: string; tag: string; desc: string; links: LinkItem[] };
type Experience = {
  role: string;
  company: string;
  period: string;
  points: string[];
};
type Education = { title: string; org: string; period: string };
type Training = {
  name: string;
  status: string;
  state?: "completed" | "in-progress" | "planned";
};


// ====== DATA ======
const skills: string[] = [
  "Technical Troubleshooting",
  "Ticketing & Documentation (practice)",
  "Clear Written Communication",
  "Windows/macOS Basics",
  "Google Workspace",
  "Networking Fundamentals",
  "Basic SQL / JavaScript / Python",
  "Knowledge-Base Writing (practice)",
  "Customer Empathy & De-escalation",
];

const projects: Project[] = [
  {
    title: "Ticketing & KB Sandbox",
    tag: "Support",
    desc:
      "Practice incident flow—categorize, reproduce, resolve—and write concise KB notes (5 sample articles).",
    links: [{ label: "Notes", href: "#" }],
  },
  {
    title: "Browser / HTTP Troubleshooting Playbook",
    tag: "Guide",
    desc:
      "A one-page checklist for cache/cookies, extension isolation, HAR capture, and common HTTP status codes.",
    links: [{ label: "View", href: "#" }],
  },
  {
    title: "Retail Ops Insights (Demo SQL)",
    tag: "Data",
    desc:
      "Sample SQL queries on inventory sync and order flow with brief findings and simple charts.",
    links: [{ label: "Repo", href: "#" }],
  },
];

const experience: Experience[] = [
  {
    role: "Educator (Guest Experience & Ops)",
    company: "Lululemon",
    period: "Sep 2023 – Jul 2025",
    points: [
      "Supported 100+ guests/week across phone, email, and in-person; explained technical product details in plain language.",
      "Handled order lookups, pickup, and ship-from-store; followed procedures and flagged recurring issues.",
      "Kept concise CRM-style notes for clean handoffs (reason → action → outcome → next step).",
    ],
  },
  {
    role: "Sales Associate",
    company: "ZARA & Groupe Dynamite",
    period: "Oct 2021 – Sep 2023",
    points: [
      "Processed 70+ transactions/shift; resolved common POS issues and escalated edge cases.",
      "Reduced wait times via same-day replenishment and BOH coordination; upheld brand standards.",
    ],
  },
  {
    role: "Coding Instructor (Scratch)",
    company: "TEKY Academy",
    period: "Jan – Jul 2021",
    points: [
      "Taught fundamentals of logic and problem-solving to 80+ students (ages 5–9); provided weekly parent updates.",
    ],
  },
];

const education: Education[] = [
  {
    title: "B.Sc., Computer Science",
    org: "Simon Fraser University",
    period: "Graduated 2023",
  },
];

const training: Training[] = [
  { name: "ITIL® 4 Foundation", status: "In progress — Coursera prep", state: "in-progress" },
  { name: "Google IT Support Professional Certificate", status: "In progress — Coursera", state: "in-progress" },
  { name: "Google Cybersecurity Professional Certificate", status: "Completed — 2025", state: "completed" },
];

const STATUS_STYLES = {
  "completed":   { bg: "#10B981", label: "Status: completed" },      // green
  "in-progress": { bg: "#F59E0B", label: "Status: in progress" },    // amber
  "planned":     { bg: "#9CA3AF", label: "Status: planned" },        // gray
} as const;


// ====== SMALL UI PIECES ======
type PillProps = { children: React.ReactNode; color?: string };
const Pill: React.FC<PillProps> = ({ children, color = BLUEPINK.accent2 }) => (
  <span
    className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium shadow-sm"
    style={{ backgroundColor: color, color: "#0f172a" }}
  >
    {children}
  </span>
);

type CardProps = { children: React.ReactNode };
const Card: React.FC<CardProps> = ({ children }) => (
  <div className={`${BLUEPINK.card} rounded-2xl p-6 shadow-sm`}>{children}</div>
);

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};
const Section: React.FC<SectionProps> = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-24">
    <div className="mx-auto max-w-6xl px-5 py-14">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-inherit">
        {title}
        <span
          className="ml-3 inline-block h-1 w-20 align-middle rounded"
          style={{ background: BLUEPINK.accent6 }}
        />
      </h2>
      {children}
    </div>
  </section>
);

// ====== MAIN ======
function Portfolio(): JSX.Element {
  return (
    <div className={`min-h-screen ${BLUEPINK.text} antialiased`}>
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#top" className="font-semibold text-slate-800">
            {NAME}
          </a>
          <ul className="hidden gap-6 md:flex">
            {[
              ["About", "about"],
              ["Skills", "skills"],
              ["Projects", "projects"],
              ["Experience", "experience"],
              ["Training", "training"],
              ["Contact", "contact"],
            ].map(([label, anchor]) => (
              <li key={anchor}>
                <a
                  href={`#${anchor}`}
                  className="text-sm text-slate-600 hover:text-[#0B1B32]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={RESUME_URL}
            className={CTA_CLASS_LG}
            style={CTA_STYLE}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download résumé as PDF"
            download
          >
            Download Résumé
          </a>
        </nav>
      </header>

      {/* HERO */}
      <div id="top" className={`bg-gradient-to-br ${BLUEPINK.bg}`}>
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="mb-4 flex flex-wrap gap-2">
              <Pill color={BLUEPINK.accent2}>Open to L1 Support / Service Desk</Pill>
              <Pill color={BLUEPINK.accent3}>Remote-friendly</Pill>
              <Pill color={BLUEPINK.accent4}>Available April 2026</Pill>  
              </div>
              <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
                {NAME}
              </h1>
              <p className="mt-2 text-lg text-white/90">{TAGLINE}</p>
              <p className="mt-4 max-w-prose text-slate">
                Service-driven professional with foundations in OS, networking, and
                programming, plus three years of guest-facing experience. I value
                clear notes, timely follow-ups, and clean handoffs. Building
                skills in ticketing and knowledge-base writing to support users
                effectively.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:${EMAIL}`}
                  aria-label="Email Vivian"
                  className="rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20"
                >
                  Email
                </a>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Vivian’s LinkedIn in a new tab"
                  className="rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20"
                >
                  LinkedIn
                </a>
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Vivian’s GitHub in a new tab"
                  className="rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20"
                >
                  GitHub
                </a>

              </div>
              <p className="mt-3 text-sm text-slate">{LOCATION}</p>
            </div>
            <div className="md:justify-self-end">
              <Card>
                <div className="grid grid-cols-2 gap-3">
                  <Badge text="Calm Problem-Solver" color={BLUEPINK.accent6} />
                  <Badge text="Clear Writer" color={BLUEPINK.accent3} />
                  <Badge text="Learns Fast" color={BLUEPINK.accent2} />
                  <Badge text="Team-first" color={BLUEPINK.accent4} />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <Section id="about" title="About">
        <Card>
          <p className="text-slate-700">
            I hold a B.Sc. in Computer Science (Simon Fraser University, 2023). I’ve worked in premium apparel retail, delivering high-volume, guest-facing service and operational accuracy (Lululemon; ZARA/Groupe Dynamite), and taught beginner coding (Scratch). I’m transitioning into customer-centric IT support, completing ITIL® 4 Foundation prep and the Google IT Support Professional Certificate while I begin a seasonal Guest Services contract at Arc’teryx (Sept 2025).
          </p>
        </Card>
      </Section>

      {/* SKILLS */}
      <Section id="skills" title="Skills">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <Card key={s}>
              <span className="text-sm font-medium text-inherit">{s}</span>
            </Card>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projects">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.title}>
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-inherit">{p.title}</h3>
                <Pill>{p.tag}</Pill>
              </div>
              <p className="mb-4 text-sm text-slate-700">{p.desc}</p>
              <div className="flex flex-wrap gap-3">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className={CTA_CLASS_SM}
                    style={CTA_STYLE}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title="Experience">
        <div className="space-y-4">
          {experience.map((job) => (
            <Card key={job.company + job.role}>
              <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-inherit">
                  {job.role} — {job.company}
                </h3>
                <span className="text-sm text-slate-500">{job.period}</span>
              </div>
              <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
                {job.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* TRAINING */}
      <Section id="training" title="Training & Certifications">
        <div className="grid gap-4 md:grid-cols-2">
          {training.map((t) => {
            const s = STATUS_STYLES[t.state ?? "planned"];

            return (
              <Card key={t.name}>
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-inherit">{t.name}</h4>
                    <p className="text-sm text-slate-700">{t.status}</p>
                  </div>
                  <span
                    className="ml-4 inline-block h-3 w-3 rounded-full"
                    style={{ background: s.bg }}
                    role="img"
                    aria-label={s.label}
                  />
                </div>
              </Card>
            );
          })}
        </div>
      </Section>


      {/* EDUCATION */}
      <Section id="education" title="Education">
        <div className="grid gap-4 md:grid-cols-2">
          {education.map((e) => (
            <Card key={e.title}>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-inherit">{e.title}</h4>
                  <p className="text-sm text-slate-700">{e.org}</p>
                </div>
                <span className="text-sm text-slate-500">{e.period}</span>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact">
        <Card>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <a href={`mailto:${EMAIL}`} className="underline-offset-2 hover:underline">
              {EMAIL}
            </a>
            <span className="text-slate-400">•</span>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <span className="text-slate-400">•</span>
            {GITHUB && (
              <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
          </div>
        </Card>
      </Section>

      <footer className="mx-auto max-w-6xl px-5 pb-10 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {NAME}
      </footer>
    </div>
  );
}

type BadgeProps = { text: string; color: string };
function Badge({ text, color }: BadgeProps): JSX.Element {
  return (
    <div
      className="rounded-xl px-3 py-2 text-center text-sm font-semibold"
      style={{ backgroundColor: color, color: "#0f172a" }}
      aria-label={text}
    >
      {text}
    </div>
  );
}

export default Portfolio