import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Vehicles from './pages/Vehicles'
import ChargingPoints from './pages/ChargingPoints'
import Scheduler from './pages/Scheduler'
import ChargeLog from './pages/ChargeLog'
import './App.css'

const placeholder = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 'calc(100vh - 64px)',
}

const mainStyle = {
  boxSizing: 'border-box',
  minHeight: '100vh',
  width: '100%',
  padding: '32px 32px 32px 272px',
  backgroundColor: '#0A0A0A',
}

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <main style={mainStyle}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/charging-points" element={<ChargingPoints />} />
          <Route path="/scheduler" element={<Scheduler />} />
          <Route path="/log" element={<ChargeLog />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
