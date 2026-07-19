"use client";

import { BlurText } from "@/design-system/components";
import { URLS } from "@/shared/urls";
import user from "@shared/assets/image.png";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Hero() {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative flex items-center py-12 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] -z-10" />

      <div className="container relative">
        <div className="grid my-16 gap-16 lg:grid-cols-12 text-center items-center  font-alex font-bold">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex lg:col-span-7 text-white flex-col items-start max-lg:items-center"
          >
            <motion.div variants={itemVariants as Variants}>
              <BlurText
                text="Hello! I am"
                animateBy="words"
                delay={100}
                direction="top"
                className="max-xl:text-center text-xl font-semibold text-cyan-400"
                containerClassName="max-xl:justify-center"
              />
            </motion.div>

            <motion.div variants={itemVariants as Variants}>
              <BlurText
                text="Kareem Gamal"
                animateBy="words"
                delay={200}
                direction="top"
                className="relative uppercase xl:text-[5.5rem] bg-gradient-to-r from-white via-cyan-400 to-blue-500 bg-clip-text text-transparent w-fit overflow-hidden max-sm:text-[2.6rem] max-xl:text-7xl drop-shadow-sm py-2"
                containerClassName="max-lg:justify-center"
              />
            </motion.div>

            <motion.div variants={itemVariants as Variants}>
              <BlurText
                text="Front-end Developer"
                animateBy="words"
                delay={300}
                direction="top"
                className="font-sans text-white/80 text-2xl tracking-wide mt-2 max-xl:text-center"
                containerClassName="max-xl:justify-center"
              />
            </motion.div>

            <motion.div
              variants={itemVariants as Variants}
              className="mt-10 flex gap-4 max-xl:justify-center"
            >
              <Link
                href={URLS.projects}
                className="lg:px-8 px-4 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-sans font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-cyan-900/20"
              >
                View My Work
              </Link>
              <Link
                href={URLS.contactUs}
                className="lg:px-8 px-4 py-3 border border-white/10 hover:bg-white/5 text-white rounded-full font-sans font-semibold transition-all hover:scale-105 active:scale-95"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="flex items-center justify-center lg:col-span-5"
          >
            <div className="relative group w-full max-w-[500px] scale-110 sm:scale-125 lg:scale-[1.35] flex justify-center mt-10 lg:mt-0">
              {/* Glowing gradient background behind the image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full blur-[80px] opacity-30 group-hover:opacity-60 transition-opacity duration-700 animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]" />

              {/* Decorative rings behind */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-cyan-500/30 rounded-full group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] border border-blue-500/20 rounded-full group-hover:scale-[1.02] transition-transform duration-700 delay-100" />


              <div className="relative [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]">
                <Image
                  priority
                  src={user}
                  alt="Kareem"
                  className="w-full h-auto object-contain grayscale-[20%] hover:grayscale-0 transition-all duration-500 drop-shadow-[0_10px_20px_rgba(6,182,212,0.3)] group-hover:drop-shadow-[0_15px_30px_rgba(6,182,212,0.5)]"
                />
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
