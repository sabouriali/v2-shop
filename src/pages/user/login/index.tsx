import { type ChangeEvent, type FormEvent, useEffect, useState } from "react";
import { Link } from "react-router";
import { IoEye, IoEyeOff, IoLogIn, IoPersonAdd } from "react-icons/io5";

import { useStoreDispatch } from "../../../hooks/useStore";
import { setLogin } from "../../../redux/slices/loginSlice";

import { getAllUsers } from "../../../utility/api";

import Loading from "../../../components/UI/Loading";

function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameIsValid, setUsernameIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const dispatch = useStoreDispatch();

  useEffect(() => {
    document.title = "مارکت لند | ورود";
    handleLoadOnTop();
  }, []);

  useEffect(() => {
    handleUsernameValidation();
  }, [username]);

  useEffect(() => {
    handlePasswordValidation();
  }, [password]);

  useEffect(() => {
    handleValidation();
  }, [usernameIsValid, passwordIsValid]);

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
    setIsValid(usernameIsValid && passwordIsValid);
  }

  function handleUsernameValidation() {
    setUsernameIsValid(username.trim().length >= 3);
  }

  function handlePasswordValidation() {
    setPasswordIsValid(password.trim().length >= 3);
  }

  function handleUsernameChange(e: ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (isValid) {
      setIsLoading(true);
      getAllUsers()
        .then((res) => {
          setIsLoading(false);

          const user = res.users.find(
            (user) =>
              user.username === username.trim() &&
              user.password === password.trim()
          );

          if (user) {
            dispatch(setLogin({ id: user.id, name: user.name.firstname }));
          } else {
            alert("نام کاربری یا پسورد اشتباه است");
            setUsernameIsValid(false);
            setPasswordIsValid(false);
          }
        })
        .catch((err) => {
          setIsLoading(false);
          throw alert(err.message);
        });
    }
  }

  return (
    <>
      {isLoading ? (
        <div className="absolute content-center top-1/3 right-1/2 -translate-y-1/3 translate-x-1/2">
          <Loading />
        </div>
      ) : (
        <section className="max-w-[40rem] bg-white dark:bg-slate-700 p-6 mx-auto rounded-2xl shadow-md transition">
          <div className="flex items-center justify-between mb-6">
            <h2 className="flex items-center gap-1 text-lg font-bold">
              <IoLogIn className="rotate-180" />
              ورود
            </h2>
            <span className="text-xl">|</span>
            <Link
              to="../register"
              className="flex items-center gap-1 text-sm hover:text-blue-500 dark:hover:text-blue-400 transition"
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
                className={`px-3 py-2 rounded-lg w-full outline-none bg-slate-100 dark:bg-slate-800 border focus:border-blue-400 transition ${
                  username.trim().length === 0
                    ? "border-transparent"
                    : usernameIsValid
                    ? "border-green-400"
                    : "border-red-400"
                }`}
              />
            </div>
            <div className="relative mb-6">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="پسورد"
                onChange={handlePasswordChange}
                className={`px-3 py-2 rounded-lg w-full outline-none bg-slate-100 dark:bg-slate-800 border focus:border-blue-400 transition ${
                  password.trim().length === 0
                    ? "border-transparent"
                    : passwordIsValid
                    ? "border-green-400"
                    : "border-red-400"
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
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className={`flex items-center gap-1 px-3 py-2 rounded-lg border transition ${
                  isValid
                    ? "border-blue-500 dark:border-blue-400 text-blue-500 dark:text-blue-400 hover:text-white hover:bg-blue-500 dark:hover:bg-blue-400"
                    : "border-gray-300 bg-gray-300 text-white dark:border-gray-400 dark:bg-gray-400 cursor-not-allowed"
                }`}
              >
                <IoLogIn className="rotate-180" />
                ورود
              </button>
              <a
                href="https://fakestoreapi.in/api/users"
                target="_blank"
                className="text-sm text-gray-500 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition"
              >
                یوزرهای ارائه شده توسط api
              </a>
            </div>
          </form>
        </section>
      )}
    </>
  );
}

export default LoginPage;
