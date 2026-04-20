"use client";

import { BlurText } from "@/design-system/components";
import { URLS } from "@/shared/urls";
import user from "@shared/assets/kareem.png";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SocialLinkIcons from "./SocialLinkIcons";
import Link from "next/link";

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
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] -z-10" />

      <div className="container relative">
        <div className="grid my-16 gap-16 lg:grid-cols-12 max-xl:text-center items-center font-alex font-bold">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex lg:col-span-7 text-white flex-col max-xl:items-center"
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
                className="relative uppercase max-xl:text-center xl:text-[5.5rem] bg-gradient-to-r from-white via-cyan-400 to-blue-500 bg-clip-text text-transparent w-fit overflow-hidden max-sm:text-[2.6rem] max-xl:text-7xl drop-shadow-sm py-2"
                containerClassName="max-xl:justify-center"
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
            <div className="relative group">
              {/* Animated rings around the image */}
              <div className="absolute -z-10 inset-0 border-2 border-cyan-500/20 rounded-full scale-110 animate-[ping_3s_linear_infinite]" />
              <div className="absolute -z-10 inset-0 border border-blue-500/20 rounded-full scale-125 animate-[ping_4s_linear_infinite_reverse]" />
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="border-4 w-fit p-4 relative rounded-full border-white/5 bg-white/5 backdrop-blur-sm shadow-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  loading="lazy"
                  src={user}
                  alt="Kareem"
                  className="w-[20rem] xl:w-[24rem] rounded-full grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
              <div className="absolute -bottom-0 max-md:bottom-2 left-1/2 -translate-x-1/2 scale-110">
                <SocialLinkIcons />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
