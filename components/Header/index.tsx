import classNames from "classnames";
import { Charmonman, Gotu } from "next/font/google";
import Link from "next/link";

const headerFont = Charmonman({ weight: "700", subsets: ["latin-ext"] });
const header2Font = Gotu({ weight: "400", subsets: ["latin-ext"] });

export default function Header() {
  return (
    <div className="navbar p-4">
      <div className="flex-1">
        <a
          className={classNames(
            "btn btn-ghost normal-case text-xl md:text-2xl",
            headerFont.className
          )}
        >
          Yeşil Mavi Hayat
        </a>
        <p
          className={classNames("hidden sm:block ml-4", header2Font.className)}
        >
          MELTEM SOĞUK STROPOLI
        </p>
      </div>
      <div className="flex-none">
        <div className="block md:hidden">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>

        <div className="hidden md:block">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>Yorumlar</summary>
                <ul className="p-2 bg-base-100">
                  <li>
                    <Link
                      href="https://destekdukkan.com/magaza/urun/yesil-mavi-hayat"
                      target="_blank"
                    >
                      Yorumlar
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://destekdukkan.com/magaza/urun/yesil-mavi-hayat"
                      target="_blank"
                    >
                      Sizden Gelenler
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link
                href="https://destekdukkan.com/magaza/urun/yesil-mavi-hayat"
                target="_blank"
              >
                Satın Al
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
