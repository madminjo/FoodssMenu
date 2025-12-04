import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import BasketBlock from '../../components/basketBlock/BasketBlock'

const Basket = () => {
	return (
		<div className='bg-white min-h-screen'>
			<div className='max-w-[1400px] p-8 mx-auto'>
				<Header />
				<BasketBlock />
				<Footer />
			</div>
		</div>
	)
}

export default Basket
