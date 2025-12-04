import React, { useContext } from 'react'
import AppContext from '../../conntext'

const BasketBlock = () => {
	const { userStar } = useContext(AppContext)

	console.log(userStar)
	

	return (
		<div className='flex items-center gap-12 justify-center flex-col py-12'>
			<div className='flex flex-col gap-4 items-center justify-center'>
				<div className='flex justify-center flex-wrap gap-8 '>
					{userStar.map(item => (
						<div
							key={item.id}
							className='flex flex-col bg-red-200 w-[300px]  rounded-4xl py-8 px-12 text-center gap-2 '
						>
							<img className='rounded-4xl' src={item.img} alt='' />
							<h2 className='text-2xl font-medium'>{item.title}</h2>
							<p className='text-lg '>{item.text}</p>
							<button
								onClick={console.log('ghbd')
								}
								className='py-3 px-8 bg-red-600 text-lg text-white rounded-4xl'
							>
								{item.total}$
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default BasketBlock