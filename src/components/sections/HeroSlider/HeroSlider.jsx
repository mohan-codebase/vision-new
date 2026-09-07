import { useCallback, useEffect, useRef, useState } from 'react'
import { heroSlides } from '../../../data/home.js'
import './HeroSlider.css'

import bannerBurjKhalifa from '../../../assets/images/banner-burj-khalifa.jpg'
import bannerPalmJumeirah from '../../../assets/images/banner-palm-jumeirah.jpg'
import bannerAtlantis from '../../../assets/images/banner-atlantis.webp'
import bannerNight from '../../../assets/images/banner-night.jpg'

const IMAGES = {
  'banner-burj-khalifa.jpg': bannerBurjKhalifa,
  'banner-palm-jumeirah.jpg': bannerPalmJumeirah,
  'banner-atlantis.webp': bannerAtlantis,
  'banner-night.jpg': bannerNight,
}

const resolveImage = (imgName) => {
  if (IMAGES[imgName]) return IMAGES[imgName]
  if (imgName?.startsWith('/')) return imgName
  return `/banner/${imgName}`
}

const AUTOPLAY_MS = 5500

/**
 * Section 1 — Hero slider.
 *
 * Full-bleed, centered luxury banner with dark Dubai skyline,
 * elegant typography and dual outline buttons inspired by Pride and Property.
 */
export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const count = heroSlides.length
  const timer = useRef(null)

  const goTo = useCallback((i) => setCurrent(((i % count) + count) % count), [count])
  const next = useCallback(() => setCurrent((c) => (c + 1) % count), [count])

  useEffect(() => {
    timer.current = window.setInterval(next, AUTOPLAY_MS)
    return () => window.clearInterval(timer.current)
  }, [next])

  const pick = useCallback(
    (i) => {
      window.clearInterval(timer.current)
      timer.current = window.setInterval(next, AUTOPLAY_MS)
      goTo(i)
    },
    [goTo, next],
  )

  return (
    <section
      className="heroSlider"
      aria-roledescription="carousel"
      aria-label="Vision Business Setup"
    >
      <div className="heroSlider__viewport">
        {heroSlides.map((slide, i) => (
          <article
            key={slide.title}
            className={`heroSlide${i === current ? ' is-active' : ''}`}
            style={{ backgroundImage: `url(${resolveImage(slide.image)})` }}
            aria-hidden={i === current ? undefined : true}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
          >
            <div className="heroSlide__inner">
              <div className="heroSlide__content">
                {slide.super && <p className="heroSlide__super">{slide.super}</p>}
                <h1 className="heroSlide__title">{slide.title}</h1>
                {slide.text && <p className="heroSlide__sub">{slide.text}</p>}

                {slide.buttons?.length > 0 && (
                  <div className="heroButtons">
                    {slide.buttons.map((btn) => (
                      <a
                        key={btn.label}
                        href={btn.href}
                        className="heroButton"
                        tabIndex={i === current ? 0 : -1}
                      >
                        {btn.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <ul className="heroDots" role="tablist" aria-label="Select a slide">
        {heroSlides.map((slide, i) => (
          <li key={slide.title} className={i === current ? 'is-active' : ''}>
            <button
              type="button"
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => pick(i)}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
