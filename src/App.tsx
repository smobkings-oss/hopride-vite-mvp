import { useState } from 'react'
import Home from './components/Home'
import Rides from './components/Rides'
import Schedule from './components/Schedule'
import Profile from './components/Profile'
import { Home as HomeIcon, Clock, List, User } from 'lucide-react'

type Tab = 'home' | 'rides' | 'schedule' | 'profile'

export default function App() {
  const [tab, setTab] = useState<Tab>('home')

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <header className="bg-gradient-to-r from-black via-zinc-900 to-black border-b border-gold/30 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center text-black font-bold">H</div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">HopRide</h1>
        </div>
        <span className="text-xs text-gold/70">NW Ohio</span>
      </header>

      <main className="flex-1 overflow-auto">
        {tab === 'home' && <Home />}
        {tab === 'rides' && <Rides />}
        {tab === 'schedule' && <Schedule />}
        {tab === 'profile' && <Profile />}
      </main>

      <nav className="border-t border-gold/20 bg-zinc-950 flex justify-around py-2">
        <button onClick={() => setTab('home')} className={`flex flex-col items-center gap-1 px-4 py-1 ${tab === 'home' ? 'text-gold' : 'text-zinc-400'}`}>
          <HomeIcon size={20} />
          <span className="text-xs">Ride</span>
        </button>
        <button onClick={() => setTab('schedule')} className={`flex flex-col items-center gap-1 px-4 py-1 ${tab === 'schedule' ? 'text-gold' : 'text-zinc-400'}`}>
          <Clock size={20} />
          <span className="text-xs">Schedule</span>
        </button>
        <button onClick={() => setTab('rides')} className={`flex flex-col items-center gap-1 px-4 py-1 ${tab === 'rides' ? 'text-gold' : 'text-zinc-400'}`}>
          <List size={20} />
          <span className="text-xs">Trips</span>
        </button>
        <button onClick={() => setTab('profile')} className={`flex flex-col items-center gap-1 px-4 py-1 ${tab === 'profile' ? 'text-gold' : 'text-zinc-400'}`}>
          <User size={20} />
          <span className="text-xs">Profile</span>
        </button>
      </nav>
    </div>
  )
}
