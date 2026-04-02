import { useMemo, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from './components/ui/button'

function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 18) return 'Good afternoon'
  return 'Good evening'
}

function App() {
  const greeting = useMemo(() => getGreeting(), [])
  const [name, setName] = useState('')

  const displayName = name.trim() || 'Friend'

  return (
    <main className="mx-auto my-20 flex min-h-screen w-full max-w-2xl flex-col items-center justify-center gap-6 px-6 text-slate-100">
      <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-10 shadow-xl shadow-black/30 backdrop-blur">
        <h1 className="mb-4 text-4xl font-bold text-white">{greeting}!</h1>
        <p className="mb-6 text-lg text-slate-300">
          The greeting is based on your local machine time.
        </p>

        <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="name">
          Enter your name
        </label>
        <input
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="mb-4 w-full rounded-lg border border-slate-600 bg-slate-950 px-3 py-2 text-white outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/40"
          placeholder="Your name"
          autoFocus
        />

        <Button onClick={() => alert(`${greeting}, ${displayName}!`)}>
          Greet me <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        <p className="mt-6 text-xl text-brand-accent">
          {greeting}, {displayName}!
        </p>
      </div>
    </main>
  )
}

export default App
