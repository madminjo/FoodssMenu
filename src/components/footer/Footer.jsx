import React from 'react'

const Footer = () => {
	const navlink = [
		{
			id: 1,
			img: '/footer/ins.svg',
		},
		{
			id: 2,
			img: '/footer/fac.svg',
		},
		{
			id: 3,
			img: '/footer/tew.svg',
		},
	]

	const navlinka = [
		{
			id: 1,
			title: 'О нас',
		},
		{
			id: 2,
			title: 'Компания',
		},
		{
			id: 3,
			title: 'Поддержка',
		},
		{
			id: 4,
			title: 'Контакты',
		},
	]

	return (
		<div className='flex gap-6 justify-between flex-col mt-15'>
			<div className='flex  justify-between gap-5'>
				<div className='flex flex-col gap-8 max-w-[330px]'>
					<h2 className='text-4xl font-bold'>Foodss Menu</h2>
					<p className='text-lg font-medium'>
						Наша работа — наполнить ваш желудок вкусной едой с быстрой и
						бесплатной доставкой.
					</p>
					<div className='flex gap-2'>
						{navlink.map(item => (
							<img key={item.id} src={item.img} alt='' />
						))}
					</div>
				</div>
				<div className='flex flex-col gap-6'>
					<h2 className='text-2xl font-bold'>About</h2>
					<div className='flex flex-col gap-4'>
						{navlinka.map(item => (
							<p key={item.id} className='text-lg font-medium'>
								{item.title}
							</p>
						))}
					</div>
				</div>
				<div className='flex flex-col gap-6'>
					<h2 className='text-2xl font-bold'>About</h2>
					<div className='flex flex-col gap-4'>
						{navlinka.map(item => (
							<p key={item.id} className='text-lg font-medium'>
								{item.title}
							</p>
						))}
					</div>
				</div>
				<div className='flex flex-col gap-6'>
					<h2 className='text-2xl font-bold'>About</h2>
					<div className='flex flex-col gap-4'>
						{navlinka.map(item => (
							<p key={item.id} className='text-lg font-medium'>
								{item.title}
							</p>
						))}
					</div>
				</div>

				<div className='flex flex-col gap-7'>
					<h2 className='text-2xl font-bold'>Свяжитесь с нами</h2>
					<p className='text-lg font-medium'>Вопрос или отзыв?</p>
					<p className='text-lg font-medium'>Мы будем рады услышать от вас</p>
					<button className='flex gap-4 items-center py-3 px-8 border-2 rounded-3xl border-gray-300'>
						Адрес электронной почты <img src='/footer/left.svg' alt='' />
					</button>
				</div>
			</div>
			<div className='flex justify-between mt-8 text-xs'>
				<p>© 2025 — Все права защищены.</p><p>Создание сайта SCRAY.</p>
			</div>
		</div>
	)
}

export default Footer
