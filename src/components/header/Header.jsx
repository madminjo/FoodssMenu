import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {



	const { pathname } = useLocation()

return (
  <div className='flex justify-between items-center py-5 px-7'>
    <Link to='/'><h2 className='text-black text-2xl font-bold'>Foodss Menu</h2></Link>

    {
      pathname === '/' ? (
        <ul className='flex gap-4 items-center'>
          <Link to='/' ><li className='text-lg text-black font-medium'>Почему Foodeli?</li></Link>
          <Link to='/' ><li className='text-lg text-black font-medium'>Услуги</li></Link>
          <Link to='/' ><li className='text-lg text-black font-medium'>Меню</li></Link>
          <Link to='/' ><li className='text-lg text-black font-medium'>Контакты</li></Link>
        </ul>
      ) : (
        <div className='flex items-center gap-9'><h2 className='text-2xl font-medium'>Ваша карзина: </h2>   </div>
      )
    }

    <div className='flex gap-4 items-center'>
      <Link to='/'><img className='w-[26px]' src="/search.svg" alt="" /></Link>
      <Link to='/basket'><img className='w-[26px]' src="/basket.svg" alt="" /></Link>
      <button className='bg-red-500 font-medium text-white text-lg py-3 px-8 rounded-2xl'>Контакты</button>
    </div>

  </div>
)
}

export default Header
