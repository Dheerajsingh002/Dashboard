import React from 'react'
import { LuLayoutDashboard } from "react-icons/lu";
import { FaGreaterThan } from "react-icons/fa";
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../lib/navigation';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className='bg w-60 p-3 flex flex-col text-white'>
      <div className='flex items-center gap-2 px-2 py-3'>
      <LuLayoutDashboard fontSize={24}/>
       <span className='text-neutral-100 text-lg'>Dashboard</span>
      </div>
      <div className='flex-1 py-8 flex flex-col gap-0.5'>
        {DASHBOARD_SIDEBAR_LINKS.map((item)=>
        (
          <div key={item.key} className='flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'>
            <span className='text-xl'>{item.icon}</span>
            {item.label} 
          </div>
        
        ))}
      </div>
      <div>
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item)=>
        (
          <div key={item.key} className='flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'>
          <span className='text-xl'>{item.icon}</span>
          {item.label}
          </div>

        ))}
      </div>
    </div>
  )
}

export default Sidebar