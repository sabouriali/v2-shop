import {
  BsEnvelopeAtFill,
  BsInstagram,
  BsLinkedin,
  BsPhoneFill,
  BsTelegram,
  BsYoutube,
} from "react-icons/bs";
import { FaCaretUp } from "react-icons/fa6";

function Footer() {
  return (
    <footer dir="rtl" className="p-4 border-t rounded-t-2xl">
      <div className="flex items-center justify-between mb-6">
        <p className="text-3xl text-red-500">مارکت‌لند</p>
        <button className="flex items-center text-sm border px-2 py-2 rounded-lg hover:bg-slate-500 hover:text-white transition">
          بازگشت به بالا
          <FaCaretUp className="mr-1" />
        </button>
      </div>
      <div className="flex items-center">
        <div className="w-1/2">
          <div className="relative border p-4 w-fit rounded-lg">
            <p className="absolute text-xs bg-white -top-2 right-2 px-1.5">
              تماس با ما
            </p>
            <div className="flex items-center flex-wrap gap-4">
              <p className="flex items-center">
                <BsPhoneFill className="ml-1" />
                ۰۹۱۷۱۱۴۰۹۶۵
              </p>
              <span className="text-2xl text-gray-300">|</span>
              <p className="flex items-center">
                <BsEnvelopeAtFill className="ml-1" />
                sabouri.ali@outlook.com
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="relative border p-4 w-fit rounded-lg">
            <p className="absolute text-xs bg-white -top-2 right-2 px-1.5">
              شبکه‌های اجتماعی
            </p>
            <div className="flex items-center gap-4">
              <a className="hover:text-[#E1306C] transition">
                <BsInstagram size={32} />
              </a>
              <span className="text-2xl text-gray-300">|</span>
              <a className="hover:text-[#24A1DE]">
                <BsTelegram size={32} />
              </a>
              <span className="text-2xl text-gray-300">|</span>
              <a className="hover:text-[#0077B5]">
                <BsLinkedin size={32} />
              </a>
              <span className="text-2xl text-gray-300">|</span>
              <a className="hover:text-[#FF0000]">
                <BsYoutube size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
