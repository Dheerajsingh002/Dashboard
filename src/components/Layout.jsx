import React from 'react'
// import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import Report from './Report'
import Slider from './Slider'


function Layout() {
    return (
        <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
            <Sidebar />
            <div className='p-4 flex flex-col'>
                <Header />
                <div className='flex' style={{ marginTop: '10px' }}>
                    <Report/>
                    <div style={{ width: '10px' }}></div> {/* Spacer */}
                    <Slider />
                </div>
            </div>
        </div>
    )
}

export default Layout