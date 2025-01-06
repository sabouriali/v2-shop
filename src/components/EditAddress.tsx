import { type ChangeEvent, type FormEvent, useState } from "react";

import { HiPencil } from "react-icons/hi";

import { type EditAddressProps } from "../types/componentTypes";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function EditAddress({ user, closeEdit }: EditAddressProps) {
  const [phone, setPhone] = useState(user.phone);
  const [city, setCity] = useState(user.address.city);
  const [street, setStreet] = useState(user.address.street);
  const [number, setNumber] = useState(user.address.number);
  const [zipcode, setZipcode] = useState(user.address.zipcode);
  const [isValid, setIsValid] = useState(false);

  function handleValidation() {
    setIsValid(
      phone.trim() !== "" &&
        city.trim() !== "" &&
        street.trim() !== "" &&
        number.trim() !== "" &&
        zipcode.trim() !== ""
    );
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
              className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none transition"
            />
          </div>
          <div>
            <input
              type="text"
              value={city}
              onChange={handleCityChange}
              placeholder="شهر"
              className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none transition"
            />
          </div>
          <div>
            <input
              type="text"
              value={street}
              onChange={handleStreetChange}
              placeholder="آدرس"
              className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none transition"
            />
          </div>
          <div>
            <input
              type="text"
              value={number}
              onChange={handleNumberChange}
              placeholder="پلاک"
              className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none transition"
            />
          </div>
          <div>
            <input
              type="text"
              value={zipcode}
              onChange={handleZipcodeChange}
              placeholder="کد پستی"
              className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg w-full outline-none transition"
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
