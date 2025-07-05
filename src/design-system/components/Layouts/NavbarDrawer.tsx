import { headerAtom } from "@/design-system/atoms";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download } from "tabler-icons-react";
import { twMerge } from "tailwind-merge";
import { navLinks } from "../../data";

export default function NavbarDrawer() {
  const pathname = usePathname();

  return (
    <section className="flex flex-col h-full gap-6">
      {navLinks.map((link, index) => (
        <Link
          className={twMerge(
            "text-oslo-grey relative nav-link p-4 after:!left-12 text-xl font-semibold hover:text-white transition-all duration-500 ease-in-out",
            link.url === pathname && "text-white active-nav-link"
          )}
          key={index}
          href={link.url}
          onClick={headerAtom.close}
        >
          {link.text}
        </Link>
      ))}
      <Link
        href="https://drive.google.com/file/d/1tEsNOJ_j9Sbs11cZ_KlxVKQLWYfGhoVe/view?usp=drive_link"
        className="w-full mt-18 text-center text-xl flex justify-center items-center gap-4 font-medium py-4 px-8 text-white border-gray-600 border rounded-full"
        target="_blank"
      >
        <span>Get Resume</span> <Download />
      </Link>
    </section>
  );
}
