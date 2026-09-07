import CallbackForm from '../components/sections/CallbackForm/CallbackForm.jsx'
import GetInTouch from '../components/sections/GetInTouch/GetInTouch.jsx'
import { contact, whatsappLink } from '../config/contact.js'
import './Contact.css'

import workWith01 from '../assets/images/who-we-work-with-1-clean.avif'
import workWith02 from '../assets/images/who-we-work-with-2-clean.avif'
import workWith03 from '../assets/images/who-we-work-with-3-clean.avif'
import workWith04 from '../assets/images/who-we-work-with-4-clean.avif'
import workWith05 from '../assets/images/who-we-work-with-5-clean.avif'

const CONTACT_CHANNELS = [
  {
    index: '01',
    title: 'Phone Consultation',
    detail: contact.phoneDisplay,
    href: contact.phoneHref,
    image: workWith03,
  },
  {
    index: '02',
    title: 'WhatsApp Live Chat',
    detail: 'Instant Advisory',
    href: whatsappLink,
    image: workWith02,
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    index: '03',
    title: 'Email Advisory',
    detail: contact.email,
    href: `mailto:${contact.email}`,
    image: workWith01,
  },
  {
    index: '04',
    title: 'Dubai Headquarters',
    detail: 'Al Safa 1, Sheikh Zayed Rd',
    href: '#contact',
    image: workWith05,
  },
  {
    index: '05',
    title: 'Working Schedule',
    detail: contact.hours,
    href: '#request-callback',
    image: workWith04,
  },
]

/**
 * Contact Page — Redesigned with clean executive white aesthetic matching "Who We Work With":
 * 1. Clean white hero with breadcrumb, bold heading, intro, and 5 interactive touchpoint cards
 * 2. Detailed CallbackForm ("Let's talk about your business")
 * 3. Interactive GetInTouch (Live Google Map & Dubai office cards)
 */
export default function Contact() {
  return (
    <div className="contactPage">
      <header className="contactHero">
        <div className="contactHero__container">
          <div className="contactHero__head">
            <span className="contactHero__super">
              <a href="/">HOME</a> / <span>CONTACT US</span>
            </span>
            <h1 className="contactHero__title">Get in Touch</h1>
            <p className="contactHero__intro">
              Our diverse advisory team spans multiple jurisdictions across the UAE, reflecting our ability to adapt, understand, and deliver across different business environments. Connect directly with our specialists:
            </p>
          </div>

          <ul className="contactHero__grid">
            {CONTACT_CHANNELS.map((channel) => (
              <li key={channel.index} className="contactTileItem">
                <a
                  href={channel.href}
                  className="contactTile"
                  target={channel.target}
                  rel={channel.rel}
                  title={`${channel.title} - ${channel.detail}`}
                >
                  <div className="contactTile__media">
                    <img
                      className="contactTile__img"
                      src={channel.image}
                      alt={channel.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="contactTile__body">
                    <span className="contactTile__index">{channel.index}</span>
                    <h3 className="contactTile__label">{channel.title}</h3>
                    <p className="contactTile__detail">{channel.detail}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <main className="contactPage__content">
        {/* Full Detailed Callback Form */}
        <CallbackForm />

        {/* Interactive Google Map & Office Details */}
        <GetInTouch />
      </main>
    </div>
  )
}
