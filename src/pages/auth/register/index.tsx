import { type ChangeEvent, useState } from "react";
import { IoEye, IoEyeOff, IoPersonAdd } from "react-icons/io5";

import UserAgreement from "../../../components/UserAgreement";

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showAgreement, setShowAgreement] = useState(false);
  const [agree, setAgree] = useState(false);

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleShowAgreement() {
    setShowAgreement(true);
  }

  function handleCloseAgreement() {
    setShowAgreement(false);
  }

  function handleAgreement(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      setAgree(true);
    } else {
      setAgree(false);
    }
  }

  function handleAgree() {
    setAgree(true);
    handleCloseAgreement();
  }

  return (
    <section className="bg-white dark:bg-slate-700 p-6 mx-auto rounded-2xl shadow-md transition">
      <UserAgreement
        showAgreement={showAgreement}
        hideAgreement={handleCloseAgreement}
        onAgree={handleAgree}
        agree={agree}
      />
      <h2 className="flex items-center gap-1 text-lg font-bold mb-6">
        <IoPersonAdd />
        ثبت نام
      </h2>
      <form>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="mb-6">
            <p className="mb-4">مشخصات کاربر</p>
            <div className="mb-4">
              <input
                type="text"
                placeholder="نام"
                className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none transition"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="نام خانوادگی"
                className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none transition"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="نام کاربری"
                className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none transition"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="ایمیل"
                className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none transition"
              />
            </div>
            <div className="relative mb-4">
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
            <div className="mb-4">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="تکرار پسورد"
                className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none transition"
              />
            </div>
          </div>
          <div className="mb-6">
            <p className="mb-4">آدرس و شماره تماس</p>
            <div className="mb-4">
              <input
                type="text"
                placeholder="شماره تماس"
                className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none transition"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="شهر"
                className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none transition"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="آدرس"
                className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none transition"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="پلاک"
                className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none transition"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="کد پستی"
                className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none transition"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 mb-4">
          <input
            type="checkbox"
            id="userAgreement"
            onChange={handleAgreement}
            checked={agree}
          />
          <label htmlFor="userAgreement">
            <button
              type="button"
              onClick={handleShowAgreement}
              className="ml-1 text-[#3498db]"
            >
              شرایط و قوانین
            </button>
            را می‌پذیرم.
          </label>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className={`px-3 py-2 rounded-lg border transition ${
              agree
                ? "border-[#3498db] text-[#3498db] hover:text-white hover:bg-[#3498db]"
                : "border-gray-300 bg-gray-300 text-white dark:border-gray-400 dark:bg-gray-400 cursor-not-allowed"
            }`}
          >
            ثبت نام
          </button>
        </div>
      </form>
    </section>
  );
}

export default RegisterPage;
