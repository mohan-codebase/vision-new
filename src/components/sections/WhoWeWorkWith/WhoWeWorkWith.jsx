import { whoWeWorkWith } from '../../../data/home.js'
import './WhoWeWorkWith.css'

import workWith01 from '../../../assets/images/who-we-work-with-1-clean.avif'
import workWith02 from '../../../assets/images/who-we-work-with-2-clean.avif'
import workWith03 from '../../../assets/images/who-we-work-with-3-clean.avif'
import workWith04 from '../../../assets/images/who-we-work-with-4-clean.avif'
import workWith05 from '../../../assets/images/who-we-work-with-5-clean.avif'

const IMAGES = {
  'who-we-work-with-1-clean.avif': workWith01,
  'who-we-work-with-2-clean.avif': workWith02,
  'who-we-work-with-3-clean.avif': workWith03,
  'who-we-work-with-4-clean.avif': workWith04,
  'who-we-work-with-5-clean.avif': workWith05,
}

/**
 * Section 5 — Who We Work With (Minimal Executive Redesign)
 * Clean, uniform 5-card layout showcasing client industries with
 * crisp photography, index numbering, and single-tone black typography.
 */
export default function WhoWeWorkWith() {
  const { super: eyebrow, title, accent, intro, items } = whoWeWorkWith

  return (
    <section className="whoWork" id="industries">
      <div className="whoWork__cell">
        <header className="whoWork__head">
          <span className="whoWork__super">{eyebrow}</span>
          <h2 className="whoWork__title">
            <span className="whoWork__plain">{title}</span>{' '}
            <strong className="whoWork__accent">{accent}</strong>
          </h2>
          <p className="whoWork__intro">{intro}</p>
        </header>

        <ul className="whoWork__grid">
          {items.map((item, idx) => (
            <li className="workTile" key={item.title}>
              <div className="workTile__media">
                <img
                  className="workTile__img"
                  src={IMAGES[item.image]}
                  alt={item.title}
                  loading="lazy"
                />
              </div>
              <div className="workTile__body">
                <span className="workTile__index">0{idx + 1}</span>
                <h3 className="workTile__label">{item.title}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
