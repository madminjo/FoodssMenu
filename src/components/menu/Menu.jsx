import React from 'react'

const Menu = () => {
	const navLink = [
		{
			id: 1,
			img: '/menu/italian.svg',
			title: 'Маргарита',
			total: '20',
			text: 'Из чего приготовлено',
		},
		{
			id: 2,
			img: '/menu/italian.svg',
			title: 'Пепперони',
			total: '15',
			text: 'Из чего приготовлено',
		},
		{
			id: 3,
			img: '/menu/italian.svg',
			title: 'Гавайская',
			total: '10',
			text: 'Из чего приготовлено',
		},
		{
			id: 4,
			img: '/menu/italian.svg',
			title: 'Четыре сыра',
			total: '12',
			text: 'Из чего приготовлено',
		},
	]

	return (
		<div className='flex items-center gap-12 justify-center flex-col py-12'>
			<div>
				<h2 className='text-4xl font-bold'>Menu</h2>
			</div>

			<div className='flex flex-col gap-4 items-center justify-center'>
				<h2>Питцы</h2>
				<div className='flex justify-between gap-8'>
					{navLink.map(item => (
						<div
							key={item.id}
							className='flex flex-col bg-orange-200 rounded-4xl py-8 px-12 text-center gap-2'
						>
							<img src={item.img} alt='' />
							<h2 className='text-2xl font-medium'>{item.title}</h2>
							<p className='text-lg '>{item.text}</p>
							<button className='py-3 px-8 bg-red-600 text-lg text-white rounded-4xl'>
								{item.total}$
							</button>
						</div>
					))}
				</div>
			</div>
			<div className='flex flex-col gap-4 items-center justify-center'>
				<h2>Питцы</h2>
				<div className='flex justify-between gap-8'>
					{navLink.map(item => (
						<div
							key={item.id}
							className='flex flex-col bg-orange-200 rounded-4xl py-8 px-12 text-center gap-2'
						>
							<img src={item.img} alt='' />
							<h2 className='text-2xl font-medium'>{item.title}</h2>
							<p className='text-lg '>{item.text}</p>
							<button className='py-3 px-8 bg-red-600 text-lg text-white rounded-4xl'>
								{item.total}$
							</button>
						</div>
					))}
				</div>
			</div>

			<div className='flex flex-col gap-4 items-center justify-center'>
				<h2>Питцы</h2>
				<div className='flex justify-between gap-8'>
					{navLink.map(item => (
						<div
							key={item.id}
							className='flex flex-col bg-orange-200 rounded-4xl py-8 px-12 text-center gap-2'
						>
							<img src={item.img} alt='' />
							<h2 className='text-2xl font-medium'>{item.title}</h2>
							<p className='text-lg '>{item.text}</p>
							<button className='py-3 px-8 bg-red-600 text-lg text-white rounded-4xl'>
								{item.total}$
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Menu
