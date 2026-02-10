import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const DonationCTA = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container-max text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
          Your Generosity Saves Lives
        </h2>
        <p className="text-base md:text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8 leading-relaxed">
          Every donation helps us provide blood transfusions, medications, and support to thalassemia patients who need it most.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="accent" size="lg" className="text-base">
            <Heart className="w-5 h-5" />
            Donate Now
          </Button>
          <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base">
            Become a Volunteer
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DonationCTA;
