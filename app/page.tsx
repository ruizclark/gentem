'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const nav = [['Home', '/'], ['Services', '/services'], ['Model', '/model'], ['About', '/about'], ['Contact', '/contact']]

function Mark() {
  return <Image src="/gentem-logo.svg" alt="Gentem" width={120} height={54} className="brand-logo" priority />
}

function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <Link href="/" aria-label="Gentem home"><Mark /></Link>
    <nav className="desktop-nav" aria-label="Primary navigation">
      {nav.map(([label, href]) => <Link key={href} href={href} className={pathname === href ? 'active' : ''}>{label}</Link>)}
      <Link className="header-portal" href="/portal">Client portal <ArrowUpRight size={14} /></Link>
    </nav>
    <button className="mobile-menu" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    {open && <nav className="mobile-nav" aria-label="Mobile navigation">{nav.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link href="/portal" onClick={() => setOpen(false)}>Client portal <ArrowUpRight size={15} /></Link></nav>}
  </header>
}

function Footer() { return <footer className="footer"><div><Mark /><p>People are the gem.</p></div><div className="footer-links"><Link href="/contact">Start a conversation <ArrowUpRight size={14} /></Link><a href="mailto:info@gentem.us">info@gentem.us</a><span>© 2026 Gentem</span></div></footer> }
function Shell({ children }: { children: React.ReactNode }) { return <><Header /><main>{children}</main><Footer /></> }

function Gemstone() {
  return <div className="gem-stage" aria-label="An animated, faceted Gentem gemstone sculpture" role="img">
    <div className="gem-aura" />
    <div className="gem-shadow" />
    <div className="gemstone">
      <Image className="gem-logo-source" src="/gentem-logo.svg" alt="" width={520} height={520} aria-hidden="true" />
      <i className="gem-facet gem-facet-one" /><i className="gem-facet gem-facet-two" /><i className="gem-facet gem-facet-three" /><i className="gem-facet gem-facet-four" /><i className="gem-facet gem-facet-five" /><i className="gem-facet gem-facet-six" />
    </div>
    <span className="spark spark-one" /><span className="spark spark-two" /><span className="gem-caption">GENTEM / HUMAN AGENCY / 01</span>
  </div>
}

function Home() {
  return <Shell>
    <section className="hero home-hero"><div className="hero-copy"><p className="eyebrow">GENTEM</p><h1>Unlocking people&apos;s <em>agency</em> in the era of AI.</h1><p className="hero-intro">Gentem helps leaders and organizations navigate the human side of digital transformation, aligning people, strategy, and technology to achieve meaningful change.</p><Link className="circle-link" href="/contact">Start a conversation <ArrowUpRight /></Link></div><Gemstone /></section>
    <section className="agency-statement"><p className="eyebrow">The question we keep asking</p><h2>As technology becomes increasingly <span>agentic</span>, how can technological progress expand people&apos;s agency along with it?</h2><div className="statement-bottom"><p>We help organizations establish a vision for digital transformation and provide targeted support to bring that vision to life.</p><Link href="/model" className="text-link">Explore the convergence model <ArrowUpRight size={16} /></Link></div></section>
    <Principles />
  </Shell>
}

function Principles() {
  const items = [
    [
      '01',
      'People First',
      'People are the gem, not the technology. We put people before technological solutions and prioritize human agency, well-being, and safety over technological novelty.'
    ],
    [
      '02',
      'Co-Creative',
      'Digital transformation is deeply human work, and meaningful change requires collective ownership. We engage the people most impacted in shaping the solutions, activating the collective agency needed to move change forward.'
    ],
    [
      '03',
      'Agile',
      'Technology is rapidly evolving, and digital transformation is a journey, not a destination. We provide the tools and resources to experiment, learn, and iterate, helping organizations keep pace with change.'
    ]
  ]

  return (
    <section className="principles">
      <div className="section-label">The Gentem principles</div>
      <div className="principle-grid">
        {items.map(([num, title, body]) => (
          <article key={num}>
            <span className="principle-num">{num}</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export function Services() {
  return (
    <Shell>
      <section className="page-intro">
        <p className="eyebrow">What we do</p>
        <h1>
          Human-centered<br />
          <span>digital transformation.</span>
        </h1>
        <p>
          We help leaders and organizations navigate the human side of digital
          transformation, aligning people, strategy, and technology to achieve
          meaningful change.
        </p>
      </section>

      <section className="service-list">
        {[
          [
            '01',
            'Digital Transformation Strategy',
            'Establish a clear vision for digital transformation, identify strategic priorities, and develop a practical path for bringing that vision to life.'
          ],
          [
            '02',
            'Organizational Readiness',
            'Assess the people, culture, systems, structures, and capabilities needed to navigate technological change and identify where greater readiness is needed.'
          ],
          [
            '03',
            'Change & Implementation',
            'Translate strategy into action through change management, stakeholder engagement, implementation planning, and organizational alignment.'
          ],
          [
            '04',
            'Learning & Capacity Building',
            'Build the knowledge and capabilities leaders and teams need to navigate digital transformation, experiment responsibly, and adapt as technology evolves.'
          ]
        ].map(([num, title, body]) => (
          <article className="service-row" key={num}>
            <span>{num}</span>
            <h2>{title}</h2>
            <p>{body}</p>
            <ArrowUpRight />
          </article>
        ))}
      </section>

      <section className="dark-callout">
        <p className="eyebrow">The result</p>
        <h2>
          More agency.<br />
          More possibility.
        </h2>
        <Link className="button-light" href="/contact">
          Start a conversation <ArrowUpRight size={16} />
        </Link>
      </section>
    </Shell>
  )
}

export function Model() {
  const components = [
    [
      '01',
      'Adaptive Leadership',
      'Mobilizing people to navigate complex challenges for which solutions cannot simply be prescribed.'
    ],
    [
      '02',
      'Change Management',
      'Moving an organization toward a desired future state by addressing the human dimensions of change.'
    ],
    [
      '03',
      'System Coherence',
      'Aligning people, work, structures, and systems around a shared direction and desired outcomes.'
    ],
    [
      '04',
      'Organizational Ambidexterity',
      'Leveraging existing strengths while simultaneously exploring new possibilities.'
    ],
    [
      '05',
      'AI Organizational Readiness',
      'Building the collective will and capacity needed to integrate intelligent technologies across a system.'
    ],
    [
      '06',
      'Digital Transformation',
      'The convergence of human-centered change management orchestrated strategically to unlock the fullest potential of technological integration across a system.'
    ]
  ]

  return (
    <Shell>
      <section className="page-intro model-intro">
        <p className="eyebrow">The convergence model</p>

        <h1>
          Digital transformation
          <br />
          <span>is deeply human work.</span>
        </h1>

        <p>
          The Digital Leadership Convergence Model explores the human,
          organizational, and technological conditions that converge to make
          transformation possible.
        </p>
      </section>

      <section className="model-overview">
        <div className="model-visual">
          <Image
            src="/convergence-model.svg"
            alt="Digital Leadership Convergence Model showing adaptive leadership, change management, system coherence, organizational ambidexterity, AI organizational readiness, and digital transformation"
            width={2400}
            height={1600}
          />
        </div>

        <div className="model-overview-copy">
          <p className="eyebrow">The model</p>

          <h2>
            Six conditions.
            <br />
            <span className="model-accent">One vision.</span>
          </h2>

          <p>
            The model brings together human, organizational, and technological conditions needed to collectively advance a shared vision for digital transformation.
          </p>
        </div>
      </section>

      <section className="model-explore">
        <p className="section-label">Explore the model</p>

        <div className="model-component-list">
          {components.map(([num, title, body]) => (
            <details className="model-component" key={num}>
              <summary>
                <span className="model-component-number">{num}</span>
                <h2>{title}</h2>
                <span className="model-component-toggle">+</span>
              </summary>

              <div className="model-component-body">
                <p>{body}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="model-core">
        <p className="eyebrow">At the core</p>

        <h2>
          Digital transformation is the convergence of human-centered change
          management orchestrated strategically to unlock the fullest potential
          of technological integration across a system.
        </h2>
      </section>

      <section className="model-origin">
        <div>
          <p className="eyebrow">The origin</p>

          <h2>
            Developed at Harvard.
            <br />
            <span className="model-accent">Refined by Gentem.</span>
          </h2>
        </div>

        <div className="model-origin-copy">
          <p>
            The Digital Leadership Convergence Model was developed through Dr. Ruiz
            Clark&apos;s doctoral work at the Harvard Graduate School of
            Education. Originally conceived in the context of public education,
            it offers a lens for understanding complex digital transformation
            across organizations.
          </p>

          <a
            className="text-link"
            href="https://www.theconvergencemodel.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore the original Convergence Model ↗
          </a>
        </div>
      </section>
    </Shell>
  )
}

export function About() {
  return (
    <Shell>
      <section className="about-hero">
        <div>
          <p className="eyebrow">About Gentem</p>

          <h1>
            Transformation has always
            <br />
            <span>been about people.</span>
          </h1>

          <p>
            Gentem is an independent consulting practice founded by Dr. Ruiz
            Clark to help leaders and organizations navigate the human side of
            digital transformation.
          </p>
        </div>

        <div className="portrait-wrap">
          <Image
            src="/images/about/ruiz.jpg"
            alt="Ruiz Clark, founder of Gentem"
            fill
            sizes="(max-width: 760px) 100vw, 45vw"
          />
        </div>
      </section>

      <section className="about-story">
        <div>
          <p className="eyebrow">Two decades of transformation</p>

          <h2>
            Leading change across
            <br />
            people, organizations,
            <br />
            and systems.
          </h2>
        </div>

        <div className="about-story-copy">
          <p>
          Ruiz has spent two decades leading change across education systems and organizations in the United States, India, Malaysia, and Armenia, including a successful track record in executive leadership. His work has spanned building and leading teams, launching new initiatives, navigating organizations through periods of significant change, and shaping strategies for system-level transformation.
          </p>

          <p>
          Across these experiences, one lesson has remained constant: meaningful transformation depends not only on what changes, but on whether people have the agency to shape and sustain that change.
          </p>

          <div className="about-founder-links">
            <a
              className="text-link"
              href="https://www.ruizclark.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Ruiz&apos;s work ↗
            </a>

            <a
              className="text-link"
              href="https://www.linkedin.com/in/ruizclark/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>

        </div>
      </section>

      <section className="about-technical">
        <div className="about-technical-intro">
          <p className="eyebrow">Building, not just advising</p>

          <h2>
            Working at the intersection
            <br />
            of people and technology.
          </h2>

          <p>
            Ruiz&apos;s work with technology extends beyond strategy. He has
            built digital products, developed and trained AI-enabled tools, and
            worked alongside public education systems to navigate the
            opportunities and challenges created by AI.
          </p>
        </div>

        <div className="about-proof-grid">
          <article>
            <span className="about-proof-number">01</span>
            <h3>Build</h3>
            <p>
              Founded and developed VERIVOX, a digital platform designed to
              help education leaders showcase their work and discover others
              across their professional ecosystem. Previously secured funding
              from Harvard to develop and test Qüento, an AI-enabled
              qualitative data wrangler that reduced time spent on task by 96%
              during testing.
            </p>

            <a
              className="text-link"
              href="https://www.verivox.pro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore VERIVOX ↗
            </a>
          </article>

          <article>
            <span className="about-proof-number">02</span>
            <h3>Implement</h3>
            <p>
              Trained an AI-powered teacher training coach for Brookline Public
              Schools and co-authored an AI Implementation Guide for Prince
              George&apos;s County Public Schools.
            </p>
          </article>

          <article>
            <span className="about-proof-number">03</span>
            <h3>Shape</h3>
            <p>
              Served on the Massachusetts DESE AI Task Force and currently
              serves on CALIE&apos;s Effective Technology Guidelines
              Committee, engaging with emerging questions around responsible AI
              and technology use in education.
            </p>
          </article>
        </div>
      </section>

      <section className="about-convergence">
        <div>
          <p className="eyebrow">The convergence</p>

          <h2>
            Where twenty years of practice
            <br />
            met digital transformation.
          </h2>
        </div>

        <div className="about-convergence-copy">
          <p>
            Ruiz&apos;s doctoral work at the Harvard Graduate School of
            Education brought these experiences together. His work explored a
            question that now sits at the heart of Gentem: what does it take
            for organizations to navigate digital transformation while keeping
            people at the center?
          </p>

          <p>
            That work culminated in the Digital Leadership Convergence Model,
            which examines how human, organizational, and technological
            conditions come together to advance a shared vision for digital
            transformation.
          </p>

          <Link className="text-link" href="/model">
            Explore the Convergence Model <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>

      <section className="about-gentem">
        <div>
          <p className="eyebrow">Why Gentem</p>

          <h2>
            Technology is becoming more agentic.
            <br />
            <span>People should too.</span>
          </h2>
        </div>

        <div className="about-gentem-copy">
          <p>
            Gentem takes its name from the Latin <em>gentem</em>, associated
            with people and connected linguistically to words such as{' '}
            <em>gente</em>.
          </p>

          <p>
            The name reflects a question at the heart of our work: as
            technology becomes increasingly agentic, how can technological
            progress expand people&apos;s agency along with it?
          </p>

          <p>
            Gentem exists to help leaders and organizations put that question
            into practice.
          </p>
        </div>
      </section>

      <section className="about-closing">
        <p className="eyebrow">Gentem</p>

        <h2>
          Unlocking people&apos;s agency
          <br />
          <span>in the era of AI.</span>
        </h2>
      </section>
    </Shell>
  )
}

export function Portal() { const [email, setEmail] = useState(''); const [submitted, setSubmitted] = useState(false); return <Shell><section className="portal-page"><div className="portal-mark"><Image src="/gentem-logo.svg" alt="Gentem mark" width={72} height={72} /></div><p className="eyebrow">Client portal</p><h1>Welcome back.</h1><p>Enter your email to access your workspace.</p>{submitted ? <div className="portal-message">Thanks—if you have an active workspace, we&apos;ll send an access link shortly.</div> : <form onSubmit={(e) => { e.preventDefault(); if (email) setSubmitted(true) }}><label htmlFor="portal-email">Work email</label><input id="portal-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" /><button type="submit">Continue <ArrowUpRight size={16} /></button></form>}<Link href="/contact" className="text-link">Need help? Contact Gentem <ArrowUpRight size={15} /></Link></section></Shell> }

export function Contact() {
  return (
    <Shell>
      <section className="contact-page">
        <div>
          <p className="eyebrow">Start a conversation</p>

          <h1>
            Let&apos;s talk about
            <br />
            <span>human-centered change.</span>
          </h1>

          <p className="contact-lede">
            Looking for support with digital transformation? Tell us about your
            organization, the challenge you&apos;re navigating, and where you
            want to go. We&apos;ll explore how Gentem can help.
          </p>

          <a className="email-link" href="mailto:info@gentem.us">
            info@gentem.us <ArrowUpRight />
          </a>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name">Your name</label>
          <input id="name" placeholder="Name" />

          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="you@company.com" />

          <label htmlFor="message">How can we help?</label>
          <textarea
            id="message"
            rows={5}
            placeholder="Tell us a little about your organization and what you're navigating."
          />

          <button type="submit">
            Send inquiry <ArrowUpRight size={16} />
          </button>
        </form>
      </section>
    </Shell>
  )
}

export default function Page() { const pathname = usePathname(); if (pathname === '/services') return <Services />; if (pathname === '/model') return <Model />; if (pathname === '/about') return <About />; if (pathname === '/portal') return <Portal />; if (pathname === '/contact') return <Contact />; return <Home /> }
