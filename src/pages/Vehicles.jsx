import { useState } from 'react'
const vehicles = [
  { id: 'EV-001', type: '2W', battery: '82%' },
  { id: 'EV-002', type: '4W', battery: '45%' },
  { id: 'EV-003', type: '2W', battery: '91%' },
  { id: 'EV-004', type: '4W', battery: '23%' },
  { id: 'EV-005', type: '2W', battery: '67%' },
  { id: 'EV-006', type: '4W', battery: '12%' },
  { id: 'EV-007', type: '2W', battery: '88%' },
  { id: 'EV-008', type: '4W', battery: '55%' },
]

function getBatteryPct(battery) {
  const parsed = parseInt(String(battery).replace('%', ''), 10)
  if (Number.isNaN(parsed)) return 0
  return Math.max(0, Math.min(100, parsed))
}

export default function Vehicles() {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className="vehicles">
      <style>{`
        .vehicles {
          font-family: 'Inter', system-ui, sans-serif;
          background: #0D0D0D;
          padding: 32px;
          min-height: 100vh;
          box-sizing: border-box;
        }

        .vehicles__topbar {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 24px;
        }

        .vehicles__titles {
          min-width: 0;
        }

        .vehicles__title {
          margin: 0 0 4px;
          font-size: 22px;
          font-weight: 700;
          color: #F0F0F0;
        }

        .vehicles__subtitle {
          margin: 0 0 24px;
          color: #999999;
          font-size: 13px;
        }

        .vehicles__add-button {
          background: #4DA8FF;
          color: #0D0D0D;
          font-weight: 600;
          font-size: 13px;
          padding: 10px 20px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          align-self: flex-start;
        }

        .vehicles__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        @media (max-width: 1024px) {
          .vehicles__grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .vehicles__grid {
            grid-template-columns: 1fr;
          }
        }

        .vehicle-card {
          background: #161616;
          border: 1px solid #2A2A2A;
          border-radius: 20px;
          padding: 24px;
          box-sizing: border-box;
          box-shadow: 0 0 0 1px #1E1E1E inset;
          transition: background 0.2s ease, border-color 0.2s ease;
        }

        .vehicle-card:hover {
          background: #1C1C1C;
          border-color: #333333;
        }

        .vehicle-card__top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 18px;
        }

        .vehicle-card__id {
          color: #F0F0F0;
          font-weight: 700;
          font-size: 16px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .vehicle-card__type {
          background: #1A1A1A;
          color: #ADADAD;
          border-radius: 6px;
          padding: 2px 10px;
          font-size: 11px;
          white-space: nowrap;
        }

        .vehicle-card__battery-label {
          margin: 0 0 8px;
          font-size: 11px;
          font-weight: 500;
          color: #999999;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }

        .vehicle-card__battery-meta {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .vehicle-card__battery-pct {
          font-size: 14px;
          font-weight: 600;
          color: #F0F0F0;
        }

        .vehicle-card__battery-bar {
          width: 100%;
          height: 4px;
          border-radius: 2px;
          background: #222222;
          overflow: hidden;
        }

        .vehicle-card__battery-fill {
          height: 100%;
          border-radius: 2px;
          background: #22C55E;
        }
      `}</style>

<div className="vehicles__topbar">
        <div className="vehicles__titles">
          <h1 className="vehicles__title">Vehicles</h1>
          <p className="vehicles__subtitle">Manage your fleet roster</p>
        </div>
        <button type="button" onClick={() => setShowModal(true)} className="vehicles__add-button">
          Add Vehicle
        </button>
      </div>

      <div className="vehicles__grid">
        {vehicles.map((v) => {
          const pct = getBatteryPct(v.battery)
          const fillColor = pct >= 60 ? '#22C55E' : pct >= 30 ? '#F59E0B' : '#FF4D4D'
          return (
            <div key={v.id} className="vehicle-card">
              <div className="vehicle-card__top">
                <div className="vehicle-card__id">{v.id}</div>
                <div className="vehicle-card__type">{v.type}</div>
              </div>
              <p className="vehicle-card__battery-label">Battery</p>
              <div className="vehicle-card__battery-meta">
                <div className="vehicle-card__battery-pct">{v.battery}</div>
                <div />
              </div>
              <div className="vehicle-card__battery-bar">
                <div
                  className="vehicle-card__battery-fill"
                  style={{ width: `${pct}%`, background: fillColor }}
                />
              </div>
            </div>
          )
        })}
      </div>

      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ backgroundColor: '#161616', border: '1px solid #2A2A2A', borderRadius: '20px', padding: '32px', width: '480px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#F0F0F0', margin: 0 }}>Add Vehicle</h2>
              <button onClick={() => setShowModal(false)} style={{ background: 'none', border: 'none', color: '#999999', fontSize: '20px', cursor: 'pointer' }}>×</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '11px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Vehicle ID</label>
                <input placeholder="e.g. EV-010" style={{ width: '100%', backgroundColor: '#0D0D0D', border: '1px solid #2A2A2A', borderRadius: '8px', padding: '10px 14px', color: '#F0F0F0', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '11px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Type</label>
                <div style={{ position: 'relative' }}>
                  <select style={{ width: '100%', backgroundColor: '#0D0D0D', border: '1px solid #2A2A2A', borderRadius: '8px', padding: '10px 14px', paddingRight: '40px', color: '#F0F0F0', fontSize: '14px', outline: 'none', boxSizing: 'border-box', appearance: 'none' }}>
                    <option value="2W">2W</option>
                    <option value="4W">4W</option>
                  </select>
                  <span style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', color: '#999999', pointerEvents: 'none', fontSize: '12px' }}><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 4L6 8L10 4" stroke="#999999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '11px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Battery Capacity (kWh)</label>
                <input placeholder="e.g. 30" style={{ width: '100%', backgroundColor: '#0D0D0D', border: '1px solid #2A2A2A', borderRadius: '8px', padding: '10px 14px', color: '#F0F0F0', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '11px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Shift Start Time</label>
                <input type="time" style={{ width: '100%', backgroundColor: '#0D0D0D', border: '1px solid #2A2A2A', borderRadius: '8px', padding: '10px 14px', color: '#F0F0F0', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '11px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Charge Target %</label>
                <input placeholder="e.g. 80" style={{ width: '100%', backgroundColor: '#0D0D0D', border: '1px solid #2A2A2A', borderRadius: '8px', padding: '10px 14px', color: '#F0F0F0', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '11px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Assigned Charger</label>
                <div style={{ position: 'relative' }}>
                  <select style={{ width: '100%', backgroundColor: '#0D0D0D', border: '1px solid #2A2A2A', borderRadius: '8px', padding: '10px 14px', paddingRight: '40px', color: '#F0F0F0', fontSize: '14px', outline: 'none', boxSizing: 'border-box', appearance: 'none' }}>
                    <option value="">None</option>
                    <option value="Charger A">Charger A</option>
                    <option value="Charger B">Charger B</option>
                    <option value="Charger C">Charger C</option>
                  </select>
                  <span style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', color: '#999999', pointerEvents: 'none', fontSize: '12px' }}><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 4L6 8L10 4" stroke="#999999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
              <button onClick={() => setShowModal(false)} style={{ flex: 1, backgroundColor: '#1A1A1A', border: '1px solid #2A2A2A', borderRadius: '10px', padding: '12px', color: '#999999', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
                Cancel
              </button>
              <button onClick={() => setShowModal(false)} style={{ flex: 1, backgroundColor: '#4DA8FF', border: 'none', borderRadius: '10px', padding: '12px', color: '#0D0D0D', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
                Save Vehicle
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
