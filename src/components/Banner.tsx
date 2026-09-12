import BannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="w-full px-6 pt-2 pb-4 md:px-12 md:pt-6 md:pb-12 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 md:flex-row md:gap-16">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            <span className="block text-gray-900">Build Your Ideal</span>
            <span className="block whitespace-nowrap text-gradient-brand">
              Development Stack
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg md:mx-0">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row md:justify-start items-center justify-center">
            <button className="rounded-md bg-gradient-brand px-4 py-2 font-semibold text-white transition hover:opacity-90">
              Explore Technologies
            </button>
            <button className="rounded-md border border-gray-300 px-8 py-2 font-semibold text-gray-800 transition hover:bg-gray-5">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex flex-1 justify-center">
          <img
            src={BannerImage}
            alt=""
            className="w-full max-w-sm object-contain transition-transform duration-300 hover:scale-105 md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
