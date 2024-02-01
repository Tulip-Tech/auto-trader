import Image from "next/image";
import Link from "next/link";
import { GoRocket } from "react-icons/go";
import { IoIosArrowUp } from "react-icons/io";

const FooterComponent = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-lightergray">
      <div
        className="cursor-pointer py-5 border-b text-center "
        onClick={scrollToTop}
      >
        <span className="inline-flex justify-center items-center border  rounded-full p-2 border-slate-300 ">
          <IoIosArrowUp size={25} className="text-sky-500" />
        </span>
        <p className="pt-2 text-sky-600 text-xs">back to top</p>
      </div>
      <footer className="bg-lightergray">
        <div className="mx-auto px-20 space-y-8 py-16  lg:space-y-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="">
              <div className="text-teal-600">
                <Link href="/">
                  <Image
                    priority
                    src="/footer/B&F-03.png"
                    alt="logo"
                    width={418}
                    height={133}
                  />
                </Link>
              </div>

              <p className="mt-4 text-slate text-base font-medium">
                B&F Corporate stands at the forefront of pioneering solutions
                and customer-centric services. Committed to excellence,
                innovation, and community engagement, we strive to redefine
                industry standards and exceed customer expectations across our
                diverse ventures.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-2">
              <div className="mx-auto">
                <p className="text-slate text-2xl font-semibold">Company</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className="text-slate text-base font-medium">
                      Contact us
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-slate text-base font-medium transition hover:opacity-75"
                    >
                      About us
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-slate text-base font-medium transition hover:opacity-75"
                    >
                      Careers
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-slate text-base font-medium transition hover:opacity-75"
                    >
                      Privacy policies
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-slate text-base font-medium transition hover:opacity-75"
                    >
                      Terms & conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-slate text-base font-medium transition hover:opacity-75"
                    >
                      Manage Cookies
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mx-auto">
                <p className="text-slate text-2xl font-semibold">Follow us</p>

                <ul className="mt-6 text-sm flex items-center gap-4">
                  <li>
                    <Link href="/">
                      <Image
                        priority
                        src="/footer/linkedin.svg"
                        alt="logo"
                        width={68}
                        height={68}
                      />
                    </Link>
                  </li>

                  <li>
                    <Link href="/">
                      <Image
                        priority
                        src="/footer/fb.svg"
                        alt="logo"
                        width={68}
                        height={68}
                      />
                    </Link>
                  </li>

                  <li>
                    <Link href="/">
                      <Image
                        priority
                        src="/footer/youtube.svg"
                        alt="logo"
                        width={68}
                        height={68}
                      />
                    </Link>
                  </li>
                </ul>
                <p className="text-slate text-2xl font-semibold mt-8">
                  Subscribe
                </p>
                <form className="mt-6 w-full flex">
                  <div className="border bg-white border-gray-100 py-2 px-6 focus-within:ring sm:flex sm:items-center sm:gap-4">
                    <input
                      type="email"
                      id="UserEmail"
                      placeholder="Enter Your Email"
                      className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm"
                    />
                  </div>
                  <button className="mt-1 w-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0">
                    <GoRocket />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-primary">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="mt-4 text-center text-xl text-white lg:mt-0">
            Copyright ©2024 B&F Corporate. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
