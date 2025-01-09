import { type ChangeEvent, type FormEvent, useState } from "react";
import { HiPencil } from "react-icons/hi";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline, IoMdTrash } from "react-icons/io";

import { useStoreDispatch } from "../hooks/useStore";
import { setLogout } from "../redux/slices/loginSlice";

import { deleteUser, updateUser } from "../utility/api";

import DeleteUserAlert from "./DeleteUserAlert";

import { type EditUserProps } from "../types/componentTypes";

function EditUser({ user, onLoading, onLoaded, closeEdit }: EditUserProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showDeleteMessage, setShowDeleteMessage] = useState(false);
  const [firstname, setFirstname] = useState(user.name.firstname);
  const [lastname, setLastname] = useState(user.name.lastname);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [password2, setPassword2] = useState("");
  const [phone, setPhone] = useState(user.phone);
  const [city, setCity] = useState(user.address.city);
  const [street, setStreet] = useState(user.address.street);
  const [number, setNumber] = useState(user.address.number);
  const [zipcode, setZipcode] = useState(user.address.zipcode);
  const [isValid, setIsValid] = useState(false);

  const dispatch = useStoreDispatch();

  function handleLoadOnTop() {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleShowDeleteMessage() {
    setShowDeleteMessage(true);
  }

  function handleCloseDeleteMessage() {
    setShowDeleteMessage(false);
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
        password === password2
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

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const updatedUser = {
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
      onLoading();
      updateUser(user.id, updatedUser)
        .then(() => {
          handleLoadOnTop();
          closeEdit();
          onLoaded();
          alert("Updated");
        })
        .catch(() => {
          onLoaded();
          alert("Didn't Update");
        });
    }
  }

  function handleDeleteUser() {
    onLoading();
    deleteUser(user.id)
      .then(() => {
        handleLoadOnTop();
        dispatch(setLogout());
        onLoaded();
        alert("User Deleted");
      })
      .catch(() => {
        onLoaded();
        alert("User Didn't Deleted");
      });
  }

  return (
    <>
      <DeleteUserAlert
        showDeleteMessage={showDeleteMessage}
        hideDeleteMessage={handleCloseDeleteMessage}
        onDeleteUser={handleDeleteUser}
      />
      <section className="relative border p-4 rounded-lg mt-8">
        <h2 className="absolute -top-3 right-2 text-sm px-1.5 bg-white dark:bg-slate-700 transition flex items-center gap-1">
          <HiPencil />
          ویرایش اطلاعات
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
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className={`flex items-center gap-1 px-4 py-2 rounded-lg border transition ${
                isValid
                  ? "border-blue-500 dark:border-blue-400 text-blue-500 dark:text-blue-400 hover:text-white hover:bg-blue-500 dark:hover:bg-blue-400"
                  : "border-gray-300 bg-gray-300 text-white dark:border-gray-400 dark:bg-gray-400 cursor-not-allowed"
              }`}
            >
              <IoMdCheckmarkCircleOutline />
              ثبت اطلاعات
            </button>
            <button
              type="button"
              onClick={handleShowDeleteMessage}
              className="flex items-center gap-1 text-sm px-4 py-2 rounded-lg text-gray-300 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400 transition"
            >
              <IoMdTrash />
              حذف حساب کاربری
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default EditUser;
