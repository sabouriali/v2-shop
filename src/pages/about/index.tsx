function About() {
  return (
    <>
      <h1 className="text-xl font-bold mb-6">درباره من</h1>
      <article>
        <p className="text-justify mb-2">
          فارغ ‌التحصیل کارشناسی تغذیه که به دلیل علاقه به برنامه‌نویسی به دنیای
          توسعه وب روی آورده و در زمینه‌ی برنامه‌نویسی فرانت‌اند با تکنولوژی
          ‌های HTML، CSS، JavaScript، TypeScript و React تخصص پیدا کردم. با
          اشتیاق به یادگیری مداوم و توسعه مهارت ‌های فنی، به دنبال فرصت‌های
          حرفه‌ای برای ورود به بازار کار و ایجاد وب ‌سایت‌های تعاملی و کاربرپسند
          هستم.
        </p>
        <p className="text-justify mb-2">
          کارشناسیمو سال ۱۴۰۱ از دانشگاه علوم پزشکی شیراز گرفتم و با معدل ۱۷.۱۶
          فارغ‌التحصیل شدم.
        </p>
        <h3 className="text-lg font-bold my-4">پروژه‌ها</h3>
        <div className="flex">
          <section className="w-1/2 pl-4 border-l">
            <div className="flex items-center justify-between mb-3">
              <a
                href="https://test-shopping-project.netlify.app"
                target="_blank"
              >
                وب‌سایت فروشگاهی
              </a>
              <p>۲۸ شهریور - ۹ مهر ۱۴۰۳</p>
            </div>
            <div>
              <a
                href="https://github.com/sabouriali/shopping-project"
                target="_blank"
                className="mb-1"
              >
                Github
              </a>
              <p className="mb-1">وب‌سایت فروشگاهی ریسپانسیو</p>
              <p className="mb-1">
                توسعه داده شده با استفاده از React و TypeScript
              </p>
              <p className="mb-1">پیاده‌سازی استایل به کمک TailwindCSS</p>
              <p className="mb-1">پیاده‌سازی بک‌اند به کمک fakestoreapi.com</p>
              <p className="mb-1">مدیریت state با استفاده از Redux Toolkit</p>
            </div>
          </section>
          <section className="w-1/2 pr-4 border-r">
            <div className="flex items-center justify-between mb-3">
              <a href="https://test-blog-project.netlify.app" target="_blank">
                وبلاگ
              </a>
              <p>۱۸ مرداد - ۲۵ مرداد ۱۴۰۳</p>
            </div>
            <div>
              <a
                href="https://github.com/sabouriali/blog-project"
                target="_blank"
                className="mb-1"
              >
                Github
              </a>
              <p className="mb-1">
                وبلاگ SPA ریسپانسیو با قابلیت اضافه کردن و ادیت مقاله
              </p>
              <p className="mb-1">
                توسعه داده شده با استفاده از React و TypeScript
              </p>
              <p className="mb-1">پیاده‌سازی استایل به کمک Bootstrap</p>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

export default About;
