import { twMerge } from "tailwind-merge";

export function SectionTitle({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <h3
      className={twMerge(
        "text-white text-center uppercase font-extrabold text-2xl",
        className
      )}
    >
      {`<> ${title} </>`}
    </h3>
  );
}
