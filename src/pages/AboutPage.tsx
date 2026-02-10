import { CalendarDays, HandHeart, ShieldCheck, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import aboutUsImage from "@/assets/86.jpg";
import aboutBannerImage from "@/assets/33-scaled.jpg";

const AboutPage = () => {
  const aboutBannerY = 40;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="relative overflow-hidden border-b border-border min-h-[360px] md:min-h-[440px]">
          <div className="absolute inset-0">
            <img
              src={aboutBannerImage}
              alt="Hadya Foundation background"
              className="w-full h-full object-cover"
              style={{ objectPosition: `center ${aboutBannerY}%` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/35" />
          </div>
          <div className="relative container-max section-padding text-center flex items-center min-h-[360px] md:min-h-[440px]">
            <div className="w-full">
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">Who We Are</span>
              <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-background">About Hadya Foundation</h1>
              <p className="text-background/85 max-w-2xl mx-auto leading-relaxed">
              Since February 18, 2013, we have been supporting thalassemia fighters with free care,
              dignity, and long-term hope.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#e6e6e6]">
          <div className="container-max">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-10 items-center">
              <div className="px-1 md:px-3 lg:px-1">
                <p className="text-foreground/90 text-[clamp(0.9rem,0.2vw+0.85rem,1.1rem)] leading-[1.55] tracking-[0.002em] mb-4">
                  Hadya Foundation, established on February 18, 2013, is dedicated to helping children
                  affected by thalassemia. Initially focusing on essential medications, the foundation
                  has broadened its scope to provide comprehensive care.
                </p>
                <p className="text-foreground/90 text-[clamp(0.9rem,0.2vw+0.85rem,1.1rem)] leading-[1.55] tracking-[0.002em] mb-4">
                  Today, Hadya Foundation not only offers medication but also monthly check-ups,
                  diagnostic services, family screening for thalassemia, educational support including
                  vocational training, monthly grocery assistance, and job opportunities for thalassemia
                  fighters all free of charge.
                </p>
                <p className="text-foreground/90 text-[clamp(0.9rem,0.2vw+0.85rem,1.1rem)] leading-[1.55] tracking-[0.002em]">
                  From its humble beginning with just one patient, by the grace of Allah Almighty, the
                  foundation now proudly serves over 400 patients. Every day, we are moved by the
                  resilience of these young fighters as we strive to bring light and hope into their
                  lives, helping them not just survive, but thrive despite their challenges.
                </p>
              </div>
              <div className="relative w-full max-w-[780px] ml-auto">
                <div className="absolute -right-5 md:-right-7 -bottom-5 md:-bottom-7 h-full w-full bg-[#ff1f1f]" />
                <div className="relative overflow-hidden border border-black/10 bg-white min-h-[280px] md:min-h-[360px]">
                  <img
                    src={aboutUsImage}
                    alt="Hadya Foundation team and patients"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-muted/50">
          <div className="container-max">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-card rounded-[16px] border border-border p-6">
                <CalendarDays className="w-6 h-6 text-primary mb-3" />
                <p className="text-sm font-semibold">Established</p>
                <p className="text-sm text-muted-foreground">February 18, 2013</p>
              </div>
              <div className="bg-card rounded-[16px] border border-border p-6">
                <Users className="w-6 h-6 text-primary mb-3" />
                <p className="text-sm font-semibold">Patients Served</p>
                <p className="text-sm text-muted-foreground">400+ thalassemia fighters</p>
              </div>
              <div className="bg-card rounded-[16px] border border-border p-6">
                <ShieldCheck className="w-6 h-6 text-primary mb-3" />
                <p className="text-sm font-semibold">Care Model</p>
                <p className="text-sm text-muted-foreground">Completely free support services</p>
              </div>
              <div className="bg-card rounded-[16px] border border-border p-6">
                <HandHeart className="w-6 h-6 text-primary mb-3" />
                <p className="text-sm font-semibold">Mission</p>
                <p className="text-sm text-muted-foreground">Help children survive and thrive</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
