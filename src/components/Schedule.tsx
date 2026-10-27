import { useState } from 'react'
import { Calendar, Clock, MapPin } from 'lucide-react'

export default function Schedule() {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [pickup, setPickup] = useState('')
  const [dropoff, setDropoff] = useState('')
  const [scheduled, setScheduled] = useState(false)

  const scheduleRide = () => {
    if (date && time && pickup && dropoff) setScheduled(true)
  }

  if (scheduled) {
    return (
      <div className="p-6 text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-gold/20 flex items-center justify-center">
          <Calendar className="text-gold" size={32} />
        </div>
        <h2 className="text-2xl font-bold text-gold">Ride Scheduled!</h2>
        <p className="text-zinc-300">{date} at {time}</p>
        <p className="text-sm">{pickup} → {dropoff}</p>
        <button onClick={() => setScheduled(false)} className="mt-4 border border-gold text-gold px-6 py-2 rounded-xl">
          Schedule Another
        </button>
      </div>
    )
  }

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold text-gold flex items-center gap-2"><Calendar size={22} /> Schedule a Ride</h2>
      <div className="space-y-3">
        <input type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3" />
        <input type="time" value={time} onChange={e => setTime(e.target.value)} className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3" />
        <div className="relative">
          <MapPin className="absolute left-3 top-3 text-gold" size={18} />
          <input value={pickup} onChange={e => setPickup(e.target.value)} placeholder="Pickup" className="w-full bg-zinc-900 border border-zinc-700 rounded-xl pl-10 pr-4 py-3" />
        </div>
        <input value={dropoff} onChange={e => setDropoff(e.target.value)} placeholder="Dropoff" className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3" />
      </div>
      <button onClick={scheduleRide} className="w-full bg-gradient-to-r from-gold to-yellow-600 text-black font-bold py-4 rounded-xl">
        Schedule Ride
      </button>
      <p className="text-xs text-center text-zinc-500">Book up to 7 days in advance • Tesla preferred</p>
    </div>
  )
}
