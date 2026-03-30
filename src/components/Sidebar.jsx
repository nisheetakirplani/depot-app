import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Dashboard', end: true },
  { to: '/vehicles', label: 'Vehicles' },
  { to: '/charging-points', label: 'Charging Points' },
  { to: '/scheduler', label: 'Scheduler' },
  { to: '/log', label: 'Charge Log' },
]

export default function Sidebar() {
  return (
    <aside className="vf-sidebar">
      <style>{`
        .vf-sidebar {
          position: fixed;
          top: 0;
          left: 0;
          width: 240px;
          height: 100vh;
          box-sizing: border-box;
          background: #111111;
          border-right: 1px solid #1f1f1f;
          padding: 24px 0;
          font-family: 'Inter', system-ui, sans-serif;
        }
        .vf-sidebar__logo {
          padding: 0 20px 28px;
          margin: 0;
          font-size: 20px;
          font-weight: 700;
          color: #00b8ff;
          line-height: 1.2;
        }
        .vf-sidebar__nav {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .vf-sidebar__link {
          display: block;
          padding: 10px 20px;
          margin: 0;
          font-size: 14px;
          font-weight: 500;
          color: #888888;
          text-decoration: none;
          border-left: 2px solid transparent;
          transition: color 0.15s ease, background 0.15s ease, border-color 0.15s ease;
        }
        .vf-sidebar__link:hover {
          color: #f5f5f5;
        }
        .vf-sidebar__link--active {
          color: #00b8ff;
          background: #1a1a1a;
          border-left-color: #00b8ff;
        }
        .vf-sidebar__link--active:hover {
          color: #00b8ff;
        }
      `}</style>

<div style={{ padding: '0 20px 28px 20px' }}>
  <img src="/logo.png" width="100" height="100" style={{ borderRadius: '50%' }} />
</div>

      <nav className="vf-sidebar__nav" aria-label="Main">
        {links.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              isActive ? 'vf-sidebar__link vf-sidebar__link--active' : 'vf-sidebar__link'
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
