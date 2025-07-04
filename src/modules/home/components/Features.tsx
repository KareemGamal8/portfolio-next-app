import AnimatedCounter from "@/design-system/components/AnimatedCounter";
import { featuresData } from "../data";

export function Features() {
  return (
    <section>
      <div className="container">
        <div className="grid max-md:grid-cols-1 grid-cols-3 items-center max-md:gap-8">
          {featuresData.map((feature, index) => (
            <AnimatedCounter
              key={index}
              duration={1500}
              start={0}
              end={feature.count}
              text={feature.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
