import { ArrowRight, Section } from "lucide-react";

const EventTypeSection = () => {
  return (
    <section className="section-padding bg-black ">
      <div className="max-w-7xl mx-auto mb-24">
        {/* title */}
        <div className="mb-20 flex justify-between items-end">
          {/* text */}
          <div>
            <h2 className="heading-2 clash-display grad1 from-zinc-50 max-w-2xl">
              Perfect Ride for Every Occasion
            </h2>
            <p className="text-zinc-400 max-w-md">
              From weddings to corporate events, we have the perfect vehicle for
              every occasion.
            </p>
          </div>
          {/* button */}
          <button className="hidden md:hidden bg-blue-300 text-zinc-800 py-3 px-5 rounded-full 
          cursor-pointer hover:bg-transparent border border-transparent hover:border-zinc-100 
          transition-all duration-200 ease-out hover:text-zinc-200 clash-dsiplay flex items-center gap-2 h-fit lg:centered-row gap-2 ">
            See all <ArrowRight className="w-8 text-sm" />
          </button>
        </div>

        {/* grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">{/* car cards */}</div>
      </div>
    </section>
  );
};

export default EventTypeSection;
