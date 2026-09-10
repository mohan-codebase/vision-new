import { Link } from 'react-router-dom'

/**
 * SmartLink — one link element that picks the right behaviour for its href.
 *
 *   "/about", "/#services"   → react-router <Link>  (in-app, no page reload)
 *   "#request-callback"      → plain <a>            (same-page scroll)
 *   "mailto:", "tel:", "http…" → plain <a>          (leaves the site)
 *
 * External hrefs opened in a new tab always carry rel="noopener noreferrer".
 * An empty/missing href renders a <span>, so a link never sits on the page
 * pointing at nothing.
 */
export default function SmartLink({ href, children, target, rel, ...rest }) {
  if (!href) {
    return <span {...rest}>{children}</span>
  }

  if (href.startsWith('/')) {
    return (
      <Link to={href} target={target} rel={rel} {...rest}>
        {children}
      </Link>
    )
  }

  const isExternal = /^(https?:)?\/\//.test(href)

  return (
    <a
      href={href}
      target={target}
      rel={rel || (target === '_blank' || isExternal ? 'noopener noreferrer' : undefined)}
      {...rest}
    >
      {children}
    </a>
  )
}
