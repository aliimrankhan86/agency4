import Icon from "@/components/Icon";
import { members } from "@/mocks/members";
import Image from "next/image";

const Team = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate font-figtree font-medium text-xs tracking-[.12em] uppercase text-neutral-950">
            MEET THE TEAM
          </div>
          <h1 className="animate mt-4 font-onest text-5xl font-medium leading-[1.2] text-neutral-950 lg:text-7xl">
            The Visionaries Behind Voltz Motors
          </h1>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3 lg:mt-20">
          {members.slice(0, 3).map((item) => (
            <div key={item.name}>
              <div className="group overflow-hidden animate relative w-full h-96">
                <Image
                  src={item.image}
                  alt="Driving Image"
                  objectFit="cover"
                  layout="fill"
                />

                <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.socials?.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center border border-white/12 rounded-full text-white hover:bg-lime-300 hover:text-black transition-colors duration-300"
                    >
                      <Icon name={social.name} weight="fill" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-6 font-onest font-medium text-xl text-neutral-950">
                {item.name}
              </div>
              <div className="mt-2 font-figtree text-sm text-neutral-500">
                {item.position}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
