import { whatSetsUsApart } from '../../../data/home.js'
import Icon from '../../ui/Icon.jsx'
import './WhatSetsUsApart.css'

/**
 * Section 4 — What Sets Us Apart.
 *
 * Editorial treatment in the site's monochrome section language (black type,
 * hairline rules, flip-to-black button — as in Who We Work With and Our
 * Services): an asymmetric two-column layout with the headline column beside
 * four hairline-divided rows, each led by an index numeral.
 *
 * Content is unchanged from the source document: eyebrow, two-part headline,
 * intro line, the four differentiators and the closing call to action.
 */
export default function WhatSetsUsApart() {
  const { super: eyebrow, title, accent, intro, cta, ctaHref, items } = whatSetsUsApart

  return (
    <section className="whatSets" id="why-vision">
      <div className="whatSets__cell">
        <div className="whatSets__layout">
          <header className="whatSets__head">
            <span className="whatSets__super">{eyebrow}</span>

            <h2 className="whatSets__title">
              <span className="whatSets__titlePlain">{title}</span>
              <strong className="whatSets__titleAccent">{accent}</strong>
            </h2>

            <p className="whatSets__intro">{intro}</p>

            <a href={ctaHref} className="whatSets__button">
              <span>{cta}</span>
              <Icon name="arrow-right" size="small" />
            </a>
          </header>

          <ol className="whatSets__grid">
            {items.map((item, index) => (
              <li className="wsItem" key={item.title}>
                <span className="wsItem__index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="wsItem__icon">
                  <Icon name={item.icon} />
                </span>

                <div className="wsItem__body">
                  <h3 className="wsItem__title">{item.title}</h3>
                  <p className="wsItem__text">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
