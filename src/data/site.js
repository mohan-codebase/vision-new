/**
 * Site-wide chrome for Vision Business Setup: header top bar, primary
 * navigation and footer content.
 *
 * Contact details (phone, WhatsApp, email, address) live in
 * `src/config/contact.js` — that is the single place to edit them.
 */
import { contact, hasPhone, whatsappLink } from '../config/contact.js'

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
    m('UAE Mainland', '/business-setup/uae-mainland'),
    m('UAE Free Zone', '/business-setup/uae-free-zone'),
    m('UAE Offshore', '/business-setup/uae-offshore'),
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
      m('Emirates ID VIP Service', '/#services'),
      m('VIP Medical Assistance', '/#services'),
      m('Customs Clearance Card', '/#services'),
      m('Virtual Office', '/#services'),
      m('Trade Mark Registration', '/#services'),
      m('Establishment Card', '/#services'),
    ]),
  ]),
  /* No "#jurisdictions" section exists — the three jurisdictions are the
     Business Setup band on the homepage, so this points there. */
  m('Jurisdictions', '/#business-setup', [
    m('UAE Mainland', '/business-setup/uae-mainland'),
    m('UAE Free Zone', '/business-setup/uae-free-zone'),
    m('UAE Offshore', '/business-setup/uae-offshore'),
    m('DMCC Free Zone', '/business-setup/uae-free-zone'),
    m('IFZA Free Zone', '/business-setup/uae-free-zone'),
  ]),
  m('Contact Us', '/contact'),
]

/** Index of the item rendered as current (0 = Home, active gold like reference). */
export const currentMenuIndex = 0

/** The header's accent button is the phone number — null while it is hidden. */
export const headerPhone = hasPhone
  ? {
      label: contact.phoneDisplay,
      href: contact.phoneHref,
    }
  : null

export const footer = {
  cta: {
    badge: 'START YOUR JOURNEY',
    headline:
      'Whether you are starting fresh or expanding your presence, our team is here to guide you with expertise, clarity, and dedication.',
    subheadline:
      'Connect with Vision Business Setup and experience a service built around you.',
    primaryBtn: {
      label: 'Contact Us',
      href: '/contact',
    },
    secondaryBtn: {
      label: 'Chat Now',
      href: whatsappLink,
    },
  },
  contactCards: [
    ...(hasPhone
      ? [
          {
            icon: 'phone',
            label: 'Round-the-Clock Support',
            value: contact.phoneDisplay,
            href: contact.phoneHref,
            detail: 'Support whenever you need it, beyond the conventional 9-to-5 framework',
          },
        ]
      : [
          {
            icon: 'whatsapp',
            label: 'Round-the-Clock Support',
            value: 'Chat Now',
            href: whatsappLink,
            detail: 'Support whenever you need it, beyond the conventional 9-to-5 framework',
            target: '_blank',
          },
        ]),
    {
      icon: 'mail',
      label: 'Request a Callback',
      value: contact.email,
      href: `mailto:${contact.email}`,
      detail: 'Connect with Vision Business Setup and experience a service built around you',
    },
    {
      icon: 'pin',
      label: 'Business Setup in the UAE',
      value: contact.addressLines.join(', '),
      href: `https://www.google.com/maps/search/${encodeURIComponent(contact.addressLines.join(' '))}`,
      detail: 'Open in Google Maps ↗',
      target: '_blank',
    },
  ],
  company: {
    title: brand.name,
    text: `At ${brand.name}, we provide end-to-end business setup and corporate support services in the UAE. From company formation across Mainland, Free Zone, and Offshore jurisdictions to visa processing and PRO services, we manage the entire process with precision and efficiency.`,
    workingHoursLabel: 'Business Hours',
    workingHours: contact.hours,
    accreditation: brand.tagline,
  },
  columns: [
    {
      id: 'business-setup',
      title: 'Business Setup',
      links: [
        { label: 'UAE Mainland', href: '/business-setup/uae-mainland' },
        { label: 'UAE Free Zone', href: '/business-setup/uae-free-zone' },
        { label: 'UAE Offshore', href: '/business-setup/uae-offshore' },
        { label: 'DMCC Free Zone', href: '/business-setup/uae-free-zone' },
        { label: 'IFZA Free Zone', href: '/business-setup/uae-free-zone' },
        { label: 'License Renewal', href: '/#services' },
      ],
    },
    {
      id: 'corporate-services',
      title: 'Our Services',
      links: [
        { label: 'Residence Visa', href: '/#services' },
        { label: 'Golden Visa', href: '/#services' },
        { label: 'Bank Account Opening', href: '/#services' },
        { label: 'Corporate Tax Guide', href: '/#services' },
        { label: 'Bookkeeping & VAT Registration', href: '/#services' },
        { label: 'VIP Medical & Emirates ID Assistance', href: '/#services' },
      ],
    },
    {
      id: 'company-links',
      title: 'About Us',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Story', href: '/#our-story' },
        { label: 'Who We Work With', href: '/#industries' },
        { label: 'Our Core Values', href: '/#values' },
        { label: 'Our Services', href: '/#services' },
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
