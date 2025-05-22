"use client";

import { useEffect, useState } from "react";
import { Vehicle as VehicleType } from "@/types/vehicle";
import Button from "../Button";

type Vehicle = {
  vehicle: VehicleType;
  detailPage?: boolean;
};

const Vehicle = ({ vehicle, detailPage }: Vehicle) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!detailPage) return;

    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % vehicle.images.length,
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [detailPage, vehicle.images.length]);

  // Show first image if not animating
  const imageToShow = detailPage
    ? vehicle.images[currentImageIndex]
    : vehicle.images[0];

  return (
    <div className="relative h-[600px] overflow-hidden lg:h-[700px]">
      <div className="absolute inset-0 z-0">
        {detailPage ? (
          vehicle.images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                index === currentImageIndex
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0"
              }`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center z-10"
            style={{ backgroundImage: `url(${imageToShow})` }}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/0 to-transparent z-20" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

      <div className="relative z-20 flex h-full flex-col items-center justify-end py-12 px-6 lg:py-20">
        <div className="animate font-figtree font-medium text-xs tracking-[.12em] uppercase text-lime-300">
          VEHICLE — {vehicle.vehicle}
        </div>
        <h2 className="mt-4 font-onest text-4xl font-medium leading-[1.2] text-white lg:text-5xl">
          {vehicle.name}
        </h2>
        <p className="mt-4 font-figtree text-base text-white/80">
          {vehicle.description}
        </p>

        {!detailPage && (
          <div className="hidden mt-8 grid-cols-2 gap-y-6 lg:grid lg:grid-flow-col-dense">
            <div className="animate text-center border-r px-6 border-white/12 lg:px-8">
              <div className="font-onest text-xl font-medium text-white">
                {vehicle.range}
              </div>
              <div className="mt-2 font-figtree text-sm text-white">Range</div>
            </div>

            <div className="animate text-center px-6 lg:px-8">
              <div className="font-onest text-xl font-medium text-white">
                {vehicle.top_speed}
              </div>
              <div className="mt-2 font-figtree text-sm text-white">
                Top Speed
              </div>
            </div>

            <div className="animate col-span-2 text-center border-t pt-6 border-white/12 lg:border-l lg:border-t-0 lg:pt-0 lg:pl-8">
              <div className="font-onest text-xl font-medium text-white">
                {vehicle.mph}
              </div>
              <div className="mt-2 font-figtree text-sm text-white">
                0-60 mph
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 flex items-center gap-x-4">
          {detailPage ? (
            <Button as="link" href="/contact" primary>
              Order Now
            </Button>
          ) : (
            <Button as="link" href={`/vehicles/${vehicle.slug}`} primary>
              View Details
            </Button>
          )}

          {!detailPage && <Button secondary>Order Now</Button>}
        </div>
      </div>
    </div>
  );
};

export default Vehicle;
