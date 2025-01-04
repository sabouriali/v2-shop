import { type ChangeEvent, type FormEvent, useState } from "react";
import { IoEye, IoEyeOff, IoPersonAdd } from "react-icons/io5";

import { addUser } from "../../../utility/api";

import UserAgreement from "../../../components/UserAgreement";
import Loading from "../../../components/UI/Loading";

function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showAgreement, setShowAgreement] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [agree, setAgree] = useState(false);
  const [isValid, setIsValid] = useState(false);

  function handleLoadOnTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleShowAgreement() {
    setShowAgreement(true);
  }

  function handleCloseAgreement() {
    setShowAgreement(false);
  }

  function handleValidation() {
    setIsValid(
      firstname.trim() !== "" &&
        lastname.trim() !== "" &&
        username.trim() !== "" &&
        email.trim() !== "" &&
        password.trim() !== "" &&
        password2.trim() !== "" &&
        phone.trim() !== "" &&
        city.trim() !== "" &&
        street.trim() !== "" &&
        number.trim() !== "" &&
        zipcode.trim() !== "" &&
        password === password2 &&
        agree
    );
  }

  function handleFirstnameChange(e: ChangeEvent<HTMLInputElement>) {
    setFirstname(e.target.value);
    handleValidation();
  }

  function handleLastnameChange(e: ChangeEvent<HTMLInputElement>) {
    setLastname(e.target.value);
    handleValidation();
  }

  function handleUsernameChange(e: ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
    handleValidation();
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
    handleValidation();
  }

  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
    handleValidation();
  }

  function handlePassword2Change(e: ChangeEvent<HTMLInputElement>) {
    setPassword2(e.target.value);
    handleValidation();
  }

  function handlePhoneChange(e: ChangeEvent<HTMLInputElement>) {
    setPhone(e.target.value);
    handleValidation();
  }

  function handleCityChange(e: ChangeEvent<HTMLInputElement>) {
    setCity(e.target.value);
    handleValidation();
  }

  function handleStreetChange(e: ChangeEvent<HTMLInputElement>) {
    setStreet(e.target.value);
    handleValidation();
  }

  function handleNumberChange(e: ChangeEvent<HTMLInputElement>) {
    setNumber(e.target.value);
    handleValidation();
  }

  function handleZipcodeChange(e: ChangeEvent<HTMLInputElement>) {
    setZipcode(e.target.value);
    handleValidation();
  }

  function handleAgreement(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      setAgree(true);
    } else {
      setAgree(false);
    }
    handleValidation();
  }

  function handleAgree() {
    setAgree(true);
    handleValidation();
    handleCloseAgreement();
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const userData = {
      email,
      username,
      password,
      name: { firstname, lastname },
      address: {
        city,
        street,
        number,
        zipcode,
        geolocation: { lat: 18.1818, long: 18.181818 },
      },
      phone,
    };

    if (isValid) {
      setIsLoading(true);
      addUser(userData)
        .then((res) => {
          handleLoadOnTop();
          setIsLoading(false);
          console.log(res);
          alert("User Added");
          setFirstname("");
          setLastname("");
          setUsername("");
          setEmail("");
          setPassword("");
          setPassword2("");
          setPhone("");
          setCity("");
          setStreet("");
          setNumber("");
          setZipcode("");
          setAgree(false);
        })
        .catch((err) => {
          handleLoadOnTop();
          setIsLoading(false);
          console.log(err);
          alert("User Didn't Added");
        });
    }
  }

  return (
    <>
      {isLoading ? (
        <div className="absolute content-center top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 w-full h-full cursor-wait">
          <Loading />
        </div>
      ) : (
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
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="mb-6">
                <p className="mb-4">مشخصات کاربر</p>
                <div className="mb-4">
                  <input
                    type="text"
                    value={firstname}
                    onChange={handleFirstnameChange}
                    placeholder="نام"
                    className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none transition"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    value={lastname}
                    onChange={handleLastnameChange}
                    placeholder="نام خانوادگی"
                    className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none transition"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                    placeholder="نام کاربری"
                    className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none transition"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="ایمیل"
                    className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none transition"
                  />
                </div>
                <div className="relative mb-4">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handlePasswordChange}
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
                    value={password2}
                    onChange={handlePassword2Change}
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
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="شماره تماس"
                    className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none transition"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    value={city}
                    onChange={handleCityChange}
                    placeholder="شهر"
                    className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none transition"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    value={street}
                    onChange={handleStreetChange}
                    placeholder="آدرس"
                    className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none transition"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    value={number}
                    onChange={handleNumberChange}
                    placeholder="پلاک"
                    className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none transition"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    value={zipcode}
                    onChange={handleZipcodeChange}
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
                  isValid
                    ? "border-[#3498db] text-[#3498db] hover:text-white hover:bg-[#3498db]"
                    : "border-gray-300 bg-gray-300 text-white dark:border-gray-400 dark:bg-gray-400 cursor-not-allowed"
                }`}
              >
                ثبت نام
              </button>
            </div>
          </form>
        </section>
      )}
    </>
  );
}

export default RegisterPage;
