import React from 'react'
import logo from '../assets/image/Logo.png';

const Navbar = () => {
  return (
    <div className="flex gap-6 items-center font-raleway justify-between px-20 py-6">
        <img src={logo} alt="logo"  className='custom-logo' />
        <ul className="flex text-xl gap-10">
        <li className='text-primary font-bold'>
          Beranda <span className='border-b-2 border-primary inline-block w-full rounded-sm'></span>
        </li>
          <li>Profile</li>
          <li>Directory</li>
          <li>Regulasi</li>
          <li>Agenda</li>
        </ul>
      <div className='flex gap-2 font-bold'>
        <button className='border border-primary text-primary px-6 py-3 rounded-xl'>Masuk</button>
        <button className='bg-primary text-white px-6 py-3 rounded-xl'>Ambil Sertifikasi</button>
      </div>
    </div>
  )
}

export default Navbar