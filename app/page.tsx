'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const nav = [['Home', '/'], ['Services', '/services'], ['Model', '/model'], ['About us', '/about'], ['Contact', '/contact']]

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

function Footer() { return <footer className="footer"><div><Mark /><p>People are the gem.</p></div><div className="footer-links"><Link href="/contact">Start a conversation <ArrowUpRight size={14} /></Link><a href="mailto:hello@gentem.ai">hello@gentem.ai</a><span>© 2026 Gentem</span></div></footer> }
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

export function Model() { return <Shell><section className="page-intro model-intro"><p className="eyebrow">The convergence model</p><h1>Where humans<br /><span>and technology meet.</span></h1><p>A shared language for the work between intention and outcome.</p></section><section className="model-image"><Image src="/convergence-model.svg" alt="Convergence model showing how powder, carving, sidehits, trees, and freestyle combine around a snowboard" width={2400} height={1600} /></section><section className="model-notes"><div><p className="eyebrow">A shared language</p><h2>Good systems are<br />built in the overlap.</h2></div><p>Agentic systems are not replacements for human judgment. They are a way to make judgment more available—to encode what matters, create useful handoffs, and give teams back their attention.</p></section></Shell> }
export function About() { return <Shell><section className="about-hero"><div><p className="eyebrow">About Gentem</p><h1>We&apos;re interested<br />in <span>what&apos;s next.</span></h1><p>Gentem is a small, senior team working at the edge of strategy, design, and artificial intelligence.</p></div><div className="portrait-wrap"><Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ruiz-63zJLN1QYAaNNGIHthCAi71RJxjyQ4.jpg" alt="Gentem founder Ruiz" fill sizes="(max-width: 768px) 100vw, 45vw" /></div></section><section className="about-copy"><p className="eyebrow">The way we work</p><div><h2>Curious enough to ask better questions. Experienced enough to make them useful.</h2><p>We believe the future belongs to teams who can hold a clear point of view while staying open to new ways of working.</p><Link href="/contact" className="text-link">Meet us in the work <ArrowUpRight size={16} /></Link></div></section></Shell> }
export function Portal() { const [email, setEmail] = useState(''); const [submitted, setSubmitted] = useState(false); return <Shell><section className="portal-page"><div className="portal-mark"><Image src="/gentem-logo.svg" alt="Gentem mark" width={72} height={72} /></div><p className="eyebrow">Client portal</p><h1>Welcome back.</h1><p>Enter your email to access your workspace.</p>{submitted ? <div className="portal-message">Thanks—if you have an active workspace, we&apos;ll send an access link shortly.</div> : <form onSubmit={(e) => { e.preventDefault(); if (email) setSubmitted(true) }}><label htmlFor="portal-email">Work email</label><input id="portal-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" /><button type="submit">Continue <ArrowUpRight size={16} /></button></form>}<Link href="/contact" className="text-link">Need help? Contact Gentem <ArrowUpRight size={15} /></Link></section></Shell> }
export function Contact() { return <Shell><section className="contact-page"><div><p className="eyebrow">Start a conversation</p><h1>Let&apos;s make<br /><span>something useful.</span></h1><p className="contact-lede">Tell us what you&apos;re thinking about. We&apos;ll bring questions, not a sales deck.</p><a className="email-link" href="mailto:hello@gentem.ai">hello@gentem.ai <ArrowUpRight /></a></div><form className="contact-form" onSubmit={(e) => e.preventDefault()}><label htmlFor="name">Your name</label><input id="name" placeholder="Name" /><label htmlFor="email">Email</label><input id="email" type="email" placeholder="you@company.com" /><label htmlFor="message">What&apos;s on your mind?</label><textarea id="message" rows={5} placeholder="A little context goes a long way." /><button type="submit">Send inquiry <ArrowUpRight size={16} /></button></form></section></Shell> }
export default function Page() { const pathname = usePathname(); if (pathname === '/services') return <Services />; if (pathname === '/model') return <Model />; if (pathname === '/about') return <About />; if (pathname === '/portal') return <Portal />; if (pathname === '/contact') return <Contact />; return <Home /> }
