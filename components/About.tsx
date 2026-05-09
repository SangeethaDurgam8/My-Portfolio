import SectionLabel from "./ui/SectionLabel";
import Reveal from "./ui/Reveal";

export default function About() {
  return (
    <section id="about" className="border-t hairline py-28 md:py-40">
      <div className="max-w-page mx-auto px-6 md:px-10">
        
        <Reveal>
          <h2 className="serif text-[42px] md:text-[64px] leading-none tracking-tight">
            About
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-12 gap-10 md:gap-16">
          
          <Reveal
  className="md:col-span-10"
  delay={0.05}
>
              <div className="space-y-7 text-[17px] md:text-[19px] leading-[1.9] text-ink/80">
            
              
              <p>
                I’m Sangeetha, an IIT Bombay BS Math student graduating in 2026.
              </p>

              <p>
                I enjoy learning from different perspectives, improving systems by constantly looking for ways to make things
                simpler, clearer, and more effective.
              </p>

              <p>
                Outside academics and projects, I spend time reading,researching about startups and business models, playing volleyball,
                and taking long unplanned walks 
              </p>

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}