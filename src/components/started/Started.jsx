import React from 'react'

const Started = () => {
	return (
		<div className='flex justify-between bg-red-200 items-center rounded-4xl py-10 px-10'>
			<div className='flex flex-col gap-8 max-w-[590px]'>
				<span className='text-lg text-red-500 font-medium'>СКАЧАТЬ ПРИЛОЖЕНИЕ</span>
				<h2 className='text-4xl font-bold'>Начните заниматься Фудо уже сегодня!</h2>
				<p className='text-lg font-medium'>Находите еду где угодно и когда угодно и заказывайте ее быструю доставку.</p>
				<div className='flex items-center'>
					<button className='py-3 text-white font-medium px-12 bg-red-500 rounded-4xl'>Получить приложение</button>
					<img className='w-[410px]' src="/zan.png" alt="" />
				</div>
			</div>
			<div >
				<img className='w-[350px] rounded-4xl' src="/starteds.png" alt="" />
			</div>
		</div>
	)
}

export default Started