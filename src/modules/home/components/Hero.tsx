import { BlurText } from "@/design-system/components";
import user from "@shared/assets/kareem.png";
import Image from "next/image";
import SocialLinkIcons from "./SocialLinkIcons";

export function Hero() {
  return (
    <section className="container">
      <div className="grid my-16 gap-16 lg:grid-cols-12 items-center font-alex font-bold">
        <div className="flex  lg:col-span-7 text-white flex-col max-lg:items-center">
          <BlurText
            text=" Hello! I am"
            animateBy="words"
            delay={100}
            direction="top"
            className="max-lg:text-center text-xl font-semibold"
          />
          <BlurText
            text="Kareem Gamal"
            animateBy="words"
            delay={200}
            direction="top"
            className="relative uppercase xl:text-[5.5rem] bg-gradient-to-r from-cyan-700 to-blue-700/50 bg-clip-text text-transparent w-fit overflow-hidden max-sm:text-[2.6rem] max-lg:text-7xl max-xl:text-6xl"
          />
          <BlurText
            text="Front-end Developer"
            animateBy="words"
            delay={300}
            direction="top"
            className="font-sans text-white text-2xl tracking-wide"
          />
        </div>
        <div className="flex items-center justify-center lg:col-span-5">
          <div className="border-4 w-fit p-12 relative rounded-full border-cyan-600/20 animate-fade justify-center max-lg:items-center animate-once animate-duration-3000">
            <Image
              loading="lazy"
              src={user}
              alt="Kareem"
              className="w-[22rem]"
            />
            <SocialLinkIcons />
          </div>
        </div>
      </div>
    </section>
  );
}
