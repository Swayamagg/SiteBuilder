import { ArrowLeft } from 'lucide-react'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='min-h-screen bg-[#050505] text-white'>
        <div className='sticky top-0 z-40 backdrop-blur-xl bg-black/50 border-b border-white/10'>
            <div className='max-w-7xl mx-auto px-6 h-16 flex items-center justify-between'>
              <div className='flex items-center gap-4'>
                <button className='p-2 rounded-lg hover:bg-white/10 transition'><ArrowLeft size={16}/></button>
                <h1 className='text-lg font-semibold'>Dashboard</h1>
              </div>
              <button className='px-4 py-2 rounded-lg bg-white text-black text-sm font-semibold hover:scale-105 transition'>+ New Website</button>
            </div>
        </div>
   </div>
  )
}

export default Dashboard