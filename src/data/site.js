/**
 * Site-wide chrome for Vision Business Setup: header top bar, primary
 * navigation and footer content.
 *
 * Contact details (phone, WhatsApp, email, address) live in
 * `src/config/contact.js` — that is the single place to edit them.
 */
import { contact, hasPhone } from '../config/contact.js'

export const brand = {
  name: 'Vision Business Setup',
  tagline: 'Every Business starts with Vision',
}

export const topBar = {
  tagline: brand.tagline,
  hours: { icon: 'clock', title: brand.tagline },
  // Rendered only while a phone number is configured — see `hasPhone`.
  phone: hasPhone
    ? { icon: 'phone', title: 'Speak to a consultant', text: contact.phoneDisplay, href: contact.phoneHref }
    : null,
  social: contact.social,
}

/**
 * Primary menu — the Vision homepage navigation.
 * `m(label, href, children)` builds one node; the menu renders up to three
 * levels (top item → dropdown → flyout).
 */
const m = (label, href = '#', children) => ({ label, href, ...(children && { children }) })

export const mainMenu = [
  m('Home', '/'),
  m('About us', '/about'),
  m('Business Setup', '/#business-setup', [
    m('UAE Mainland', '/#business-setup'),
    m('UAE Free Zone', '/#business-setup'),
    m('UAE Offshore', '/#business-setup'),
  ]),
  m('Our Services', '/#services', [
    m('Licence', '/#services', [
      m('License Renewal', '/#services'),
      m('License Modification', '/#services'),
      m('License Cancellation', '/#services'),
      m('License Freezing', '/#services'),
    ]),
    m('Visa', '/#services', [
      m('Residence Visa', '/#services'),
      m('Dependent Visa', '/#services'),
      m('Remote Work Visa', '/#services'),
      m('Golden Visa', '/#services'),
      m('Freelance Visa', '/#services'),
      m('Domestic Worker Visa', '/#services'),
    ]),
    m('Finance & Banking', '/#services', [
      m('Bank Account Opening', '/#services'),
      m('Corporate Tax Guide', '/#services'),
      m('Bookkeeping & VAT Registration', '/#services'),
    ]),
    m('Other', '/#services', [
      m('VIP Medical & Emirates ID Assistance', '/#services'),
      m('Customs Registration', '/#services'),
      m('Office Spaces', '/#services'),
    ]),
  ]),
  m('Contact Us', '/contact'),
]

/** Index of the item rendered as current (0 = Home, active gold like reference). */
export const currentMenuIndex = 0

/** The header's accent button is the phone number — null while it is hidden. */
export const headerPhone = hasPhone
  ? { label: contact.phoneDisplay, href: contact.phoneHref }
  : null

export const footer = {
  cta: {
    badge: 'START YOUR UAE JOURNEY',
    headline: 'Our team of qualified business setup consultants is ready & always available, anytime, anywhere.',
    subheadline:
      'Partner with Dubai’s premier corporate formation specialists for swift company setup, Golden Visas, corporate banking, and full regulatory compliance.',
    primaryBtn: {
      label: 'Book Free Consultation',
      href: '/contact',
    },
    secondaryBtn: {
      label: 'WhatsApp an Advisor',
      href: `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappMessage)}`,
    },
  },
  contactCards: [
    ...(hasPhone
      ? [
          {
            icon: 'phone',
            label: 'Direct Phone Support',
            value: contact.phoneDisplay,
            href: contact.phoneHref,
            detail: 'Available Mon – Sat (09:30 AM – 06:30 PM)',
          },
        ]
      : [
          {
            icon: 'whatsapp',
            label: 'WhatsApp Advisory',
            value: 'Chat with an advisor',
            href: `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappMessage)}`,
            detail: 'Available Mon – Sat (09:30 AM – 06:30 PM)',
            target: '_blank',
          },
        ]),
    {
      icon: 'mail',
      label: 'Official Inquiries',
      value: contact.email,
      href: `mailto:${contact.email}`,
      detail: 'Guaranteed response within 2 hours',
    },
    {
      icon: 'pin',
      label: 'Dubai Headquarters',
      value: contact.addressLines.join(', '),
      href: `https://www.google.com/maps/search/${encodeURIComponent(contact.addressLines.join(' '))}`,
      detail: 'Open in Google Maps ↗',
      target: '_blank',
    },
  ],
  company: {
    title: brand.name,
    text: `${brand.name} is the UAE’s trusted corporate advisory firm. We empower entrepreneurs, startups, and multinational corporations with seamless company formation, trade licensing, Golden Visas, and corporate banking solutions across Dubai Mainland, Free Zones, and Offshore.`,
    workingHoursLabel: 'Business Hours',
    workingHours: contact.hours,
    accreditation: 'Licensed Corporate Service Provider · Dubai, UAE',
  },
  columns: [
    {
      id: 'business-setup',
      title: 'Business Setup',
      links: [
        { label: 'UAE Mainland Formation', href: '/#business-setup' },
        { label: 'UAE Free Zone Setup', href: '/#business-setup' },
        { label: 'UAE Offshore Company', href: '/#business-setup' },
        { label: 'Dubai South Free Zone', href: '/#business-setup' },
        { label: 'Meydan Free Zone', href: '/#business-setup' },
        { label: 'Trade License Renewal', href: '/#services' },
      ],
    },
    {
      id: 'corporate-services',
      title: 'Corporate Services',
      links: [
        { label: 'Residence & Golden Visa', href: '/#services' },
        { label: 'Corporate Bank Account Opening', href: '/#services' },
        { label: 'Corporate Tax Registration', href: '/#services' },
        { label: 'VAT Registration & Filing', href: '/#services' },
        { label: 'Accounting & Bookkeeping', href: '/#services' },
        { label: 'PRO & Government Liaison', href: '/#services' },
      ],
    },
    {
      id: 'company-links',
      title: 'Company & Quick Links',
      links: [
        { label: 'About Vision', href: '/about' },
        { label: 'Why Businesses Choose Us', href: '/#why-vision' },
        { label: 'Who We Work With', href: '/#who-we-work-with' },
        { label: 'Our Core Values', href: '/#values' },
        { label: 'Our Services Overview', href: '/#services' },
        { label: 'Contact Us', href: '/contact' },
      ],
    },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#top' },
    { label: 'Terms & Conditions', href: '#top' },
    { label: 'Disclaimer', href: '#top' },
  ],
  copyright: `© ${new Date().getFullYear()} Vision Business Setup. All rights reserved.`,
  social: contact.social,
}

export const footerBottom = {
  copyright: `© ${new Date().getFullYear()} Vision Business Setup. All rights reserved.`,
  social: contact.social,
}
