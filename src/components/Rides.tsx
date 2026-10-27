import { Clock, CheckCircle } from 'lucide-react'

const MOCK_RIDES = [
  { id: 1, date: 'Oct 26', from: 'Downtown Toledo', to: 'Toledo Express Airport', status: 'Completed', price: 42.00 },
  { id: 2, date: 'Oct 24', from: 'Perrysburg', to: 'Fifth Third Field', status: 'Completed', price: 18.50 },
  { id: 3, date: 'Oct 20', from: 'Maumee', to: 'Toledo Zoo', status: 'Completed', price: 15.75 },
]

export default function Rides() {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold text-gold">Your Trips</h2>
      <div className="space-y-3">
        {MOCK_RIDES.map(ride => (
          <div key={ride.id} className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-medium">{ride.from} → {ride.to}</div>
                <div className="text-sm text-zinc-400 flex items-center gap-1 mt-1"><Clock size={12} /> {ride.date}</div>
              </div>
              <div className="text-right">
                <div className="text-gold font-bold">${ride.price.toFixed(2)}</div>
                <div className="text-xs text-green-400 flex items-center gap-1 justify-end mt-1"><CheckCircle size={12} /> {ride.status}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-zinc-500">All rides powered by local Tesla Navigators</p>
    </div>
  )
}
