import BackgroundScene from './Background3d';
import config from '@/config';

const Hero = () => {
  return (
    <section className="relative max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="absolute inset-0 z-0">
        <BackgroundScene />
      </div>
      <div className="relative z-10 flex flex-col gap-10 lg:gap-14 items-center justify-center text-center">
        <h2 className="max-w-3xl mx-auto font-extrabold text-4xl md:text-5xl tracking-tight mb-6 md:mb-8">
          Grow Fresh Veggies in your own backyard
        </h2>
        <button className="btn btn-primary btn-wide">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Hero;
