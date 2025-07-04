import Link from "next/link";
import { type Icon as IconType } from "tabler-icons-react";
import { twMerge } from "tailwind-merge";

interface SocialLinkIconType {
  href: string;
  className: string;
  Icon: IconType;
}

export function SocialLinkIcon({ Icon, className, href }: SocialLinkIconType) {
  return (
    <Link
      target="_blank"
      href={href}
      className={twMerge(
        "h-16 flex justify-center border-cyan-600/20 bg-background items-center duration-500 transition-colors w-16 hover:border-white border-2 rounded-full",
        className
      )}
    >
      <Icon color="#fff" width={30} height={30} />
    </Link>
  );
}
