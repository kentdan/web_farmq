import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
      <h2 className="max-w-3xl mx-auto font-extrabold text-4xl md:text-5xl tracking-tight mb-6 md:mb-8">
          Grow Fresh Veggies in your own backyard
        </h2>
        <p className="max-w-xl mx-auto text-lg opacity-90 leading-relaxed mb-12 md:mb-20">
        Ready to grow? Revolutionize your garden with advanced agriculture designed for efficiency or get consultation from our experts for your veggies or fruit garden.
        </p>
          {/* <button className="btn btn-primary btn-wide items-center">
            Get {config.appName}
          </button> */}
          <button className="btn btn-primary btn-wide items-center">
            contact us
          </button>
          {/* i want to make image */}
      </div>
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
      <h2 className="max-w-3xl mx-auto font-extrabold text-4xl md:text-5xl tracking-tight mb-6 md:mb-8">
          GROW SMARTER AND FASTER, NOT HARDER!!!

        </h2>
        <p className="max-w-xl mx-auto text-lg opacity-90 leading-relaxed mb-12 md:mb-20">
        Revolutionize your garden with advanced agriculture designed for efficiency and affordability. 
        </p>
          {/* <button className="btn btn-primary btn-wide items-center">
            Get {config.appName}
          </button> */}
          <button className="btn btn-primary btn-wide items-center">
            contact us
          </button>
          {/* i want to make image */}
      </div>
    </section>
    
    

  );
};

export default Hero;
