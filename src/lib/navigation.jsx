import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	
} from 'react-icons/hi'
import {CgProfile} from 'react-icons/cg'



export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		icon: <HiOutlineViewGrid />,
       
	},
	{
		key: 'products',
		label: 'Products',
		icon: <HiOutlineCube />
	},
	{
		key: 'customers',
		label: 'Customers',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'income',
		label: 'Income',
		icon: <HiOutlineUsers />
	},
	{
		key: 'promote',
		label: 'Promote',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'help',
		label: 'Help',
		icon: <HiOutlineAnnotation />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'profile',
		label: 'Profile',
		icon: <CgProfile />
	},

]