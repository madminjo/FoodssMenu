import React from 'react'
import Header from '../../components/header/Header'
import Secrion from '../../components/secrion/Secrion'
import Partnyr from '../../components/partnyr/Partnyr'
import Menu from '../../components/menu/Menu'
import Customer from '../../components/customer/Customer'
import Started from '../../components/started/Started'
import Footer from '../../components/footer/Footer'

const Home = () => {
	return (
		<div className='bg-white min-h-screen'>
			<div className='max-w-[1400px] p-8 mx-auto'>
				<Header />
				<Secrion />
				<Partnyr />
				<Menu />
				<Customer />
				<Started />
				<Footer />
			</div>
		</div>
	)
}

export default Home