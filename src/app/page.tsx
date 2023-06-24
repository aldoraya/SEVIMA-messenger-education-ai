import React from "react";
import { SunIcon } from "@heroicons/react/24/outline";
import { BoltIcon } from "@heroicons/react/24/outline";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const homePage = () => {
  const texts = [
    {
      id: 1,
      icon: <SunIcon className="w-6 h-6" />,
      title: "Contoh",
      txt1: '"Apa perbedaan antara mitosis dan meiosis?"',
      txt2: '"Jelaskan prinsip dasar hukum termodinamika pertama."',
      txt3: '"Bagaimana struktur dan fungsi sistem saraf manusia?"',
    },
    {
      id: 2,
      icon: <BoltIcon className="w-6 h-6" />,
      title: "Kemampuan",
      txt1: "Ubah model HWork.ai yang akan digunakan",
      txt2: "Riwayat chat disimpan di Firebase Firestore",
      txt3: "Notifikasi ketika HWork.ai sedang berpikir",
    },
    {
      id: 3,
       icon: <ExclamationTriangleIcon className="w-6 h-6" />,
      title: "Keterbatasan",
      txt1: "Terkadang mendapatkan informasi yang keliru",
      txt2: "Terkadang mendapatkan intruksi atau konten berbahaya",
      txt3: "pengetahuan terbatas tentang peristiwa setelah 2021",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-[#17A9FD]">
        HWork.ai
      </h1>
      <div className="mt-10 flex flex-col md:flex-row justify-between text-[#111] space-y-4 md:space-y-0 md:space-x-6">
        {texts.map((text) => {
          return (
            <div key={text.id} className="flex flex-col justify-center items-center space-y-2 md:space-y-4 text-xs md:text-sm w-60">
              <div className="flex flex-row md:flex-col items-center space-x-2 md:space-x-0 md:space-y-2">
                {text.icon}
                <p>{text.title}</p>
              </div>
              <p className="infoText">{text.txt1}</p>
              <p className="infoText">{text.txt2}</p>
              <p className="infoText">{text.txt3}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default homePage;
