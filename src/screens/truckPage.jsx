import { useState, useEffect } from "react";
import { US, MZ } from 'country-flag-icons/react/3x2'
import { Menu, X, Globe, Sun, Moon,  } from "lucide-react";


export default function Truck() {

    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState("EN"); // Default language
    const [darkMode, setDarkMode] = useState(() => {
      return localStorage.getItem("theme") === "dark";
    });
  
    useEffect(() => {
      if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }, [darkMode]);
  
    const toggleLanguage = () => {
      setLanguage((prev) => (prev === "EN" ? "PT" : "EN"));
    };
  
    return (
        <>
      <nav className="bg-gray-800 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3">
          <h1 className="text-green-300 font-extrabold sm:text-4xl">Baptista</h1>
        </a>

        {/* Botão de menu mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Menu de navegação */}
        <div className={`${isOpen ? "block" : "hidden"} w-full md:flex md:w-auto`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 font-medium p-4 md:p-0 mt-4 md:mt-0 border border-gray-100 rounded-lg bg-gray-800 md:border-0 text-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li><a href="/" className="block py-2 px-3 text-green-300">Home</a></li>
            <li><a href="/about" className="block py-2 px-3 hover:text-green-300">About</a></li>
            <li><a href="/skills" className="block py-2 px-3 hover:text-green-300">Skills</a></li>
            <li><a href="/contact" className="block py-2 px-3 hover:text-green-300">Contact</a></li>

            {/* Dropdown More */}
            <li className="relative group">
              <span className="block py-2 px-3 hover:text-green-300 cursor-pointer">More ▼</span>
              <ul className="absolute hidden group-hover:block bg-gray-700 text-white left-0 top-full shadow-lg w-37">
                <li><a href="/blog" className="block px-4 py-2 hover:bg-green-400">Blog</a></li>
                <li><a href="/certifications" className="block px-4 py-2 hover:bg-green-400">Certifications</a></li>
                <li><a href="/services" className="block px-4 py-2 hover:bg-green-400">Services</a></li>
              </ul>
            </li>

            {/* Botão de mudança de tema (Light/Dark Mode) */}
            <li>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center gap-2 px-3 py-3 hover:text-green-300"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </li>

            {/* Language Switcher */}
            <li className="relative group">
              <button className="flex items-center gap-2 px-3 py-3 hover:text-green-300 cursor-pointer">
                <Globe size={20} />
              </button>
              <ul className="absolute hidden group-hover:block bg-gray-700 left-0 top-full shadow-lg w-15">
                <li>
                  <button className="block px-4 py-2 hover:bg-gray-600 w-full text-left"><US title="United States" className="w-7" /></button>
                </li>
                <li>
                  <button className="block px-4 py-2 hover:bg-gray-600 w-full text-left"><MZ title="Mozambique" className="w-7" /></button>
                </li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
  </nav>


<section className="h-screen bg-gray-900 text-white flex items-center">
  <div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row items-center">
     {/* Left Column */}
     <div className="lg:w-1/2 text-center lg:text-left">
      <h1 className="bg-gradient-to-r from-green-400 to-purple-200 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
      Nsualulu Investimentos
        <span className="sm:block sm:text-2xl">
        Cargo transportation
        </span>
      </h1>

      <p className="mt-4 max-w-xl sm:text-xl/relaxed">
      About Nsualulu Investimentos

    Nsualulu Investimentos is a Mozambican company specializing in cargo transportation within the country. With a modern fleet and a highly qualified team, we ensure efficient, safe, and timely logistics solutions to meet our clients' needs.

    We operate in the transportation of goods for various sectors, including trade, industry, and agriculture, providing a reliable service that drives business growth and productivity in Mozambique. Our commitment is to excellence, ensuring fast deliveries and high-quality customer service.

    If you are looking for a trustworthy logistics partner for your operations, Nsualulu Investimentos is ready to serve you!
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          className="block rounded-sm border border-green-400 px-12 py-3 text-sm font-medium text-white hover:bg-green-400 focus:ring-3 sm:w-auto"
          href="#"
        >
          Read more
        </a>
      </div>
    </div>

    {/* Right Column */}
    <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
      <img 
        src="../img/Nsualulu.webp" 
        alt="Truck Image" 
        className="w-160 h-150 object-cover shadow-lg"
      />
    </div>
  </div>
</section>


<footer className="bg-gray-800">
  <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-md">
      <strong className="block text-center text-xl font-bold text-white sm:text-3xl">
        Do you want me to email you with the latest news?
      </strong>

      <form className="mt-6">
        <div className="relative max-w-lg">
          <label className="sr-only" htmlFor="email"> Email </label>

          <input
            className="w-full text-white rounded-full border-gray-600 bg-gray-900 p-4 pe-32 text-sm font-medium"
            id="email"
            type="email"
            placeholder="example@gmail.com"
          />

          <button
            className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-400"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>

    <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
      <div className="mx-auto max-w-sm lg:max-w-none">
        <p className="mt-4 text-center text-gray-500 lg:text-left lg:text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium natus quod eveniet
          aut perferendis distinctio iusto repudiandae, provident velit earum?
        </p>

        <div className="mt-6 flex justify-center gap-4 lg:justify-start">
          <a
            className="text-gray-700 transition hover:text-blue-500"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only"> Facebook </span>

            <svg className="size-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <a
            className="text-gray-700 transition hover:text-pink-400"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only"> Instagram </span>

            <svg className="size-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <a
            className="text-gray-700 transition hover:text-cyan-500"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only"> Twitter </span>

            <svg className="size-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
        <div>
          <strong className="font-medium text-white"> Services </strong>

          <ul className="mt-6 space-y-1">
            <li>
              <a className="text-gray-400 transition hover:text-gray-700/75" href="#"> Cargo Transportation</a>
            </li>

            <li>
              <a className="text-gray-400 transition hover:text-gray-700/75" href="#">
                Graphic Design
              </a>
            </li>

            <li>
              <a className="text-gray-400 transition hover:text-gray-700/75" href="#">
                Web Development
              </a>
            </li>
          </ul>
        </div>

        <div>
          <strong className="font-medium text-white"> About </strong>

          <ul className="mt-6 space-y-1">
            <li>
              <a className="text-gray-400 transition hover:text-gray-700/75" href="#"> About </a>
            </li>

            <li>
              <a className="text-gray-400 transition hover:text-gray-700/75" href="#"> History </a>
            </li>

            <li>
              <a className="text-gray-400 transition hover:text-gray-700/75" href="#"> Our Team </a>
            </li>
          </ul>
        </div>

        <div>
          <strong className="font-medium text-white"> Support </strong>

          <ul className="mt-6 space-y-1">
            <li>
              <a className="text-gray-400 transition hover:text-gray-700/75" href="#"> FAQs </a>
            </li>

            <li>
              <a className="text-gray-400 transition hover:text-gray-700/80" href="#"> Contact </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-16 border-t border-gray-100 pt-8">
      <p className="text-center text-xs/relaxed text-gray-500">
        © Company 2025. All rights reserved.
        <br />
      </p>
    </div>
  </div>
</footer>
        </>
    );
  }