import { FaCaretUp } from "react-icons/fa6";
import {
  BsEnvelopeAtFill,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsPhoneFill,
  BsTelegram,
} from "react-icons/bs";

function Footer() {
  const screenWidth = window.screen.width;

  function handleScrollUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="p-4 shadow-inner bg-white dark:bg-slate-700 dark:text-slate-50 transition">
      <div className="flex items-center justify-between mb-6">
        <p className="text-3xl text-red-500 dark:text-red-400">مارکت‌لند</p>
        <button
          onClick={handleScrollUp}
          className="flex items-center gap-1 text-sm p-2 rounded-lg border hover:border-red-500 dark:hover:border-red-400 hover:bg-red-500 dark:hover:bg-red-400 hover:text-white transition"
        >
          بازگشت به بالا
          <FaCaretUp />
        </button>
      </div>
      <div className="md:grid md:items-center md:grid-cols-2 gap-4">
        <div className="mb-6">
          <div className="relative border p-3 rounded-lg">
            <p className="absolute text-xs bg-white dark:bg-slate-700 -top-2 right-2 px-1.5">
              تماس با من
            </p>
            <div
              className={`items-center justify-between flex-wrap gap-4 text-gray-400 ${
                screenWidth > 392 && "flex"
              }`}
            >
              <a
                href="tel:09171140965"
                className="flex items-center gap-1 hover:text-black dark:hover:text-slate-50 transition"
              >
                <BsPhoneFill />
                ۰۹۱۷۱۱۴۰۹۶۵
              </a>
              {screenWidth > 392 && (
                <span className="text-2xl text-gray-300">|</span>
              )}
              <a
                href="mailto:sabouri.ali@outlook.com"
                className="flex items-center gap-1 hover:text-black dark:hover:text-slate-50 transition"
              >
                <BsEnvelopeAtFill />
                sabouri.ali@outlook.com
              </a>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <div className="relative border p-3 rounded-lg">
            <p className="absolute text-xs bg-white dark:bg-slate-700 -top-2 right-2 px-1.5">
              شبکه‌های اجتماعی
            </p>
            <div className="flex items-center justify-between gap-8 text-gray-400">
              <a
                href="https://instagram.com/_alisabouri_"
                target="_blank"
                className="hover:text-[#E1306C] transition"
              >
                <BsInstagram size={24} />
              </a>
              <span className="text-2xl text-gray-300">|</span>
              <a
                href="https://t.me/ali98sb"
                target="_blank"
                className="hover:text-[#24A1DE] transition"
              >
                <BsTelegram size={24} />
              </a>
              <span className="text-2xl text-gray-300">|</span>
              <a
                href="https://linkedin.com/in/ali-sabouri-a35467332"
                target="_blank"
                className="hover:text-[#0077B5] transition"
              >
                <BsLinkedin size={24} />
              </a>
              <span className="text-2xl text-gray-300">|</span>
              <a
                href="https://github.com/sabouriali"
                target="_blank"
                className="hover:text-[#171515] transition"
              >
                <BsGithub size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
