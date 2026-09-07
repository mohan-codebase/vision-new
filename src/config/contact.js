/**
 * Vision Business Setup — contact configuration.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 *  PLACEHOLDERS — the source document does not include contact details.
 *  Replace every value below with Vision Business Setup's real information
 *  before launch. Nothing here is a verified number or address.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * `whatsappNumber` must be digits only in full international format (no "+",
 * spaces or dashes) so it can be dropped straight into a wa.me link.
 */
export const contact = {
  phoneDisplay: '+971 54 288 7888',
  phoneHref: 'tel:+971542887888',

  whatsappNumber: '971542887888',
  whatsappMessage: 'Hi Vision Business Setup, I would like to know more about setting up my business in the UAE.',

  email: 'admin@visionbusinesssetup.ae',
  addressLines: [
    '119, Mardoof Complex,',
    'Al Safa 1, Sheikh Zayed Road,',
    'P.O.Box 117510, Dubai, UAE',
  ],

  hours: '09.30 AM – 6.30 PM, Sunday Closed',

  // Get in Touch map. Leave `mapEmbedUrl` empty to show the styled placeholder;
  // paste a Google Maps / OpenStreetMap "embed" src URL once the office
  // location is confirmed. `mapLink` opens the full map in a new tab.
  mapEmbedUrl: '',
  mapLink: '',

  social: [
    { icon: 'facebook', href: '#', label: 'Facebook' },
    { icon: 'whatsapp', href: 'https://wa.me/971542887888', label: 'WhatsApp' },
    { icon: 'linkedin', href: '#', label: 'LinkedIn' },
    { icon: 'instagram', href: '#', label: 'Instagram' },
  ],
}

/** wa.me deep link built from the configured number + prefilled message. */
export const whatsappLink = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
  contact.whatsappMessage,
)}`
