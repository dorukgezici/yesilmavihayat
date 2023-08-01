"use client";
import classNames from "classnames";
import { Charmonman, Gotu } from "next/font/google";
import Link from "next/link";

const headerFont = Charmonman({ weight: "700", subsets: ["latin-ext"] });
const header2Font = Gotu({ weight: "400", subsets: ["latin-ext"] });

export default function Header() {
  const links = [
    <Link key="reviews" href="/yorumlar">
      Sizden Gelenler
    </Link>,
    <Link key="okuma-listesi" href="/okuma-listesi">
      Okuma Listesi
    </Link>,
    <Link
      key="buy"
      href="https://destekdukkan.com/magaza/urun/yesil-mavi-hayat"
      target="_blank"
    >
      Satın Al
    </Link>,
  ];
  const handleClick = () => (document.activeElement as HTMLElement)?.blur();

  return (
    <div className="navbar p-4">
      <div className="flex-1">
        <Link
          href="/"
          className={classNames(
            "btn btn-ghost normal-case text-xl md:text-2xl",
            headerFont.className
          )}
        >
          Yeşil Mavi Hayat
        </Link>
        <span
          className={classNames("hidden sm:block ml-4", header2Font.className)}
        >
          MELTEM SOĞUK STROPOLI
        </span>
      </div>
      <div className="flex-none">
        <div className="block md:hidden">
          <div className="dropdown dropdown-left">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links.map((link) => (
                <li key={link.key} onClick={handleClick}>
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hidden md:block">
          <ul className="menu menu-horizontal px-1">
            {links.map((link) => (
              <li key={link.key} onClick={handleClick}>
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
