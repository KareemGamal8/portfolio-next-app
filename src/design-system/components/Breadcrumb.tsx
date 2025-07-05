import { SectionTitle } from "@/modules/home/components";
import Link from "next/link";
import { Fragment } from "react";
import { LineDashed } from "tabler-icons-react";

type BreadcrumbItem = {
  title: string;
  url?: string;
};

type BreadcrumbProps = { title: string; items: BreadcrumbItem[] };

export function Breadcrumb({ items, title }: BreadcrumbProps) {
  return (
    <div className="bg-secondary mb-12 animate-pulse animate-twice animate-duration-1000 animate-ease-in animate-normal">
      <div className="container">
        <div className="flex text-white gap-8 flex-col items-center justify-center py-32">
          <SectionTitle title={title} className="!text-3xl" />
          <nav className="flex items-end-safe gap-4">
            {items.map((item, index) => (
              <Fragment key={index}>
                {item.url ? (
                  <Link
                    className="text-xl font-semibold nav-link relative"
                    href={item.url as string}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <span className="text-oslo-grey text-xl font-semibold">
                    {item.title}
                  </span>
                )}
                {items.length !== index + 1 && <LineDashed />}
              </Fragment>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
