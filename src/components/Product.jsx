import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

const popularProducts = [
	{
		id: '1',
		product_name: 'Abstract 3D"',
		product_thumbnail: 'https://source.unsplash.com/100x100?macbook',
		product_price: '$1499.00',
		product_stock: 341,
        Total_Sales:20
	},
	{
		id: '2',
		product_name: 'Sarphens illustration',
		product_thumbnail: 'https://source.unsplash.com/100x100?headphones',
		product_price: '$399.00',
		product_stock: 24,
        Total_Sales:20
	},

	
]

function Product() {
	return (
		<div className="w-[60rem] bg-white p-4  border border-gray-200 rounded">
			<strong className="text-gray-700 font-medium">Popular Sell</strong>
			<div className="mt-4 flex flex-col gap-3">
				{popularProducts.map((product) => (
					<Link
						key={product.id}
						to={`/product/${product.id}`}
						className="flex items-start hover:no-underline"
					>
						<div className="w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm">
							<img
								className="w-full h-full object-cover rounded-sm"
								src={product.product_thumbnail}
								alt={product.product_name}
							/>
						</div>
						<div className="ml-4 flex-1">
                            
							<p className="text-sm text-gray-800">{product.product_name}</p>
							<span
								className={classNames(
									product.product_stock === 0
										? 'text-red-500'
										: product.product_stock > 50
										? 'text-green-500'
										: 'text-orange-500',
									'text-xs font-medium'
								)}
							>
								{product.product_stock === 0 ? 'Out of Stock' : product.product_stock + ' in Stock'}
                               
							</span>
						</div>
                         
						<div className="text-xs text-gray-400 pl-1.5 px-2">{product.product_price}</div>
                        <div className="text-xs text-gray-400 pl-1.5"> {product.Total_Sales}</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default Product