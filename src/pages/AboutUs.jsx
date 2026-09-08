import { Link } from 'react-router-dom'
import Founder from '../components/sections/Founder/Founder.jsx'
import CoreValues from '../components/sections/CoreValues/CoreValues.jsx'
import Commitment from '../components/sections/Commitment/Commitment.jsx'
import imgAboutUs from '../assets/images/about-us.jpg'
import './AboutUs.css'

/**
 * Dedicated About Us page for Vision Business Setup.
 * Streamlined executive profile: narrative, founder, core values, and corporate commitment.
 */
export default function AboutUs() {
  return (
    <main className="aboutPage">
      {/* 1. Page Hero Banner */}
      <section className="aboutHero">
        <div className="aboutHero__overlay" aria-hidden="true" />
        <div className="aboutHero__container">
          <nav className="aboutBreadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="aboutBreadcrumb__link">
              Home
            </Link>
            <span className="aboutBreadcrumb__sep">/</span>
            <span className="aboutBreadcrumb__current">About Us</span>
          </nav>

          <span className="aboutHero__eyebrow">VISION BUSINESS SETUP · EST. 2015</span>
          <h1 className="aboutHero__title">
            Pioneering Corporate Excellence in the UAE
          </h1>
          <p className="aboutHero__lead">
            At Vision Business Setup, we provide end-to-end company formation and corporate support services
            across UAE Mainland, Free Zone, and Offshore jurisdictions. Every business starts with vision —
            we act as strategic advisors to build a strong foundation for your long-term success.
          </p>
        </div>
      </section>

      {/* 2. Fast Facts & Key Metrics Strip */}
      <section className="aboutMetricsStrip">
        <div className="aboutMetricsStrip__container">
          <div className="aboutMetricCard">
            <span className="aboutMetricCard__num">10+</span>
            <span className="aboutMetricCard__label">Years in Dubai</span>
            <p className="aboutMetricCard__desc">Established in 2015 with continuous regional excellence</p>
          </div>
          <div className="aboutMetricCard">
            <span className="aboutMetricCard__num">5,000+</span>
            <span className="aboutMetricCard__label">Companies Formed</span>
            <p className="aboutMetricCard__desc">Mainland, Free Zone, and Offshore entities established</p>
          </div>
          <div className="aboutMetricCard">
            <span className="aboutMetricCard__num">50+</span>
            <span className="aboutMetricCard__label">Jurisdictions Covered</span>
            <p className="aboutMetricCard__desc">Direct liaison with DET, Free Zone authorities & ministries</p>
          </div>
          <div className="aboutMetricCard">
            <span className="aboutMetricCard__num">100%</span>
            <span className="aboutMetricCard__label">Transparent Advisory</span>
            <p className="aboutMetricCard__desc">No hidden fees, tailored solutions, and client-first guidance</p>
          </div>
        </div>
      </section>

      {/* 3. Deep Story: Narrative & Philosophy */}
      <section className="aboutStoryDeep">
        <div className="aboutStoryDeep__container">
          <div className="aboutStoryDeep__grid">
            <div className="aboutStoryDeep__content">
              <span className="aboutStoryDeep__badge">OUR JOURNEY & PHILOSOPHY</span>
              <h2 className="aboutStoryDeep__title">
                Going Beyond Documentation to Deliver Strategic Value
              </h2>
              <div className="aboutStoryDeep__paragraphs">
                <p>
                  At Vision Business Setup, we provide end-to-end business setup and corporate support services in the UAE.
                  From company formation across Mainland, Free Zone, and Offshore jurisdictions to visa processing and PRO services,
                  we manage the entire process with precision and efficiency.
                </p>
                <p>
                  Our role goes beyond documentation—we act as strategic advisors, helping clients choose the right structure,
                  navigate regulations, and build a strong foundation for long-term success in the UAE.
                </p>
                <p>
                  Established in 2015, Vision Business Setup has grown into a trusted name in the UAE’s business setup landscape.
                  Over the years, we have had the privilege of working with high-value clients, entrepreneurs, and well-connected
                  business networks across the region—delivering solutions that are not only efficient, but also strategically aligned
                  with long-term success.
                </p>
                <blockquote className="aboutStoryDeep__quote">
                  &ldquo;Our journey has been defined by one simple principle: putting our clients first in everything we do.&rdquo;
                </blockquote>
              </div>
            </div>

            <div className="aboutStoryDeep__visual">
              <div className="aboutStoryCard">
                <div className="aboutStoryCard__imageWrapper">
                  <img
                    src={imgAboutUs}
                    alt="Vision Business Setup — Downtown Dubai"
                    className="aboutStoryCard__img"
                  />
                  <div className="aboutStoryCard__tag">
                    <span>DUBAI HEADQUARTERS</span>
                  </div>
                </div>
                <div className="aboutStoryCard__info">
                  <h3 className="aboutStoryCard__head">Tailored Solutions, Never Templated</h3>
                  <p className="aboutStoryCard__text">
                    Whether you are an ambitious startup founder, an international enterprise expanding into the Middle East,
                    or a private investor seeking tax-optimized structuring, our bespoke advisory ensures seamless corporate establishment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Founder: Viekram Sadwani */}
      <Founder />

      {/* 5. Our Core Values (7 values) */}
      <CoreValues />

      {/* 6. Our Commitment */}
      <Commitment />
    </main>
  )
}
