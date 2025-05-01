import DropDownMenu from "@/components/DropDownMenu";
import { ModeToggle } from "@/components/mode-toggle";
import logo from "@/assets/bt-logo.png";
import { Link, NavLink, Outlet } from "react-router";

function Layout() {
  return (
    <div className="PlayFair flex flex-col min-h-screen ">
      <header className="flex  items-center h-23 gap-10  justify-between w-full bg-black/10 dark:bg-gray-700/40  p-10 mb-4">
        <div className="flex items-center justify-center space-x-4 ">
          {" "}
          <img
            className="max-w-8 md:max-w-18 mask-b-from-80% mask-t-from-80% mask-l-from-80% mask-r-from-80% rounded max-h-20 dark:bg-white
            "
            src={logo}
            alt="TransTube-Logo"
          />
          <h2 className="font-mono font-extralight hidden md:flex text-wrap  md:max-w-70 md:text-xs">
            Übersetze Webseiten und fasse zusammen was du brauchst!
          </h2>
          <h2 className="text-center font-black font-mono md:hidden w-full">
            Webseiten-Zusammenfasser
          </h2>
        </div>
        <DropDownMenu />
        <nav className="font-mono font-bold hidden lg:flex md:items-center md:justify-center gap-2">
          <NavLink
            className={
              "px-2 py-1  rounded cursor-pointer hover:scale-110 hover:text-stone-700 transition-all"
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={
              " px-2 py-1 rounded cursor-pointer hover:scale-110 hover:text-stone-700 transition-all"
            }
            to={"/analyze"}
          >
            Analyse
          </NavLink>
          <NavLink
            className={
              " px-2 py-1 rounded cursor-pointer hover:scale-110 hover:text-stone-700 transition-all"
            }
            to={"/results"}
          >
            Resultate
          </NavLink>
          <ModeToggle />
        </nav>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <Outlet />
      </main>
      <footer className="flex flex-col items-center gap-2 justify-center w-full bg-black/20 dark:bg-gray-700/40 py-6 px-4 text-center text-sm md:text-xs font-mono animate-fadeIn">
        <img
          className="max-w-14 rounded dark:bg-white"
          src={logo}
          alt="TransTube-Logo"
        />
        <p className="text-stone-800 dark:text-stone-100">
          &copy; {new Date().getFullYear()} Max Voßgätter. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <Link
            to="/impressum"
            className="flex items-center gap-1 text-stone-700 dark:text-stone-200 font-semibold hover:underline hover:text-red-500 transition-colors"
          >
            ⚖️ Impressum
          </Link>
          <Link
            to="/datenschutz"
            className="flex items-center gap-1 text-stone-700 dark:text-stone-200 font-semibold hover:underline hover:text-green-500 transition-colors"
          >
            🛡️ Datenschutz
          </Link>
          <Link
            to="/baustelle"
            className="flex items-center gap-1 text-stone-700 dark:text-stone-200 font-semibold hover:underline hover:text-yellow-500 transition-colors"
          >
            🚧 Baustelle
          </Link>
        </div>
        <p className="text-stone-600 dark:text-stone-200">
          Built with React, TypeScript & TailwindCSS
        </p>
        <Link
          to="https://github.com/realmaxv"
          target="_blank"
          rel="noopener noreferrer"
          className="text-stone-600 dark:text-stone-400 hover:text-stone-200 transition-colors"
        >
          Visit my GitHub
        </Link>
      </footer>
    </div>
  );
}

export default Layout;
