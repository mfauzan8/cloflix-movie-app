import React from 'react'
import icon1 from "../assets/icons/icon-4.png";
import icon2 from "../assets/icons/icon-5.png";
import icon3 from "../assets/icons/icon-6.png";

const Manfaat = () => {
  return (
    <div className="flex justify-center flex-col gap-11 px-20 py-16">
    <h2 className="text-4xl text-center font-bold leading-50">Manfaat Sertifikasi Industri Hijau 
    <p>bagi Perusahaan</p>
    </h2>
    <div className="grid grid-cols-3 gap-6">
      <div className="flex justify-center items-center flex-col py-0 px-4 gap-4">
      <img src={icon1} alt="icon1" />
      <p className="text-xl font-bold" >Peningkatan Citra Perusahaan</p>
      <span className="text-md text-center"> Citra perusahaan akan bertambah di mata konsumen, mitra bisnis, dan masyarakat karena menunjukan komitmen perusahaan yang bertanggung jawab lingkungan.</span>
      </div>
      <div className="flex justify-center items-center flex-col py-0 px-4 gap-4">
      <img src={icon2} alt="icon2" />
      <p className="text-xl font-bold" >Peningkatan Citra Perusahaan</p>
      <span className="text-md text-center"> Citra perusahaan akan bertambah di mata konsumen, mitra bisnis, dan masyarakat karena menunjukan komitmen perusahaan yang bertanggung jawab lingkungan.</span>
      </div>
      <div className="flex justify-center items-center flex-col py-0 px-4 gap-4">
      <img src={icon3} alt="icon3" />
      <p className="text-xl font-bold" >Peningkatan Citra Perusahaan</p>
      <span className="text-md text-center"> Citra perusahaan akan bertambah di mata konsumen, mitra bisnis, dan masyarakat karena menunjukan komitmen perusahaan yang bertanggung jawab lingkungan.</span>
      </div>
    </div>
  </div>
  )
}

export default Manfaat