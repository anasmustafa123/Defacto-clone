import React from 'react'
import HomeView from '../components/HomeView'

export default function HomePage() {
  return (
    <div className='flex flex-col justify-center items-center'>
    <div>
        <div className='h-[700px] ' > <HomeView/> </div>
    </div>
  
        <div className= " relative bg-slate-200 w-11/12" >
            
            <div className="p-6">DeFacto Online Clothing Store</div>
        
        </div>

  </div>
  )
}
