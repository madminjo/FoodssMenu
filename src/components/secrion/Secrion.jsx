import React from 'react'

const Secrion = () => {
	return (
		<div className='max-w-[1400px] mx-auto flex items-center justify-between'>
			<div className='flex items-center'>
				<div className='flex flex-col gap-18 max-w-[710px]'>
					<div className='flex gap-2 py-3 px-8 bg-pink-300 w-[370px] items-center rounded-4xl'>
						<h2 className='text-lg font-medium text-red-600'>
							Больше, чем быстрееster
						</h2>
						<img src='/section/chery.svg' alt='' />
					</div>
					<div className='flex flex-col gap-6'>
						<h2 className='text-4xl text-black font-bold'>
							Воспользуйтесь лучшим предложением на{' '}
							<span className='text-red-600'>Фастфуд</span> &{' '}
							<span className='text-red-600'>Рестораны</span>{' '}
						</h2>
						<p className='text-lg font-medium text-black'>
							Наша работа — наполнить ваш желудок вкусной едой с быстрой и
							бесплатной доставкой.
						</p>
					</div>
					<div className='flex items-center '>
						<button className='py-3 px-12 bg-red-500 text-white text-lg font-medium rounded-2xl'>
							Начать
						</button>
						<button className='text-black flex items-center'>
							<img src='/section/play.svg' alt='' /> Смотреть видео
						</button>
					</div>
				</div>

				<div>
					<img className='w-[760px]' src='/section/im1.png' alt='' />
				</div>
			</div>
		</div>
	)
}

export default Secrion
