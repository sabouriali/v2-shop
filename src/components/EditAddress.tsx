import { type ChangeEvent, type FormEvent, useEffect, useState } from "react";

import { HiPencil } from "react-icons/hi";

import { type EditAddressProps } from "../types/componentTypes";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function EditAddress({ user, closeEdit }: EditAddressProps) {
  const [phone, setPhone] = useState(user.phone);
  const [city, setCity] = useState(user.address.city);
  const [street, setStreet] = useState(user.address.street);
  const [number, setNumber] = useState(user.address.number);
  const [zipcode, setZipcode] = useState(user.address.zipcode);
  const [phoneIsValid, setPhoneIsValid] = useState(false);
  const [cityIsValid, setCityIsValid] = useState(false);
  const [streetIsValid, setStreetIsValid] = useState(false);
  const [numberIsValid, setNumberIsValid] = useState(false);
  const [zipcodeIsValid, setZipcodeIsValid] = useState(false);
  const [isValid, setIsValid] = useState(false);

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
  }, [phoneIsValid, cityIsValid, streetIsValid, numberIsValid, zipcodeIsValid]);

  function handleValidation() {
    setIsValid(
      phoneIsValid &&
        cityIsValid &&
        streetIsValid &&
        numberIsValid &&
        zipcodeIsValid
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
    setNumberIsValid(number.trim().length >= 3);
  }

  function handleZipcodeValidation() {
    setZipcodeIsValid(zipcode.trim().length >= 3);
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

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const address = {
      phone,
      address: {
        city,
        street,
        number,
        zipcode,
      },
    };

    sessionStorage.setItem("address", JSON.stringify(address));

    closeEdit();
  }

  return (
    <section className="relative border p-4 rounded-lg mt-6">
      <h3 className="absolute -top-3 right-2 text-sm px-1.5 bg-white dark:bg-slate-700 transition flex items-center gap-1">
        <HiPencil />
        ویرایش اطلاعات
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <input
              type="text"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="شماره تماس"
              className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none border border-transparent focus:border-blue-400 transition"
            />
          </div>
          <div>
            <input
              type="text"
              value={city}
              onChange={handleCityChange}
              placeholder="شهر"
              className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none border border-transparent focus:border-blue-400 transition"
            />
          </div>
          <div>
            <input
              type="text"
              value={street}
              onChange={handleStreetChange}
              placeholder="آدرس"
              className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none border border-transparent focus:border-blue-400 transition"
            />
          </div>
          <div>
            <input
              type="text"
              value={number}
              onChange={handleNumberChange}
              placeholder="پلاک"
              className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none border border-transparent focus:border-blue-400 transition"
            />
          </div>
          <div>
            <input
              type="text"
              value={zipcode}
              onChange={handleZipcodeChange}
              placeholder="کد پستی"
              className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none border border-transparent focus:border-blue-400 transition"
            />
          </div>
        </div>
        <div>
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
        </div>
      </form>
    </section>
  );
}

export default EditAddress;
