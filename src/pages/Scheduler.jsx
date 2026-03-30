import { useState } from 'react'

const hours = Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, '0')}:00`)

const vehicles = [
  { id: 'EV-001', shiftStart: 6, shiftDuration: 8, chargeStart: 1, chargeDuration: 4, charger: 'Charger A', status: 'ready' },
  { id: 'EV-002', shiftStart: 8, shiftDuration: 8, chargeStart: 3, chargeDuration: 5, charger: 'Charger B', status: 'charging' },
  { id: 'EV-003', shiftStart: 6, shiftDuration: 8, chargeStart: 0, chargeDuration: 3, charger: 'Charger A', status: 'conflict' },
  { id: 'EV-004', shiftStart: 10, shiftDuration: 8, chargeStart: 5, chargeDuration: 4, charger: 'Charger C', status: 'charging' },
  { id: 'EV-005', shiftStart: 8, shiftDuration: 8, chargeStart: 2, chargeDuration: 3, charger: 'Charger B', status: 'ready' },
  { id: 'EV-006', shiftStart: 6, shiftDuration: 8, chargeStart: 0, chargeDuration: 3, charger: 'Charger A', status: 'conflict' },
]

const statusColors = {
  ready: '#22C55E',
  charging: '#4DA8FF',
  conflict: '#FF4D4D',
}

export default function Scheduler() {
  const [selected, setSelected] = useState(null)

  return (
    <div style={{ backgroundColor: '#0D0D0D', padding: '32px', minHeight: '100vh' }}>

      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '22px', fontWeight: 700, color: '#F0F0F0', margin: 0, marginBottom: '4px' }}>Scheduler</h1>
        <p style={{ fontSize: '13px', color: '#999999', margin: 0 }}>Timeline view of vehicle shifts and charging slots</p>
      </div>

      <div style={{ backgroundColor: '#161616', border: '1px solid #2A2A2A', borderRadius: '20px', overflow: 'hidden' }}>

        <div style={{ display: 'flex', borderBottom: '1px solid #1E1E1E' }}>
        <div style={{ width: '120px', minWidth: '120px', padding: '12px 16px', fontSize: '11px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500, borderRight: '1px solid #1E1E1E' }}>Vehicle</div>
          <div style={{ flex: 1, display: 'flex' }}>
            {hours.map(h => (
              <div key={h} style={{ minWidth: '60px', flex: 1, padding: '12px 4px', fontSize: '10px', color: '#555555', textAlign: 'center', borderRight: '1px solid #1A1A1A' }}>{h}</div>
            ))}
          </div>
        </div>

        {vehicles.map((v, i) => (
          <div key={v.id} style={{ display: 'flex', borderBottom: i < vehicles.length - 1 ? '1px solid #1A1A1A' : 'none', cursor: 'pointer' }} onClick={() => setSelected(v)}>
            <div style={{ width: '120px', minWidth: '120px', padding: '16px', fontSize: '13px', color: '#F0F0F0', fontWeight: 500, borderRight: '1px solid #1E1E1E', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: statusColors[v.status], flexShrink: 0 }} />
              {v.id}
            </div>
            <div style={{ flex: 1, position: 'relative', height: '52px' }}>
              <div style={{
                position: 'absolute',
                left: `${(v.chargeStart / 24) * 100}%`,
                width: `${(v.chargeDuration / 24) * 100}%`,
                top: '8px',
                height: '16px',
                backgroundColor: v.status === 'conflict' ? 'rgba(255,77,77,0.2)' : 'rgba(77,168,255,0.15)',
                border: `1px solid ${v.status === 'conflict' ? '#FF4D4D' : '#4DA8FF'}`,
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '6px',
                fontSize: '9px',
                color: v.status === 'conflict' ? '#FF4D4D' : '#4DA8FF',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
              }}>
                ⚡ {v.charger}
              </div>
              <div style={{
                position: 'absolute',
                left: `${(v.shiftStart / 24) * 100}%`,
                width: `${(v.shiftDuration / 24) * 100}%`,
                top: '28px',
                height: '16px',
                backgroundColor: 'rgba(34,197,94,0.12)',
                border: '1px solid rgba(34,197,94,0.35)',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '6px',
                fontSize: '9px',
                color: '#22C55E',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
              }}>
                🚗 Shift
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '20px', marginTop: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '12px', height: '4px', backgroundColor: '#4DA8FF', borderRadius: '2px' }} />
          <span style={{ fontSize: '12px', color: '#999999' }}>Charging Slot</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '12px', height: '4px', backgroundColor: '#22C55E', borderRadius: '2px' }} />
          <span style={{ fontSize: '12px', color: '#999999' }}>Shift</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '12px', height: '4px', backgroundColor: '#FF4D4D', borderRadius: '2px' }} />
          <span style={{ fontSize: '12px', color: '#999999' }}>Conflict</span>
        </div>
      </div>

      {selected && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ backgroundColor: '#161616', border: '1px solid #2A2A2A', borderRadius: '20px', padding: '32px', width: '420px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#F0F0F0', margin: 0 }}>{selected.id}</h2>
              <button onClick={() => setSelected(null)} style={{ background: 'none', border: 'none', color: '#999999', fontSize: '20px', cursor: 'pointer' }}>×</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { label: 'Charger', value: selected.charger },
                { label: 'Charge Start', value: `${String(selected.chargeStart).padStart(2, '0')}:00` },
                { label: 'Charge Duration', value: `${selected.chargeDuration} hours` },
                { label: 'Shift Start', value: `${String(selected.shiftStart).padStart(2, '0')}:00` },
                { label: 'Status', value: selected.status.charAt(0).toUpperCase() + selected.status.slice(1) },
              ].map(row => (
                <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '12px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{row.label}</span>
                  <span style={{ fontSize: '14px', color: row.label === 'Status' ? statusColors[selected.status] : '#F0F0F0', fontWeight: 500 }}>{row.value}</span>
                </div>
              ))}
            </div>
            {selected.status === 'conflict' && (
              <div style={{ marginTop: '20px', padding: '14px', backgroundColor: 'rgba(255,77,77,0.08)', border: '1px solid rgba(255,77,77,0.25)', borderRadius: '10px' }}>
                <p style={{ fontSize: '12px', color: '#FF4D4D', margin: 0 }}>⚠ Conflict detected. Two vehicles are assigned to the same charger at the same time.</p>
              </div>
            )}
            <button onClick={() => setSelected(null)} style={{ width: '100%', marginTop: '20px', backgroundColor: '#4DA8FF', border: 'none', borderRadius: '10px', padding: '12px', color: '#0D0D0D', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

