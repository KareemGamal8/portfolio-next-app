"use client";

import { motion } from "framer-motion";
import { Code, DeviceLaptop, Rocket, User } from "tabler-icons-react";
import { SectionTitle } from "./SectionTitle";

export function AboutMe() {
  const stats = [
    {
      label: "Years Experience",
      value: "3+",
      icon: <Code className="text-cyan-500" />,
    },
    {
      label: "Projects Completed",
      value: "20+",
      icon: <Rocket className="text-blue-500" />,
    },
    {
      label: "Happy Clients",
      value: "10+",
      icon: <User className="text-purple-500" />,
    },
    {
      label: "Technologies",
      value: "15+",
      icon: <DeviceLaptop className="text-emerald-500" />,
    },
  ];

  return (
    <section className="container py-12">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <SectionTitle title="Get to know me" />
          <div className="flex flex-col gap-6 text-white font-medium font-sans leading-relaxed text-lg">
            <p>
              Hey, I am{" "}
              <span className="text-white font-bold border-b-2 border-cyan-500">
                Kareem!
              </span>{" "}
              I am a highly motivated Front-End Developer with over{" "}
              <span className="text-white font-semibold">two years</span> of
              hands-on experience in creating visually compelling and intuitive
              user interfaces.
            </p>
            <p>
              My expertise lies in translating{" "}
              <span className="text-cyan-400">complex design concepts</span>{" "}
              into clean, efficient, and scalable code. I take pride in crafting
              pixel-perfect, responsive designs that function flawlessly across
              all devices and platforms.
            </p>
            <p>
              As a proactive problem solver, I enjoy tackling challenges head-on
              and continuously seek opportunities to{" "}
              <span className="text-blue-400">
                optimize website performance
              </span>{" "}
              and implement best coding practices. I thrive in collaborative
              environments where innovation is valued.
            </p>
            <p className="p-4 bg-white/5 border-l-4 border-cyan-500 rounded-r-xl italic">
              &quot;I am currently seeking a growth-oriented position where I can
              leverage my technical proficiency to deliver exceptional digital
              experiences.&quot;
            </p>
          </div>
        </motion.div>
        {/* Right Side: Stats Grid */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
              }}
              className="p-8 bg-white/5 border border-white/10 rounded-3xl flex flex-col items-center text-center gap-4 transition-all"
            >
              <div className="p-4 bg-zinc-900 rounded-2xl shadow-inner">
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-black text-white">
                  {stat.value}
                </span>
                <span className="text-sm font-medium text-zinc-500 uppercase tracking-widest mt-1">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
          {/* Decorative element or secondary info */}
          <div className="col-span-2 p-6 border border-dashed border-white/10 rounded-3xl mt-4 flex items-center justify-center gap-4 text-white font-semibold">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
            <span className="text-sm font-sans uppercase tracking-[0.2em]">
              Available for new opportunities
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
