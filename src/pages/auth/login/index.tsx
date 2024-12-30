import { useState } from "react";
import { Link } from "react-router";
import { IoEye, IoEyeOff, IoLogIn, IoPersonAdd } from "react-icons/io5";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <section className="max-w-[40rem] bg-white dark:bg-slate-700 p-6 mx-auto rounded-2xl shadow-md transition">
      <div className="flex items-center justify-between mb-6">
        <h2 className="flex items-center gap-1 text-lg font-bold">
          <IoLogIn className="rotate-180" />
          ورود
        </h2>
        <span className="text-xl">|</span>
        <Link
          to="/auth/register"
          className="flex items-center gap-1 text-sm hover:text-[#3498db] transition"
        >
          <IoPersonAdd />
          ثبت نام
        </Link>
      </div>
      <form>
        <div className="mb-4">
          <input
            type="text"
            placeholder="ایمیل"
            className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none transition"
          />
        </div>
        <div className="relative mb-6">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="پسورد"
            className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none transition"
          />
          <button
            type="button"
            onClick={handleShowPassword}
            className="absolute top-1/2 -translate-y-1/2 left-1 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {showPassword ? <IoEyeOff /> : <IoEye />}
          </button>
        </div>
        <div>
          <button
            type="submit"
            className="px-3 py-2 rounded-lg border border-[#3498db] text-[#3498db] hover:text-white hover:bg-[#3498db] transition"
          >
            ورود
          </button>
        </div>
      </form>
    </section>
  );
}

export default LoginPage;
