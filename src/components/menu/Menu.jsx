import React, { useContext } from 'react'
import AppContext from '../../conntext'

const Menu = () => {
	const { setStar, userStar } = useContext(AppContext)

	console.log(userStar)

	const pizzaItems = [
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

	const burgerItems = [
		{
			id: 1,
			img: '/menu/minBurgers.png',
			title: 'Чизбургер',
			total: '18',
			text: 'Из чего приготовлено',
		},
		{
			id: 2,
			img: '/menu/minBurgers.png',
			title: 'Гамбургер',
			total: '14',
			text: 'Из чего приготовлено',
		},
		{
			id: 3,
			img: '/menu/minBurgers.png',
			title: 'Биг Мак',
			total: '22',
			text: 'Из чего приготовлено',
		},
		{
			id: 4,
			img: '/menu/minBurgers.png',
			title: 'Дабл Чиз',
			total: '25',
			text: 'Из чего приготовлено',
		},
	]

	const cakeItems = [
		{
			id: 1,
			img: '/menu/cake.png',
			title: 'Чизкейк',
			total: '8',
			text: 'Из чего приготовлено',
		},
		{
			id: 2,
			img: '/menu/cake.png',
			title: 'Шоколадный торт',
			total: '9',
			text: 'Из чего приготовлено',
		},
		{
			id: 3,
			img: '/menu/cake.png',
			title: 'Наполеон',
			total: '7',
			text: 'Из чего приготовлено',
		},
		{
			id: 4,
			img: '/menu/cake.png',
			title: 'Тирамису',
			total: '11',
			text: 'Из чего приготовлено',
		},
	]

	const drinkItems = [
		{
			id: 1,
			img: '/menu/drink.png',
			title: 'Кофе',
			total: '5',
			text: 'Из чего приготовлено',
		},
		{
			id: 2,
			img: '/menu/drink.png',
			title: 'Чай',
			total: '4',
			text: 'Из чего приготовлено',
		},
		{
			id: 3,
			img: '/menu/drink.png',
			title: 'Сок',
			total: '6',
			text: 'Из чего приготовлено',
		},
		{
			id: 4,
			img: '/menu/drink.png',
			title: 'Кола',
			total: '7',
			text: 'Из чего приготовлено',
		},
	]
const handleAdd = item => {
  setStar(prev => [...prev, item]);
  console.log('Добавлено:', item);
}


	return (
		<div className='flex items-center gap-12 justify-center flex-col py-12'>
			<div>
				<h2 className='text-4xl font-bold'>Menu</h2>
			</div>

			<div className='flex flex-col gap-4 items-center justify-center'>
				<h2>Пиццы</h2>
				<div className='flex justify-between gap-8'>
					{pizzaItems.map(item => (
						<div
							key={item.id}
							className='flex flex-col bg-red-200 rounded-4xl py-8 px-12 text-center gap-2'
						>
							<img className='rounded-4xl' src={item.img} alt='' />
							<h2 className='text-2xl font-medium'>{item.title}</h2>
							<p className='text-lg '>{item.text}</p>
							<button
								onClick={() => handleAdd(item)}
								className='py-3 px-8 bg-red-600 text-lg text-white rounded-4xl'
							>
								{item.total}$
							</button>
						</div>
					))}
				</div>
			</div>
			<div className='flex flex-col gap-4 items-center justify-center'>
				<h2>Бургеры</h2>
				<div className='flex justify-between gap-8'>
					{burgerItems.map(item => (
						<div
							key={item.id}
							className='flex flex-col bg-red-200 rounded-4xl py-8 px-12 text-center gap-2'
						>
							<img className='rounded-[20px]' src={item.img} alt='' />
							<h2 className='text-2xl font-medium'>{item.title}</h2>
							<p className='text-lg '>{item.text}</p>
							<button
								onClick={() => handleAdd(item)}
								className='py-3 px-8 bg-red-600 text-lg text-white rounded-4xl'
							>
								{item.total}$
							</button>
						</div>
					))}
				</div>
			</div>

			<div className='flex flex-col gap-4 items-center justify-center'>
				<h2>Кейк (десерты)</h2>
				<div className='flex justify-between gap-8'>
					{cakeItems.map(item => (
						<div
							key={item.id}
							className='flex flex-col bg-red-200 rounded-4xl py-8 px-12 text-center gap-2'
						>
							<img src={item.img} alt='' />
							<h2 className='text-2xl font-medium'>{item.title}</h2>
							<p className='text-lg '>{item.text}</p>
							<button
								onClick={() => handleAdd(item)}
								className='py-3 px-8 bg-red-600 text-lg text-white rounded-4xl'
							>
								{item.total}$
							</button>
						</div>
					))}
				</div>
			</div>

			<div className='flex flex-col gap-4 items-center justify-center'>
				<h2>Напитки</h2>
				<div className='flex justify-between gap-8'>
					{drinkItems.map(item => (
						<div
							key={item.id}
							className='flex flex-col bg-red-200 rounded-4xl py-8 px-12 text-center gap-2'
						>
							<img src={item.img} alt='' />
							<h2 className='text-2xl font-medium'>{item.title}</h2>
							<p className='text-lg '>{item.text}</p>
							<button
								onClick={() => handleAdd(item)}
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

export default Menu
