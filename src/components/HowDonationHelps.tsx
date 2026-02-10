import { Heart, Package, HandHeart } from "lucide-react";

const steps = [
  {
    icon: <Heart className="w-7 h-7" />,
    step: "01",
    title: "You Donate",
    description: "Choose an amount that fits your budget. Every contribution matters, big or small.",
  },
  {
    icon: <Package className="w-7 h-7" />,
    step: "02",
    title: "We Provide Care",
    description: "Your donation funds blood transfusions, iron chelation medicine, and regular checkups.",
  },
  {
    icon: <HandHeart className="w-7 h-7" />,
    step: "03",
    title: "Lives Are Saved",
    description: "Patients receive ongoing treatment and families gain hope for a healthier future.",
  },
];

const HowDonationHelps = () => {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">Transparency</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">How Your Donation Helps</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            A simple, transparent process from your generosity to real impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((s, i) => (
            <div key={s.step} className="relative text-center group">
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px border-t-2 border-dashed border-border" />
              )}

              <div className="relative z-10 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                {s.icon}
              </div>
              <span className="text-xs font-extrabold text-primary/40 uppercase tracking-widest block mb-2">Step {s.step}</span>
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowDonationHelps;
