const logs = [
    { date: '28 Mar 2026', vehicle: 'EV-001', charger: 'Charger A', target: 80, achieved: 82, status: 'Met' },
    { date: '28 Mar 2026', vehicle: 'EV-002', charger: 'Charger B', target: 90, achieved: 76, status: 'Missed' },
    { date: '28 Mar 2026', vehicle: 'EV-003', charger: 'Charger A', target: 80, achieved: 80, status: 'Met' },
    { date: '28 Mar 2026', vehicle: 'EV-004', charger: 'Charger C', target: 70, achieved: 45, status: 'Missed' },
    { date: '27 Mar 2026', vehicle: 'EV-005', charger: 'Charger B', target: 80, achieved: 83, status: 'Met' },
    { date: '27 Mar 2026', vehicle: 'EV-006', charger: 'Charger A', target: 90, achieved: 91, status: 'Met' },
    { date: '27 Mar 2026', vehicle: 'EV-007', charger: 'Charger C', target: 75, achieved: 60, status: 'Missed' },
    { date: '26 Mar 2026', vehicle: 'EV-008', charger: 'Charger B', target: 80, achieved: 80, status: 'Met' },
  ]
  
  export default function ChargeLog() {
    return (
      <div style={{ backgroundColor: '#0D0D0D', padding: '32px', minHeight: '100vh' }}>
  
        <div style={{ marginBottom: '24px' }}>
          <h1 style={{ fontSize: '22px', fontWeight: 700, color: '#F0F0F0', margin: 0, marginBottom: '4px' }}>Charge Log</h1>
          <p style={{ fontSize: '13px', color: '#999999', margin: 0 }}>Historical record of charging sessions</p>
        </div>
  
        <div style={{ backgroundColor: '#161616', border: '1px solid #2A2A2A', borderRadius: '20px', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#111111', borderBottom: '1px solid #1E1E1E' }}>
                {['Date', 'Vehicle', 'Charger', 'Target %', 'Achieved %', 'Status'].map(h => (
                  <th key={h} style={{ padding: '14px 20px', fontSize: '11px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.08em', textAlign: 'left', fontWeight: 500 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {logs.map((log, i) => (
                <tr key={i} style={{ borderBottom: i < logs.length - 1 ? '1px solid #1A1A1A' : 'none' }}>
                  <td style={{ padding: '16px 20px', fontSize: '13px', color: '#999999' }}>{log.date}</td>
                  <td style={{ padding: '16px 20px', fontSize: '14px', color: '#F0F0F0', fontWeight: 500 }}>{log.vehicle}</td>
                  <td style={{ padding: '16px 20px', fontSize: '13px', color: '#CCCCCC' }}>{log.charger}</td>
                  <td style={{ padding: '16px 20px', fontSize: '14px', color: '#F0F0F0' }}>{log.target}%</td>
                  <td style={{ padding: '16px 20px', fontSize: '14px', color: log.achieved >= log.target ? '#22C55E' : '#FF4D4D', fontWeight: 600 }}>{log.achieved}%</td>
                  <td style={{ padding: '16px 20px' }}>
                    <span style={{
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '11px',
                      fontWeight: 600,
                      backgroundColor: log.status === 'Met' ? '#0A2A1A' : '#2A0A0A',
                      color: log.status === 'Met' ? '#3DDC84' : '#FF4D4D',
                      border: `1px solid ${log.status === 'Met' ? '#1A4A2A' : '#4A1A1A'}`,
                    }}>{log.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  