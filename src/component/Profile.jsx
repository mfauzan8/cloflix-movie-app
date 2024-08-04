import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";
import icon1 from "../assets/icons/icon-1.png";
import icon2 from "../assets/icons/icon-2.png";
import icon3 from "../assets/icons/icon-3.png";

const Profile = () => {
  return (
    <div className="flex">
        <div className="flex justify-center w-1/4 bg-gray-100 px-20 py-11">
          <ul className="flex flex-col text-5xl font-extrabold gap-11 w-187">
            <li className="flex flex-col gap-3">
              <div className="flex justify-center items-center gap-2 font-raleway text-blue">
                35
                <span className="text-secondary text-normal text-inter text-base">
                  <FaArrowTrendUp />
                </span>
              </div>
              <p className="text-md font-normal text-inter">
                Perusahaan Tersertifikasi
              </p>
            </li>
            <li className="flex flex-col gap-2">
              <div className="flex justify-center items-center gap-2 font-raleway text-blue">
                420
                <span className="text-secondary text-normal text-inter text-base">
                  <FaArrowTrendUp />
                </span>
              </div>
              <p className="text-md font-normal text-inter text-center">
                SIH Terbit
              </p>
            </li>
            <li className="flex flex-col gap-2">
              <div className="flex justify-center items-center gap-2 font-raleway text-blue">
                0.5%{" "}
                <span className="text-secondary text-normal text-inter text-base">
                  <FaArrowTrendUp />
                </span>
              </div>
              <p className="text-md font-normal text-inter">
                Penghematan Karbon
              </p>
            </li>
          </ul>
        </div>
        <div className="w-3/4 flex flex-col items-center px-15 py-16 gap-10">
          <div className="font-bold text-4xl text-center">
            Kenali Sertifikasi Industri Hijau
          </div>
          <div className="flex flex-col gap-6 px-4 text-xl font-normal font-inter">
            <div className="flex gap-4 items-center">
              <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center">
                <img className="w-5" src={icon1}></img>
              </div>
              Standar dalam mewujudkan Industri Hijau yang ditetapkan oleh
              Kementerian Perindustrian.
            </div>
            <div className="flex gap-4 items-center">
              <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center">
                <img className="w-5" src={icon2}></img>
              </div>
              Pedoman untuk Perusahaan dalam menerapkan Industri Hijau yang
              bersifat sukarela.
            </div>
            <div className="flex gap-4 justify-center items-center">
              <div className="bg-primary rounded-full w-16 h-10 flex items-center justify-center">
                <img className="w-5" src={icon3}></img>
              </div>
              <p className="leading-7">
              Berkoordinasi dengan Kementerian, Lembaga Pemerintah lain,
              Asosiasi Industri, Perusahaan Industri & Lembaga terkait untuk
              menjamin standar sertifikasi sesuai untuk masing-masing bidang
              usaha.
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
  )
}

export default Profile