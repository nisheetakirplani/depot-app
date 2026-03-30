import { useState } from 'react'

const chargers = [
  { id: 'Charger A', type: 'Fast', status: 'In Use', power: '22 kW', location: 'Zone 1', bookings: 8 },
  { id: 'Charger B', type: 'Fast', status: 'In Use', power: '22 kW', location: 'Zone 1', bookings: 6 },
  { id: 'Charger C', type: 'Slow', status: 'Available', power: '7.4 kW', location: 'Zone 2', bookings: 3 },
  { id: 'Charger D', type: 'Slow', status: 'Available', power: '7.4 kW', location: 'Zone 2', bookings: 5 },
  { id: 'Charger E', type: 'Fast', status: 'Inactive', power: '22 kW', location: 'Zone 3', bookings: 0 },
  { id: 'Charger F', type: 'Slow', status: 'Available', power: '7.4 kW', location: 'Zone 3', bookings: 2 },
]

const statusColor = {
  'Available': '#3DDC84',
  'In Use': '#4DA8FF',
  'Inactive': '#555555',
}

export default function ChargingPoints() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div style={{ backgroundColor: '#0D0D0D', padding: '32px', minHeight: '100vh' }}>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontSize: '22px', fontWeight: 700, color: '#F0F0F0', margin: 0, marginBottom: '4px' }}>Charging Points</h1>
          <p style={{ fontSize: '13px', color: '#999999', margin: 0 }}>Monitor and manage charging infrastructure</p>
        </div>
        <button onClick={() => setShowModal(true)} style={{ backgroundColor: '#4DA8FF', color: '#0D0D0D', fontWeight: 600, fontSize: '13px', padding: '10px 20px', borderRadius: '10px', border: 'none', cursor: 'pointer' }}>
          Add Charger
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        {chargers.map((charger) => (
          <div key={charger.id} style={{ backgroundColor: '#161616', border: '1px solid #2A2A2A', borderRadius: '20px', padding: '24px', transition: '0.2s ease', cursor: 'default' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{ fontSize: '16px', fontWeight: 700, color: '#F0F0F0' }}>{charger.id}</span>
              <span style={{ backgroundColor: '#1A1A1A', color: '#ADADAD', borderRadius: '6px', padding: '2px 10px', fontSize: '11px' }}>{charger.type}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: statusColor[charger.status] }} />
              <span style={{ fontSize: '13px', color: statusColor[charger.status], fontWeight: 500 }}>{charger.status}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '11px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Power</span>
                <span style={{ fontSize: '13px', color: '#CCCCCC' }}>{charger.power}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '11px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Location</span>
                <span style={{ fontSize: '13px', color: '#CCCCCC' }}>{charger.location}</span>
              </div>
            </div>
            <div style={{ borderTop: '1px solid #1E1E1E', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Slots Today</span>
              <span style={{ fontSize: '16px', fontWeight: 700, color: '#F0F0F0' }}>{charger.bookings}</span>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ backgroundColor: '#161616', border: '1px solid #2A2A2A', borderRadius: '20px', padding: '32px', width: '480px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#F0F0F0', margin: 0 }}>Add Charger</h2>
              <button onClick={() => setShowModal(false)} style={{ background: 'none', border: 'none', color: '#999999', fontSize: '20px', cursor: 'pointer' }}>×</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '11px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Charger Name</label>
                <input placeholder="e.g. Charger G" style={{ width: '100%', backgroundColor: '#0D0D0D', border: '1px solid #2A2A2A', borderRadius: '8px', padding: '10px 14px', color: '#F0F0F0', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '11px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Type</label>
                <div style={{ position: 'relative' }}>
                  <select style={{ width: '100%', backgroundColor: '#0D0D0D', border: '1px solid #2A2A2A', borderRadius: '8px', padding: '10px 14px', paddingRight: '40px', color: '#F0F0F0', fontSize: '14px', outline: 'none', boxSizing: 'border-box', appearance: 'none' }}>
                    <option value="Slow">Slow</option>
                    <option value="Fast">Fast</option>
                  </select>
                  <span style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', color: '#999999', pointerEvents: 'none' }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 4L6 8L10 4" stroke="#999999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '11px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Power Output (kW)</label>
                <input placeholder="e.g. 22" style={{ width: '100%', backgroundColor: '#0D0D0D', border: '1px solid #2A2A2A', borderRadius: '8px', padding: '10px 14px', color: '#F0F0F0', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '11px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Location / Zone</label>
                <input placeholder="e.g. Zone 2" style={{ width: '100%', backgroundColor: '#0D0D0D', border: '1px solid #2A2A2A', borderRadius: '8px', padding: '10px 14px', color: '#F0F0F0', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '11px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Status</label>
                <div style={{ position: 'relative' }}>
                  <select style={{ width: '100%', backgroundColor: '#0D0D0D', border: '1px solid #2A2A2A', borderRadius: '8px', padding: '10px 14px', paddingRight: '40px', color: '#F0F0F0', fontSize: '14px', outline: 'none', boxSizing: 'border-box', appearance: 'none' }}>
                    <option value="Available">Available</option>
                    <option value="In Use">In Use</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                  <span style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', color: '#999999', pointerEvents: 'none' }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 4L6 8L10 4" stroke="#999999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
              <button onClick={() => setShowModal(false)} style={{ flex: 1, backgroundColor: '#1A1A1A', border: '1px solid #2A2A2A', borderRadius: '10px', padding: '12px', color: '#999999', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
                Cancel
              </button>
              <button onClick={() => setShowModal(false)} style={{ flex: 1, backgroundColor: '#4DA8FF', border: 'none', borderRadius: '10px', padding: '12px', color: '#0D0D0D', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
                Save Charger
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
