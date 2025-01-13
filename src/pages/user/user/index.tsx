import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router";
import { FaAddressCard } from "react-icons/fa6";
import { HiOutlineLogout, HiPencil } from "react-icons/hi";
import { IoIosArrowDown, IoMdPerson } from "react-icons/io";

import { useStoreDispatch } from "../../../hooks/useStore";
import { setLogout } from "../../../redux/slices/loginSlice";

import { getSingleUser } from "../../../utility/api";

import Loading from "../../../components/UI/Loading";
import EditUser from "../../../components/EditUser";

import { type User } from "../../../types/userTypes";

function UserPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [user, setUser] = useState<User>();

  const { id } = useParams();

  const dispatch = useStoreDispatch();

  const sessionUser = sessionStorage.getItem("user");

  useEffect(() => {
    document.title = "مارکت لند | حساب کاربری";
    handleLoadOnTop();
    setIsLoading(true);
    getSingleUser(id!)
      .then((res) => {
        setUser(res.user);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        throw alert(err.message);
      });
  }, [id]);

  function handleLoadOnTop() {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }

  return (
    <>
      {JSON.parse(sessionUser!).id == id ? (
        <>
          {isLoading ? (
            <div className="absolute content-center top-1/3 right-1/2 -translate-y-1/3 translate-x-1/2">
              <Loading />
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold">حساب کاربری</h2>
              </div>
              <div className="p-4 rounded-2xl shadow-md bg-white dark:bg-slate-700 transition">
                <section className="relative border p-4 mb-6 rounded-lg">
                  <h3 className="absolute -top-3 right-2 flex items-center gap-1 text-sm px-1.5 bg-white dark:bg-slate-700 transition">
                    <IoMdPerson />
                    مشخصات فردی
                  </h3>
                  <div className="flex items-center gap-1 mb-2">
                    <p>نام:</p>
                    <p className="text-gray-500 dark:text-gray-400">
                      {user?.name.firstname} {user?.name.lastname}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <p>نام کاربری:</p>
                    <p className="text-gray-500 dark:text-gray-400">
                      {user?.username}
                    </p>
                  </div>
                </section>
                <section className="relative border p-4 mb-6 rounded-lg">
                  <h3 className="absolute -top-3 right-2 flex items-center gap-1 text-sm px-1.5 bg-white dark:bg-slate-700 transition">
                    <FaAddressCard />
                    آدرس و تماس
                  </h3>
                  <div className="flex items-center gap-1 mb-2">
                    <p>ایمیل:</p>
                    <p className="text-gray-500 dark:text-gray-400">
                      {user?.email}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    <p>شماره تماس:</p>
                    <p className="text-gray-500 dark:text-gray-400">
                      {user?.phone}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    <p>آدرس:</p>
                    <p className="text-gray-500 dark:text-gray-400">
                      {user?.address.city} - {user?.address.street} -{" "}
                      {user?.address.number}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <p>کد پستی:</p>
                    <p className="text-gray-500 dark:text-gray-400">
                      {user?.address.zipcode}
                    </p>
                  </div>
                </section>
                <div className="flex items-center justify-between">
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
                      className={`transition ${showEdit ? "rotate-180" : ""}`}
                    />
                  </button>
                  <button
                    onClick={() => dispatch(setLogout())}
                    className="flex items-center gap-1 px-4 py-2 rounded-lg border border-red-500 text-red-500 hover:text-white hover:bg-red-500 dark:border-red-400 dark:text-red-400 dark:hover:bg-red-400 transition"
                  >
                    <HiOutlineLogout />
                    خروج
                  </button>
                </div>
                {showEdit && (
                  <EditUser
                    user={user!}
                    onLoading={() => setIsLoading(true)}
                    onLoaded={() => setIsLoading(false)}
                    closeEdit={() => setShowEdit(false)}
                  />
                )}
              </div>
            </>
          )}
        </>
      ) : (
        <Navigate to={`../${JSON.parse(sessionUser!).id}`} />
      )}
    </>
  );
}

export default UserPage;
