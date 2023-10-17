import React from 'react'
import {HiOutlineSearch} from 'react-icons/hi'

function Header() {
  return (
    <div className="px-4 mx-17 flex items-center justify-between my-2">
		<h1>Hello,Dheeraj Singh</h1>
			<div className="relative mx-30" >
			
				<HiOutlineSearch fontSize={20} className="text-gray-400  absolute top-1/2 left-3 -translate-y-1/2" />
				
				<input
					type="text"
					placeholder="Search..."
					className="text-sm focus:outline-none active:outline-none border border-gray-300 w-[24rem] h-10 pl-11 pr-4 rounded-sm"
				/>
			</div>
            </div>
  )
}

export default Header