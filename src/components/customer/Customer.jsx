import React from 'react'

const Customer = () => {


	return (
		<div className='flex gap-19 justify-between items-center'>
			<div>
				<img className='w-[660px]' src="/custmer/cook.png" alt="" />
			</div>
			<div className='flex gap-8 flex-col'>
				<span className='text-red-600 font-medium uppercase text-lg'>ЧТО ОНИ ГОВОРЯТ</span>
				<h2 className='text-4xl font-bold'>Что говорят о нас наши клиенты</h2>
				<p className='max-w-[505px] text-lg font-medium'>«Fudo — лучшее. Помимо обилия вкуснейших блюд, обслуживание также очень хорошее, особенно быстрая доставка. Настоятельно рекомендую Fudo».</p>
				<div className='flex gap-4 items-center'>
					<img src="/custmer/logos.svg" alt="" />
					<div className='flex flex-col'>
						<span className='font-bold text-xl'>Theresa Jordan</span>
						<p className='font-medium'>Food Enthusiast</p>
					</div>
				</div>
				<div className='flex gap-4'>
					<img src="/custmer/start.svg" alt="" />
					<img src="/custmer/start.svg" alt="" />
					<img src="/custmer/start.svg" alt="" />
					<img src="/custmer/start.svg" alt="" />
					<img src="/custmer/starts.svg" alt="" />
					<p>4.8</p>
				</div>
			</div>
		</div>
	)
}

export default Customer