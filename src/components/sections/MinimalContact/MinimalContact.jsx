import { useState } from 'react'
import { contact, hasPhone, whatsappLink } from '../../../config/contact.js'
import Icon from '../../ui/Icon.jsx'
import './MinimalContact.css'

/**
 * MinimalContact — Sleek, high-converting minimal callback form for the Home page.
 * Replaces the heavy two-section combination (CallbackForm + GetInTouch).
 * Full form and interactive map are located on `/contact`.
 */
export default function MinimalContact() {
  const [status, setStatus] = useState('idle') // idle | success
  const [phone, setPhone] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())
    // eslint-disable-next-line no-console
    console.info('[MinimalContact] submission', data)
    setPhone(data.phone || '')
    form.reset()
    setStatus('success')
  }

  return (
    <section className="minimalContact" id="request-callback">
      <div className="minimalContact__container">
        <div className="minimalContact__card">
          <header className="minimalContact__header">
            <span className="minimalContact__super">FAST-TRACK CONSULTATION</span>
            <h2 className="minimalContact__title">Request a Quick Callback</h2>
            <p className="minimalContact__desc">
              Speak directly with a UAE corporate formation specialist. We typically call you back within 15 minutes during business hours.
            </p>
          </header>

          {status === 'success' ? (
            <div className="minimalContact__success" role="status">
              <div className="minimalContact__successIcon">
                <Icon name="check" />
              </div>
              <div className="minimalContact__successBody">
                <h3 className="minimalContact__successTitle">Callback Request Received</h3>
                <p className="minimalContact__successText">
                  Thank you. A Vision Business Setup advisor will call you {phone ? `at ${phone}` : 'shortly'}. For immediate assistance, feel free to contact us on{' '}
                  {hasPhone ? (
                    <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
                  ) : (
                    <a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp</a>
                  )}.
                </p>
                <button
                  type="button"
                  className="minimalContact__successAgain"
                  onClick={() => setStatus('idle')}
                >
                  Send another request
                </button>
              </div>
            </div>
          ) : (
            <form className="minimalContact__form" onSubmit={handleSubmit} noValidate>
              <div className="minimalContact__field">
                <label htmlFor="min-fullname" className="minimalContact__label">Full Name *</label>
                <input
                  id="min-fullname"
                  name="fullname"
                  type="text"
                  placeholder="e.g. John Doe"
                  autoComplete="name"
                  required
                  className="minimalContact__input"
                />
              </div>

              <div className="minimalContact__field">
                <label htmlFor="min-phone" className="minimalContact__label">Phone / WhatsApp *</label>
                <input
                  id="min-phone"
                  name="phone"
                  type="tel"
                  placeholder="+971 50 000 0000"
                  autoComplete="tel"
                  required
                  className="minimalContact__input"
                />
              </div>

              <div className="minimalContact__field">
                <label htmlFor="min-service" className="minimalContact__label">Service Required</label>
                <select id="min-service" name="service" defaultValue="" className="minimalContact__select">
                  <option value="" disabled>Select Setup Service</option>
                  <option value="mainland">UAE Mainland Formation</option>
                  <option value="freezone">UAE Free Zone License</option>
                  <option value="offshore">UAE Offshore Company</option>
                  <option value="golden-visa">Residence &amp; Golden Visa</option>
                  <option value="bank-account">Corporate Bank Account</option>
                  <option value="tax-accounting">Corporate Tax &amp; Bookkeeping</option>
                  <option value="other">Other Inquiries</option>
                </select>
              </div>

              <div className="minimalContact__submitWrap">
                <button type="submit" className="minimalContact__submitBtn">
                  <span>Request Callback</span>
                  <Icon name="arrow-right" size="small" />
                </button>
              </div>
            </form>
          )}

          {/* Trust badges & link to full contact page */}
          <div className="minimalContact__footer">
            <div className="minimalContact__trustList">
              <span className="minimalContact__trustItem">
                <Icon name="check" size="small" /> No-obligation consultation
              </span>
              <span className="minimalContact__trustItem">
                <Icon name="check" size="small" /> 100% Confidential
              </span>
              <span className="minimalContact__trustItem">
                <Icon name="check" size="small" /> Mainland, Free Zone &amp; Offshore
              </span>
            </div>

            <div className="minimalContact__pageLink">
              <span>Need our office location &amp; full inquiry form?</span>{' '}
              <a href="/contact" className="minimalContact__contactLink">
                Visit Contact Page →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
