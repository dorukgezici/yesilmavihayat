<script>
  const links = [
    { href: "/yorumlar", title: "Sizden Gelenler" },
    { href: "/okuma-listesi", title: "Okuma Listesi" },
    {
      href: "https://destekdukkan.com/magaza/urun/yesil-mavi-hayat",
      title: "Satın Al",
      new: true,
    },
  ];
  const handleClick = () => document.activeElement?.blur();
</script>

<div class="navbar p-4">
  <div class="flex-1">
    <a
      href="/"
      class="header-font btn btn-ghost normal-case text-xl md:text-2xl"
    >
      Yeşil Mavi Hayat
    </a>
    <span class="hidden sm:block ml-4 header-font-2">
      MELTEM SOĞUK STROPOLI
    </span>
  </div>
  <div class="flex-none">
    <div class="block md:hidden">
      <div class="dropdown dropdown-left">
        <span tabIndex={0} class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
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
        </span>

        <ul
          tabIndex={0}
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          {#each links as link}
            <li>
              <a
                href={link.href}
                on:click={handleClick}
                target={link.new ? "_blank" : "_self"}>{link.title}</a
              >
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <div class="hidden md:block">
      <ul class="menu menu-horizontal px-1">
        {#each links as link}
          <li>
            <a
              href={link.href}
              on:click={handleClick}
              target={link.new ? "_blank" : "_self"}>{link.title}</a
            >
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>

<style>
  .header-font {
    font-family: "Charmonman", sans-serif;
  }

  .header-font-2 {
    font-family: "Gotu", sans-serif;
  }
</style>
