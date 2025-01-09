import { useEffect, useState } from "react";
import { HiPencil } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";

import { getSingleUser } from "../../../utility/api";

import Loading from "../../../components/UI/Loading";
import EditAddress from "../../../components/EditAddress";
import CheckoutInfo from "../../../components/CheckoutInfo";

import { type User } from "../../../types/userTypes";

function CheckoutPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User>();
  const [showEdit, setShowEdit] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const sessionUser = sessionStorage.getItem("user");
  const sessionAddress = sessionStorage.getItem("address");

  useEffect(() => {
    document.title = "مارکت لند | ثبت سفارش";
    handleLoadOnTop();
    setIsLoading(true);
    getSingleUser(JSON.parse(sessionUser!).id).then((res) => {
      setUser(res.user);
      setIsLoading(false);
    });
  }, [sessionUser]);

  function handleLoadOnTop() {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }

  const phone = sessionAddress ? JSON.parse(sessionAddress).phone : user?.phone;
  const city = sessionAddress
    ? JSON.parse(sessionAddress).address.city
    : user?.address.city;
  const street = sessionAddress
    ? JSON.parse(sessionAddress).address.street
    : user?.address.street;
  const number = sessionAddress
    ? JSON.parse(sessionAddress).address.number
    : user?.address.number;
  const zipcode = sessionAddress
    ? JSON.parse(sessionAddress).address.zipcode
    : user?.address.zipcode;

  const contact = {
    phone,
    address: {
      city,
      street,
      number,
      zipcode,
    },
  };

  return (
    <>
      {isLoading ? (
        <div className="absolute content-center top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 w-full h-full cursor-wait">
          <Loading />
        </div>
      ) : (
        <>
          <CheckoutInfo
            userName={user?.name}
            userContact={contact}
            showInfo={showInfo}
            hideInfo={() => setShowInfo(false)}
          />
          <h2 className="text-lg font-bold mb-6">انتخاب آدرس</h2>
          <div className="p-4 rounded-2xl shadow-md bg-white dark:bg-slate-700 transition">
            <section className="relative border p-4 mb-6 rounded-lg">
              <h3 className="absolute -top-3 right-2 text-sm px-1.5 bg-white dark:bg-slate-700 transition">
                ارسال به
              </h3>
              <div className="flex items-center justify-between flex-wrap">
                <div className="flex items-center gap-1">
                  <p>آدرس:</p>
                  <p className="text-gray-500 dark:text-gray-400">
                    {city} - {street} - {number}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <p>کد پستی:</p>
                  <p className="text-gray-500 dark:text-gray-400">{zipcode}</p>
                </div>
                <div className="flex items-center gap-1">
                  <p>شماره تماس:</p>
                  <p className="text-gray-500 dark:text-gray-400">{phone}</p>
                </div>
              </div>
            </section>
            <div className="flex items-center justify-between">
              <button
                onClick={() => setShowInfo(true)}
                className="flex items-center gap-1 px-4 py-2 rounded-lg border border-green-500 text-green-500 hover:text-white hover:bg-green-500 transition"
              >
                <FaCheck />
                تأیید
              </button>
              <button
                onClick={() => setShowEdit(!showEdit)}
                className={`flex items-center gap-1 px-4 py-2 rounded-lg border border-blue-500 dark:border-blue-400 transition ${
                  showEdit
                    ? "bg-blue-500 text-white dark:bg-blue-400"
                    : "text-blue-500 hover:text-white hover:bg-blue-500 dark:text-blue-400 dark:hover:bg-blue-400"
                }`}
              >
                <HiPencil />
                ویرایش
                <IoIosArrowDown
                  className={`transition ${showEdit && "rotate-180"}`}
                />
              </button>
            </div>
            {showEdit && (
              <EditAddress user={user!} closeEdit={() => setShowEdit(false)} />
            )}
          </div>
        </>
      )}
    </>
  );
}

export default CheckoutPage;
