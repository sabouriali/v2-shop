import { type ChangeEvent, type FormEvent, useEffect, useState } from "react";
import { Link } from "react-router";
import { IoEye, IoEyeOff, IoLogIn, IoPersonAdd } from "react-icons/io5";

import { useStoreDispatch } from "../../../hooks/useStore";
import { setLogin } from "../../../redux/slices/loginSlice";

import { getAllUsers } from "../../../utility/api";

import { type User } from "../../../types/userTypes";

function LoginPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  const dispatch = useStoreDispatch();

  useEffect(() => {
    document.title = "مارکت لند | ورود";
    handleLoadOnTop();
    getAllUsers().then((res) => setUsers(res.users));
  }, []);

  function handleLoadOnTop() {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleValidation() {
    setIsValid(username.trim() !== "" && password.trim() !== "");
  }

  function handleUsernameChange(e: ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
    handleValidation();
  }

  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
    handleValidation();
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const user = users.find(
      (user) =>
        user.username === username.trim() && user.password === password.trim()
    );

    if (isValid) {
      if (user) {
        dispatch(setLogin({ id: user.id, name: user.name.firstname }));
      } else {
        alert("نام کاربری یا پسورد اشتباه است");
      }
    }
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
          to="../register"
          className="flex items-center gap-1 text-sm hover:text-[#3498db] transition"
        >
          <IoPersonAdd />
          ثبت نام
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="نام کاربری"
            onChange={handleUsernameChange}
            autoFocus
            className={`border px-3 py-2 rounded-lg w-full outline-none transition ${
              username.trim().length < 3
                ? "bg-red-50 dark:bg-red-800 border-red-100 dark:border-red-950"
                : "bg-slate-100 dark:bg-slate-800 border-transparent"
            }`}
          />
        </div>
        <div className="relative mb-6">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="پسورد"
            onChange={handlePasswordChange}
            className={`border px-3 py-2 rounded-lg w-full outline-none transition ${
              password.trim().length < 3
                ? "bg-red-50 dark:bg-red-800 border-red-100 dark:border-red-950"
                : "bg-slate-100 dark:bg-slate-800 border-transparent"
            }`}
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
            className={`px-3 py-2 rounded-lg border transition ${
              isValid
                ? "border-[#3498db] text-[#3498db] hover:text-white hover:bg-[#3498db]"
                : "border-gray-300 bg-gray-300 text-white dark:border-gray-400 dark:bg-gray-400 cursor-not-allowed"
            }`}
          >
            ورود
          </button>
        </div>
      </form>
    </section>
  );
}

export default LoginPage;
