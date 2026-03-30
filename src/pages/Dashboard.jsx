const stats = [
  { key: 'total', label: 'Total Vehicles', value: '18', bottomColor: '#4DA8FF' },
  {
    key: 'charging',
    label: 'Charging Now',
    value: '6',
    bottomColor: '#3DDC84',
  },
  {
    key: 'ready',
    label: 'Ready for Shift',
    value: '10',
    bottomColor: '#F5A623',
  },
  {
    key: 'conflicts',
    label: 'Conflicts Detected',
    value: '2',
    bottomColor: '#FF4D4D',
  },
]

const vehicles = [
  { vehicle: 'EV-001', type: '2W', battery: '82%', shiftStart: '06:00', charger: 'Charger A', status: 'Ready' },
  { vehicle: 'EV-002', type: '4W', battery: '45%', shiftStart: '08:00', charger: 'Charger B', status: 'Charging' },
  { vehicle: 'EV-003', type: '2W', battery: '91%', shiftStart: '06:00', charger: 'None', status: 'Ready' },
  { vehicle: 'EV-004', type: '4W', battery: '23%', shiftStart: '10:00', charger: 'Charger C', status: 'Charging' },
  { vehicle: 'EV-005', type: '2W', battery: '67%', shiftStart: '08:00', charger: 'None', status: 'Ready' },
  { vehicle: 'EV-006', type: '4W', battery: '12%', shiftStart: '06:00', charger: 'Charger A', status: 'Conflict' },
  { vehicle: 'EV-007', type: '2W', battery: '88%', shiftStart: '12:00', charger: 'None', status: 'Ready' },
  { vehicle: 'EV-008', type: '4W', battery: '55%', shiftStart: '10:00', charger: 'Charger B', status: 'Charging' },
]

function getBatteryPct(battery) {
  const parsed = parseInt(String(battery).replace('%', ''), 10)
  if (Number.isNaN(parsed)) return 0
  return Math.max(0, Math.min(100, parsed))
}

function StatusBadge({ status }) {
  const variant =
    status === 'Ready'
      ? 'dash-badge--ready'
      : status === 'Charging'
        ? 'dash-badge--charging'
        : 'dash-badge--conflict'

  return <span className={`dash-badge ${variant}`}>{status}</span>
}

function BatteryCell({ battery }) {
  const pct = getBatteryPct(battery)
  const fillColor = pct < 30 ? '#FF4D4D' : '#4DA8FF'

  return (
    <div className="dash-battery">
      <div className="dash-battery__pct">{battery}</div>
      <div className="dash-battery__barTrack">
        <div
          className="dash-battery__barFill"
          style={{ width: `${pct}%`, backgroundColor: fillColor }}
        />
      </div>
    </div>
  )
}

export default function Dashboard() {
  return (
    <div className="dashboard">
      <style>{`
        .dashboard {
          font-family: 'Inter', system-ui, sans-serif;
          background: #0D0D0D;
          padding: 32px;
          min-height: 100vh;
          box-sizing: border-box;
        }

        .dashboard__title {
          font-size: 22px;
          font-weight: 700;
          color: #F0F0F0;
          margin-bottom: 4px;
        }

        .dashboard__subtitle {
          margin: 0 0 24px;
          color: #999999;
          font-size: 13px;
        }

        .dashboard__stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .stat-card {
          background: #161616;
          border: 1px solid #2A2A2A;
          border-radius: 20px;
          padding: 24px;
          box-sizing: border-box;
          box-shadow: 0 0 0 1px #1E1E1E inset;
          border-bottom: 2px solid #4DA8FF;
          transition: 0.2s ease;
        }

        .stat-card:hover {
          background: #1C1C1C;
          border-color: #333333;
        }

        .stat-card__label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #555555;
          margin-bottom: 12px;
        }

        .stat-card__number {
          font-size: 36px;
          font-weight: 800;
          color: #F0F0F0;
          line-height: 1;
        }

        .stat-card__number--conflicts {
          color: #FF4D4D;
        }

        .dashboard__section-title {
          margin: 32px 0 16px 0;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: #999999;
          text-transform: uppercase;
        }

        .dashboard__table-wrap {
          width: 100%;
          background: #161616;
          border-radius: 20px;
          border: 1px solid #2A2A2A;
          overflow: hidden;
        }

        .dashboard__table {
          width: 100%;
          border-collapse: collapse;
        }

        .dashboard__table th {
          background: #111111;
          padding: 14px 20px;
          font-size: 11px;
          letter-spacing: 0.08em;
          color: #999999;
          text-transform: uppercase;
          border-bottom: 1px solid #1E1E1E;
          font-weight: 600;
          text-align: left;
        }

        .dashboard__table td {
          padding: 16px 20px;
          font-size: 14px;
          color: #CCCCCC;
          border-bottom: 1px solid #1A1A1A;
          text-align: left;
        }

        .dashboard__table tbody tr:last-child td {
          border-bottom: none;
        }

        .dashboard__table tbody tr:hover td {
          background: #1C1C1C;
        }

        .dash-badge {
          border-radius: 20px;
          padding: 4px 14px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.04em;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid transparent;
          white-space: nowrap;
        }

        .dash-badge--ready {
          background: #0A2A1A;
          color: #3DDC84;
          border: 1px solid #1A4A2A;
        }

        .dash-badge--charging {
          background: #0A1E2E;
          color: #4DA8FF;
          border: 1px solid #1A3A5C;
        }

        .dash-badge--conflict {
          background: #2A0A0A;
          color: #FF4D4D;
          border: 1px solid #4A1A1A;
        }

        .dash-battery {
          display: inline-flex;
          flex-direction: column;
          gap: 6px;
          min-width: 92px;
        }

        .dash-battery__pct {
          font-size: 14px;
          font-weight: 700;
          color: #CCCCCC;
          line-height: 1.1;
        }

        .dash-battery__barTrack {
          height: 3px;
          border-radius: 2px;
          background: #222222;
          overflow: hidden;
        }

        .dash-battery__barFill {
          height: 100%;
          border-radius: 2px;
        }
      `}</style>

      <h1 className="dashboard__title">Dashboard</h1>
      <p className="dashboard__subtitle">Monday, 23 March 2026</p>

      <div className="dashboard__stats">
        {stats.map((s) => (
          <div
            key={s.key}
            className="stat-card"
            style={{ borderBottomColor: s.bottomColor }}
          >
            <div className="stat-card__label">{s.label}</div>
            <div
              className={
                s.key === 'conflicts'
                  ? 'stat-card__number stat-card__number--conflicts'
                  : 'stat-card__number'
              }
            >
              {s.value}
            </div>
          </div>
        ))}
      </div>

      <h2 className="dashboard__section-title">FLEET STATUS</h2>

      <div className="dashboard__table-wrap">
        <table className="dashboard__table">
          <thead>
            <tr>
              <th>Vehicle</th>
              <th>Type</th>
              <th>Battery %</th>
              <th>Shift Start</th>
              <th>Charger</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((row) => (
              <tr key={row.vehicle}>
                <td>{row.vehicle}</td>
                <td>{row.type}</td>
                <td>
                  <BatteryCell battery={row.battery} />
                </td>
                <td>{row.shiftStart}</td>
                <td>{row.charger}</td>
                <td>
                  <StatusBadge status={row.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
