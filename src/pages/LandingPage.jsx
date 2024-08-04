import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Profile from "../component/Profile";
import Manfaat from "../component/Manfaat";
import samsung from "../assets/image/samsung.png";
import danone from "../assets/image/danone.png";
import logo1 from "../assets/image/logo1.png";
import nabati from "../assets/image/nabati.png";
import image2 from "../assets/image/images2.png";
import lazada1 from "../assets/image/lazada1.png";
import abc from "../assets/image/abc.png";
import imageFooter from "../assets/image/footer.png";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const LandingPage = () => {
  const loopContent = () => {
    let data = [];
    for (let i = 0; i < 9; i++) {
      data.push(
        <div className="bg-white rounded-md gray-shadow py-6 px-4">
          <p className="text-gray-600">12345・Industri Besi dan Baja Dasar</p>
          <p className="font-bold">Industri Billet</p>
          <div className="mt-3">
            Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
          </div>
          <div className="flex justify-center gap-3 mt-3">
            <button className="w-1/2 bg-primary text-white py-2 px-4  font-bold rounded-xl">
              Ajukan Sertifikasi
            </button>
            <button className="w-1/2 border text-primary border-primary font-bold py-2 px-4 rounded-xl">
              Baca Ketentuan
            </button>
          </div>
        </div>,
      );
    }
    return data;
  };

  const steps = [
    {
      id: 1,
      title: 'Pendaftaran',
      description: 'Setelah login/register, Perusahaan Industri mengisi form pengajuan beserta dokumen persyaratan tertentu.',
      icon: '📄', // You can replace these with actual icons
    },
    {
      id: 2,
      title: 'Pembayaran',
      description: 'Perusahaan dapat melanjutkan pengajuan sertifikasi setelah melakukan pembayaran.',
      icon: '💰',
    },
    {
      id: 3,
      title: 'Pengecekan Dokumen',
      description: 'LSIH melakukan pengecekan & kelengkapan dokumen persyaratan Perusahaan.',
      icon: '🔍',
    },
    {
      id: 4,
      title: 'Penunjukan Auditor',
      description: 'LSIH menugaskan 2 auditor untuk melakukan audit pada tahap berikutnya.',
      icon: '👥',
    },
    {
      id: 5,
      title: 'Audit Kecukupan',
      description: 'Pemeriksaan kelayakan data dan dokumen terkait dengan persyaratan aspek teknis & manajemen.',
      icon: '✅',
    },
    {
      id: 6,
      title: 'Audit Kesesuaian',
      description: 'Pemeriksaan seluruh informasi, proses, & verifikasi data pemenuhan persyaratan Sertifikasi Industri Hijau.',
      icon: '🏭',
    },
    {
      id: 7,
      title: 'Evaluasi',
      description: 'LSIH mengevaluasi seluruh informasi dan hasil audit.',
      icon: '📝',
    },
    {
      id: 8,
      title: 'Penerbitan Sertifikat',
      description: 'LSIH menerbitkan sertifikat industri hijau untuk perusahaan yang telah memenuhi persyaratan.',
      icon: '📜',
    },
    {
      id: 9,
      title: 'Perusahaan dapat memakai Logo Industri Hijau',
      description: '',
      icon: '🏢',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Profile />
      
      <Manfaat />
      <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-center">
        {steps.map((step, index) => (
          <div key={index} className="w-full md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                {step.number}
              </div>
              <img src={step.icon} alt={step.title} className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
      <div className="flex flex-col py-16 gap-10">
        <h2 className="text-3xl text-center font-bold leading-50">
          Telah diikuti oleh 35+ Perusahaan Terkemuka
        </h2>
        <div className="flex justify-between py-3 px-1 gap-10">
          <img src={samsung} alt="samsung logo" />
          <img src={nabati} alt="nabati logo" />
          <img src={danone} alt="danone logo" />
          <img src={logo1} alt="logo1" />
          <img src={image2} alt="image2" />
          <img src={lazada1} alt="lazada1" />
          <img src={abc} alt="abc" />
          <img src={danone} alt="danone logo" />
        </div>
      </div>

      <section id="standar" className="bg-gray-100 p-16">
        <h2 className="text-4xl font-bold text-center mb-10">
          Standar Industri Hijau
        </h2>
        <div className="grid grid-cols-3 gap-5">{loopContent()}</div>
        <div className="flex justify-center mt-10 gap-3">
          <button className="w-12 h-12 text-2xl bg-primary text-white ps-3 font-bold rounded-full">
            <MdNavigateBefore />
          </button>
          <button className="w-12 h-12 text-2xl bg-primary text-white ps-3 font-bold rounded-full">
            <MdNavigateNext />
          </button>
        </div>
      </section>

      <section
        id="Fax"
        className="flex flex-col justify-center items-center px-167 py-20"
      >
        <h2 className="text-5xl font-bold mb-10">FAQ Sertifikasi</h2>
        <div className="flex justify-around py-2 w-1/4 bg-gray-200 px-4 rounded-md">
          <button className="bg-primary rounded-lg text-white text-sm px-4 py-2 font-bold">
            Umum
          </button>
          <button>Prosedur</button>
          <button>Kebijakan</button>
        </div>
      </section>

      <section
        id="semi-footer"
        className="flex flex-col justify-center items-center gap-8 px-20 py-16"
      >
        <h2 className="text-4xl font-bold mb-10">
          Sudah Siap Menjadi Bagian dari Industri Hijau?
        </h2>
        <button className="bg-primary rounded-lg text-white text-sm px-5 py-3 font-bold">
          Ambil Sertifikasi
        </button>
      </section>

      <section
        id="footer"
        className="flex flex-col justify-center gap-16 px-20 pt-8 pb-12 bg-gray-700 text-white font-inter"
      >
        <div className="flex justify-between items-center gap-12">
          <img src={imageFooter} alt="image footer" />
          <div className="flex gap-16">
            <p>Beranda</p>
            <p>Profile</p>
            <p>Direktori</p>
            <p>Regulasi</p>
            <p>Agenda</p>
          </div>
          <div className="flex gap-5">
            <div className="bg-gray-600 rounded-full p-2">
              <FaYoutube />
            </div>
            <div className="bg-gray-600 rounded-full p-2">
              <FaFacebookF />
            </div>
            <div className="bg-gray-600 rounded-full p-2">
              <FaWhatsapp />
            </div>
            <div className="bg-gray-600 rounded-full p-2">
              <FaTwitter />
            </div>
          </div>
        </div>
        <p className="text-center">Copyright @ 2024. All rights reserved.</p>
      </section>
    </div>
  );
};

export default LandingPage;
