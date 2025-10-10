import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import screenshot1 from "@/assets/screenshot-1.png";

const ScreenshotCarousel = () => {
  const slides = [
    {
      id: 1,
      image: screenshot1,
      title: "Intuitively Simple. Exceptionally Precise.",
      description:
        "Users only tap Suggest and Neura AI scans the entire conversation and tells you exactly what to say, where responses are streamed in digestible chunks.",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-4">
      <Carousel className="w-full relative" opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="grid md:grid-cols-2 gap-12 items-start p-8">
                {/* Image Section */}
                <div className="flex justify-center items-center">
                  <div className="relative w-full max-w-[280px]">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-auto drop-shadow-[0_0_40px_rgba(6,182,212,0.4)]"
                    />
                  </div>
                </div>

                {/* Text Section */}
                <div className="flex flex-col justify-start pt-0 md:pt-4">
                  <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                    {slide.title}
                  </h3>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-6 md:-left-12 h-12 w-12 bg-gradient-to-r from-purple-500 to-pink-500 border-0 hover:from-purple-600 hover:to-pink-600 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all" />
        <CarouselNext className="-right-6 md:-right-12 h-12 w-12 bg-gradient-to-r from-cyan-500 to-blue-500 border-0 hover:from-cyan-600 hover:to-blue-600 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all" />
      </Carousel>
    </div>
  );
};

export default ScreenshotCarousel;
