"use client";

import AffixButton from "@/design-system/components/AffixButton";
import { SocialLinkIcon } from "@/modules/home/components";
import { URLS } from "@/shared/urls";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, PhoneCall } from "tabler-icons-react";
import { footerSocialLinksData, navLinks } from "../../data";
import { Copyrights } from "./Copyrights";

export function Footer() {
  return (
    <footer className="relative mt-24 pt-20 pb-10 bg-background border-t border-white/5 overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-600/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[100px] -z-10" />
      {/* <AffixButton /> */}
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <Link
                href={URLS.home}
                className="text-white uppercase font-black text-3xl tracking-tighter group flex items-center gap-1"
              >
                Kareem
                <span className="text-cyan-500 group-hover:text-blue-500 transition-colors">
                  .
                </span>
                g
              </Link>
              <p className="text-white/60 font-medium text-lg leading-relaxed max-w-md font-sans">
                Crafting high-performance websites with modern tech stacks.
                Focused on speed, accessibility, and exceptional user
                experiences.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              {footerSocialLinksData.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <SocialLinkIcon
                    className={`${link.className} h-12 w-12 bg-white/5 hover:bg-cyan-600 border border-white/10 hover:border-cyan-500 transition-all rounded-2xl flex items-center justify-center`}
                    Icon={link.Icon}
                    href={link.href}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <h3 className="text-white uppercase font-bold text-sm tracking-[0.2em] opacity-50">
              Navigation
            </h3>
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className="group flex items-center gap-2 text-white font-semibold text-lg hover:text-cyan-400 transition-colors"
                >
                  <ArrowRight
                    size={18}
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-500"
                  />
                  {link.text}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <h3 className="text-white uppercase font-bold text-sm tracking-[0.2em] opacity-50">
              Get in Touch
            </h3>
            <div className="flex flex-col gap-4">
              <Link
                href="mailto:kareemgmal7755@gmail.com"
                className="group flex flex-col p-6 bg-white/5 border border-white/10 rounded-3xl hover:border-cyan-500/50 hover:bg-white/[0.08] transition-all"
              >
                <div className="flex items-center gap-3 text-cyan-400 mb-2">
                  <Mail size={20} />
                  <span className="text-sm uppercase font-bold tracking-widest">
                    Email Me
                  </span>
                </div>
                <span className="text-white font-bold text-lg break-all">
                  kareemgmal7755@gmail.com
                </span>
              </Link>

              <Link
                href="tel:+201151148634"
                className="group flex flex-col p-6 bg-white/5 border border-white/10 rounded-3xl hover:border-blue-500/50 hover:bg-white/[0.08] transition-all"
              >
                <div className="flex items-center gap-3 text-blue-400 mb-2">
                  <PhoneCall size={20} />
                  <span className="text-sm uppercase font-bold tracking-widest">
                    Call Me
                  </span>
                </div>
                <span className="text-white font-bold text-lg">
                  +201151148634
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center">
          <Copyrights />
        </div>
      </div>
    </footer>
  );
}
