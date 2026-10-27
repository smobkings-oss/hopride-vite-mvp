import { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { MapPin, Navigation, Car, Clock } from 'lucide-react'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

const TOLEDO = [41.6528, -83.5379] as [number, number]

export default function Home() {
  const [pickup, setPickup] = useState('')
  const [dropoff, setDropoff] = useState('')
  const [step, setStep] = useState<'input' | 'estimate' | 'confirmed'>('input')
  const [estimate] = useState({ price: 18.50, time: '12 min', distance: '6.2 mi' })

  const requestRide = () => {
    if (!pickup || !dropoff) return
    setStep('estimate')
  }

  const confirmRide = () => {
    setStep('confirmed')
  }

  return (
    <div className="h-full flex flex-col">
      <div className="h-64 relative">
        <MapContainer center={TOLEDO} zoom={13} className="h-full w-full">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={TOLEDO}>
            <Popup>Toledo Metro Area</Popup>
          </Marker>
        </MapContainer>
        <div className="absolute top-3 left-3 right-3 bg-black/80 backdrop-blur rounded-xl p-3 border border-gold/20">
          <div className="flex items-center gap-2 text-sm text-gold">
            <Car size={16} /> Instant Ride • Tesla Fleet Available
          </div>
        </div>
      </div>

      <div className="flex-1 p-4 space-y-4">
        {step === 'input' && (
          <>
            <div className="space-y-3">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 text-gold" size={18} />
                <input
                  value={pickup}
                  onChange={e => setPickup(e.target.value)}
                  placeholder="Pickup location"
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl pl-10 pr-4 py-3 text-white placeholder-zinc-500 focus:border-gold outline-none"
                />
              </div>
              <div className="relative">
                <Navigation className="absolute left-3 top-3 text-gold" size={18} />
                <input
                  value={dropoff}
                  onChange={e => setDropoff(e.target.value)}
                  placeholder="Where to?"
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl pl-10 pr-4 py-3 text-white placeholder-zinc-500 focus:border-gold outline-none"
                />
              </div>
            </div>
            <button
              onClick={requestRide}
              className="w-full bg-gradient-to-r from-gold to-yellow-600 text-black font-bold py-4 rounded-xl text-lg hover:opacity-90 transition"
            >
              Get Instant Ride
            </button>
            <p className="text-center text-xs text-zinc-500">Black/Gold Tesla service in NW Ohio</p>
          </>
        )}

        {step === 'estimate' && (
          <div className="bg-zinc-900 rounded-2xl p-5 border border-gold/30 space-y-4">
            <h2 className="text-lg font-bold text-gold">Ride Estimate</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-zinc-400">From</span><span>{pickup}</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">To</span><span>{dropoff}</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">Distance</span><span>{estimate.distance}</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">ETA</span><span className="flex items-center gap-1"><Clock size={14} /> {estimate.time}</span></div>
              <div className="flex justify-between text-xl font-bold text-gold pt-2 border-t border-zinc-700">
                <span>Price</span><span>${estimate.price.toFixed(2)}</span>
              </div>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setStep('input')} className="flex-1 border border-zinc-600 py-3 rounded-xl">Back</button>
              <button onClick={confirmRide} className="flex-1 bg-gold text-black font-bold py-3 rounded-xl">Confirm Ride</button>
            </div>
          </div>
        )}

        {step === 'confirmed' && (
          <div className="bg-zinc-900 rounded-2xl p-6 border border-gold/40 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-gold/20 flex items-center justify-center">
              <Car className="text-gold" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gold">Ride Confirmed!</h2>
            <p className="text-zinc-300">Your HopRide is on the way.</p>
            <p className="text-sm text-zinc-400">Driver will arrive in ~{estimate.time}</p>
            <button onClick={() => { setStep('input'); setPickup(''); setDropoff('') }} className="w-full border border-gold text-gold py-3 rounded-xl mt-4">
              New Ride
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
