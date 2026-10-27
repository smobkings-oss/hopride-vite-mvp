import { CreditCard, Shield, Settings, LogOut } from 'lucide-react'

export default function Profile() {
  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center text-black text-2xl font-bold">R</div>
        <div>
          <h2 className="text-xl font-bold">Rider</h2>
          <p className="text-zinc-400 text-sm">NW Ohio • Member</p>
        </div>
      </div>

      <div className="space-y-2">
        {[
          { icon: CreditCard, label: 'Payment Methods' },
          { icon: Shield, label: 'Safety Center' },
          { icon: Settings, label: 'Settings' },
        ].map(({ icon: Icon, label }) => (
          <button key={label} className="w-full flex items-center gap-3 bg-zinc-900 rounded-xl p-4 border border-zinc-800 hover:border-gold/40 transition">
            <Icon size={20} className="text-gold" />
            <span>{label}</span>
          </button>
        ))}
        <button className="w-full flex items-center gap-3 text-red-400 p-4">
          <LogOut size={20} />
          <span>Sign Out</span>
        </button>
      </div>

      <div className="text-center text-xs text-zinc-500 pt-4">
        HopRide • Driver-First • Tesla Fleet<br />Toledo Metro Launch
      </div>
    </div>
  )
}
