import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-center p-8 mt-8">
      <Link href="https://doruk.gezici.me" target="_blank">
        © 2023 | DGtech
      </Link>
    </footer>
  );
}
