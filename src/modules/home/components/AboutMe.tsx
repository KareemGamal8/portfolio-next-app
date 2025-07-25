import { SectionTitle } from "./SectionTitle";

export function AboutMe() {
  return (
    <div className="container">
      <div className="flex flex-col gap-6 animate-pulse animate-twice animate-ease-in-out">
        <SectionTitle title="Get to know me" />
        <div className="flex flex-col gap-4 text-white font-medium">
          <p>
            Hey, I am Kareem! I am a highly skilled and motivated Front-End
            Developer with over two years of hands-on experience in creating
            visually compelling and intuitive user interfaces. My expertise lies
            in translating complex design concepts into clean, efficient, and
            scalable code using modern web technologies such as HTML5, CSS3,
            JavaScript, TypeScript, React, Next JS, Remix, and various front-end
            frameworks and libraries.
          </p>
          <p>
            I take pride in crafting pixel-perfect and responsive designs that
            function flawlessly across different devices, platforms, and
            browsers. I have a strong passion for user-centric design and always
            strive to deliver seamless and engaging user experiences.
          </p>
          <p>
            I take pride in crafting pixel-perfect and responsive designs that
            function flawlessly across different devices, platforms, and
            browsers. I have a strong passion for user-centric design and always
            strive to deliver seamless and engaging user experiences.
          </p>
          <p>
            As a proactive problem solver, I enjoy tackling challenges head-on
            and continuously seek opportunities to optimize website performance,
            enhance accessibility, and implement best coding practices. I thrive
            in fast-paced environments where collaboration and innovation are
            valued.
          </p>
          <p>
            I am currently seeking a challenging and growth-oriented position
            that allows me to leverage my technical proficiency, creativity, and
            passion for front-end development to contribute to meaningful
            projects and deliver exceptional digital experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
