'use client'

import Link from 'next/link'
import { Compass, ArrowLeft, Home } from 'lucide-react'

function NotFoundPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6">
      {/* ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-3xl" />

      {/* faint grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 flex max-w-lg flex-col items-center text-center">
        {/* signature: a compass with a needle that's spun off course */}
        <div className="relative mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-slate-800 bg-slate-900/60">
          <Compass
            className="h-11 w-11 text-amber-500"
            style={{ transform: 'rotate(35deg)' }}
            strokeWidth={1.5}
          />
          <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-amber-500" />
        </div>

        <h1 className="text-7xl font-semibold tracking-tight text-slate-100">
          404
        </h1>

        <p className="mt-3 text-lg font-medium text-slate-300">
          This page wandered off the map
        </p>

        <p className="mt-2 text-sm leading-relaxed text-slate-500">
          The link you followed might be broken, or the page may have been
          moved. Let&apos;s get you back on track.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-medium text-slate-950 transition-colors hover:bg-amber-400"
          >
            <Home className="h-4 w-4" />
            Back to home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-5 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Go back
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage