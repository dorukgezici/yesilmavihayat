export default function Header() {
  const links = [
    <a key="reviews" href="/yorumlar">
      Sizden Gelenler
    </a>,
    <a key="okuma-listesi" href="/okuma-listesi">
      Okuma Listesi
    </a>,
    <a key="medya" href="/medya">
      Medya
    </a>,
    <a key="buy" href="https://destekdukkan.com/magaza/urun/yesil-mavi-hayat" target="_blank">
      Satın Al
    </a>,
  ];
  const handleClick = () => (document.activeElement as HTMLElement)?.blur();

  return (
    <div className="navbar p-4">
      <div className="flex-1">
        <a href="/" className="font-charmonman btn btn-ghost normal-case text-xl md:text-2xl">
          Yeşil Mavi Hayat
        </a>
        <span className="font-gotu hidden sm:block ml-4">MELTEM SOĞUK STROPOLI</span>
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
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
