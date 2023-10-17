import React from 'react'
// import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import Report from './Report'
import Slider from './Slider'
import Product from './Product'
import GridStats from './GridStats'


function Dashboard() {
    return (
        <div className='flex flex-row bg-neutral-100 h-screen w-screen '>
            <Sidebar />
            <div className='p-4 flex flex-col'>
                <Header/>  
                <GridStats/>
                <div className='flex w-[60rem]' style={{ marginTop: '10px',marginBottom:'10px' }}>
                    <Report/>
                    <div style={{ width: '10px' }}></div> {/* Spacer */}
                    <Slider />
                </div>
                <Product/>
            </div>
        </div>
    )
}

export default Dashboard