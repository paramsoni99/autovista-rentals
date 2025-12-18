import { Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-[url(/car2.png)] bg-no-repeat bg-top">
      
        {/* container */}
        <div className="container absolute mx-auto px-6 bottom-10 z-10">

            <div className="z-50 gap-4 md:centered-row lg:gap-80">
      {/* left */}
          <div className="z-10 left">

              <div className="col max-w-3xl  mx-auto">
                  {/* sub head */}
                    <div className="mb-4">
                      <div className="bg-zinc-300/20 text-zinc-50 rounded-full px-4 py-1 text-sm font-medium inline-flex items-center clash-display">
                        <Sparkles className="h-3.5 w-3.5 mr-1"/> Your Journey, Elevated with Autovista Rentals  
                      </div>
                    </div>
                  {/* main head */}

                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold lg:leading-20 mb-6 clash-display text-nowrap tracking-tight">
                    <span className="grad1 clash-display">Premium </span> Cars, <br /> Rentals
                  </h1>
              </div>

          </div>
          {/* right */}
          
          <div className="right">
            
            <p className="text-lg z-10 text-gray-200 mb-8 max-w-md"> Unlock unparalleled freedom with our premium car rental service.
             <br className="hidden md:block"/> Experience luxury, comfort, and seamless booking on every journey.     
            </p>
            </div>        

            </div>

        </div>
  
    </div>
  );
};

export default HeroSection;