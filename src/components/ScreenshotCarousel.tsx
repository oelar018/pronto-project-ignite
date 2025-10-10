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
    <div className="w-full max-w-7xl mx-auto py-16">
      <Carousel className="w-full" opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="grid md:grid-cols-2 gap-12 items-start p-8">
                {/* Image Section */}
                <div className="flex justify-center items-center">
                  <div className="relative w-full max-w-xs">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-auto drop-shadow-2xl"
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
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};

export default ScreenshotCarousel;
