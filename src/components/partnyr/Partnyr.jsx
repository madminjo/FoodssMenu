import React from 'react'

const Partnyr = () => {

	const moxa = [
		{
			id: 1,
			img: '/onl.svg',
			title: 'Легко заказать',
			text: 'Для заказа еды вам нужно сделать всего несколько шагов'
		},
		{
			id: 2,
			img: '/devil.svg',
			title: 'Самая быстрая доставка',
			text: 'Доставка всегда вовремя и даже быстрее'
		},
		{
			id: 3,
			img: '/foodsre.svg',
			title: 'Лучшее качество',
			text: 'Для нас качество – это не только быстрота, но и номер один.'
		}
	]

	return (
		<div className='py-14'>
			<div className='flex flex-col gap-4 items-center text-center'>
				<p className='text-red-600 text-lg font-medium uppercase'>ЧТО МЫ ПРЕДОСТАВЛЯЕМ</p>
				<h2 className='text-4xl max-w-[600px] text-black font-bold'>Ваш Любимый Партнер по Доставке Еды</h2>
			</div>
			<div className='flex gap-6 justify-between mt-8 text-center'>
				{
					moxa.map((item) => (
						<div key={item.id} className='flex flex-col items-center gap-4'>
							<img src={item.img} alt={item.title} />
							<h2>{item.title}</h2>
							<p className='max-w-[314px]'>{item.text}</p>
						</div>
					))
				}
			</div>
		</div>
	)
}

export default Partnyr