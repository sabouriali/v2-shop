import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import Backdrop from "./UI/Backdrop";

import { type UserAgreementProps } from "../types/componentTypes";

function UserAgreement({
  showAgreement,
  hideAgreement,
  onAgree,
  agree,
}: UserAgreementProps) {
  return (
    <>
      <Backdrop showBackdrop={showAgreement} hideBackdrop={hideAgreement} />
      <section
        className={`fixed z-20 p-4 rounded-2xl w-[90%] sm:w-4/5 md:w-[70%] lg:w-3/5 xl:w-1/2 2xl:w-2/5 h-[80vh] overflow-y-scroll bottom-1/2 right-1/2 translate-y-1/2 translate-x-1/2 bg-white dark:bg-slate-800 shadow-lg transition ${
          showAgreement
            ? "opacity-100 visible"
            : "opacity-0 translate-y-10 invisible"
        }`}
      >
        <h2 className="text-lg font-bold mb-4">شرایط و قوانین</h2>
        <div className="mb-4">
          <p className="mb-2 text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </p>
          <p className="mb-2 text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </p>
          <p className="mb-2 text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </p>
        </div>
        <div>
          <button
            onClick={agree ? () => null : onAgree}
            title={
              agree
                ? "شما شرایط و قوانین را پذیرفته‌اید"
                : "پذیرش شرایط و قوانین"
            }
            className={`flex items-center gap-1 px-4 py-2 rounded-lg border transition ${
              agree
                ? "cursor-not-allowed border-gray-300 bg-gray-300 text-white dark:border-gray-400 dark:bg-gray-400"
                : "border-blue-500 dark:border-blue-400 text-blue-500 dark:text-blue-400 hover:text-white hover:bg-blue-500 dark:hover:bg-blue-400"
            }`}
          >
            <IoMdCheckmarkCircleOutline />
            می‌پذیرم
          </button>
        </div>
      </section>
    </>
  );
}

export default UserAgreement;
