import CallbackForm from '../components/sections/CallbackForm/CallbackForm.jsx'
import GetInTouch from '../components/sections/GetInTouch/GetInTouch.jsx'
import { contact, hasPhone, whatsappLink } from '../config/contact.js'
import SmartLink from '../components/ui/SmartLink.jsx'
import './Contact.css'

import contactCallback from '../assets/images/contact-callback.jpg'
import contactWhatsapp from '../assets/images/contact-whatsapp.jpg'
import contactEmail from '../assets/images/contact-email.jpg'
import contactLocation from '../assets/images/contact-location.jpg'
import contactSupport from '../assets/images/contact-support.jpg'

const CONTACT_CHANNELS = [
  {
    index: '01',
    title: hasPhone ? 'Speak to our consultants' : 'Request a Callback',
    detail: hasPhone ? contact.phoneDisplay : 'Request a Callback',
    href: hasPhone ? contact.phoneHref : '#request-callback',
    image: contactCallback,
  },
  {
    index: '02',
    title: 'WhatsApp',
    detail: 'Chat Now',
    href: whatsappLink,
    image: contactWhatsapp,
    target: '_blank',
    rel: 'noreferrer',
  },
  {
    index: '03',
    title: 'Email Us',
    detail: contact.email,
    href: `mailto:${contact.email}`,
    image: contactEmail,
  },
  {
    index: '04',
    title: 'Business Setup in the UAE',
    detail: contact.addressLines.join(', '),
    href: '#contact',
    image: contactLocation,
  },
  {
    index: '05',
    title: 'Round-the-Clock Support',
    detail: contact.hours,
    href: '#request-callback',
    image: contactSupport,
  },
]

/**
 * Contact Page:
 * 1. Shared page-hero band (breadcrumb, heading, intro) — same treatment as
 *    About Us and the Business Setup pages
 * 1b. Five interactive touchpoint cards on white
 * 2. Detailed CallbackForm ("Let's talk about your business")
 * 3. Interactive GetInTouch (Live Google Map & Dubai office cards)
 */
export default function Contact() {
  return (
    <div className="contactPage">
      <header className="contactHero">
        <span className="contactHero__overlay" aria-hidden="true" />
        <div className="contactHero__container">
          <div className="contactHero__head">
            <span className="contactHero__super">
              <SmartLink href="/">HOME</SmartLink> / <span>CONTACT US</span>
            </span>
            <h1 className="contactHero__title">Contact Us</h1>
            <p className="contactHero__intro">
              Whether you are starting fresh or expanding your presence, our team is here to guide you with
              expertise, clarity, and dedication. Connect with Vision Business Setup and experience a service
              built around you.
            </p>
          </div>
        </div>
      </header>

      <section className="contactChannels">
        <div className="contactChannels__container">
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
      </section>

      <main className="contactPage__content">
        {/* Full Detailed Callback Form */}
        <CallbackForm />

        {/* Interactive Google Map & Office Details */}
        <GetInTouch />
      </main>
    </div>
  )
}
