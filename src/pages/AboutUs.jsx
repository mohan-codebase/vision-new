import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/ui/Icon.jsx'
import WhoWeWorkWith from '../components/sections/WhoWeWorkWith/WhoWeWorkWith.jsx'
import WhatSetsUsApart from '../components/sections/WhatSetsUsApart/WhatSetsUsApart.jsx'
import Commitment from '../components/sections/Commitment/Commitment.jsx'
import Founder from '../components/sections/Founder/Founder.jsx'
import { ourStory, coreValues, ourServices, commitment } from '../data/home.js'
import { contact, whatsappLink } from '../config/contact.js'
import PageHero from '../components/layout/PageHero/PageHero.jsx'
import imgStory from '../assets/images/our-story-advisory.jpg'
import imgHero from '../assets/images/banner-burj-khalifa.jpg'
import './AboutUs.css'

/**
 * About Us.
 *
 * Every user-facing string on this page comes from the client's own copy deck,
 * "Website Content_Vision.docx" (mirrored in `Website-Content-Vision.txt`), and
 * the sections follow that document's "About Us" order:
 *
 *   1. Hero
 *   2. Our Story
 *   3. Who We Work With
 *   4. What Sets Us Apart
 *   5. Our Core Values
 *   6. Our Commitment
 *   7. Our Founder
 *   8. Our Services  (labels from the document's navigation list)
 *   9. Request a Callback  (a required feature per "Other Requirements")
 *
 * Nothing here is written copy: no invented statistics, straplines or intros.
 */
export default function AboutUs() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget).entries())
    // eslint-disable-next-line no-console
    console.info('[AboutUs] contact submission', data)
    event.currentTarget.reset()
    setSent(true)
  }

  return (
    <main className="aboutPage">
      {/* ── 1. Hero ─────────────────────────────────────────────── */}
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
        title="About Us"
        intro="Every Business starts with Vision."
        image={imgHero}
      />

      {/* ── 2. Our Story ────────────────────────────────────────── */}
      <section className="aboutStory" id="our-story">
        <div className="aboutStory__inner">
          <div className="aboutStory__panel">
            <span className="aboutStory__badge">EST. 2015</span>
            <h2 className="aboutStory__title">{ourStory.title}</h2>
            {ourStory.paragraphs.map((p, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? 'aboutStory__lead'
                    : index === 2
                      ? 'aboutStory__quote'
                      : 'aboutStory__para'
                }
              >
                {p}
              </p>
            ))}
          </div>

          <div className="aboutStory__media">
            <img
              src={imgStory}
              alt="Vision Business Setup — established in 2015"
              className="aboutStory__image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── 3. Who We Work With ─────────────────────────────────── */}
      <WhoWeWorkWith />

      {/* ── 4. What Sets Us Apart ───────────────────────────────── */}
      <WhatSetsUsApart />

      {/* ── 5. Our Core Values ──────────────────────────────────── */}
      <section className="aboutStand">
        <header className="aboutStand__head">
          <h2 className="aboutStand__title">Our Core Values</h2>
        </header>

        <div className="aboutStand__grid">
          {coreValues.items.map((item) => (
            <article className="aboutValue" key={item.title}>
              <span className="aboutValue__num" aria-hidden="true">{item.num}</span>
              <span className="aboutValue__rule" aria-hidden="true" />
              <h3 className="aboutValue__title">{item.title}</h3>
              <p className="aboutValue__text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── 6. Our Commitment ───────────────────────────────────── */}
      <Commitment />

      {/* ── 7. Our Founder ──────────────────────────────────────── */}
      <Founder />

      {/* ── 8. Our Services ─────────────────────────────────────── */}
      <section className="aboutServices" id="services">
        <div className="aboutServices__inner">
          <header className="aboutServices__head">
            <span className="aboutServices__super">{ourServices.super || 'OUR SERVICES'}</span>
            <h2 className="aboutServices__title">
              {ourServices.title} <strong>{ourServices.accent}</strong>
            </h2>
            {ourServices.intro && <p className="aboutServices__intro">{ourServices.intro}</p>}
          </header>

          <div className="aboutServices__grid">
            {ourServices.groups.map((group, index) => (
              <article className="aboutServiceCard" key={group.title}>
                <div className="aboutServiceCard__header">
                  <span className="aboutServiceCard__icon">
                    <Icon name={group.icon} />
                  </span>
                  <span className="aboutServiceCard__index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="aboutServiceCard__title">{group.title}</h3>

                <ul className="aboutServiceCard__list">
                  {group.items.map((item) => (
                    <li className="aboutServiceCard__item" key={item}>
                      <Icon name="check" size="small" className="aboutServiceCard__check" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="aboutServiceCard__foot">
                  <a href="#request-callback" className="aboutServiceCard__cta">
                    <span>Inquire Now</span>
                    <Icon name="arrow-right" size="small" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="aboutServices__banner">
            <div className="aboutServices__bannerText">
              <span className="aboutServices__bannerSuper">OUR COMMITMENT</span>
              <h3 className="aboutServices__bannerTitle">Every Business starts with Vision.</h3>
              <p className="aboutServices__bannerDesc">
                Whether you are starting fresh or expanding your presence, our team is here to guide you with expertise, clarity, and dedication. Connect with Vision Business Setup and experience a service built around you.
              </p>
            </div>
            <div className="aboutServices__bannerActions">
              <a href="#request-callback" className="aboutServices__bannerBtn aboutServices__bannerBtn--primary">
                <span>Request a Callback</span>
                <Icon name="arrow-right" size="small" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="aboutServices__bannerBtn aboutServices__bannerBtn--secondary"
                aria-label="Chat on WhatsApp"
              >
                <Icon name="whatsapp" size="small" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. Request a Callback ───────────────────────────────── */}
      <section className="aboutContact" id="request-callback">
        <div className="aboutContact__inner">
          <div className="aboutContact__formCol">
            <h2 className="aboutContact__formTitle">Request a Callback</h2>

            {sent ? (
              <div className="aboutContact__sent" role="status">
                <Icon name="check-circle" />
                <p>{commitment.closing.lines[0]}</p>
                <button type="button" className="aboutContact__again" onClick={() => setSent(false)}>
                  Send another message
                </button>
              </div>
            ) : (
              <form className="aboutContact__form" onSubmit={handleSubmit}>
                <div className="aboutField">
                  <label htmlFor="ab-name">Name</label>
                  <input id="ab-name" name="name" type="text" placeholder="e.g. Mohammed Al Mansoori" autoComplete="name" />
                </div>
                <div className="aboutField">
                  <label htmlFor="ab-phone">Phone*</label>
                  <input id="ab-phone" name="phone" type="tel" placeholder="+971 50 000 0000" autoComplete="tel" required />
                </div>
                <div className="aboutField">
                  <label htmlFor="ab-email">Email*</label>
                  <input id="ab-email" name="email" type="email" placeholder="mohammed@example.com" autoComplete="email" required />
                </div>
                <div className="aboutField">
                  <label htmlFor="ab-message">Message</label>
                  <textarea id="ab-message" name="message" rows={4} placeholder="Tell us about your business setup requirements..." />
                </div>
                <button type="submit" className="aboutContact__submit">Request a Callback</button>
              </form>
            )}
          </div>

          <aside className="aboutContact__panel">
            <h2 className="aboutContact__panelTitle">{commitment.closing.tagline}</h2>
            <p className="aboutContact__panelText">{commitment.closing.lines[0]}</p>
            <p className="aboutContact__panelText">{commitment.closing.lines[1]}</p>
            <p className="aboutContact__panelMeta">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <span>{contact.addressLines.join(', ')}</span>
              <span>{contact.hours}</span>
            </p>
            <Link to="/contact" className="aboutContact__cta">Contact Us</Link>
          </aside>
        </div>
      </section>
    </main>
  )
}
