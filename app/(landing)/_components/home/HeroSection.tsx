import { FiFastForward } from "react-icons/fi";
import Button from "../ui/Button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="container mx-auto min-h-[90vh] flex mb-10"
    >
      <div className="relative self-center">
        <Image
          src="/images/img-basketball.png"
          alt="basketball"
          width={432}
          height={423}
          className="absolute -top-5 -left-10 grayscale pointer-events-none"
        />

        <div className="relative ml-26 w-full mt-10">
          <div className="text-primary font-extralight italic bg-primary/11 w-fit px-4 py-1.5 rounded-full">
            Friday Sale, 50%
          </div>
          <h1 className="font-extrabold text-[95px] italic leading-26 bg-linear-to-b from-black to-[#979797D1] bg-clip-text text-transparent">
            WEAR YOUR <br /> TOP-QUALITY <br /> SPORTSWEAR
          </h1>
          <p className="w-1/2 mt-4 pr-20 text-[15px]">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do. Premium fabrics. Unmatched comfort.
            Limitless motion.
          </p>
          <div className="flex gap-5 mt-8.25">
            <Button>
              Explore More <FiFastForward />
            </Button>
            <Button variant="ghost">
              Watch Video
              <Image
                src="/images/icon-play-video.svg"
                alt="icon play video"
                width={29}
                height={29}
                className="pointer-events-none"
              />
            </Button>
          </div>
        </div>

        <Image
          src="/images/img-hero.png"
          alt="Hero Image"
          width={623}
          height={687}
          className="absolute -right-5 top-1/2 -translate-y-1/2 w-[155.75 h-171.75 pointer-events-none"
        />
      </div>

      <Image
        src="/images/img-ornament-hero.svg"
        alt="ornament"
        width={383}
        height={383}
        className="absolute top-100 -right-50 -translate-y-1/2 pointer-events-none"
      />
    </section>
  );
};

export default HeroSection;
