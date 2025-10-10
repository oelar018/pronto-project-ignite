import { useState, useCallback, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import screenshot1 from "@/assets/screenshot-1.png";
import voiceCover from "@/assets/voice-cover.png";
import triggersCover from "@/assets/triggers-cover.png";

const ScreenshotCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const slides = [
    {
      id: 1,
      image: screenshot1,
      title: "Intuitively Simple. Exceptionally Precise.",
      description:
        "Users only tap Suggest and Neura AI scans the entire conversation and tells you exactly what to say, where responses are streamed in digestible chunks.",
    },
    {
      id: 2,
      image: voiceCover,
      title: "Answers, Streamed to Your Thoughts.",
      description:
        "voice mode listens in real time, processing every word and delivering precise, context-aware insights directly to you; no screens, no typing, just pure cognitive flow",
    },
    {
      id: 3,
      image: triggersCover,
      title: "Your Words. Your Triggers.",
      description:
        "Define your own wake words—simple, natural cues that instantly activate Neura when you need a thought, fact, or response.",
    },
  ];

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <div className="w-full max-w-[1400px] mx-auto pt-0 pb-4">
      <Carousel className="w-full relative overflow-visible" opts={{ align: "start", loop: true }} setApi={setApi}>
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="grid md:grid-cols-2 gap-6 items-start px-8 py-4">
                {/* Image Section */}
                <div className="flex justify-center items-center pt-2 pb-8">
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
                  <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(16,185,129,0.5)]">
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
        <CarouselPrevious className="-left-6 md:-left-12 h-14 w-14 bg-gradient-to-r from-purple-500 to-pink-500 border-0 hover:from-purple-600 hover:to-pink-600 shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:shadow-[0_0_50px_rgba(168,85,247,0.8)] hover:scale-110 transition-all" />
        <CarouselNext className="-right-6 md:-right-12 h-14 w-14 bg-gradient-to-r from-cyan-500 to-blue-500 border-0 hover:from-cyan-600 hover:to-blue-600 shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:shadow-[0_0_50px_rgba(6,182,212,0.8)] hover:scale-110 transition-all" />
      </Carousel>
      
      {/* Dot Navigation */}
      <div className="flex justify-center gap-3 mt-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`rounded-full transition-all ${
              index === current
                ? "w-8 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-[0_0_15px_rgba(6,182,212,0.6)]"
                : "w-3 h-3 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ScreenshotCarousel;
