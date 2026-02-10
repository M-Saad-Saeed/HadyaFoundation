import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";
import heroImage from "@/assets/004-scaled.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Children and families supported by Hadya Foundation" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/30" />
      </div>

      <div className="relative container-max section-padding">
        <div className="max-w-2xl py-10 md:py-24">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-xs font-semibold tracking-wide uppercase mb-6 border border-primary/30">
            Fighting Thalassemia Together
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-background mb-5">
            Because Every Child Deserves a <span className="text-accent">Chance to Live</span>
          </h1>

          <p className="text-lg md:text-xl text-background/75 leading-relaxed mb-10 max-w-xl">
            Hadya Foundation provides life-saving treatment, medicine, and hope to thalassemia patients and their families across Pakistan.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="accent" size="lg" className="text-base px-8">
              <Heart className="w-5 h-5" />
              Donate Now
            </Button>
            <Button variant="ghost" size="lg" className="text-background hover:bg-background/10 text-base">
              Learn About Thalassemia
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
