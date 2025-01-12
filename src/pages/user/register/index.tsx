import { type ChangeEvent, type FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";
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
  const [firstnameIsValid, setFirstnameIsValid] = useState(false);
  const [lastnameIsValid, setLastnameIsValid] = useState(false);
  const [usernameIsValid, setUsernameIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [password2IsValid, setPassword2IsValid] = useState(false);
  const [phoneIsValid, setPhoneIsValid] = useState(false);
  const [cityIsValid, setCityIsValid] = useState(false);
  const [streetIsValid, setStreetIsValid] = useState(false);
  const [numberIsValid, setNumberIsValid] = useState(false);
  const [zipcodeIsValid, setZipcodeIsValid] = useState(false);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    document.title = "مارکت لند | ثبت نام";
    handleLoadOnTop();
  }, []);

  useEffect(() => {
    handleFirstnameValidation();
  }, [firstname]);

  useEffect(() => {
    handleLastnameValidation();
  }, [lastname]);

  useEffect(() => {
    handleUsernameValidation();
  }, [username]);

  useEffect(() => {
    handleEmailValidation();
  }, [email]);

  useEffect(() => {
    handlePasswordValidation();
  }, [password]);

  useEffect(() => {
    handlePassword2Validation();
  }, [password, password2]);

  useEffect(() => {
    handlePhoneValidation();
  }, [phone]);

  useEffect(() => {
    handleCityValidation();
  }, [city]);

  useEffect(() => {
    handleStreetValidation();
  }, [street]);

  useEffect(() => {
    handleNumberValidation();
  }, [number]);

  useEffect(() => {
    handleZipcodeValidation();
  }, [zipcode]);

  useEffect(() => {
    handleValidation();
  }, [
    firstnameIsValid,
    lastnameIsValid,
    usernameIsValid,
    emailIsValid,
    passwordIsValid,
    password2IsValid,
    phoneIsValid,
    cityIsValid,
    streetIsValid,
    numberIsValid,
    zipcodeIsValid,
    agree,
  ]);

  const navigate = useNavigate();

  function handleLoadOnTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleShowAgreement(action: "show" | "hide") {
    if (action === "show") {
      setShowAgreement(true);
    } else setShowAgreement(false);
  }

  function handleValidation() {
    setIsValid(
      firstnameIsValid &&
        lastnameIsValid &&
        emailIsValid &&
        password2IsValid &&
        phoneIsValid &&
        cityIsValid &&
        streetIsValid &&
        numberIsValid &&
        zipcodeIsValid &&
        agree
    );
  }

  function handleFirstnameValidation() {
    setFirstnameIsValid(firstname.trim().length >= 3);
  }

  function handleLastnameValidation() {
    setLastnameIsValid(lastname.trim().length >= 3);
  }

  function handleUsernameValidation() {
    setUsernameIsValid(username.trim().length >= 3);
  }

  function handleEmailValidation() {
    setEmailIsValid(email.trim().length >= 3);
  }

  function handlePasswordValidation() {
    setPasswordIsValid(password.trim().length >= 3);
  }

  function handlePassword2Validation() {
    setPassword2IsValid(
      password2.trim().length >= 3 && password.trim() === password2.trim()
    );
  }

  function handlePhoneValidation() {
    setPhoneIsValid(phone.trim().length >= 3);
  }

  function handleCityValidation() {
    setCityIsValid(city.trim().length >= 3);
  }

  function handleStreetValidation() {
    setStreetIsValid(street.trim().length >= 3);
  }

  function handleNumberValidation() {
    setNumberIsValid(number.trim().length > 0);
  }

  function handleZipcodeValidation() {
    setZipcodeIsValid(zipcode.trim().length >= 3);
  }

  function handleFirstnameChange(e: ChangeEvent<HTMLInputElement>) {
    setFirstname(e.target.value);
  }

  function handleLastnameChange(e: ChangeEvent<HTMLInputElement>) {
    setLastname(e.target.value);
  }

  function handleUsernameChange(e: ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function handlePassword2Change(e: ChangeEvent<HTMLInputElement>) {
    setPassword2(e.target.value);
  }

  function handlePhoneChange(e: ChangeEvent<HTMLInputElement>) {
    setPhone(e.target.value);
  }

  function handleCityChange(e: ChangeEvent<HTMLInputElement>) {
    setCity(e.target.value);
  }

  function handleStreetChange(e: ChangeEvent<HTMLInputElement>) {
    setStreet(e.target.value);
  }

  function handleNumberChange(e: ChangeEvent<HTMLInputElement>) {
    setNumber(e.target.value);
  }

  function handleZipcodeChange(e: ChangeEvent<HTMLInputElement>) {
    setZipcode(e.target.value);
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
    handleShowAgreement("hide");
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
        .then(() => {
          setIsLoading(false);
          alert("User Added");
          navigate("../login");
        })
        .catch((err) => {
          handleLoadOnTop();
          setIsLoading(false);
          throw alert(err.message);
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
            hideAgreement={() => handleShowAgreement("hide")}
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
                    className={`bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none border focus:border-blue-400 transition ${
                      firstname.trim().length === 0
                        ? "border-transparent"
                        : firstnameIsValid
                        ? "border-green-400"
                        : "border-red-400"
                    }`}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    value={lastname}
                    onChange={handleLastnameChange}
                    placeholder="نام خانوادگی"
                    className={`bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none border focus:border-blue-400 transition ${
                      lastname.trim().length === 0
                        ? "border-transparent"
                        : lastnameIsValid
                        ? "border-green-400"
                        : "border-red-400"
                    }`}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                    placeholder="نام کاربری"
                    className={`bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none border focus:border-blue-400 transition ${
                      username.trim().length === 0
                        ? "border-transparent"
                        : usernameIsValid
                        ? "border-green-400"
                        : "border-red-400"
                    }`}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="ایمیل"
                    className={`bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none border focus:border-blue-400 transition ${
                      email.trim().length === 0
                        ? "border-transparent"
                        : emailIsValid
                        ? "border-green-400"
                        : "border-red-400"
                    }`}
                  />
                </div>
                <div className="relative mb-4">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="پسورد"
                    className={`bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none border focus:border-blue-400 transition ${
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
                <div className="mb-4">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password2}
                    onChange={handlePassword2Change}
                    placeholder="تکرار پسورد"
                    className={`bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none border focus:border-blue-400 transition ${
                      password2.trim().length === 0
                        ? "border-transparent"
                        : password2IsValid
                        ? "border-green-400"
                        : "border-red-400"
                    }`}
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
                    className={`bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none border focus:border-blue-400 transition ${
                      phone.trim().length === 0
                        ? "border-transparent"
                        : phoneIsValid
                        ? "border-green-400"
                        : "border-red-400"
                    }`}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    value={city}
                    onChange={handleCityChange}
                    placeholder="شهر"
                    className={`bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none border focus:border-blue-400 transition ${
                      city.trim().length === 0
                        ? "border-transparent"
                        : cityIsValid
                        ? "border-green-400"
                        : "border-red-400"
                    }`}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    value={street}
                    onChange={handleStreetChange}
                    placeholder="آدرس"
                    className={`bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none border focus:border-blue-400 transition ${
                      street.trim().length === 0
                        ? "border-transparent"
                        : streetIsValid
                        ? "border-green-400"
                        : "border-red-400"
                    }`}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    value={number}
                    onChange={handleNumberChange}
                    placeholder="پلاک"
                    className={`bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none border focus:border-blue-400 transition ${
                      number.trim().length === 0
                        ? "border-transparent"
                        : numberIsValid
                        ? "border-green-400"
                        : "border-red-400"
                    }`}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    value={zipcode}
                    onChange={handleZipcodeChange}
                    placeholder="کد پستی"
                    className={`bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none border focus:border-blue-400 transition ${
                      zipcode.trim().length === 0
                        ? "border-transparent"
                        : zipcodeIsValid
                        ? "border-green-400"
                        : "border-red-400"
                    }`}
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
                  onClick={() => handleShowAgreement("show")}
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
                className={`flex items-center gap-1 px-3 py-2 rounded-lg border transition ${
                  isValid
                    ? "border-[#3498db] text-[#3498db] hover:text-white hover:bg-[#3498db]"
                    : "border-gray-300 bg-gray-300 text-white dark:border-gray-400 dark:bg-gray-400 cursor-not-allowed"
                }`}
              >
                <IoPersonAdd />
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
