"use client";

import { Breadcrumb } from "@/design-system/components/Breadcrumb";
import { URLS } from "@/shared/urls";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  BrandFacebook,
  BrandLinkedin,
  BrandWhatsapp,
  Mail,
  MapPin,
  Phone,
} from "tabler-icons-react";
import { ContactMeForm } from "../components";

export function ContactMePageContent() {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "kareemgmal7755@gmail.com",
      href: "mailto:kareemgmal7755@gmail.com",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+20 115 114 8634",
      href: "tel:+201151148634",
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Cairo, Egypt",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <BrandFacebook size={24} />,
      href: "https://www.facebook.com/kareem.gamal.3344913",
      color: "hover:bg-blue-600",
    },
    {
      icon: <BrandLinkedin size={24} />,
      href: "https://www.linkedin.com/in/kareem-gamal-1889a8230/",
      color: "hover:bg-indigo-600",
    },
    {
      icon: <BrandWhatsapp size={24} />,
      href: "https://wa.me/201151148634",
      color: "hover:bg-emerald-600",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Breadcrumb
        title="Contact Me"
        items={[{ title: "Home", url: URLS.home }, { title: "Contact Me" }]}
      />

      <div className="container px-4 py-24">
        <div className="grid xl:grid-cols-2 gap-16 lg:gap-12 items-start">
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-4xl 2xl:text-6xl font-black text-white uppercase leading-none">
                Let's Build Something{" "}
                <span className="text-cyan-500 italic">Grand</span> Together
              </h2>
              <p className="text-xl text-white/50 max-w-md leading-relaxed">
                Have a project in mind or just want to say hi? I'm always open
                to discussing new projects, creative ideas or opportunities to
                be part of your visions.
              </p>
            </div>

            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <Link
                  key={index}
                  href={info.href}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-500">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-1">
                      {info.title}
                    </h3>
                    <p className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="pt-8 space-y-6">
              <h3 className="text-sm font-bold text-white uppercase tracking-[0.3em]">
                Follow Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all duration-300 ${social.color}`}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 blur-3xl -z-10 rounded-[3rem]" />
            <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/5 p-8 2xl:p-12 rounded-[2.5rem] shadow-2xl">
              <div className="mb-10">
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
                  Send me a message
                </h3>
                <div className="h-1 w-12 bg-cyan-500 rounded-full" />
              </div>
              <ContactMeForm />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
