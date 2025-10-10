import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { pricing_plans } from "@/mocks/pricing";

const Plans = () => {
  return (
    <div className="overflow-hidden bg-neutral-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="animate font-figtree font-medium text-xs tracking-[.12em] uppercase text-neutral-950">
            PRICING PLANS
          </div>
          <h1 className="animate mt-4 font-onest text-5xl font-medium leading-[1.2] text-neutral-950 lg:text-7xl">
            Plans That Move You Forward
          </h1>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3 lg:mt-20">
          {pricing_plans.map((item) => {
            const enterprise = item.label === "Enterprise Plan";

            return (
              <div
                key={item.label}
                className={`p-10 ${
                  enterprise
                    ? "bg-neutral-900 text-white"
                    : "bg-white text-neutral-950"
                }`}
              >
                <div
                  className={`font-onest font-medium text-xl ${enterprise ? "text-white" : "text-neutral-950"} `}
                >
                  {item.label}
                </div>

                <div className="mt-8 flex items-center gap-2">
                  <div
                    className={`font-onest font-medium text-5xl ${enterprise ? "text-white" : "text-neutral-950"} `}
                  >
                    ${item.price}
                  </div>
                  <div
                    className={`font-figtree text-sm ${enterprise ? "text-blue-500" : "text-neutral-500"}`}
                  >
                    / MONTH
                  </div>
                </div>

                <div
                  className={`mt-4 font-figtree text-base ${enterprise ? "text-neutral-400" : "text-neutral-500"}`}
                >
                  {item.description}
                </div>

                <div
                  className={`mt-8 w-full h-px ${enterprise ? "bg-neutral-800" : "bg-neutral-200"}`}
                />

                <div
                  className={`mt-8 font-figtree text-sm ${enterprise ? "text-white" : "text-neutral-950"} uppercase`}
                >
                  What's Included?
                </div>

                <div className="mt-8 flex flex-col gap-4">
                  {item.benefits.map((item) => (
                    <div key={item.name} className="flex items-center gap-3">
                      <Icon
                        name="check"
                        className={`${enterprise ? "text-blue-500" : "text-neutral-950"}`}
                      />
                      <div
                        className={`font-figtree text-sm ${enterprise ? "text-neutral-400" : "text-neutral-500"}`}
                      >
                        {item.name}
                      </div>
                    </div>
                  ))}
                </div>

                {enterprise ? (
                  <Button primary className="w-full mt-8">
                    {item.button}
                  </Button>
                ) : (
                  <Button secondary className="w-full mt-8">
                    {item.button}
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Plans;
