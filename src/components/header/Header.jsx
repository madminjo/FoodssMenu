import React from 'react'

const Header = () => {
	return (
		<div className='flex justify-between items-center py-5 px-7'>
			<div><h2 className='text-black text-2xl font-bold'>Foodss Menu</h2></div>
			<ul className='flex gap-4 items-center'>
				<li className='text-lg text-black font-medium'>Почему Foodeli?</li>
				<li className='text-lg text-black font-medium'>Услуги</li>
				<li className='text-lg text-black font-medium'>Меню</li>
				<li className='text-lg text-black font-medium'>Контакты</li>
			</ul>
			<div className='flex gap-4 items-center'>
				<button><img className='w-[26px]' src="/search.svg" alt="" /></button>
				<button><img className='w-[26px]' src="/basket.svg" alt="" /></button>
				<button className='bg-red-500 font-medium text-white text-lg py-3 px-8 rounded-2xl'>Контакты</button>
			</div>
		</div>
	)
}

export default Header