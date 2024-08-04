import React from "react";
import { FaSearch } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="hero flex bg-primary-200">
      <div className="w-3/5 flex flex-col justify-center items-center gap-12">
        <div className="flex flex-col gap-6">
          <div className="text-primary-700 font-bold text-5xl line-height-75">
            Bersama{" "}
            <span className="text-white bg-primary-linear px-6 py-2 rounded-xl">
              Industri Hijau
            </span>{" "}
            <p>membangun dunia lebih baik!</p>
          </div>
          <div className="section-text font-inter w-645">
            Penuhi proses dan produk perusahaan Anda dengan standar tinggi untuk
            turut serta dalam menjaga kelestarian lingkungan, mengurangi dampak
            pencemaran lingkungan, produksi yang ramah lingkungan, dan pemakaian
            sumber daya yang efisien.
          </div>
        </div>
        <div className="relative items-center green-shadow">
          <span className="absolute text-gray-400 left-3 top-4 text-sm bg-white">
            <FaSearch />
          </span>
          <input
            className="py-3 pr-4 pl-9 text-sm rounded-md  w-645"
            type="text"
            placeholder="Cari Perusahaan, SIH, KBLI Terdaftar"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
