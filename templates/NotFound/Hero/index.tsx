import Button from "@/components/Button";

const Hero = () => {
  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/not-found.webp')" }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="mx-auto max-w-7xl w-full px-6 pt-56 pb-24 z-10">
        <div className="flex flex-col items-center text-center max-w-lg mx-auto">
          <div className="font-figtree font-medium text-xs tracking-[.12em] uppercase text-blue-500">
            ERROR
          </div>
          <div className="mt-6 px-2 font-onest text-white font-medium text-8xl leading-none lg:text-[220px]">
            404
          </div>

          <div className="mt-6 font-onest font-medium text-3xl text-white lg:text-5xl">
            Oops! Page Not Found
          </div>

          <div className="mt-4 font-figtree text-base text-white">
            We couldn't find the page you were looking for. But don't worry—our
            journey is just getting started!
          </div>
          <div className="mt-8 w-full lg:w-auto">
            <Button as="link" href="/" primary className="w-full">
              Back To Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
