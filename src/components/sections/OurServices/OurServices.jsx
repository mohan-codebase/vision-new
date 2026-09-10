import { ourServices } from '../../../data/home.js'
import Icon from '../../ui/Icon.jsx'
import './OurServices.css'

/**
 * Section 6 — Our Services.
 *
 * Four corporate-support categories (Licence / Visa / Finance & Banking /
 * Other) presented as a joined hairline matrix rather than four loose cards:
 * the columns share one grid rule, so unequal list lengths no longer leave
 * ragged card bottoms. Each column carries an index numeral, the category
 * icon, its documented sub-services and a pinned footer (count + enquiry
 * link), and inverts to black on hover / keyboard focus in the site's
 * monochrome language.
 */
export default function OurServices() {
  const { super: eyebrow, title, accent, intro, cta, ctaHref, groups } = ourServices

  const totalServices = groups.reduce((sum, group) => sum + group.items.length, 0)

  return (
    <section className="ourServices" id="services">
      <div className="ourServices__cell">
        <header className="svcHead">
          <div className="svcHead__lead">
            <span className="svcHead__super">{eyebrow}</span>
            <h2 className="svcHead__title">
              <span className="svcHead__plain">{title}</span>{' '}
              <strong className="svcHead__accent">{accent}</strong>
            </h2>
            {intro && <p className="svcHead__intro">{intro}</p>}
          </div>

          <div className="svcHead__aside">
            <p className="svcHead__meta">
              <span className="svcHead__count">{totalServices}</span>
              <span className="svcHead__metaLabel">
                services across {groups.length} categories
              </span>
            </p>
            <a href={ctaHref} className="ourServices__button">
              <span>{cta}</span>
              <Icon name="arrow-right" size="small" />
            </a>
          </div>
        </header>

        <ol className="svcMatrix">
          {groups.map((group, index) => (
            <li className="svcCol" key={group.title}>
              <div className="svcCol__top">
                <span className="svcCol__index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="svcCol__icon">
                  <Icon name={group.icon} />
                </span>
              </div>

              <h3 className="svcCol__title">{group.title}</h3>

              <ul className="svcCol__list">
                {group.items.map((item) => (
                  <li className="svcCol__item" key={item}>
                    <span className="svcCol__bullet" aria-hidden="true" />
                    <span className="svcCol__itemText">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="svcCol__foot">
                <span className="svcCol__tally">
                  {String(group.items.length).padStart(2, '0')} services
                </span>
                <a className="svcCol__link" href={ctaHref}>
                  <span>Enquire</span>
                  <Icon name="arrow-right" size="small" />
                  <span className="svcCol__linkLabel">
                    {' '}about {group.title}
                  </span>
                </a>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
