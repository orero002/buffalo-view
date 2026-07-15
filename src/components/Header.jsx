import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu, FiUser, FiX } from 'react-icons/fi'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/drinks', label: 'Drinks Menu' },
  { to: '/booking', label: 'Book a Table' },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {isOpen && <div className="fixed inset-0 z-40 bg-black/70 md:hidden" onClick={() => setIsOpen(false)} />}

      <header className="sticky top-0 z-50 border-b border-[#554336] bg-[#111415]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4 sm:px-6 lg:px-16">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="rounded-full border border-[#ffb77d]/30 p-2 text-[#ffb77d] md:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Open menu"
            >
              {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
            <h1 className="text-xl font-semibold tracking-tight text-[#ffb77d] sm:text-2xl">Buffalo View</h1>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-semibold uppercase tracking-[0.2em] transition-colors ${
                    isActive ? 'border-b-2 border-[#ffb77d] text-[#ffb77d]' : 'text-[#dbc2b0] hover:text-[#ffb77d]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <span className="rounded-full border border-[#ffb77d]/30 p-2 text-[#ffb77d]">
            <FiUser size={18} />
          </span>
        </div>
      </header>

      <div
        className={`fixed left-0 top-0 z-50 h-full w-72 max-w-[80vw] border-r border-[#554336] bg-[#111415] p-6 shadow-2xl transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-[#ffb77d]">Menu</h2>
          <button type="button" className="rounded-full border border-[#ffb77d]/30 p-2 text-[#ffb77d]" onClick={() => setIsOpen(false)}>
            <FiX size={18} />
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `rounded-lg border px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition-all ${
                  isActive
                    ? 'border-[#ffb77d] bg-[#ffb77d]/10 text-[#ffb77d]'
                    : 'border-[#554336] text-[#dbc2b0] hover:border-[#ffb77d] hover:text-[#ffb77d]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  )
}

export default Header
