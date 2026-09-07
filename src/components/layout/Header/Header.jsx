import { useCallback, useState } from 'react'
import { useLocation } from 'react-router-dom'
import useMediaQuery from '../../../hooks/useMediaQuery.js'
import MainNav from './MainNav.jsx'
import MobileMenu from './MobileMenu.jsx'
import './Header.css'

/**
 * Header — `.mainHeader`.
 * Sleek single-row navigation floating over the hero banner.
 * Supports light mode on pages with clean white hero banners (e.g. /contact).
 */
export default function Header() {
  const location = useLocation()
  const mobile = useMediaQuery('(max-width: 1200px)')
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  const panelOpen = menuOpen && mobile
  const isLight = location.pathname === '/contact'

  return (
    <>
      <header
        id="top"
        className={`mainHeader ${mobile ? 'btHideMenu' : ''} ${isLight ? 'mainHeader--light' : ''}`.trim()}
      >
        <div className="mainHeaderInner">
          <MainNav isLight={isLight} mobile={mobile} onOpenMobile={() => setMenuOpen(true)} />
        </div>
      </header>

      {mobile && <MobileMenu open={panelOpen} onClose={closeMenu} />}
    </>
  )
}
